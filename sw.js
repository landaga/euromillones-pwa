const CACHE = "euromillones-pwa-github-v1";
const BASE = self.registration.scope;

const ASSETS = [
  "",
  "index.html",
  "manifest.webmanifest",
  "icon-192.png",
  "icon-512.png"
].map(path => new URL(path, BASE).toString());

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  const request = event.request;
  const url = new URL(request.url);

  // Los recursos externos (p. ej. el CSV) se dejan a la red.
  if (url.origin !== self.location.origin) return;

  event.respondWith(
    caches.match(request).then(cached => {
      if (cached) return cached;

      return fetch(request).then(response => {
        if (response && response.status === 200 && response.type === "basic") {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put(request, copy));
        }
        return response;
      }).catch(() => caches.match(new URL("index.html", BASE).toString()));
    })
  );
});
