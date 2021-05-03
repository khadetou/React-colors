import React, {useState} from 'react';
import Navbar from './branches/Navbar';
import Footer from './branches/Footer';
import ColorBox from './branches/ColorBox';
import {Link} from 'react-router-dom';
const SingleColorPalette = ({palette, colorId}) => {
    const {colors, paletteName, emoji, id} = palette;
  
    const [format, setFormat] = useState('hex');
    const [open, setOpen] = useState(false);

  

  

    const changeFormat = (e)=> {
            setOpen(true);
            setFormat(e.target.value);
    };

    const closeSnabar = ()=>{
        setOpen(false);
    }


    const gatherShades = (palette, colorI)=>{
        let shades =[];

        for (let key in palette){
            shades = shades.concat(
                palette[key].filter(color=> color.id ===  colorI)
            )
        }
    
        return shades.slice(1);
    }
    const _shades = gatherShades(colors, colorId);

    const colorBoxes = _shades.map((color, l) => (<ColorBox  cName={color} showLink={false} key={l} format={format}/> 
        ));

     
    return (
        <div className="SingleColorPalette Palette">
            <Navbar showLevel={false} handleFormat ={changeFormat} format={format} open={open} closeSnabar={closeSnabar}/>
            <div className="Palette-colors">
                {colorBoxes}
                <div className="go-back ColorBox">
                    <Link to={`/palette/${id}`} style={{backgroundColor:`${colorBoxes[6].props.cName.hex}`}}  className="copy-button light-text">Go back</Link>
                </div>
            </div>
            <Footer paletteName ={paletteName} emoji={emoji}/>
        </div>
    )
}

export default SingleColorPalette;
