import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Certifications />
      <Experience />
      <Education />
      <Skills />
      <Contact />
      <ErrorPage />
    </div>
  );
}

export default App;