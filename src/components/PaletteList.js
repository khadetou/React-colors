import React from 'react';
import MiniPallete from './branches/MiniPalette';
import { makeStyles } from '@material-ui/core/styles';


const useStyle= makeStyles({
    root:{
        backgroundColor: "blue",
        height: "100vh",
        display :"flex",
        alignItems: "flex-start",
        justifyContent: "center",
    },

    container:{
            width: "50%",
            display: "flex",
            alignItems: "flex-start",
            flexDirection: "column",
            flexWrap: "wrap"
    },

    nav:{
        color: "#fff",
        width: "100%",
        display: "flex",
        justifyContent: "space-between"
    },
    palets:{
        boxSizing: "border-box",
        width: "100%",
        display: "grid",
        gridTemplateColumns: "repeat(3, 30%)",
        gridGap: "5%"
    }
});
const PaletteList = ({palettes}) => {

    const classes = useStyle();

    return (
        <div className={classes.root}>
            <div className={classes.container}>
                    <nav className={classes.nav}>
                        <h1>React colors</h1>
                    </nav>

                    <div className={classes.palets}>
                        {palettes.map(palette=>(
                            <MiniPallete {...palette} key={palette.id}/>
                        ))}
                    </div>

            </div>
        </div>
    )
}

export default PaletteList;
