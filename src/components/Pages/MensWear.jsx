import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/CartContext"; // Make sure the path is correct

// Tshirts
import ta from '../Images/MensWear/Tshirt/Dry-Fit Performance Tee.jpg';
import tb from '../Images/MensWear/Tshirt/Compression Sports T-Shirt.jpg';
import tc from '../Images/MensWear/Tshirt/Breathable Mesh T-Shirt.jpg';
import td from '../Images/MensWear/Tshirt/Reflective Running T-Shirt.jpg';

// Joggers
import joa from '../Images/MensWear/Joggers/Slim Fit Joggers.jpg';
import job from '../Images/MensWear/Joggers/Relaxed Fit Joggers.jpg';
import joc from '../Images/MensWear/Joggers/Cuffed Hem Joggers.jpg';
import jod from '../Images/MensWear/Joggers/Cargo Joggers.jpg';

// Shoes
import sa from '../Images/MensWear/Shoes/Running Shoes.jpg';
import sb from '../Images/MensWear/Shoes/Casual Sneakers.jpg';
import sc from '../Images/MensWear/Shoes/High-Top Sneakers.jpg';
import sd from '../Images/MensWear/Shoes/Slip-On Shoes.jpg';

// Jackets
import ja from '../Images/MensWear/Jackets/Winter Jacket.jpg';
import jb from '../Images/MensWear/Jackets/Denim Jacket.jpg';
import jc from '../Images/MensWear/Jackets/Bomber Jacket.jpg';
import jd from '../Images/MensWear/Jackets/Hooded Puffer Jacket.jpg';

const products = {
  tshirts: [
    { id: 1, name: "Dry-Fit Performance Tee", description: "Moisture-wicking fabric keeps you dry during workouts.", price: 29.00, sizes: ["S", "M", "L", "XL"], image: ta },
    { id: 2, name: "Compression Sports T-Shirt", description: "Tight fit to support muscles and improve blood flow.", price: 35.00, sizes: ["M", "L", "XL"], image: tb },
    { id: 3, name: "Breathable Mesh T-Shirt", description: "Mesh panels for maximum airflow and cooling.", price: 27.00, sizes: ["S", "M", "L"], image: tc },
    { id: 4, name: "Reflective Running T-Shirt", description: "High visibility T-shirt for night running.", price: 32.00, sizes: ["M", "L", "XL"], image: td },
  ],
  joggers: [
    { id: 5, name: "Slim Fit Joggers", description: "Comfortable and stylish slim-fit joggers.", price: 40.00, sizes: ["S", "M", "L", "XL"], image: joa },
    { id: 6, name: "Relaxed Fit Joggers", description: "Casual joggers for everyday wear.", price: 35.00, sizes: ["M", "L", "XL"], image: job },
    { id: 7, name: "Cuffed Hem Joggers", description: "Sporty joggers with cuffed hems.", price: 38.00, sizes: ["S", "M", "L"], image: joc },
    { id: 8, name: "Cargo Joggers", description: "Joggers with extra pockets for utility.", price: 42.00, sizes: ["M", "L", "XL"], image: jod },
  ],
  shoes: [
    { id: 9, name: "Running Shoes", description: "Lightweight running shoes for all-day comfort.", price: 60.00, sizes: ["8", "9", "10", "11"], image: sa },
    { id: 10, name: "Casual Sneakers", description: "Stylish sneakers for everyday use.", price: 55.00, sizes: ["7", "8", "9", "10"], image: sb },
    { id: 11, name: "High-Top Sneakers", description: "Bold high-top shoes for street style.", price: 65.00, sizes: ["8", "9", "10", "11"], image: sc },
    { id: 12, name: "Slip-On Shoes", description: "Easy to wear slip-on canvas shoes.", price: 48.00, sizes: ["7", "8", "9", "10", "11"], image: sd },
  ],
  jackets: [
    { id: 13, name: "Winter Jacket", description: "Keep warm with this stylish winter jacket.", price: 120.00, sizes: ["M", "L", "XL"], image: ja },
    { id: 14, name: "Denim Jacket", description: "A timeless denim jacket for a casual look.", price: 80.00, sizes: ["S", "M", "L"], image: jb },
    { id: 15, name: "Bomber Jacket", description: "Classic bomber jacket with a modern twist.", price: 90.00, sizes: ["M", "L", "XL"], image: jc },
    { id: 16, name: "Hooded Puffer Jacket", description: "Insulated puffer jacket with a hood.", price: 110.00, sizes: ["L", "XL", "XXL"], image: jd },
  ],
};

const ProductCard = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = React.useState(0);

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-4 text-gray-900 dark:text-white transition-colors">
      <img src={product.image} alt={product.name} className="w-full h-80 object-cover rounded-lg" />
      <h3 className="text-xl font-semibold mt-4">{product.name}</h3>
      <p className="text-lg font-bold mt-2">${product.price.toFixed(2)}</p>

      <div className="mt-4 flex items-center gap-4">
        <button onClick={() => setQuantity(q => Math.max(q - 1, 0))} className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white p-2 rounded-full">-</button>
        <span className="text-lg">{quantity}</span>
        <button onClick={() => setQuantity(q => q + 1)} className="bg-gray-300 dark:bg-gray-600 text-black dark:text-white p-2 rounded-full">+</button>
      </div>

      <button
        onClick={() => quantity > 0 && onAddToCart(product, quantity)}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mt-4 w-full rounded-lg transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

const MensWear = () => {
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const handleAddToCart = (product, quantity) => {
    addToCart({ ...product, quantity });
  };

  const handleViewCart = () => {
    navigate("/Cart");
  };

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Men's Wear</h1>

      {["tshirts", "joggers", "shoes", "jackets"].map((section) => (
        <div className="mb-12" key={section}>
          <h2 className="text-2xl font-semibold mb-4 capitalize">{section}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products[section].map((product) => (
              <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
            ))}
          </div>
        </div>
      ))}

      <button
        onClick={handleViewCart}
        className="bg-green-500 hover:bg-green-600 text-white py-2 mt-4 w-full rounded-lg"
      >
        View Cart
      </button>
    </div>
  );
};

export default MensWear;
