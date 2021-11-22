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
                <a href="#Sign Up">Sign Up</a>
                <a href="#Sign In">Sign In</a>
            </div>
            </div>
            <footer className="footer-container bg-dark text-light">
                <div className="footer-items col-12">
                    <ul className="d-flex flex-wrap">
                        <li><a href="https://www.facebook.com"><img className="me-1" src='./assets/facebook.png' alt='facebook'/>Facebook</a></li> 
                        <li><a href="https://wa.me/+5491164917988/"><img className="me-1" src='./assets/whatsapp.png' alt="whatsapp"/>Whatsapp</a></li>
                        <li><a href="https://www.instragram.com"><img className="me-1" src="./assets/instagram.png" alt="instagram"/>Instagram</a></li>
                    </ul>
                </div>
                <div class="footer-items col-12 bg-dark">
        </div>
            </footer>
        </div>
    )
}

export default Footer 