import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(true);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="relative">
      <div className="absolute top-0 left-0 w-full">
        <div className="flex items-center justify-between max-w-[1024px] mx-auto p-4 text-white">
          <h1 className="text-dark-300 text-3xl uppercase fw-bold">depot</h1>
          <ul className="hidden md:flex">
            <li className="p-4 cursor-pointer">Home</li>
            <li className="p-4 cursor-pointer">Watch</li>
            <li className="p-4 cursor-pointer">Gallery</li>
            <li className="p-4 cursor-pointer">Dashboard</li>
            <li className="p-4 cursor-pointer">Contact Us</li>
          </ul>
          <div className="hidden md:block px-4 py-1 border-dotted border-2 rounded-xl cursor-pointer hover:border-solid">
            Login
          </div>
          <div onClick={handleNav} className="block md:hidden">
            {nav ? <AiOutlineMenu size={25} /> : <AiOutlineClose size={25} />}
          </div>
          <ul
            className={
              !nav
                ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 uppercase p-4 md:hidden z-50"
                : "ease-in-out duration-500 fixed left-[-100%] z-50"
            }
          >
            <h1 className="text-blue-300 text-3xl uppercase fw-bold p-4">depot</h1>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800">Home</li>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800">Watch</li>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800">Gallery</li>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800">Dashboard</li>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800">Contact Us</li>
            <li className="py-4 px-5 cursor-pointer border-b border-slate-800 text-slate-400">
              Login
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
