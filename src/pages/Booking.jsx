import React,{useState} from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { RiShoppingCartLine } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import { GoArrowLeft } from "react-icons/go";
import { SlLocationPin } from "react-icons/sl";
import { FaShareAlt } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles
import { FaCheckCircle, FaTimesCircle } from 'react-icons/fa';
import i from "../assets/unkown.png";
import i1 from "../assets/87.png";
import i2 from "../assets/50.png";
import i3 from "../assets/shade-ysUOK8yPnt0-unsplash.png";
import i4 from "../assets/rui-hao-lim-VajtrJauWDQ-unsplash.png";
import i5 from "../assets/Group_427_1.png";
import i6 from "../assets/Group_427_2.png";
import i7 from "../assets/Group_427_3.png";
import i8 from "../assets/Group_427_4.png";
import i9 from "../assets/orange-line.png";
import i10 from "../assets/image_1.png";
import i11 from "../assets/image_2.png";
import i12 from "../assets/Group_1.png";
import i13 from "../assets/Group_2.png";
import i14 from "../assets/Group_3.png";
import i15 from "../assets/Group_4.png";

import tick from "../assets/tick.png";
import cross from "../assets/cross.png";

import Star from "../components/Star";

import CheckBox from "../components/CheckBox";
import Dropdown from "../components/Dropdown";
import ProgressBar from "../components/ProgressBar";
import Feedback from "../components/Feedback";
import GoBackButton from "../components/GoBackButton";



const Booking = ({tripData,bookingData,itineraryData,place}) => {
  const [date, setDate] = useState("");
  const { title, subtitle, location, reviews, images, details, price } = bookingData;
  return (
    <>
      <div className="mt-35">
        {/* back button */}
        <GoBackButton />
        <div className="w-4/5 mx-auto">
      {/* Title Section */}
      <div className="mb-5">
        <h1 className="font-bold mb-5 text-2xl lg:text-4xl text-center sm:text-left">
          {title}
        </h1>
        <p className="text-center sm:text-left">{subtitle}</p>
      </div>

      {/* Location, Share, Wishlist Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Location */}
        <div className="flex gap-2 text-[#615C5D] flex-wrap md:flex-nowrap">
          <NavLink className="group flex gap-2">
            <SlLocationPin className="mt-[3px] group-hover:text-[#f1582b]" />
            <p className="group-hover:text-[#f1582b]">{location}</p>
          </NavLink>
          <div className="flex gap-2">
            <Star />
            <p>{reviews}</p>
          </div>
        </div>
      </div>

      {/* Image Grid Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 mt-5">
        {images.map((img, index) => (
          <img key={index} src={img.src} className={img.classes} alt={`Booking image ${index + 1}`} />
        ))}
      </div>

      {/* Duration, People, Language, Type Section */}
      <div className="grid mt-5 grid-cols-2 sm:grid-cols-4 gap-4 w-full lg:w-3/4">
        {details.map((detail, index) => (
          <div key={index} className="flex gap-2 w-full">
            <img src={detail.icon} className="w-8 h-8 mt-[2px]" alt={detail.label} />
            <div className="leading-4">
              <p className="text-[#292929] text-[11px]">{detail.label}</p>
              <p>{detail.value}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Price Section */}
      <p className="text-left sm:text-right mt-5">
        <span className="text-[11px] text-[#292929] mr-2">{price.fromLabel}</span>
        <span className="font-bold">{price.primary}</span>/
        <span className="relative font-semibold">
          {price.secondary}{" "}
          <img src={price.secondaryIcon} className="absolute w-30 top-2 left-0" alt="Price Icon" />
        </span>
      </p>

      <hr className="mb-8 mt-8 opacity-20" />
    </div>
      </div>

      <div className="flex flex-col md:flex-row justify-between w-4/5 mx-auto">
      {/* Left Column */}
      <div className="w-full md:w-2/3">
        {/* Description Section */}
        <div>
          <h1 className="font-bold text-2xl">{tripData.description.title}</h1>
          <p className="leading-[28px] mt-5">
            {tripData.description.text}
          </p>
          <hr className="mt-8 mb-8 opacity-20" />
        </div>

        {/* Trip Highlights Section */}
        <div>
          <h1 className="font-bold text-2xl mb-5">
            {tripData.tripHighlights.title}
          </h1>
          <p className="font-semibold">{tripData.tripHighlights.subTitle}</p>
          {/* Render the CheckBox component; you can pass data if needed */}
          <CheckBox />
          <hr className="mt-8 mb-8 opacity-20" />
        </div>

        {/* Include/Exclude Section */}
        <div className="px-4 py-6">
          <h1 className="font-bold text-2xl mb-5">
            {tripData.includeExclude.title}
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Included */}
            <div>
              {tripData.includeExclude.includedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-3">
                  <FaCheckCircle className="w-5 h-5 bg-white text-[#F1582B]" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
            {/* Excluded */}
            <div>
              {tripData.includeExclude.excludedItems.map((item, index) => (
                <div key={index} className="flex items-center gap-2 mb-3">
                  <FaTimesCircle className="w-5 h-5 text-gray-200 bg-gray-400 rounded-full" />
                  <p className="text-sm">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Right Column - Book Your Trip */}
      <div className="w-full md:w-1/3 md:ml-7">
        <h1 className="text-2xl font-bold mb-3">{tripData.booking.title}</h1>

        {/* Date Dropdown */}
        <div className="mt-5">
          <Dropdown
            placeholder={tripData.booking.dropdownPlaceholder}
          />
        </div>
        <hr className="opacity-20 mt-8 mb-8" />

        {/* People Section */}
        <div className="flex justify-between">
          <div className="w-full">
            <p className="font-bold mb-5 mt-2">
              {tripData.booking.people.label}
            </p>
            <div className="flex w-full justify-between items-center">
              <div>
                <p className="text-gray-500 text-sm font-semibold">
                  {tripData.booking.people.category}
                </p>
                <p className="text-gray-500 text-sm font-semibold">
                  {tripData.booking.people.subtext}
                </p>
              </div>
              <div className="w-[180px]">
              <div className="flex items-center border-gray-100">
            <span className="cursor-pointer rounded-l bg-gray-200 py-1 h-8 px-5 duration-100 hover:bg-orange-500 hover:text-white">
              -
            </span>
            <input
              className="h-8 w-20 border-x pl-9 border-gray-300 bg-gray-200 text-xs outline-none"
              type="number"
              value="2"
              min="1"
              readOnly
            />
            <span className="cursor-pointer rounded-r bg-gray-200 py-1 h-8 px-5 duration-100 hover:bg-orange-500 hover:text-white">
              +
            </span>
          </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="opacity-20 mt-8 mb-8" />

        {/* Trip Information Section */}
        <p className="font-bold">Trip Information</p>
        <div className="mt-5">
          {tripData.booking.tripInfo.map((info, index) => (
            <div key={index} className="flex gap-2 mb-2">
              <img src={tick} alt="tick" />
              <p className="text-sm">
                <span className="font-semibold">{info.label}:</span> {info.value}
              </p>
            </div>
          ))}
        </div>

        {/* Add to Cart Button */}
        <div className="bg-[#F1582B] px-6 py-2 rounded-full w-full mt-10 text-white">
          <h1 className="text-center">{tripData.booking.buttonText}</h1>
        </div>
      </div>
    </div>
      <div className="w-4/5 mx-auto ">

      <hr className="mb-8 mt-8 opacity-20" />
      </div>

      <div className="flex flex-col lg:flex-row w-4/5 mx-auto justify-between mt-10">
      {/* Left Column */}
      <div className="w-full text-center mb-5 lg:mb-3 lg:w-2/8">
        {/* Section Title */}
        <h1 className="font-bold text-2xl">{itineraryData.leftColumn.title}</h1>
        {/* Header Items */}
        {itineraryData.leftColumn.headerItems.map((item, idx) => (
          <div key={idx} className="flex mt-4 gap-2 text-center">
            <img src={item.icon} className="w-6" alt="" />
            <p className={item.textClass}>{item.text}</p>
          </div>
        ))}
        {/* Stops Section */}
        <div className="relative mt-4">
          {/* Background icon (can be seen as a visual indicator behind the stops list) */}
          <img src={itineraryData.leftColumn.stopsBackground} className="w-6 pt-6" alt="" />
          <div className="absolute inset-0">
            <div className="flex flex-col gap-6 mt-4">
              {itineraryData.leftColumn.stops.map((stop, index) => (
                <div key={index} className="flex gap-2 mt-2">
                  <img
                    src={stop.icon}
                    className="w-6 h-6 border border-[#f1582b] rounded-full"
                    alt=""
                  />
                  <div className="ml-4">
                    <p>{stop.title}</p>
                    <p className="opacity-64 text-[11px]">{stop.duration}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Right Column */}
      <img
        src={itineraryData.rightImage}
        className="w-full md:w-6/8 h-auto lg:h-[688px]"
        alt=""
      />
    </div>
      <div className="mx-auto w-4/5">

      <hr className="mt-8 mb-8 opacity-20" />
      </div>
      <ProgressBar />
      <div className="mx-auto w-4/5">

      <hr className="mt-8 mb-8 opacity-20" />
      </div>
      <div className="w-4/5 mx-auto">

      <Feedback />
      </div>
      <div className="w-4/5 mx-auto">
        <Swiper
          spaceBetween={12} // Space between slides
          breakpoints={{
            640: {
              slidesPerView: 1, // 2 slides visible on small screens
            },
            768: {
              slidesPerView: 2, // 3 slides visible on medium screens
            },
            1024: {
              slidesPerView: 3, // 4 slides visible on large screens
            },
          }}
          pagination={{ clickable: true }} // Enable pagination (dots)
          className="w-full"
        >
          <SwiperSlide>
            <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#EAF9EB] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="bg-[#F9E9E9] w-[95%] h-70 px-3 py-5 rounded-2xl mb-30 mx-auto shadow-md">
              <img src={i} className="mx-auto w-20" alt="" />
              <p className="text-sm font-bold mb-2 mt-2">Mr John</p>
              <div className="flex justify-between">
                <p className="text-sm">booking verified 12-04-2025</p>
                <Star />
              </div>
              <p className="text-[11px] mt-2">
                Booked a private tour with Driver jerry for a journey from Tokyo
                to Mount Fuji with my family and it was an exceptional choice.
                Despite the clouds, the experience was nothing short of
                fantastic.
              </p>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Booking;
