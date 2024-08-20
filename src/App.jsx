// src/App.js
import React from 'react';
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar';
import Home from "./Components/Home/Home";
import Contact from "./Components/Contact/Contact";
import Services from "./Components/Service/Services";
import About from "./Components/About/About"; // Fixed typo in component name
import Blog from "./Components/Blog/Blog";
import Pricings from "./Components/Pricings/Pricings";
import SignIn from "./Components/signIn/SignIn"; // Fixed typo in component name
import Footer from "./Components/Footer/Footer"

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/pricings" element={<Pricings />} />
        <Route path="/contact" element={<Contact />} /> {/* Fixed `component` to `element` */}
        <Route path="/signin" element={<SignIn />} /> {/* Fixed `component` to `element` */}
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;
