// src/Components/Hero/Hero.js
import React from 'react';
import './Hero.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHeart, FaStethoscope, FaUserMd } from "react-icons/fa";

const Hero = () => {
  const images = [
    "https://images.pexels.com/photos/1642125/pexels-photo-1642125.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/323780/pexels-photo-323780.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1370704/pexels-photo-1370704.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/2157404/pexels-photo-2157404.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/164338/pexels-photo-164338.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1475938/pexels-photo-1475938.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1486785/pexels-photo-1486785.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  ];

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1,
      slidesToSlide: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1,
      slidesToSlide: 1,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1,
    },
  };

  return (
    <section className="hero-section">
      <Carousel
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={2000}
        removeArrowOnDeviceType={["mobile" ,"tablet" , "desktop",] }
        // showDots={true}
        containerClass="carousel-container"
        itemClass="carousel-item"
      >
        {images.map((image, index) => (
          <div key={index} className="carousel-slide">
            <img src={image} alt={`Hospital slide ${index + 1}`} />
          </div>
        ))}
      </Carousel>
      <div className="hero-content">
        <h1>Welcome to DesiHaveli</h1>
        <p>"Unlock Your Dream Home with DesiHaveli – Where Tradition Meets Modern Living."</p>
        {/* <div className="hero-icons">
          <div className="icon-box">
            <FaHeart />
            <p>Compassionate Care</p>
          </div>
          <div className="icon-box">
            <FaStethoscope />
            <p>Advanced Equipment</p>
          </div>
          <div className="icon-box">
            <FaUserMd />
            <p>Expert Doctors</p>
          </div>
        </div> */}
      </div>
    </section>
  );
}

export default Hero;
