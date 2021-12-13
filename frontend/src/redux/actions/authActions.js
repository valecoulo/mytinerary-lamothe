import axios from "axios" 

const authActions = {
    signUp: (newUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signUp", {...newUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})
            }
            else {
                alert(response.data.errors.map(error => error.message))
            }
           return response 
        }
    },

    signIn: (signUser) => {
        return async (dispatch, getState) => {
            let response = await axios.post("http://localhost:4000/api/auth/signIn", {...signUser})
            if (response.data.success){
                dispatch({type: "LOGGED", payload: response.data.response})   
            }
            else {
                console.log(response.data.errors)
            }
            return response
        }
    },
    signOutUser : () => {
        return(dispatch, getState) => {
            dispatch({type:"LOG_OUT_USER"})
        }
    },
}

export default authActions