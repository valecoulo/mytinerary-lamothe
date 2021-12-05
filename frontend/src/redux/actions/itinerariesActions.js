import axios from "axios"

const itinerariesActions = {
     getOneItinerary: (id) => {
        return async (dispatch) => {
           let response = await axios.get('http://localhost:4000/api/itinerarycity/' + id) 
           let infoItinerary = response.data.response
           console.log('only itinerary:', infoItinerary)
           dispatch({ type: 'ONE_ITINERARY', payload: infoItinerary })        
        }
     }
}

export default itinerariesActions