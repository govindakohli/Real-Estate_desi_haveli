import React from 'react'
import { Link } from 'react-router-dom';
import "../signIn/signin.css"
function signin() {
  return (
    <div className="signin-container">
      <div className="signin-card">
        <h2>Sign In</h2>
        <form>
          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>
          <button type="submit" className="signin-button">Sign In</button>
        </form>
        <div className="signup-link">
          <p>Don't have an account? <Link to="/signup">Sign up</Link></p>
        </div>
      </div>
    </div>
  );
}

export default signin
