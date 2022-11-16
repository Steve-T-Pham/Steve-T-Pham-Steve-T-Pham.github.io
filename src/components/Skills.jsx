import React from 'react';
import { useState, useEffect } from 'react';

const Skills = (props) => {
    const [percent, setPercent] = useState(0);

    const fillerStyles = {
        transition: "width 2s ease-in-out",
        height: "100%",
        backgroundColor: "black",
        borderRadius: "inherit",
        textAlign: "left",
        fontFamily: "courier prime",
        fontWeight: "500",
        width: percent
    }

    useEffect(() => {setPercent(props.percent)}, []);

    //want to eventually add animation
    return (
            <div className="containerStyles">
                <div className="fillerStyles" style={fillerStyles}>
                    <span className="labelStyles">{props.name}</span>
                </div>
            </div>
    );
};

export default Skills;