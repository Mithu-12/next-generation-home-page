import React from 'react';
// import { NavLink } from 'react-router-dom';
import './Header.css';
import { Container, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
// import logo from '../image/logo.png';

const Header = () => {
  
    return (

      
  <Navbar className="navmenu" bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg" >
  <Container className='nav-container'>
      <Navbar.Brand href="#home" className="logo"><img src='https://mycoauthor.in/assets/imgs/theme/logo-new.svg' className='logo' alt="" width="50" height="50"/> </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
      <NavLink to="/" className="items">
                    <li>Home</li>
                  </NavLink>
                 <NavLink to="/" className="items">
                    <li>Support</li>
                  </NavLink>
                  <NavLink to="/offer" className="loginBtn">
                  <span>Join for free</span>
                  </NavLink>

                  <NavLink to="/" className='loginBtn'>
                  <span>LOGIN </span>
                  </NavLink>
                 
                  
      </Navbar.Collapse>
  </Container>
  </Navbar>
      
    );
};

export default Header;