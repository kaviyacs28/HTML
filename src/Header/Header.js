import React from 'react';
import './Header.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {  ArrowRight, Basket } from 'react-bootstrap-icons';
import { Bank } from 'react-bootstrap-icons'; 
function Header() {
  return (
  <div className='Headersection'>
    <Navbar expand="lg" className="bg-body-tertiary">
    <Container>
        <Navbar.Brand href="#home" className='logo'>  <Bank className='Bank'/>Nexcent</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home" className='Home'>Home</Nav.Link>
            <Nav.Link href="#link" className='Home'>Features</Nav.Link>
            <Nav.Link href="#home" className='Home'>Community</Nav.Link>
            <Nav.Link href="#link" className='Home'>Blog</Nav.Link>
            <Nav.Link href="#link" className='Home'>Pricing</Nav.Link>
            <button  className='Register'>RegisterNow<ArrowRight/></button>
          </Nav>    
          </Navbar.Collapse>     
      </Container>
    </Navbar>
   </div>
  );
}
export default Header;