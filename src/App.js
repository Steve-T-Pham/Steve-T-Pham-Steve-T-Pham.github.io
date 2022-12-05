import React from 'react';
import Navigation from './components/Navigation.jsx';
import Header from './components/Header.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Card from './components/Card.jsx';
import ContactForm from './components/ContactForm.jsx';
import Tag from './components/Tag.jsx';


import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <React.Fragment>       
    <div className="flex-container">    
      <Header />
      <AboutMe />
      <div className="skills-wrapper">
        <h1 id="skills-header"><sup className="superscript">//02&nbsp;</sup>Skills</h1> 
        <Skills name={'HTML'} percent={'80%'}/>
        <Skills name={'CSS'} percent={'80%'}/>
        <Skills name={'JavaScript'} percent={'75%'}/>
        <Skills name={'React'} percent={'80%'}/>
        <Skills name={'Java'} percent= {'70%'}/>
      </div>

      <div className="projects-wrapper">
        <h1 id="projects-header"><sup className="superscript">//03&nbsp;</sup>Projects</h1>
        <Card img="https://cdn.pixabay.com/photo/2017/11/30/12/35/cat-2988354_960_720.jpg" alt="Project display picture"
              link="https://github.com/Desdaemon/moolah"
              title="Moolah"
              child={<div classname="tag-wrapper">
                      <Tag name="react" />
                      <Tag name="tailwind" />
                      <Tag name="typescript" />
                      <Tag name="nextjs" />
                      </div>}/>
        <Card img="https://cdn.pixabay.com/photo/2015/03/10/18/46/taiwan-667563_960_720.jpg" alt="Project display picture"
              link="https://github.com/Steve-T-Pham/CWRU-dating-website"
              title="CWRU Dating Website"
              child={<div classname="tag-wrapper">
                      <Tag name="java" />
                      <Tag name="springboot" />
                      <Tag name="sql" />
                      </div>}/>
        <Card img="https://img5.goodfon.com/wallpaper/nbig/f/57/tamara-andreeva-priroda-peizazh-gory-altai-zhivotnoe-kot.jpg" alt="Project display picture"
              link="https://github.com/Steve-T-Pham/Kanji-Dictionary"
              title="Kanji Dictionary"
              child={<div classname="tag-wrapper">
                      <Tag name="java" />
                      <Tag name="jsoup" />
                      </div>}/>  
        <div className="contactme-wrapper">
          <h1 id="contact-header"><sup className="superscript">//04&nbsp;</sup>Contact Me</h1>  
          <ContactForm />
        </div>
      </div>
    </div>
    <Navigation />
    </React.Fragment>
  );
}

export default App;
