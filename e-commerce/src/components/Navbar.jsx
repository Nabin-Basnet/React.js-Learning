import React from "react";
import { ShoppingCart } from "lucide-react";
import { Link } from "react-router-dom";
import logo from '../assets/media/logo.png';

export default function Navbar() {
  return (
    <nav className="bg-gray-800">
      <div className="mx-auto max-w-[1440px] px-4">

        <div className="flex h-16 items-center justify-between">
          
          {/* Logo on the far left */}
          <div className="flex items-center">
            <img
              className="h-8 w-auto"
              src={logo}
              alt="Your Company"
            />
          </div>

          {/* Navigation links */}
          <div className="flex space-x-6">
            <Link
              to="/"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Home
            </Link>
            <Link
              to="/products"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Products
            </Link>
            <Link
              to="/contact"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              Contact
            </Link>
            <Link
              to="/about"
              className="rounded-md px-3 py-2 text-sm font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            >
              About
            </Link>
          </div>

          {/* Cart and Login on the far right */}
          <div className="flex items-center space-x-4">
            <Link
              to="/cart"
              className="rounded-full p-1 text-gray-400 hover:text-white"
            >
              <span className="sr-only">View cart</span>
              <ShoppingCart className="h-6 w-6" />
            </Link>
            <button
            
              type="button"
              className="rounded-md bg-blue-600 px-3 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <Link to='/loginw'>Login</Link>
              
            </button>
          </div>
          
        </div>
      </div>
    </nav>
  );
}
