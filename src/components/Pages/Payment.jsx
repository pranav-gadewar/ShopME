import React, { useState } from "react";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  // User Info
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");

  // Payment Info
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvv, setCvv] = useState("");

  const totalAmount = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  ).toFixed(2);

  const handlePayment = (e) => {
    e.preventDefault();

    // Simulate payment success
    alert(`Payment Successful! Thank you for your purchase, ${name}.`);
    navigate("/"); // Redirect to homepage or confirmation
  };

  return (
    <div className="container mx-auto px-4 py-10 dark:bg-gray-900 dark:text-white">
      <h1 className="text-3xl font-bold text-center mb-8">Payment</h1>

      {cart.length === 0 ? (
        <p className="text-center text-xl">Your cart is empty. Add items to proceed with payment.</p>
      ) : (
        <form
          onSubmit={handlePayment}
          className="max-w-xl mx-auto bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md space-y-6"
        >
          {/* User Details Section */}
          <div>
            <label className="block mb-2 font-semibold">Full Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="John Doe"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Email Address</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="example@example.com"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Phone Number</label>
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="1234567890"
            />
          </div>

          <div>
            <label className="block mb-2 font-semibold">Delivery Address</label>
            <textarea
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              required
              rows="3"
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="Street, City, State, ZIP"
            />
          </div>

          {/* Payment Details Section */}
          <div>
            <label className="block mb-2 font-semibold">Card Number</label>
            <input
              type="text"
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
              required
              className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              placeholder="1234 5678 9012 3456"
            />
          </div>

          <div className="flex gap-4">
            <div className="w-1/2">
              <label className="block mb-2 font-semibold">Expiry Date</label>
              <input
                type="text"
                value={expiry}
                onChange={(e) => setExpiry(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="MM/YY"
              />
            </div>

            <div className="w-1/2">
              <label className="block mb-2 font-semibold">CVV</label>
              <input
                type="password"
                value={cvv}
                onChange={(e) => setCvv(e.target.value)}
                required
                className="w-full px-4 py-2 border rounded-lg bg-gray-100 dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                placeholder="123"
              />
            </div>
          </div>

          <div className="text-lg font-bold text-right">
            Total: ${totalAmount}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white py-3 rounded-lg font-semibold transition duration-300"
          >
            Pay ${totalAmount}
          </button>
        </form>
      )}
    </div>
  );
};

export default Payment;
