/*import { useState } from "react";
import "../styles/m1.css";
const Menu = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleExploreMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div>
      <header className="bg-gray-800 text-white py-4">
        <div className="container mx-auto flex justify-between items-center px-4">
        Image src="C:\Users\91867\Downloads\ll.png" alt="Logo" width={80} height={80} className="rounded" />
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
        <img src="C:\Users\91867\Downloads\it.png" alt="Dine Delight Catering" width={1200} height={500} className="rounded-lg mx-auto" />
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <h3 className="text-white text-3xl font-bold">MENU</h3>
        </div>
      </section>

      <section className="container mx-auto px-6 py-12">
        <h2 className="text-2xl font-bold text-center">Our Delicious Menu</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
          {[
            { title: "Starters", img: "/da.png", items: ["Paneer Tikka", "Vegetable Pakora", "Samosa", "Aloo Tikki"] },
            { title: "Soups", img: "/de.png", items: ["Vegetable Soup", "Lentil Soup", "Spinach Soup"] },
            { title: "Main Course", img: "/dg.png", items: ["Paneer Butter Masala", "Dal Makhani", "Vegetable Biryani"] },
            { title: "Beverages", img: "/dd.png", items: ["Masala Chai", "Lassi (Sweet)", "Lassi (Salted)"] },
            { title: "Desserts", img: "/dc.png", items: ["Gulab Jamun", "Rasgulla", "Rasmalai"] },
            { title: "Chaat", img: "/df.png", items: ["Pani Puri", "Sev Puri", "Bhel Puri"] },
          ].map((category, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-4">{category.title}</h3>
              <img src={category.img} alt={category.title} width={200} height={150} className="rounded-lg mx-auto" />
              <ul className="mt-4">
                {category.items.map((item, i) => (
                  <li key={i} className="text-gray-700">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-gray-800 text-white text-center py-4">
        <h3>&copy; 2025 Dine Delight Catering Services. All rights reserved.</h3>
      </footer>
    </div>
  );
};

export default Menu;*/

























import React, { useState } from "react";
import "../styles/m1.css"; 
import { Link } from "react-router-dom";

import logo from '../../src/imgs/ll.png';
import bannerImage from '../../src/imgs/it.png';
import startersImage from '../../src/imgs/da.png';
import soupsImage from '../../src/imgs/de.png';
import mainCourseImage from '../../src/imgs/dg.png';
import beveragesImage from '../../src/imgs/dd.png';
import dessertsImage from '../../src/imgs/dc.png';
import chaatImage from '../../src/imgs/df.png';

const Menus = () => {
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
                    <div className="overlay-text"><h3>MENU</h3></div>
                </div>
            </section>

            <section className="food-menu">
                <div className="menu-row">
                    <div className="menu-box">
                        <h2 className="menu-title">Starters</h2>
                        <div className="menu-bg">
                            <img src={startersImage} alt="Starters" />
                        </div>
                        <ul className="menu-items">
                            <li>Paneer Tikka</li>
                            <li>Vegetable Pakora</li>
                            <li>Samosa</li>
                            <li>Aloo Tikki</li>
                            <li>Hara Bhara Kebab</li>
                            <li>Gobi 65</li>
                            <li>Chilli Paneer (Dry)</li>
                            <li>Mushroom Tikka</li>
                            <li>Veg Seekh Kebab</li>
                            <li>Dahi Ke Kebab</li>
                        </ul>
                    </div>

                    <div className="menu-box">
                        <h2 className="menu-title">Soups</h2>
                        <div className="menu-bg">
                            <img src={soupsImage} alt="Soups" />
                        </div>
                        <ul className="menu-items">
                            <li>Vegetable Soup</li>
                            <li>Lentil Soup (Dal Shorba)</li>
                            <li>Spinach Soup</li>
                            <li>Mushroom Soup</li>
                            <li>Sweet Corn Soup</li>
                            <li>Hot and Sour Soup</li>
                            <li>Manchow Soup</li>
                            <li>Cream of Tomato Soup</li>
                            <li>Clear Vegetable Broth</li>
                        </ul>
                    </div>

                    <div className="menu-box">
                        <h2 className="menu-title">Main Course</h2>
                        <div className="menu-bg">
                            <img src={mainCourseImage} alt="Main Course" />
                        </div>
                        <ul className="menu-items">
                            <li>Paneer Butter Masala</li>
                            <li>Dal Makhani</li>
                            <li>Vegetable Biryani</li>
                            <li>Aloo Gobi</li>
                            <li>Palak Paneer</li>
                            <li>Chana Masala</li>
                            <li>Malai Kofta</li>
                            <li>Baingan Bharta</li>
                            <li>Vegetable Jalfrezi</li>
                            <li>Rajma Masala</li>
                        </ul>
                    </div>
                </div>

                <div className="menu-row">
                    <div className="menu-box">
                        <h2 className="menu-title">Beverages</h2>
                        <div className="menu-bg">
                            <img src={beveragesImage} alt="Beverages" />
                        </div>
                        <ul className="menu-items">
                            <li>Masala Chai</li>
                            <li>Lassi (Sweet)</li>
                            <li>Lassi (Salted)</li>
                            <li>Nimbu Pani (Lemonade)</li>
                            <li>Jal Jeera</li>
                            <li>Sharbat (various flavors)</li>
                            <li>Badam Milk</li>
                            <li>Mango Shake</li>
                            <li>Rose Milk</li>
                            <li>Coconut Water</li>
                        </ul>
                    </div>

                    <div className="menu-box">
                        <h2 className="menu-title">Desserts</h2>
                        <div className="menu-bg">
                            <img src={dessertsImage} alt="Desserts" />
                        </div>
                        <ul className="menu-items">
                            <li>Gulab Jamun</li>
                            <li>Rasgulla</li>
                            <li>Rasmalai</li>
                            <li>Gajar Halwa</li>
                            <li>Sooji Halwa</li>
                            <li>Kheer (Rice Pudding)</li>
                            <li>Barfi (various types)</li>
                            <li>Ladoo (various types)</li>
                            <li>Jalebi</li>
                            <li>Shrikhand</li>
                        </ul>
                    </div>

                    <div className="menu-box">
                        <h2 className="menu-title">Chaat</h2>
                        <div className="menu-bg">
                            <img src={chaatImage} alt="Chaat" />
                        </div>
                        <ul className="menu-items">
                            <li>Pani Puri</li>
                            <li>Sev Puri</li>
                            <li>Bhel Puri</li>
                            <li>Dahi Puri</li>
                            <li>Aloo Tikki Chaat</li>
                            <li>Papdi Chaat</li>
                            <li>Dahi Vada</li>
                            <li>Chana Chaat</li>
                            <li>Raj Kachori</li>
                            <li>Sev Batata Puri</li>
                        </ul>
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

export default Menus;
