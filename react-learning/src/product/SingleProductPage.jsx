import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router"; // Make sure you're using react-router-dom

export default function SingleProductPage() {
  const location = useLocation();
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState(null);

  const getData = async () => {
    setIsError(false);
    setIsLoading(true);
    try {
      const res = await fetch(`https://fakestoreapi.com/products/${id}`);
      const data = await res.json();
      if (data) setProduct(data);
    } catch (err) {
      console.error(err);
      setIsError(true);
      setError("Something went wrong while fetching data.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getData();
  }, [id]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white flex items-center justify-center px-4 py-12">
      <div className="w-full max-w-4xl">
        <Link
          to="/products"
          className="inline-block mb-6 text-indigo-400 hover:text-indigo-300 transition font-medium"
        >
          ← Back to Products
        </Link>

        <div className="bg-gray-800/60 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-gray-700">
          <h1 className="text-4xl font-bold mb-10 text-center text-white tracking-tight">
            Product Details
          </h1>

          {isLoading ? (
            <div className="flex justify-center">
              <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white" />
            </div>
          ) : isError ? (
            <div className="text-center text-red-400 text-lg">{error}</div>
          ) : (
            product && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-80 object-contain bg-gray-700 rounded-xl p-6 transition-transform duration-300 hover:scale-105 shadow-lg"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = "https://via.placeholder.com/300";
                  }}
                />

                <div className="flex flex-col justify-between">
                  <div>
                    <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-white">
                      {product.title}
                    </h2>
                    <p className="text-gray-300 mb-6 text-sm leading-relaxed">
                      {product.description}
                    </p>
                  </div>

                  <div className="mt-auto">
                    <p className="text-2xl font-bold text-emerald-400 mb-4">
                      ${product.price}
                    </p>
                    <button className="bg-indigo-500 hover:bg-indigo-600 text-white font-medium py-2 px-6 rounded-xl shadow-md transition duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
