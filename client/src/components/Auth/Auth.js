import React, {useState} from "react";
import { useDispatch } from 'react-redux'; 
import {Avatar, Button, Paper, Grid, Container, Typography, TextField } from "@material-ui/core";
import {GoogleLogin} from 'react-google-login';
import {useNavigate} from 'react-router-dom';
import useStyles from "./styles"
import {signup, signin} from '../../actions/auth'
// why cant i get my icons to work? look up documentation
//import LockOutlinedIcon from '@material-ui/icons/LockedOutlined';

// I changed my handleChange={handleChange} to onChange={handleChange} because unlike in the past I did NOT pass it as a prop from another input component
const Auth = () => {
    const dispatch = useDispatch();
    const classes = useStyles();
    const [isSignUp, setIsSignUp] = useState(false)
    const [formInfo, setFormInfo] = useState({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        confirmPassword: ''
    })
    const navigate = useNavigate();
    
    const handleChange = (e) => {
        setFormInfo({...formInfo,
        [e.target.name]: e.target.value})

    }

    const handleSubmit = (e) => {
       e.preventDefault()
       if(isSignUp){        // dispatch is always redux, signUp is the action ans we are using, and giving it the navigate(history) and the formInfo data
            dispatch(signup(formInfo, navigate))
          //  navigate('/')
       } else {
            dispatch(signin(formInfo, navigate))
           // navigate('/')
            
       }
       console.log(isSignUp);

       
       //console.log(formInfo)

    }

    
    const googleLoginSuccess = async (res) => {
        const token = res?.tokenId
        const result = res?.profileObj // optional chaining operator fixed error "cannot get property of underfined"
        try {
            dispatch({type: 'AUTHENTICATION', data: {result, token}});
            // how can I redirect back to home after sign in? Something with react router?
            navigate('/')
            
        } catch (err) {
            console.log(err)
        }
        
       
    }
    const googleLoginFailure = () => {
        console.log("Google Sign In was not successfull. Try again in a moment.")
    }
    const swapView = (e) => {
        e.preventDefault();
        setIsSignUp((prevIsSignUp)=>!prevIsSignUp)
    }
    // maybe implement a show password option?
    return(
        <Container component='main' maxWidth='xs'>
            <Paper className={classes.paper} elevation={3}>
                <Avatar className={classes.avatar}>
                </Avatar>
                <Typography variant="h5">{isSignUp ? 'Sign UP' : 'Sign In'}</Typography>
                <form className={classes.form} onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                        {
                            isSignUp && (
                                <>
                                    <Grid item xs={6} md={12}>
                                        <TextField name='firstName' label='First Name' onChange={handleChange} autoFocus xs={6} variant='outlined' fullWidth required/>
                                    </Grid>
                                    <Grid item  xs={6} md={12}>
                                        <TextField name='lastName' label='Last Name' onChange={handleChange} autoFocus xs={6} variant='outlined' fullWidth required/>
                                    </Grid>
                                    
                                </>
                            )}
                            <Grid item  xs={6} md={12}>
                                <TextField name='email' label='Email Address' type="email" onChange={handleChange} autoFocus xs={6} variant='outlined' fullWidth required/>
                            </Grid>
                            <Grid item  xs={6} md={12}>
                                <TextField name='password' label='Password' type="password" onChange={handleChange} autoFocus xs={6} variant='outlined' fullWidth required/>
                            </Grid>
                            { isSignUp && 
                            <Grid item  xs={6} md={12}>
                                <TextField name="confirmPassword" label="Confirm Password" type="password"  onChange={handleChange} autoFocus xs={6} variant='outlined' fullWidth required/>
                            </Grid>
                            }
                    </Grid>
                    <GoogleLogin 
                        clientId="960444530226-6gbvo08cqnqhql93mfte8e0lv20pdnmi.apps.googleusercontent.com"   
                        render={(renderProps)=> (
                            <Button 
                                className={classes.googleButton} 
                                color='primary' 
                                fullWidth 
                                onClick={renderProps.onClick} 
                                disabled={renderProps.disabled} 
                                varient='contained'>
                                Google Sign In
                            </Button>
                        )} 
                        onSuccess={googleLoginSuccess}
                        onFailure={googleLoginFailure}
                        cookiePolicy="single_host_origin"  
                        />
                    <Button type="submit" fullWidth variant="contained" color="primary" className={classes.submit}>
                        {isSignUp ? 'Sign Up' : 'Sign In'}
                    </Button>
                    <Grid container justifyContent="flex-end">
                        <Grid>
                            <Button onClick={swapView}>
                                {isSignUp ? 'Already have an account? Sign in' : "Don't have an account? Sign up!"}
                            </Button>
                        </Grid>
                    </Grid>
                </form>
            </Paper>
        </Container>
    )

}

export default Auth;