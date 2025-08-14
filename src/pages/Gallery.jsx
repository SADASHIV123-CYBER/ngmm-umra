import React, { useState } from "react";

import baithakImg from '../assets/baithak.jpg';
import ganesh2025 from '../assets/ganesh2025.jpg';
import ganesh2024 from '../assets/ganesh2024.jpg';

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
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
          आमचा फोटो गॅलरी 📸
        </h2>

        {Object.keys(galleryData).map((year) => (
          <div key={year} className="mb-12">
            <h3 className="text-2xl font-semibold text-orange-800 mb-6">{year} चे फोटो</h3>
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
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-4 bg-white">
                    <p className="text-orange-800 font-semibold text-center">{photo.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Modal */}
        {selectedPhoto && (
          <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50 p-4">
            <div className="bg-white rounded-2xl max-w-lg w-full relative shadow-2xl">
              <button
                className="absolute top-3 right-3 text-gray-600 hover:text-red-500 text-2xl"
                onClick={closeModal}
              >
                ✖
              </button>
              <img
                src={selectedPhoto.image}
                alt={selectedPhoto.title}
                className="w-full h-80 sm:h-96 object-cover rounded-t-2xl"
              />
              <div className="p-4 text-center">
                <h4 className="text-xl font-bold text-orange-800">{selectedPhoto.title}</h4>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
