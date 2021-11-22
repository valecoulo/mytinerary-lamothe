import React from 'react'   

const Footer = () => {
    return (
        <div>
            <footer className="footer-container bg-dark text-light">
                <div className="footer-items col-12">
                    <ul className="d-flex flex-wrap">
                        <li><a href="https://www.facebook.com"><img className="me-1" src='./assets/facebook.png' alt='facebook'/>Facebook</a></li>
                        <li><a href="#link"><i className="fas fa-home icon2"></i>Home</a></li>      
                        <li><a href="https://wa.me/+5491164917988/"><img className="me-1" src='./assets/whatsapp.png' alt="whatsapp"/>Whatsapp</a></li>
                        <li><a href="#link"><i className="fas fa-plane-departure icon2"></i>Cities</a></li>
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