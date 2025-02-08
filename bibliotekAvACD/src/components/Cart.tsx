// import React from 'react';
import { useCart } from './UseCart';

export function Cart() {
    const { cart } = useCart(); // Hämta cart från context

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div id="books">{cart.length}</div> {/* Visa antalet varor */}
        </div>
    );
}