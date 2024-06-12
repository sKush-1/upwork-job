import React from 'react';
import workplace from '../assets/image/hero-workplace.jpg';
// import personalPhoto from '../assets/image/hero_photo.jfif';
// SOCIAL
import instagram from '../assets/icons/free-icon-instagram-1384089.png';
import linkedin from '../assets/icons/free-icon-linkedin-618.png';
import gitHub from '../assets/icons/free-icon-github-logo-25231.png';
import gitHbStats from '../assets/icons/gitHub-stats.png';
import facebook from '../assets/icons/free-icon-facebook-5968764.png';
import codeWars from '../assets/icons/codewars-stats.png';
import certificates from '../assets/icons/certificate-stats.png';
// CERTIFICATES
import algorithmsJS from '../assets/certificate/algorithmsJS.png'
import certificateJSEssential from '../assets/certificate/Certificate_JS_Essential.png';
import certificateJSStarter from '../assets/certificate/Certificate_JS_starter.png';
import certificateEnglish from '../assets/certificate/english-1.png';
import itGeneration from '../assets/certificate/ITGeneration.jpg';
import certificateReact from '../assets/certificate/react.png';
import certificateResponsiveWeb from '../assets/certificate/responsiveWeb.png';
import certificateGitUdemy from '../assets/certificate/Сertificate-Git.png';
// SKILLS
import antdesignIcon from '../assets/icons/antdesign-icon.png';
import apiIcon from '../assets/icons/api-icon.png';
import cssIcon from '../assets/icons/css-icon.png';
import htmlIcon from '../assets/icons/html-icon.png';
import jsIcon from '../assets/icons/js-icon.png';
import figmaIcon from '../assets/icons/figma-icon.png';
import gitIcon from '../assets/icons/git-icon.png';
import photoshopIcon from '../assets/icons/photoshop-icon.png';
import reactIcon from '../assets/icons/react-icon.png';
import reduxIcon from '../assets/icons/redux-icon.png';
import sassIcon from '../assets/icons/sass-icon.png';

// WORKLIST
import calculator from '../assets/image/worklist/calculator.png';
import marvel from '../assets/image/worklist/marvel.png';
import pizza from '../assets/image/worklist/pizza.png';
import chuk from '../assets/image/worklist/chuk_norris.png';
import shopping from '../assets/image/worklist/shopping.png';
import katrik from '../assets/image/worklist/katrik.png';
import reactState from '../assets/image/worklist/react-state.png';
import courseAdversting from '../assets/image/worklist/course-adversting.png';
import forms from '../assets/image/worklist/form-input.png';
import intakeForms from '../assets/image/worklist/intake-forms.png';
import cutspace from '../assets/image/worklist/cutspace.png';
import bike from '../assets/image/worklist/bike-landing.png';
import clubweb from '../assets/image/worklist/clubweb.png';
import barber from '../assets/image/worklist/barber.png';
import trevland from '../assets/image/worklist/trevland.png';
import kettles from '../assets/image/worklist/kettles.png';
import accounter from '../assets/image/worklist/accounter.png';
import taskManager from '../assets/image/worklist/useReducer.png';
import reactFormic from '../assets/image/worklist/react-formic.png';
import keyCode from '../assets/image/worklist/keyCode.png';
import pizzaConstructor from '../assets/image/worklist/pizza-constructor.png';
import japanLanding from '../assets/image/worklist/japan-landing.png';

export const herodescription = () => {
  const workPlaceImg = workplace;
  // const personalPhotoImg = personalPhoto;
  const personalPhotoImg = [];
  const nameKey = 'name';
  const descriptionKey = 'description';
  const achievementList = { 
    item1: "achievement1", 
    item2: "achievement2", 
    item3: "achievement3"
  }

  return {
    workPlaceImg,
    nameKey,
    descriptionKey,
    achievementList,
    personalPhotoImg
  };
};

export const social = () => {
  const inst = { img: instagram, link: "#" };
  const lnkdn = { img: linkedin, link: "#" };
  const gitHb = { img: gitHub, link: "#" };
  const fb = { img: facebook, link: "#" };

  return {
    inst,
    lnkdn,
    gitHb,
    fb
  }
}

export const stats = () => {

  const gitHubStats = gitHbStats;
  const codeWarsStats = codeWars;
  const certificate = certificates;

  const statsList = { 
    certificate: "сertificates",
    repo: "repos",
    score: "scores",
    rank: "ranks",

  }

  return {
    gitHubStats,
    codeWarsStats,
    certificate,
    statsList
  }
}

export const certificatesList = () => {
  const algorithms = algorithmsJS;
  const essential = certificateJSEssential;
  const starter = certificateJSStarter;
  const english = certificateEnglish;
  const generation = itGeneration;
  const react = certificateReact;
  const responsiveWeb = certificateResponsiveWeb;
  const gitUdemy = certificateGitUdemy;

  return {
    certificateList: [
      {
        image: algorithms,
        alt: 'algorithms'
      },
      {
        image: essential,
        alt: 'essential'
      },
      {
        image: starter,
        alt: 'starter'
      },
      {
        image: english,
        alt: 'english'
      },
      {
        image: generation,
        alt: 'generation'
      },
      {
        image: react,
        alt: 'react'
      },
      {
        image: responsiveWeb,
        alt: 'responsiveWeb'
      },
      {
        image: gitUdemy,
        alt: 'gitUdemy'
      },
    ]
  }
}

export const skillsList = () => {
  const antdsn = antdesignIcon;
  const api = apiIcon;
  const css = cssIcon;
  const html = htmlIcon;
  const js = jsIcon;
  const figma = figmaIcon;
  const git = gitIcon;
  const photoshop = photoshopIcon;
  const react = reactIcon;
  const redux = reduxIcon;
  const sass = sassIcon;

  return {
    skillList: [
      {
        skill: antdsn,
      },
      {
        skill: api,
      },
      {
        skill: css,
      },
      {
        skill: html,
      },
      {
        skill: js,
      },
      {
        skill: figma,
      },
      {
        skill: git,
      },
      {
        skill: photoshop,
      },
      {
        skill: react,
      },
      {
        skill: redux,
      },
      {
        skill: sass,
      }
    ]
  }
}

export const myWorkList = () => {
  return {
    worklist: {
      new: [
        {
          name: 'calculatorName',
          linkPage: 'https://bilostenko.github.io/calculator/',
          linkRepo: 'https://github.com/Bilostenko/calculator/tree/master',
          tools: 'HTML, CSS, JavaScript',
          image: calculator,
          description: 'calculatorDescription'
        },
        {
          name: 'marvelName',
          linkPage: 'https://marvel-character-gamma.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/marvel-character/tree/main',
          tools: 'HTML, SCSS, JavaScript, React, API',
          image: marvel,
          description: 'marvelDescription'
        },
        {
          name: 'pizzaName',
          linkPage: 'https://pizza-website-tau.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/pizza-website',
          tools: 'HTML, SCSS, JavaScript',
          image: pizza,
          description: 'pizzaDescription'
        },
        {
          name: 'chukNorrisName',
          linkPage: 'https://bilostenko.github.io/Chuk-Norris-Joke-API/',
          linkRepo: 'https://github.com/Bilostenko/Chuk-Norris-Joke-API',
          tools: 'HTML, SCSS, JavaScript, API',
          image: chuk,
          description: 'norrislDescription'
        },
        {
          name: 'shoppingName',
          linkPage: 'https://shopping-website-ffq6.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/Shopping-website/tree/master',
          tools: 'HTML, SCSS, JavaScript, React, GSAP',
          image: shopping,
          description: 'shoppingDescription'
        },
      ],
      old: [
        {
          name: 'karkikName',
          linkPage: 'https://bilostenko.github.io/kartik-bansal-cv/ ',
          linkRepo: 'https://github.com/Bilostenko/kartik-bansal-cv',
          tools: 'HTML, CSS',
          image: katrik,
          description: 'karkikDescription'
        },
        {
          name: 'reactStateName',
          linkPage: 'https://react-state-task.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/react_state_task',
          tools: 'HTML, CSS, Javascript, React',
          image: reactState,
          description: 'stateTaskDescription'
        },
        {
          name: 'courseName',
          linkPage: 'https://bilostenko.github.io/layout-course-advertising/',
          linkRepo: 'https://github.com/Bilostenko/layout-course-advertising',
          tools: 'HTML, CSS, Bootstrap',
          image: courseAdversting,
          description: 'courseDescription'
        },
        {
          name: 'formsName',
          linkPage: 'https://bilostenko.github.io/survey_form/ ',
          linkRepo: 'https://github.com/Bilostenko/survey_form',
          tools: 'HTML, CSS',
          image: forms,
          description: 'formsDescription'
        },
        {
          name: 'cutspaceName',
          linkPage: 'https://bilostenko.github.io/Landing-Cutspace/',
          linkRepo: 'https://github.com/Bilostenko/Landing-Cutspace',
          tools: 'HTML, SCSS, Javscript',
          image: cutspace,
          description: 'cutspaceDescription'
        },
        {
          name: 'bikcraftName',
          linkPage: 'https://bilostenko.github.io/bike-landing/',
          linkRepo: 'https://github.com/Bilostenko/bike-landing',
          tools: 'HTML, CSS',
          image: bike,
          description: 'bikcraftDescription'
        },
        {
          name: 'forms2Name',
          linkPage: 'https://bilostenko.github.io/input-forms/',
          linkRepo: 'https://github.com/Bilostenko/input-forms',
          tools: 'HTML, CSS',
          image: intakeForms,
          description: 'forms2Description'
        },
        {
          name: 'clubWebName',
          linkPage: 'https://bilostenko.github.io/clubweb/',
          linkRepo: 'https://github.com/Bilostenko/clubweb',
          tools: 'HTML, CSS',
          image: clubweb,
          description: 'clubWebDescription'
        },
        {
          name: 'barberName',
          linkPage: 'https://bilostenko.github.io/Dupper-Buly/',
          linkRepo: 'https://github.com/Bilostenko/Dupper-Buly',
          tools: 'HTML, CSS, Javascript',
          image: barber,
          description: 'barberDescription'
        },
        {
          name: 'trevlandName',
          linkPage: 'https://bilostenko.github.io/traveland/',
          linkRepo: 'https://github.com/Bilostenko/traveland',
          tools: 'HTML, SCSS',
          image: trevland,
          description: 'trevlandDescription'
        },
        {
          name: 'kettleName',
          linkPage: 'https://bilostenko.github.io/kettles/',
          linkRepo: 'https://github.com/Bilostenko/kettles',
          tools: 'HTML, SCSS, Javascript',
          image: kettles,
          description: 'kettlesDescription'
        },
        {
          name: 'accounterName',
          linkPage: 'https://bilostenko.github.io/accounter/',
          linkRepo: 'https://github.com/Bilostenko/accounter',
          tools: 'HTML, CSS, Javascript',
          image: accounter,
          description: 'accounterDescription'
        },
        {
          name: 'React task manager.',
          linkPage: 'https://task-manager-usereducer.vercel.app/ ',
          linkRepo: 'https://github.com/Bilostenko/task_manager_usereducer',
          tools: 'HTML, CSS, Javascript, React',
          image: taskManager,
          description: 'taskManagerDescription'
        },
        {
          name: 'reactFormName',
          linkPage: 'https://react-formic-yup.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/react-formic-yup',
          tools: 'HTML, SCSS, Javascript, React',
          image: reactFormic,
          description: 'reactFormDescription'
        },
        {
          name: 'keyCodeName',
          linkPage: 'https://bilostenko.github.io/keyCode/',
          linkRepo: 'https://github.com/Bilostenko/keyCode?tab=readme-ov-file',
          tools: 'HTML, SCSS, Javascript',
          image: keyCode,
          description: 'keyCodeDescription'
        },
        {
          name: 'pizzaName',
          linkPage: 'https://pizza-sigma-ten.vercel.app/',
          linkRepo: 'https://github.com/Bilostenko/pizza',
          tools: 'HTML, SCSS, Javascript',
          image: pizzaConstructor,
          description: 'pizzaDescription'
        },
        {
          name: 'japanName',
          linkPage: 'https://bilostenko.github.io/Japan_landing_page/',
          linkRepo: 'https://github.com/Bilostenko/Japan_landing_page',
          tools: 'HTML, SCSS, Javascript',
          image: japanLanding,
          description: 'japanDescription'
        },
      ]
    }
  };
};

export const myExperience = () => {

  return {
    education: [
      {
        date: '2007 - 2011',
        name: 'test',
        description: {
          des1: 'degree',
        }
      },
      {
        date: '01.11.2022 - 01.05.2023',
        name: 'itGeneration',
        description: {
          des1: 'development',
        }
      },
      {
        date: '',
        name: 'freeCodeCamp',
        description: {
          des1: 'responsiveWebDesign',
          des2: 'algorithms'
        }
      },
      {
        date: '',
        name: 'prometheus',
        description: {
          des1: '',
          des2: ''
        }
      },
      {
        date: '',
        name: 'udemy:',
        description: {
          des1: 'git',
          des2: 'jsCourse',
          des3: 'basicCSS&HTML',
        }
      },
      {
        date: '',
        name: 'cyberBionic',
        description: {
          des1: 'starterJS',
          des2: 'essentialJS'
        }
      },
    ],
    work: [
      {
        date: '',
        name: [],
        description: [],
      },
    ]
  }
}