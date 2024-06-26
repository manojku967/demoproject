import React from "react";
import Logo from "./Logo";
import Home from "./Home";
import About from "./About";
import Services from "./Services";
import Product from "./Product";
import Login from "./Login";
import { NavLink, Outlet } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <div className="flex items-center justify-around list-none bg-slate-600 text-white ">
        <Logo />

        <NavLink to="/Home">Home</NavLink>
        <NavLink to="/About">About</NavLink>
        <NavLink to="/Services">Services</NavLink>
        <NavLink to="/Product">Product</NavLink>
        <button className="h-12 w-20 bg-white text-black rounded-full">
          <NavLink to="/Login">Login</NavLink>
        </button>
      </div>
      <Outlet/>

    </>
  );
};

export default Navbar;
