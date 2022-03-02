const version = "v1";

const cacheFiles = [
  "./",
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
