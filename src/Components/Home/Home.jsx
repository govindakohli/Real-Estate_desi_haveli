import React from "react";
import Hero from "./Hero/Hero";
import "../Home/Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <Hero />

      {/* Featured Properties */}
      <section className="featured-properties">
        <h2>Featured Properties</h2>
        <div className="property-cards">
          <div className="property-card">
            <img
              src="https://images.pexels.com/photos/53610/large-home-residential-house-architecture-53610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Property 1"
            />
            <h3>Royal Heritage Villa</h3>
            <p>Experience the blend of luxury and tradition.</p>
          </div>
          <div className="property-card">
            <img
              src="https://images.pexels.com/photos/2305747/pexels-photo-2305747.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1g"
              alt="Property 2"
            />
            <h3>Modern Urban Flat</h3>
            <p>Comfort and convenience in the heart of the city.</p>
          </div>
          <div className="property-card">
            <img
              src="https://images.pexels.com/photos/18465390/pexels-photo-18465390/free-photo-of-house-in-village.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="Property 3"
            />
            <h3>Serene Countryside Bungalow</h3>
            <p>Peaceful living with stunning views.</p>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="about-us">
        <h2>About DesiHaveli</h2>
        <p>
          At DesiHaveli, we believe in creating homes that honor the rich
          cultural heritage of India while embracing modern amenities. Our
          mission is to provide you with a home that reflects your unique style,
          needs, and aspirations.
        </p>
        <p>
          Whether you are looking for a traditional villa steeped in history or
          a modern flat in the bustling city, we have something for everyone.
          Our team of experts is dedicated to helping you find the perfect home,
          guiding you through every step of the process.
        </p>
      </section>

      {/* Services Section */}
      <section className="services">
        <h2>Our Services</h2>
        <div className="service-cards">
          <div className="service-card">
            <i className="icon fa fa-home"></i>
            <h3>Property Sales</h3>
            <p>
              We offer a wide range of properties for sale to match your unique
              preferences.
            </p>
          </div>
          <div className="service-card">
            <i className="icon fa fa-search"></i>
            <h3>Property Search</h3>
            <p>
              Our advanced search tool helps you find your dream home with ease.
            </p>
          </div>
          <div className="service-card">
            <i className="icon fa fa-handshake-o"></i>
            <h3>Consultation</h3>
            <p>
              Expert advice and guidance throughout your home buying journey.
            </p>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial-cards">
          <div className="testimonial-card">
            <p>
              "DesiHaveli helped us find our perfect home. The process was
              smooth, and the team was incredibly supportive!"
            </p>
            <h4>- Anjali Sharma</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "I love my new apartment in the city! DesiHaveli made the whole
              experience enjoyable and stress-free."
            </p>
            <h4>- Rahul Verma</h4>
          </div>
          <div className="testimonial-card">
            <p>
              "The perfect blend of tradition and modernity. Thank you,
              DesiHaveli, for making our dream come true."
            </p>
            <h4>- Neha Gupta</h4>
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="call-to-action">
        <h2>Ready to Find Your Dream Home?</h2>
        <p>
          Contact us today and let DesiHaveli guide you to the perfect property.
        </p>
        <Link to="/contact" className="btn-secondary">
          Get in Touch
        </Link>
      </section>
    </>
  );
}

export default Home;
