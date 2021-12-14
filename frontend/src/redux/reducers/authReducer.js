const authReducer = (state = {userName: null,email: null, _id: null, userImage: null, token: null}, action) => {
    console.log('action:' ,action)

    switch(action.type) {
        case "LOGGED": 
        localStorage.setItem('token', action.payload.token);
        localStorage.setItem('userName', action.payload.userName);
        localStorage.setItem('userImage', action.payload.userImage);
            return {
                ...state, 
                userName: action.payload.userName,
                email: action.payload.email,
                userImage: action.payload.userImage,
                token: action.payload.token
        } 
        case "LOG_OUT_USER" :
            localStorage.removeItem('token')
            localStorage.removeItem('userName')
            localStorage.removeItem('userImage')
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