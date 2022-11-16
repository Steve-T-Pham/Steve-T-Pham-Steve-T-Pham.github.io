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
        <div id="skills-header"><sup className="superscript">//02&nbsp;</sup>Skills</div> 
        <Skills name={'HTML'} percent={'90%'}/>
        <Skills name={'CSS'} percent={'80%'}/>
        <Skills name={'JavaScript'} percent={'75%'}/>
        <Skills name={'React'} percent={'70%'}/>
        <Skills name={'Java'} percent= {'70%'}/>
      </div>

      <div className="projects-wrapper">
        <h1 id="projects-header"><sup className="superscript">//03&nbsp;</sup>Projects</h1>
        <Card img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
              link="https://github.com/Steve-T-Pham/CWRU-dating-website"
              title="CWRU Dating Website"
              child={<div classname="tag-wrapper">
                      <Tag name="java" />
                      <Tag name="springboot" />
                      <Tag name="sql" />
                      </div>}/>
        <Card img="https://i.natgeofe.com/n/548467d8-c5f1-4551-9f58-6817a8d2c45e/NationalGeographic_2572187_square.jpg"
              link="https://github.com/Desdaemon/moolah"
              title="Moolah"
              child={<div classname="tag-wrapper">
                      <Tag name="react" />
                      <Tag name="tailwind" />
                      <Tag name="typescript" />
                      </div>}/>
        <Card img="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/640px-Cat03.jpg"
              link="https://github.com/Steve-T-Pham/CWRU-dating-website"
              title="Test Project"
              child={<div classname="tag-wrapper">
                      <Tag name="java" />
                      <Tag name="springboot" />
                      <Tag name="sql" />
                      </div>}/>
        <Card img="https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg?cs=srgb&dl=pexels-pixabay-45201.jpg&fm=jpg"
              link="https://github.com/Steve-T-Pham/CWRU-dating-website"
              title="Test Project"
              child={<div classname="tag-wrapper">
                      <Tag name="react" />
                      <Tag name="tailwind" />
                      <Tag name="sql" />
                      </div>}/>      
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
