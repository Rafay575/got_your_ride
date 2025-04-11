

import React from "react";
import { HiCalendar } from "react-icons/hi";

const Dropdown = ({ placeholder = "Select date", value, onChange }) => {
  return (
    <div className="relative max-w-sm">
      {/* Icon */}
      <div className="absolute inset-y-0 start-0 flex items-center ps-3.5 pointer-events-none">
        <HiCalendar className="w-4 h-4 text-gray-500 dark:text-gray-400" />
      </div>

      {/* Input */}
      <input
        type="text"
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      />
    </div>
  );
};

export default Dropdown;
