import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaUsers, FaImages, FaPhoneAlt } from "react-icons/fa";

export default function Navbar() {
  const location = useLocation();

  const links = [
    { name: "मुख्यपृष्ठ", path: "/", icon: <FaHome /> },
    { name: "कार्यक्रम", path: "/events", icon: <FaCalendarAlt /> },
    { name: "सदस्य", path: "/members", icon: <FaUsers /> },
    { name: "गॅलरी", path: "/gallery", icon: <FaImages /> },
    { name: "संपर्क", path: "/contact", icon: <FaPhoneAlt /> },
  ];

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-sm border-b border-orange-300">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-12 sm:h-14">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 grid place-items-center text-white font-bold text-lg shadow-md">
            <img
              src="https://kiaraastrology.in/wp-content/uploads/2019/07/ganpati-png-hd-pyrite-club-images-lord-ganesha-sri-ganesh-hd-png-1600-768x756.png"
              alt="Logo"
              className="w-8 h-8 sm:w-9 sm:h-9 rounded-full"
            />
          </div>
          <div>
            <div className="font-bold text-sm sm:text-base text-orange-700 leading-tight">
              नवं युवक श्री गणेश मित्र मंडळ
            </div>
            <div className="text-[10px] sm:text-xs text-gray-600 leading-tight">उमरा</div>
          </div>
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex gap-2 sm:gap-3 items-center text-sm sm:text-base">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex items-center gap-1 px-3 py-1 sm:px-4 sm:py-2 rounded-xl transition-all duration-200 font-medium ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md scale-105"
                  : "hover:bg-orange-100 text-gray-700 hover:scale-105"
              }`}
            >
              {link.icon} {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Horizontal Menu */}
        <div className="flex md:hidden gap-1 sm:gap-2 overflow-x-auto py-1 px-1 sm:px-2 scrollbar-hide">
          {links.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`flex flex-col items-center justify-center min-w-max px-2 py-1 sm:px-3 sm:py-2 rounded-xl transition-all duration-200 text-xs sm:text-sm font-medium ${
                location.pathname === link.path
                  ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md scale-105"
                  : "bg-white hover:bg-orange-100 text-gray-700 hover:scale-105"
              }`}
            >
              <span className="text-base sm:text-lg">{link.icon}</span>
              <span>{link.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </header>
  );
}
