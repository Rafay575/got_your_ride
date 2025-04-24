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
import image5 from "../assets/hero/5.jpg";
import image6 from "../assets/hero/5.png";
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
  const slides = [image1, image2, image5, image7, image6];

  // Array of slide texts corresponding to each image
  const slideTexts = [
    {
      h1: "A MESMERIZING SUNSET OVER MT.FUJI, JAPAN",
      p: "A Mesmerizing Sunset Over Mt. Fuji, Japan, bathes the iconic peak in a golden glow, creating a serene and breathtaking view."
    },
    {
      h1: "An ancient hush settles over Zenko‑ji as dusk descends",
      p: "The timbered halls glow softly in lantern light echoing with centuries of prayer while pilgrims tread the stone approach in quiet reverence, wrapped in the temple’s timeless serenity."
    },
    {
      h1: "A dazzling evening in Tokyo paints the skyline with neon brilliance",
      p: "Towering skyscrapers, age‑old temples and bustling streets weave together in a vibrant tapestry that pulses with energy and wonder"
    },
    {
      h1: "Beneath towering cedars, Nikkō Tōshogū shimmers with gilded carvings and vivid lacquers",
      p: "Each ornate beam and mythic motif catching the slanting rays of late afternoon, as incense swirls and chants drift through the sacred forest, celebrating a majesty both opulent and deeply spiritual."
    },
    {
      h1: "Under the fading light, Matsumoto‑jō’s black‑lacquered keeps and white‑plaster walls mirror perfectly in the still moat",
      p: "Its soaring gables and moon‑viewing tower standing guard against the Alps beyond, a poetic fusion of strength and elegance frozen in twilight."
    },
  ];

  // Keep track of the current slide to trigger text animation
  const [currentSlide, setCurrentSlide] = useState(0);

  // react-slick settings with fade effect and auto-play
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000,
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
              transition={{ duration: 1 ,delay: 0.4}} // Duration for background transition
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
          className="text-4xl capitalize md:text-5xl font-bold"
        >
          {slideTexts[currentSlide].h1}
        </motion.h1>
        <motion.p
          variants={itemVariants2}
          className="mt-4 text-sm md:text-lg"
        >
          {slideTexts[currentSlide].p}
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
