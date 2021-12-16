import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useParams } from 'react-router-dom';
import { Accordion } from 'react-bootstrap';


const CardCity = (props) => {

  const [viewMoreLess, setViewMoreLess] = useState(true);

  return (
    <div className='d-flex justify-content-center'>
      <div className="bg-cardCity">
        <div className='d-flex justify-content-between'>
          <div className="d-flex direction-row align-items-center gap-3">
            <img className='author-img' src={props.itineraries.authorImg} />
            <h3 className="">{props.itineraries.authorName}</h3>
          </div>
          <img className="logo-card" src="https://i.imgur.com/EEzJ6jC.jpg" />
        </div>
        <span>duration: {("⏱️").repeat(props.itineraries.duration)}</span>
        <span>Price: {("💸").repeat(props.itineraries.price)}</span>
        <span>Likes: {("❤️") + props.itineraries.likes}</span>
        <span>{props.itineraries.hashtags.map(hash => <span>{hash}</span>)}</span>
        <Accordion className="accordion-city" defaultActiveKey="0">
          <Accordion.Item eventKey="0">
            <Accordion.Header onClick={() => setViewMoreLess(!viewMoreLess)} >  {viewMoreLess ? "View less" : "View more"}</Accordion.Header>
            <Accordion.Body>
              <h2 className='text-center'>Under Construction</h2>
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