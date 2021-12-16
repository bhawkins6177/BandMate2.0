import React from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import useStyles from './styles';
import {Link} from 'react-router-dom';

const Navbar = () => {
    const classes = useStyles();

    const user = null;
    return (
        <AppBar className = {classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} varient="h1" align="center">Band Mate</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.result.name} src={user.result.imageUrl}>{user.result.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} varient='h6'>{user.result.name}</Typography>
                        <Button varient="contained" className={classes.logout} color='secondary'>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' varient='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;