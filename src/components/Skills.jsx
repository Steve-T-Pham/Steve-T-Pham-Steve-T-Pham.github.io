import React from 'react';
import { useState, useEffect } from 'react';

const Skills = (props) => {
    const [percent, setPercent] = useState(0);

    const fillerStyles = {
        transition: "width 2s ease-in-out",
        height: "inherit",
        backgroundColor: "black",
        borderRadius: "inherit",
        textAlign: "left",
        width: percent
    }

    useEffect(() => {setPercent(props.percent)}, []);

    return (
            <div className="containerStyles">
                <div className="fillerStyles" style={fillerStyles}>
                    <span className="labelStyles">{props.name}</span>
                </div>
            </div>
    );
};

export default Skills;