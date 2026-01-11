import React, { useState } from "react";
import "../styles/n1.css"; 
import { Link } from "react-router-dom";

import logo from '../../src/imgs/ll.png';
import bannerImage from '../../src/imgs/it.png';
import contactImage from '../../src/imgs/cp.png'; 

const Contact = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleExploreMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div>
            <header>
                <div className="container">
                    <img src={logo} alt="Logo" className="logo" />
                    <h1><b>Welcome to Dine Delight – Where Every Meal is a Memory!</b></h1>
                    <nav>
                        <ul>
                            <li className="explore">
                                <button onClick={toggleExploreMenu} className="explore-button">
                                    <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
                                </button>
                                <div id="explore-menu" className={`explore-menu ${menuOpen ? 'visible' : ''}`}>
                                    <Link to="/" onClick={() => setMenuOpen(false)}><h2><b>Home</b></h2></Link>
                                    <Link to="/abt" onClick={() => setMenuOpen(false)}><h2><b>About Us</b></h2></Link>
                                    <Link to="/services" onClick={() => setMenuOpen(false)}><h2><b>Services</b></h2></Link>
                                    <Link to="/menu" onClick={() => setMenuOpen(false)}><h2><b>Menus</b></h2></Link>
                                    <Link to="/gallery" onClick={() => setMenuOpen(false)}><h2><b>Gallery</b></h2></Link>
                                    <Link to="/contact" onClick={() => setMenuOpen(false)}><h2><b>Contact</b></h2></Link>
                                    <Link to="/feedback" onClick={() => setMenuOpen(false)}><h2><b>Feedback</b></h2></Link>
                                </div>
                            </li>
                            <li><Link to="/login"><h3>Login</h3></Link></li>
                            <li><Link to="/register"><h3>Register</h3></Link></li>
                        </ul>
                    </nav>
                </div>
            </header>
            <section className="image-header">
            
                <div className="image-wrapper">
                    <img src={bannerImage} alt="Dine Delight Catering" className="header-image" />
                    <div className="overlay-text"><h3>CONTACT US</h3></div>
                </div>
            </section> 

            <section className="about-catering">
                <h2> Book Now, Savor Every Moment, Unwind in Delight!</h2>
                <p>We offer personalized catering solutions for all events, ensuring every delicious detail is perfect. Contact us now for exceptional service and exquisite culinary experiences tailored to your needs. Your satisfaction is our priority.</p>
            </section>

            <section className="contact-section">
                <img src={contactImage} alt="Contact Us" className="contact-image" />
                <div className="contact-info">
                    <p><b>We value your interest! Get in touch with us for inquiries or reservations.</b></p>
                    <div className="contact-box">
                        <p><span className="icon">&#9993;</span> Email: contact@dinedelight.com</p>
                        <p><span className="icon">&#9742;</span> Phone: 919049608</p>
                    </div>
                </div>
            </section>

            <footer>
                <div className="container1">
                    <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Contact;
































