import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";

export default function App({ children }) {
  return (
    <div className="min-h-dvh flex flex-col bg-white">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
