importScripts('https://cdn.onesignal.com/sdks/web/v16/OneSignalSDK.sw.js');

self.addEventListener('push', function(event) {
  let data = { title: "GLORY'S FLOW", body: "Your period is expected in 2 days! 💕" };
  if (event.data) {
    try { data = event.data.json(); } catch(e) { data.body = event.data.text(); }
  }
  const options = {
    body: data.body,
    icon: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png',
    badge: 'https://cdn-icons-png.flaticon.com/512/2913/2913520.png'
  };
  event.waitUntil(self.registration.showNotification(data.title, options));
});
