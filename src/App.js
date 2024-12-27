import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Certifications from './components/Certifications';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Contact from './components/Contact';
import ScrollToTop from './components/ScrollToTop';
import ErrorPage from './components/ErrorPage';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <ScrollToTop />
        <Switch>
          <Route path="/" exact component={Hero} />
          <Route path="/projects" component={Projects} />
          <Route path="/certifications" component={Certifications} />
          <Route path="/experience" component={Experience} />
          <Route path="/education" component={Education} />
          <Route path="/skills" component={Skills} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" render={() => <ErrorPage errorCode={404} />} />
          <Route path="/500" render={() => <ErrorPage errorCode={500} />} />
          <Route render={() => <ErrorPage errorCode={404} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
