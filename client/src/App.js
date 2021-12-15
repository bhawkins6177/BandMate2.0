import React, {useState, useEffect} from "react";
// everythin that was in App.js in my first version should not be in Main.js so I can set up react routers. 
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getSongs } from "./actions/songs.js";

import Songs from "./components/Songs/Songs.js";
import SongForm from "./components/SongForm/SongForm.js";
import bandmateimage from './images/bandmate.png'
// maybe put a logo in later?
import useStyles from './styles.js';

const App = () => {

    const [songId, setSongId] = useState(null);
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSongs())
    }, [songId, dispatch])

    return(
        <Container maxWidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} varient="h2" align="center">Band Mate</Typography>
                <img className="classes.image" src={bandmateimage} alt='icon' height='60' />
            </AppBar>
            <Grow in>
                <Container>
                    <Grid container justifyContent='space-between'alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Songs 
                            setSongId={setSongId}
                            />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SongForm
                                songId={songId} 
                                setSongId={setSongId}
                                />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default App;