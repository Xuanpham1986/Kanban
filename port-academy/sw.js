/* Service worker: lưu bộ khung + nội dung để học offline.
 * Tăng CACHE_VERSION mỗi khi phát hành bản mới. Chỉ xóa cache của chính app này
 * (cùng origin GitHub Pages còn có app khác). */
const PREFIX = 'port-academy-';
const CACHE_VERSION = PREFIX + 'v2';
const APP_SHELL = [
  './', './index.html', './css/styles.css', './js/app.js', './manifest.webmanifest',
  './icons/icon.svg', './icons/icon-192.png', './icons/icon-512.png', './icons/icon-maskable-512.png',
  './js/data/00-cang-quoc-te.js', './js/data/01-hai-quan.js', './js/data/02-hang-hai-dtnd.js', './js/data/03-kinh-doanh.js',
  './js/data/04-logistics-kho.js', './js/data/05-nang-ha.js', './js/data/06-tieng-anh.js',
  './js/data/07-nhan-su.js', './js/data/08-lanh-dao.js', './js/data/09-quyet-dinh.js', './js/data/glossary.js'
];

self.addEventListener('install', (event) => {
  event.waitUntil(caches.open(CACHE_VERSION).then((c) => c.addAll(APP_SHELL)).then(() => self.skipWaiting()));
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k.startsWith(PREFIX) && k !== CACHE_VERSION).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET' || new URL(req.url).origin !== self.location.origin) return;
  // Ưu tiên mạng để luôn có nội dung mới; mất mạng thì dùng bản đã lưu.
  event.respondWith(
    fetch(req)
      .then((res) => {
        if (res.ok) { const copy = res.clone(); caches.open(CACHE_VERSION).then((c) => c.put(req, copy)); }
        return res;
      })
      .catch(() => caches.match(req).then((hit) => hit || (req.mode === 'navigate' ? caches.match('./index.html') : Response.error())))
  );
});
