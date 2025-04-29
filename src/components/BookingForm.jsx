import React, { useState, useEffect } from "react";
import BookingCard from "./BookingCard";
import { FaInfoCircle } from "react-icons/fa";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import waveBG from "../assets/animation.png"; // Example wave BG image
import { baseUrl } from "../api/baseUrl";
const BookingForm = ({ bookingInfo }) => {
  // Billing form state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName]   = useState("");
  const [email, setEmail]         = useState("");
  const [phone, setPhone]         = useState("");
  const [street, setStreet]       = useState("");
  const [city, setCity]           = useState("");
  const [stateName, setStateName] = useState("");
  const [zipCode, setZipCode]     = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  // State for controlling the animation and its type ("success" or "error")
  const [showAnimation, setShowAnimation] = useState(false);
  const [animationType, setAnimationType] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const payload = {
      firstName,
      lastName,
      email,
      phone,
      street,
      city,
      state: stateName,
      zipCode,
      termsAccepted,
      bookingTitle: bookingInfo.title,
      bookingDate: bookingInfo.date, // Ensure this is a valid date string/ISO
      adults: bookingInfo.adults,
      placeNumber: bookingInfo.placeNumber,
      totalPrice: bookingInfo.price,
    };
    try {
      setIsLoading(true);
      const response = await fetch(`${baseUrl}/bookings`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
    
      if (response.ok) {
        const data = await response.json();
        console.log("Booking saved", data);
    
        // Handle success toast
        toast.success("Booking saved successfully!", {
          // onClose: () => {
          //   // Start the car animation after a 2s delay
          //   setTimeout(() => {
          //     setAnimationType("success");
          //     setShowAnimation(true);
          //   }, 2000);
          // },
        });
    
        // Redirect to PayPal after 3s delay
        setTimeout(() => {
          if (data.approvalUrl) {
            window.location.href = data.approvalUrl; // Redirect to PayPal approval URL
          }
        }, 3000);
        
      } else {
        const errorData = await response.json();
        console.error("Error saving booking", errorData);
        toast.error("Error saving booking. Please try again.", {
          // onClose: () => {
          //   setTimeout(() => {
          //     setAnimationType("error");
          //     setShowAnimation(true);
          //   }, 2000);
          // },
        });
      }
      setIsLoading(false);
    } catch (error) {
      console.error("Error connecting to the server", error);
      setIsLoading(false);
      toast.error("Error connecting to the server", {
        // onClose: () => {
          //   setTimeout(() => {
            //     setAnimationType("error");
            //     setShowAnimation(true);
            //   }, 2000);
            // },
      });
    }
  };    

  useEffect(() => {
    if (showAnimation && animationType === "success") {
    
      return () => clearTimeout(timer);
    }
  }, [showAnimation, animationType]);

  return (
    <>
     {!showAnimation && (
         <div className=" flex max-w-5xl mx-auto justify-center  mt-28 w-full py-10 px-5 xl:px-0 relative">
         {/* Toast container for notifications */}
         <ToastContainer />
   
         <form
           className="flex flex-col justify-between lg:flex-row gap-8 w-full"
           onSubmit={handleSubmit}
         >
           {/* Left Column – Billing Address */}
           <div className="w-full lg:w-2/3 bg-white p-6 rounded-lg shadow-sm">
             <h2 className="text-lg font-semibold mb-10">Billing Address</h2>
             <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
               <input
                 type="text"
                 placeholder="First Name"
                 className="input"
                 required
                 value={firstName}
                 onChange={(e) => setFirstName(e.target.value)}
               />
               <input
                 type="text"
                 placeholder="Last Name"
                 required
                 className="input"
                 value={lastName}
                 onChange={(e) => setLastName(e.target.value)}
               />
               <input
                 type="email"
                 required
                 placeholder="Email Address"
                 className="input col-span-1 sm:col-span-2"
                 value={email}
                 onChange={(e) => setEmail(e.target.value)}
               />
               <div className="flex col-span-1 sm:col-span-2 gap-2">
                 <select className="input w-24">
                   <option value="+81">+81</option>
                 </select>
                 <input
                   type="number"
                   required
                   placeholder="Phone Number"
                   className="input flex-1"
                   value={phone}
                   onChange={(e) => setPhone(e.target.value)}
                 />
               </div>
               <input
                 type="text"
                 placeholder="Street Address"
                 required
                 className="input col-span-1 sm:col-span-2"
                 value={street}
                 onChange={(e) => setStreet(e.target.value)}
               />
               <input
                 type="text"
                 required
                 placeholder="City"
                className="input col-span-1 "

                 value={city}
                 onChange={(e) => setCity(e.target.value)}
               />
              
               <input
                 type="number"
                 required
                 placeholder="Zip Code"
                 className="input col-span-1 "
                 value={zipCode}
                 onChange={(e) => setZipCode(e.target.value)}
               />
             </div>
            
             <button
               type="submit"
               className="mt-6 w-full bg-orange-600 text-white cursor-pointer px-6 py-2 rounded-md hover:bg-orange-700 transition"
             >
               {isLoading ? "Submitting..." : "Submit"}
             </button>
           </div>
   
           {/* Right Column – Booking Summary */}
           <div className="w-full lg:w-1/3 space-y-6">
             <div className="space-y-6 max-w-full">
               <div className="bg-white border border-gray-200 rounded-lg p-4 shadow-sm text-xs text-gray-700">
                 <h4 className="text-lg mb-6 font-semibold">Book With Confidence</h4>
                 <ul className="space-y-3">
                   <li className="flex items-start gap-2">
                     <FaInfoCircle className="text-orange-500 mt-0.5" />
                     <div>
                       <strong>Bring Copies Of Your Passport</strong>
                       <p className="text-xs">
                         Some tourist places might ask for your passport.
                       </p>
                     </div>
                   </li>
                   <li className="flex items-start gap-2">
                     <FaInfoCircle className="text-orange-500 mt-0.5" />
                     <div>
                       <strong>Register With Your Embassy</strong>
                       <p className="text-xs">
                         Stay in touch in case of emergencies.
                       </p>
                     </div>
                   </li>
                   <li className="flex items-start gap-2">
                     <FaInfoCircle className="text-orange-500 mt-0.5" />
                     <div>
                       <strong>Always Have Local Cash</strong>
                       <p className="text-xs">
                         Having local currency is advisable.
                       </p>
                     </div>
                   </li>
                 </ul>
               </div>
               <BookingCard bookingInfo={bookingInfo} />
               
             </div>
           </div>
         </form>
   
         {/* Animation overlay: A car moves from right to left */}
       </div>
     ) }
  
      {showAnimation && (
      <div className="relative w-screen min-h-screen">
      {/* Wave background image */}
      <div
        className="absolute inset-0 bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${waveBG})` }}
      ></div>

      {/* Content Container (if you need something else in the center) */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <h1 className="text-3xl font-bold">Your Main Content Here</h1>
      </div>

      {/* Car Animation Overlay */}
      {showAnimation && (
        <div className="absolute inset-0 flex items-center h-full z-20">
          <div className="car-animation ml-[-15%]">
            <span style={{ fontSize: "30rem" }}>🚗</span>
          </div>
        </div>
      )}

      {/* Animation Keyframes */}
      <style>{`
        @keyframes carMove {
          0% { transform: translateX(0); }
          100% { transform: translateX(150vw); }
        }
        .car-animation {
          animation: carMove 3s linear forwards;
        }
      `}</style>
    </div>
      )}

      
    </>

  );
};

export default BookingForm;
