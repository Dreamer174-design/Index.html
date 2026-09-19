// Orynva service worker — minimal, required for the app to be installable.
// It doesn't cache anything special; Orynva relies on Supabase for live data,
// so we just pass requests straight through rather than serving stale copies.

self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  event.respondWith(fetch(event.request));
});
