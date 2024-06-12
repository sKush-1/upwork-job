import './Mywork.css'
import React, { useEffect, useRef, useState } from 'react';
import WorkList from './workList/WorkList';
import { useDispatch, useSelector } from 'react-redux';
import { newProjects, oldProjects } from '../../redux/actions';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Mywork = () => {

  const worksRef = useRef(null);
  const translations = useSelector(state => state.language.translations);
  const [selectedList, setSelectedList] = useState('new');

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: worksRef.current,
        start: "top 90%",
        end: "bottom 20%",
      }
    });
    tl.fromTo(worksRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
  }, []);

  const dispatch = useDispatch()
  const handleNewProjects = (event) => {
    event.preventDefault();
    setSelectedList('new');
    dispatch(newProjects());
  };
  const handleOldProjects = (event) => {
    event.preventDefault();
    setSelectedList('old');
    dispatch(oldProjects());
  };

  useEffect(() => {
    const translateElements = () => {
      const elements = document.querySelectorAll('[data-i18n]');
      elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (translations[key]) {
          el.innerHTML = translations[key];
        }
      });
    };

    translateElements();
  }, [translations]);

  return (
    <section className="work">
      <div className="container">
        <h2 className='stats__title work__title' ref={worksRef}>
          <span data-i18n="my" >My</span>
          <span data-i18n="works" className="text-white">works</span>
        </h2>
        {/* <h2 className="stats__title work__title" ref={worksRef}><span>My</span> works</h2> */}
        <div className="work__btns-wrapper">
          <a href="/" className={`bn5 ${selectedList === 'new' ? 'disabled-link' : ''}`} onClick={handleNewProjects} data-i18n="new">New</a>
          <a href="/" className={`bn5 ${selectedList === 'old' ? 'disabled-link' : ''}`} onClick={handleOldProjects} data-i18n="old">Old</a>
        </div>
        < WorkList />
      </div>
    </section>
  );
}

export default Mywork;