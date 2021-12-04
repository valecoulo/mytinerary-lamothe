import React from 'react';
import {NavLink} from 'react-router-dom';
import Search from '../components/Search'
import { connect } from 'react-redux'
import citiesActions from '../redux/actions/citiesActions';
class Cities extends React.Component {

  componentDidMount () {
   this.props.getCities()
  }
  
    
    render() {

      // const filterCities = (value) => {
      //   const filteredCities = this.props.cities.filter(city => {
      //     return  city.cityName.toLowerCase().startsWith(value.target.value.toLowerCase().trim())
      //     })
      //   this.setState({citiesFilteredToRender : filteredCities})
      // }
      const {cities, citiesFiltered } = this.props;

        return(
        <div className="d-flex flex-column align-items-center">
          <Search placeholder="Enter a city... " 
          handleChange={e => this.props.getFiltered(cities, e.target.value)}/>
                {cities.length === 0
                  ?  (<div class="spinner-border text-warning m-5" role="status">
                          <span class="visually-hidden">Loading...</span>
                      </div> )
                  : (citiesFiltered.length > 0
                      ? citiesFiltered.map((city) => {
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

const mapStateToProps = state => {
  return {
      cities: state.cities.allCities,
      citiesFiltered: state.cities.citiesFiltered
  }
}

const mapDispatchToProps = {
  getCities: citiesActions.getCities,
  getFiltered: citiesActions.getFiltered
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)