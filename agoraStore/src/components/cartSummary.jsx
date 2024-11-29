import React from 'react';
import { useCart } from './cartProvider';

const CartSummary = () => {
    const { cartState } = useCart();

    console.log(cartState);
    
    return (
        <div>
            <h2>Cart Summary</h2>
            <ul>
                {cartState.items.map((item) => (
                    <li key={item.id}>
                        {item.name} - ${item.price} x {item.quantity}
                    </li>
                ))}
            </ul>
            <p>Total Quantity: {cartState.totalQuantity}</p>
            <p>Total Price: ${cartState.totalPrice.toFixed(2)}</p>
        </div>
    );
};

export default CartSummary;