import React, { useState, useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import './stats.css';
import { stats } from '../../data/data';
import useApiService from '../../services/APIservice';
import gsap from 'gsap';
import ErrorMessage from '../errorMessage/ErrorMessage';
import Spinner from '../spinner/Spinner';
import question from '../../assets/icons/question.png'
import { Tooltip } from 'antd';
import Certificates from './certificate/Certificate';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
const Stats = () => {

  const statsData = stats();
  const translations = useSelector(state => state.language.translations);
  const { error, loading, getRepoCount, getCodeWarsCount, clearError } = useApiService()
  const [gitHubCount, setgitHubCount] = useState(null);
  const [codewarsCountScore, setcodewarsCountScore] = useState(null);
  const [codewarsCountRank, setcodewarsCountRank] = useState(null);
  const tl = gsap.timeline();
  const statsRef = useRef(null)
  gsap.registerPlugin(ScrollTrigger);

  const statsBox1Ref = useRef(null);
  const statsBox2Ref = useRef(null);
  const statsBox3Ref = useRef(null);
  const questionIconRef = useRef(null);
  const certificatesNumberRef = useRef(null);
  const gitHubCountRef = useRef(null);
  const codeWarsCountRef = useRef(null);

  useEffect(() => {
    updateGitHubRepos()
    tl.fromTo(statsRef.current, { x: -100, opacity: 0 }, { x: 0, opacity: 1, duration: 2 }, [])
  }, [])

  const setupScrollAnimation = (ref, yOffset) => {
    gsap.set(ref.current, { yPercent: yOffset });
    gsap.to(ref.current, {
      scrollTrigger: {
        trigger: statsRef.current,
        scrub: true,
      },
      yPercent: 0,
    });
  };

  useEffect(() => {
    const icon = questionIconRef.current;

    const tl = gsap.timeline({ repeat: -1, yoyo: true });
    tl.to(icon, { duration: 0.05, rotation: -10 })
      .to(icon, { duration: 0.05, rotation: 10 });

    return () => {
      tl.kill();
    };
  }, []);

  useEffect(() => {
    setupScrollAnimation(statsBox1Ref, -40);
  }, [statsBox1Ref]);

  useEffect(() => {
    setupScrollAnimation(statsBox2Ref, 40);
  }, [statsBox2Ref]);

  useEffect(() => {
    setupScrollAnimation(statsBox3Ref, -40);
  }, [statsBox3Ref]);

  const updateGitHubRepos = () => {
    clearError()

    getRepoCount()
      .then(res => {
        setgitHubCount(res);
      })
      .catch(err => {
        console.error('Error while fetching data:', err);
      });

    getCodeWarsCount()
      .then(res => {
        setcodewarsCountScore(res.ranks.overall.score);
        setcodewarsCountRank(res.ranks.overall.name)
      })
      .catch(err => {
        console.error('Error while fetching data:', err);
      });

  }

  useEffect(() => {
    const scrollTriggerInstance = ScrollTrigger.create({
      trigger: certificatesNumberRef.current,
      start: 'top center',
      end: 'bottom center',
      scrub: true,
      once: true,
      onEnter: () => {
        gsap.to(certificatesNumberRef.current, {
          duration: 2,
          innerHTML: 11,
          roundProps: 'innerHTML',
          ease: 'power1.inOut',
        })
      }
    });
    return () => {
      scrollTriggerInstance.kill();
    };
  }, []);

  useEffect(() => {
    if (gitHubCount !== null) {
      const content = gitHubCount.length > 0 ? gitHubCount.length : <Spinner />;
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: gitHubCountRef.current,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        once: true,
        onEnter: () => {
          gsap.to(gitHubCountRef.current, {
            duration: 2,
            innerHTML: content,
            roundProps: 'innerHTML',
            ease: 'power1.inOut',
          });
        },
      });
      return () => {
        scrollTriggerInstance.kill();
      };
    } else {
      <ErrorMessage />;
    }
  }, [gitHubCount]);


  useEffect(() => {
    if (codewarsCountScore !== null) {
      const content = codewarsCountScore > 0 ? codewarsCountScore : <Spinner />;
      const scrollTriggerInstance = ScrollTrigger.create({
        trigger: codeWarsCountRef.current,
        start: 'top bottom',
        end: 'bottom center',
        scrub: true,
        once: true,
        onEnter: () => {
          gsap.to(codeWarsCountRef.current, {
            duration: 2,
            innerHTML: content,
            roundProps: 'innerHTML',
            ease: 'power1.inOut',
          });
        },
      });
      return () => {
        scrollTriggerInstance.kill();
      };
    } else {
      <ErrorMessage />;
    }
  }, [codewarsCountScore]);

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

  const errorMessage = error ? <ErrorMessage /> : null;
  const spinner = loading ? <Spinner /> : null;

  return (
    <section className="stats">
      <div className="container">
        <h2 className='stats__title' ref={statsRef}>
          <span data-i18n="sta" >Sta</span>
          <span data-i18n="ts" className="text-white">ts</span>
        </h2>
        <div className="stats__wrapper">
          <div className="stats__item" ref={statsBox1Ref}>
            <div className="stats__item-logo" >
              <img src={statsData.certificate} alt="logo" />
            </div>
            <h3 className="stats__number" data-i18n="certificates">{statsData.statsList.certificate}</h3>
            <Tooltip
              className='tooltip'
              placement="right"
              title={<Certificates
              />}>
              <img src={question} alt="icon" ref={questionIconRef} />
            </Tooltip>
            <p className="stats__text" ref={certificatesNumberRef}>0</p>
          </div>
          <div className="stats__item" ref={statsBox2Ref}>
            <div className="stats__item-logo" >
              <img src={statsData.gitHubStats} alt="logo" />
            </div>
            <h3 className="stats__number" data-i18n="repos">{statsData.statsList.repo}</h3>
            <p className="stats__text" ref={gitHubCountRef}>
              {/* {errorMessage}
              {spinner}
              {gitHubCount ? gitHubCount.length : 'Loading...'} */}
              0
            </p>
          </div>
          <div className="stats__item" ref={statsBox3Ref}>
            <div className="stats__item-logo" >
              <img src={statsData.codeWarsStats} alt="logo" />
            </div>
            <h3 className="stats__number" data-i18n="scores">{statsData.statsList.score}</h3>
            <p className="stats__text" ref={codeWarsCountRef}>
              {/* {errorMessage}
              {spinner}
              {typeof codewarsCountScore === 'number' ? codewarsCountScore : (spinner)} */}
              0
            </p>
            <p className="stats__rank" data-i18n="ranks">{statsData.statsList.rankі}
              {errorMessage}
              {spinner}
              {typeof codewarsCountRank === 'string' ? codewarsCountRank : (spinner)}</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Stats;
