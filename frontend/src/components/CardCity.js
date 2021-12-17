import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useParams } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';


const CardCity = (props) => {

  const { price, duration, hashtags, likes } = props.itineraries

  console.log(price);

  const [viewMoreLess, setViewMoreLess] = useState(true);

  const likeIcon = <img className='likeicon' src="https://i.imgur.com/PBHnzOj.png" />

  return (
    <div className='d-flex justify-content-center'>
      <div className="bg-cardCity">
        <div className='d-flex justify-content-between'>
          <div className="d-flex direction-row align-items-center gap-3">
            <img className='author-img' src={props.itineraries.authorImg} />
            <h3 className="authorName">{props.itineraries.authorName}</h3>
          </div>
          <img className="logo-card" src="https://i.imgur.com/EEzJ6jC.jpg" />
        </div>
        <span className='fs-5 fontcardcity'>duration: {[...Array(duration)].map((cash, index) => {
                return <img src="https://i.imgur.com/gFF5QNr.png" key={index} className='durationicon' />
        })}</span>
        <span className='fs-5 fontcardcity'>Price: {[...Array(price)].map((cash, index) => {
                            return <img src="https://i.imgur.com/6U25xlJ.png" className="iconoBilletes" key={index} alt="money"/>
                        })}</span>
        <span className='fs-5 likeicon'>Likes: <a className='p-2 '>{likeIcon}</a>  {likes}</span>
        <span className='fs-5 fontcardcity'>{hashtags.map(hash => <span className='fontcardcity'>{hash}</span>)}</span>
        <Accordion className="accordion-city" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setViewMoreLess(!viewMoreLess)} >  {viewMoreLess ? <p className='viewCard'>View Less</p> : <p className='viewCard'>View More</p> }</Accordion.Header>
            <Accordion.Body>
              <h2 className='text-center fontcardcity'>Under Construction</h2>
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </div>

  )
}


const mapDispatchToProps = {
  getOneItinerary: itinerariesActions.getOneItinerary
}


export default connect(null, mapDispatchToProps)(CardCity)