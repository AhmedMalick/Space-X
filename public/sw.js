const version = "v1";

const cacheFiles = [
  "https://fonts.googleapis.com/css2?family=Saira+Semi+Condensed&display=swap",
  "/static/media/D-DIN-Bold.7bb4b1a4.otf",
  "/static/js/2.a78e9018.chunk.js",
  "/static/js/main.06c33087.chunk.js",
  "/static/css/main.b750d071.chunk.css",
  "/static/media/D-DIN.31d45669.otf",
  "/static/media/bg-1.0da36e21.jpg",
  "/static/media/bg-2.ab56f8ec.jpg",
  "/static/media/bg-3.6d3b42c3.jpg",
  "/static/media/bg-4.da6056dc.jpg",
  "/favicon.ico",
  "/",
];

this.addEventListener("install", (e) => {
  e.waitUntil(
    caches.open(version).then((cache) => {
      return cache.addAll(cacheFiles);
    })
  );
});

this.addEventListener("activate", (e) => {
  console.log("[ServiceWorker] Activate");
});

const options = {
  ignoreSearch: true,
  ignoreMethod: true,
  ignoreVary: true,
};

this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      caches
        .match(event.request, options)
        .then((response) => {
          if (response) {
            return response || fetch.response;
          }
        })
        .catch((err) => {
          console.log("err", err);
        })
    );
  }
});
