import React, { useEffect, useRef } from 'react';
import { skillsList } from '../../../data/data';
import gsap from 'gsap';

const Skillslist = () => {
  const { skillList } = skillsList();
  const itemsRef = useRef([]);

  useEffect(() => {
    itemsRef.current.forEach(item => {
      gsap.to(item, {
        x: () => Math.random() * 100 - 50,
        y: () => Math.random() * 100 - 50,
        duration: () => Math.random() * 3 + 1,
        ease: 'power1.inOut',
        repeat: -1,
        yoyo: true,
      });
    });
  }, []);

  return (
    <ul className='skills__list'>
      {skillList.map(({ skill }, index) => (
        <li key={index} className='skills-item' ref={el => itemsRef.current[index] = el}>
          <img src={skill} alt="skill"
            style={{ height: '6rem', maxWidth: '100%', display: 'block' }} />
        </li>
      ))}
    </ul>
  );
}

export default Skillslist;
