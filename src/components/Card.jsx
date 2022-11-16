import React from 'react';

const Card = (props) => {
    return(
        <div className="card-wrapper">
            <div className="card-component">
                <a href={props.link} target="_blank">
                    <img className="image" src={props.img} />
                </a>
            </div>
            {props.child}
            <p className="project-title">{props.title}</p>
        </div>

    );
}

export default Card;