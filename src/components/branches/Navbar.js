import React from 'react';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import {Link} from 'react-router-dom';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import '../style/Navbar.css';
const Navbar = ({changeLevel, level, handleFormat, format, closeSnabar, open}) => {

    return (
        <header className="Navbar">
            <div className="log">
                <Link to="/">react color picker</Link>
            </div>
            <div className="sliderContainer">
                <span>Level: {level}</span>
                <div className="slider">
                    <Slider defaultValue={level} min={100} max={900}  step={100} onAfterChange={changeLevel}/>
                </div>
            </div>
            <div className="select-container">
                <Select value={format} onChange={handleFormat}>
                    <MenuItem value="hex">HEX - #ffffff</MenuItem>
                    <MenuItem value="rgb">RGB - rgb(255, 255, 255)</MenuItem>
                    <MenuItem value="rgba">RGBA - rgba(255, 255, 255, 0.1)</MenuItem>
                </Select>
            </div>
            <Snackbar 
                anchorOrigin={{ vertical:'bottom', horizontal:'left'}} 
                open={open} autoHideDuration={3000} 
                message={<span style={{fontSize:"1.2rem"}} id="message-id">Format changed  to {format.toUpperCase()}!</span>}
                ContentProps={{
                    "aria-describedby":"message-id"
                }}
                onClose={closeSnabar}
                action={[
                    <IconButton onClick={closeSnabar} color="inherit" key="close" aria-label="close">
                        <CloseIcon/>
                    </IconButton>
                ]}
             />
        </header>
    )
}

export default Navbar
