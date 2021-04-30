import React, {useState} from 'react';
import CopyToClipBoard from 'react-copy-to-clipboard';
import '../style/ColorBox.css';

const ColorBox = ({colorName}) => {

    const [copied, setCopied] = useState(false);

    const changeCopyState = ()=>{
        setCopied(true, setTimeout(()=> setCopied(false), 1500));
    }

    const {hex, name} = colorName;
    return (
        <CopyToClipBoard text ={hex} onCopy={changeCopyState}>
            <div style={{backgroundColor:hex}} className="ColorBox"> 

                <div className={`copy-overlay ${copied && "show"}`} style={{backgroundColor:hex}}>
                </div>

                <div className={`copy-msg ${copied && "show"}`}>
                        <h1>Copied</h1>
                        <p>{hex}</p>
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
