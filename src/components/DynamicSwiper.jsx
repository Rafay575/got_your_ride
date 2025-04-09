import React from "react";
import { NavLink } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";


// Import images
import image8 from "../assets/autumn-season-mountain-fuji-kawaguchiko-lake-japan.png";
import image9 from "../assets/matsumoto-castle-osaka-japan.png";
import image10 from "../assets/beautiful-shot-red-construction-water-with-human-silhouettes-looking-it.png";
import image11 from "../assets/image-8.png";
import image12 from "../assets/image-9.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

const DynamicSwiper = () => {
  // Array of slide data
  const slideData = [
    { id: 1, image: image8, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Mt. Fuji 5th Station" },
    { id: 2, image: image9, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Chureito Pagoda" },
    { id: 3, image: image10, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Laka Kawagochiko" },
    { id: 4, image: image11, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Osaka Castle" },
    { id: 5, image: image12, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Shiten noji Tample" },
    { id: 6, image: image12, title: "Private Mountain Fuji Sightseeing Tour", subtitle: "Shensekai" },
  ];

  return (
    <div>
      {/* Header Section */}
      <div className="text-center my-14">
        <p className="text-[#F1582B]">Search places Near You</p>
        <h1 className="font-bold text-2xl lg:text-4xl">
          Know About Our Famous Destinations
        </h1>
      </div>

      {/* Swiper Section */}
      <div className="w-4/5 mx-auto">
        <Swiper
          spaceBetween={50} // Space between slides
          slidesPerView={1} // Default to 1 slide per view
          pagination={{ clickable: true }} // Enable pagination (dots)
          breakpoints={{
            340: {
              slidesPerView: 1, // 2 slides visible on small screens
            },
            780: {
              slidesPerView: 2, // 4 slides visible on large screens
            },
          }}
        >
          {slideData.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="relative">
                <img src={slide.image} alt={slide.title} className="w-full h-auto rounded-2xl" />
                <div className="flex absolute bg-white text-xs lg:text-base shadow-2xl p-4 px-6 bottom-14 left-[5%] w-[90%] lg:w-11/16 lg:left-18 leading-6 rounded-2xl items-center ">
                Private Mountain fuji sightseeing tour
                <HiOutlineArrowUpRight
                  className="hover:bg-[#F1582B] ml-2 p-1 w-[34px] rounded-full hover:text-white bg-white border border-[#f1582b] text-[#f1582b]"
                  size={30}
                />
              </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default DynamicSwiper;
