import developerImage from '../assets/my photo.jpg';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-r from-pink-300 via-orange-300 to-yellow-200 border-t border-orange-400">
      <div className="max-w-6xl mx-auto px-4 py-8 flex flex-col items-center gap-3 sm:gap-5 text-center">
        {/* Main Footer Text */}
        <p className="text-sm sm:text-base text-orange-900 font-semibold">
          © {new Date().getFullYear()} नवयुवक गणेश मित्र मंडळ, उमरा
        </p>
        <p className="text-sm sm:text-base text-orange-800 font-medium animate-pulse">
          गणपती बाप्पा मोरया! मंगलमूर्ती मोरया! 🎉🙏
        </p>

        {/* Festive Icons */}
        <div className="flex justify-center gap-4 mt-2 text-2xl sm:text-3xl animate-bounce">
          <span>🎶</span>
          <span>🎊</span>
          <span>🪔</span>
          <span>🎉</span>
        </div>

        {/* Developer Credit */}
        <div className="mt-5 flex flex-col items-center gap-2">
          <img
            src={developerImage}
            alt="Developer"
            className="w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-500 shadow-lg"
          />
          <p className="text-sm sm:text-base text-orange-700 font-medium">
            या वेबसाईट चे विकासक: <strong>सदाशिव काळे</strong>
          </p>
          <p className="text-sm sm:text-base text-orange-700 font-medium">
            ईमेल: <a href="mailto:sadashivkale604@gmail.com" className="underline hover:text-orange-900">sadashivkale604@gmail.com</a>
          </p>
        </div>
      </div>
    </footer>
  );
}
