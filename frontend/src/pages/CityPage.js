// import React from 'react'
import axios from 'axios'


// class City extends React.Component {
//     // state = {
//     //     cities: []
//     // }


//     // constructor(props){
//     //     super(props)
//     //     console.log('holaaaaaadsfasfd', props)
//     // }

//     componentDidMount() {

//         console.log('props from city', this.props)

//         fetch('http://localhost:4000/api/cities')
//         .then(res => res.json())
//         .then(data => this.setState({cities: data.response}))
//     }

//     render() {
//         return(
//             <h1>holaaa</h1>
//         )
//     }
// }

// export default City

import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import BackToCIties from '../components/BackToCities';


const CityPage = (props) => {
    const params = useParams();    

    const [city, setCity] = useState({})

    useEffect(() => {
        requestCity()
    }, [])
    
    const requestCity = async () => {
        console.log('props from funcional City comp', props)
        console.log('params', params.id)
        const pedido = await axios.get('http://localhost:4000/api/city/' + params.id)
        console.log('pedido API!!!!!!!!:' , pedido)
        setCity(pedido.data.response)
    }

    
    return (
        <div className="container-fluid d-flex flex-column align-items-center gap-5">
            {/* (<div class="spinner-border text-warning mt-5" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>) */}
             (<h1 className="text-center mt-4" style={{color: 'white'}}>{city.cityName}</h1>
            <img className="img-fluid rounded-2 w-50 d-flex" src={city.image} alt="City"/>
            <h2 className="text-light mb-5 mt-5">UNDER CONSTRUCTION</h2>
            <BackToCIties/>)
        </div>
    )
}

export default CityPage