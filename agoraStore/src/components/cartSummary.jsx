import React from 'react';
import { useCart } from './cartProvider';

import './cartSummary.css'

const CartSummary = () => {
    const { cartState, dispatch, } = useCart();

    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }
    const removeFromCart = (item) => {
        console.log('Checking ID', item);
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { 
                id: item.id,
                price: item.price,

            }
        })
        
    }
    return (
        <>
            {cartState.items.length > 0 ? (
                <ul className='cart-list'>
                {cartState.items.map((item) => (
                    console.log(item),
                    <li key={item.id}>
                        {item.name} | £{item.price} x {item.quantity} = £{(item.price * item.quantity).toFixed(2)}
                        <button className='btn m-3 p-1 btn-sm btn-dark' onClick={() => removeFromCart(item)}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>
            ) : (
                <p>No items in cart...</p>
            )}


            <p>Total Quantity: {cartState.totalQuantity}</p>
            <p>Total Price: ${cartState.totalPrice.toFixed(2)}</p>
            <button className='btn p-2 btn btn-dark' onClick={() => clearCart(cartState)}>
                Clear Cart
            </button>
    </>
    );
};

export default CartSummary;