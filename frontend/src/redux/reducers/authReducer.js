const authReducer = (state = {userName: null,email: null, _id: null, userImage: null}, action) => {
    
    switch(action.type) {
        case "LOGGED": 
            return {
                ...state, 
                userName: action.payload.userName,
                email: action.payload.email,
                userImage: action.payload.userImage
        } 
        case "LOG_OUT_USER" :
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            localStorage.removeItem('userImage')
            localStorage.removeItem('id')
            return{
                token:null,
                userName:null,
                userImage:null,
                _id:null
            }

        default: 
            return state
    } 
}

export default authReducer