import React from 'react';
import { BsPrefixComponent } from 'react-bootstrap/esm/helpers';

const AboutMe = () => {
    return (
        <div className="text-wrapper">
            <p id="aboutme-text">"Passionate <span className="aboutme-bold">Case Western Reserve University</span> alumnus with a degree in Computer Science and minor in Japanese, skilled in development and design. Expertise in <span className="aboutme-bold">algorithms and data structures</span>. Collaborative project builder. Committed to creating innovative and impactful solutions. Strong <span className="aboutme-bold">attention to detail and user experience</span>."
            <br></br><br></br> 
            <em>Click the logo on the left for some of my links!</em></p>
        </div>
    );
}

export default AboutMe;