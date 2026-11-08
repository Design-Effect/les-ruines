// Les Vestiges Oubliés : service worker : jeu jouable hors-ligne, sans aucun appel réseau.
// Tout est précaché à l'installation (polices et sons compris) ; ensuite, cache seul.
const CACHE = 'ruines-v27';
const CORE = ['./', './index.html', './sons.js', './manifest.json',
              './icon-192.png', './icon-512.png', './apple-touch-icon.png', './carte.webp', './voix.js',
              './polices/alegreya-400i.woff2', './polices/alegreya-500.woff2',
              './polices/cinzel-500.woff2', './polices/cinzel-600.woff2'];
// le mineur rendu dans Blender : 6 séries (course, repos, pioche, chacune avec et sans casque), 8 directions
for (const m of ['run', 'idle', 'pioche', 'run-nc', 'idle-nc', 'pioche-nc'])
  for (let d = 0; d < 8; d++) for (let f = 0; f < (m.indexOf('idle') === 0 ? 1 : 8); f++) CORE.push('./sprites/' + m + '_d' + d + '_f' + f + '.webp');

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
