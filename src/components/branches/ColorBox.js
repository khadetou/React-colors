import React, {useState} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import '../style/ColorBox.css';

const ColorBox = ({...bgcl}) => {
    const [copied, setCopied] = useState(false);

    const changeCopyState = ()=>{
        setCopied(true, setTimeout(()=> setCopied(false), 1500));
    }

    const {color, name} = bgcl.backgroundColor;
    return (
        <CopyToClipBoard text ={color} onCopy={changeCopyState}>
            <div style={{backgroundColor:color}} className="ColorBox"> 

                <div className={`copy-overlay ${copied && "show"}`} style={{backgroundColor:color}}>
                </div>

                <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{color}</p>
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
