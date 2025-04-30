import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

import ga from '../Images/gym/Dumbbells.jpg';
import gb from '../Images/gym/Treadmill.jpg';
import gc from '../Images/gym/Resistance Bands.jpg';
import gd from '../Images/gym/Yoga Mat.jpg';

import fa from '../Images/football/Football Shoes.jpg';
import fb from '../Images/football/Football.jpg';
import fc from '../Images/football/Shin Guards.jpg';
import fd from '../Images/football/Goalkeeper Gloves.jpg';

import ha from '../Images/hockey/Hockey Stick.jpg';
import hb from '../Images/hockey/Hockey Puck.jpg';
import hc from '../Images/hockey/Hockey Gloves.jpg';
import hd from '../Images/hockey/Hockey Pads.jpg';

import ba from '../Images/Basketball/basketball.jpg';
import bb from '../Images/Basketball/Basketball Shoes.jpg';
import bc from '../Images/Basketball/Basketball Hoop.jpg';
import bd from '../Images/Basketball/Knee Pads.jpg';

import ja from '../Images/badminton/Badminton Racket.jpg';
import jb from '../Images/badminton/Shuttlecocks.jpg';
import jc from '../Images/badminton/Badminton Net.jpg';
import jd from '../Images/badminton/Grip Tape.jpg';

const sportsData = {
  gym: [
    { id: "gym-1", title: "Dumbbells", image: ga, description: "Perfect for your strength training.", price: 40 },
    { id: "gym-2", title: "Treadmill", image: gb, description: "Ideal for running and cardio.", price: 500 },
    { id: "gym-3", title: "Resistance Bands", image: gc, description: "Great for flexibility and strength.", price: 25 },
    { id: "gym-4", title: "Yoga Mat", image: gd, description: "Comfortable mat for your yoga sessions.", price: 30 },
  ],
  football: [
    { id: "football-1", title: "Football Shoes", image: fa, description: "Comfortable shoes for football.", price: 60 },
    { id: "football-2", title: "Football", image: fb, description: "Durable football for your practice.", price: 20 },
    { id: "football-3", title: "Shin Guards", image: fc, description: "Protect your legs while playing.", price: 15 },
    { id: "football-4", title: "Goalkeeper Gloves", image: fd, description: "Save goals with top-quality gloves.", price: 45 },
  ],
  hockey: [
    { id: "hockey-1", title: "Hockey Stick", image: ha, description: "Essential for every hockey player.", price: 70 },
    { id: "hockey-2", title: "Hockey Puck", image: hb, description: "Durable puck for all your games.", price: 10 },
    { id: "hockey-3", title: "Hockey Gloves", image: hc, description: "Protect your hands during the game.", price: 35 },
    { id: "hockey-4", title: "Hockey Pads", image: hd, description: "Pads for knee and elbow protection.", price: 40 },
  ],
  badminton: [
    { id: "badminton-1", title: "Badminton Racket", image: ja, description: "High-quality rackets for fast play.", price: 30 },
    { id: "badminton-2", title: "Shuttlecocks", image: jb, description: "Durable shuttlecocks for all levels.", price: 12 },
    { id: "badminton-3", title: "Badminton Net", image: jc, description: "Easy to set up and play anywhere.", price: 25 },
    { id: "badminton-4", title: "Grip Tape", image: jd, description: "Comfortable grip for your racket.", price: 5 },
  ],
  basketball: [
    { id: "basketball-1", title: "Basketball", image: ba, description: "Official size basketball for games.", price: 20 },
    { id: "basketball-2", title: "Basketball Shoes", image: bb, description: "Supportive shoes for quick movement.", price: 70 },
    { id: "basketball-3", title: "Basketball Hoop", image: bc, description: "Portable hoop for practice.", price: 150 },
    { id: "basketball-4", title: "Knee Pads", image: bd, description: "Protect your knees during intense play.", price: 20 },
  ],
};

const Sports = () => {
  const { cart, addToCart, updateQuantity } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (product) => {
    const inCart = cart.find((item) => item.id === product.id);
    if (inCart) {
      updateQuantity(product.id, inCart.quantity + 1);
    } else {
      addToCart({ ...product, quantity: 1 });
    }
  };

  const handleQuantityChange = (id, action) => {
    const item = cart.find((i) => i.id === id);
    if (!item) return;
    const newQuantity = action === "increase" ? item.quantity + 1 : item.quantity - 1;
    if (newQuantity > 0) {
      updateQuantity(id, newQuantity);
    }
  };

  const getQuantity = (id) => {
    return cart.find((item) => item.id === id)?.quantity || 0;
  };

  return (
    <div className="py-20 bg-gray-50 dark:bg-gray-900 transition-colors duration-300">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold text-gray-800 dark:text-white text-center mb-10">Sports Categories</h1>

        {Object.keys(sportsData).map((category) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4 capitalize">{category}</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {sportsData[category].map((item) => (
                <div key={item.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 transition-all duration-300">
                  <img src={item.image} alt={item.title} className="w-full h-72 object-cover rounded-md mb-4" />
                  <h3 className="text-xl font-semibold text-gray-800 dark:text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 mb-4">{item.description}</p>
                  <p className="text-lg font-semibold text-gray-700 dark:text-gray-200 mb-4">${item.price}</p>

                  <div className="flex items-center gap-4 mb-4">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                      className="bg-gray-300 dark:bg-gray-600 text-white p-2 rounded-full"
                      disabled={getQuantity(item.id) <= 0}
                    >
                      -
                    </button>
                    <span className="text-lg">{getQuantity(item.id)}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                      className="bg-gray-300 dark:bg-gray-600 text-white p-2 rounded-full"
                    >
                      +
                    </button>
                  </div>

                  <button
                    onClick={() => handleAddToCart(item)}
                    className="bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}

        <div className="text-center mt-12">
          <button
            onClick={() => navigate("/cart")}
            className="bg-green-500 hover:bg-green-600 text-white p-2 rounded-lg w-full transition duration-300"
          >
            Go to Cart Page
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sports;
