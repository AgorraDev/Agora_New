import Container from 'react-bootstrap/Container';
import '../style/home.css';
import React, { useState, useEffect} from 'react';
import Navigation from '../components/nav';
import axios from 'axios';
import Footer from '../components/footer';


function Home() {

    return (
        <>
           {/*Bootstrap link*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN"crossorigin="anonymous"/>
           {/*Links End*/}
        <Navigation />
        <Container fluid className="hero-bg d-flex" load="lazy">
                  <div className="container col-xxl-12 px-3"> 
                  <div className="row g-3 py-5 ">
                    <div className="col-lg-5 col-12 col-sm-8 py-3 px-3 hero-content">
                      <h1 className="display-8 fw-bold lh-1 mb-2">New collection</h1>
                      <p className="lead col-12">The first drop of apparel from the freshest streetwear brand. Supporting the great outdoors and everything that comes with the enjoyment of nature.</p>
                      <div className="d-flex col-4 gap-2 d-md-flex justify-content-md-start">
                        <a type="button" href='/products' className="btn btn-outline-light btn-lg px-5 me-md-2">SHOP</a>
                      </div>
                    </div>
                  </div>
                </div>
        </Container>
        <Container fluid className='hero2-bg d-flex' loading="lazy">
          <div className="container col-xxl-12 px-3">
            <div className="row g-3 py-5">
              <div className="col-lg-5 col-12 col-sm-8 py-3 px-3 hero2-content">
                <h1 className="display-8 fw-bold 1h-1 mb-2">Backprint Koi Tee</h1>
                <p className="lead col-12">Strength. Courage. Determination. Nature overcomes all obstacles.</p>
                <div className="d-flex col-4 gap-2 d-md-flex justify-content-md-start">
                  <a type="button" href='/products' className="btn btn-outline-dark btn-lg px-5 me-md-2">SHOP</a>
                </div>
              </div>
            </div>
          </div>
        </Container>
        <Footer />
        </>
    );
}


export default Home;