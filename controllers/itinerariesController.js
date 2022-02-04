const Itinerary = require('../models/Itinerary');
const User = require('../models/User');

const itinerariesController = {
    allItnieraries: async(req, res) => {
      let itinerary
    try{
       itinerary = await Itinerary.find().populate('city')
        
    }catch(error){
        error = error
        console.error(error)
    }      

    res.json({ response: itinerary })
    },
    oneItinerary: async(req, res) => {
        let itinerary
        const id = req.params.id        
        try{
            itinerary = await Itinerary.findOne({_id:id}).populate('city')
        }catch(error){
            console.log("entro al catch one itinerary",error)
        }
        res.json({response:itinerary})
    },
    newItinerary: (req, res) => {
      
        const { authorName, authorImg, price, duration, city, likes, hashtags } = req.body
        
        new Itinerary({ authorName, authorImg, price , duration, city, likes, hashtags }).save()
        .then(() => res.json({success: true}))
    },
    deleteItinerary: async (req, res) => {
      let itinerary
      const id = req.params.id
      try {
        itinerary = await Itinerary.findOneAndDelete({ _id: id })
      } catch(error) {
        console.log('entro al catch delete',error)
      }
      res.json({response: itinerary})
    },
    modifiedItinerary: async(req, res) => {
    let id = req.params.id
    let itinerary = req.body
    let actualizado
    try{
        actualizado = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new:true})
        console.log("modifiedItinerary",actualizado)
    }catch(error){
        console.log("entro al catch modified",error)
    }
    res.json({success:actualizado ? true : false})
    },
    getItineraryByCity: async (req, res) => {
      try {
        const cityItinerary = await Itinerary.find({city: req.params.id})
        res.json({ response: cityItinerary })
      } catch (err) {
        console.log('entro a l catrch',err);
      }
    },
    getAllComments: async(req, res)=>{
      try {
         const itineraryId = req.params.id
         var itinerarySelected = await Itinerary.findOne({_id:itineraryId})
      }catch(err){
         console.log('Caí en el catch y el error es: '+err)
      }
      res.json({response: itinerarySelected.comments})
   },

   addNewComment: async(req, res)=>{
      try {
         var {userId, comment, itineraryId } = req.body
         var userInfo = await User.findOne({_id: userId})
         var itineraryCommented = await Itinerary.findOneAndUpdate(
            {_id: itineraryId},
            {$push: {comments: {userId, userName: userInfo.userName, userImg: userInfo.userImage, comment}}}, 
            {new: true}
            ) 
            console.log("addnewCommetn",itineraryCommented);
      }catch (err){
         console.log('catch addnew comment: '+err)
      }
      res.json({response: itineraryCommented.comments})
   },

   editComment: async(req, res)=>{
      console.log("bodyEdit:",req.body, req.params.id);
      try {
         const itineraryId = req.params.id
         const commentId = req.body.commentId
         const newComment = req.body.newComment

         var itineraryToModify = await Itinerary.findOne({_id: itineraryId})
         
         var itineraryModified = await Itinerary.findOneAndUpdate( 
            {_id: itineraryId, "comments._id": commentId},  
            {$set: {"comments.$.comment": newComment}},            
            {new: true}
         )      

      }catch(err){
         console.log("catch editcomment" + err)
      }
      res.json({response: itineraryModified.comments})
   },

   deleteComment: async(req, res)=>{
      console.log("entre al coontrolador deletcomment")
      console.log("delete req body: ", req.body)
      try {
          const itineraryId = req.body.itineraryId
          const commentId = req.body.commentId
            var itineraryModified = await Itinerary.findOneAndUpdate(
               {_id: itineraryId},
               {$pull: {comments: {_id: commentId}}}, 
               {new: true}
            ) 

      }catch(err){
          console.log('deleteComment catch: ', err)
      }
      res.json({response: itineraryModified.comments})
  },
  likeItinerary:(req,res) =>{
   Itinerary.findOne({_id: req.params.id})
   .then((itinerary) =>{
       if(itinerary.likes.includes(req.user._id)){
          Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
          .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
          .catch((error) => console.log("likeitinarry",error))
       }else{
           Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
           .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
           .catch((error) => console.log('likeitinerary catch:',error))
       }
   })
   .catch((error) => res.json({success:false, response:error}))
},
}


module.exports = itinerariesController;