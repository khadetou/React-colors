import React from 'react'
import '../style/ColorBox.css';

const ColorBox = ({...bgcl}) => {
    const {color, name} = bgcl.backgroundColor;
    return (
        <div style={{backgroundColor:color}} className="ColorBox">
            <span>{name}</span>
            <span>MORE</span>
        </div>
    )
}

export default ColorBox
