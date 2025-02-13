import { createContext } from 'react';
import { CartContextType } from './CartContext';


export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {}, 
});