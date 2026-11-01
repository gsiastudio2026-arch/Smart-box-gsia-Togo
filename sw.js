const CACHE_NAME = 'smart-box-gsia-v3';
const urlsToCache = [
  '/Smart-box-gsia-Togo/',
  '/Smart-box-gsia-Togo/index.html',
  '/Smart-box-gsia-Togo/manifest.json',
  'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
