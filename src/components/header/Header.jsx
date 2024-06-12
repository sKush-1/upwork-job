import './header.css';
import gsap from 'gsap';
import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setLanguage } from '../../redux/actions';

const Header = () => {
  const heroRef = useRef(null);
  const translations = useSelector(state => state.language.translations);
  const currentLanguage = useSelector(state => state.language.language);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(heroRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, 1);
  }, []);


  const dispatch = useDispatch();

  const handleLanguageChange = (language, event) => {
    event.preventDefault();
    dispatch(setLanguage(language));
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
    <header className='header'>
      <div className="container header__container">
        <div className="header__wrapper">
          <a href="#" className='header__hero' ref={heroRef}>
            <span className='header__surname' data-i18n="my">My </span>
            <span className='first__name' data-i18n="cv">CV</span>
          </a>
          <div className="lng__btns-wrapper">
            <a href="/"
              className={`bn5 ${currentLanguage === 'ua' ? 'disabled-link' : ''}`}
              onClick={(event) => handleLanguageChange('ua', event)} data-i18n="ukrainian">Ukrainian
            </a>
            <a href="/"
              className={`bn5 ${currentLanguage === 'en' ? 'disabled-link' : ''}`}
              onClick={(event) => handleLanguageChange('en', event)} data-i18n="english">English
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
