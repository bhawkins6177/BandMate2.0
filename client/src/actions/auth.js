import * as api from '../api/index'
//import {useNavigate} from 'react-router-dom';



export const signup = (formInfo, navigate)=> async(dispatch)=> {
    try {
        const { data } = await api.signUp(formInfo);

        dispatch({type: 'AUTHENTICATION', data});
        
        navigate('/');
    } catch (err) {
        console.log(err);
    }
}

export const signin = (formInfo, navigate)=> async(dispatch)=> {
    try {
        const { data } = await api.signIn(formInfo);

        dispatch({type: 'AUTHENTICATION', data});

        navigate('/');
    } catch (err) {
        console.log(err);
    }
}