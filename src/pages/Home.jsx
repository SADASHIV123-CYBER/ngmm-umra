import Countdown from "../components/Countdown.jsx";

export default function Home() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex flex-col items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-300 hover:shadow-orange-300">
        <h1 className="text-3xl sm:text-4xl font-bold text-orange-700 mb-4">
          🎉 Navyuk Ganesh Mitra Mandal – Umra 🎉
        </h1>
        <p className="text-gray-700 text-sm sm:text-base mb-6">
          गणपती उत्सव 2025 मध्ये आपले स्वागत आहे! 🪔
        </p>
        <div className="bg-orange-50 p-4 rounded-2xl shadow-inner">
          <Countdown targetDate="2025-08-30T08:00:00+05:30" />
        </div>
        <p className="mt-4 text-gray-500 text-sm sm:text-base">
          उत्सवाचा आनंद घ्या आणि आपल्या कुटुंबासह सहभागी व्हा! 🙏
        </p>
      </div>
    </section>
  );
}

export function Page() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-orange-50 to-yellow-100 flex items-center justify-center px-4 py-10">
      <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 max-w-md w-full text-center transition-all duration-300 hover:shadow-orange-300">
        <h2 className="text-2xl sm:text-3xl font-bold text-orange-700 mb-4">
          Coming soon… ⏳
        </h2>
        <p className="text-gray-700 text-sm sm:text-base">
          नवीन माहिती लवकरच येथे प्रकाशित होईल. कृपया पुन्हा भेट द्या! 🙏
        </p>
      </div>
    </section>
  );
}
