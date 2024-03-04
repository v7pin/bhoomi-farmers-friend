// Cart.jsx

import React from 'react';

const Cart = ({ cartProducts, onClose }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white p-4 rounded-md shadow-md">
        <h2 className="text-2xl font-bold mb-4">Shopping Cart</h2>
        {cartProducts.length === 0 ? (
          <p>Your cart is empty.</p>
        ) : (
          <ul>
            {cartProducts.map((product) => (
              <li key={product.id} className="flex items-center justify-between mb-2">
                <span>{product.name}</span>
                <span>₹{product.price}</span>
              </li>
            ))}
          </ul>
        )}
        <button
          className="bg-red-500 text-white py-2 px-4 rounded-md hover:bg-red-600 mt-4"
          onClick={onClose}
        >
          Close Cart
        </button>
      </div>
    </div>
  );
};

export default Cart;
