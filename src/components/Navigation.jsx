import React from 'react';


const Navigation = () => {
    return(
        //imported bootstrap navbar
        <div className="nav-wrapper">
            <nav class="nav flex-sm-column">
                <a className="nav-link" href="https://github.com/Steve-T-Pham" target="_blank">GITHUB</a>
                <a className="nav-link" href="https://www.linkedin.com/in/steve-pham-stp40/" target="_blank">LINKEDIN</a>
                <a className="nav-link" href="/#">RESUME</a>
                <a className="nav-link" href="/#">CONTACT</a>
            </nav>
        </div>
    );
}

export default Navigation;