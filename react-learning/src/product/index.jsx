import { Outlet } from "react-router";



export function NavBar(){
    console.log("nvbbar");
    return(
        <div>

            <h1>navbar</h1>
            {["/","/contact","/product"].map((path)=(
                <Link key={path} to={path} >
                    {path}
                </Link>
            ))}

        </div>
    )
}

export function Footer(){
    console.log("footer");
    return(
        <div>
            <h1>footer</h1>
        </div>
    )

}

export default function UserLayout(){
    return(
        <div>
            <NavBar/>
            <Outlet/>
            <Footer/>
        </div>
    )

}