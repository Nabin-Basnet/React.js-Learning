import {Routes} from "react-router"
import { Route } from "react-router"
// import SingleProduct from "./product/SingleProductPage"
// import homePage from "./pages/homePage"
import Loginpage from "./pages/loginpage"
import LearnUseEffect from "./pages/learUseEffect"
import UserLayout, { Footer, NavBar} from "./product/index"
import Hero from "./section/herosection"
import SingleProductPage from "./product/SingleProductPage"
// import HomePage from "./pages/homePage"
export default function AppRouter(){
    return(
        <Routes>
            <Route path="login" element={<Loginpage/>}/>
            <Route path="/" element={
                <div>
                    <NavBar/>
                    <UserLayout/>
                    <Footer/>
                </div>
            }/>
            <Route path="contact" element={<LearnUseEffect/>}/>
            <Route path="product">
                <Route path="hero" element={<Hero/>}/>
                <Route path="product" >
                    <Route path=":id" element={<SingleProductPage/>}/>
                </Route>
            </Route>
            <Route path="*" element={<div>404</div>}/>



        </Routes>
    )

}