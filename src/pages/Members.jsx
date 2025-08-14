import React from "react";

import bhagvatImage from "../assets/bhagvat.jpg";
import rajuImage from "../assets/raju.jpg";
import pankajImage from "../assets/pankaj.jpg";
import dhyanDeepImage from "../assets/dhyandeep.jpg";
import niteenImage from "../assets/niteen.jpg";
import shrikantBImage from "../assets/shrikantb.jpg";
// import shrikantDImage from "../assets/shrikantd.jpg";
import gyaneshwarImage from "../assets/gyaneshwar.jpg";
import balajiBImage from "../assets/balajib.jpg";
// import vishnuImage from "../assets/vishnu.jpg";
import balajiKImage from "../assets/balajik.jpg";

// Assign images to membersData
const membersData = [
  { id: 1, name: "श्री भागवत उदास", role: "गृह मंत्रालय, नियोजन, माहिती प्रसारण आणि अर्थ मंत्रालय (अध्यक्ष)", image: bhagvatImage },
  { id: 2, name: "श्री राजेश बोंगाणे", role: "सहकार मंत्रालय (उपाध्यक्ष), गृह मंत्रालय (सुरक्षा)", image: rajuImage },
  { id: 3, name: "श्री पंकज सोनटक्के", role: "प्रशासकीय सेवा आणि सांस्कृतिक मंत्रालय (सचिव)", image: pankajImage },
  { id: 4, name: "श्री ज्ञानदीप बोंगाणे", role: "सहाय्यक प्रशासकीय सेवा आणि सांस्कृतिक मंत्रालय (सहसचिव)", image: dhyanDeepImage },
  { id: 5, name: "श्री नितीन जी कुगावकर", role: "अर्थ मंत्रालय माहिती (खजिनदार)", image: niteenImage },
  { id: 6, name: "श्री श्रीकांत भांडे", role: "सहाय्यक अर्थ मंत्रालय (सहखजिनदार)", image: shrikantBImage },
  { id: 7, name: "श्री श्रीकांत धारणे", role: "अन्न व पुरवठा मंत्रालय आणि सांस्कृतिक मंत्रालय (प्रसाद वितरण समन्वयक)", image: "shrikantDImage" },
  { id: 8, name: "श्री ज्ञानेश्वर काळे", role: "सांस्कृतिक मंत्रालय आणि सार्वजनिक बांधकाम मंत्रालय (मंडप सजावट प्रमुख)", image: gyaneshwarImage },
  { id: 9, name: "श्री बाळाजी बोंगाणे (खोबराजी)", role: "सांस्कृतिक मंत्रालय आणि सार्वजनिक बांधकाम मंत्रालय (मंडप सजावट प्रमुख), गृह मंत्रालय (सुरक्षा)", image: balajiBImage },
  { id: 10, name: "श्री विष्णू तोरकड", role: "स्वच्छता व पर्यावरण मंत्रालय (सफाईदार)", image: "vishnuImage" },
  { id: 11, name: "श्री बाळाजी काळे", role: "सामान्य सहाय्य मंत्रालय (विशेष सदस्य)", image: balajiKImage },
];

export default function Members() {
  return (
    <section className="py-16 bg-gradient-to-b from-green-50 to-green-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-green-700 mb-12">
          आमचे मंडळाचे सदस्य 🙏
        </h2>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8">
          {membersData.map((member) => (
            <div
              key={member.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transform hover:-translate-y-1 transition duration-300 text-center p-6"
            >
              {/* Placeholder image, you can add actual images later */}
              <img
                src={member.image || "https://via.placeholder.com/150"}
                alt={member.name}
                className="w-32 h-32 mx-auto rounded-full object-cover mb-4 border-4 border-green-200"
              />
              <h3 className="text-xl font-semibold text-green-800 mb-2">
                {member.name} 🌟
              </h3>
              <p className="text-green-600 text-sm">{member.role}</p>
            </div>
          ))}
        </div>

        <p className="text-center text-gray-600 mt-10 text-sm sm:text-base">
          आम्ही आपल्या गावातील प्रत्येक कुटुंबाचे स्वागत करतो. 🙏
        </p>
      </div>
    </section>
  );
}
