self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('static')
        .then((cache) => {
             
            cache.add('/atividadeapppwa/')
            cache.add('/atividadeapppwa/index.html')
            cache.add('/atividadeapppwa/styles.css')  
            cache.add('/atividadeapppwa/app.js')
            cache.add('/atividadeapppwa/img/gym48.png')
            cache.add('/atividadeapppwa/img/gym128.png')
            cache.add('/atividadeapppwa/manifest.json')  

            
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