'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ee2bb68eeabf756da50a2a416c1dbfed",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/chromium/canvaskit.js": "ba4a8ae1a65ff3ad81c6818fd47e348b",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/canvaskit.js": "6cfe36b4647fbfa15683e09e7dd366bc",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"manifest.json": "d729fd6a061a621c4f54bcb331e08465",
"main.dart.js": "1abf84d60d6d1be51abdad66fc2446af",
"icons/Icon-maskable-192.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/favicon.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/Icon-192.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/Icon-maskable-512.png": "148a7552acb23fbcf1b0e18a9922bbb3",
"icons/Icon-512.png": "148a7552acb23fbcf1b0e18a9922bbb3",
"favicon.png": "d9b11665fe526c7f8eb98f4e3878a653",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"index.html": "6601b9861bf0b56cd420a7acb0d5595b",
"/": "6601b9861bf0b56cd420a7acb0d5595b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/NOTICES": "29c1e97280fe65ee8cd530f6e8e9b54c",
"assets/FontManifest.json": "105c8c34c94c231035fb22e8a39aaa9b",
"assets/AssetManifest.bin": "dac28c47ba8770367b7f197ef9da751b",
"assets/AssetManifest.bin.json": "46b3b4e27c71cf2a217a635d1bde3ff5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/assets/images/dman_logo.png": "4e1baabedbc00af8f4f0df3cd9d15642",
"assets/assets/images/onboarding.png": "b924b47f7d1e1b3dc263bfcf583dab4b",
"assets/assets/images/dman_care_text.png": "0f0d54c2a233e6f7cb5a87df4cb8b5eb",
"assets/assets/images/card_background.png": "7cf73d689770d76bfbcc1969f8f5ec85",
"assets/assets/images/card_background2.png": "586e7966473a246f2344ac7bf6d67dfa",
"assets/assets/images/dman_card_with_qrcode.png": "9ea4225cc6f99b86b4ab4e863d9fbcf5",
"assets/assets/icons/discount.svg": "119e1bb5fb1a9547578ca6cd8d1e9b0e",
"assets/assets/icons/build.svg": "22386758a672d6eefce71e9154ea90de",
"assets/assets/icons/search.svg": "6981da2d17db73379ae9d7a4aad1dadb",
"assets/assets/icons/app_icon.jpg": "dc2b83f3756503de637aca61ac395ca7",
"assets/assets/icons/contact.svg": "4e168228e1f4651cc51c540ddd335ccd",
"assets/assets/icons/ads.svg": "0465fe01b4b0aba5d29f83d2f0a7afa4",
"assets/assets/icons/setting.svg": "96cefa3b1411d67efdcf4bc7c8d9afcf",
"assets/assets/icons/cateogry.svg": "07850a1afcb7d1b477f82968724a958d",
"assets/assets/icons/check-circle.svg": "1b8eae58210f37c673d7ef2362b65ae2",
"assets/assets/icons/logos_whatsapp-icon.svg": "e4019c6a0324d31f68543ed891031691",
"assets/assets/icons/location.svg": "467009b0efc54baeac3ce38e62c53864",
"assets/assets/icons/card.svg": "66b01de31255126e6b6251c492707a33",
"assets/assets/icons/member_ship.svg": "dd728a856bf40f638cd112727996cadb",
"assets/assets/lang/ar.json": "ce5aa574a7f02da39107e49c7995c400",
"assets/assets/lang/en.json": "bacd9a5410d46916a4a7966250b38c66",
"assets/assets/fonts/Tajawal-Regular.ttf": "e3fe295c55a0cb720f766bccc5eecf63",
"assets/assets/fonts/Almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/fonts/MaterialIcons-Regular.otf": "a29350f11ab57420636eaed6e97434d6",
"assets/AssetManifest.json": "f510e4057cf57de016e560e97d9722e2",
"flutter_bootstrap.js": "d14e468562a1e839ff7ac92b75aae7bb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
