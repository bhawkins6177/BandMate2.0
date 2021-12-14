import React, {useEffect} from "react";
// everythin that was in App.js in my first version should not be in Main.js so I can set up react routers. 
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import { useDispatch } from "react-redux";
import { getSongs } from "./actions/songs";

import Songs from "./components/Songs/Songs";
import SongForm from "./components/SongForm/SongForm";
// maybe put a logo in later? look at 32 min 
import useStyles from './styles';

const Main = () => {

    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSongs())
    }, [dispatch])

    return(
        <Container maxidth="lg">
            <AppBar className = {classes.appBar} position="static" color="inherit">
                <Typography className={classes.heading} varient="h2" align="center">Band Mate</Typography>
            </AppBar>
            <Grow in>
                <Container>
                    <Grid justifyContent="space-between" alignItems="stretch" spacing={3}>
                        <Grid item xs={12} sm={7}>
                            <Songs />
                        </Grid>
                        <Grid item xs={12} sm={4}>
                            <SongForm />
                        </Grid>
                    </Grid>
                </Container>
            </Grow>
        </Container>
    )
}

export default Main;