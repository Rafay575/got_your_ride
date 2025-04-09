import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

// Import your images

import image1 from "../assets/unsplash.png";// replace with actual image path

import i6 from "../assets/Group-286.png";

import i10 from "../assets/solution-bulb-concept-svgrepo-com-1.png";
const ResponsiveComponent = () => {
  return (
    <div className=" flex flex-col xl:flex-row my-14 w-4/5  items-center mx-auto">
      <div className="w-full xl:w-[350px] relative mb-6 xl:mb-0">
        <img
          src={image1}
          className="w-full xl:w-[350px] h-[530px] rounded-4xl"
          alt="Travel"
        />
        <div className="absolute rounded-2xl bg-[#F1582B] inset-0 w-28 h-28 top-[400px] left-[220px] text-center text-white">
          <p className="mt-6 font-bold text-4xl">05+</p>
          <p className="text-[8px] mt-3">YEARS OF EXPERIENCE</p>
        </div>
      </div>
      <div className="w-full xl:w-5/8 px-4 xl:px-0">
        <div className="ml-0 xl:ml-14">
          <p className="text-[#F1582B]">Let’s Explore the World</p>
          <h1 className="font-bold text-2xl lg:text-4xl w-full">We Make Your Travel More Enjoyable</h1>
          <p className="mt-5 w-full xl:w-[700px] leading-[32px]">
            Experience the freedom of a flexible schedule and the choice of what you want to do and for how long you wish to do it. Relax in a comfortable ride in modern minivans that can seat as many as 13 passengers. Take in the views of Mount Fuji at your leisure by using the private charter service for the whole duration of your trip to the region.
          </p>
          <div className="flex flex-wrap gap-5 my-8">
            <h3 className="w-full sm:w-1/2 xl:w-80 font-semibold flex gap-2 py-3">
              <img className="w-[48px] h-[48px] -mt-1" src={i6} alt="icon" />
              Nationally well-known <br /> service provider
            </h3>
            <h3 className="w-full sm:w-1/2 xl:w-80 font-semibold flex gap-2 py-3">
              <img className="w-[48px] h-[48px] -mt-1" src={i10} alt="icon" />
              Most popular booking <br /> solution provider
            </h3>
          </div>
          <p className="flex">
            <BiChevronsRight className="mt-1" />
            Free cancellation: Cancel up to 24 hours in advance for a full refund
          </p>
          <p className="flex mt-2">
            <BiChevronsRight className="mt-1" />
            Hand-picked premium Accommodations that guarantee comfort and relaxation.
          </p>
          <p className="flex mt-2 pb-9">
            <BiChevronsRight className="mt-1" />
            Dedicated 24/7 support team ready to assist you at any moment.
          </p>
          {/* <div className="mb-5">

          <NavLink className="bg-[#F1582B]  px-3 py-2 rounded-full mt-7 text-white">
            Book Now
          </NavLink>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ResponsiveComponent;
