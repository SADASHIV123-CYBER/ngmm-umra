import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home.jsx";
import Events from "../pages/Events.jsx";
import Members from "../pages/Members.jsx";
import Gallery from "../pages/Gallery.jsx";
import Contact from "../pages/Contact.jsx";
import InstaLive from "../pages/LiveStreamInsta.jsx";
import LiveStreamYt from "../pages/LiveStreamYt.jsx";
import MandalInfo from "../pages/MandalInfo.jsx";
import TimeTable from "../pages/TimeTable.jsx";

export default function RoutesFile() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/events" element={<Events />} />
      <Route path="/members" element={<Members />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/instaLive" element={< InstaLive/>} />
      <Route path="ytLive" element={<LiveStreamYt />} />
      <Route path="info" element={<MandalInfo />} />
      <Route path="/timetable" element={<TimeTable />} />

    </Routes>
  );
}
