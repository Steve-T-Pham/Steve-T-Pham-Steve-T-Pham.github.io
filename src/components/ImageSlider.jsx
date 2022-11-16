import React, { useState } from 'react';
import { SliderData } from './SliderData.jsx';

const ImageSlider = ({ slides }) => {
    const [current, setCurrent] = useState(0)
    const length = slides.length;

    const nextSlide = () => {
        //arrays start at 0 like in other languages
        setCurrent(current === length - 1 ? 0 : current + 1)
    }

    if(!Array.isArray(slides) || slides.length <= 0){
        return null;
    }

    return (
        <div className="slider">
            {/*<button className="slider-button" onClick={nextSlide}>→</button>*/}

            {SliderData.map((slide, index) => {
                return (
                    <div className={index === current ? 'slide active' : 'slide'} key={index}>
                        {index === current && (<img src={slide.image} alt="placeholder text" className="image"/>)}
                    </div>
                )

            })
            }

            <div className="slider-shadow1" onClick={nextSlide}></div>
            <div className="slider-shadow2" onClick={nextSlide}></div>
        </div>
    );
}

export default ImageSlider;