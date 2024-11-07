const cacheName = 'hotel-app-cache-v1';
const assets = [
  '/',
  '/index.html',
  '/main.html',
  '/golden-rules.html',
  '/css/style.css',
  '/js/auth.js',
  '/js/main.js',
  '/icons/icon-192x192.png',
  '/icons/icon-512x512.png',
  
  '/images/hrd.jpg'
  
];

// Install event: caching assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

// Activate event: clean up old cache
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== cacheName).map(key => caches.delete(key))
      );
    })
  );
});

// Fetch event: serve cached files when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
