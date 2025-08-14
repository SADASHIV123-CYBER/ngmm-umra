import React from "react";
import { FaInstagram } from "react-icons/fa";

export default function instaLive() {
 const instagramLiveUrl = "https://www.instagram.com/techsniper.x/live";
// Replace with your Instagram profile link

  return (
    <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-pink-100 via-orange-100 to-yellow-100 px-4 text-center">
      <h1 className="text-4xl sm:text-5xl font-bold text-orange-700 mb-6">
        लाईव्ह पाहण्यासाठी तयार व्हा! 🎥
      </h1>
      <p className="text-sm sm:text-base text-gray-700 mb-8 max-w-md">
        आमच्या Instagram प्रोफाइलवर होणारा लाईव्ह इव्हेंट पाहण्यासाठी खालील बटणावर क्लिक करा.
      </p>
      <a
        href={instagramLiveUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2 bg-gradient-to-r from-pink-400 to-orange-500 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
      >
        <FaInstagram className="text-2xl" /> लाईव्ह बघा
      </a>
      <p className="text-xs sm:text-sm text-gray-500 mt-6">
        नोट: Instagram लाईव्ह पाहण्यासाठी वापरकर्त्यांना Instagram वर लॉगिन करणे आवश्यक आहे.
      </p>
    </section>
  );
}
