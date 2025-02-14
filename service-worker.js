self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
        .then((cache) => {
            return cache.addAll([
                '/atividadeapppwa/',
                '/atividadeapppwa/index.html',
                '/atividadeapppwa/styles.css',  // Corrigido o caminho do CSS
                '/atividadeapppwa/app.js',
                '/atividadeapppwa/img/gym48.png',
                '/atividadeapppwa/img/gym128.png',
                '/atividadeapppwa/manifest.json',  // Incluindo o manifesto no cache
            ]);
        })
    );
});

self.addEventListener('activate', (event) => {
    console.log("Ativando o service worker...");
    return self.clients.claim();
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request)
        .then((response) => {
            if (response) {
                return response;
            }
            return fetch(event.request);
        })
    );
});