import React, { useState, useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import image from "../assets/image.png";
import video from "../assets/video1.mp4";

import VideoPlayer from "./VideoPlayer";
import HighIndexComponent from "./HighIndexComponent";
import DynamicGrid from "./DynamicGrid";
import ResponsiveComponent from "./ResponsiveComponent";
import DynamicSwiper from "./DynamicSwiper";
import WhyChooseUs from "./WhyChooseUs";
import Testimonials from "./Testimonials";


const Popup = () => {
  // Effect to disable/enable body scroll when modal is opened/closed

  return (
    <div>
      <HighIndexComponent/>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center  my-14" id="bookings">
        <p className="text-[#F1582B] ">Let’s Explore the World</p>
        <h1 className="font-bold text-2xl lg:text-4xl">
          Top Experiences on the <br />
          Got Your Guide
        </h1>
      </div>
      <DynamicGrid />
      <ResponsiveComponent />
      <DynamicSwiper />
     

    <WhyChooseUs />
    
    
      <div className="text-center my-14">
        <h1 className="font-bold text-2xl mb-6 lg:text-4xl">More About Us</h1>
      <VideoPlayer image={image} video={video} />
      </div>
     
      <div className="text-center my-14">
        <h1 className="font-bold text-2xl lg:text-4xl">What Our Customers Say</h1>
      </div>
    <Testimonials />
    </div>
  );
};

export default Popup;
