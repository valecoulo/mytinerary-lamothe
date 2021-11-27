import React from 'react'   
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {  NavLink, Link } from "react-router-dom";

const NavBar = (props) => {
    return (
  <Navbar bg="dark" className="sticky-top" expand="lg">
        <Container>
          <div className="d-flex">
          <img className="rounded-circle img-fluid ms-3" width="45px" src="https://i.imgur.com/RAW7bAn.jpg" alt="user_pic"/>
          <NavDropdown id="basic-nav-dropdown">
                 <Link to="/signIn" className="text-decoration-none"> <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item> </Link>
                  <NavDropdown.Divider />
                 <Link to="/signUp" className="text-decoration-none"> <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item> </Link>
                </NavDropdown>
              </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div className="d-flex">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <Link to="/" className="link-color text-decoration-none nav-link"><i className="fas fa-home icon2"></i>Home</Link>
               <NavLink to="/cities" className="link-color text-decoration-none nav-link"><i className="fas fa-plane-departure icon2"></i>Cities</NavLink>
              </Nav>
            </Navbar.Collapse>
              </div>
        </Container>
</Navbar>
    )
}

export default NavBar