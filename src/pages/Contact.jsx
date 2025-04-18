import React, { useState } from 'react';
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import { IoPersonOutline, IoMailOutline, IoChatbubblesOutline } from "react-icons/io5";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';  // Importing framer motion

import i1 from "../assets/contact-1.png";
import i2 from "../assets/phone_1.png";
import i3 from "../assets/location.png";
import i4 from "../assets/email.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [isLoading, setIsLoading] = useState(false); // State to manage loading

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('All fields are required!');
      return;
    }

    // Set loading to true while the form is being submitted
    setIsLoading(true);

    // Send form data to the backend API
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message); // Show success message
      } else {
        toast.error(data.error || 'Something went wrong');
      }
    } catch (error) {
      toast.error('Failed to submit the contact form');
    } finally {
      // Reset loading state
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Image Section */}
      <motion.div
        className="relative mt-6 sm:mt-12"
        initial={{ opacity: 0, y: -50 }}  // Initial state for animation
        animate={{ opacity: 1, y: 0 }}   // Animate to full opacity and normal position
        transition={{ duration: 0.8 }}
      >
        <img src={i1} alt="Contact Banner" className="w-full h-[200px] md:h-[250px]" />
        <GoBackButtonWhite className="absolute top-6 left-6" />
        <h1 className="absolute text-white top-2/5 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-bold">
          Contact Us
        </h1>
        <p className="absolute text-white top-3/5 left-1/2 transform -translate-x-1/2 flex text-lg sm:text-xl">
          Home <IoChevronForwardSharp className="mt-1" /> Contact
        </p>
      </motion.div>

      {/* Cards Section */}
      <motion.div
        className="mt-6 sm:mt-12 px-4 sm:px-8 w-4/5 mx-auto mb-14"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <motion.div
            className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <img src={i3} className="w-20 mb-4" alt="Address" />
            <p className="text-center font-semibold">Address</p>
            <p className="text-center text-sm">Nice Day Hotel, Japan</p>
          </motion.div>

          <motion.div
            className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img src={i2} className="w-20 mb-4" alt="Phone Number" />
            <p className="text-center font-semibold">Phone Number</p>
            <p className="text-center text-sm">+447453923024</p>
          </motion.div>

          <motion.div
            className="border-2 rounded-xl border-gray-200 h-[250px] pt-8 flex flex-col items-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <img src={i4} className="w-20 mb-4" alt="Email" />
            <p className="text-center font-semibold">Email Address</p>
            <p className="text-center text-sm">gotyourride@gmail.com</p>
          </motion.div>
        </div>
      </motion.div>

      {/* Description and Contact Form */}
      <motion.div
        className="flex flex-col justify-between my-14 px-4 w-4/5 mx-auto sm:px-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        {/* Description */}
        <div className="w-full mb-8 lg:mb-0 sm:pr-5">
          <h1 className="text-3xl font-bold text-[#333] mb-1">Get In Touch</h1>
          <p className="text-gray-600 text-lg mb-5">Contact Us for Any Help</p>
          <p className="text-gray-500 text-justify">
            We offer carefully curated destinations and tours that capture the true essence of the location,
            ensuring you experience unforgettable moments. Our attraction passes save you more than buying
            individual tickets.
          </p>
        </div>

        {/* Contact Form */}
        <motion.div
          className="border-2 border-gray-300 mt-5 py-8 px-8 rounded-2xl shadow-lg"
          initial={{ y:100, opacity: 0 }}
          whileInView={{ y:0,opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h1 className="font-bold text-2xl text-[#333]">Fill Up The Form</h1>
          <p className="text-sm text-gray-600">
            Enter your details to receive confirmation and updates about your booking.
          </p>
          <form onSubmit={handleSubmit} className="mt-6">
            <div className="flex mb-6">
              <IoPersonOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label htmlFor="name" className="opacity-60 mb-1 font-semibold text-[#555]">Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border-2 rounded-xl border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Enter your full name"
                />
              </div>
            </div>

            <div className="flex mb-6">
              <IoMailOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label htmlFor="email" className="opacity-60 mb-1 font-semibold text-[#555]">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border-2 rounded-xl border-gray-300 px-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="flex mb-6">
              <IoChatbubblesOutline className="w-16 h-16 text-[#F1582B] hidden lg:block" />
              <div className="flex flex-col ml-3 flex-1">
                <label htmlFor="message" className="opacity-60 mb-1 font-semibold text-[#555]">Enter Your Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="border-2 rounded-xl border-gray-300 w-full px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#F1582B]"
                  placeholder="Your message here"
                ></textarea>
              </div>
            </div>

            <div className="bg-[#F1582B] w-1/4 px-6 py-2 rounded-full text-white mx-auto mt-8 cursor-pointer">
              <button type="submit" className="w-full text-center font-semibold">
                {isLoading ? (
                  <span>Loading...</span> // Show Loading text when submitting
                ) : (
                  'Submit'
                )}
              </button>
            </div>
          </form>
        </motion.div>
      </motion.div>

      {/* Toast Container */}
      <ToastContainer />
    </>
  );
};

export default Contact;
