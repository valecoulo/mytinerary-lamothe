import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import Search from '../components/Search'
class Cities extends React.Component {
    state = {
        cities: [],
        citiesFilteredToRender: []
    }



    componentDidMount() {
        axios.get('http://localhost:4000/api/cities')
        .then(data => this.setState({cities: data.data.response, citiesFilteredToRender: data.data.response}))
    }

    
    
    render() {

      const filterCities = (value) => {
        // this.setState({searchField: value.target.value.toLowerCase().trim()})
        const filteredCities = cities.filter(city => {
          return  city.cityName.toLowerCase().startsWith(value.target.value.toLowerCase().trim())
          })
        this.setState({citiesFilteredToRender : filteredCities})
      }

        // const {cities, searchField} = this.state
        
       
        const {cities} = this.state
        return(
        <div className="d-flex flex-column align-items-center">
          <Search placeholder="Enter a city... " 
          handleChange={e => filterCities(e)}/>
                {cities.length === 0
                  ?  (<div class="spinner-border text-warning" role="status">
                          <span class="visually-hidden">Loading...</span>
                      </div> )
                  : (this.state.citiesFilteredToRender.length > 0
                      ? this.state.citiesFilteredToRender.map((city) => {
                        return (
                              <NavLink className="text-decoration-none" to={`/city/${city._id}`}>
                                 <div className="slide-content" onClick={() => console.log(city._id)} key={city.id}>
                                   <div className="user-image" style={{backgroundImage: `URL(${city.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom', width: '50vw', maxHeight: '40vh', margin: '3% 0 3% 0'}} >
                                     <h3 className="text-light h3-city">{city.cityName}</h3>  
                                   </div>  
                                 </div>
                               </NavLink>)
                      } )
                  : <h1 className="text-light">NO CITIES FOUND</h1>)}
                          </div>
        )
    }
}

// if(filteredCities.length > 0) {
//   filteredCities
// } else if(cities > 0) {
//   cities
// } else if(filteredCities != filteredCities.cityName) {
//   <p>No cities founded</p>
// }

export default Cities