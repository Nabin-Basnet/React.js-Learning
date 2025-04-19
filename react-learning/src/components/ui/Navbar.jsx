// import { useState } from "react";

// export default function Navbar({ cartCount = 0 }) {
//     const [isOpen, setIsOpen] = useState(false);

//     return (
//         <nav className="bg-white shadow-md sticky top-0 z-50">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//                 <div className="flex justify-between items-center h-16">
//                     {/* Logo */}
//                     <div className="flex-shrink-0 text-2xl font-bold text-indigo-600">
//                         🛒 MyShop
//                     </div>

//                     {/* Desktop Links */}
//                     <div className="hidden md:flex space-x-8 items-center">
//                         <ul className='' >
//                             {Links.map(({name,path})=>
                            
//                             )}
                            
//                         </ul>
//                         {/* <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition">Home</a>
//                         <a href="" className="text-gray-700 hover:text-indigo-600 font-medium transition">Shop</a>
//                         <a href="#" className="relative text-gray-700 hover:text-indigo-600 font-medium transition">
//                             Cart
//                             {cartCount > 0 && (
//                                 <span className="absolute -top-2 -right-3 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                                     {cartCount}
//                                 </span>
//                             )}
//                         </a>
//                         <a href="#" className="text-gray-700 hover:text-indigo-600 font-medium transition">Login</a> */}
//                     </div>

//                     {/* Mobile Menu Button */}
//                     <div className="md:hidden">
//                         <button
//                             onClick={() => setIsOpen(!isOpen)}
//                             className="text-gray-700 focus:outline-none"
//                         >
//                             {isOpen ? "✖" : "☰"}
//                         </button>
//                     </div>
//                 </div>
//             </div>

//             {/* Mobile Menu */}
//             {isOpen && (
//                 <div className="md:hidden bg-white border-t border-gray-200 px-4 py-4 space-y-2">
//                     <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">Home</a>
//                     <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">Shop</a>
//                     <a href="#" className="block relative text-gray-700 hover:text-indigo-600 font-medium transition">
//                         Cart
//                         {cartCount > 0 && (
//                             <span className="absolute top-0 left-16 bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
//                                 {cartCount}
//                             </span>
//                         )}
//                     </a>
//                     <a href="#" className="block text-gray-700 hover:text-indigo-600 font-medium transition">Login</a>
//                 </div>
//             )}
//         </nav>
//     );
// }
