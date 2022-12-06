import React from 'react';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';

const AboutMe = () => {
    return (<div className="aboutme-wrapper">
        <h1 id="aboutme-header"><sup className="superscript">//01&nbsp;</sup>About Me</h1>
        <div className="text-wrapper">
            <p id="aboutme-text">"An alumni from <strong>Case Western Reserve University</strong>, I originally planned on becoming a pharmacist through the school's pre-medical program. However, I discovered my passion for <strong>front-end development and design</strong>  
            &nbsp;leading me to pursue further opportunities in the field. Driven to learn and develop my skills as a software engineer, I hope to use the insight and knowledge from my local peers to continue my growth through self learning and motivation. 
            I am also currently studying and practicing my <strong>Japanese</strong>!"</p>
        </div>
    </div>
    );
}

export default AboutMe;