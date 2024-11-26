import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';
import {Button} from "@nextui-org/button";
import NextUI from './components/NextUI';

function App() {
  return (
    <div style={{width: '70%', margin: '0 auto'}}>
      <NextUI/>
      <main>
        <Home />
        <Projects />
        <Skills />
        <AboutMe />
        <Contact />
      </main>
    </div>
  );
}

export default App;
