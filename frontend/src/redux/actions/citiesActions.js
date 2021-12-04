import axios from "axios"

const citiesActions = {
     getCities: () => {
        return async (dispatch) => {
        let response = await axios.get('http://localhost:4000/api/cities')
        let info = response.data.response
        dispatch({type: 'ALL_CITIES', payload: info})
        }
     },
     getOneCity: (id) => {
        return async (dispatch) => {
           let response = await axios.get('http://localhost:4000/api/city/' + id) 
           let infoCity = response.data.response
           dispatch({ type: 'ONE_CITY', payload: infoCity })        
        }
     },
     getFiltered: (cities, e) => {
        return (dispatch) => {
           dispatch({ type: 'GET_CITIES_FILTERED', payload: {cities, e} })
        }
     }
}

export default citiesActions