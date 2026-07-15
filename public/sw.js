// Kill-switch service worker: uninstalls itself and clears all caches.
// The old cache-first worker served stale index.html after deploys (blank screen).
// Browsers that installed the old worker will fetch this update, self-destruct, and reload.
self.addEventListener('install', () => self.skipWaiting());

self.addEventListener('activate', (event) => {
  event.waitUntil(
    (async () => {
      const keys = await caches.keys();
      await Promise.all(keys.map((k) => caches.delete(k)));
      await self.registration.unregister();
      const clients = await self.clients.matchAll({ type: 'window' });
      clients.forEach((client) => client.navigate(client.url));
    })()
  );
});
