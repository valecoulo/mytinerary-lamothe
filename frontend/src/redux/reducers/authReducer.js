const authReducer = (state = {userName: null,email: null, _id: null}, action) => {
    
    switch(action.type) {
        case "LOGGED": 
            return {
                ...state, 
                userName: action.payload.userName,
                email: action.payload.email
            }
        default: 
            return state
    }
}

export default authReducer