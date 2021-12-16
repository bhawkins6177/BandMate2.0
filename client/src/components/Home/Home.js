import React, {useEffect, useState} from "react";
import { useDispatch } from 'react-redux';
import {Grow, Container, Grid} from '@material-ui/core';
import Songs from "../Songs/Songs";
import SongForm from "../SongForm/SongForm";

import { getSongs } from '../../actions/songs';



const Home = () => {

    const [songId, setSongId] = useState(null);
   // const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(getSongs())
    }, [songId, dispatch])

    return (
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

    )
};

export default Home;