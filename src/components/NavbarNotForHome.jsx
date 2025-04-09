import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Got-Your-Ride-Logo-05-1.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import image from "../assets/phone.png";

const NavbarNotForHome = () => {
  return (
    <div className="top-0 zee-index w-full text-white bg shadow-md">
      {/* top side of navbar */}
      <div className="px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] flex justify-between  py-3 items-center border-b  w-full  bg-[#f1582b] shadow-2xl">
        <div
          className="flex 
      gap-8 "
        >
          <div className="flex gap-2 items-center">
            <FaPhoneAlt />
            +44 745 392 3024
          </div>
          <NavLink className="flex gap-2 items-center">
            <FaEnvelope className="mt-[1px]" />
            <p className="mt-[-4px]">gotyourride@gmail.com</p>
          </NavLink>
        </div>
        <div className="flex text-white">
          <SocialIcons />
        </div>
      </div>
      {/* bottom side of navbar */}
      <div className="px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] transition-all duration-700 flex justify-between top-0  items-center w-full bg-white text-black">
        <NavLink to="/">
          <img className="ml-[-8px] w-20" src={logo} alt="" />
        </NavLink>
        <div className="flex gap-11 ">
          <NavLink to="/">
            <h1>HOME</h1>
          </NavLink>
          <NavLink to="/about">
            <h1>ABOUT</h1>
          </NavLink>
          <NavLink className="group relative">
            <h1 className="flex items-center">
              DESTINATIONS <IoCaretDownSharp size={20} />
            </h1>
            <div className="group-hover:block hidden absolute pt-2">
              <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
                <p className="cursor-pointer hover:text-black">ONE</p>
                <p className="cursor-pointer hover:text-black">TWO</p>
                <p className="cursor-pointer hover:text-black">THREE</p>
              </div>
            </div>
          </NavLink>
          <NavLink to="/contact">
            <h1>CONTACT</h1>
          </NavLink>
        </div>
        <div className=" mt-2 ">
          <div className="flex gap-2">
            <img src={image} alt="" />
            <p>+447453923024</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavbarNotForHome;
