importScripts("/tasks-app-prototype/precache-manifest.742e8f3a1ad0dc78a97252f37d6a5fe6.js", "https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.__precacheManifest = [].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});

// install new service worker when ok, then reload page.
self.addEventListener('message', (msg) => {
  if (msg.data.action == 'skipWaiting') {
    self.skipWaiting();
  }
});

