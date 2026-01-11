import React, { useState } from "react";
import "../styles/f1.css"; 
import { Link } from "react-router-dom";

import logo from '../../src/imgs/ll.png';
import bannerImage from '../../src/imgs/it.png';
import galleryImage1 from '../../src/imgs/cc.png';
import galleryImage2 from '../../src/imgs/ce.png';
import galleryImage3 from '../../src/imgs/ck.png';
import galleryImage4 from '../../src/imgs/cj.png';
import galleryImage5 from '../../src/imgs/ci.png';
import galleryImage6 from '../../src/imgs/cd.png';
import galleryImage7 from '../../src/imgs/cl.png';
import galleryImage8 from '../../src/imgs/cn.png';
import galleryImage9 from '../../src/imgs/cm.png';

const Gallery = () => {
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
                    <div className="overlay-text"><h3>GALLERY</h3></div>
                </div>
            </section>

            <section className="gallery-section">
                <div className="gallery-image">
                    <img src={galleryImage1} alt="Gallery Image 1" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage2} alt="Gallery Image 2" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage3} alt="Gallery Image 3" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage4} alt="Gallery Image 4" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage5} alt="Gallery Image 5" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage6} alt="Gallery Image 6" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage7} alt="Gallery Image 7" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage8} alt="Gallery Image 8" />
                </div>
                <div className="gallery-image">
                    <img src={galleryImage9} alt="Gallery Image 9" />
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

export default Gallery;
