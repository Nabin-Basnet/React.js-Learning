import React from 'react';
import { ShoppingBag } from 'lucide-react';
import { Link } from 'react-router'; 

const HeroSection = () => {
  return (
    <div>
      <section className="bg-gradient-to-r from-blue-100 to-blue-200 py-16">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Left Content */}
          <div className="max-w-xl mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight">
              Discover the Latest Trends in Fashion & Lifestyle
            </h1>
            <p className="mt-4 text-lg text-gray-600">
              Upgrade your style with ShopEase. Explore our collection of top-quality products tailored just for you.
            </p>
            <Link
              to="/shop"
              className="mt-6 inline-flex items-center px-6 py-3 bg-blue-600 text-white text-lg font-medium rounded-md hover:bg-blue-700 transition"
            >
              <ShoppingBag className="w-5 h-5 mr-2" />
              Shop Now
            </Link>
          </div>

          {/* Right Image */}
          <div className="w-full md:w-1/2">
            <img
              src="https://source.unsplash.com/600x400/?shopping,fashion"
              alt="Hero"
              className="rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;
