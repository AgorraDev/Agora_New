import Container from 'react-bootstrap/Container';
import './footer.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';

function Footer() {

    return (
        <>
            <Container fluid className='footer'>
                <div className='row justify-content-center'>
                    <div className='col-4 me-auto'>
                        <div className='col'><h1 className='fw-bold'>AGORA</h1></div>
                        <p className='col'>The brand agora</p>
                        </div>
                    <div className='col-4 me-auto'>
                        <div className='row justify-content-center'>Socials</div>
                        <div className='row justify-content-center'>
                            <a className='col-1' href='/home'>Insta</a>
                            <a className='col-1' href='/home'>Insta</a>
                            <a className='col-1' href='/home'>Youtube</a>
                        </div>
                    </div>
                    <div className='col-4 me-auto'></div>
                </div>       
            </Container>
        </>
    );
}


export default Footer;