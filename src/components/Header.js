// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
    return (
        <header>
            <h1>My Food Website</h1>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/cart">Cart</Link>
                <Link to="/contact">Contact</Link>
            </nav>
        </header>
    );
}

export default Header;
