import React from "react";
import GoBackButtonWhite from "../components/GoBackButtonWhite";
import { IoChevronForwardSharp } from "react-icons/io5";
import i1 from "../assets/about-1.png";
import i2 from "../assets/solution-bulb-concept-svgrepo-com-1.png";
import i3 from "../assets/Vector-1.png";
import i4 from "../assets/china-1.png";
import i5 from "../assets/about-2.png";
import VideoPlayer from "../components/VideoPlayer";
import image from "../assets/about-image.png";
import video from "../assets/video.mp4";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css"; // Core Swiper styles
import "swiper/css/navigation"; // Navigation styles
import "swiper/css/pagination"; // Pagination styles

import { TiCameraOutline } from "react-icons/ti";
import InstagramSlider from "../components/InstagramSlider";

const About = () => {
  return (
    <>
      {/* image section */}
      
      <div className="relative mt-6 sm:mt-12">
        <img src={i1} alt="Contact Banner" className="w-full h-[200px] md:h-[250px]" />
        <GoBackButtonWhite className="absolute top-6 left-6" />
        <h1 className="absolute text-white top-2/5 left-1/2 transform -translate-x-1/2 text-4xl sm:text-5xl font-bold">
        About Us
        </h1>
        <p className="absolute  text-white top-3/5 left-1/2 transform -translate-x-1/2 flex text-lg sm:text-xl">
          Home <IoChevronForwardSharp className="mt-1" /> About
        </p>
      </div>
      <div className="w-4/5 mx-auto flex flex-col-reverse lg:flex-row gap-4 lg:gap-20">
  {/* Main Section */}
  <div className="w-full lg:w-3/5  relative">
    <h1 className=" text-2xl text-center sm:text-3xl lg:text-4xl font-bold leading-[55px] mb-2">
      We Make Your Travel More  
      <span className="mt-1 lg:block"> Enjoyable</span>
    </h1>
    <p className=" mx-auto mt-4  sm:text-lg  leading-[32px] mb-4">
    At GetYourRide, we are dedicated to providing affordable and comfortable transportation services across Japan. Our goal is to offer you the freedom and flexibility to explore the country at your own pace. Whether you're experiencing the vibrant energy of the cities or enjoying the tranquility of the countryside, our private charter service ensures a relaxing and enjoyable journey.
    </p>
    <p className=" mx-auto mt-4  sm:text-lg  leading-[32px] mb-4">
    With a focus on comfort, convenience, and personalized service, we allow you to choose your destinations and the duration of your ride, ensuring that your travel experience is tailored to your needs. Let us be a part of your journey through Japan, where relaxation and adventure meet.
    </p>
    <div className="flex flex-col lg:flex-row border border-black/20 gap-4 lg:gap-8 p-6 rounded-xl relative w-full lg:w-4/5  ">
      {/* First Info Box */}
      <div className="text-center w-full lg:w-[45%]">
        <img src={i3} className="w-16 sm:w-20 mx-auto" alt="Service Provider" />
        <p className="font-semibold mt-2">A Trusted Leader in Transportation Services </p>
      
      </div>
      {/* Second Info Box */}
      <div className="text-center w-full lg:w-[45%]">
        <img src={i2} className="w-12 sm:w-15 mx-auto" alt="Booking Solution" />
        <p className="font-semibold mt-2">
        Your Ultimate Ride for Every Journey</p>
      </div>
    </div>
   
  </div>

  {/* Info Section */}
  <div className="lg:w-2/5 w-full mx-auto relative">
    
    {/* Left Image with "20+ YEARS OF EXPERIENCE" Badge */}
    <div className="relative w-full ">
      <img
        src={i5}
        className="relative  z-1 w-full lg:w-[300px] h-auto rounded-lg"
        alt="Travel Experience"
      />
      <div className="absolute z-1 hidden lg:block top-[25%] sm:top-[110%] left-[40%] transform -translate-x-1/2 bg-[#f1582b] rounded-2xl w-[200px] sm:w-[250px] pb-5 text-center text-white">
        <h1 className="text-[40px] sm:text-[60px] font-bold">20+</h1>
        <p className="text-[11px] font-bold">YEARS OF EXPERIENCE</p>
      </div>

      <img
        src={i4}
        className="absolute hidden lg:block top-[25%] sm:top-[70%] left-[40%]  w-[300px] h-auto rounded-lg"
        alt="Scenic Image"
      />
    </div>

  </div>

</div>


      {/* video section */}
     
      <div className="text-center my-14">
      <h1 className="font-bold text-2xl">More About Us</h1>
      <p className=" opacity-60 mb-6">Watch This Video</p>
      <VideoPlayer image={image} video={video} />
      </div>
 
     <InstagramSlider />
    </>
  );
};

export default About;
