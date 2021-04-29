import React from 'react'
import '../style/ColorBox.css';

const ColorBox = ({...bgcl}) => {
    const {color, name} = bgcl.backgroundColor;
    return (
        <div style={{backgroundColor:color}} className="ColorBox">

           <div className="copy-container">
               <div className="box-content">
                   <span>{name}</span>
               </div>
           <button className="copy-button">Copy</button>
           </div>
            <span className="see-more">MORE</span>
        </div>
    )
}

export default ColorBox
