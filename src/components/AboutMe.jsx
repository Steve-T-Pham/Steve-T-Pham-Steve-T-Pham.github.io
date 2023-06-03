import React from 'react';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';

const AboutMe = () => {
    return (<div className="aboutme-wrapper">
        <h1 id="aboutme-header"><sup className="superscript">//01&nbsp;</sup>About Me</h1>
        <div className="text-wrapper">
            <p id="aboutme-text">"An alumni from <span className="aboutme-bold">Case Western Reserve University</span>, I originally planned on becoming a pharmacist through the school's pre-medical program. However, I discovered my passion for <span className="aboutme-bold">development and design</span>  
            &nbsp;leading me to pursue further opportunities in the field. Driven to learn and develop my skills as a software engineer, I hope to use the insight and knowledge from my local peers to continue my growth through my <span className="aboutme-bold">self learning and motivation</span>.</p>
        </div>
    </div>
    );
}

export default AboutMe;