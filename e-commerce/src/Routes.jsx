import { createBrowserRouter } from "react-router";
import Userlayout from "./layout/Userlayout";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./auth/Login";
import Products from "./pages/Products";
import Singleproduct from "./pages/Singleproduct";
import Home from "./pages/home";

const router= createBrowserRouter([
    {
        path:"/",
        element:<Userlayout/>,
        children:[
            {
                path:"/products",
                children:[
                    {
                        index:true,
                        element:<Products/>
                    },
                    {
                        path:":id",
                        element:<Singleproduct/>
                    }
                ]
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/cart",
                element:<Cart/>
            },
            {
                path:"/",
                element:<Home/>
            },
            {
                path:"/login",
                element:<Login/>
            }
        ]
    }



])

export default router