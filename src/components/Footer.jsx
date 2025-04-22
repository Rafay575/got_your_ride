import React from "react";
import { NavLink } from "react-router-dom";

import image24 from "../assets/got-your-ride-logo-variation-01-1.png";
import image25 from "../assets/Group-117.png";
import image26 from "../assets/Group-118.png";
import image27 from "../assets/email-14-svgrepo-com-1.png";
import SocialIcons from "./SocialIcons.jsx";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa"; // Using React Icons for demonstration


const Footer = () => {
  return (
    <div className="w-full bg-[#1E1E1E] h-auto py-6">
      {/* orange part */}
      <div className="mx-auto max-w-7xl w-4/5  ">
      {/* Container for the items */}
      <div className="flex flex-col lg:flex-row  lg:justify-between w-full  p-5 bg-[#F1582B] rounded-xl space-y-10 items-center lg:space-y-0 lg:space-x-8">
        {/* Location Section */}
        <NavLink className="flex items-center space-x-2 text-white w-56 font-bold">
          <div className="bg-white p-4 rounded-full">
            <FaMapMarkerAlt className="text-[#F1582B]" size={20} />
          </div>
          <div className="flex flex-col">

          <span>Location</span>
            <p className="text-muted font-[400] text-[12px]" >2-chrome-3-5 Wakaba<br/> Shinjuku City, Tokyo 160-0011 </p>
          </div>
        </NavLink>

        {/* Email Section */}
        <NavLink className="flex items-center space-x-2 text-white w-56 font-bold">
          <div className="bg-white p-4 rounded-full">
            <FaEnvelope className="text-[#F1582B]" size={20} />
          </div>
          <div className="flex flex-col">

          <span>Email</span>
            <p className="text-muted font-[400] text-[12px]">info@gotyourride.com </p>
          </div>
        </NavLink>

        {/* Contact Us Section */}
        <NavLink className="flex items-center space-x-2 text-white w-56 font-bold">
          <div className="bg-white p-4 rounded-full">
            <FaPhoneAlt className="text-[#F1582B]" size={20} />
          </div>
          <div className="flex flex-col">

          <span>Contact Us</span>
            <p className="text-muted font-[400] text-[12px]">+44 745 392 3024 </p>
          </div>
        </NavLink>
      </div>
    </div>

      {/* Remaining part */}
      <div className="w-4/5 mx-auto mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 text-white">
        {/* Column 1 */}
        <div className="text-sm">
          <img src={image24} className="w-15" alt="" />
          <p className="mt-4">
            GetYourRide offers affordable and comfortable transportation
            throughout Japan, ensuring a pleasant journey whether you're
            exploring Tokyo's bustling streets or the serene countryside. With
            our service, you can relax and fully enjoy Japan’s unique ambiance.
          </p>
        </div>

        {/* Column 2 */}
        <div>
          <h1 className="text-lg font-bold mb-4">Contact Us</h1>
          <NavLink className="flex mt-4 gap-2">
            <img src={image25} className="w-4 h-[18px]" alt="" />
            <p className="">Location</p>
          </NavLink>
          <NavLink className="flex mt-4 gap-2">
            <img src={image26} className="w-4 h-[18px]" alt="" />
            <p className="">Contact Us</p>
          </NavLink>
          <NavLink className="flex mt-4 gap-2 mb-8">
            <img src={image27} className="w-4 h-[18px]" alt="" />
            <p className="">Email</p>
          </NavLink>
          <SocialIcons />
        </div>

        {/* Column 3 */}
        <div>
          <h1 className="text-lg font-bold mb-4">Famous Destinations</h1>
          <div className="flex flex-col gap-3">
            <NavLink>Mt. Fuji 5th Station</NavLink>
            <NavLink>Chureito Pagoda</NavLink>
            <NavLink>Laka Kawagochiko </NavLink>
            <NavLink>Osaka Castle</NavLink>
            <NavLink>Shiten noji Tample </NavLink>
            <NavLink>Shensekai</NavLink>
          </div>
        </div>

        {/* Column 4 */}
        <div>
          <h1 className="text-lg font-bold mb-4">Links To Meet Us</h1>
          <div className="flex flex-col gap-3">
            <NavLink>Home</NavLink>
            <NavLink>About Us</NavLink>
            <NavLink>Destinations</NavLink>
            <NavLink>Testimonials</NavLink>
            <NavLink>Contact Us </NavLink>
          </div>
        </div>
      </div>

      {/* Mobile-friendly adjustments */}
      
    </div>
  );
};

export default Footer;
