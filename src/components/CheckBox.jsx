import { div } from "motion/react-client";
import React from "react";
import { FaCheck } from "react-icons/fa"; // Importing the check icon

const CheckBox = () => {
  return (
    <div className="mt-2">
      <div className="flex gap-2 mt-5">
        <label htmlFor="1" className="cursor-pointer relative">
          <input
            type="checkbox"
            id="a"
            className="appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer"
          />
          <FaCheck className="h-[14px] w-[14px] text-[#f1582b] left-[3px] top-[4px] absolute transition" />
        </label>
        <p className="text-sm">jkj</p>
      </div>
      <div className="flex gap-2 mt-3">
        <label htmlFor="1" className="cursor-pointer relative">
          <input
            type="checkbox"
            id="b"
            className="appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer"
          />
          <FaCheck className="h-[14px] w-[14px] text-[#f1582b] left-[3px] top-[4px] absolute transition" />
        </label>
        <p className="text-sm">Oshino Hakkai</p>
      </div>
      <div className="flex gap-2 mt-3">
        <label htmlFor="1" className="cursor-pointer relative">
          <input
            type="checkbox"
            id="c"
            className="appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer"
          />
          <FaCheck className="h-[14px] w-[14px] text-[#f1582b] left-[3px] top-[4px] absolute transition" />
        </label>
        <p className="text-sm">Oishi Park</p>
      </div>
      <div className="flex gap-2 mt-3">
        <label htmlFor="1" className="cursor-pointer relative">
          <input
            type="checkbox"
            id="d"
            className="appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer"
          />
          <FaCheck className="h-[14px] w-[14px] text-[#f1582b] left-[3px] top-[4px] absolute transition" />
        </label>
        <p className="text-sm">Kitaguchi-hongu Fuji</p>
      </div>
      <div className="flex gap-2 mt-3">
        <label htmlFor="1" className="cursor-pointer relative peer">
          <input
            type="checkbox"
            id="e"
            className="appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer"
          />
          <FaCheck className="h-[14px] w-[14px] text-[#f1582b] left-[3px] top-[4px] hidden absolute transition peer-checked:block" />
        </label>
        <p className="text-sm">Sengen Shrine</p>
      </div>
    </div>
  );
};

export default CheckBox;
