/* MAGISTRALA service worker — load once, play forever with no wifi.
   The whole game is one HTML file plus static art and a Google Font, so we
   precache the shell + every art asset and runtime-cache the font. A reload
   in airplane mode then boots straight back into the run.

   Bump VERSION whenever index.html or the art set changes so clients refresh. */
const VERSION = "v1";
const SHELL = "magistrala-shell-" + VERSION;
const FONTS = "magistrala-fonts-" + VERSION;

/* keep this list in step with /art — a missing entry just won't be precached */
const ART = [
  "b-bura","b-mummies","b-needle","b-psychic","b-toll","b-tunnel","b-venice","b-wall",
  "f-galeb","f-kralj","f-teta","fog",
  "o-fog","o-galebeye","o-hottar","o-kazun","o-maslenica","o-oleanderomen","o-saint","o-seaorgan","o-tollbooth","o-windsock",
  "p-asphalt","p-baka","p-branko","p-burabottle","p-burek","p-enc","p-fig","p-galeb","p-klapa","p-maraschino","p-medallion",
  "p-oleander","p-pag","p-pine","p-socks","p-stones","p-sunglasses","p-truffle","p-wasp","p-zimmer",
  "radio","win"
].map(n => "art/" + n + ".webp");

const PRECACHE = [
  "./", "index.html", "manifest.webmanifest",
  "favicon.ico", "icon-192.png", "icon-512.png", "apple-touch-icon.png",
  ...ART
];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(SHELL);
    // add one at a time so a single 404 can't abort the whole precache
    await Promise.all(PRECACHE.map((url) => cache.add(url).catch(() => {})));
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    const keep = new Set([SHELL, FONTS]);
    const names = await caches.keys();
    await Promise.all(names.map((n) => (keep.has(n) ? null : caches.delete(n))));
    await self.clients.claim();
  })());
});

const isFont = (u) => u.hostname === "fonts.googleapis.com" || u.hostname === "fonts.gstatic.com";

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);

  // Google Fonts: cache-first into a runtime cache so the type survives offline
  // after the first online load (system fallbacks cover the very first visit).
  if (isFont(url)) {
    e.respondWith((async () => {
      const cache = await caches.open(FONTS);
      const hit = await cache.match(req);
      if (hit) return hit;
      try {
        const resp = await fetch(req);
        if (resp && (resp.ok || resp.type === "opaque")) cache.put(req, resp.clone());
        return resp;
      } catch (_) {
        return hit || Response.error();
      }
    })());
    return;
  }

  // only manage our own origin beyond this point
  if (url.origin !== self.location.origin) return;

  // navigations: network-first (fresh build when online), cached shell when offline
  if (req.mode === "navigate") {
    e.respondWith((async () => {
      try {
        const resp = await fetch(req);
        const cache = await caches.open(SHELL);
        cache.put("index.html", resp.clone());
        return resp;
      } catch (_) {
        const cache = await caches.open(SHELL);
        return (await cache.match("index.html")) || (await cache.match("./")) || Response.error();
      }
    })());
    return;
  }

  // static same-origin assets (art, icons): cache-first, then network, caching the result
  e.respondWith((async () => {
    const cache = await caches.open(SHELL);
    const hit = await cache.match(req);
    if (hit) return hit;
    try {
      const resp = await fetch(req);
      if (resp && resp.ok) cache.put(req, resp.clone());
      return resp;
    } catch (_) {
      return hit || Response.error();
    }
  })());
});
