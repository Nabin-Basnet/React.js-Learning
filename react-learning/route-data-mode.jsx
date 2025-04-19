import { createBrowserRouter } from "react-router";
import LearnUseEffect from "./src/pages/learUseEffect";
import SingleProductPage from "./src/product/SingleProductPage";
import AddToCart from "./src/pages/AddToCart";
import LoginPage from "./src/pages/loginpage";

const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Hello World</div>,
    },
    {
        path: "/products",
        children:[
            {
                index: true,
                element:<LearnUseEffect/>
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