import CardCity from '../components/CardCity'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackToCIties from '../components/BackToCities';
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
import itinerariesAction from '../redux/actions/itinerariesActions';


const CityPage = (props) => {
    const params = useParams();    

     useEffect(() => {
        props.getOneCity(params.id)
        props.getOneItinerary(params.id)
    }, [])

    console.log("objeto a imprimir:",props.itinerary)

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
            {/* <h2 className="text-light mb-5 mt-5">UNDER CONSTRUCTION</h2> */}


        <h2 className="mt-5 text-light text-capitalize text-truncate">Join us in this wonderfull adventure</h2>
        </div>
            <CardCity/>
            <BackToCIties/>)
        </div>

    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cities.oneCity,
        itinerary: state.itineraries.oneItinerary
    }
  }
  


const mapDispatchToProps = {
    getOneCity: citiesActions.getOneCity,
    getOneItinerary: itinerariesAction.getOneItinerary
  }

  export default connect(mapStateToProps, mapDispatchToProps)(CityPage)