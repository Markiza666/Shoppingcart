// import React from 'react';
import { Cart } from './Cart';
import sherlockImage from './img/sherlock.jpg';


export function Header() {
    return (
        <header>
            <img src={sherlockImage} alt='Sherlock Holmes' />
            <Cart />
        </header>
    );
}