"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, Heart, Star, ChevronRight } from "lucide-react";
import heroimg from "../assets/media/heroimg.jpg";
import sales from "../assets/media/sales.jpg";
import t2 from "../assets/media/t2.jpg";
import t1 from "../assets/media/t1.jpg";
import t3 from "../assets/media/t3.jpg";

export default function Home() {
  const [featuredProducts, setProducts] = useState([]);
  const [email, setEmail] = useState("");

  const getData = async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    console.log("Fetched Data:", data);
    if (data) {
      setProducts(data.slice(0, 4)); // only first 4 products
    }
  };

  useEffect(() => {
    getData();
  }, []);

  const categories = [
    {
      name: "Electronics",
      count: 124,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Clothing",
      count: 86,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Home & Kitchen",
      count: 97,
      image: "/placeholder.svg?height=200&width=200",
    },
    {
      name: "Beauty",
      count: 65,
      image: "/placeholder.svg?height=200&width=200",
    },
  ];

  const testimonials = [
    {
      id: 1,
      name: "Sarah Johnson",
      text: "The products are amazing! Fast shipping and excellent customer service.",
      rating: 5,
      image: t1,
    },
    {
      id: 2,
      name: "Michael Chen",
      text: "Great quality products at reasonable prices. Will definitely shop here again!",
      rating: 5,
      image: t2,
    },
    {
      id: 3,
      name: "Emma Williams",
      text: "Love the variety of products available. Never disappointed with my purchases.",
      rating: 4,
      image: t3,
    },
  ];

  const handleEmailSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing with: ${email}`);
    setEmail("");
  };

  return (
    <main className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-purple-600 to-indigo-700 text-white py-20">
        <div className="container mx-auto px-4 md:px-8 flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Summer Collection 2025
            </h1>
            <p className="text-lg md:text-xl mb-8 opacity-90">
              Discover the latest trends and exclusive deals on our premium
              products.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-indigo-700 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition duration-300">
                Shop Now
              </button>
              <button className="bg-transparent border-2 border-white px-6 py-3 rounded-md font-medium hover:bg-white hover:bg-opacity-10 transition duration-300">
                View Catalog
              </button>
            </div>
          </div>
          <div className="md:w-1/2 relative">
            <div className="bg-white p-2 rounded-lg shadow-xl">
              <img
                src={heroimg}
                alt="Featured product"
                className="rounded-md w-full h-auto"
              />
            </div>
            <div className="absolute -bottom-5 -left-5 bg-yellow-500 text-black font-bold py-2 px-4 rounded-md shadow-lg">
              Up to 50% OFF
            </div>
          </div>
        </div>
      </section>

   

      {/* Featured Products */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              Featured Products
            </h2>
            <a
              href="#"
              className="text-indigo-600 hover:text-indigo-800 flex items-center font-medium"
            >
              View All Products <ChevronRight className="h-4 w-4 ml-1" />
            </a>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <div
                key={product.id}
                className="border rounded-xl p-4 shadow-md hover:shadow-lg transition duration-300"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="h-40 object-contain mx-auto mb-4"
                />
                <h2 className="font-semibold text-lg line-clamp-2">
                  {product.title}
                </h2>
                <p className="text-gray-500">${product.price}</p>
                <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white py-1 px-3 rounded-md">
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offer */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="bg-gradient-to-r from-pink-500 to-orange-500 rounded-xl overflow-hidden">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 p-8 md:p-12 text-white">
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Special Offer
              </h2>
              <p className="text-lg mb-6 opacity-90">
                Get 30% off on all electronics this week only. Use code SUMMER30
                at checkout.
              </p>
              <button className="bg-white text-pink-600 px-6 py-3 rounded-md font-medium hover:bg-opacity-90 transition duration-300">
                Shop Now
              </button>
            </div>
            <div className="md:w-1/2">
              <img
                src={sales}
                alt="Special offer"
                className="w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8 text-center">
            What Our Customers Say
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-800">{testimonial.name}</h3>
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4" fill={i < testimonial.rating ? "currentColor" : "none"} />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-gray-600 italic">"{testimonial.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 container mx-auto px-4 md:px-8">
        <div className="bg-indigo-700 rounded-xl p-8 md:p-12 text-center text-white">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Subscribe to Our Newsletter
          </h2>
          <p className="text-lg mb-6 opacity-90 max-w-2xl mx-auto">
            Stay updated with our latest products and exclusive offers. Subscribe
            to our newsletter.
          </p>
          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto flex">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Enter your email"
              className="flex-1 p-3 rounded-l-md text-gray-800"
            />
            <button
              type="submit"
              className="bg-white text-indigo-700 px-5 py-3 rounded-r-md font-medium hover:bg-opacity-90 transition duration-300"
            >
              Subscribe
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
