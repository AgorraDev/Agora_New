import React from 'react';
import { useCart } from './cartProvider';

const CartSummary = () => {
    const { cartState, dispatch, } = useCart();
    console.log('Cart State:', cartState);

 
    const clearCart = () => {
        dispatch({
            type: 'CLEAR_CART'
        })
    }
    const removeFromCart = (itemId) => {
        console.log('Checking ID', itemId);
        
        dispatch({
            type: 'REMOVE_ITEM',
            payload: { 
                id: itemId
            }
        })
        
    }
    return (
        <div>
            <h2>Cart Summary</h2>
            {cartState.items.length > 0 ? (
                <ul>
                {cartState.items.map((item) => (
                    console.log(item),
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity} <button onClick={() => removeFromCart(item.id)}>Remove</button>
                    </li>
                ))}
            </ul>
            ) : (
                <p>No items in cart...</p>
            )}
            <p>Total Quantity: {cartState.totalQuantity}</p>
            <p>Total Price: ${cartState.totalPrice.toFixed(2)}</p>
            <button onClick={() => clearCart(cartState)}>Clear</button>
        </div>
    );
};

export default CartSummary;