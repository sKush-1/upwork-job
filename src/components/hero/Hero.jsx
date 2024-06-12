import './hero.css'

import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import parse from 'html-react-parser'; // Для розбору HTML
import { herodescription, social } from '../../data/data';
import download from '../../assets/icons/free-icon-internet-download-manager-13876813.png';
import Text from './type_animation/Text';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Hero = () => {

  const translations = useSelector(state => state.language.translations);
  const { workPlaceImg, nameKey, descriptionKey } = herodescription();
  const { inst, lnkdn, gitHb, fb } = social();
  const nameRef = useRef(null);
  const descRef = useRef(null);
  const leftBlockRef = useRef(null);
  const rightBlockRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(nameRef.current, { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 })
      .fromTo(descRef.current, { y: +50, opacity: 0 }, { y: 0, opacity: 1, duration: 2 }, 0.5);
  }, []);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(rightBlockRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        scrub: true
      },
      yPercent: 80,
      scale: 0.5,
      xPercent: -80,
      opacity: 0,
      duration: 1
    })
  }, []);
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    gsap.to(leftBlockRef.current, {
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top top',
        scrub: true
      },
      yPercent: 80,
      scale: 0.5,
      xPercent: 80,
      opacity: 0,
      duration: 1
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
    <section className="hero">
      <div className="container">
        <div className="hero__wrapper" ref={containerRef}>
          <div className="hero__workplace">
            <img src={workPlaceImg} alt="computer" ref={leftBlockRef} />
          </div>
          <div className="hero__description" ref={rightBlockRef}>
            <div className="hero_dynamic-info">
              {'<'}<span style={{ color: '#32A10F' }}>code</span>{'>'} <span style={{ fontWeight: 900 }} >I use&nbsp;</span>
              < Text />
              {'</'}<span style={{ color: '#32A10F' }}>code</span>{'>'}
            </div>
            <div className="hero__social">
              <div className="hero__social_wrapper">
                <h1 className="hero__name" ref={nameRef} data-i18n="name">
                {parse(translations[nameKey] || nameKey)}
                  </h1>
                <div className="hero__social-list-wrapper">
                  <ul className="hero__social-list">
                    <li className="hero__social-item"><a href={fb.link} target="_blank" rel="noopener noreferrer"><img src={fb.img} alt="facebook" /></a></li>
                    <li className="hero__social-item"><a href={inst.link} target="_blank" rel="noopener noreferrer"><img src={inst.img} alt="instagram" /></a></li>
                    <li className="hero__social-item"><a href={lnkdn.link} target="_blank" rel="noopener noreferrer"><img src={lnkdn.img} alt="linkedin" /></a></li>
                    <li className="hero__social-item"><a href={gitHb.link} target="_blank" rel="noopener noreferrer"><img src={gitHb.img} alt="github" /></a></li>
                  </ul>
                </div>
              </div>
              {/* <div ref={descRef} data-i18n="description">{description}</div> */}
              <div ref={descRef} data-i18n="description">
                {parse(translations[descriptionKey] || descriptionKey)}
              </div>
              {/* <a href={require("../../assets/CV_Bilostenko.pdf")} download="Bilostenko.pdf" className='link-to-download'>
                <button className="bn632-hover bn22">
                  <img src={download} alt="Download" />
                  <span data-i18n="resume">{translations['resume'] || 'Resume'}</span>
                </button>
              </a> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;