import React from 'react';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';

const AboutMe = () => {
    return (<div className="aboutme-wrapper">
        <h1 id="aboutme-header"><sup className="superscript">//01&nbsp;</sup>About Me</h1>
        <div className="text-wrapper">
            <p id="aboutme-text">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;"An alumni from Case Western Reserve University, I originally planned on becoming a pharmacist through the school's pre-medical program. However, I discovered my passion for front-end engineering and design 
            leading me to pursue further opportunities in the field. Driven to learn and develop my skills as a software engineer, I hope to use the insight and knowledge from my local peers for a foundation and grow through my own motivation reinforced through self learning. 
            I enjoy working with unfamiliar skills such as implementing new technologies and going as far as to learn new languages - and not just programming ones!"</p>
        </div>
    </div>
    );
}

export default AboutMe;