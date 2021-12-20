import CardCity from '../components/ItineraryCard'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackToCIties from '../components/BackToCities';
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
import itinerariesAction from '../redux/actions/itinerariesActions';
import activitiesActions from '../redux/actions/activitiesActions';


const CityPage = (props) => {
    const params = useParams();    

     useEffect(() => {
        props.getOneCity(params.id)
        props.getOneItinerary(params.id)
    }, [])

    return (
        <div className="background_city">
        <div className="container-fluid d-flex flex-column align-items-center gap-5">
            {props.oneCity.image === undefined 
            ? 
            (<div class="spinner-border text-warning m-5" id="spinner" role="status">
                <span class="visually-hidden">Loading...</span>
            </div> )
             :
             (<div className="image-city d-flex" style={{backgroundImage: `URL(${props.oneCity.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
                <div className="d-flex flex-column justify-content-center m-auto h3-onlyCity">
                 <h2 className="font-monospace">{props.oneCity.country}</h2>
                 <h3>{props.oneCity.cityName}</h3>  
                </div>
            </div> )
            }
            
        <h2 className="mt-5 text-light text-capitalize text-truncate">Join us in this wonderfull adventure</h2>
        </div>
            { props.itineraries.length > 0 ?
            props.itineraries.map((itinerary, index) => {
            return <CardCity key={index} itineraries={itinerary} />
            })
               : <h2 className="text-light d-flex justify-content-center h2-no-iti">This city doesn't have itineraries</h2>}

            <BackToCIties/>)
        </div>

    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cities.oneCity,
        itineraries: state.itineraries.itineraries
    }
  }
  
const mapDispatchToProps = {
    getOneCity: citiesActions.getOneCity,
    getOneItinerary: itinerariesAction.getOneItinerary,
    getActivitiesByItinerary: activitiesActions.getActivitiesByItinerary
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CityPage)