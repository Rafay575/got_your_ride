"use client"
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { HiCalendar } from "react-icons/hi";
import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ placeholder = "Select date" }) => {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="relative w-full">
      {/* Calendar Icon */}
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <HiCalendar className="w-4 h-4 text-gray-500 " />
      </div>
      {/* React DatePicker */}
      <DatePicker
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        placeholderText={placeholder}
        className="bg-gray-200 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5  "
      />
    </div>
  );
};

export default Dropdown;
