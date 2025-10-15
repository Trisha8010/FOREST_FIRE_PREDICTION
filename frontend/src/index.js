import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import About from './landing_page/About';
import Footer from './landing_page/Footer';
import Navbar from './landing_page/Navbar';
import { BrowserRouter, Routes, Route } from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<About />} />
      <Route path="/About" element={<About />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
