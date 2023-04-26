import React, { useState, useEffect } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const [scroll, setScroll] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 0);
    });
  }, []);

  return (
    <div className="relative">
      <div className="md:bg-transparent fixed top-0 left-0 w-full z-[999]">
        <div
          className={`${
            scroll && window.innerWidth > 768
              ? "md:rounded-3xl backdrop-filter backdrop-blur-xl"
              : "bg-black"
          } flex items-center justify-between max-w-[1024px] mx-auto p-4 py-2 text-white transition-all ease-in-out duration-300`}
        >
          <h1 className="text-dark-300 text-3xl uppercase fw-bold">depot</h1>
          <ul className="hidden md:flex">
            <NavLink to="/" className="p-4 cursor-pointer">
              Home
            </NavLink>
            <NavLink to="watch" className="p-4 cursor-pointer">
              Watch
            </NavLink>
            <NavLink to="gallery" className="p-4 cursor-pointer">
              Gallery
            </NavLink>
            <NavLink to="dashboard" className="p-4 cursor-pointer">
              Dashboard
            </NavLink>
            <NavLink to="contact" className="p-4 cursor-pointer">
              Contact Us
            </NavLink>
          </ul>
          <NavLink
            to="login"
            className="hidden md:block px-4 py-1 border-dotted border-2 rounded-xl cursor-pointer hover:border-solid"
          >
            Login
          </NavLink>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
          <div
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 uppercase p-4 md:hidden z-[999]"
                : "ease-in-out duration-500 fixed left-[-100%] z-[999]"
            }
          >
            <h1 className="text-blue-300 text-3xl uppercase fw-bold p-4">depot</h1>
            <ul>
              <li className="py-4 px-5 cursor-pointer border-b border-slate-800">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="py-4 px-5 cursor-pointer border-b border-slate-800">
                <NavLink to="watch">Watch</NavLink>
              </li>
              <li className="py-4 px-5 cursor-pointer border-b border-slate-800">
                <NavLink to="gallery">Gallery</NavLink>
              </li>
              <li className="py-4 px-5 cursor-pointer border-b border-slate-800">
                <NavLink to="dashboard">Dashboard</NavLink>
              </li>
              <li className="py-4 px-5 cursor-pointer border-b border-slate-800">
                <NavLink to="login">Login</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
