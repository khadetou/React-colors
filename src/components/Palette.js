import React, {useState} from 'react'
import ColorBox from './branches/ColorBox';
import Navbar from './branches/Navbar';
import Footer from './branches/Footer';
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

    const {colors, id}= palette;    
  
    const colorBox = colors[level].map((color, k)=>(
        <ColorBox cName={color} key={k} format ={format} paletteId={id} showLink={true}/>
    ))

     const {paletteName, emoji} = palette

    return (
        <div className="Palette">

                <Navbar showLevel={true} level={level} changeLevel={changeLevel} handleFormat ={changeFormat} format={format} open={open} closeSnabar={closeSnabar}/>

            {/* Navbar */}
                <div className="Palette-colors">
                    {colorBox}
                </div>
            

                 <Footer paletteName ={paletteName} emoji={emoji}/>
            
        </div>
    )
}

export default Palette
