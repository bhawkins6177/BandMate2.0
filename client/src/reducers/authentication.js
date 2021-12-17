

const authenticationReducer = (state = {authData:null}, action) => {
    switch (action.type) {
        case 'AUTHENTICATION':
            localStorage.setItem('profile', JSON.stringify({ ...action?.data}))
            return {...state, authData: action?.data};
        default:
            return state;
            
    }
}
export default authenticationReducer;