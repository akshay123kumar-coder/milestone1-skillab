// src/components/Cart.js
import React, { useState } from 'react';
import './Cart.css';

const initialCartItems = [
    {
        id: 1,
        name: 'Garlic Bread',
        price: 4.99,
        quantity: 1,
        image: '/starter.jpg'
    },
    {
        id: 2,
        name: 'Pasta Carbonara',
        price: 22.99,
        quantity: 2,
        image: '/main-course.jpg'
    },
    {
        id: 3,
        name: 'Chocolate Lava Cake',
        price: 6.99,
        quantity: 1,
        image: '/dessert.jpg'
    }
];

function Cart() {
    const [cartItems, setCartItems] = useState(initialCartItems);

    const updateQuantity = (id, delta) => {
        setCartItems(cartItems.map(item =>
            item.id === id
                ? { ...item, quantity: Math.max(1, item.quantity + delta) }
                : item
        ));
    };

    const removeItem = (id) => {
        setCartItems(cartItems.filter(item => item.id !== id));
    };

    const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

    return (
        <div className="cart">
            <h1>Shopping Cart</h1>
            <div className="cart-items">
                {cartItems.map(item => (
                    <div className="cart-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="cart-item-image" />
                        <div className="cart-item-details">
                            <h2>{item.name}</h2>
                            <p>${item.price.toFixed(2)}</p>
                            <div className="quantity-controls">
                                <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                                <span>{item.quantity}</span>
                                <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                            </div>
                            <button className="remove-button" onClick={() => removeItem(item.id)}>Remove</button>
                        </div>
                    </div>
                ))}
            </div>
            <div className="cart-summary">
                <h3>Total: ${totalPrice}</h3>
                <button className="checkout-button">Proceed to Checkout</button>
            </div>
        </div>
    );
}

export default Cart;
