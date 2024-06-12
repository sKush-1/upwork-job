import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './skills.css';
import Skillslist from './skill/Skill';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Skills = () => {
  const skillsRef = useRef(null);
  const translations = useSelector(state => state.language.translations);


  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: skillsRef.current,
        start: "top 90%",
        end: "bottom 20%",
      }
    });
    tl.fromTo(skillsRef.current, { y: -100, opacity: 0 }, { y: 0, opacity: 1, duration: 2 });
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
    <section className='skills'>
      <div className="container">

        <h2 className='stats__title' ref={skillsRef}>
          <span data-i18n="сore" >Core</span>
          <span data-i18n="tech" className="text-white"> tech stack & tools</span>
        </h2>
        <div className="skills__wrapper">
          <Skillslist />
        </div>
      </div>
    </section>

  );
}

export default Skills;
