import { createContext } from 'react';
import { Book } from './Book'; // Import the Book interface

export interface CartContextType {
    cart: Book[];
    addToCart: (book: Book) => void;
}

export const CartContext = createContext<CartContextType>({
    cart: [],
    addToCart: () => {},
});