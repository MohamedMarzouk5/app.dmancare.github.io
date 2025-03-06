'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "ee2bb68eeabf756da50a2a416c1dbfed",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"manifest.json": "d729fd6a061a621c4f54bcb331e08465",
"main.dart.js": "4452cb58dc65c409a4bc7c8d3dfeb831",
"icons/Icon-maskable-192.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/favicon.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/Icon-192.png": "d9b11665fe526c7f8eb98f4e3878a653",
"icons/Icon-maskable-512.png": "148a7552acb23fbcf1b0e18a9922bbb3",
"icons/Icon-512.png": "148a7552acb23fbcf1b0e18a9922bbb3",
"favicon.png": "d9b11665fe526c7f8eb98f4e3878a653",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"index.html": "6601b9861bf0b56cd420a7acb0d5595b",
"/": "6601b9861bf0b56cd420a7acb0d5595b",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_image_compress_web/assets/pica.min.js": "6208ed6419908c4b04382adc8a3053a2",
"assets/NOTICES": "fab42b1e61071d6e1315829a14b61054",
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
"assets/fonts/MaterialIcons-Regular.otf": "9f74c7f42d33915ac45582fdfeb1136a",
"assets/AssetManifest.json": "f510e4057cf57de016e560e97d9722e2",
"flutter_bootstrap.js": "2d259afee984ccc73e4cfbd8dfb10873"};
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
