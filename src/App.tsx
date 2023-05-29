import React from 'react';
import AboutMe from './components/AboutMe';
import Contacts from './components/Contacts';
import Greeting from './components/Greeting';
import Header from './components/Header';
import Main from './components/Main';
import Skills from './components/Skills';
import SoftSkills from './components/SoftSkills';

import './index.css';
import './style/style.scss';
import './style/mediaScreen.css'


function App() {
  return (
    <div className="App">
      <Header/>
      <Main/>
      <Greeting/>
      <AboutMe/>
      <Skills/>
      <SoftSkills/>
      <Contacts/>
      
    </div>
  );
}

export default App;
