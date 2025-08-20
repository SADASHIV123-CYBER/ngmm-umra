import React, { useState } from "react";

import baithakImg from '../assets/baithak.jpg';
import ganesh2025 from '../assets/ganesh2025.jpg';
import ganesh2024 from '../assets/ganesh2024.jpg';
import banner2025 from '../assets/banner2025.jpg';

const galleryData = {
  2025: [
    { id: 1, title: "2025 ची बैठक", image: baithakImg },
    { id: 2, title: "2025 गणेश मूर्ती", image: ganesh2025 },
  ],
  2024: [
    { id: 3, title: "2024 गणेश मूर्ती", image: ganesh2024 },
  ],
};

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);

  const openModal = (photo) => setSelectedPhoto(photo);
  const closeModal = () => setSelectedPhoto(null);

  return (
    <section className="min-h-screen bg-gradient-to-b from-yellow-50 to-orange-100">
      {/* Hero Banner */}
      <div className="relative w-full h-64 sm:h-96 md:h-[500px] lg:h-[600px]">
        <img
          src={banner2025}
          alt="2025 Banner"
          className="w-full h-full object-cover"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/25 to-black/20 flex flex-col justify-center items-center px-4 text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-white drop-shadow-lg">
            2025 गणपती उत्सव
          </h1>
          <p className="mt-2 sm:mt-4 text-sm sm:text-base md:text-lg text-white/90">
            आमच्या फोटो गॅलरी आणि इव्हेंट्स बघा
          </p>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12">
        {Object.keys(galleryData).map((year) => (
          <div key={year} className="mb-12">
            <h2 className="text-2xl sm:text-3xl font-semibold text-orange-800 mb-6">
              {year} चे फोटो
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
              {galleryData[year].map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
                  onClick={() => openModal(photo)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-48 sm:h-56 md:h-64 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-orange-800 font-semibold text-center">
                      {photo.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedPhoto && (
          <div
            className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4 sm:p-6"
            onClick={closeModal}
          >
            <div
              className="bg-white rounded-2xl max-w-full sm:max-w-lg w-full relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={closeModal}
                className="absolute top-2 right-2 text-white bg-red-500 hover:bg-red-600 rounded-full w-10 h-10 flex items-center justify-center text-2xl shadow-lg"
                aria-label="Close"
              >
                ✖
              </button>

              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-60 sm:h-80 md:h-96 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h4 className="text-lg sm:text-xl md:text-2xl font-bold text-orange-800">
                  {selectedPhoto.title}
                </h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
