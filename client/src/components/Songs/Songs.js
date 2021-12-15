import React from 'react'
import Song from './Song/Song'
import { Grid, CircularProgress } from '@material-ui/core';
import { useSelector } from 'react-redux';

import useStyles from './styles'
import { Grow } from '@material-ui/core';


const Songs = () => {
    const songs = useSelector((state)=> state.songs)
    const classes = useStyles();

    console.log(songs)
    return (
        !songs.length ? <CircularProgress/> : (
            <Grid className={classes.container} container alignItems='stretch' spacing={3}>
                {
                    songs.map((song)=> (
                        <Grid key={song._id} item xs={12} sm={6}>
                            <Song song={song}/>
                        </Grid>
                    ))
                }
            </Grid>
        )
    );
};

export default Songs;