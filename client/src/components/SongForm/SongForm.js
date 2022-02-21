import React, {useState, useEffect} from 'react'
import { TextField, Button, Typography, Paper } from '@material-ui/core';
import {useDispatch, useSelector} from 'react-redux';

import useStyles from './styles'
import { createSong,updateSong } from '../../actions/songs';


const SongForm = ({songId, setSongId}) => {
    const classes = useStyles();
    const song = useSelector((state)=> songId ? state.songs.find((s)=>s._id === songId): null);
    const dispatch = useDispatch();
    const user = JSON.parse(localStorage.getItem('profile'))

    useEffect(()=>{
        if(song) setSongData(song)
    },[song])
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

   

    const handleSubmit = (e) =>{
        e.preventDefault();
        
        if(songId === 0 ){// can I remove the === 0 part? 0 means false so I think so
            dispatch(createSong({...songData, name: user?.result?.name}));
            
        } else {
            dispatch(updateSong(songId,{...songData, name: user?.result?.name}))
            //dispatch(updateSong(songId, songData))
        }
        clear();
    }
// check the above code for issues later

// disabled so people can use the app withou signing in
// if(!user?.result?.name) {
//     return(
//         <Paper className={classes.paper}>
//             <Typography variant='h6' align='center'>
//                 Please Sign In to start managing your Band!
//             </Typography>
//         </Paper>
//     )
// }

    const clear = () =>{ 
        //e.preventDefault();
        setSongId(0);
        setSongData({
        title: '',
        composer: '',
        instruments: [],
        originalKey: '',
        maleLead: false,
        femalLead: false,
        duet: false,
        difficulty: '',
        otherNotes: '' 
        })
    }


    return (
        <Paper className={classes.paper}>
            <form autoComplete='off' noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography varient='h6'>{songId ? 'Editing ' : 'Add '}a Song</Typography>
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
                label='Other Notes' 
                fullWidth 
                value={songData.otherNotes}
                onChange={(e) => setSongData({...songData, otherNotes: e.target.value })}
                />
                <TextField
                name='instruments'
                variant='outlined'
                label='Instruments(seperate w/comma)'
                fullWidth
                multiline
                value={songData.instruments}
                onChange={(e)=>setSongData({...songData, instruments: e.target.value.split(',')})}
                />
               
                <Button className={classes.buttonSubmit} varient='contained' color='primary' size='large' type='submit' fullWidth>Submit</Button>
                <Button varient='contained' color='secondary' size='small' onClick={clear} fullWidth>Clear</Button>
            </form>
        </Paper>
    );
};

export default SongForm;