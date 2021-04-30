import React from 'react'
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../style/Navbar.css';
const Navbar = ({changeLevel, level}) => {
    return (
        <div className="Navbar">
            <div className="log">
                <a href="/">react color picker</a>
            </div>
            <div className="sliderContainer">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900}  step={100} onAfterChange={changeLevel}/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
