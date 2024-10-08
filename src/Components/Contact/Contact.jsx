import React from "react";
import "../Contact/Contact.css";

function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-hero-section">
        <div className="contact-hero-content">
          <h1>Contact Us</h1>
          <p>
            We’d love to hear from you! Whether you’re looking for more
            information, need assistance, or just want to share your thoughts,
            our team is here to help.
          </p>
        </div>
      </div>

      <div className="contact-info-section">
        <h2>Get in Touch</h2>
        <p>
          Reach out to us through any of the following methods. We aim to
          respond within 24 hours.
        </p>
        <div className="contact-details">
          <div className="contact-detail">
            <h3>Email Us</h3>
            <p>info@desihaveli.com</p>
          </div>
          <div className="contact-detail">
            <h3>Call Us</h3>
            <p>+91 1234 567 890</p>
          </div>
          <div className="contact-detail">
            <h3>Visit Us</h3>
            <p> SCO-10 , Sector-17 , Chandigarh, India</p>
          </div>
        </div>
      </div>

      <div className="contact-form-section">
        <h2>Send Us a Message</h2>
        <form className="contact-form">
          <div className="form-group">
            <label></label>
            <input
              placeholder="First Name"
              type="text"
              name="firstName"
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <input
              placeholder="Last Name"
              type="text"
              name="lastName"
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <input placeholder="Email" type="email" name="email" required />
          </div>
          <div className="form-group">
            <label></label>
            <input
              placeholder="Mobile Number"
              type="tel"
              name="mobile"
              required
            />
          </div>
          <div className="form-group">
            <label></label>
            <textarea
              placeholder="Message"
              name="message"
              rows="6"
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-button">
            Submit
          </button>
        </form>
      </div>

      <div className="map-section">
        <h2>Find Us on the Map</h2>
        <p>
          We’re conveniently located in the heart of Chandigarh. Come visit us!
        </p>
        <div className="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3429.182508563678!2d76.78093207503797!3d30.74137453521591!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sSCO-10%20%2C%20Sector-17%20%2C%20Chandigarh%2C%20India!5e0!3m2!1sen!2sin!4v1724308774240!5m2!1sen!2sin"
            width="100%"
            height="450"
            allowFullScreen=""
            loading="lazy"
            title="Location Map"
          ></iframe>
        </div>
      </div>
    </div>
  );
}
export default Contact;
