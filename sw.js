// Les Ruines : service worker : jeu jouable hors-ligne, sans aucun appel réseau.
// Tout est précaché à l'installation (polices et sons compris) ; ensuite, cache seul.
const CACHE = 'ruines-v3';
const CORE = ['./', './index.html', './sons.js', './manifest.json',
              './icon-192.png', './icon-512.png', './apple-touch-icon.png',
              './polices/alegreya-400i.woff2', './polices/alegreya-500.woff2',
              './polices/cinzel-500.woff2', './polices/cinzel-600.woff2'];

self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((ks) => Promise.all(ks.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(caches.match(e.request).then((hit) => hit || caches.match('./index.html')));
});
