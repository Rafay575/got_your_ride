import React from 'react';
import { FaFacebookF, FaWhatsapp, FaInstagram, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SocialIcons = () => {
  return (
    <div className="flex space-x-2">
      <Link to="https://www.facebook.com/gotyourride">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaFacebookF />
      </div>
      </Link>
      <Link to="https://www.instagram.com/gotyourride/">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaWhatsapp />
      </div>
      </Link>
      <Link to="https://www.instagram.com/gotyourride/">
      <div className="w-6 h-6 flex items-center justify-center rounded-full bg-pink-100 text-orange-500 text-sm hover:opacity-80 cursor-pointer transition">
        <FaInstagram />
      </div>
      </Link>
      
    </div>
  );
};

export default SocialIcons;
