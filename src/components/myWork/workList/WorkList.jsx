import React, { useState, useEffect } from 'react';
import './worklist.css';
import { myWorkList } from '../../../data/data';
import { Button, Drawer } from 'antd';
import { useSelector } from 'react-redux';

const WorkList = () => {
  const selectedList = useSelector(state => state.project.selectedList);
  const workListNew = myWorkList().worklist.new;
  const workListOld = myWorkList().worklist.old;
  const [openDrawerIndex, setOpenDrawerIndex] = useState(null);
  const translations = useSelector(state => state.language.translations);

  const translateElements = () => {
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[key]) {
        if (el.tagName === 'BUTTON' || el.tagName === 'A') {
          el.textContent = translations[key];
        } else {
          el.innerHTML = translations[key];
        }
      }
    });
  };

  const showDrawer = (index) => {
    setOpenDrawerIndex(index);
  };

  const onClose = () => {
    setOpenDrawerIndex(null);
  };

  useEffect(() => {
    translateElements();
  }, [translations]);

  useEffect(() => {
    if (openDrawerIndex !== null) {
      translateElements();
    }
  }, [openDrawerIndex]);

  const workList = selectedList === 'new' ? workListNew : workListOld;

  return (
    <>
      <ul className="work__list">
        {workList.map((item, index) => (
          <li className="work__item" key={index}>
            <div className="drawer-container">
              <div className="image-container">
                <img src={item.image} alt={item.name} />
              </div>
              <Button type="primary" onClick={() => showDrawer(index)} className="open-button" data-i18n="details">
                {translations['details'] || 'Details...'}
              </Button>
              <Drawer
                title={`${translations[item.name] || item.name} (${item.tools})`}
                placement="right"
                closable={false}
                onClose={onClose}
                visible={openDrawerIndex === index}
                getContainer={false}
                style={{ position: 'absolute', top: 0, right: 0, width: '80%' }}
              >
                <p className='work__description'>{translations[item.description] || item.description}</p>
                <p>
                  <a href={item.linkPage} target="_blank" rel="noopener noreferrer" data-i18n="linkToPage">
                    {translations['linkToPage'] || 'Link to Page'}
                  </a>
                </p>
                <p>
                  <a href={item.linkRepo} target="_blank" rel="noopener noreferrer" data-i18n="linkToRepo">
                    {translations['linkToRepo'] || 'Link to Repo'}
                  </a>
                </p>
              </Drawer>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default WorkList;
