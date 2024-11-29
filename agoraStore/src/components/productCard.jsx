import React, {useState, useEffect} from 'react';
import axios from'axios';
import './productCard.css';
import { Card, CardBody, CardText, CardTitle, CardImg, CardLink } from 'react-bootstrap'
import { useCart } from './cartProvider';

const ProductCard = ({product}) => {
    const { dispatch } = useCart();

    const [products, setProducts] = useState([]); //sets new useState variable 'products' as empty array

      useEffect(() => {
    // Mock data test - used for debugging to check if problem is with fetching from the backend
    const mockProducts = [
        { id: 1, name: "Product 1", price: "19.99"},
        { id: 2, name: "Product 2", price: "9.99"},
        { id: 3, name: "Product 2", price: "14.99"},
        { id: 4, name: "Product 2", price: "49.99"},
        {/* Add more product objects as needed*/}
    ];
    setProducts(mockProducts);
}, []);
    //     axios.get('http://localhost:8000//warehouse/products') // HTTP for back-end (Django) endpoint - Accessing data for products
    //     .then(res => {              
    //         console.log(res.data); //Logs the data response (to help catch errors whilst building)
    //         setProducts(res.data); //updates 'products' state to response.data from backend endpoint

    //     })
    //     .catch(err => {
    //         console.error(err); //Logs error if thrown
    //     });
    // }, []);

    const addToCart = (product) => {
        dispatch({
            type: 'ADD_ITEM',
            payload: {
                id: product.id,
                name: product.name,
                price: parseFloat(product.price),
                quantity: 1,
            }
        });
        console.log('Added to Cart:', product);
        
        console.log('Dispatching:', {
            id: product.id,
            name: product.name,
            price: product.price,
            quantity: 1,
        });
        
    }

console.log(products) //Logs products response for debugging
    return (
        <>
            {products.length > 0 ? (  // if product length is greater than 0
                products.map(product => ( //maps all products as array, in the form of a card.
                <div key={product.id} className='col-lg-4 col-6 col-sm-12 d-flex p-0 mt-5 justify-content-center'>
                    <Card className='product-card'>
                        <img className='product-image'src={product.image || ''} 
                             alt={product.alt_text || 'no image available'} />
                        <h4 className='fw-bold px-2'>{product.name}</h4>
                        <p className='px-2'>£{product.price}</p>
                        <button className='btn fw-bold p-2 btn-lg btn-dark' onClick={() => addToCart(product)}>Add to cart</button>
                    </Card>
                </div>
                ))
            ) : ( // returns p below incase of error
                <p>loading Products...</p>
            )}

        </>
    );
}

export default ProductCard;