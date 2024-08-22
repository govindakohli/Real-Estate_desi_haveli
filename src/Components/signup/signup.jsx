import React from "react";
import "../signup/signup.css";
import { Link } from "react-router-dom";

function signup() {
  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Create an Account</h2>
        <form>
          <div className="input-group">
            <label>Full Name</label>
            <input type="text" placeholder="Enter your full name" required />
          </div>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Create a password" required />
          </div>
          <div className="input-group">
            <label>Confirm Password</label>
            <input
              type="password"
              placeholder="Confirm your password"
              required
            />
          </div>
          <button type="submit" className="signup-button">
            Sign Up
          </button>
        </form>
        <div className="signin-link">
          <p>
            Already have an account? <Link to="/signin">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default signup;
