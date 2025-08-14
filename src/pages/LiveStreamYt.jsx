import React from "react";

export default function LiveStreamYt() {
  return (
    <section className="py-16 bg-yellow-50 min-h-screen">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold text-orange-700 mb-8">
          लाईव्ह स्ट्रीमिंग 🎥
        </h2>
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-xl shadow-lg">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src="https://www.youtube.com/embed/YOUR_LIVE_STREAM_ID?autoplay=1"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Live Stream"
          ></iframe>
        </div>
      </div>
    </section>
  );
}
