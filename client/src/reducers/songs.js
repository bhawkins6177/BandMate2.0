



export default function songs (songs = [], action){
    switch (action.type) {
        case'UPDATE':
            return songs.map((element)=> element._id === action.payload._id ? action.payload : element );
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...songs, action.payload];
        case "DELETE":
            return songs.filter((element)=>element._id !== action.payload);
        default:
            return songs;
    }
};







