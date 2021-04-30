import React, {useState} from 'react'
import ColorBox from './branches/ColorBox';
import Navbar from './branches/Navbar';
import './style/Palette.css';
const Palette = ({palette}) => {

    const [level, setLevel] = useState(500);

    const colorBox = palette.colors[level].map((color, k)=>(
        <ColorBox colorName={color} key={k}/>
    ))

    const changeLevel = (level)=>{
        setLevel(level);
    }
    
    return (
        <div className="Palette">

           
                <Navbar level={level} changeLevel={changeLevel}/>
          

            {/* Navbar */}
                <div className="Palette-colors">
                    {colorBox}
                </div>
            {/* Footer */}
        </div>
    )
}

export default Palette
