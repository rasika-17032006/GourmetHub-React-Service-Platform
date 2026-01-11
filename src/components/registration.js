

import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/b1.css";
import bgImg from '../../src/imgs/lo.png';
function RegistrationPage() {
  return (
    <div className="login-wrapper">
      <div className="image-container">
        <img src={bgImg} alt="Background Image" className="background-image" />
      </div>
      <div className="form-container">
        <h1>Register</h1>
        <form>
          <label htmlFor="username">Username:</label>
          <input type="text" id="username" name="username" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <label htmlFor="confirm-password">Confirm Password:</label>
          <input type="password" id="confirm-password" name="confirm-password" required />

          <button type="submit">Register</button>
        </form>
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>
        <p>
          Go to Homepage <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default RegistrationPage;