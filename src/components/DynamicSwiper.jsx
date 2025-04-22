import React, { useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation"; // You can keep this import if you plan to use navigation

import image8 from "../assets/famous/1.webp";
import image9 from "../assets/famous/2.webp";
import image10 from "../assets/famous/3.webp";
import image11 from "../assets/famous/4.webp";
import image12 from "../assets/famous/5.webp";
import image13 from "../assets/famous/6.webp";

// Slide data
const slides = [
  { id: 1, image: image8, title: "Fuji-Q Highland" },
  { id: 2, image: image9, title: "Lake Kawaguchiko" },
  { id: 3, image: image10, title: "Oishi Park" },
  { id: 4, image: image11, title: "Oshino Hakkai" },
  { id: 5, image: image12, title: "Shiten'noji Temple" },
  { id: 6, image: image13, title: "Saiko lyashi no Sato Nemba" },
];

/* -------- Framer variants -------- */
const cardVariants = {
  initial: { opacity: 0, y: 40 },
  reveal: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.05, duration: 0.45 } }),
  hover: { y: -6 },
};

const overlayVariants = {
  initial: { scaleY: 0 },
  hover: { scaleY: 1, transition: { duration: 0.35, ease: "easeInOut" } },
};

// Custom Next Arrow
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

// Custom Prev Arrow
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

const DynamicSwiper = () => {
  const swiperRef = useRef(null);

  return (
    <div className="w-4/5 mx-auto relative">
      <Swiper
        ref={swiperRef}
        spaceBetween={20}
        slidesPerView={1}
        pagination={{ clickable: true }}
        loop={true} // Enable looping of slides
        autoplay={{ delay: 3000 }} // Autoplay every 3 seconds
        breakpoints={{ 400: { slidesPerView: 1 }, 780: { slidesPerView: 4 } }}
        navigation={false} // Disable default navigation arrows
      >
        {slides.map((s, idx) => (
          <SwiperSlide key={s.id}>
            <motion.div
              custom={idx}
              variants={cardVariants}
              initial="initial"
              whileInView="reveal"
              whileHover="hover"
              viewport={{ once: true, amount: 0.2 }}
              className="relative group cursor-pointer h-[600px] overflow-hidden rounded-2xl"
            >
              {/* image */}
              <motion.img
                src={s.image}
                alt={s.title}
                className="w-full h-full object-cover"
                variants={{ hover: { scale: 1.07 } }}
              />

              {/* overlay driven by parent hover */}
              <motion.div
                variants={overlayVariants}
                className="absolute inset-0 z-10 origin-bottom bg-black/30 rounded-2xl"
              />

              {/* caption stays on top */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20
                              w-[90%] lg:w-11/12 flex items-center
                              justify-between gap-4 p-4 rounded-2xl
                              bg-white group-hover:bg-transparent
                              transition-colors duration-300">
                <p className="text-xs lg:text-base font-medium group-hover:text-white">
                  {s.title}
                </p>
              </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation Arrows */}
      <NextArrow onClick={() => swiperRef.current.swiper.slideNext()} />
      <PrevArrow onClick={() => swiperRef.current.swiper.slidePrev()} />
    </div>
  );
};

export default DynamicSwiper;
