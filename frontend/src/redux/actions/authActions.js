import axios from 'axios';

const authActions = {

    userRegister: (userName, password) => {
        return async(dispatch, getState) => {
            try {
                const user = await axios.post('http://localhost:4000/api/signUp', {userName, password})
                dispatch({ type: 'user', payload: {userName} })
            } catch(error) {

            }
        }
    }

}