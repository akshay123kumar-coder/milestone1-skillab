// src/pages/Menu.js
import React from 'react';
import './Menu.css';

const menuItems = [
    {
        id: 1,
        category: 'Starters',
        name: 'Garlic Bread',
        description: 'Freshly baked garlic bread with herbs and cheese.',
        price: 'Rs.500',
        image: '/starter.jpg' // Path to the image
    },
    {
        id: 2,
        category: 'Main Course',
        name: 'Pasta Carbonara',
        description: 'Creamy pasta with pancetta and parmesan cheese.',
        price: 'Rs.1000',
        image: '/main-course.jpg' // Path to the image
    },
    {
        id: 3,
        category: 'Desserts',
        name: 'Chocolate Lava Cake',
        description: 'Warm chocolate cake with a gooey center, served with ice cream.',
        price: 'Rs.2000',
        image: '/dessert.jpg' // Path to the image
    }
    // Add more items as needed
];

function Menu() {
    return (
        <div className="menu">
            <h1>Our Menu</h1>
            <div className="menu-items">
                {menuItems.map(item => (
                    <div className="menu-item" key={item.id}>
                        <img src={item.image} alt={item.name} className="menu-item-image" />
                        <h2>{item.name}</h2>
                        <p>{item.description}</p>
                        <p className="price">{item.price}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Menu;
