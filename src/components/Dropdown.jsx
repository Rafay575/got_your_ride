import React, { useState } from "react";

const Dropdown = () => {
  const [selectedDate, setSelectedDate] = useState("");

  const handleDateChange = (e) => {
    setSelectedDate(e.target.value);
  };

  return (
    <div className="w-full">
      {/* The date picker */}
      <input
        type="date"
        value={selectedDate}
        onChange={handleDateChange}
        className="w-full p-2 border-2 border-gray-300 rounded-md focus:outline-none focus:border-black"
      />
    </div>
  );
};

export default Dropdown;

