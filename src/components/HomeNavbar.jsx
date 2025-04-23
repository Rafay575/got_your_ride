import React, { useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/Got-Your-Ride-Logo-05-1.png";
import { FaPhoneAlt, FaBars, FaTimes } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { IoCaretDownSharp } from "react-icons/io5";
import SocialIcons from "./SocialIcons";
import { Link } from "react-router-dom";
const HomeNavbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isSideMenuOpen, setIsSideMenuOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Optional: Close the dropdown if clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <div className="top-0 zee-index w-screen">
        {/* Top bar (visible on md and larger) */}
        <div
          className={`hidden md:flex px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] justify-between transition-all duration-700 py-3 items-center border-b w-full ${
            scrolled ? "bg-[#f1582b] text-white" : "bg-black/30 text-white"
          }`}
        >
          <div className="flex gap-8">
            <div className="flex gap-2 items-center">
              <FaPhoneAlt />
              <p className="text-xs font-normal">+44 745 392 3024</p>
            </div>
            <div className="flex gap-2 items-center">
              <FaEnvelope />
              <p className="text-xs font-normal">info@gotyourride.com</p>
            </div>
          </div>
          <SocialIcons />
        </div>

        {/* Bottom bar */}
        <div
          className={`px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] transition-all duration-700 flex justify-between items-center w-full ${
            scrolled
              ? "bg-white text-black shadow-md"
              : "bg-black/30 text-white shadow-2xl"
          }`}
        >
          {/* Logo */}
          <NavLink to="/">
            <img className="ml-[-8px] w-20" src={logo} alt="Logo" />
          </NavLink>

          {/* Navigation links on md+ OR burger icon on mobile */}
          <div className="flex items-center gap-5">
            <div className="hidden lg:flex gap-4">
              <NavLink
                to="/"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsSideMenuOpen(false)}
              >
                <h1>HOME</h1>
              </NavLink>
              <NavLink
                to="/about"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsSideMenuOpen(false)}
              >
                <h1>ABOUT</h1>
              </NavLink>
              <div className="relative group hover:bg-[#f1582b] hover:text-white rounded-sm px-3 py-1.5 inline-block">
                <button className="flex items-center  font-semibold ">
                  DESTINATIONS
                  <IoCaretDownSharp size={20} className="ml-1" />
                </button>
                <div className="absolute left-0 mt-2 w-60 bg-white rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none group-hover:pointer-events-auto z-10">
                  <div className="py-2">
                    <Link
                      to="/booking/1"
                      className="block px-4  py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Tokyo City Tour
                    </Link>
                    <Link
                      to="/booking/2"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Mt. Fuji 5th Station
                    </Link>
                    <Link
                      to="/booking/3"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Nagano Tour 
                    </Link>
                    <Link
                      to="/booking/4"
                      className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                    >
                      Nikko Tour
                    </Link>
                  </div>
                </div>
              </div>

              <NavLink
                to="/contact"
                className={
                  " hover:bg-[#f1582b] font-semibold hover:text-white rounded-sm px-3 py-1.5"
                }
                onClick={() => setIsSideMenuOpen(false)}
              >
                <h1>CONTACT</h1>
              </NavLink>
            </div>
            {/* Burger icon visible on mobile */}
            <div
              className={`lg:hidden   ${
                scrolled ? "text-black" : "text-white"
              }`}
            >
              <FaBars
                size={24}
                className="cursor-pointer "
                onClick={() => setIsSideMenuOpen(true)}
              />
            </div>
          </div>

          {/* Phone contact on right */}
          <div className="mt-2 hidden lg:flex ">
            <div className="flex gap-2 items-center">
              <a
                href="tel:+447453923024"
                className="flex items-center justify-center w-6 h-6 rounded-full bg-[#f1582b] text-white shadow-lg
                   hover:bg-[#e54925] transition-colors duration-300"
              >
                <FaPhoneAlt className="text-sm" />
              </a>

              <p>+447453923024</p>
            </div>
          </div>
        </div>
      </div>

      {/* Side menu overlay for mobile */}
      {isSideMenuOpen && (
        <div
          className="fixed inset-0  bg-black/90 "
          style={{ zIndex: 9999 }}
          onClick={() => setIsSideMenuOpen(false)}
        >
          <div
            className="absolute top-0 right-0 w-3/4 max-w-xs bg-white h-full p-5"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex justify-between items-center">
              <img className="w-20" src={logo} alt="Logo" />
              <FaTimes
                size={24}
                className="cursor-pointer text-black"
                onClick={() => setIsSideMenuOpen(false)}
              />
            </div>
            <div className="mt-8 flex flex-col gap-5 text-black">
              <NavLink to="/" onClick={() => setIsSideMenuOpen(false)}>
                HOME
              </NavLink>
              <NavLink to="/about" onClick={() => setIsSideMenuOpen(false)}>
                ABOUT
              </NavLink>
              {/* Dropdown integrated into the flow */}
              <div className="relative" ref={dropdownRef}>
                <button
                  onClick={() => setIsOpen(!isOpen)}
                  className="flex items-center  focus:outline-none"
                >
                  DESTINATIONS <IoCaretDownSharp size={16} className="ml-1" />
                </button>
                {isOpen && (
                  <div className="mt-2 flex flex-col  transition-all duration-700">
                    <NavLink onClick={() => setIsSideMenuOpen(false)}
                                                                  to="/booking/1"
                                                                  className="block px-4  py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                  Tokyo City Tour
                                                                </NavLink>
                                                                <NavLink onClick={() => setIsSideMenuOpen(false)}
                                                                  to="/booking/2"
                                                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                  Mt. Fuji 5th Station
                                                                </NavLink>
                                                                <NavLink onClick={() => setIsSideMenuOpen(false)}
                                                                  to="/booking/3"
                                                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                  Nagano Tour 
                                                                </NavLink>
                                                                <NavLink onClick={() => setIsSideMenuOpen(false)}
                                                                  to="/booking/4"
                                                                  className="block px-4 py-2 text-gray-700 hover:bg-gray-100"
                                                                >
                                                                  Nikko Tour
                                                                </NavLink>
                  </div>
                )}
              </div>
              <NavLink to="/contact" onClick={() => setIsSideMenuOpen(false)}>
                CONTACT
              </NavLink>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default HomeNavbar;
