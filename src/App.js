import React from 'react';
import logo from './logo.svg';
import './App.css';
import About from './Components/About/About'
import Skills from './Components/Skills/Skills'
import Education from './Components/Education/Education'
import Awards from './Components/Awards/Awards'
import Experience from './Components/Experience/Experience'
import Welcome from './Components/Welcome/Welcome'
import Contact from './Components/Contact/Contact'
import Frameworks from './Components/Skills/Frameworks/Frameworks'
// import Publications from './Components/Publications/Publications'

function App() {
  return (
    <div className="App">
      <Welcome />
      <About />
      <Frameworks />
      <Experience />
      <Education />
      <Awards />
      <Contact/>
    </div>
  );
}

export default App;
