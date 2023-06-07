import React from 'react';
import { useState } from 'react';

const Navigation = () => {

    const [expand, setExpand] = useState(false);

    const toggleExpand = () => {
        setExpand(!expand);
    }

    return(
        //imported bootstrap navbar
        <div className="nav-wrapper">

            <a onClick={toggleExpand}>
                <img src="./favicon.ico" alt="Profile" className={`prof-pic ${expand ? 'expanded' : ''}`}></img>
            </a>

            <div class="square">
                <div className="top"></div>
                <div className={`middle ${expand ? 'expanded' : ''}`}></div>
                <div className={`bottom ${expand ? 'expanded' : ''}`}></div>
            </div>


            <nav className={`nav ${expand ? 'expanded' : ''}`}>
                {expand && 
                (<div>
                    <a className="nav-link" href="https://github.com/Steve-T-Pham" target="_blank">Github</a>
                    <a className="nav-link" href="https://www.linkedin.com/in/steve-pham-stp40/" target="_blank">LinkedIn</a>
                    <a className="nav-link" href="resume-steve-pham.pdf" download>Resume</a>
                </div>
                )}
            </nav>

        </div>
    );
}

export default Navigation;