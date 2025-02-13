import React, { useState } from 'react';
import { CartContext } from './CartContextData'; // Import from the new file
import { Book } from './Book';


export interface CartContextType {
    cart: Book[];
    addToCart: (book: Book) => void; 
}

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [cart, setCart] = useState<Book[]>([]);

    const addToCart = (book: Book) => {
        const productExists = cart.find(item => item.id === book.id); // Kontrollerar om produkten redan finns

        if (!productExists) { // Lägg bara till produkten om den inte redan finns
            setCart([...cart, book]);
        }
    };

    return (
        <CartContext.Provider value={{ cart, addToCart }}>
            {children}
        </CartContext.Provider>
    );
};