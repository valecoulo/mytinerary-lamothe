import React from 'react'
import {NavLink} from 'react-router-dom'
class Cities extends React.Component {
    state = {
        cities: []
    }


    constructor(props){
      super(props)
      setTimeout(() => {
        console.log(props)
      }, 1500)

  }

    componentDidMount() {
        fetch('http://localhost:4000/api/cities')
        .then(res => res.json())
        .then(data => this.setState({cities: data.response}))
    }


    render() {
        const {cities} = this.state
        return(
            <div className="d-flex flex-column align-items-center">
              {cities.length === 0
                ?  (<div class="spinner-border text-warning cities-spinner" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> )
                :  (cities.map((city) => {
                      return (
                        <NavLink className="text-decoration-none" to={`/city/${city.id}`}>
                          <div className="slide-content" onClick={() => console.log(city.id)} key={city.id}>
                            <div className="user-image" style={{backgroundImage: `URL(${city.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom', width: '50vw', maxHeight: '40vh', margin: '3% 0 3% 0'}} >
                              <h3 className="text-light h3-city">{city.city}</h3>  
                            </div>  
                          </div>
                        </NavLink>
                      );
                    }))}
            </div>
        )
    }
}

export default Cities