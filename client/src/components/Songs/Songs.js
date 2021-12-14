import React from 'react'
import Song from './Song/Song'

import { useSelector } from 'react-redux';

import useStyles from './styles'


const Songs = () => {
    const songs = useSelector((state)=> state.songs)
    const classes = useStyles();

    console.log(songs)
    return (
        <div>
            <h1>SONGS</h1>
            <Song />
            <Song />
        </div>
    );
};

export default Songs;