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
    <section className="py-12 sm:py-16 bg-gradient-to-b from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-orange-700 mb-8 sm:mb-12">
          आमचा फोटो गॅलरी 📸
        </h2>

        {/* 2025 Banner */}
        <div className="mb-8 sm:mb-12 rounded-xl overflow-hidden relative shadow-lg">
          <img
            src={banner2025}
            alt="2025 Banner"
            className="w-full h-48 sm:h-64 md:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
            <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold text-white text-center px-4">
              2025 गणपती उत्सव
            </h3>
          </div>
        </div>

        {Object.keys(galleryData).map((year) => (
          <div key={year} className="mb-8 sm:mb-12">
            <h3 className="text-xl sm:text-2xl font-semibold text-orange-800 mb-4 sm:mb-6">
              {year} चे फोटो
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
              {galleryData[year].map((photo) => (
                <div
                  key={photo.id}
                  className="rounded-xl overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition duration-300"
                  onClick={() => openModal(photo)}
                >
                  <img
                    src={photo.image}
                    alt={photo.title}
                    className="w-full h-40 sm:h-48 md:h-56 object-cover"
                  />
                  <div className="p-3 sm:p-4 bg-white">
                    <p className="text-orange-800 font-semibold text-center text-sm sm:text-base">
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
