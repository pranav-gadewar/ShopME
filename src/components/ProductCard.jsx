import React, { useState } from "react";
import { useCart } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const [quantity, setQuantity] = useState(0);
  const { addToCart } = useCart(); // Access the addToCart function from context

  const handleAddToCart = () => {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  };

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
        onClick={handleAddToCart}
        className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 mt-4 w-full rounded-lg transition duration-300"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
