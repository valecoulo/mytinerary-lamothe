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


const City = (props) => {
    const params = useParams();    

    const [city, setCity] = useState({})

    useEffect(() => {
        requestCity()
    }, [])
    
    const requestCity = async () => {
        console.log('props from funcional City comp', props)
        console.log('params', params.id)
        const pedido = await axios.get('http://localhost:4000/api/city/' + params.id)
        console.log('pedido API:' , pedido)
        setCity(pedido.data.response)
    }

    
    return (    
        <div>
            <h1 style={{color: 'white'}}>{city.city}</h1>
            <img src={city.src} alt="City"/>
        </div>
    )
}

export default City