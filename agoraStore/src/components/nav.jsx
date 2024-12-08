import {Button, Container, Nav, Navbar, NavDropdown, Modal} from 'react-bootstrap';
import { useAuth0 } from '@auth0/auth0-react';
import React, { useState, useEffect} from 'react';
import { useCart } from './cartProvider';
import CartSummary from './cartSummary';
import './nav.css';

function Navigation() {
    const { cartState } = useCart();
    const [showCart, setShowCart] = useState(false);
    const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();

    const handleToggleCart = () => {
        setShowCart(!showCart);
    };
    const handleLogin = () => {
        loginWithRedirect().catch(error => {
            console.log('Auth0 Error', error); 
        });
    };
    
    return (
        <>
        <Container fluid>
            <Navbar className='fixed-top bg-transparent'>
                <Container fluid className='d-flex justify-content-between'>
                    <Nav className='links me-auto'>
                        <Nav.Link  href='/' >Home</Nav.Link>
                        <Nav.Link  href='/products'>Store</Nav.Link>
                        <Nav.Link  href='/about-us'>About</Nav.Link>
                    </Nav>
                        {/* <Navbar.Brand id='brand' className='me-auto'>AGORA</Navbar.Brand> */}
                        <Nav id="links" className='links'>
                            {!isAuthenticated ? (
                                <Nav.Link onClick={() => handleLogin()}>Login</Nav.Link>
                            ) : (
                                <div id='nav-account-dropdown'> {user.nickname}
                                    <div className='account-dropdown-content'>
                                        <Nav.Link className='pt-2 pb-0' href='/profile'>Account</Nav.Link>
                                        <Nav.Link className='py-0' href='/profile' >Orders</Nav.Link>
                                        <Nav.Link className='pt-0 pb-2' onClick={() => logout({logoutParams: {returnTo: window.location.origin}})}> Logout </Nav.Link>
                                    </div>
                                </div>

                            )}
                        <Nav.Link className='d-flex' onClick={() => handleToggleCart()}>
                            {cartState.items.length > 0 ? (
                                <span>Cart <svg className="cart-svg" xmlns="http://www.w3.org/2000/svg" viewBox='0 0 125 125'><circle cx={15} cy={15} r={15} /> </svg> </span>
                            ) : (
                                <span>Cart</span>
                            )}
                        </Nav.Link>
                            
                    </Nav>
                </Container>
                </Navbar> 
                </Container> 

        <Modal 
            size="xl"
            show={showCart}
            onHide={() => setShowCart(!showCart)}
            aria-labelledby="cart-modal-title"
            >
            <Modal.Header closeButton>
                <Modal.Title id="cart-modal-title">
                    Cart Summary
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>

                <CartSummary></CartSummary>

            </Modal.Body>
        </Modal>       
        </>
    );
}
export default Navigation;