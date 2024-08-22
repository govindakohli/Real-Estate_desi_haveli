// src/components/Navbar.js

import React, { useState } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMobileMenu = () => setIsOpen(false);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          DesiHaveli
        </Link>
        <ul
          id="navbar-menu"
          className={`navbar-menu ${isOpen ? "active" : ""}`}
        >
          <li>
            <Link to="/" className="menu-item" onClick={closeMobileMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="menu-item" onClick={closeMobileMenu}>
              About
            </Link>
          </li>
          <li>
            <Link
              to="/services"
              className="menu-item"
              onClick={closeMobileMenu}
            >
              Services
            </Link>
          </li>
          <li>
            <Link to="/blog" className="menu-item" onClick={closeMobileMenu}>
              Blog
            </Link>
          </li>
          <li>
            <Link
              to="/pricings"
              className="menu-item"
              onClick={closeMobileMenu}
            >
              Pricings
            </Link>
          </li>
          <li>
            <Link to="/contact" className="menu-item" onClick={closeMobileMenu}>
              Contact
            </Link>
          </li>
          <li>
            <Link to="/signIn" className="menu-item" onClick={closeMobileMenu}>
              Sign In
            </Link>
          </li>
        </ul>
        <div
          className={`navbar-toggle ${isOpen ? "active" : ""}`}
          onClick={toggleMenu}
          aria-expanded={isOpen ? "true" : "false"}
          aria-controls="navbar-menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
