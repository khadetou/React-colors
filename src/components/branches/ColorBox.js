import React, {useState} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import '../style/ColorBox.css';

const ColorBox = ({colorName, format}) => {

    const [copied, setCopied] = useState(false);

    const changeCopyState = ()=>{
        setCopied(true, setTimeout(()=> setCopied(false), 1500));
    }
    
    const {name} = colorName;
   
    return (
        <CopyToClipBoard text ={colorName[format]} onCopy={changeCopyState}>
            <div style={{backgroundColor:colorName[format]}} className="ColorBox"> 

                <div className={`copy-overlay ${copied && "show"}`} style={{backgroundColor:colorName[format]}}>
                </div>

                <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{colorName[format]}</p>
                </div> 

                <div className="copy-container">

                    <div className="box-content">
                        <span>{name}</span>
                    </div>
                    <button className="copy-button">Copy</button>
                </div>
                <span className="see-more">MORE</span>
            </div>
        </CopyToClipBoard>
    )
}


export default ColorBox
