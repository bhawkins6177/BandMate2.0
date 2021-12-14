import React from "react";
// everythin that was in App.js in my first version should not be in Main.js so I can set up react routers. 
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';

// maybe put a logo in later? look at 32 min 
const Main = () => {
    return(
        <Container maxidth="lg">
            <AppBar position="static" color="inherit">
                <Typography varient="h2" align="center">Band Mate</Typography>
            </AppBar>
        </Container>
          
    )
}

export default Main;