// src/components/EventsList.jsx
import { useState } from "react";

const eventsData = [
  {
    id: 1,
    title: "Ganpati Sthapana",
    date: "2025-09-07",
    description: "Shree Ganesh sthapana and aarti at mandal.",
  },
  {
    id: 2,
    title: "Bhajan Sandhya",
    date: "2025-09-09",
    description: "Evening bhajan program with local artists.",
  },
  {
    id: 3,
    title: "Cultural Program",
    date: "2025-09-11",
    description: "Dance, music, and drama performances by villagers.",
  },
  {
    id: 4,
    title: "Ganpati Visarjan",
    date: "2025-09-15",
    description: "Visarjan procession with dhol-tasha and fireworks.",
  },
];

export default function EventsList() {
  const [expandedId, setExpandedId] = useState(null);

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section className="py-10 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-orange-600 mb-8">
          📅 Upcoming Events
        </h2>
        <div className="space-y-4">
          {eventsData.map((event) => (
            <div
              key={event.id}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 p-5 cursor-pointer border-l-4 border-orange-500"
              onClick={() => toggleExpand(event.id)}
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-gray-800">
                  {event.title}
                </h3>
                <span className="text-sm text-gray-500">{event.date}</span>
              </div>
              {expandedId === event.id && (
                <p className="mt-3 text-gray-600">{event.description}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
