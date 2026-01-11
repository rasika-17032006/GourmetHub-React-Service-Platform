import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/b1.css";
import bgImage from '../../src/imgs/lq.png';

function Login() {
  return (
    <div className="login-wrapper">
      <div className="image-container">
        <img src={bgImage} alt="Background" className="background-image" />
      </div>
      <div className="form-container">
        <h1>Login</h1>
        <form>
          <label htmlFor="email">Email:</label>
          <input type="email" name="email" id="email" required />

          <label htmlFor="password">Password:</label>
          <input type="password" id="password" name="password" required />

          <button type="submit">Login</button>
        </form>
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
        <p>
          Go to Homepage <Link to="/">Home</Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
