import axios from "axios"

const itinerariesActions = {
     getOneItinerary: (id) => {
        return async (dispatch) => {
           let response = await axios.get('http://localhost:4000/api/itinerarycity/' + id) 
           let infoItinerary = response.data.response
           dispatch({ type: 'ONE_ITINERARY', payload: infoItinerary })        
        }
     },
     sendComment: (commentInfo)=>{
      return async()=>{
         const response = await axios.post('http://localhost:4000/api/itinerary/comments', commentInfo)
         return response
      }
   },

   deleteComment: (IDs)=> {
      return async()=>{
         console.log("llegue a itineraryAction:", IDs);
         const response = await axios.delete('http://localhost:4000/api/itinerary/comments',  {data: IDs})
         console.log("deletecommentresponse:",response) 
         return response.data.response
      }
   },

   editComment: (itineraryId, commentInfo)=> {
      return async()=>{
         const response = await axios.put('http://localhost:4000/api/itinerary/comments/' + itineraryId, commentInfo )
         return response.data.response
      }
   },
   likeItinerary: (id, token) =>{
      return async () => {
              try{
                  const response = await axios.put(`http://localhost:4000/api/itineraries/like/${id}`, {},{
                      headers:{
                          Authorization: `Bearer ${token}`
                      }
                  })
                  return response
              } catch(error) {
                  console.error(error)
              }
      }
  }
}

export default itinerariesActions