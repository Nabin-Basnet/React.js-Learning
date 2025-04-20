import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <div className="text-2xl font-bold">
          <a href="/">E-Shop</a>
        </div>
        <div className="space-x-4">
          <a href="/" className="hover:text-gray-400 transition">Home</a>
          <a href="/products" className="hover:text-gray-400 transition">Products</a>
          <a href="/about" className="hover:text-gray-400 transition">About</a>
          <a href="/contact" className="hover:text-gray-400 transition">Contact</a>
        </div>
        <div>
          <a href="/cart" className="hover:text-gray-400 transition">🛒 Cart</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;