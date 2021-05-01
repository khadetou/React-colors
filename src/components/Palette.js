import React, {useState} from 'react'
import ColorBox from './branches/ColorBox';
import Navbar from './branches/Navbar';
import './style/Palette.css';
const Palette = ({palette}) => {

    const [level, setLevel] = useState(500);
    const [format, setFormat] = useState('hex');
    const [open, setOpen] = useState(false);

   

    const changeLevel = (level)=> {
        setLevel(level)
    };
    

    const changeFormat = (e)=> {
            setOpen(true);
            setFormat(e.target.value);
    };

    const closeSnabar = ()=>{
        setOpen(false);
    }

    const colorBox = palette.colors[level].map((color, k)=>(
        <ColorBox colorName={color} key={k} format ={format}/>
    ))

     const {paletteName, emoji} = palette
    return (
        <div className="Palette">

                <Navbar level={level} changeLevel={changeLevel} handleFormat ={changeFormat} format={format} open={open} closeSnabar={closeSnabar}/>

            {/* Navbar */}
                <div className="Palette-colors">
                    {colorBox}
                </div>
            
            <footer className="Palette-footer">
            {paletteName}
            <span className="emoji">{emoji}</span>
            
            </footer>
        </div>
    )
}

export default Palette
