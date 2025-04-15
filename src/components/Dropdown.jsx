"use client"
import React, { useEffect } from "react";
import DatePicker from "react-datepicker";
import { HiCalendar } from "react-icons/hi";
import "react-datepicker/dist/react-datepicker.css";

const Dropdown = ({ selectedDate, setSelectedDate }) => {
  // Create a default date one week from now if selectedDate is not provided.
  const defaultDate = new Date();
  defaultDate.setDate(defaultDate.getDate() + 7);
  useEffect(() => {
    setSelectedDate(defaultDate);
  },[])
  return (
    <div className="relative w-full">
      {/* Calendar Icon */}
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <HiCalendar className="w-4 h-4 text-gray-500" />
      </div>
      {/* React DatePicker with Time Picker enabled */}
      <DatePicker
        selected={selectedDate }
        onChange={(date) => setSelectedDate(date)}
        placeholderText="Select a date & time"
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={60} // Time selection at one-hour intervals.
        timeCaption="Time"
        dateFormat="MMMM d, yyyy h:mm aa"
        className="bg-gray-200 border border-gray-300 text-gray-900 outline-none text-sm rounded-lg focus:ring-orange-500 focus:border-orange-500 block w-full ps-10 p-2.5"
        minDate={new Date()} // Disallow selecting previous dates.
      />
    </div>
  );
};

export default Dropdown;
