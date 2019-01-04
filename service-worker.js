const cacheName = 'nd-cv-v1';
const filesToCache = [
  '/',
  '/index.html',
  '/assets/index.js',
  '/assets/style.css',
  '/components/Contacts/images/email.svg',
  '/components/Contacts/images/linkedin.svg',
  '/components/Job/images/Apple.svg',
  '/components/Job/images/JohnLewis.svg',
  '/components/Job/images/Marks&Spencer.svg',
];

self.addEventListener('install', (event) => {
  console.log('Service worker is installing');
  event.waitUntil(
    caches.open(cacheName).then((cache) => {
      console.log('Service worker is adding files to cache');
      return cache.addAll(filesToCache);
    }),
  );
});

self.addEventListener('activate', (event) => {
  console.log('Service worker is activating');

  event.waitUntil(
    caches.keys().then(keyList => Promise.all(keyList.map((key) => {
      if (key !== cacheName) {
        console.log('Service worker is removing old cache', key);
        return caches.delete(key);
      }
      return caches;
    })))
      .catch(error => console.log('Service worker activation failed', error)),
  );
});

self.addEventListener('fetch', (event) => {
  console.log('Service worker intercepted a fetch');

  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request)),
  );
});
