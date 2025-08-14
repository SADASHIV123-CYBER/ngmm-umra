import { useEffect, useState } from "react";

export default function Countdown() {
  const targetDate = "2025-08-27T08:00:00+05:30"; // Ganesh Chaturthi 2025

  const [time, setTime] = useState({ d: "--", h: "--", m: "--", s: "--" });

  useEffect(() => {
    const id = setInterval(() => {
      const now = new Date();
      const end = new Date(targetDate);
      const diff = Math.max(0, end - now);

      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
      const m = Math.floor((diff / (1000 * 60)) % 60);
      const s = Math.floor((diff / 1000) % 60);

      setTime({ d, h, m, s });

      if (diff <= 0) clearInterval(id);
    }, 1000);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {["Days", "Hours", "Minutes", "Seconds"].map((label, i) => (
        <div
          key={i}
          className="px-4 py-3 bg-orange-50 border-2 border-orange-300 rounded-xl shadow-lg text-center w-24 sm:w-28"
        >
          <div className="text-2xl sm:text-3xl font-bold text-orange-600">
            {i === 0 ? time.d : i === 1 ? time.h : i === 2 ? time.m : time.s}
          </div>
          <div className="text-xs sm:text-sm text-orange-700">{label}</div>
        </div>
      ))}
    </div>
  );
}
