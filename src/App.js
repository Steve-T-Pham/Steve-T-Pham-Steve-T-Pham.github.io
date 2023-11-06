import React from 'react';
import { useState, useEffect } from 'react';
import Navigation from './components/Navigation.jsx';
import AboutMe from './components/AboutMe.jsx';
import Skills from './components/Skills.jsx';
import Card from './components/Card.jsx';
import ContactForm from './components/ContactForm.jsx';
import Tag from './components/Tag.jsx';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import skillsArray  from './data/skills.json';
import projectsArray from './data/projects.json';

const App = () => {
  const [isNotMobile, setIsNotMobile] = useState(window.matchMedia('(min-width: 767px)').matches);

  useEffect(() => {
    const handleResize = () => {
        setIsNotMobile(window.matchMedia('(min-width: 768px)').matches);
    };
    window.addEventListener('resize', handleResize);
    return () => {
        window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="home">
      {isNotMobile && <Navigation />}   
        <div className="main-content">
          <div className="grid-container">
          {/* eslint-disable react/jsx-no-comment-textnodes */}
            <div className="aboutme-wrapper">  
              <h1 id="aboutme-header">
                <sup className="superscript">//01&nbsp;</sup>
                About Me
              </h1>  
              <AboutMe />
            </div>

            <div className="skills-wrapper">
              <h1 id="skills-header"><sup className="superscript">//02&nbsp;</sup>Skills</h1> 
              {skillsArray.map(skill => <Skills name={skill.name} percent={skill.percent} key={skill.name} />)}
            </div>

            <div className="projects-wrapper">
              <h1 id="projects-header"><sup className="superscript">//03&nbsp;</sup>Projects</h1>
              <div className="cards-wrapper">
                {projectsArray.map(
                  project => <Card 
                    key={project.id} 
                    img={project.img} 
                    alt={project.alt} 
                    link={project.link} 
                    title={project.title} 
                    desc={project.desc} 
                    child={<div className="tag-wrapper">{project.tags.map(tag => <Tag key={tag} name={tag}/>)} </div>}
                  /> 
                )}
              </div>
            </div>

              <div className="contactme-wrapper">
                <h1 id="contact-header"><sup className="superscript">//04&nbsp;</sup>Contact Me</h1>  
                <ContactForm />
              </div>

            </div>
        </div>
      </div>
    );
}

export default App;
