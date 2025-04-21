// src/components/Header.jsx
import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router';
import { NavLink } from 'react-router';

const links=[
  {path:"/",name:"Home"},
  {path:"/products",name:"Product"},
  {path:"/about",name:"About"},
  {path:"/contact",name:"Contact"}
]

const Navbar = () => {
  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="text-2xl font-bold text-blue-600">ShopEase</div>

        {/* Navigation Links */}
        <nav className="space-x-6 hidden md:flex">
        <ul className="flex space-x-6">
              {links.map(({ name, path }) => (
                <li key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      isActive
                        ? "text-gray-600 hover:text-blue-600 transition"
                        : "text-gray-700 hover:text-indigo-600 transition"
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              ))}
            </ul>
      
        </nav>

        {/* Right Section: Cart + Auth Buttons */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link to="/cart" className="relative">
            <ShoppingCart className="w-6 h-6 text-gray-700 hover:text-blue-600" />
            <span className="absolute -top-2 -right-2 text-xs bg-red-500 text-white rounded-full px-1">
              3
            </span>
          </Link>

          {/* Login Button */}
          <Link to="/login" className="text-sm px-4 py-1.5 border border-blue-600 text-blue-600 rounded-md hover:bg-blue-600 hover:text-white transition">
            Login
          </Link>

          {/* Signup Button */}
          <Link to="/signup" className="text-sm px-4 py-1.5 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
            Signup
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
