import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Accordion } from 'react-bootstrap';
import activitiesActions from '../redux/actions/activitiesActions';
import Comments from './Comments';
import itinerariesActions from '../redux/actions/itinerariesActions';
import Swal from 'sweetalert2';
import {FaRegHeart} from "react-icons/fa"
import {FaHeart} from "react-icons/fa"




const ItineraryCard = (props) => {

  
  const [ activities, setActivities ] = useState([]);
  
  const [ viewMoreLess, setViewMoreLess ] = useState(true);
  
  const { _id, comments,price, duration, hashtags, likes } = props.itineraries

  const { userLogged,itineraries } = props
  
  const [totalLikes, setTotalLikes] = useState([itineraries.likes.length])
  const [liked, setLiked] = useState(false)
  
  console.log("propsItinerary:", props);

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


  async function getActivities() {
    try {
        let result = await props.getActivitiesByItinerary(_id)
        if(result) {
            setActivities(result)
        }
    } catch(err) {
        console.error(err)
    }
}

const likeItinerary = async()=>{  
  setLiked(!liked)      
  setTotalLikes(!liked ? totalLikes + 1 : totalLikes - 1)
  const response = await props.likeItinerary({userId: userLogged._id, itineraryId: _id})
}

const handlerActivities = () => {
    setViewMoreLess(!viewMoreLess)
    getActivities()
}

const notify = (error)=>{
  Alert.fire(`Must be logged to ${error}!`)
}

// let heart = liked.includes(props.userId) ? "https://i.imgur.com/tIXF3Az.png" : "https://i.imgur.com/taqHF9a.png"


  return (
    <div className='d-flex justify-content-center'>
      <div className="bg-cardCity">
        <div className='d-flex justify-content-between'>
          <div className="d-flex direction-row align-items-center gap-3">
            <img className='author-img' src={props.itineraries.authorImg} />
            <h3 className="authorName">{props.itineraries.authorName}</h3>
            <span onClick={userLogged ? likeItinerary : () =>notify('Like')} className='fs-5 likeicon'> 
            <FaRegHeart className={ liked ? "displayNone" : "heart-icon-disliked"} />
            <FaHeart className={ liked ? "heart-icon" : "displayNone"} /></span>
            <h3 className='totalLikes'>{totalLikes}</h3>
          </div>
          <img className="logo-card" src="https://i.imgur.com/giAfWMt.png" />
        </div>
        <span className='fs-5 fontcardcity'>duration: {[...Array(duration)].map((cash, index) => {
                return <img src="https://i.imgur.com/gFF5QNr.png" key={index} className='durationicon' />
        })}</span>
        <span className='fs-5 fontcardcity'>Price: {[...Array(price)].map((cash, index) => {
                            return <img src="https://i.imgur.com/Fl4fqaP.png" className="iconoBilletes" key={index} alt="money"/>
                        })}</span>
       
        <div className='fs-5 fontcardcity'>{hashtags.map(hash => <span className='fontcardcity'>{hash}</span>)}</div>
        <Accordion className="accordion-city">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => handlerActivities()}>{viewMoreLess ? <p className='viewCard'>View More</p> : <p className='viewCard'>View Less</p>}</Accordion.Header>
            <Accordion.Body className="body-activity">
              <div className='d-flex flex-column'>
              {activities.map((activity, index) => {
                return  <div key={index} className='d-flex gap-4 mt-3 contain-activity'>
                <img width={200} src={activity.src} />
                <div>
                <h2 className='p-activity'>{activity.activityTitle}</h2>
                <p>{activity.activity}</p>
                </div>
                  </div>
              })}
              <Comments itineraryId={_id} comments={comments} />
              </div>
            
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>

  )
}

const mapStateToProps = (state)=>{
  return {
     token: state.authReducer.token,
     userId: state.authReducer._id,
     userLogged: state.authReducer.user
  }
}


const mapDispatchToProps = {
  getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary,
  likeItinerary: itinerariesActions.likeItinerary
}


export default connect(mapStateToProps, mapDispatchToProps)(ItineraryCard)