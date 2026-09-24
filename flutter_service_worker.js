'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"manifest.json": "24039f3908ef55053831dbae1eafd421",
"icons/Icon-512.png": "6fe4d236a449998ded86726fcec40d4b",
"icons/Icon-192.png": "5456bc0878bdc657fa999b64795a9917",
"icons/Icon-maskable-192.png": "d2f67eaf613501f02f4e4f54a9804691",
"icons/Icon-maskable-512.png": "ec05e94f179eb37e50ed761e2eb41d81",
"wrangler.jsonc": "a155325f1303d7c0504b437fb64ca908",
"flutter_bootstrap.js": "6ef849d376d27fa776f4784fbc38e3fb",
"assets/AssetManifest.bin.json": "1bb186db7c63257c7d737fff197c6399",
"assets/AssetManifest.json": "ff14dec28b6ba899887f5faded37227c",
"assets/assets/timing_qaloon.json": "5ea866a6ab8f561570f18652e83f34ec",
"assets/assets/quran_data/quran_asbab_nuzul.json": "80d9f2420561c9544e354d11a85f6a02",
"assets/assets/quran_data/tajweed/tajweed.hafs.uthmani-pause-sajdah.json": "c6a61a5b436213ea7576c45035bc186b",
"assets/assets/quran_data/tajweed/README.md": "f2b0d0b80c8fd11657bd2d609ebc7f58",
"assets/assets/quran_data/hafs/data/hafsData_v18.json": "f597b70476846ce13505191448486b06",
"assets/assets/quran_data/hafs/font/hafs.18.ttf": "18de60cc94623c2ebdcb30b17bdb34ad",
"assets/assets/quran_data/qaloon/data/QaloonData_v10.json": "6feb9a5365379a14cdb464ff6d7f2a2e",
"assets/assets/quran_data/qaloon/font/qaloon.10.ttf": "8dd1fe637902710c85f7fb4211d12c12",
"assets/assets/quran_data/tafser/surah_067.json": "0aa5add9c06cd1893cc96d7b26fce6c4",
"assets/assets/quran_data/tafser/surah_081.json": "2b99d9c1f10fd5bd791cef6549ef1c6a",
"assets/assets/quran_data/tafser/surah_054.json": "10038558b96d08f76c7054ee47b520e9",
"assets/assets/quran_data/tafser/surah_047.json": "41a3c92c8acd80de58267f740de71cea",
"assets/assets/quran_data/tafser/surah_038.json": "3ad4fc75cd8879e64916957b2652658a",
"assets/assets/quran_data/tafser/surah_039.json": "28907a634c320a1f2a25e1f7fa048145",
"assets/assets/quran_data/tafser/surah_088.json": "e4eeb4cabcdea1b0df184e9528cdf731",
"assets/assets/quran_data/tafser/surah_024.json": "93f9b5ffec83b167a64d4985cc89f8d2",
"assets/assets/quran_data/tafser/surah_029.json": "534733e78dd5604541354ba80f9c97a6",
"assets/assets/quran_data/tafser/surah_046.json": "679bb8f7114486285b91216921b2dfbb",
"assets/assets/quran_data/tafser/surah_001.json": "c78cb69b60d08b5b3ed65f2e6be70891",
"assets/assets/quran_data/tafser/surah_002.json": "ae980604eafb35dd854969ee36bd3fbf",
"assets/assets/quran_data/tafser/surah_073.json": "f66e6876e477efe00bcdae8d1f5d62d6",
"assets/assets/quran_data/tafser/surah_056.json": "f16e033d8805278ff3d25d9e23f96f92",
"assets/assets/quran_data/tafser/surah_097.json": "89c66adb57277f16d1c7bddbb50ad31e",
"assets/assets/quran_data/tafser/surah_035.json": "a19b38a3fe77f0557edeca1b266e0fc3",
"assets/assets/quran_data/tafser/surah_109.json": "984ac4f94ae08622698464c1bd48698a",
"assets/assets/quran_data/tafser/surah_085.json": "36f2dda8ba0e8171ef203c21b741e8b6",
"assets/assets/quran_data/tafser/surah_021.json": "6469e1bbb7062fae7335a27f024ae122",
"assets/assets/quran_data/tafser/surah_058.json": "cdb880c580479da384b4eefef9bb17d6",
"assets/assets/quran_data/tafser/surah_045.json": "0615d3b4fcfa1a52781502ababdbe7b5",
"assets/assets/quran_data/tafser/surah_010.json": "7b4ed4109d3a237c3c597bbc0f5c73c1",
"assets/assets/quran_data/tafser/surah_008.json": "94d07ef0685d1c5e8a44893399f44ecd",
"assets/assets/quran_data/tafser/surah_099.json": "31da994a7fae1e2ad3819cff1f91e09c",
"assets/assets/quran_data/tafser/surah_026.json": "f7090e0664b521750845d485bb1b15da",
"assets/assets/quran_data/tafser/surah_044.json": "bb86474011fa43bffce1d446e183a54c",
"assets/assets/quran_data/tafser/surah_020.json": "a33937dc4c0f5458ea3dc878989d38c9",
"assets/assets/quran_data/tafser/surah_075.json": "c3efa02ca0d31f5876eeb20afd22e347",
"assets/assets/quran_data/tafser/surah_048.json": "a03df50962c11a24545577f898dd1cd0",
"assets/assets/quran_data/tafser/surah_017.json": "747588c663be6050d6e7e65edad16598",
"assets/assets/quran_data/tafser/surah_040.json": "3c4fb11c81e359d2073c3b3810a281f3",
"assets/assets/quran_data/tafser/surah_059.json": "4cd8247491fcc5dd12e479c328fe20bd",
"assets/assets/quran_data/tafser/surah_089.json": "f8b1554c95697e948835159f27eceeef",
"assets/assets/quran_data/tafser/surah_006.json": "fa899ba0cab892347d68eed412d90e2f",
"assets/assets/quran_data/tafser/surah_079.json": "dd2ed6a94464a1796aafa13d0ad07f2b",
"assets/assets/quran_data/tafser/surah_114.json": "de49d1b430df2a859021eca045fe6ef8",
"assets/assets/quran_data/tafser/surah_043.json": "d869324326b306d926cef0bde5828a27",
"assets/assets/quran_data/tafser/surah_065.json": "a24cf86eab44560f43601d88784b356e",
"assets/assets/quran_data/tafser/surah_012.json": "b7530afb560e87ffd962bfd8b6ef262a",
"assets/assets/quran_data/tafser/surah_072.json": "f017a6d05ee2f58c59a3d94fa29f64b9",
"assets/assets/quran_data/tafser/surah_108.json": "245d8cf1c55cb1150c25b6588cb1793d",
"assets/assets/quran_data/tafser/surah_077.json": "f4b06fa7d6461f2b215d126ac2ba6b9a",
"assets/assets/quran_data/tafser/surah_049.json": "60c22cd61752475592905ac089803304",
"assets/assets/quran_data/tafser/surah_037.json": "9654bdd20fadb1fcd23fe70fe6785231",
"assets/assets/quran_data/tafser/surah_096.json": "64a3366a6383cc68944cc52ac155ee9d",
"assets/assets/quran_data/tafser/surah_068.json": "10a9001e1b2bf39e372eb7e7aa058d34",
"assets/assets/quran_data/tafser/surah_005.json": "e84883cae0467ff3b1bce4cef8051cfe",
"assets/assets/quran_data/tafser/surah_014.json": "7014646a4b811776d2ce6d20ccfdf116",
"assets/assets/quran_data/tafser/surah_033.json": "9e25dd9641e2cbb1471753844e8c900d",
"assets/assets/quran_data/tafser/surah_087.json": "c72bb7e692faebb5f1eaff76d811724d",
"assets/assets/quran_data/tafser/surah_071.json": "2dfe3f77debb0657927f64d0fbd09843",
"assets/assets/quran_data/tafser/surah_070.json": "58c9e63d6a21b1c07cdda7416d943782",
"assets/assets/quran_data/tafser/surah_060.json": "e3dfe0c5e55fb7dd28eec4bbe0f196b9",
"assets/assets/quran_data/tafser/surah_028.json": "64a73e4ca996f7c68fe88bedbf71450b",
"assets/assets/quran_data/tafser/surah_064.json": "9b1785d8e3238b43004c64c810814027",
"assets/assets/quran_data/tafser/surah_107.json": "33689c52ea1562f105ed42da43a94dfc",
"assets/assets/quran_data/tafser/surah_031.json": "cf7792b30f83afa33c1e7621a96b47c1",
"assets/assets/quran_data/tafser/surah_095.json": "9f05c5e7aa8da614f9163e8f22c05d18",
"assets/assets/quran_data/tafser/surah_018.json": "b6c1daa308efe04732ffd3fb9b927882",
"assets/assets/quran_data/tafser/surah_111.json": "dc747b335e0ef87ceffbcd7d069794cd",
"assets/assets/quran_data/tafser/surah_105.json": "4e2e91f810939f8f5a39a184060d58a2",
"assets/assets/quran_data/tafser/surah_110.json": "beeb5f60d782b0487d13f20023260c8c",
"assets/assets/quran_data/tafser/surah_063.json": "9324812850af3af895feaa551b0f4325",
"assets/assets/quran_data/tafser/surah_102.json": "fca6e11e8bbd282ad5a26644120f5137",
"assets/assets/quran_data/tafser/surah_019.json": "b31030e79fa15e2a923425af5e1ad102",
"assets/assets/quran_data/tafser/surah_100.json": "d12b12bf5a78abe2ee724dfcafd29b12",
"assets/assets/quran_data/tafser/meta.json": "23259e1c582de61deb74760829d324ad",
"assets/assets/quran_data/tafser/surah_112.json": "889e4809cd61770e1b239da0e8fb5423",
"assets/assets/quran_data/tafser/surah_098.json": "f5dfa1ead423808b9453b4d1b9056a97",
"assets/assets/quran_data/tafser/surah_080.json": "1356493fe8ed566df9b08dbfc1c1d580",
"assets/assets/quran_data/tafser/surah_042.json": "d8f92bee17dca17d420db326ffc851df",
"assets/assets/quran_data/tafser/surah_103.json": "8b5a725321fb0ad561895f69f1269ae3",
"assets/assets/quran_data/tafser/surah_025.json": "96f216a1f25f323e6647afd3c1ba1c52",
"assets/assets/quran_data/tafser/surah_004.json": "5d1cf90d98953fa53d62f71790ccf2e5",
"assets/assets/quran_data/tafser/surah_061.json": "9c3ee96d1f0211bef7d9a7f7f566b793",
"assets/assets/quran_data/tafser/surah_066.json": "361c04fb26f6773df6438d7a6f6e0d1a",
"assets/assets/quran_data/tafser/surah_052.json": "839b609aa79e8e19b41a1148a20eb882",
"assets/assets/quran_data/tafser/qaloon.json": "4e287247df651086a4b61f0da4099712",
"assets/assets/quran_data/tafser/surah_051.json": "ac489ec48f73cad382eded534aafb8ee",
"assets/assets/quran_data/tafser/surah_084.json": "87593f90499e875496c95fed65dacec2",
"assets/assets/quran_data/tafser/surah_003.json": "a2989919cc930b2727bf41085ff5e3b8",
"assets/assets/quran_data/tafser/surah_091.json": "27fbd3b95b744f52a50f62d691df5ac2",
"assets/assets/quran_data/tafser/surah_082.json": "caa9af2cd123af304b26685f406b23b3",
"assets/assets/quran_data/tafser/surah_055.json": "f3ad54e14f01751455861fbcd305be70",
"assets/assets/quran_data/tafser/surah_009.json": "ad1c95420d6c9bacd21cc391e057de97",
"assets/assets/quran_data/tafser/surah_041.json": "bbc898e39fb1a87f3774964fa1d7533c",
"assets/assets/quran_data/tafser/surah_094.json": "fa63cb973c160606e498675e4d57db7b",
"assets/assets/quran_data/tafser/surah_076.json": "d5e9663f487401b801c7b4615074d31c",
"assets/assets/quran_data/tafser/surah_074.json": "476286460ee9ddd5d23643862637fda3",
"assets/assets/quran_data/tafser/surah_034.json": "197a22eb99c9e12768c99d99646a9d3a",
"assets/assets/quran_data/tafser/surah_104.json": "fb98ad016e9f157d68f5dee99716de40",
"assets/assets/quran_data/tafser/surah_086.json": "1691721dbe6ceb161b911e3e233e6c6f",
"assets/assets/quran_data/tafser/surah_013.json": "e1658b75fefc68819c157cf4687f0f05",
"assets/assets/quran_data/tafser/surah_016.json": "860336395b3d3b539495423a21a120da",
"assets/assets/quran_data/tafser/surah_053.json": "173f97826edea5c381b8a59b5f14fdab",
"assets/assets/quran_data/tafser/surah_092.json": "f36c93b97b7d8bc04e30fb11bf29ae3e",
"assets/assets/quran_data/tafser/surah_007.json": "345b79bc8b91ba52de336ac562b5267d",
"assets/assets/quran_data/tafser/surah_036.json": "fccc9483da624074d0ff20196c85ac14",
"assets/assets/quran_data/tafser/surah_022.json": "d5a20d06c54c374d840527ac28e09e79",
"assets/assets/quran_data/tafser/surah_050.json": "3ac50c63bb8f6af3d830fbe40de6b77a",
"assets/assets/quran_data/tafser/surah_023.json": "888747ecf30219b433f9904834ce038a",
"assets/assets/quran_data/tafser/surah_030.json": "76157dc8ec58c3abddaa8d2a3e717e3b",
"assets/assets/quran_data/tafser/surah_015.json": "1d0f2023fd156aa99101794991c9e692",
"assets/assets/quran_data/tafser/surah_093.json": "c85aa47bf82147d41d323895bd6513d0",
"assets/assets/quran_data/tafser/surah_083.json": "748c32b771d5bbc898ad24795108153a",
"assets/assets/quran_data/tafser/surah_011.json": "9511def4c400bd9a0f20cc6bfaf3061a",
"assets/assets/quran_data/tafser/surah_101.json": "68f6c6ffede28fc3b409d0347371d0f6",
"assets/assets/quran_data/tafser/surah_032.json": "92136d365454c99b79e767028399a035",
"assets/assets/quran_data/tafser/surah_106.json": "f705bb3086c82b0a0839aac16f4fca4a",
"assets/assets/quran_data/tafser/surah_027.json": "144fbc7cc06237e98754a5ed7a029b53",
"assets/assets/quran_data/tafser/surah_078.json": "abd7602da968cdc3cf2fa06780a5a5b4",
"assets/assets/quran_data/tafser/surah_113.json": "ac18b25ef634b518495138eadb7f6270",
"assets/assets/quran_data/tafser/surah_062.json": "ed72ccebbe6713934d157fb88aa0f2b4",
"assets/assets/quran_data/tafser/surah_057.json": "53022737dca755cb7470b5fb459bdd6f",
"assets/assets/quran_data/tafser/surah_090.json": "651b97ce53d3fa40957a7c49c92bfb35",
"assets/assets/quran_data/tafser/surah_069.json": "46e74f168f04275346189aff65205776",
"assets/assets/quran_data/quran_words_meanings.json": "37d34dce708066bf9b33d4259bd0355c",
"assets/assets/surahs_info.json": "99550ab23d73d350b8317f514d201b11",
"assets/assets/icon_app.png": "5377cfd0078bf44f5c4c2816020de790",
"assets/assets/app_logo.png": "13021c166aaecba6843672b7e8c3c3d5",
"assets/NOTICES": "4747b901bfd9606598e5cfdecfb4944d",
"assets/AssetManifest.bin": "fad478a92c48ae6e56dc60fcdae34457",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "bd60e2701c42b6bf2c339dcf5d495865",
"assets/packages/record_web/assets/js/record.worklet.js": "6d247986689d283b7e45ccdf7214c2ff",
"assets/packages/record_web/assets/js/record.fixwebmduration.js": "1f0108ea80c8951ba702ced40cf8cdce",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
"assets/FontManifest.json": "e3fe550a45672265f59b27e4fb021dd5",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/fonts/MaterialIcons-Regular.otf": "a9cfc7cbb7b7d27c169f32e0ae434e5b",
"index.html": "455d6e711592364871a35f1cf5f9a6cd",
"/": "455d6e711592364871a35f1cf5f9a6cd",
"version.json": "91590a8fbb0b4f97dd91e905e5e90de7",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"_headers": "8b9d70cbf27256272d2654ff71ffa025",
"_redirects": "c04d5f0e76d5a04642ab7c5e6dd3af25",
"favicon.png": "8535407e5847455458e100b619a8e413",
"404.html": "f2f62c33404d71f8285e7ad244e4a057",
"main.dart.js": "b312889a7a41177744c0f4783b15d23e",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40"};
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
