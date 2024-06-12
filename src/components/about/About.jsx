import './about.css';
import { herodescription } from '../../data/data';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const About = () => {
  const herodescriptionData = herodescription();
  const translations = useSelector(state => state.language.translations);
  const aboutRef = useRef(null);
  const listRef = useRef(null);
  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Початкова анімація заголовка та списку
    const tl = gsap.timeline();
    tl.fromTo(
      aboutRef.current,
      { x: -100, opacity: 0 },
      { x: 0, opacity: 1, duration: 2 }
    ).fromTo(
      listRef.current.children,
      { x: -100, opacity: 0, scale: 0 },
      { x: 0, opacity: 1, duration: 2, scale: 1, stagger: 0.5 },
      '-=1'
    );

    // Анімація при скролі для правого блоку (стає невидимим)
    gsap.to(rightBlockRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        scrub: true
      },
      opacity: 0,
      duration: 1
    });

    // Анімація при скролі для лівого блоку (стає невидимим)
    gsap.to(leftBlockRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        scrub: true
      },
      opacity: 0,
      duration: 2
    });
  }, []);

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
    <section className="about">
      <div className="container">
        <h2 className='about__title' ref={aboutRef}>
          <span data-i18n="abo" >Abo</span>
          <span data-i18n="utme" className="text-white">ut me</span>
        </h2>
        <div className="about__wrapper" ref={containerRef}>
          <div className="about__description" ref={leftBlockRef}>
            <ul className="about__description-list" ref={listRef}>
              <li className="about__desctiption-item" data-i18n="achievement1">{herodescriptionData.achievementList.item1}</li>
              <li className="about__desctiption-item" data-i18n="achievement2">{herodescriptionData.achievementList.item2}</li>
              <li className="about__desctiption-item" data-i18n="achievement3">{herodescriptionData.achievementList.item3}</li>
            </ul>
          </div>
          {/* <div className="about__photo" ref={rightBlockRef}>
            <img src={herodescriptionData.personalPhotoImg} alt="persona" />
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default About;
