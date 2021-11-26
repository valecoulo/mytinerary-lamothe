import React from "react"
import {Button} from 'react-bootstrap'
import CarouselCities from "../components/CarouselCities";
import {Link} from 'react-router-dom'
import Slides from '../components/Slides'


class Home extends React.Component {
    render() {
        const video = './assets/video_home.mp4'
        return (
            <div>
            <div className='d-flex justify-content-end container-home'>
                <div className='h1-dou'>
                    <video autoPlay loop muted id="video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <h1>Mytinerary!</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <Link className="text-decoration-none" to ="/cities">
                    <Button variant="" className="button-home">Click Here!<i className="fas fa-plane-departure ms-1"></i></Button>
                    </Link>{' '}
                </div>
            </div>
            <Slides/>
            </div>
        )
    }
}

export default Home