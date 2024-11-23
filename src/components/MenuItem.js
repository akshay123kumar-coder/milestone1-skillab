// src/components/MenuItem.js
import React from 'react';

function MenuItem({ item }) {
    return (
        <div className="menu-item">
            <img src={item.image} alt={item.name} />
            <h2>{item.name}</h2>
            <p>{item.description}</p>
            <p>${item.price}</p>
            <button>Add to Cart</button>
        </div>
    );
}

export default MenuItem;
