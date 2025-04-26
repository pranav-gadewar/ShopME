import React from "react";
import { FaInstagram, FaFacebook, FaLinkedin, FaMapMarkerAlt } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#212529] text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Brand Info */}
          <div>
            <h1 className="text-2xl font-bold mb-2">ShopMe</h1>
            <p className="text-gray-300 text-sm">
              Your one-stop shop for all sports gear. Quality and performance guaranteed.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Quick Links</h2>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/about" className="hover:text-primary">About</Link></li>
              {/* <li><Link to="/products" className="hover:text-primary">Products</Link></li> */}
              <li><Link to="/contact" className="hover:text-primary">Contact</Link></li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h2 className="text-xl font-semibold mb-3">Contact</h2>
            <p className="flex items-center gap-2 text-gray-300 text-sm">
              <FaMapMarkerAlt /> Pune, Maharashtra
            </p>
            <p className="flex items-center gap-2 text-gray-300 text-sm mt-2">
              <IoCall /> +91 123456789
            </p>
            <div className="flex gap-4 mt-4">
              <a href="#" className="hover:text-primary">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-primary">
                <FaLinkedin className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-4">
          © {new Date().getFullYear()} ShopMe. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
