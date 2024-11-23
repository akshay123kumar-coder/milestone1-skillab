// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Menu from './pages/Menu';
import OrderCustomization from './pages/OrderCustomization';
import Contact from './pages/Contact';
import AboutUs from './pages/AboutUs';
import SignupLogin from './pages/SignupLogin';
import Cart from './components/Cart'; // Importing Cart component
import './App.css';

function App() {
    return (
        <Router>
            <div className="App">
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/menu" element={<Menu />} />
                    <Route path="/order-customization" element={<OrderCustomization />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/about" element={<AboutUs />} />
                    <Route path="/signup-login" element={<SignupLogin />} />
                    <Route path="/cart" element={<Cart />} /> {/* Adding Cart route */}
                </Routes>
                <Footer />
            </div>
        </Router>
    );
}

export default App;
