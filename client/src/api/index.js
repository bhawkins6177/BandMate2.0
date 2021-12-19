import axios from 'axios';

const API = axios.create({baseURL: 'http://localhost:5000'});


//const url = 'http://localhost:5000/songs'

export const createSong= (newSong) => API.post('/songs', newSong);

export const fetchSongs = () => API.get('/songs');

export const deleteSong = (id) =>API.delete(`/songs/${id}`);

export const updateSong = (id, updatedSong) => API.patch(`/songs/${id}`, updatedSong);

export const signIn = (formInfo) => API.post('/user/signin', formInfo)

export const signUp = (formInfo) => API.post('/user/signup', formInfo)// this is coming up as not found, figure out why
// above link not working