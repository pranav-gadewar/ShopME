import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext";

// Images
import ta from '../Images/WomensWear/tshirts/Sports Performance T-Shirt.jpg';
import tb from '../Images/WomensWear/tshirts/Running Tech T-Shirt.jpg';
import tc from '../Images/WomensWear/tshirts/Training Compression Tee.jpg';
import td from '../Images/WomensWear/tshirts/Sports Mesh T-Shirt.jpg';

import joa from '../Images/WomensWear/joggers/Fitness Joggers.jpg';
import job from '../Images/WomensWear/joggers/Running Joggers.jpg';
import joc from '../Images/WomensWear/joggers/Performance Joggers.jpg';
import jod from '../Images/WomensWear/joggers/Sports Cargo Joggers.jpg';

import sa from '../Images/WomensWear/shoes/Running Shoes.jpg';
import sb from '../Images/WomensWear/shoes/Sports Sneakers.jpg';
import sc from '../Images/WomensWear/shoes/High-Performance Running Shoes.jpg';
import sd from '../Images/WomensWear/shoes/Gym Sneakers.jpg';

import ja from '../Images/WomensWear/jackets/Lightweight Sports Jacket.jpg';
import jb from '../Images/WomensWear/jackets/Track Jacket.jpg';
import jc from '../Images/WomensWear/jackets/Windbreaker Jacket.jpg';
import jd from '../Images/WomensWear/jackets/Insulated Training Jacket.jpg';

// Product Data
const products = {
  tshirts: [
    { id: 1, name: "Sports Performance T-Shirt", description: "Moisture-wicking fabric to keep you dry during intense workouts.", price: 29.00, sizes: ["S", "M", "L", "XL"], image: ta },
    { id: 2, name: "Running Tech T-Shirt", description: "Breathable fabric for ultimate comfort during running.", price: 32.00, sizes: ["M", "L", "XL"], image: tb },
    { id: 3, name: "Training Compression Tee", description: "Compression fit to enhance muscle support and endurance.", price: 35.00, sizes: ["S", "M", "L"], image: tc },
    { id: 4, name: "Sports Mesh T-Shirt", description: "Lightweight mesh material for optimal ventilation.", price: 28.00, sizes: ["S", "M", "L"], image: td },
  ],
  joggers: [
    { id: 5, name: "Fitness Joggers", description: "Comfortable joggers with a sporty design for your workouts.", price: 40.00, sizes: ["S", "M", "L", "XL"], image: joa },
    { id: 6, name: "Running Joggers", description: "Designed for running with breathable fabric and a tapered fit.", price: 45.00, sizes: ["M", "L", "XL"], image: job },
    { id: 7, name: "Performance Joggers", description: "Perfect for high-intensity training and active wear.", price: 38.00, sizes: ["S", "M", "L"], image: joc },
    { id: 8, name: "Sports Cargo Joggers", description: "Utility joggers with extra pockets for convenience.", price: 42.00, sizes: ["M", "L", "XL"], image: jod },
  ],
  shoes: [
    { id: 9, name: "Running Shoes", description: "Lightweight shoes with advanced cushioning for running.", price: 60.00, sizes: ["6", "7", "8", "9"], image: sa },
    { id: 10, name: "Sports Sneakers", description: "Durable and stylish sneakers for both training and casual wear.", price: 55.00, sizes: ["6", "7", "8", "9"], image: sb },
    { id: 11, name: "High-Performance Running Shoes", description: "Shoes designed for elite runners with maximum support.", price: 70.00, sizes: ["7", "8", "9", "10"], image: sc },
    { id: 12, name: "Gym Sneakers", description: "Perfect sneakers for gym workouts, offering stability and comfort.", price: 50.00, sizes: ["6", "7", "8", "9", "10"], image: sd },
  ],
  jackets: [
    { id: 13, name: "Lightweight Sports Jacket", description: "Perfect for outdoor sports with weather-resistant material.", price: 85.00, sizes: ["M", "L", "XL"], image: ja },
    { id: 14, name: "Track Jacket", description: "Comfortable jacket with zippered pockets, ideal for running.", price: 75.00, sizes: ["S", "M", "L"], image: jb },
    { id: 15, name: "Windbreaker Jacket", description: "Lightweight and breathable windbreaker for all-day comfort.", price: 60.00, sizes: ["M", "L", "XL"], image: jc },
    { id: 16, name: "Insulated Training Jacket", description: "Warm jacket with insulated fabric for cold-weather training.", price: 100.00, sizes: ["L", "XL", "XXL"], image: jd },
  ],
};

// Product Card Component
const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(0);

  const handleAdd = () => {
    if (quantity > 0) {
      onAddToCart(product, quantity);
      setQuantity(0); // reset quantity after adding to cart
    }
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-4 text-gray-900 dark:text-white">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-3">{product.name}</h3>
      <p className="text-lg font-bold">${product.price.toFixed(2)}</p>

      <div className="flex items-center gap-4 mt-3">
        <button onClick={() => setQuantity(q => Math.max(0, q - 1))} className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded-full">-</button>
        <span>{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-300 dark:bg-gray-600 px-3 py-1 rounded-full">+</button>
      </div>

      <button onClick={handleAdd} className="mt-4 w-full bg-blue-500 hover:bg-blue-600 text-white py-2 rounded-lg">
        Add to Cart
      </button>
    </div>
  );
};

const WomensWear = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product, quantity) => {
    const item = {
      id: product.id,
      name: product.name,
      price: product.price,
      quantity,
      image: product.image,
    };
    addToCart(item);
  };

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Women's Wear</h1>

      {Object.entries(products).map(([category, items]) => (
        <div key={category} className="mb-12">
          <h2 className="text-2xl font-semibold mb-4 capitalize">{category}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {items.map(product => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      ))}

      <button onClick={() => navigate("/Cart")} className="bg-green-500 hover:bg-green-600 text-white py-2 mt-8 w-full rounded-lg">
        View Cart
      </button>
    </div>
  );
};

export default WomensWear;
