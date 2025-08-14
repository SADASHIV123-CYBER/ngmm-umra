import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Events from "../pages/Events.jsx";
import Members from "../pages/Members.jsx";
import Gallery from "../pages/Gallery.jsx";
// import Live from "../pages/Live.jsx";
import Contact from "../pages/Contact.jsx";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/members" element={<Members />} />
      <Route path="/gallery" element={<Gallery />} />
      {/* <Route path="/live" element={<Live />} /> */}
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}
