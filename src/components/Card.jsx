import React from 'react';

const Card = (props) => {
    return(
        <div className="card-wrapper">
            <div className="card-component">
                <a href={props.link} target="_blank">
                    <img className="image" src={props.img} />
                </a>
            </div>
            <div className="card-info-wrapper">
                <p className="project-title">{props.title}</p>
                {props.child}
                <p className="project-desc">{props.desc}</p>
            </div>
        </div>
    );
}

export default Card;