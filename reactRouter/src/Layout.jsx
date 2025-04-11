import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

// outlet uses the layout as a base such that the Header and Footer is fixed and the component in the outlet changes  

export default function Layout(){

   // header and footer would stay in place and the inner comonent would change

    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}