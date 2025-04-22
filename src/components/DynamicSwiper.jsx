/* DynamicSwiper.jsx — overlay bug fixed */

import React from "react";
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import { Swiper, SwiperSlide } from "swiper/react";
import { motion } from "framer-motion";
import "swiper/css";
import "swiper/css/pagination";

import image8 from "../assets/autumn-season-mountain-fuji-kawaguchiko-lake-japan.png";
import image9 from "../assets/matsumoto-castle-osaka-japan.png";
import image10 from "../assets/beautiful-shot-red-construction-water-with-human-silhouettes-looking-it.png";
import image11 from "../assets/image-8.png";
import image12 from "../assets/image-9.png";

const slides = [
  { id: 1, image: image8, title: "Private Mountain Fuji Sightseeing Tour" },
  { id: 2, image: image9, title: "Private Mountain Fuji Sightseeing Tour" },
  { id: 3, image: image10, title: "Private Mountain Fuji Sightseeing Tour" },
  { id: 4, image: image11, title: "Private Mountain Fuji Sightseeing Tour" },
  { id: 5, image: image12, title: "Private Mountain Fuji Sightseeing Tour" },
  { id: 6, image: image12, title: "Private Mountain Fuji Sightseeing Tour" },
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

const DynamicSwiper = () => (
  <div className="w-4/5 mx-auto">
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      pagination={{ clickable: true }}
      breakpoints={{ 400: { slidesPerView: 1 }, 780: { slidesPerView: 4 } }}
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
            className="relative group cursor-pointer overflow-hidden rounded-2xl"
          >
            {/* image */}
            <motion.img
              src={s.image}
              alt={s.title}
              className="w-full h-auto object-cover"
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
              <HiOutlineArrowUpRight
                size={32}
                className="flex-shrink-0 p-[5px] rounded-full
                           border border-[#F1582B] text-[#F1582B]
                           bg-white group-hover:bg-white/20
                           group-hover:text-white transition-colors duration-300"
              />
            </div>
          </motion.div>
        </SwiperSlide>
      ))}
    </Swiper>
  </div>
);

export default DynamicSwiper;
