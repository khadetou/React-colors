import React, {useState} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import '../style/ColorBox.css';
import chroma from 'chroma-js';
import {Link} from 'react-router-dom';




const ColorBox = ({cName, format, paletteId, showLink}) => {

    const [copied, setCopied] = useState(false);
    
    const changeCopyState = ()=>{
        setCopied(true, setTimeout(()=> setCopied(false), 1500));
    }
    
    const {name, id} = cName;
    const isDarkerColor= chroma(cName.hex).luminance() <= 0.2;

    return (
        <CopyToClipBoard text ={cName[format]} onCopy={changeCopyState}>
            <div style={{backgroundColor:cName[format]}} className="ColorBox"> 

                <div className={`copy-overlay ${copied && "show"}`} style={{backgroundColor:cName[format]}}>
                </div>

                <div className={isDarkerColor?`copy-msg ${copied && "show"}`:`dark-text copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{cName[format]}</p>
                </div> 

                <div className="copy-container">

                    <div className="box-content">
                        <span className={isDarkerColor?"light-text": undefined}>{name}</span>
                    </div>
                    
                    <button className={isDarkerColor? "light-text copy-button": "copy-button"}>Copy</button>
                </div>
              {showLink && (  <Link to={`/palette/${paletteId}/${id}`} onClick={e=> e.stopPropagation()}>

                    <span className={isDarkerColor? "light-text see-more": "see-more"}>MORE</span>
                </Link>)}
            </div>
        </CopyToClipBoard>
    )
}

export default ColorBox
