import { useState, useEffect } from 'react'
import { connect } from 'react-redux';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faPaperPlane} from '@fortawesome/free-solid-svg-icons'
import {FaTrashAlt} from "react-icons/fa"
import {FaRegEdit} from "react-icons/fa"
import {IoSend} from 'react-icons/io5'
import 'react-toastify/dist/ReactToastify.css'
import Swal from 'sweetalert2'
import itinerariesActions from '../redux/actions/itinerariesActions';

const Comments = (props) => {

   
   const { userLogged, itineraryId, comments} = props
   
   
   const [allComments, setAllComments] = useState(comments)
   const [commentContent, setCommentContent] = useState('')
   const [isEditingComment, setIsEditingComment] = useState(false)
   const [editedComment, setEditedComment] = useState('')
   const [commentBeingEdited, setCommentBeingEdited] = useState('')

   useEffect(() => {
      console.log('matu', comments);
      console.log('hur', props.itineraries)
   }, [])

   console.log('comments', props)


 
     const sendComment = async()=>{
        if(commentContent !== ''){
           setCommentContent('')
           const response = await props.sendComment({ userId: userLogged._id, comment: commentContent, itineraryId: itineraryId }) 
            setAllComments(response.data.response)
        }
     }

     const deleteSingleComment_ = async(IDs)=>{
        console.log('llegue a deletedignelecomment', IDs);
        const response = await props.deleteComment(IDs)
        setAllComments(response)
     }

     const deleteSingleComment = async(IDs)=>{
      Swal.fire({
         title: 'Are you sure?',
         text: "You are going to delete your comment!",
         icon: 'warning',
         showCancelButton: true,
         confirmButtonColor: '#3085d6',
         cancelButtonColor: '#d33',
         confirmButtonText: 'Yes, delete it!'
      }).then(result => {
          if (result.isConfirmed) {
            deleteSingleComment_(IDs)
            Swal.fire(
                'Deleted!',
                'Your comment has been deleted',
                'success'
                )
            }
      })
   }
      
     const startEditingComment = (value, commentId)=>{
        setIsEditingComment(!isEditingComment)
        setEditedComment(value)
        setCommentBeingEdited(commentId)
     }
  
     const sendEditedComment = async(itineraryId, commentInfo)=>{
        setIsEditingComment(!isEditingComment)
        const response = await props.editComment(itineraryId, commentInfo)
        setAllComments(response)
     }

     const Alert = Swal.mixin({
        toast: true,
        position: 'top-end',
        showConfirmButton: false,
        timer: 3000,
        timerProgressBar: true,
        didOpen: toast => {
          toast.addEventListener('mouseenter', Swal.stopTimer)
          toast.addEventListener('mouseleave', Swal.resumeTimer)
        }
      })

     const notify = (error)=>{
        Alert.fire({
            title: `Must be logged to ${error}!`,
            icon: 'error'
        })
     }


    return (
        <div className="comments-general-container">
        <div className="commentsTittle-container">
           <h1 className="commentsTittle">Comments</h1>
        </div>
        <div className="all-comments-container">
           {allComments.map((comment, index)=>{
              return (
                 <div className="comment" key={index}>
                    <div className="x-alineator">
                       <div>
                         <img width={50} className='authorComment-img' src={comment.userImg} />
                       </div>
                       <div className="commentContent-container">
                          
                       
                       
                          <p className={userLogged ? comment.userId === userLogged._id 
                             ? !isEditingComment ? "comment-author" : "displayNone"
                             : "comment-author" 
                          : "comment-author"}>
                             <strong> {comment.userName}</strong>
                          </p>
                          
                          <p className={ userLogged ? comment.userId === userLogged._id
                                ? !isEditingComment ? "comment-content" : "displayNone"
                                : "comment-content"
                          : "comment-content"
                          } >{comment.comment}</p>
                          
                          {userLogged && comment.userId === userLogged._id && (
                             <>
                                 <input 
                                    type="text"
                                    value={commentBeingEdited === comment._id ? editedComment : comment.comment}
                                    onChange={(e)=> setEditedComment(e.target.value)}
                                    className={isEditingComment ? "editingInput": "displayNone"}
                                 />
                                <IoSend className={isEditingComment ? "sendEditedIcon": "displayNone"} 
                                onClick={()=>
                                 sendEditedComment(itineraryId, {commentId: comment.userId, newComment: editedComment})} />
                             </>
                          )}
                       </div>

                       {userLogged && comment.userId === userLogged._id && (
                                <div className="modifyCommentIcons-container">
                                    <FaRegEdit  onClick={()=> startEditingComment(comment.comment, comment._id)} className={!isEditingComment ? "edit-icon" : "displayNone"} />
                                    <FaTrashAlt onClick={()=> deleteSingleComment({itineraryId ,commentId: comment._id})} className={!isEditingComment ? "delete-icon" : "displayNone"}/>
                                </div>
                            )}
                    </div>
                 </div>
              )
           })}
        </div>
        <div className="input-container">
           <input type="text" value={commentContent} onChange={(e)=> setCommentContent(e.target.value)} className="comments-input" placeholder="Leave your comment!" />
          
           <div className="paperPlane-icon" onClick={userLogged ? sendComment : ()=>notify('Comment')}>
              <FontAwesomeIcon icon={faPaperPlane} />
           </div>
        </div>
     </div>
    )
}

const mapStateToProps = (state)=>{
    return {
       userLogged: state.authReducer.user,
       itineraries: state.itineraries.itineraries
    }
 }
 
 const mapDispatchToProps = {
    sendComment: itinerariesActions.sendComment,
    deleteComment: itinerariesActions.deleteComment,
    editComment: itinerariesActions.editComment,
 }
 
 export default connect(mapStateToProps, mapDispatchToProps)(Comments)


// Faltantes:
   // 2- Poder borrar y editar el comentario