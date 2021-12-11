const authReducer = (state = {name: null, _id: null}, action) => {
    
    switch(action.type) {
        case "LOGGED": 
            return {
                ...state, 
                name: action.payload.name
            }
        default: 
            return state
    }
}

export default authReducer