import React from "react";
import { CiHeart } from "react-icons/ci";


import i7 from "../assets/clock-icon-01.png";
import i8 from "../assets/user-icon-01.png";
import image2 from "../assets/image-1.png";
import image3 from "../assets/image-2.png";
import image4 from "../assets/image-3.png";
import image5 from "../assets/image-4.png";
import image6 from "../assets/image-5.png";
import image7 from "../assets/image-6.png";


const DynamicGrid = () => {
  // Define an array of content to map through dynamically
  const data = [
    {
      id: 1,
      image: image2,
      title: "Private Mountain Fuji Sightseeing Tour",
      subtitle: "Mt. Fuji 5th Station",
      price: "$300",
      originalPrice: "$500",
      duration: "10 Hours",
      guests: "1-6 Guests",
    },
    {
      id: 2,
      image: image3,
      title: "Private Mountain Fuji Sightseeing Tour",
      subtitle: "Chureito Pagoda",
      price: "$300",
      originalPrice: "$500",
      duration: "10 Hours",
      guests: "1-6 Guests",
    },
    {
      id: 3,
      image: image4,
      title: "Private Mountain Fuji Sightseeing Tour",
      subtitle: "Laka Kawagochiko",
      price: "$300",
      originalPrice: "$500",
      duration: "10 Hours",
      guests: "1-6 Guests",
    },
    {
      id: 4,
      image: image5,
      title: "Private Mountain Fuji Sightseeing Tour",
      subtitle: "Osaka Castle",
      price: "$300",
      originalPrice: "$500",
      duration: "10 Hours",
      guests: "1-6 Guests",
    },
   
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2   xl:grid-cols-4 w-4/5 mx-auto gap-5">
    {data.map((item) => (
      <div
        key={item.id}
        className="rounded-2xl shadow-2xl hover:shadow-[var(--custom-property)]"
      >
        {/* image */}
        <div className="relative">
          <img src={item.image} alt={item.title} />
          <div className="absolute inset-0 top-6">
            <div className="flex justify-between items-center">
              <div className="bg-[#F1582B] px-3 py-2 h-9 rounded-full ml-6 text-white cursor-pointer">
                Featured
              </div>
              <CiHeart
                size={30}
                className="bg-white text-[#F1582B] mr-6 rounded-full p-1 cursor-pointer hover:bg-[#F1582B] hover:text-white"
              />
            </div>
          </div>
        </div>

        {/* Text Part */}
        <div className="px-6 pb-6">
          <div className="flex justify-between py-2 text-[11px] font-semibold">
            <p className="flex gap-2">
              <img src={i7} className="w-[13px] h-[13px] mt-[2px]" alt="" />
              {item.duration}
            </p>
            <p className="flex gap-2">
              <img src={i8} className="w-[11px] h-[11px] mt-[2px]" alt="" />
              {item.guests}
            </p>
          </div>
          <p className="font-semibold text-xl ">{item.title}</p>
          <p className="pl-4 py-2">{item.subtitle}</p>
          <p className="text-[11px]">
            From &nbsp;&nbsp;<span className="font-extrabold ">{item.price} - </span>
            <span className="text-[#FF0303] font-semibold">{item.originalPrice}</span>
          </p>
        </div>
      </div>
    ))}
  </div>
  );
};

export default DynamicGrid;
