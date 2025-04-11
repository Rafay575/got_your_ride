import React from "react";
import { FaCcVisa, FaCcMastercard } from "react-icons/fa";
import { FiInfo } from "react-icons/fi";
import { MdOutlineKeyboardArrowDown } from "react-icons/md";
import { FaStar, FaInfoCircle } from "react-icons/fa";
const BookingForm = () => {
  return (
    <div className="bg-gray-50 flex justify-center min-h-screen mt-28 w-full  py-10 ">
      <div className=" flex flex-col justify-between  lg:flex-row gap-8">
        {/* Left Column */}
        <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
      {/* Payment Method */}
     
      {/* Billing Address */}
      <h2 className="text-lg font-semibold mb-10">Billing Address</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <input type="text" placeholder="First Name" className="input" />
        <input type="text" placeholder="Last Name" className="input" />
        <input type="email" placeholder="Email Address" className="input col-span-1 sm:col-span-2" />

        <div className="flex col-span-1 sm:col-span-2 gap-2">
          <select className="input w-24">
            <option value="+2">+2</option>
          </select>
          <input type="text" placeholder="Phone Number" className="input flex-1" />
        </div>

        <input type="text" placeholder="Street Address" className="input col-span-1 sm:col-span-2" />
        <input type="text" placeholder="City" className="input" />
        <select className="input">
          <option value="">State</option>
        </select>
        <input type="text" placeholder="Zip Code" className="input col-span-1 sm:col-span-2" />
      </div>

      {/* Terms and Conditions */}
      <div className="flex items-center mt-4">
        <input type="checkbox" id="terms" />
        <label htmlFor="terms" className="ml-2 text-sm text-gray-700">
          I accept Terms and Conditions
        </label>
      </div>

      {/* Submit Button */}
      <button className="mt-6 w-full  bg-orange-600 text-white px-6 py-2 rounded-md hover:bg-orange-700 transition">
        BOOK NOW
      </button>
    </div>

        {/* Right Column */}
        <div className="w-full lg:w-1/3 space-y-6">
          {/* Booking Summary */}
          
    <div className="space-y-6 max-w-xs">
      {/* Booking Summary */}
   
     
      <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-xs text-gray-700">
        <h4 className="text-lg mb-6 font-semibold ">Book With Confidence</h4>
        <ul className="space-y-3">
          <li className="flex items-start gap-2">
            <FaInfoCircle className="text-orange-500 mt-0.5" />
            <div>
              <strong>Bring Copies Of Your Passport</strong>
              <p className="text-xs text-muted">
                Having passport is a good practice. Some tourist places might ask you for passport.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaInfoCircle className="text-orange-500 mt-0.5" />
            <div>
              <strong>Register With Your Embassy</strong>
              <p className="text-xs text-muted">
                To get in touch with embassy is also necessary in case of any mishaps.
              </p>
            </div>
          </li>
          <li className="flex items-start gap-2">
            <FaInfoCircle className="text-orange-500 mt-0.5" />
            <div>
              <strong>Always Have Local Cash</strong>
              <p className="text-xs text-muted">
                As per the fact that local cash is acceptable so it is better to have proper currency.
              </p>
            </div>
          </li>
        </ul>
      </div>
      <div className="bg-white border border-gray-200 rounded-lg  shadow-sm">
        <h3 className="font-semibold text-sm mt-3  p-4 leading-snug mb-2">
          Relax And Snorkel On Koh Racha Yai And On Banana Beach Koh Hey Island
        </h3>
        {/* Stars */}
        <div className="flex px-4 space-x-1 mb-4">
          {[...Array(4)].map((_, i) => (
            <FaStar key={i} className="text-orange-500 text-sm" />
          ))}
        </div>
        <div className="text-xs px-4 mb-5  text-gray-600 space-y-2">
          <p>
            <strong>Date:</strong> Thursday, March 20, 2025
          </p>
          <p>
            <strong>Time:</strong> 10:00 AM
          </p>
          <p>
            <strong>Travel:</strong> 2 Adults
          </p>
          <div className="flex items-start gap-2 mt-2 text-red-500 bg-red-50 px-2 py-1 rounded-md border border-gray-200 text-[11px]">
            <FaInfoCircle className="mt-0.5" />
            <span>
              Free Cancellation before 10:00 AM on March 19 (Tour Local Time).
            </span>
          </div>
        </div>
        {/* Total */}
        <div className="mt-4 p-4  bg-[#ddd] pt-2 flex justify-between items-center">
          <span className="text-sm font-semibold">Total</span>
          <span className="text-base font-semibold text-gray-800">$140.38</span>
        </div>
      </div>

    </div>
        </div>
      </div>
    </div>
  );
};

export default BookingForm;
