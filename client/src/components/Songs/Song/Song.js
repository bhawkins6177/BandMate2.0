import React from "react";
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {deleteSong} from "../../../actions/songs";
import useStyles from './styles'       // my styles are not working for some reason

// no icons, didnt work last time not sure why 




const Song = ({song, setSongId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    

    
    return(
        <Card className={classes.card}>
           <Typography variant='h4'>{song.title}</Typography>
        <div className={classes.overlay}>
            <Typography color='textSecondary' variant='h6'>{song.composer}</Typography>
            <Typography varient='h6'>{`Original Key: ${song.originalKey}`}</Typography>
            <Typography varient='h6' color='textSecondary'>{song.instruments.map((instrument)=>`${instrument}, `)}</Typography>
        </div>
        <div className={classes.overlay2}>
        </div>
        <CardContent>
            <Typography component='p' className={classes.title} variant='h6'gutterBottom>Notes: {song.otherNotes}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={()=>dispatch(deleteSong(song._id))}>
                Delete
            </Button>
            <Button style={{color:'Blue'}} size='small' onClick={()=>{setSongId(song._id)}}>
                Edit
            </Button>
        </CardActions>
        </Card>
    );
}

export default Song; 