import React from "react"
import {Button} from 'react-bootstrap'

class Home extends React.Component {
    render() {
        const video = './assets/video_home.mp4'
        return (
            <div className='d-flex justify-content-end'>
                <div className='h1-dou'>
                    <video autoPlay loop muted id="video">
                        <source src={video} type="video/mp4" />
                    </video>
                    <h1>Mytinerary!</h1>
                    <p>Find your perfect trip, designed by insiders who know and love their cities!</p>
                    <Button variant="" className="button-home">Click Here!<i className="fas fa-plane-departure ms-1"></i></Button>{' '}
                </div>
            </div>
        )
    }
}

export default Home