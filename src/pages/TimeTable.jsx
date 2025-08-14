import React from "react";

const timetableData = [
  {
    day: "दि. 27 ऑगस्ट 2025 (गणेश चतुर्थी)",
    events: [{ time: "08:00 PM", activity: "आरती (फक्त रात्र्री)" }],
  },
  // 28 Aug to 7 Sep (next 11 days)
  ...Array.from({ length: 11 }, (_, i) => {
    const date = 28 + i;
    return {
      day: `दि. ${date} ऑगस्ट 2025`,
      events: [
        { time: "08:00 AM", activity: "सकाळी आरती (जोडीदार आवश्यक)" },
        { time: "08:00 PM", activity: "रात्र्री आरती (जोडीदार आवश्यक)" },
      ],
    };
  }),
];

export default function TimeTable() {
  return (
    <section className="py-16 bg-gradient-to-b from-yellow-50 to-orange-100 min-h-screen">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-orange-700 mb-12">
          गणेश उत्सव वेळापत्रक 🗓️
        </h2>

        {timetableData.map((dayItem, idx) => (
          <div key={idx} className="mb-10">
            <h3 className="text-2xl sm:text-3xl font-semibold text-orange-800 mb-4">
              {dayItem.day}
            </h3>

            <div className="bg-white rounded-3xl shadow-lg overflow-hidden border border-orange-200">
              {dayItem.events.map((event, i) => (
                <div
                  key={i}
                  className={`flex flex-col sm:flex-row justify-between items-center px-4 py-3 sm:px-6 sm:py-4 border-b last:border-b-0 transition-all duration-200 hover:bg-orange-50 ${
                    i % 2 === 0 ? "bg-orange-50" : "bg-orange-100"
                  }`}
                >
                  <span className="font-semibold text-orange-700 text-base sm:text-lg">
                    {event.time}
                  </span>
                  <span className="text-orange-800 text-sm sm:text-base mt-1 sm:mt-0 text-center sm:text-left">
                    {event.activity}
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}

        <p className="text-center text-orange-700 font-medium text-sm sm:text-base mt-8">
          लक्षात ठेवा: एकदा जोडीदारांनी आरती घेतली की, त्यांना पुन्हा निवड मिळणार नाही.
        </p>
      </div>
    </section>
  );
}
