import { useEffect, useState } from "react";
import { Link } from "react-router";


export default function Products() {
    const [products, setProducts] = useState([]);

    const getData = async () => {
        const res = await fetch("https://fakestoreapi.com/products");
        const data = await res.json();
        console.log("Fetched Data:", data);
        if (data) {

            setProducts(data);
        }
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className="min-h-screen bg-gray-50 py-10 px-4">
                

                <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {products?.map((product) => (
                        <div
                            key={product.id}
                            className="bg-white p-4 rounded-xl shadow-md hover:shadow-xl transition duration-300 flex flex-col items-center text-center"
                        >
                            <Link to={`/products/${product.id}`} viewTransition>
                                <h2 className="text-base font-medium mb-2 line-clamp-2">
                                    {product.title}
                                </h2>
                                <img
                                    src={product.image}
                                    alt={product.title}
                                    style={{ viewTransitionName: `/products/${product.id}` }}
                                    className="w-full h-40 duration-300 transition-all object-contain mb-3 rounded-md"
                                />
                                <p className="text-sm text-gray-600 line-clamp-3 mb-4">
                                    {product.description}
                                </p>
                            </Link>
                            <button
                                type="submit"
                                className="bg-amber-600 text-white px-4 py-2 rounded-md hover:bg-amber-700 transition"
                            >
                                Add To Cart
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
