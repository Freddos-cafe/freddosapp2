// Freddo’s Coffee Club service worker
// This service worker implements a cache-first strategy for all static
// assets in the app. On install it pre-caches the core files listed
// below. On fetch it serves from cache if available, otherwise
// falls back to the network.

// Bump the cache version when releasing a new version of the app.  This
// forces the service worker to recache updated HTML, CSS, JS and assets.
const CACHE_NAME = 'freddos-cache-v2';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './menu.html',
  './product.html',
  './cart.html',
  './checkout.html',
  './confirmation.html',
  './coffee_club.html',
  './profile.html',
  './styles.css',
  './app.js',
  './manifest.webmanifest',
  './assets/logo.png',
  './assets/category-freddos.png',
  './assets/category-cafes.png',
  './assets/category-frappes.png',
  './assets/category-bebidas.png',
  './assets/category-snacks.png',
  './assets/category-extras.png'
  , './assets/club_original.png'
  , './assets/join_design.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});