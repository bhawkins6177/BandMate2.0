import * as api from '../api';

// action creators are functions that return an action, an action is just an object that has a type: and a payload:

// I need to use redux-thunk for async actions
export const getSongs = () => async (dispatch) => {

    try {
        const { data } = await api.fetchSongs(); //making an api request to our api server

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const createSong = (song) => async(dispatch) => {
    try {
        const { data } = await api.createSong(song)

        dispatch({ type: 'CREATE', payload: data});
    } catch (err){
        console.log(err);
    }
} 

export const updateSong = (id, song) => async (dispatch) => {
    try {
        const { data } = await api.updateSong(id, song);

        dispatch({ type: 'UPDATE', payload: data})
    } catch(err) {
        console.log(err)
    }

}

export const deleteSong = (id) => async (dispatch) => {
    try {
        await api.deleteSong(id);

        dispatch({type:'DELETE', payload: id})
    } catch (err) {
        console.log(err);
    }
}