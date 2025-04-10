import React from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoPersonOutline, IoMailOutline, IoChatbubblesOutline } from "react-icons/io5";

import i1 from "../assets/contact-1.png";
import i2 from "../assets/phone_1.png";
import i3 from "../assets/location.png";
import i4 from "../assets/email.png";


const Contact = () => {
  return (
    <>
      {/* Image Section */}
      <div className="relative mt-6 sm:mt-12">
        <img src={i1} alt="Contact Banner" className="w-full h-[200px] md:h-[250px]" />
        <GoBackButtonWhite className="absolute top-6 left-6" />
        <h1 className="absolute text-white top-2/5 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="absolute  text-white top-3/5 left-1/2 transform -translate-x-1/2 flex text-lg sm:text-xl">
          Home <IoChevronForwardSharp className="mt-1" /> Contact
        </p>
      </div>

      {/* Cards Section */}
      <div className="mt-6 sm:mt-12 px-4 sm:px-8 w-4/5 mx-auto mb-14">
  <div className="grid grid-cols-1  lg:grid-cols-3 gap-6">
    <div className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center">
      <img src={i3} className="w-20 mb-4" alt="Address" />
      <p className="text-center font-semibold">Address</p>
      <p className="text-center text-sm">Nice Day Hotel, Japan</p>
    </div>
    <div className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center">
      <img src={i2} className="w-20 mb-4" alt="Phone Number" />
      <p className="text-center font-semibold">Phone Number</p>
      <p className="text-center text-sm">+447453923024</p>
    </div>
    <div className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center">
      <img src={i4} className="w-20 mb-4" alt="Email" />
      <p className="text-center font-semibold">Email Address</p>
      <p className="text-center text-sm">gotyourride@gmail.com</p>
    </div>
  </div>
</div>


      {/* Description and Contact Form */}
      <div className="flex flex-col lg:flex-row justify-between my-14 px-4 w-4/5 mx-auto sm:px-8">
        {/* Description */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 sm:pr-5">
          <h1 className="text-2xl mb-1 font-bold">Get In Touch</h1>
          <p className="text-muted  mb-5 text-lg">
            Contact Us for Any Help
          </p>
          <p className="text-gray-600 text-justify">
            We offer carefully curated destinations and tours that capture the
            true essence of the location, ensuring you experience unforgettable
            moments. Our attraction passes save you more than buying individual tickets.
          </p>
          
        </div>

        {/* Contact Form */}
        <div className="border-2 border-gray-200 py-8 px-8 lg:w-1/2 rounded-2xl">
          <h1 className="font-bold text-2xl">Fill Up The Form</h1>
          <p className="text-sm text-gray-600">
            Enter your details to receive confirmation and updates about your booking.
          </p>
          <div className="mt-6">
      <div className="flex ">
        <IoPersonOutline className="hidden lg:block w-16 h-16 text-[#F1582B]" />
        <div className="flex flex-col ml-3 flex-1">
          <p className="opacity-60 mb-1 font-semibold">Name</p>
          <input
            type="text"
            className="border-2 rounded-xl border-gray-200 px-4 py-2 w-full"
          />
        </div>
      </div>

      <div className="mt-6">
        <div className="flex ">
          <IoMailOutline className="hidden lg:block w-16 h-16 text-[#F1582B]" />
          <div className="flex flex-col ml-3 flex-1">
            <p className="opacity-61 font-semibold">Email</p>
            <input
              type="email"
              className="border-2 rounded-xl border-gray-200 w-full px-4 py-2"
            />
          </div>
        </div>
      </div>

      <div className="mt-6">
        <div className="flex  mt-2">
          <IoChatbubblesOutline className="hidden lg:block w-16 h-16 text-[#F1582B]" />
          <div className="flex flex-col ml-3 flex-1">
            <p className="opacity-61 font-semibold">Enter Your Message</p>
            <textarea
              name=""
              id=""
              rows={5}
              className="border-2 rounded-xl border-gray-200 w-full px-4 py-2"
            ></textarea>
          </div>
        </div>
      </div>
    </div>
          <div className="bg-[#F1582B] w-1/4 px-6 py-2 rounded-full text-white mx-auto mt-10 cursor-pointer">
            <h1 className="text-center">Submit</h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
