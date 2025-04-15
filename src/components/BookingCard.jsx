import React from "react";
import { FaStar, FaInfoCircle } from "react-icons/fa";

const BookingCard = ({ bookingInfo }) => {
  // Convert the bookingInfo.date to a Date object if needed.
  const bookingDate = bookingInfo.date ? new Date(bookingInfo.date) : new Date();
  
  // Format the date (e.g., "Thursday, March 20, 2025")
  const formattedDate = bookingDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const plusOneDate = new Date(bookingDate);
  plusOneDate.setDate(plusOneDate.getDate() + 1);
  // Format the time (e.g., "10:00 AM")
  const formattedPlusOneDate = plusOneDate.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric"
  });
  const formattedTime = bookingDate.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit"
  });
  
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
      {/* Booking Title */}
      <h3 className="font-semibold text-sm mt-3 p-4 leading-snug mb-2">
        {bookingInfo.title}
      </h3>
      
      {/* Stars (static rating) */}
      <div className="flex px-4 space-x-1 mb-4">
        {[...Array(4)].map((_, i) => (
          <FaStar key={i} className="text-orange-500 text-sm" />
        ))}
      </div>
      
      {/* Booking Details */}
      <div className="text-xs px-4 mb-5 text-gray-600 space-y-2">
        <p>
          <strong>Date:</strong> {formattedDate}
        </p>
        <p>
          <strong>Time:</strong> {formattedTime}
        </p>
        <p>
          <strong>Travel:</strong> {bookingInfo.adults} Adult{bookingInfo.adults > 1 ? "s" : ""}
        </p>
        <div className="flex items-start gap-2 mt-2 text-red-500 bg-red-50 px-2 py-1 rounded-md border border-gray-200 text-[11px]">
          <FaInfoCircle className="mt-0.5" />
          <span>
            Free Cancellation before {formattedTime} on{" "}
            {formattedPlusOneDate} (Tour Local Time).
          </span>
        </div>
      </div>
      
      {/* Total Price */}
      <div className="mt-4 p-4 bg-[#ddd] pt-2 flex justify-between items-center">
        <span className="text-sm font-semibold">Total</span>
        <span className="text-base font-semibold text-gray-800">
          ${parseInt(bookingInfo.price.primary) * bookingInfo.adults}
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
