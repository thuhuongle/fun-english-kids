// ============================================
// Service Worker — Cache-first cho offline
// Bump CACHE_VERSION để buộc rebuild cache
// ============================================
const CACHE_VERSION = 'fek-v1';
const CORE = [
    './',
    './index.html',
    './manifest.webmanifest',
    './icon-192.svg',
    './icon-512.svg',
    './data/curriculum.js',
    './data/lessons.json',
    './js/pronunciation.js',
    './js/auth.js',
    './js/db.js',
    './js/firebase-config.js',
    './js/subscription.js'
];

self.addEventListener('install', (e) => {
    self.skipWaiting();
    e.waitUntil(
        caches.open(CACHE_VERSION).then(cache => cache.addAll(CORE).catch(() => {}))
    );
});

self.addEventListener('activate', (e) => {
    e.waitUntil(
        caches.keys().then(keys =>
            Promise.all(keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k)))
        ).then(() => self.clients.claim())
    );
});

// Network-first for HTML (always get latest), cache-first for assets
self.addEventListener('fetch', (e) => {
    const req = e.request;
    if (req.method !== 'GET') return;
    const url = new URL(req.url);
    // Skip cross-origin (Firebase, fonts CDN, etc.)
    if (url.origin !== self.location.origin) return;

    const isHTML = req.mode === 'navigate' || req.headers.get('accept')?.includes('text/html');

    if (isHTML) {
        // Network-first
        e.respondWith(
            fetch(req)
                .then(res => {
                    const copy = res.clone();
                    caches.open(CACHE_VERSION).then(c => c.put(req, copy));
                    return res;
                })
                .catch(() => caches.match(req).then(r => r || caches.match('./index.html')))
        );
    } else {
        // Cache-first
        e.respondWith(
            caches.match(req).then(cached => {
                if (cached) return cached;
                return fetch(req).then(res => {
                    if (res.ok) {
                        const copy = res.clone();
                        caches.open(CACHE_VERSION).then(c => c.put(req, copy));
                    }
                    return res;
                });
            })
        );
    }
});
