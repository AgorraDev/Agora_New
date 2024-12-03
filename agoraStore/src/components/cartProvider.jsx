import React, { createContext, useReducer, useContext} from "react";

const initialCartState = {
    items: [],
    totalQuantity: 0,
    totalPrice: 0,
};

const cartReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_ITEM': {
            const newItem = action.payload;
            
            const existingItems = Array.isArray(state.items) ? state.items : [];
            const existingItemIndex = existingItems.findIndex(item => item.id === newItem.id);

            let updatedItems = [...existingItems];
            if (existingItemIndex >=0) {
                const updatedItem = {
                    ...updatedItems[existingItemIndex],
                    quantity: updatedItems[existingItemIndex].quantity + newItem.quantity,
                };
                updatedItems[existingItemIndex] = updatedItem;
            } else {
                updatedItems.push(newItem);
            }

            const updatedTotalPrice = 
                state.totalPrice + (newItem.price || 0) * (newItem.quantity || 0);
            const updatedTotalQuantity = state.totalQuantity + (newItem.quantity || 0);

            return {
                ...state,
                items: updatedItems,
                totalQuantity: updatedTotalQuantity,
                totalPrice: updatedTotalPrice,
            }
        };
            
        case 'REMOVE_ITEM': {
            const itemId = action.payload;

            const existingItemIndex = state.items.findIndex(item => item.id === itemId.id);
            const existingItem = state.items[existingItemIndex];

            console.log('Existing Item Quantity', existingItem.quantity);
            
            const updatedItems = state.items.map(item => { //maps through cart items
                if (item.id === itemId.id) { //if cart item.id is equal to removeItem.id
                    return {
                        ...item, //return matched item...
                        quantity: item.quantity - 1 //...with one less quantity

                    };
                }
                return item; //return updated item
            }).filter(item => item.quantity > 0); //filter the item if quantity is 0

            const updatedTotalQuantity = state.totalQuantity - 1; //removes 1 from totalQuantity
            const updatedTotalPrice = state.totalPrice - existingItem.price; //updates totalPrice

            //returns cart state with removed items 
            return {
                ...state,
                items: updatedItems,
                totalQuantity: updatedTotalQuantity,
                totalPrice: updatedTotalPrice,
              };
   

        }

        case 'CLEAR_CART':
            return initialCartState

        default:
            return state;
    };
};

const CartContext = createContext();

export const CartProvider = ({children}) => {
    const [cartState, dispatch] = useReducer(cartReducer, initialCartState);

    return (
        <CartContext.Provider value={{cartState, dispatch}}>
            {children}
        </CartContext.Provider>
    );
};

export const useCart = () => useContext(CartContext);