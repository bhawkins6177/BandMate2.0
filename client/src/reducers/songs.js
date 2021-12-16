



export default function songs (songs = [], action){
    switch (action.type) {
        case'UPDATE':
            return songs.map((song)=> song._id === action.payload._id ? action.payload : song );
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...songs, action.payload];
        case "DELETE":
            return songs.filter((song)=>song._id !== action.payload);
        default:
            return songs;
    }
};







