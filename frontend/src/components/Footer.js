import React from 'react'   
import {Link} from 'react-router-dom'

const Footer = () => {
    return (
        <div>
            <div className="top-footer d-flex justify-content-evenly">
                <div>
                <h3 className="text-light">Mytinerary</h3>
                <p className="text-light">“It’s a dangerous business going out your door.You step onto the road, and if you don’t keep your feet, there’s no knowing where you might be swept off to.”</p>
                </div>
            <div>
                <Link to="/">Home</Link>
                <Link to="/Cities">Cities</Link>
                <Link to="/signUp" className="text-decoration-none">Sign Up</Link>
                <Link to="/signIn" className="text-decoration-none">Sign In</Link>
            </div>
            </div>
            <footer className="footer-container text-light" style={{backgroundColor:"black"}}>
                <div className="footer-items col-12">
                    <ul className="d-flex flex-wrap ul-footer">
                        <li><a href="https://www.facebook.com"><img className="me-1" src='https://i.imgur.com/lu2AkH4.png' alt='facebook'/>Facebook</a></li> 
                        <li><a href="https://wa.me/+5491164917988/"><img className="me-1" src='https://i.imgur.com/mKlPUpR.png' alt="whatsapp"/>Whatsapp</a></li>
                        <li><a href="https://www.instragram.com"><img className="me-1" src="https://i.imgur.com/mrhyyvq.png" alt="instagram"/>Instagram</a></li>
                    </ul>
                </div>
                <div class="footer-items col-12 bg-dark">
        </div>
       <p className="d-flex justify-content-center text-center"> Copyright © Valentin Lamothe | Mytinerary | MindHub | 2021 </p>
            </footer>
        </div>
    )
}

export default Footer 