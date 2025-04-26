import React from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom"; // ✅ Import useNavigate

const Cart = () => {
  const { cart, removeFromCart } = useCart();
  const navigate = useNavigate(); // ✅ Initialize navigate

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Your Cart</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty.</p>
      ) : (
        <div className="space-y-8">
          {cart.map((product) => (
            <div key={product.id} className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-lg">
              <div className="flex items-center gap-4">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-20 h-20 object-cover rounded-md"
                />
                <div>
                  <h3 className="text-xl font-semibold">{product.name}</h3>
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                  <p className="text-gray-600">Quantity: {product.quantity}</p>
                </div>
                <button
                  onClick={() => handleRemoveFromCart(product.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      {cart.length > 0 && (
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold">
            Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2)}
          </p>
          <button
            onClick={() => navigate("/payment")} // ✅ Use lowercase route
            className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-6 rounded-lg"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
