import React from 'react';

const Card = (props) => {
    return(
        <div className="card">
            <a href={props.link} target="_blank" rel="noopener noreferrer">
                <img className="image" src={props.img} alt={props.alt}/>
                <div className="card-info-wrapper">
                    <p className="project-title">{props.title}</p>
                    {props.child}
                    <p className="project-desc">{props.desc}</p>
                </div>
            </a>
        </div>
    );
}

export default Card;