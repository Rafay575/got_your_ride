import React, { useState } from "react";
import Slider from "react-slick";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Import images (they are fetched in this component)
import image1 from "../assets/hero/1.png";
import image2 from "../assets/hero/2.png";
import image3 from "../assets/hero/3.jpg";
import image4 from "../assets/hero/4.jpg";
import image5 from "../assets/hero/5.jpg";
import image6 from "../assets/hero/6.jpg";
import image7 from "../assets/hero/7.jpg";

// Custom arrow components for navigation
const NextArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute hidden md:block right-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M10 17l5-5l-5-5v10z" />
      </svg>
    </button>
  );
};

const PrevArrow = (props) => {
  const { onClick } = props;
  return (
    <button
      className="absolute hidden md:block left-4 top-1/2 transform -translate-y-1/2 z-10 bg-white/80 hover:bg-white p-2 rounded-full shadow"
      onClick={onClick}
    >
      <svg width="20" height="20" viewBox="0 0 24 24">
        <path fill="currentColor" d="M14 7l-5 5l5 5V7z" />
      </svg>
    </button>
  );
};

const Hero = () => {
  // Array of slide images
  const slides = [image1, image2, image3,image4, image5, image6,image7];

  // Keep track of the current slide to trigger text animation
  const [currentSlide, setCurrentSlide] = useState(0);

  // react-slick settings with fade effect and auto-play
  const settings = {
    dots: false,
    infinite: true,
    speed: 600,
    autoplay: true,
    autoplaySpeed: 6000,
    fade: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    afterChange: (index) => setCurrentSlide(index), // Set current slide after change
  };

  // Framer Motion variants for staggered text animation
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3, // Stagger the child animations (text)
      },
    },
  };

  const itemVariants1 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.5 } },
  };
  const itemVariants2 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.2 } },
  };
  const itemVariants3 = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 1.9 } },
  };

  return (
    <div className="relative w-full h-screen">
      {/* React-Slick Slider */}
      <Slider {...settings} className="w-full h-full">
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-screen">
            {/* Set background image for each slide */}
            <motion.div
              className="w-full h-full bg-cover bg-center"
              style={{ backgroundImage: `url(${slide})` }}
              variants={itemVariants1}
              transition={{ duration: 1 }} // Duration for background transition
            ></motion.div>
          </div>
        ))}
      </Slider>

      {/* Dark overlay for contrast */}
      <div className="absolute inset-0 bg-black/40 pointer-events-none" />

      {/* Overlay text content */}
      <motion.div
        key={currentSlide} // Forces remount of text on slide change
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-[40%] transform px-5 sm:px-[7vw] md:px-[8vw] lg:px-[11vw] md:w-4/5 text-white"
      >
        <motion.h1
          variants={itemVariants1}
          className="text-4xl md:text-5xl font-bold"
        >
          A MESMERIZING SUNSET OVER MT.FUJI, JAPAN
        </motion.h1>
        <motion.p
          variants={itemVariants2}
          className="mt-4 text-sm md:text-lg"
        >
          A Mesmerizing Sunset Over Mt. Fuji, Japan, bathes the iconic peak in a
          golden glow, creating a serene and breathtaking view.
        </motion.p>
        <motion.div
          variants={itemVariants3}
          className="mt-10 flex gap-4"
        >
          <NavLink
            to="#"
            className="bg-[#F1582B] text-white text-xs md:text-base px-6 py-2 rounded-full border border-[#F1582B] hover:bg-white hover:text-[#F1582B] transition-colors duration-300"
          >
            BOOK NOW
          </NavLink>
        
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Hero;
