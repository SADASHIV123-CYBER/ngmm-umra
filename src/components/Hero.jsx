import Countdown from './Countdown'


export default function Hero() {
return (
<section id="home" className="bg-gradient-to-b from-[#fff7ed] to-white py-12 fade-in">
<div className="max-w-6xl mx-auto px-4 grid md:grid-cols-2 gap-8 items-center">
<div>
<h1 className="text-4xl md:text-5xl font-extrabold leading-tight">Navyuk Ganesh Mitra Mandal — Umra</h1>
<p className="mt-3 text-gray-700">आला हो बाप्पा! आमच्या गावाच्या उत्सवाची माहिती, सदस्य, आणि गॅलरी येथे बघा.</p>


<div className="mt-6 flex items-center gap-4">
<a href="#events" className="inline-flex items-center gap-2 px-4 py-2 bg-brand text-white rounded-lg shadow">पाहा कार्यक्रम</a>
<a href="#gallery" className="px-4 py-2 border rounded-lg">फोटो गॅलरी</a>
</div>


<div className="mt-6">
<span className="text-sm text-gray-600">उत्सव सुरू होईपर्यंत</span>
<div className="mt-2"><Countdown targetDate="2025-08-30T07:00:00+05:30" /></div>
</div>
</div>


<div className="relative">
<div className="w-full h-72 md:h-96 rounded-2xl overflow-hidden shadow-lg">
<img src="/assets/images/hero.jpg" alt="mandap" className="w-full h-full object-cover" />
</div>


{/* decorative animated diya */}
<div className="absolute -bottom-4 right-4 p-3 rounded-full bg-white/80 shadow-lg animate-bounce">
<svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2c1.1 0 2 .9 2 2v3H10V4c0-1.1.9-2 2-2z" fill="#F59E0B"/></svg>
</div>
</div>
</div>
</section>
)
}