
export default (songs = [], action) => {// this is our default data
    switch (action.type) {
        case "FETCH_ALL":
            return action.payload;
        case "CREATE":
            return [...songs, action.payload];
        default:
            return songs;
    }
}


