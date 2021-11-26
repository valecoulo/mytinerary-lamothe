import React from 'react'   
import { Container, Navbar, NavDropdown, Nav } from 'react-bootstrap'
import {  NavLink } from "react-router-dom";

const NavBar = (props) => {
    return (
  <Navbar bg="dark" className="sticky-top" expand="lg">
        <Container>
          <div className="d-flex">
          <img className="rounded-circle img-fluid ms-3" width="45px" src="./assets/user_picture.jpeg" alt="user_pic"/>
          <NavDropdown id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
                </NavDropdown>
              </div>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <div className="d-flex">
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
              <NavLink to="/" className="link-color text-decoration-none nav-link"><i className="fas fa-home icon2"></i>Home</NavLink>
               <NavLink to="/cities" className="link-color text-decoration-none nav-link"><i className="fas fa-plane-departure icon2"></i>Cities</NavLink>
              </Nav>
            </Navbar.Collapse>
              </div>
        </Container>
</Navbar>
    )
}

export default NavBar