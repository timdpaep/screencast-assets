/* eslint-disable no-restricted-globals */

// Set the debug state
const DEBUG = true;

// The current cache version
const CACHE_NAME = 'v4';

// The cache assets
const OFFLINE_URL = 'offline.html';

/**
 * When Service Worker is installed
 */
self.addEventListener('install', (e) => {
  if (DEBUG) console.log('[Serviceworker] installed.');

  // This caches the files in the installer, on before
  e.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        cache.add(new Request(OFFLINE_URL, { cache: 'reload' }));
      })
      .then(() => {
        if (DEBUG) console.log('Cached assets: ', OFFLINE_URL);
      })
      .catch((error) => {
        console.error(error);
      }),
  );
});

/**
 * When Service Worker is active
 * After the install event
 */
self.addEventListener('activate', (e) => {
  if (DEBUG) console.log(`[Serviceworker] ${CACHE_NAME} is active & ready to handle fetches!`);

  // Clean the caches
  e.waitUntil(
    caches.keys().then((cacheNames) => Promise.all(
      cacheNames.map((cacheName) => {
        // Delete the caches that are not the current one.
        if (cacheName.indexOf(CACHE_NAME) === 0) {
          return null;
        }
        return caches.delete(cacheName);
      }),
    )),
  );
});

/**
 * When the Fetch event is triggered
 */
self.addEventListener('fetch', (e) => {
  if (DEBUG) console.log('[ServiceWorker] Fetching', e.request.url);
  e.respondWith(
    // If the fetch fails (because of offlinelessness), return the cached version
    fetch(e.request).catch((error) => {
      if (DEBUG) console.log('Fetch failed; returning offline page instead.', error);
      return caches.match(OFFLINE_URL);
    }),
  );
});
