import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';

const SocialIcons = () => {
  return (
    <div className="flex space-x-2">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaFacebookF />
      </div>
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaWhatsapp />
      </div>
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaInstagram />
      </div>
      
    </div>
  );
};

export default SocialIcons;
