import Container from 'react-bootstrap/Container';
import ProductCard from '../components/productCard.jsx';
import Navigation from '../components/nav.jsx';
import '../style/products.css';
import React, { useState, useEffect} from 'react';
import axios from 'axios';
import Footer from '../components/footer.jsx';



function Products() {
    return (
        <>
        {/*Bootstrap link*/}
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossOrigin="anonymous"/>
        {/*Links End*/}

        <Container fluid className='pagebg' loading="lazy">
            <div className='container product-bg'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-5'>
                        <h2 className='fw-bold'>All items</h2>
                    </div>
                    <div>
                    </div>
                </div>
                <div className='row d-flex justify-content-between p-5'>
                    <ProductCard />

                </div>
            </div>       
        </Container>
        <Footer />
        </>
    );
}


export default Products;