import React from 'react';

const Navigation = () => {
    return(
        //imported bootstrap navbar
        <div className="nav-wrapper">
            <nav class="nav">
                <img src="./favicon.ico" alt="Profile" id="prof-pic"></img>
                <a className="nav-link" href="https://github.com/Steve-T-Pham" target="_blank">Github</a>
                <a className="nav-link" href="https://www.linkedin.com/in/steve-pham-stp40/" target="_blank">LinkedIn</a>
                <a className="nav-link" href="resume-steve-pham.pdf" download>Resume</a>
            </nav>
        </div>
    );
}

export default Navigation;