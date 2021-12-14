import React from "react";
import Song from "./Song/Song";
import useStyles from './styles'
const Songs = () => {

    const classes = useStyles();
    return(
        <div>
            <h1>Songs</h1>
            <Song />
            <Song />
        </div>
    );
}

export default Songs;