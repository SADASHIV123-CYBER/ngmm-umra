import { useLocation, Link } from "react-router-dom";
import { FaHome, FaCalendarAlt, FaUsers, FaImages, FaPhoneAlt, FaVideo, FaInfoCircle, FaClock } from "react-icons/fa";
import ngmmImage from "../assets/ngmm.jpg";

// Navbar links array
const links = [
  { name: "मुख्यपृष्ठ", path: "/", icon: <FaHome /> },
  { name: "कार्यक्रम", path: "/events", icon: <FaCalendarAlt /> },
  { name: "सदस्य", path: "/members", icon: <FaUsers /> },
  { name: "गॅलरी", path: "/gallery", icon: <FaImages /> },
  { name: "संपर्क", path: "/contact", icon: <FaPhoneAlt /> },
  { name: "माहिती", path: "/info", icon: <FaInfoCircle /> },
  { name: "वेळापत्रक", path: "/timetable", icon: <FaClock /> }, // NEW TimeTable link
  { name: "इंस्टा लाईव्ह", path: "/instaLive", icon: <FaVideo /> },
  { name: "युट्यूब लाईव्ह", path: "/ytLive", icon: <FaVideo /> },
];

export default function Navbar() {
  const location = useLocation();

  return (
    <header className="bg-white/95 backdrop-blur-md sticky top-0 z-50 shadow-md border-b border-orange-300">
      <div className="max-w-6xl mx-auto px-4 flex items-center justify-between h-14 sm:h-16">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2 sm:gap-3">
          <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-gradient-to-r from-orange-400 to-pink-500 grid place-items-center text-white font-bold shadow-md">
            <img src={ngmmImage} alt="Logo" className="w-8 h-8 sm:w-10 sm:h-10 rounded-full" />
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
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex items-center gap-1 px-4 py-2 rounded-xl font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-lg scale-105"
                    : "hover:bg-orange-100 text-gray-700 hover:scale-105"
                }`}
              >
                {link.icon} {link.name}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Horizontal Scroll Menu */}
        <div className="flex md:hidden gap-1 sm:gap-2 overflow-x-auto py-2 px-1 sm:px-2 scrollbar-hide">
          {links.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                className={`flex flex-col items-center justify-center min-w-max px-3 py-2 rounded-xl font-medium text-xs sm:text-sm transition-all duration-200 ${
                  isActive
                    ? "bg-gradient-to-r from-orange-400 to-pink-500 text-white shadow-md scale-105"
                    : "bg-white hover:bg-orange-100 text-gray-700 hover:scale-105"
                }`}
              >
                <span className="text-base sm:text-lg">{link.icon}</span>
                <span>{link.name}</span>
              </Link>
            );
          })}
        </div>
      </div>
    </header>
  );
}
