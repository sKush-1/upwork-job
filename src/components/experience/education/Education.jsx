import './education.css'
import { myExperience } from '../../../data/data';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';

const Education = () => {

  const educationRef = useRef(null);
  const educationSectionRef = useRef(null);
  const translations = useSelector(state => state.language.translations);
  

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: educationSectionRef.current,
        start: "top 90%",
        end: "bottom 20%",
      }
    });
    tl.fromTo(educationSectionRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 });
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
    <div className="experience__education" ref={educationSectionRef}>
      <h2 className='experience__education-header' ref={educationRef}>
        <span data-i18n="ed">Ed</span>
        <span data-i18n="ucation" className="text-white">ucation</span>
      </h2>
      <ul className="experience__education-list">
        {myExperience().education.map((item, index) => (
          <li className="education__list-item" key={index}>
            <div className="education__list-datewraper">
              <p className="education__list-date">{item.date}</p>
              <p className="education__list-name">{translations[item.name] || item.name}</p>
              <div className="education__list-description">
                {typeof item.description === 'object' ? (
                  Object.values(item.description).map((value, i) => (
                    <p key={i}>{translations[value] || value}</p>
                  ))
                ) : (
                  <p>{translations[item.description] || item.description}</p>
                )}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Education;
