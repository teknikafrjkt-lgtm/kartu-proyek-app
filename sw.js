// Service worker: hanya menyimpan "kulit" aplikasi (halaman ini + ikon) supaya bisa dipasang
// dan tampil cepat. Data proyek TIDAK disimpan; selalu diambil langsung dari Apps Script.
const CACHE = 'kp-shell-v7';
const SHELL = ['./', './index.html', './manifest.webmanifest', './icons/icon-192.png', './icons/icon-512.png', './icons/maskable-512.png', './icons/apple-touch-icon.png'];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(keys => Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k))))
    .then(() => self.clients.claim()));
});

self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  if (e.request.method !== 'GET' || url.origin !== self.location.origin) return;   // Apps Script: tidak disentuh
  // Jaringan dulu (agar versi terbaru), cache bila offline.
  // Halaman utama selalu ambil versi terbaru dari server (lewati cache HTTP browser), cache hanya saat offline.
  const req = e.request.mode === 'navigate' ? new Request(e.request.url, { cache: 'no-store' }) : e.request;
  e.respondWith(
    fetch(req)
      .then(r => { const copy = r.clone(); caches.open(CACHE).then(c => c.put(e.request, copy)); return r; })
      .catch(() => caches.match(e.request).then(r => r || caches.match('./index.html')))
  );
});
