import  { combineReducers } from 'redux';

import songs from './songs';
import authenticationReducer from './authentication';

export default combineReducers({
    songs,  
    authenticationReducer   // since key and value are the same I do not need to do Songs: Songs 
})