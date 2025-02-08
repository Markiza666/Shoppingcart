import { useContext } from 'react';
import { CartContext } from './CartContextData'; // Import from the new file

export const useCart = () => useContext(CartContext);