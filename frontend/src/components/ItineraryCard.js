import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import { Accordion } from 'react-bootstrap';
import activitiesActions from '../redux/actions/activitiesActions';


const ItineraryCard = (props) => {

  const [ activities, setActivities ] = useState([]);

  const [ viewMoreLess, setViewMoreLess ] = useState(true);
  
  const { price, duration, hashtags, likes } = props.itineraries

  const likeIcon = <img className='likeicon' src="https://i.imgur.com/taqHF9a.png" />

  const { _id } = props.itineraries


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

const handlerActivities = () => {
    setViewMoreLess(!viewMoreLess)
    getActivities()
}


  return (
    <div className='d-flex justify-content-center'>
      <div className="bg-cardCity">
        <div className='d-flex justify-content-between'>
          <div className="d-flex direction-row align-items-center gap-3">
            <img className='author-img' src={props.itineraries.authorImg} />
            <h3 className="authorName">{props.itineraries.authorName}</h3>
          </div>
          <img className="logo-card" src="https://i.imgur.com/giAfWMt.png" />
        </div>
        <span className='fs-5 fontcardcity'>duration: {[...Array(duration)].map((cash, index) => {
                return <img src="https://i.imgur.com/gFF5QNr.png" key={index} className='durationicon' />
        })}</span>
        <span className='fs-5 fontcardcity'>Price: {[...Array(price)].map((cash, index) => {
                            return <img src="https://i.imgur.com/Fl4fqaP.png" className="iconoBilletes" key={index} alt="money"/>
                        })}</span>
        <span className='fs-5 likeicon'>Likes: <a className='p-2 '>{likeIcon}</a>  {likes}</span>
        <span className='fs-5 fontcardcity'>{hashtags.map(hash => <span className='fontcardcity'>{hash}</span>)}</span>
        <Accordion className="accordion-city">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => handlerActivities()}>{viewMoreLess ? <p className='viewCard'>View More</p> : <p className='viewCard'>View Less</p>}</Accordion.Header>
            <Accordion.Body>
              {activities.map((activity, index) => {
                return  <div key={index} className='d-flex gap-4'>
                <img width={200} src={activity.src} />
                <div>
                <h2>{activity.activityTitle}</h2>
                <p>{activity.activity}</p>
                </div>
                  </div>
              })}
            
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>

  )
}


const mapDispatchToProps = {
  getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary
}


export default connect(null, mapDispatchToProps)(ItineraryCard)