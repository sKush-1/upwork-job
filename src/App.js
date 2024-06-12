import About from "./components/about/About";
import Experience from "./components/experience/Experience";
import Header from "./components/header/Header";
import Hero from "./components/hero/Hero";
import Mywork from "./components/myWork/Mywork";
import Skills from "./components/skills/Skills";
import Stats from "./components/stats/Stats";

import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
function App() {
  return (
    <div className="App">
      <Provider store={store}>
          < Header />
          < Hero />
          < About />
          < Stats />
          < Skills />
          < Mywork />
          < Experience />
      </Provider>
    </div>
  );
}

export default App;
