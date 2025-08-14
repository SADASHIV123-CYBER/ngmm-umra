import React from "react";

// Import members data
const membersData = [
  { name: "श्री भागवत उदास", role: "अध्यक्ष", number: "7219325831" },
  { name: "श्री राजेश बोंगाणे", role: "उपाध्यक्ष", number: "9021481421" },
  { name: "श्री पंकज सोनटक्के", role: "सचिव", number: "9766578027" },
  { name: "श्री ज्ञानदीप बोंगाणे", role: "सहसचिव", number: "9529479236" },
  { name: "श्री नितीन जी कुगावकर", role: "खजिनदार", number: "7218865585" },
  { name: "श्री श्रीकांत भांडे", role: "सहखजिनदार", number: "9579950053" },
  { name: "श्री श्रीकांत धारणे", role: "प्रसाद वितरण समन्वयक", number: "8080794528" },
  { name: "श्री ज्ञानेश्वर काळे", role: "मंडप सजावट प्रमुख", number: "9284133764" },
  { name: "श्री बाळाजी बोंगाणे (खोबराजी)", role: "मंडप सजावट व सुरक्षा", number: "8830831854" },
  { name: "श्री विष्णू तोरकड", role: "सफाईदार", number: "9012987654" },
  { name: "श्री बाळाजी काळे", role: "विशेष सदस्य", number: "93591 35382" },
];

export default function Contact() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-pink-50 to-pink-100 flex flex-col items-center justify-center p-6">
      <div className="bg-white shadow-2xl rounded-3xl p-6 sm:p-8 w-full max-w-md transition-all duration-300 hover:shadow-pink-300">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-pink-600 mb-8">
          आमच्याशी संपर्क करा 📞
        </h2>
        <div className="space-y-4">
          {membersData.map((member, index) => (
            <div
              key={index}
              className="flex items-center justify-between bg-pink-50 border border-pink-200 rounded-xl px-4 py-3 shadow-sm hover:bg-pink-100 transition cursor-pointer"
            >
              <div>
                <span className="font-medium text-pink-700">{member.name}</span>
                <p className="text-pink-500 text-sm">{member.role}</p>
              </div>
              <a
                href={`tel:${member.number}`}
                className="text-pink-600 font-semibold hover:text-pink-800 text-sm sm:text-base"
              >
                {member.number}
              </a>
            </div>
          ))}
        </div>

        <p className="mt-6 text-center text-gray-500 text-sm sm:text-base">
          सर्व संपर्क क्रमांक फक्त माहिती साठी दिले आहेत. कृपया योग्य वेळेत कॉल करा.
        </p>
      </div>
    </section>
  );
}
