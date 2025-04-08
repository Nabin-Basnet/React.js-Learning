import {Routes} from "react-router"
import { Route } from "react-router"
import HomePage from "./pages/homePage"
export default function AppRouter(){
    return(
        <Routes>
            <Route path="/" element={HomePage}/>
            <Route path="contact" element={<div>contact page</div>}/>
            <Route path="product">
                <Route path="contact" element={<div>Product page</div>}/>
                <Route path=":id" element={<div>Product Detail page</div>}/>
            </Route>



        </Routes>
    )

}