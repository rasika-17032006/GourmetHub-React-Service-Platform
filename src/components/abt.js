/*import { useState } from "react";
import '../App.css'; 
import "../styles/d1.css";
const Abt = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleExploreMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
          <imgs src="/ll.png" alt="Logo" width={80} height={80} className="rounded" />
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
        <Image src="/it.png" alt="Dine Delight Catering" width={1200} height={500} className="rounded-lg mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-3xl font-bold">ABOUT US</h3>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 text-center">
        <h2 className="text-2xl font-bold">Experience Dine Delight Catering!</h2>
        <p className="text-lg mt-4">At Dine Delight, we specialize in creating unforgettable dining experiences...</p>
        <div className="mt-6">
          <Image src="/pe.png" alt="Catering Service" width={600} height={400} className="rounded-lg mx-auto" />
        </div>
      </section>

      <section className="bg-gray-100 py-12 px-6">
        <div className="container mx-auto flex flex-wrap justify-between">
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-bold">Our Vision</h3>
            <p className="mt-2">At Dine Delight Catering, our goal is to be the leading name in exceptional catering...</p>
          </div>
          <div className="w-full md:w-1/2 p-4">
            <h3 className="text-xl font-bold">Our Mission</h3>
            <p className="mt-2">Our mission is to deliver high-quality, delicious, and innovative cuisine...</p>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12 text-center">
        <h3 className="text-xl font-bold">What Makes Us Unique?</h3>
        <p className="mt-4">Dine Delight Catering stands out for its commitment to quality, creativity...</p>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
      </footer>
    </div>
  );
};

export default Abt;*/













import React, { useState } from "react";
import { Link } from 'react-router-dom';
import "../styles/d1.css"; 
import logoImage from '../../src/imgs/ll.png';
import headerImage from '../../src/imgs/it.png';
import cateringImage from '../../src/imgs/pe.png'; 

const Abt = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleExploreMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header>
        <div className="container">
          <img src={logoImage} alt="Logo" className="logo" />
          <h1><b>Welcome to Dine Delight – Where Every Meal is a Memory!</b></h1>
          <nav>
            <ul>
              <li className="explore">
                <button className="explore-button" onClick={toggleExploreMenu}>
                  <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
                </button>
                <div
                  id="explore-menu"  className={`explore-menu ${menuOpen ? "visible" : ""}`}>
                  <Link to="/"><h2><b>Home</b></h2></Link>
                  <Link to="/abt"><h2><b>About Us</b></h2></Link>
                  <Link to="/services"><h2><b>Services</b></h2></Link>
                  <Link to="/menu"><h2><b>Menus</b></h2></Link>
                  <Link to="/gallery"><h2><b>Gallery</b></h2></Link>
                  <Link to="/contact"><h2><b>Contact</b></h2></Link>
                  <Link to="/feedback"><h2><b>Feedback</b></h2></Link>
                </div>
              </li>
              <li>
                <Link to="/login"><h3>Login</h3></Link>
              </li>
              <li>
                <Link to="/register"><h3>Register</h3></Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <section className="image-header">
        <div className="image-wrapper">
          <img
            src={headerImage}
            alt="Dine Delight Catering"
            className="header-image"
          />
          <div className="overlay-text">
            <h3>ABOUT US</h3>
          </div>
        </div>
      </section>

      <section className="about-us">
        <h2>Experience Dine Delight Catering!</h2>
        <p>
          At Dine Delight, we specialize in creating unforgettable dining
          experiences with our exceptional catering services. Whether it’s a
          corporate event, a wedding, or a private gathering, we provide
          delectable dishes that leave a lasting impression. Our passion for
          food and commitment to excellence is reflected in every dish we serve,
          making us the perfect choice for any occasion. Let us make your event
          truly memorable!
        </p>
        <p>
          We tailor our services to fit your unique needs, offering a diverse
          menu that delights every palate. Let us make your event memorable with
          delicious food and exceptional service, turning every moment into a
          celebration of taste and joy.
        </p>

        <div className="image-center">
          <img
            src={cateringImage}
            alt="Catering Service"
            className="intro-image"
          />
        </div>

        <div className="vision-mission">
          <div className="vision">
            <h3>Our Vision</h3>
            <p>
              At Dine Delight Catering, our goal is to be the leading name in
              exceptional catering, renowned for our innovation, impeccable
              service, and unforgettable dining experiences. We are committed to
              crafting culinary masterpieces that elevate every event, ensuring
              each dish reflects our passion for excellence. By embracing new
              trends and refining our techniques, we create fresh, exciting
              offerings that make us the trusted choice for memorable
              celebrations.
            </p>
          </div>

          <div className="mission">
            <h3>Our Mission</h3>
            <p>
              At Dine Delight Catering, our mission is to deliver high-quality,
              delicious, and innovative cuisine for events of all sizes. With a
              focus on excellence and customer satisfaction, we use the finest
              locally sourced ingredients to create unforgettable flavors.
              Committed to sustainability, we ensure every dish reflects our
              passion for quality and environmental responsibility. More than
              just a meal, we provide an exceptional dining experience that
              makes every celebration extraordinary.
            </p>
          </div>
        </div>

        <div className="unique-section">
          <h3>What Makes Us Unique?</h3>
          <p>
            Dine Delight Catering stands out for its commitment to quality,
            creativity, and personalized service. We use locally sourced
            ingredients to craft fresh, flavorful dishes tailored to your
            event. Our customizable menu options cater to diverse tastes and
            dietary needs, ensuring every occasion is unforgettable. With a
            focus on attention to detail and exceptional service, we create
            culinary experiences that go beyond just food.
          </p>
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

export default Abt;