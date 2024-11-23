// src/pages/Home.js
import React from 'react';
import './Home.css'; // Import a CSS file specifically for styling the Home page

function Home() {
    return (
        <div className="home">
            {/* Hero Section */}
            <section className="hero">
                <img src="/hero-image.jpg" alt="Delicious food on display" className="hero-image" />
                <div className="hero-text">
                    <h1>Welcome to Our Food Haven!</h1>
                    <p>Explore the finest dishes, crafted with passion and fresh ingredients. Start your journey to a delightful dining experience!</p>
                </div>
            </section>

            {/* Special Dishes Section */}
            <section className="special-dishes">
                <h2>Our Special Dishes</h2>
                <div className="dish">
                    <img src="/special-dish.jpg" alt="Special dish of the day" className="dish-image" />
                    <div className="dish-text">
                        <h3>Chef's Special</h3>
                        <p>Indulge in our chef's unique creation, made with fresh, seasonal ingredients to bring you the taste of true culinary artistry.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;
