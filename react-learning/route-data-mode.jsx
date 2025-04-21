import { createBrowserRouter } from "react-router";
import SingleProductPage from "./src/product/SingleProductPage";
import AddToCart from "./src/pages/AddToCart";
import LoginPage from "./src/pages/loginpage";
import Products from "./src/pages/Products";
import NavigationLayout from "./src/Layout/Navigation";
import HeroSection from "./src/pages/home";
import Contact from "./src/pages/Contact";

const router = createBrowserRouter([
    {
      path: "/",
      element: <NavigationLayout/>,
      children:[
        {
            path: "/products",
            children:[
                {
                    index: true,
                    element:<Products/>
                },
                {
                    path: ":id"
                    ,element: <SingleProductPage/>
                }
            ]
        },
        {
            path:"cart",
            element:<AddToCart/>
        },
        {
            path:"/",
            element:<HeroSection/>
        },
        {
            path:"login",
            element:<LoginPage/>
        },
        {
            path:"contact",
            element:<Contact />
        },

      ]
    }
    
  ]);

  export default router