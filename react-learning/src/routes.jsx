import { Routes } from "react-router"
import { Route } from "react-router"
// import SingleProduct from "./product/SingleProductPage"
// import homePage from "./pages/homePage"
import Loginpage from "./pages/loginpage"
import LearnUseEffect from "./pages/learUseEffect"
// import UserLayout, { Footer, NavBar} from "./product/index"
// import Hero from "./section/herosection"
import SingleProductPage, { OverviewPage, ReviewPage } from "./product/SingleProductPage"
import AddToCart from "./pages/AddToCart"
// import HomePage from "./pages/homePage"
export default function AppRouter() {
    return (
        <Routes>
            <Route path="" element={<Loginpage />} />
            <Route path="products">
                <Route element={<LearnUseEffect />} index />
                <Route path=":id" element={<SingleProductPage />}>
                    <Route path="review" element={<ReviewPage />} />
                    <Route index element={<OverviewPage />} />
                </Route>
            </Route>
            <Route path="cart" element={<AddToCart/>}/>
            <Route path="*" element={<div>404</div>} />



        </Routes>
    )

}