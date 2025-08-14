export async function requestNotificationPermission() {
  if ("Notification" in window && navigator.serviceWorker) {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      const registration = await navigator.serviceWorker.ready;
      console.log("Service Worker ready for push notifications", registration);
    }
  }
}
