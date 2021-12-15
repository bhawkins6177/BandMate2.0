import React from "react";
import useStyles from './styles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

// no icons, didnt work last time not sure why 

const Song = ({song}) => {
    const classes = useStyles();

// implement the instruments how the tags were implemented 
    return(
        <Card className={classes.card}>
           <Typography variant='h6'>{`Title: ${song.title}`}</Typography>
        <div className={classes.overlay}>
            <Typography variant='h6'>{`Writer: ${song.composer}`}</Typography>
            <Typography varient='h6'>{`Original Key: ${song.originalKey}`}</Typography>
            <Typography varient='h8' color='textSecondary'>Instruments: {song.instruments.map((instrument)=>`${instrument}, `)}</Typography>
        </div>
        <div className={classes.overlay2}>
        </div>
        <CardContent>
            <Typography className={classes.title} variant='h6'gutterBottom>Notes: {song.otherNotes}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={()=>{}}>
                Delete
            </Button>
            <Button style={{color:'Blue'}} size='small' onClick={()=>{}}>
                Edit
            </Button>
        </CardActions>
        </Card>
    );
}

export default Song; 