import Container from 'react-bootstrap/Container';
import ProductCard from '../components/productCard.jsx';
import Navigation from '../components/nav.jsx';
import { useAuth0 } from '@auth0/auth0-react';
import '../style/products.css';
import Footer from '../components/footer.jsx';



function Products() {
    const { isAuthenticated } = useAuth0();
    console.log('Is user Authenticated?:', isAuthenticated);


    return (

        <Container fluid className='pagebg'>
            <div className='container product-bg'>
                <div className='row'>
                    <div className='col d-flex justify-content-center mt-5'>
                        <h2 className='fw-bold'>All items</h2>
                    </div>
                </div>
                <div className='row d-flex p-5'>
                    <ProductCard />
                </div>
            </div>       
        </Container>
    );
}


export default Products;