import * as api from '../api';

// action creators are functions that return an action, an action is just an object that has a type: and a payload:

// wow redux-thunk has weird syntax 0_0
export const getSongs = () => async (dispatch) => {

    try {
        const { data } = await api.fetchSongs(); 

        dispatch({ type: 'FETCH_ALL', payload: data })
    } catch (err) {
        console.log(err.message)
    }
}

export const createSong = (song) => async(dispatch) => {
    try {
        const { data } = await api.createSong(song)//making an api request to our api server

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
        console.log(err.message)
    }

}