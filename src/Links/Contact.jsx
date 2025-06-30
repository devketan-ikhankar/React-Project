import React from "react";
import "./ContactUs.css";
import Header from "../Container/Header";


const ContactUs = () => {
    return (
        <div>
            <Header />
            <div className="contact-container">
                <h1 className="contact-title">Contact Us</h1>
                <p className="contact-description">
                    We'd love to hear from you! Reach out to us for any queries, support,
                    or feedback.
                </p>
                <h2 className="contact-subtitle">Get in Touch</h2>
                <p className="contact-info">
                    Email: <a href="mailto:support@swiggey.com" className="contact-link">support@foodexpress.com</a>
                </p>
                <p className="contact-info">Phone: +91 12345 67890</p>
                <p className="contact-info">Address:  India</p>
                <h2 className="contact-subtitle">Follow Us</h2>
                <p className="contact-info">
                    Stay connected with us on social media for the latest updates and offers.
                </p>
            </div>
        </div>
    );
};

export default ContactUs;