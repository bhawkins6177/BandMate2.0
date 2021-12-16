import axios from 'axios';


const url = 'http://localhost:5000/songs'

export const fetchSongs = () => axios.get(url);
export const createSong= (newSong) => axios.post(url, newSong);
export const updateSong = (id, updatedSong) => axios.patch(`${url}/${id}`, updatedSong);
export const deleteSong = (id) =>axios.delete(`${url}/${id}`);
