import React from 'react'
import ColorBox from './branches/ColorBox';
import './style/Palette.css';
const Palette = ({...cls}) => {

    const colorBox = cls.colors.map((color, k)=>(
        <ColorBox backgroundColor={color} key={k}/>
    ))
    
    return (
        <div className="Palette">
            {/* Navbar */}
                <div className="Palette-colors">
                    {colorBox}
                </div>
            {/* Footer */}
        </div>
    )
}

export default Palette
