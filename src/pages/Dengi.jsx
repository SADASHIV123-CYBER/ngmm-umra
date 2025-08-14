import React, { useState } from "react";
// import dengiQR from '../assets/dengiQR.jpg'; // Your QR code image for payments

export default function DengiPage() {
  const [name, setName] = useState("");
  const [sadasya, setSadasya] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !sadasya) {
      alert("कृपया आपले नाव आणि सदस्यता भरा!");
      return;
    }
    alert(`धन्यवाद ${name} जी! आपली देणगी स्वीकारली गेली.`);
    setName("");
    setSadasya("");
  };

  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
          देणगी करण्यासाठी पृष्ठ 🙏
        </h2>

        <p className="text-center text-orange-800 mb-8 text-base sm:text-lg">
          आपल्या देणगीने मंडळाचे कार्य अधिक चांगले करण्यास मदत होईल. खालील फॉर्म भरा आणि देणगीसाठी उपलब्ध QR कोड स्कॅन करा.
        </p>

        {/* QR Code */}
        <div className="flex justify-center mb-8">
          <img
            src=/*{dengiQR}*/ 'https://res.cloudinary.com/vistaprint/images/w_1284,h_600,c_scale,w_448,h_209,dpr_2/f_auto,q_auto/v1675872474/ideas-and-advice-prod/en-us/CMT-1438-QRcodesForYourSmallBusiness-Marquee_en-us/CMT-1438-QRcodesForYourSmallBusiness-Marquee_en-us.jpg?_i=AA'
            alt="देणगी QR कोड"
            className="w-64 h-64 sm:w-80 sm:h-80 rounded-xl shadow-lg"
          />
        </div>

        {/* Donation Form */}
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 border border-orange-200"
        >
          <div className="flex flex-col gap-4">
            <label className="text-orange-700 font-medium text-sm sm:text-base">
              आपले नाव:
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="उदा. राम शिंदे"
                className="w-full mt-1 px-3 py-2 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            <label className="text-orange-700 font-medium text-sm sm:text-base">
              सदस्यता (जर लागू असेल तर):
              <input
                type="text"
                value={sadasya}
                onChange={(e) => setSadasya(e.target.value)}
                placeholder="उदा. सदस्य / ना-सदस्य"
                className="w-full mt-1 px-3 py-2 border border-orange-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
            </label>

            <button
              type="submit"
              className="bg-gradient-to-r from-orange-400 to-pink-500 text-white font-semibold py-2 rounded-xl shadow-md hover:scale-105 transition-transform duration-200"
            >
              देणगी सबमिट करा
            </button>
          </div>
        </form>

        <p className="text-center text-orange-700 font-medium mt-6 text-sm sm:text-base">
          आपली देणगी मंडळाच्या कार्यासाठी महत्त्वाची आहे. धन्यवाद!
        </p>
      </div>
    </section>
  );
}
