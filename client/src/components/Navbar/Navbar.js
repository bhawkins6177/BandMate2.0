import React, {useState, useEffect} from "react";
import { AppBar, Toolbar, Typography, Button, Avatar } from "@material-ui/core";
import useStyles from './styles';
import {Link, useNavigate, useLocation} from 'react-router-dom';
import { useDispatch } from "react-redux";


const Navbar = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('profile')))
    const classes = useStyles();
    const location = useLocation();

    // FIX BUG the name only shows at the top when I refresh the page after I sign in.

    useEffect(()=> {
        const token = user?.token

        // FIX BUG name in navbar does is only correct on refresh.

        setUser(JSON.parse(localStorage.getItem('profile')))
    },[location])

    const logout = () => {
        dispatch({ type: "LOGOUT"})
        setUser(null)
        navigate('/auth')
    }

    //  console.log(user.googleInfo)
    return (
        <AppBar className = {classes.appBar} position="static" color="inherit">
            <div className={classes.brandContainer}>
                <Typography component={Link} to='/' className={classes.heading} varient="h1" align="center">Band Mate</Typography>
            </div>
            <Toolbar className={classes.toolbar}>
                {user ? (
                    <div className={classes.profile}>
                        <Avatar className={classes.purple} alt={user.googleInfo.name} src={user.googleInfo.imageUrl}>{user.googleInfo.name.charAt(0)}</Avatar>
                        <Typography className={classes.userName} varient='h6'>{user.googleInfo.name}</Typography>
                        <Button varient="contained" className={classes.logout} color='secondary' onClick={logout}>Logout</Button>
                    </div>
                ) : (
                    <Button component={Link} to='/auth' varient='contained' color='primary'>Sign In</Button>
                )}
            </Toolbar>
        </AppBar>
    )

}

export default Navbar;