import React, { useEffect, useState } from 'react'
import { connect } from 'react-redux'
import itinerariesActions from '../redux/actions/itinerariesActions';
import { useParams } from 'react-router-dom';


const CardCity = (props) => {

  console.log("props cardcity:", props.itineraries)

  return (
    <ul class="cards">
      <li>
        <div class="card">
          <img src="https://i.imgur.com/m05pkpk.jpg" class="card__image" alt="" />
          <div class="card__overlay">
            <div class="card__header">
              <svg class="card__arc" xmlns="http://www.w3.org/2000/svg"><path /></svg>
              <img class="card__thumb" width="100px" src={props.itineraries.authorImg} alt="" />
              <div class="card__header-text">
                <h3 class="card__title fs-1">{props.itineraries.authorName}</h3>
                <span class="italic-shadow fs-4">duration: {("⏱️").repeat(props.itineraries.duration)}</span>
                <span className="italic-shadow fs-4">Price: {("💸").repeat(props.itineraries.price)}</span>
                <span className="italic-shadow fs-4">Likes: {("❤️") + props.itineraries.likes}</span>
                <span className="span-hashtag">{props.itineraries.hashtags.map(hash => <span>{hash}</span>)}</span>
              </div>
            </div>
            <h2 class="card__description mt-5">UNDER CONSTRUCTION</h2>
          </div>
        </div>
      </li>
    </ul>
  )
}


const mapDispatchToProps = {
  getOneItinerary: itinerariesActions.getOneItinerary
}


export default connect(null, mapDispatchToProps)(CardCity)