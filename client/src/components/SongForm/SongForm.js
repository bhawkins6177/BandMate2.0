import React, {useState} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';

import {useDispatch} from 'react-redux';

import useStyles from './styles'
import { createSong } from '../../actions/songs';

const SongForm = () => {
    const classes = useStyles();

    const [songData, setSongData] = useState({
        title: '',
        composer: '',
        instruments: [],
        originalKey: '',
        maleLead: false,
        femalLead: false,
        duet: false,
        difficulty: '',
        otherNotes: '' 
    });

    const dispatch = useDispatch();

    const handleSubmit = (e) =>{
        e.preventDefault();
        dispatch(createSong(songData));
    }

    const clear = (e) =>{ 
        e.preventDefault();
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varient='h6'>Add a Song</Typography>
                <TextField 
                name = 'title' 
                variant = 'outlined' 
                label='Title' 
                fullWidth 
                value={songData.title}
                onChange={(e) => setSongData({...songData, title: e.target.value })}
                />
                 <TextField 
                name = 'composer' 
                variant = 'outlined' 
                label='Composer ' 
                fullWidth 
                value={songData.composer }
                onChange={(e) => setSongData({...songData, composer: e.target.value })}
                />
                <TextField 
                name = 'originalKey' 
                variant = 'outlined' 
                label='Original Key' 
                fullWidth 
                value={songData.originalKey }
                onChange={(e) => setSongData({...songData, originalKey: e.target.value })}
                />
                <TextField 
                name = 'otherNotes' 
                variant = 'outlined' 
                label='Othe Notes' 
                fullWidth 
                value={songData.otherNotes}
                onChange={(e) => setSongData({...songData, otherNotes: e.target.value })}
                />
                <Button className={classes.buttonSubmit} varient='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button varient='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default SongForm;