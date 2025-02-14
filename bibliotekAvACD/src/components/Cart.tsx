import { useCart } from './UseCart';
import { useState } from "react"

export function Cart() {
    const { cart } = useCart(); // Hämtar cart från context
        const [isDropdownVisible, setIsDropdownVisible] = useState(false);

    return (
        <div className="cart-container">
            <h2>Cart</h2>
            <div id="books" 
            onMouseEnter={() => setIsDropdownVisible(true)} 
            onMouseLeave={() => setIsDropdownVisible(false)}
            >
                {cart.length}
            </div> {/* Visar antalet varor */}
            {isDropdownVisible && ( // Visa dropdown endast när isDropdownVisible är true
                <ul className="dropdown">
                    {cart.map(item => (
                        <li key={item.id}>{item.title}</li> // Visar titeln för varje produkt
                    ))}
                </ul>
            )}
        </div>
    ); 
}