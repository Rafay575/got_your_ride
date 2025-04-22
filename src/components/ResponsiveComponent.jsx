/* ResponsiveComponent.jsx */

import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";

import image1 from "../assets/unsplash.png";
import i6 from "../assets/Group-286.png";
import i10 from "../assets/solution-bulb-concept-svgrepo-com-1.png";

const bulletPoints = [
  "Free cancellation: Cancel up to 24 hours in advance for a full refund",
  "Hand‑picked premium accommodations that guarantee comfort and relaxation.",
  "Dedicated 24/7 support team ready to assist you at any moment.",
];

const ResponsiveComponent = () => {
  return (
    <motion.section
      className="flex flex-col xl:flex-row items-center w-4/5 mx-auto my-14"
      /* --- scroll‑into‑view for whole section --- */
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true, amount: 0.2 }}
    >
      {/* ---------- Left / Image ---------- */}
      <motion.div
        className="w-full xl:w-[350px] relative mb-6 xl:mb-0 cursor-pointer"
        whileHover={{ scale: 1.03 }}
        transition={{ type: "spring", stiffness: 180 }}
      >
        {/* image zoom */}
        <motion.img
          src={image1}
          alt="Travel"
          className="w-full xl:w-[350px] h-[530px] rounded-4xl object-cover"
          whileHover={{ scale: 1.07 }}
          transition={{ duration: 0.4 }}
        />

        {/* experience badge */}
        <motion.div
          className="absolute inset-0 w-28 h-28 bg-[#F1582B] rounded-2xl text-center text-white top-[400px] left-[220px] pointer-events-none"
          whileHover={{ rotate: 3 }}
          transition={{ type: "spring", stiffness: 260 }}
        >
          <p className="mt-6 font-bold text-4xl">05+</p>
          <p className="text-[8px] mt-3">YEARS OF EXPERIENCE</p>
        </motion.div>
      </motion.div>

      {/* ---------- Right / Text ---------- */}
      <motion.div
        className="w-full xl:flex-1 px-4 xl:px-0"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
        viewport={{ once: true, amount: 0.2 }}
      >
        <div className="xl:ml-14">
          <p className="text-[#F1582B]">Let’s Explore the World</p>
          <h1 className="font-bold text-2xl lg:text-4xl">
            We Make Your Travel More Enjoyable
          </h1>

          <p className="mt-5 leading-[32px]">
            Experience the freedom of a flexible schedule and the choice of what
            you want to do and for how long you wish to do it. Relax in a
            comfortable ride in modern minivans that can seat as many as 13
            passengers. Take in the views of Mount Fuji at your leisure by using
            the private charter service for the whole duration of your trip to
            the region.
          </p>

          {/* feature cards */}
          <div className="flex flex-wrap gap-5 my-8">
            <motion.h3
              className="w-full sm:w-1/2 xl:w-80 font-semibold flex gap-2 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <img src={i6} alt="icon" className="w-12 h-12 -mt-1" />
              Nationally well‑known<br /> service provider
            </motion.h3>

            <motion.h3
              className="w-full sm:w-1/2 xl:w-80 font-semibold flex gap-2 py-3"
              whileHover={{ scale: 1.05 }}
            >
              <img src={i10} alt="icon" className="w-12 h-12 -mt-1" />
              Most popular booking<br /> solution provider
            </motion.h3>
          </div>

          {/* bullet list – stagger in */}
          <motion.ul
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
            variants={{
              hidden: {},
              show: {
                transition: { staggerChildren: 0.15 },
              },
            }}
          >
            {bulletPoints.map((bp, i) => (
              <motion.li
                key={i}
                className={`flex mt-${i === 0 ? 0 : 2}`}
                variants={{
                  hidden: { opacity: 0, x: -20 },
                  show: { opacity: 1, x: 0, transition: { duration: 0.4 } },
                }}
              >
                <BiChevronsRight className="mt-[2px]" />
                {bp}
              </motion.li>
            ))}
          </motion.ul>

          {/* Example CTA (uncomment if you need it) */}
          {/*
          <NavLink
            to="/book"
            className="inline-block bg-[#F1582B] text-white px-6 py-3 rounded-full mt-8 hover:brightness-110 transition"
          >
            Book Now
          </NavLink>
          */}
        </div>
      </motion.div>
    </motion.section>
  );
};

export default ResponsiveComponent;
