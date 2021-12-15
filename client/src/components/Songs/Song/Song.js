import React from "react";
import useStyles from './styles'
import {Card, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';

// no icons, didnt work last time not sure why 

const Song = ({song}) => {
    const classes = useStyles();


    return(
        <Card className={classes.card}>
           <CardMedia className={classes.media} title={song.title}/>
        <div className={classes.overlay}>
            <Typography variant='h6'>{song.composer}</Typography>
            <Typography varient='h4'>{song.originalKey}</Typography>
        </div>
        <div className={classes.overlay2}>
            <Button style={{color:'Blue'}} size='small' onClick={()=>{}}>

            </Button>
        </div>
        <CardContent>
            <Typography className={classes.title} variant='h5'gutterBottom>{song.otherNotes}</Typography>
        </CardContent>
        <CardActions className={classes.cardActions}>
            <Button size='small' color='primary' onClick={()=>{}}>
                Delete
            </Button>
        </CardActions>
        </Card>
    );
}

export default Song; 