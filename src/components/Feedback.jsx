import React, { useState } from "react";
import { InputPhoneCountryCode } from "./InputPhoneCountryCode";
import AddRating from "../components/AddRating";

const Feedback = () => {
  const [show, setShow] = useState(false);

  const handleShow = () => {
    setShow(!show);
  };

  return (
    <div className="w-full max-w-3xl mx-auto p-5">
      {/* Button */}
      <div
        onClick={handleShow}
        className={`bg-[#F1582B] w-full md:w-1/2 px-6 py-2 rounded-full text-white mx-auto mb-5 ${
          show ? "hidden" : "block"
        }`}
      >
        <h1 className="text-center">Give Feedback</h1>
      </div>

      {show && (
        <div className="w-full ">
          <h1 className="w-full text-center mb-5 font-semibold text-xl sm:text-2xl">
            Give Us Feedback
          </h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
            {/* First Name and Last Name */}
            <div>
              <p>First Name</p>
              <input
                type="text"
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>
            <div>
              <p>Last Name</p>
              <input
                type="text"
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>

            {/* Email Input */}
            <div className="col-span-1 sm:col-span-2">
              <p>Email</p>
              <input
                type="email"
                className="border border-black/20 rounded-sm w-full h-10 p-2"
              />
            </div>

            {/* Phone Input */}
            <div className="col-span-1 sm:col-span-2">

            <InputPhoneCountryCode />
            </div>

            {/* Message */}
            <div className="col-span-1 sm:col-span-2">
              <p>Message</p>
              <textarea
                placeholder="Type your message here..."
                className="w-full p-3 border border-black/20 h-32 rounded-sm focus:ring-blue-500 placeholder:text-gray-400 resize-none"
              />
            </div>

            {/* Rating */}
            <AddRating />

            {/* Submit Button */}
            <div className="text-center mt-5 sm:col-span-2">
              <button
                onClick={handleShow}
                className="text-white px-6 py-2 rounded-full bg-[#F1582B]"
              >
                Submit
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Feedback;
