import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";

// Components
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Products from "./components/Products/Products";
import Subscribe from "./components/Subscribe/Subscribe";
import Testimonials from "./components/Testimonials/Testimonials";
import Footer from "./components/Footer/Footer";
import Popup from "./components/Popup/Popup";

// Pages
import MensWear from "./components/Pages/MensWear";
import WomensWear from "./components/Pages/WomensWear";
import Contact from "./components/Pages/Contact";
import About from "./components/Pages/About";
import Sports from "./components/Pages/Sports"; // Make sure the path is correct
import Cart from "./components/Pages/Cart";
import Payment from "./components/Pages/Payment";

import AOS from "aos";
import "aos/dist/aos.css";

const Home = ({ handleOrderPopup }) => (
  <>
    <Hero handleOrderPopup={handleOrderPopup} />
    <Products />
    <Subscribe />
    <Testimonials />
  </>
);

const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(() => {
    AOS.init({
      offset: 100,
      duration: 800,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh();
  }, []);

  return (
    <CartProvider>
      <BrowserRouter>
        <div className="bg-white dark:bg-gray-900 dark:text-white duration-200">
          <Navbar handleOrderPopup={handleOrderPopup} />
          <Routes>
            <Route path="/" element={<Home handleOrderPopup={handleOrderPopup} />} />
            <Route path="/mens-wear" element={<MensWear />} />
            <Route path="/womens-wear" element={<WomensWear />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/sports" element={<Sports />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<Payment />} />
          </Routes>
          <Footer />
          <Popup orderPopup={orderPopup} setOrderPopup={setOrderPopup} />
        </div>
      </BrowserRouter>
    </CartProvider>
  );
};

export default App;
