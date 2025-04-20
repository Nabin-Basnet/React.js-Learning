import { createBrowserRouter } from "react-router";
import SingleProductPage from "./src/product/SingleProductPage";
import AddToCart from "./src/pages/AddToCart";
import LoginPage from "./src/pages/loginpage";
import Products from "./src/pages/Products";
import HomePage from "./src/pages/homePage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage/>,
    },
    {
        path: "/products",
        children:[
            {
                index: true,
                element:<Products/>
            }
            ,{
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
        path:"login",
        element:<LoginPage/>
    }
  ]);

  export default router