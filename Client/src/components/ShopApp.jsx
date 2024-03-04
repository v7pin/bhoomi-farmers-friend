import React, { useState } from 'react';
import { useSpring, animated } from 'react-spring';

import Cart from './cart';

const categories = [
  { id: 1, name: 'Moisture Sensors' },
  { id: 2, name: 'Nutrient Sensors' },
  { id: 3, name: 'Temperature Sensors' },
];

const products = [
    {
        id: 1,
        name: 'Moisture Sensor 1',
        price: 29.99,
        originalPrice: 39.99,
        sensorType: 'Basic Moisture Sensor',
        image: 'https://via.placeholder.com/200', // Replace with the actual image URL
        category: 'Moisture Sensors',
      },
      {
        id: 2,
        name: 'Nutrient Sensor 1',
        price: 19.99,
        originalPrice: 24.99,
        sensorType: 'Nutrient Detection Probe',
        image: 'https://via.placeholder.com/200', // Replace with the actual image URL
        category: 'Nutrient Sensors',
      },
];

const ShopApp = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [searchText, setSearchText] = useState('');
  const [cartProducts, setCartProducts] = useState([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handleSearchChange = (text) => {
    setSearchText(text.toLowerCase());
  };

  const handleAddToCart = (product) => {
    setCartProducts((prevCart) => [...prevCart, product]);
  };

  const handleOpenCart = () => {
    setIsCartOpen(true);
  };

  const handleCloseCart = () => {
    setIsCartOpen(false);
  };

  const fadeIn = useSpring({
    opacity: 1,
    from: { opacity: 0 },
    config: { tension: 300, friction: 10 },
  });

  const popIn = useSpring({
    transform: 'scale(1)',
    from: { transform: 'scale(0.8)' },
    config: { tension: 300, friction: 20 },
  });

  const zoomIn = useSpring({
    transform: 'scale(1.2)',
    config: { tension: 300, friction: 10 },
  });

  return (
    <animated.div style={fadeIn} className="bg-gray-100 min-h-screen p-4">
      <header className="bg-white py-4 px-6 shadow-md flex justify-between items-center mb-4">
        <animated.h1 style={zoomIn} className="text-xl font-bold text-green-500">
          Bhoomi
        </animated.h1>
       
        <div className="flex items-center">
          <button className="bg-green-500 text-white py-2 px-4 rounded-md mr-4" onClick={handleOpenCart}>
            View Cart
          </button>
          <input
            className="border border-gray-300 rounded-md px-2 py-1 pl-8 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 w-full md:w-auto"
            placeholder="Search for sensors..."
            value={searchText}
            onChange={(e) => handleSearchChange(e.target.value)}
          />
        </div>
      </header>
      <main className="container mx-auto px-4 pb-8">
        <div className="flex flex-wrap mb-4">
          {categories.map((category) => (
            <button
              key={category.id}
              className={`px-3 py-2 rounded-md hover:bg-gray-200 ${
                selectedCategory === category.id ? 'bg-green-500 text-white' : 'text-gray-700'
              }`}
              onClick={() => handleCategoryChange(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>
        <div className="h-64 relative overflow-hidden mb-8">
          <img
            className="w-full h-full object-cover absolute top-0 left-0 z-10"
            src="https://via.placeholder.com/1440x400"
            alt="Banner Image"
          />
          <div className="absolute top-0 right-0 z-20 flex items-center py-4 px-6 space-x-4">
            <h2 className="text-3xl font-bold text-white">New Arrivals</h2>
            <button className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">Shop Now</button>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {products
            .filter(
              (product) =>
                (!selectedCategory || product.category === selectedCategory) &&
                (product.name.toLowerCase().includes(searchText) ||
                  product.sensorType.toLowerCase().includes(searchText))
            )
            .map((product) => (
              <animated.div key={product.id} style={popIn} className="bg-white rounded-lg shadow-md overflow-hidden p-4">
                <img className="w-full h-48 object-cover mb-4" src={product.image} alt={product.name} />
                <div>
                  <h3 className="text-lg font-medium mb-2">{product.name}</h3>
                  <p className="text-gray-600 mb-2">₹{product.price}</p>
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="inline-block bg-gray-200 rounded-full px-2 py-1 text-xs text-gray-700">
                      {product.sensorType}
                    </span>
                    <span className="text-green-500 text-sm font-medium">₹{product.originalPrice}</span>
                    <span className="text-red-500 text-xs">
                      -{(100 - (product.price / product.originalPrice) * 100).toFixed(0)}%
                    </span>
                  </div>
                  <button
                    className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600"
                    onClick={() => {
                      handleAddToCart(product);
                      handleOpenCart();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </animated.div>
            ))}
        </div>
      </main>
      {isCartOpen && <Cart cartProducts={cartProducts} onClose={handleCloseCart} />}
      <footer className="bg-gray-200 py-4 text-center">
        <p className="text-gray-600">Copyright &copy; {new Date().getFullYear()} Soil Sensor Shop</p>
      </footer>
    </animated.div>
  );
};

export default ShopApp;
