// import React from 'react';
import { useCart } from './UseCart';

export function Cart() {
    const { cart } = useCart(); // Hämtar cart från context

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div id="books">{cart.length}</div> {/* Visar antalet varor */}
            <ul>
                {cart.map(item => (
                    <li key={item.id}>{item.title}</li> // Visar titeln för varje produkt
                ))}
            </ul>
        </div>
    ); 
}