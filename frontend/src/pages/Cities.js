import React from 'react';
import {NavLink} from 'react-router-dom';
import axios from 'axios';
import {Form, FormControl, Button} from 'react-bootstrap'

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
        axios.get('http://localhost:4000/api/cities')
        .then(data => this.setState({cities: data.data.response}))
    }


    render() {
        const {cities} = this.state
        return(
        <div className="d-flex flex-column align-items-center">
          <Form className="d-flex vw-25 m-5">
            <FormControl
              type="search"
              placeholder="Search for a city"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
                {cities.length === 0
                  ?  (<div class="spinner-border text-warning cities-spinner" role="status">
                          <span class="visually-hidden">Loading...</span>
                      </div> )
                  :  
                  (cities.map((city) => {
                        return (
                          <NavLink className="text-decoration-none" to={`/city/${city._id}`}>
                            <div className="slide-content" onClick={() => console.log(city._id)} key={city.id}>
                              <div className="user-image" style={{backgroundImage: `URL(${city.image})`, backgroundSize: 'cover', backgroundPosition: 'bottom', width: '50vw', maxHeight: '40vh', margin: '3% 0 3% 0'}} >
                                <h3 className="text-light h3-city">{city.cityName}</h3>  
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