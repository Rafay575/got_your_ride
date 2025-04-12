import React from "react";
import { FaCheck } from "react-icons/fa";

// Array of options for the checkboxes
const options = [
  { id: "a", label: "jkj" },
  { id: "b", label: "Oshino Hakkai" },
  { id: "c", label: "Oishi Park" },
  { id: "d", label: "Kitaguchi-hongu Fuji" },
  // For this option, we want the check icon to appear only when checked:
  { id: "e", label: "Sengen Shrine" }
];

const CheckBox = () => {
  return (
    <div className="mt-2">
      {options.map((option) => (
        <div key={option.id} className="flex gap-2 mt-3">
          <label htmlFor={option.id} className="cursor-pointer relative">
            <input
              type="checkbox"
              id={option.id}
              className={`appearance-none h-5 w-5 border rounded-full border-[#f1582b] cursor-pointer ${
                option.special ? "peer" : ""
              }`}
            />
            {option.special ? (
              // For the special option, the icon is hidden until the input is checked
              <FaCheck className="hidden absolute left-[3px] top-[4px] h-[14px] w-[14px] text-[#f1582b] transition peer-checked:block" />
            ) : (
              // For others, the icon is always visible
              <FaCheck className="absolute left-[3px] top-[4px] h-[14px] w-[14px] text-[#f1582b] transition" />
            )}
          </label>
          <p className="text-sm">{option.label}</p>
        </div>
      ))}
    </div>
  );
};

export default CheckBox;
