import {Button, Container, Nav, Navbar, NavDropdown, Modal} from 'react-bootstrap';
import './nav.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';


function NavLogin({isLoggedIn}) {
    if (isLoggedIn) {
        return <Nav.Link href='#home' >AccountNAME</Nav.Link>;
    } 
    return <Nav.Link href='#home'><p>Log in</p></Nav.Link>;
}


function Navigation() {

    return (
        <>
          <Container fluid>
            <Navbar className='fixed-top bg-transparent'>
                <Container fluid className='d-flex justify-content-between'>
                    <Nav id="links" className='me-auto'>
                        <Nav.Link  href='/' >Home</Nav.Link>
                        <Nav.Link  href='products'>Store</Nav.Link>
                        <Nav.Link  href='about-us'>About</Nav.Link>
                    </Nav>
                      {/* <Navbar.Brand id='brand' className='me-auto'>AGORA</Navbar.Brand> */}
                        <Nav id="links">
                            <NavLogin className='account' isLoggedIn={true} />
                            <Nav.Link href='#home' >Cart<img src="" 
                                                        className="img-fluid" 
                                                        alt=''/>
                            </Nav.Link>
                            
                    </Nav>
                </Container>
                </Navbar> 
                </Container>        
        </>
    );
}

export default Navigation;
