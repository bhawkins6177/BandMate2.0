import React from "react";
import {Card, CardActions, CardContent, Button, Typography} from '@material-ui/core';
import { useDispatch } from 'react-redux';
import {deleteSong} from "../../../actions/songs";
import useStyles from './styles';    // you need to adjust the styles here, when you want to remove the '.' and give it a try
// my styles are not working for some reason






const Song = ({song, setSongId}) => {
    const dispatch = useDispatch();
    const classes = useStyles();
    return(
        <Card className={classes.cardS}>
           <Typography variant='h4'>{song.title}</Typography>
        <div className={classes.overlay}>
            <Typography variant='h4' color="textPrimary">{song.composer}</Typography>
            <Typography varient='h6'>{`Original Key: ${song.originalKey}`}</Typography>
            <Typography varient='h6' color='textSecondary'>{song.instruments.map((instrument)=>`${instrument}, `)}</Typography>
        </div>
        <div className={classes.overlay2}>
        </div>
        <CardContent>
            <Typography variant="h6"component='p' color="textSecondary" className={classes.notes} variant='h6'gutterBottom>Notes: {song.otherNotes}</Typography>
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