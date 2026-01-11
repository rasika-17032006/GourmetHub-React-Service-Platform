import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import "../../src/styles/s1.css";
import logoImage from '../../src/imgs/ll.png';
import slide1Image from '../../src/imgs/ic.png';
import slide2Image from '../../src/imgs/io.png';
import slide3Image from '../../src/imgs/il.png';
import slide4Image from '../../src/imgs/iq.png';

function Homepage() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    slide1Image,
    slide2Image,
    slide3Image,
    slide4Image,
  ];
  const totalSlides = slides.length;
  const slidesContainerRef = useRef(null);
  const [exploreMenuVisible, setExploreMenuVisible] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      changeImage(1);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const changeImage = (direction) => {
    setCurrentSlide((prevSlide) => (prevSlide + direction + totalSlides) % totalSlides);
  };

  const updateSliderPosition = () => {
    if (slidesContainerRef.current) {
      const slideWidth = slidesContainerRef.current.offsetWidth;
      slidesContainerRef.current.style.transform = `translateX(-${currentSlide * slideWidth}px)`;
    }
  };

  useEffect(() => {
    updateSliderPosition();
  }, [currentSlide]);

  const toggleExploreMenu = () => {
    setExploreMenuVisible(!exploreMenuVisible);
  };

  return (
    <div>
      <header>
        <div className="container">
          <img src={logoImage} alt="Logo" className="logo" />
          <h1><b>Welcome to Dine Delight Catering - where Every Meal is a Memory!</b></h1>
          <nav>
            <ul>
              <li className="explore">
                <button className="explore-button" onClick={toggleExploreMenu}>
                  <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
                </button>
                <div id="explore-menu" className={`explore-menu ${exploreMenuVisible ? 'visible' : ''}`}>
                  <Link to="/"><h2><b>Home</b></h2></Link>
                  <Link to="/abt"><h2><b>About Us</b></h2></Link>
                  <Link to="/services"><h2><b>Services</b></h2></Link>
                  <Link to="/menu"><h2><b>Menus</b></h2></Link>
                  <Link to="/gallery"><h2><b>Gallery</b></h2></Link>
                  <Link to="/contact"><h2><b>Contact</b></h2></Link>
                  <Link to="/feedback"><h2><b>Feedback</b></h2></Link>
                </div>
              </li>
              <li><Link to="/login"><h3>Login</h3></Link></li>
              <li><Link to="/register"><h3>Register</h3></Link></li>
            </ul>
          </nav>
        </div>
      </header>

      <section id="Home">
        <div className="image-slider">
          <div className="slides-container" ref={slidesContainerRef}>
            {slides.map((slide, index) => (
              <img key={index} src={slide} alt={`Image ${index + 1}`} className="slide" />
            ))}
          </div>
          <button className="prev" onClick={() => changeImage(-1)}>&#60;</button>
          <button className="next" onClick={() => changeImage(1)}>&#62;</button>
        </div>
      </section>

      <footer>
        <div className="container1">
          <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
        </div>
      </footer>
    </div>
  );
}

export default Homepage;
























































