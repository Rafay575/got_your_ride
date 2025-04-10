import React, { useState, useEffect } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import Star from "./Star";
import { NavLink } from "react-router-dom";
import image from "../assets/image.png";
import video from "../assets/video.mp4";

import image1 from "../assets/unsplash.png";

import i6 from "../assets/Group-286.png";

import i10 from "../assets/solution-bulb-concept-svgrepo-com-1.png";


import image8 from "../assets/autumn-season-mountain-fuji-kawaguchiko-lake-japan.png";
import image9 from "../assets/matsumoto-castle-osaka-japan.png";
import image10 from "../assets/beautiful-shot-red-construction-water-with-human-silhouettes-looking-it.png";
import image11 from "../assets/image-8.png";
import image12 from "../assets/image-9.png";

import image17 from "../assets/nick-night-6ckbKRjydSw-unsplash.png";
import image18 from "../assets/SVGRepo_iconCarrier_1.png";
import image19 from "../assets/SVGRepo_iconCarrier_2.png";
import image20 from "../assets/SVGRepo_iconCarrier_3.png";
import image21 from "../assets/image-21.png";
import image22 from "../assets/image-22.png";
import image23 from "../assets/image-23.png";
import image24 from "../assets/SVGRepo_iconCarrier_4.png";
import image25 from "../assets/SVGRepo_iconCarrier_5.png";
import image26 from "../assets/SVGRepo_iconCarrier_6.png";
import image27 from "../assets/image_4.png";
import image28 from "../assets/image_5.png";
import image29 from "../assets/image_6.png";

import { CiHeart } from "react-icons/ci";
import VideoPlayer from "./VideoPlayer";
import HighIndexComponent from "./HighIndexComponent";
import DynamicGrid from "./DynamicGrid";
import ResponsiveComponent from "./ResponsiveComponent";
import DynamicSwiper from "./DynamicSwiper";

const Popup = () => {
  // Effect to disable/enable body scroll when modal is opened/closed

  return (
    <div>
      <HighIndexComponent/>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      {/* title */}
      <div className="text-center  my-14">
        <p className="text-[#F1582B] ">Let’s Explore the World</p>
        <h1 className="font-bold text-2xl lg:text-4xl">
          Top Experiences on the <br />
          Got Your Guide
        </h1>
      </div>
      <DynamicGrid />
      <ResponsiveComponent />
      <DynamicSwiper />

    
      <div className="text-center my-14">
        <p className="text-[#F1582B] ">Reason Why Choose Us</p>
        <h1 className="font-bold text-2xl lg:text-4xl">Why Choose Us</h1>
      </div>
      <div className="w-4/5 mx-auto">
        <img src={image17} alt="" />
      </div>
      {/* ///////// */}
      {/* next part */}
      {/* ///////// */}
      <div className=" w-4/5 mx-auto mt-16">
        <Swiper
          spaceBetween={50} // Space between slides
       
          pagination={{ clickable: true }} // Enable pagination (dots)
          breakpoints={{
            640: {
              slidesPerView: 1, // 2 slides visible on small screens
            },
            1024: {
              slidesPerView: 2, // 3 slides visible on medium screens
            },
            1280: {
              slidesPerView: 3, // 4 slides visible on large screens
            },
          }}
        >
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image18} className="mx-auto pt-3" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Experienced Travel Experts
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Rely on our knowledgeable travel agents to create the perfect
                journey tailored just for you.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3   w-1/2 h-[120px]">
                <img src={image20} className="mx-auto pt-6" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Effortless Booking Made Simple
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Our easy-to-use booking platform makes planning your ideal trip
                to Japan a breeze, so you can focus on enjoying the journey from
                the start
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image19} className="mx-auto pt-4" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Local Guide Services
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Professional local guides for city tours, nature excursions, or
                cultural experiences. Multi-lingual guides.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image24} className="mx-auto pt-6" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Complete Travel Security
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Your safety and peace of mind are our top priorities, ensuring
                that your journey is fully protected at all times
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3   w-1/2 h-[120px]">
                <img src={image25} className="mx-auto pt-7" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Travel Insurance
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                Offering travel insurance packages that cover health, lost
                luggage, trip cancellations
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#FCE8DF] rounded-2xl pb-7 px-1 flex flex-col items-center">
              <div className="mt-3  w-1/2 h-[120px]">
                <img src={image26} className="mx-auto pt-7" alt="" />
              </div>
              <h1 className=" text-center mt-8 font-bold  ">
                Recommendations Restaurants
              </h1>
              <p className="mx-auto w-4/6 mt-5 text-sm h-[120px]  ">
                During your travel Reservations at local restaurants
                Availability to create your journey happy.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
     
      <div className="text-center my-14">
        <h1 className="font-bold text-2xl mb-6 lg:text-4xl">View Famous Site</h1>
      <VideoPlayer image={image} video={video} />
      </div>
     
      <div className="text-center my-14">
        <h1 className="font-bold text-2xl lg:text-4xl">What Our Customers Say</h1>
      </div>
      <Swiper
        className="w-4/5 "
        pagination={{ clickable: true }} // Enable pagination (dots)
        breakpoints={{
          640: {
            slidesPerView: 2, // 2 slides visible on small screens
          },
          1024: {
            slidesPerView: 3, // 3 slides visible on medium screens
          },
          1280: {
            slidesPerView: 4, // 4 slides visible on large screens
          },
        }}
      >
        <SwiperSlide>
          <div className="bg-[#D8F4DA] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image21} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE2CE] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image22} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#F1D4D4] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image23} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D9D9D9] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image27} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#D8F4DA] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image28} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[#FFE2CE] w-[95%] px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
            <img src={image29} className="mx-auto w-50" alt="" />
            <p className="text-sm font-bold mb-2 mt-2">Name.......</p>
            <div className="flex justify-between">
              <p className="text-sm">United Kingdom</p>
              <Star />
            </div>
            <p className="text-[11px] mt-2">
              A travel agency is a business that facilitates travel arrangements
              for individuals or groups, acting as an intermediary between
              travelers and various travel suppliers like airlines, hotels, and
              cruise lines. They offer a range of services, from booking flights
              and accommodations to creating customized itineraries
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Popup;
