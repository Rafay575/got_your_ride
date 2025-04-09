import React, { useState } from "react";
import { BiChevronsRight } from "react-icons/bi";
import { NavLink } from "react-router-dom";

// Import images (they are fetched in this component)
import i1 from "../assets/destination-icon-01-1.png";
import i2 from "../assets/suitcase-packages-01-1.png";
import i3 from "../assets/satisfaction-gauranette-01-1.png";
import i4 from "../assets/expert-01-1.png";
import i5 from "../assets/fuji-mountain-image-1.png";

const HighIndexComponent = () => {
  const [currentComponent, setCurrentComponent] = useState(1);

  // Define content data dynamically
  const contentData = [
    {
      id: 1,
      title: "MOST POPULAR DESTINATIONS",
      icon: i1,
      description:
        "Explore the worldwide destinations which are the most preferred by people, including amazing natural beauties as well as lively urban scenery.",
      locations: ["Mount Fuji", "Tokyo"],
      image: i5,
      buttonText: "Book Now",
    },
    {
      id: 2,
      title: "BUDGET FRIENDLY PACKAGES",
      icon: i2,
      description: "Affordable packages to make your trip amazing.",
      locations: ["Mount Fuji", "Tokyo"],
      image: i5,
      buttonText: "Book Now",
    },
    {
      id: 3,
      title: "SATISFACTION GAURANTEED",
      icon: i3,
      description: "100% satisfaction guarantee on all our services.",
      locations: ["Mount Fuji", "Tokyo"],
      image: i5,
      buttonText: "Book Now",
    },
    {
      id: 4,
      title: "EXPERIENCED TRAVEL EXPERTS",
      icon: i4,
      description: "Our experts are here to ensure you have the best journey.",
      locations: ["Mount Fuji", "Tokyo"],
      image: i5,
      buttonText: "Book Now",
    },
  ];

  const handleCurrentComponent = (pointer) => {
    setCurrentComponent(pointer);
  };

  const selectedComponent = contentData.find((item) => item.id === currentComponent);

  return (
    <div className="bg-white relative ron mt-[-50px] mx-auto px-5 xl:pl-18 py-5 pr-4 w-4/5 md:w-[95%] xl:w-4/5  md:h-6/12 border border-white flex flex-col lg:flex-row items-center justify-between shadow-2xl" style={{ zIndex: '10 !important' }}>
     <div className="flex flex-col gap-4 py-3 pb-5 lg:pb-3 text-center w-full lg:w-1/4 xl:w-2/4">
        <h3
          onClick={() => handleCurrentComponent(1)}
          className="border-b border-b-[#DDDDDD] px-5 w-full  justify-center lg:justify-start xl:w-4/5 text-base font-bold flex gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="mr-4 w-8 h-8" src={i1} alt="" />
          <span className="text-sm md:text-base"> 

          MOST POPULAR DESTINATIONS
          </span>
        </h3>
        <h3
          onClick={() => handleCurrentComponent(2)}
          className="border-b border-b-[#DDDDDD] px-5 w-full xl:w-4/5 text-base font-bold flex  justify-center lg:justify-start gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="mr-4 w-8 h-8" src={i2} alt="" />
          <span className="text-sm md:text-base"> 
 
          BUDGET FRIENDLY PACKAGES
          </span>
        </h3>
        <h3
          onClick={() => handleCurrentComponent(3)}
          className="border-b border-b-[#DDDDDD] px-5 w-full xl:w-4/5 text-base font-bold flex  justify-center lg:justify-start gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="mr-4 w-8 h-8" src={i3} alt="" />
          <span className="text-sm md:text-base"> 

          SATISFACTION GAURANTEED
          </span>
        </h3>
        <h3
          onClick={() => handleCurrentComponent(4)}
          className="border-b border-b-[#DDDDDD] px-5 w-full xl:w-4/5 text-base font-bold flex  justify-center lg:justify-start gap-2 py-3 hover:text-[#F1582B] cursor-pointer"
        >
          <img className="mr-4 w-8 h-8" src={i4} alt="" />
          <span className="text-sm md:text-base"> 

          EXPERIENCED TRAVEL EXPERTS
          </span>
        </h3>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-3/4 xl:w-2/4 flex flex-col md:flex-row gap-8 items-center justify-between mt-4 md:mt-0">
      
        
          <div className="flex flex-col md:flex-row gap-8  justify-center">
            <img
              className="border border-white rounded-3xl w-full md:w-70 h-82"
              src={i5}
              alt=""
            />
            <div className="text-center relative md:text-left">
              <h3 className="font-bold mt-2 text-[#f1582b]">{selectedComponent.title}</h3>
              <p className="mb-2 mt-5">{selectedComponent.description}</p>
              {selectedComponent.locations.map((location, index) => (
              <p key={index} className="flex">
                <BiChevronsRight className="mt-1" />
                {location}
              </p>
            ))}
            <div className="mt-10 mb-4 text-start ">

            <NavLink className="bg-[#F1582B]  md:absolute bottom-3 px-3 py-2 rounded-full text-white">
              {selectedComponent.buttonText}
            </NavLink>
            </div>
            </div>
          </div>
        </div>
     
    </div>
  );
};

export default HighIndexComponent;
