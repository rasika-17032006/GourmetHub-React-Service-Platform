/*import { useState } from "react";
import "../styles/e1.css";
const Services = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleExploreMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <img src="C:/Users/91867/Downloads/ll.png" alt="Logo" width={80} height={80} className="rounded" />
          <h1 className="text-xl font-bold">Welcome to Dine Delight – Where Every Meal is a Memory!</h1>
          <nav>
            <ul className="flex space-x-6 items-center">
              <li>
                <button onClick={toggleExploreMenu} className="text-lg font-semibold flex items-center">
                  &#9776; <span className="ml-2">Explore</span>
                </button>
                {menuOpen && (
                  <div className="absolute bg-white shadow-lg p-4 rounded mt-2">
                    <a href="homepage.html" className="block py-1">Home</a>
                    <a href="abt.html" className="block py-1">About Us</a>
                    <a href="services.html" className="block py-1">Services</a>
                    <a href="menus.html" className="block py-1">Menus</a>
                    <a href="galllery.html" className="block py-1">Gallery</a>
                    <a href="contact.html" className="block py-1">Contact</a>
                    <a href="new.html" className="block py-1">Feedback</a>
                  </div>
                )}
              </li>
              <li><a href="Login.html" className="hover:underline">Login</a></li>
              <li><a href="Registration.html" className="hover:underline">Register</a></li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="relative text-center py-8">
        <img src="C:/Users/91867/Downloads/it.png" alt="Dine Delight Catering" width={1200} height={500} className="rounded-lg mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-3xl font-bold">SERVICES</h3>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8">
        {[
          { src: "/pf.png", title: "Wedding Events", desc: "Celebrate your cherished wedding day with personalized menus and exceptional service." },
          { src: "/pg.png", title: "Intimate Gatherings", desc: "Host unforgettable private parties with customized menus and delightful dining experiences." },
          { src: "/pu.png", title: "Annual Day Functions", desc: "Ensure a successful annual function with vibrant food stations and delicious cuisine." },
          { src: "/pn.png", title: "Baby Showers", desc: "Celebrate a new arrival with sweet treats, savory bites, and whimsical presentations." },
          { src: "/pm.png", title: "House Warmings", desc: "Mark your milestone with inviting menu options for guests to enjoy." },
          { src: "/ps.png", title: "Corporate Events", desc: "Elevate corporate gatherings with impressive menus and seamless service." },
          { src: "/pv.png", title: "Custom Celebrations", desc: "Tailored catering solutions for graduations, themed parties, and special occasions." },
        ].map((event, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-lg text-center">
            <img src={event.src} alt={event.title} width={400} height={300} className="rounded-lg mx-auto" />
            <h3 className="text-xl font-bold mt-4">{event.title}</h3>
            <p className="mt-2">{event.desc}</p>
          </div>
        ))}
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
      </footer>
    </div>
  );
};

export default Services;*/

















import React, { useState } from "react";
import "../styles/e1.css";
import { Link } from "react-router-dom";
import logo from '../../src/imgs/ll.png'; 
import bannerImage from '../../src/imgs/it.png'; 
import weddingImage from '../../src/imgs/pf.png'; 
import partyImage from '../../src/imgs/pg.png'; 
import annualDayImage from '../../src/imgs/pu.png';
import babyShowerImage from '../../src/imgs/pn.png'; 
import houseWarmingImage from '../../src/imgs/pm.png'; 
import corporateImage from '../../src/imgs/ps.png';
import customImage from '../../src/imgs/pv.png';

const Services = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleExploreMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const eventData = [
        { src: weddingImage, title: "Wedding Events", desc: "Celebrate your cherished wedding day with Dine Delight Catering. We craft personalized menus featuring exquisite flavors, from elegant appetizers to memorable main courses and delightful desserts. Our experienced team ensures seamless service and meticulous attention to every culinary detail, allowing you to relax and savor every precious moment." },
        { src: partyImage, title: "Intimate Gatherings", desc: "Host unforgettable private parties with Dine Delight Catering's bespoke menus for intimate dinners, joyous birthday celebrations, and special anniversaries. Our team collaborates with you to design a culinary experience that complements your event's theme and your preferences. From delectable canapés to customized main courses and delightful desserts, we handle every detail with finesse, ensuring a seamless and enjoyable experience." },
        { src: annualDayImage, title: "Annual Day Functions", desc: "Make your annual day function a success with Dine Delight Catering's exceptional services. Expect comprehensive menu options for any scale, vibrant food stations or formal dinners, delicious and visually appealing cuisine, and smooth and memorable service." },
        { src: babyShowerImage, title: "Baby Showers", desc: "Celebrate the upcoming arrival with the delightful touch of Dine Delight Catering. We offer charming menus perfect for baby showers, featuring sweet treats, savory bites, and refreshing beverages. Our team helps create a whimsical atmosphere with beautifully presented food, catering to all your guests and allowing you to focus on sharing the joy." },
        { src: houseWarmingImage, title: "House Warmings", desc: "Mark the milestone of your new home with a delightful house warming celebration catered by Dine Delight. We provide a variety of inviting menu options perfect for mingling guests, from flavorful finger foods to comforting dishes. Let us handle the culinary details, adding warmth and hospitality to your new space so you can relax and enjoy sharing it with your loved ones." },
        { src: corporateImage, title: "Corporate Events", desc: "Elevate corporate events with Dine Delight Catering. We offer impressive menus, elegant presentations, high-quality ingredients, punctual delivery, and discreet service for meetings, conferences, and more." },
        { src: customImage, title: "Custom Celebrations", desc: "For any special occasion, Dine Delight Catering offers tailored catering solutions. Benefit from flexible and creative menus, experienced chefs, a dedicated service team, and a seamless and enjoyable experience for graduations, themed parties, and more." },
    ];

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
                    <div className="overlay-text"><h3>SERVICES</h3></div>
                </div>
            </section>

            <section className="event-section">
                {eventData.map((event, index) => (
                    <div key={index} className="event-container">
                        <div className="event-image">
                            <img src={event.src} alt={event.title} />
                        </div>
                        <div className="event-details">
                            <div className="event-name-box"><h3>{event.title}</h3></div>
                            <p className="event-description">{event.desc}</p>
                        </div>
                    </div>
                ))}
            </section>

            <footer>
                <div className="container1">
                    <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
                </div>
            </footer>
        </div>
    );
};

export default Services;
