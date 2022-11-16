import React from 'react';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import ImageSlider from './components/ImageSlider.jsx';
import ContactForm from './components/ContactForm.jsx';
import { SliderData } from './components/SliderData.jsx';

import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>       

    <div className="flex-container">    
      <Header />
      <AboutMe />
      <div className="skills-wrapper">
        <div id="skills-header"><sup className="superscript">//02&nbsp;</sup>Skills</div> 
        <Skills name={'HTML'} percent={'90%'}/>
        <Skills name={'CSS'} percent={'80%'}/>
        <Skills name={'JavaScript'} percent={'75%'}/>
        <Skills name={'React'} percent={'70%'}/>
        <Skills name={'Java'} percent= {'70%'}/>
      </div>

      <div className="projects-wrapper">
        <h1 id="projects-header"><sup className="superscript">//03&nbsp;</sup>Projects</h1>
        <ImageSlider slides={SliderData} />
      </div>

      <div className="contact-wrapper">
        <h1 id="contact-header"><sup className="superscript">//04&nbsp;</sup>Contact Me</h1>  
        <ContactForm />
      </div>
    </div>


    <Navigation />


    </React.Fragment>
  );
}

export default App;
