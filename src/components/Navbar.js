import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/s1.css"; 

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header>
      <div className="container">
        <img src="/assets/ll.png" alt="Logo" className="logo" />
        <h1>Welcome to Dine Delight – Where Every Meal is a Memory!</h1>
        <nav>
          <ul>
            <li className="explore">
              <button onClick={() => setMenuOpen(!menuOpen)} className="explore-button">
                <span className="veggie-burger">&#9776;</span> <h3>Explore</h3>
              </button>
              {menuOpen && (
                <div className="explore-menu">
                  <Link to="/">Home</Link>
                  <Link to="/about">About Us</Link>
                  <Link to="/services">Services</Link>
                  <Link to="/menus">Menus</Link>
                  <Link to="/gallery">Gallery</Link>
                  <Link to="/contact">Contact</Link>
                  <Link to="/feedback">Feedback</Link>
                </div>
              )}
            </li>
            <li><Link to="/login">Login</Link></li>
            <li><Link to="/register">Register</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;













