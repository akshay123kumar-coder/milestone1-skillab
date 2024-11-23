// src/pages/Contact.js
import React from 'react';

function Contact() {
    return (
        <div className="contact">
            <h1>Contact Us</h1>
            <form>
                <input type="text" placeholder="Name" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Message"></textarea>
                <button type="submit">Send Message</button>
            </form>
        </div>
    );
}

export default Contact;
