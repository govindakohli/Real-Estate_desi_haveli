import React from 'react'
import "../Service/Services.css"
import { jsxDEV as _jsxDEV } from "react/jsx-dev-runtime";
const servicesData = [
  {
    title: 'Property Buying',
    description: 'Find and purchase your ideal property with expert assistance and comprehensive support.',
    icon: 'https://storage.googleapis.com/realtyplusmag-news-photo/news-photo/111832.NoBorker%E2%80%99s-Survey-Says-86%-Believe-Now-Is-Good-Time-To-Buy-Property.jpg'
  },
  {
    title: 'Property Selling',
    description: 'Sell your property quickly and effectively with our top-notch selling strategies.',
    icon: 'https://bhumikarealestate.in/images/sell.png'
  },
  {
    title: 'Property Rental',
    description: 'Discover rental properties or lease out your own with our extensive network and insights.',
    icon: 'https://assets.entrepreneur.com/content/3x2/2000/1681755662-GettyImages-1362129126.jpg'
  },
  {
    title: 'Property Management',
    description: 'Ensure your property is well-managed and maintained with our reliable management services.',
    icon: 'https://tribecacare.com/wp-content/uploads/2022/07/Edinburgh-Property-management.jpg'
  }
];

function Services() {
  return (
    <div className="services">
      <section className="service-hero-section">
        <div className="hero-content">
          <h1>Our  Services</h1>
          <p>Discover a comprehensive range of real estate property needs.</p>
        </div>
      </section>
      
      <section className="services-section">
        <div className="services-content">
          {servicesData.map((service, index) => (
            <div className="service-card" key={index}>
              <img  src={service.icon} alt={service.title} className="service-icon" />
              <h2>{service.title}</h2>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonials-container">
          <div className="testimonial">
            <p>"The service provided was exceptional! They helped me find the perfect property quickly."</p>
            <h4>Amit Sukhla</h4>
          </div>
          <div className="testimonial">
            <p>"Selling my property was a breeze thanks to their professional approach and expertise."</p>
            <h4>Vijay kumar</h4>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <h2>Ready to Get Started?</h2>
        <p>Contact us today to explore our services and find out how we can assist you with your real estate needs.</p>
        <a href="/contact" className="cta-button">Get in Touch</a>
      </section>
    </div>
  );
}


export default Services
