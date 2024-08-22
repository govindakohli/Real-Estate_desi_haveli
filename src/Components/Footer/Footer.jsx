import React from "react";
import "../Footer/Footer.css";
import { Link } from "react-router-dom";
import { FaFacebookF } from "react-icons/fa6";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

import { PiInstagramLogoFill } from "react-icons/pi";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>About DesiHaveli</h4>
          <p>
            DesiHaveli brings you the best of traditional living spaces with a
            modern touch. Our mission is to connect people with their dream
            homes, where culture and contemporary living go hand in hand.
          </p>
          <Link to="/about" className="footer-link">
            Learn More
          </Link>
        </div>
        <div className="footer-column">
          <h4>Contact Us</h4>
          <p>
            <strong>Address:</strong> SCO-10 , Sector-17 , Chandigarh, India
          </p>
          <p>
            <strong>Phone:</strong> +91 123 456 7890
          </p>
          <p>
            <strong>Email:</strong> support@desihaveli.com
          </p>
        </div>
        <div className="footer-column">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li>
              <Link to="/" className="footer-link">
                Home
              </Link>
            </li>
            <li>
              <Link to="/services" className="footer-link">
                Services
              </Link>
            </li>
            <li>
              <Link to="/properties" className="footer-link">
                Properties
              </Link>
            </li>
            <li>
              <Link to="/contact" className="footer-link">
                Contact
              </Link>
            </li>
            <li>
              <Link to="/blog" className="footer-link">
                Blog
              </Link>
            </li>
          </ul>
        </div>

        <div className="footer-column">
          <h4>Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/"
              target="_blank"
              className="social-icon"
            >
              <FaFacebookF />
            </a>
            <a href="https://x.com/" target="_blank" className="social-icon">
              <BsTwitterX />
            </a>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              className="social-icon"
            >
              <PiInstagramLogoFill />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              className="social-icon"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 DesiHaveli. All Rights Reserved.</p>
        <br />
        <p>Developed By Govinda</p>
      </div>
    </footer>
  );
}

export default Footer;
