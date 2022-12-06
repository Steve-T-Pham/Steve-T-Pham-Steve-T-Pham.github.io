import React from 'react';

const Navigation = () => {
    return(
        //imported bootstrap navbar
        <div className="nav-wrapper">
            <nav class="nav flex-sm-column">
                <a className="nav-link" href="https://github.com/Steve-T-Pham" target="_blank">GITHUB</a>
                <a className="nav-link" href="https://www.linkedin.com/in/steve-pham-stp40/" target="_blank">LINKEDIN</a>
                <a className="nav-link" href="./resume-steve-pham.pdf" target="_blank">RESUME</a>
            </nav>
        </div>
    );
}

export default Navigation;