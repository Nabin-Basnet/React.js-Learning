import React from 'react'
import {  Outlet } from 'react-router'
import Navbar from '../components/ui/Navbar'
// import Footer from '../Components/Footer'

export default function NavigationLayout(){
    return(
        <div>
            <Navbar/>
            <Outlet/>

        </div>
    )
}
