import React from "react";
import { FABars, FaTimes } from "react-icons/fa";
import Logo from "../assets/logo1.png";

const Navbar = () => {
  return (
    <>
      <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300">
        <div>
          <img src={Logo} alt="" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
