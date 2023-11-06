import React from 'react';

const Skills = ({percent, name}) => {

    const fillerStyles = {
        transition: "width 2s ease-in-out",
        height: "inherit",
        backgroundColor: "black",
        borderRadius: "inherit",
        textAlign: "left",
        width: percent
    }

    return (
            <div className="containerStyles">
                <div className="fillerStyles" style={fillerStyles}>
                    <span className="labelStyles">{name}</span>
                </div>
            </div>
    );
};

export default Skills;