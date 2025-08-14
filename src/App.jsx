// import { useEffect } from "react";

import Navbar from "./components/Navbar.jsx";
import { requestNotificationPermission } from './utils/notification.js';
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

// useEffect(() => {
//   requestNotificationPermission();
// }, []);
