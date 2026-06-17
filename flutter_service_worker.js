'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "f06b8a8156c06705bcb126bd938f1f40",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "8346c990ed771216d5a0669b411708ad",
"/": "8346c990ed771216d5a0669b411708ad",
"main.dart.js": "616b898c2003fea95049ba2edd7f8503",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "518fa58804c6d5625b8e32367a1e9300",
"assets/AssetManifest.json": "da7a1885c50eef6b8881e50fad64e830",
"assets/loading.gif": "602efadf1bcfb2d6b7ac7bf3c91430a2",
"assets/NOTICES": "638086e6f3d96c3b844f6bf024f29eb2",
"assets/FontManifest.json": "9079600dd6cc1457502d9273b45170aa",
"assets/AssetManifest.bin.json": "2ae9765d4a18b562d568df9f58b465e9",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "269f971cec0d5dc864fe9ae080b19e23",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "262525e2081311609d1fdab966c82bfc",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "5f466b39f02840cbc4b77f280162e6c5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f79836d11ef43c11b312b011edf90151",
"assets/fonts/MaterialIcons-Regular.otf": "d13b1fd9d8f9a59ed4d049d6f90696e4",
"assets/assets/images/syria.svg": "2cc1fb4878d32e76a458da38eb0ab836",
"assets/assets/images/android.svg": "0a04451ad3b5886234ef80268c803e46",
"assets/assets/images/dev_img.png": "42de9860d224aacece5a04811994a11b",
"assets/assets/images/flutter.svg": "749737f954a8acaae1b3d389b3fc857f",
"assets/assets/images/portfolio_icon.png": "7cb8fcd768c7538bd9c9efd457a0df18",
"assets/assets/images/uae.svg": "2041fa34b794642a293992c5958734e9",
"assets/assets/images/ruler.svg": "4791ae452335f1ba68a2787f872f3e5f",
"assets/assets/images/slider.svg": "a4fc3ee8b34de4bfab375880f4297c49",
"assets/assets/images/dev_img1.jpg": "ab453aeb0087d5b575a663f5f0b71921",
"assets/assets/images/dev_img1.png": "6d68fe8648b09b82d9890074cf8a34c8",
"assets/assets/images/ios.svg": "4839d919fcf3af179ec68ff8ff79b71c",
"assets/assets/images/swift.svg": "a52c32035bb9f8cc14d28b891bfdb9c9",
"assets/assets/fonts/Poppins-Regular.ttf": "093ee89be9ede30383f39a899c485a82",
"assets/assets/fonts/Poppins-Bold.ttf": "08c20a487911694291bd8c5de41315ad",
"assets/assets/fonts/Poppins-SemiBold.ttf": "6f1520d107205975713ba09df778f93f",
"assets/assets/apps/abnic1.webp": "414f6759910eb31c925c33d923cb20e3",
"assets/assets/apps/izon1.webp": "b2e182e14dadfc1c892b80a8cc9e7d06",
"assets/assets/apps/quickIOrder1.webp": "5e3b2499f496b8b48a5d47dd2972cd1c",
"assets/assets/apps/mahta2.png": "b6ff34ce19aea5fd3c5988b2e292880a",
"assets/assets/apps/mahta3.png": "19001e9f835d9d473f85359dc60673f2",
"assets/assets/apps/mahta1.png": "0babc66ab320874d0300a3d8c7a7d272",
"assets/assets/apps/quickIOrder2.webp": "a41d7e9212841cbe14585c3f790349d7",
"assets/assets/apps/medsooq1.png": "e902858d6c9375c982b1a67c3b753517",
"assets/assets/apps/salama1.png": "72e16f4b9f54a6137673f7689f6705e3",
"assets/assets/apps/quickIOrder3.webp": "2d0b2972e78a65adf1eac052e668e683",
"assets/assets/apps/salama3.png": "2928e66fd259b1ce0e945ec719d922b5",
"assets/assets/apps/medsooq2.png": "45f5c8eb78f86b156875608414b8a74b",
"assets/assets/apps/medsooq3.png": "dc0fa9229ac8ad92309b0fafac3876ad",
"assets/assets/apps/salama2.png": "7fd33e337057de314416ac63067416cb",
"assets/assets/apps/abnic3.webp": "69348216069f4bed2437a6bccce36ebd",
"assets/assets/apps/dental3.png": "ea080f2570c6a3cee1203c92934f71a0",
"assets/assets/apps/dental2.png": "f358ce3e2150a4ca1d7fdee37d04c9bd",
"assets/assets/apps/izon2.webp": "7816eeb758556638115d852706cbbf12",
"assets/assets/apps/dental1.png": "8248fcd7c111b1d7cd7cb7c74580f10e",
"assets/assets/apps/dawaa3.png": "bed05b28ec4a3c1bdc54fefb506731d7",
"assets/assets/apps/salamaD1.png": "574a40bcb4f70880ff1a7f524f6c7158",
"assets/assets/apps/izon3.webp": "77459203d419a54794d01c9ac0006c75",
"assets/assets/apps/dawaa2.png": "d7d1c920a8539d2a115c35e2d39484b6",
"assets/assets/apps/salamaD3.png": "514f3935dea13c78d947df922edb7a7c",
"assets/assets/apps/salamaD2.png": "1f9d08323a2a0f5a8544555bd5c77ea0",
"assets/assets/apps/abnic2.webp": "ffaa8ade107656d6775d09c3cd77835b",
"assets/assets/apps/dawaa1.png": "d83add1ad6ae33f3866dd573978455a8",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93"};
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
