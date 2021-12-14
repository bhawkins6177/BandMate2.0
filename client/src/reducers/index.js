import  { combineReducers } from 'redux';

import songs from './songs';

export default combineReducers({
    songs,     // since key and value are the same I do not need to do Songs: Songs 
})