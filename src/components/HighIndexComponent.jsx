import React from "react";
import { BiChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// Static content, no dynamic state
import i1 from "../assets/destination-icon-01-1.png";
import i2 from "../assets/suitcase-packages-01-1.png";
import i3 from "../assets/satisfaction-gauranette-01-1.png";
import i4 from "../assets/expert-01-1.png";
import i5 from "../assets/fuji-mountain-image-1.png";

const HighIndexComponent = () => {
  // Static: always show first content
  const selected = {
    icon: i1,
    title: "MOST POPULAR DESTINATIONS",
    description:
      "Explore the worldwide destinations which are the most preferred by people, including amazing natural beauties as well as lively urban scenery.",
    locations: ["Mount Fuji", "Tokyo"],
    image: i5,
    buttonText: "Book Now",
  };

  return (
    <div className="bg-white rounded-tl-[75px] rounded-br-[75px] relative mt-[-50px] mx-auto px-5 xl:pl-18 py-5 pr-4 w-4/5 md:w-[95%] xl:w-4/5 md:h-6/12 border border-white flex flex-col lg:flex-row items-center justify-between shadow-lg" style={{ zIndex: 10 }}>
      {/* Static List with entrance and hover animation */}
      <div className="flex flex-col gap-4 py-3 text-center w-full lg:w-1/4 xl:w-2/4">
        {[
          { id: 1, icon: i1, label: "MOST POPULAR DESTINATIONS" },
          { id: 2, icon: i2, label: "BUDGET FRIENDLY PACKAGES" },
          { id: 3, icon: i3, label: "SATISFACTION GUARANTEED" },
          { id: 4, icon: i4, label: "EXPERIENCED TRAVEL EXPERTS" },
        ].map((item, idx) => (
          <motion.h3
            key={item.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.4 }}
            whileHover={{ scale: 1.02 }}
            className="border-b border-b-[#DDDDDD] px-5 w-full flex justify-center lg:justify-start gap-2 py-3"
          >
            <img className="w-8 h-8" src={item.icon} alt={item.label} />
            <span className="text-sm md:text-base font-bold">{item.label}</span>
          </motion.h3>
        ))}
      </div>

      {/* Static Content with fade-in animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
        className="w-full lg:w-3/4 xl:w-2/4 flex flex-col md:flex-row gap-8 items-center justify-around mt-4 md:mt-0"
      >
        <img
          className="border border-white rounded-3xl w-full md:w-70 h-82 transform transition-transform duration-500 hover:scale-105"
          src={selected.image}
          alt={selected.title}
        />
        <div className="text-center md:text-left">
          <h3 className="font-bold mt-2 text-[#f1582b] animate-pulse">{selected.title}</h3>
          <p className="mb-2 mt-5">{selected.description}</p>
          {selected.locations.map((loc, i) => (
            <p key={i} className="flex items-center">
              <BiChevronsRight className="mr-1" /> {loc}
            </p>
          ))}
          <div className="mt-6">
            <motion.div
              initial={{ scale: 0.8 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 100, duration: 0.5 }}
            >
              <NavLink className="bg-[#F1582B] px-4 py-2 rounded-full text-white inline-block animate-bounce">
                {selected.buttonText}
              </NavLink>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default HighIndexComponent;
