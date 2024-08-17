import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Contact from './components/Contact';
import Footer from './components/Footer'
import './styling/App.css';

const App = () => {
  return (
    <div className="container">
      <Header />
      <div id="about">
        <About />
      </div>
      <div id="projects">
        <Projects />
      </div>
      <div id ="resume">
        <Resume />
      </div>
      <div id ="contact">
        <Contact />
      </div>
      <div id ="footer">
        <Footer />
      </div>
    </div>
  );
};

export default App;
