const citiesReducer = (state= {oneItinerary: []}, action) => {
    switch(action.type) {
      case 'ONE_ITINERARY':
         return {
            ...state,
            oneItinerary: action.payload
         }
       default:
         return state
    }
 }

 export default citiesReducer;