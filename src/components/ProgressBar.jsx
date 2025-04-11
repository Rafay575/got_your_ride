import React from "react";
import Star from "./Star";

const ProgressBar = () => {
  return (
    <div className=" w-4/5 px-4 mx-auto">
      <h1 className="font-bold text-2xl mb-5">Customer Reviews</h1>

      <div className="flex flex-col  md:flex-row justify-between items-start gap-6 md:gap-12">
        {/* Rating Summary */}
        <div className="flex flex-col items-center justify-center w-full md:w-2/12">
          <h1 className="font-extrabold text-3xl md:text-4xl">4.3</h1>
          <Star />
          <p className="text-sm text-gray-500">35K Rating</p>
        </div>

       
        <div className="hidden md:block w-px h-40 bg-gray-300"></div>

        <div className="w-full flex flex-col gap-3">
          {[ 
            { label: "5.0", width: "w-4/5", text: "14K Reviews" },
            { label: "4.0", width: "w-3/5", text: "10K Reviews" },
            { label: "3.0", width: "w-2/5", text: "7K Reviews" },
            { label: "2.0", width: "w-3/5", text: "3K Reviews" },
            { label: "1.0", width: "w-1/5", text: "1K Reviews" },
          ].map((item, index) => (
            <div key={index} className="flex items-center gap-3">
              <div className="flex-1 bg-gray-300 rounded-lg h-3">
                <div className={`bg-[#f1582b] h-full rounded-lg ${item.width}`}></div>
              </div>
              <div className="flex-shrink-0 text-right min-w-[90px]">
                <span className="font-bold text-sm mr-2">{item.label}</span>
                <span className="text-xs text-gray-600">{item.text}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
