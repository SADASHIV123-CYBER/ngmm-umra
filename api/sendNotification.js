import webpush from "web-push";

// Initialize VAPID keys (generate once and keep safe)
webpush.setVapidDetails(
  "mailto:youremail@example.com",
  process.env.VAPID_PUBLIC_KEY,
  process.env.VAPID_PRIVATE_KEY
);

// Subscribers store (in real app, save in DB)
let subscribers = [];

export default async function handler(req, res) {
  if (req.method === "POST") {
    const payload = JSON.stringify({
      title: "आर्टी सुरू आहे",
      body: "आज 8 PM आर्टीसाठी मंडलात सहभागी व्हा!"
    });

    try {
      subscribers.forEach(sub => webpush.sendNotification(sub, payload));
      res.status(200).json({ message: "Notifications sent!" });
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  } else {
    res.status(405).json({ message: "Method not allowed" });
  }
}
