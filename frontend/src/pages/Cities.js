import React from 'react'

class Cities extends React.Component {
    state = {
        cities: []
    }

    componentDidMount() {
        fetch('http://localhost:4000/api/cities')
        .then(res => res.json())
        .then(data => this.setState({cities: data.response.cities}))
    }

    render() {
        const {cities} = this.state
        return(
            <div>
                {cities.map((city) => {
              return (
                <div className="slide-content" key={city.id}>
                  <div className="user-image" style={{backgroundImage: `URL(${city.src})`, backgroundSize: 'cover', backgroundPosition: 'bottom'}} >
                    <h3 className="text-light h3-city">{city.city}</h3>  
                  </div>  
                </div>
              );
            })}
            </div>
        )
    }
}

export default Cities