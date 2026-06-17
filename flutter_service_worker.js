'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"flutter_bootstrap.js": "77dbb1f540be01b21d4e60aac764883f",
"version.json": "009c9e65172e010890f7f65fde438006",
"index.html": "f8da2a358094af357ad27284f12a03b4",
"/": "f8da2a358094af357ad27284f12a03b4",
"main.dart.js": "616b898c2003fea95049ba2edd7f8503",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"favicon.png": "e3ba0936cce0ed61f1884210da59afbc",
"icons/Icon-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-192.png": "45ccc3c17e417eb1ae5cf520c65d3f90",
"icons/Icon-maskable-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"icons/Icon-512.png": "8e7d731479c8e7407e6cc7a4038518fb",
"manifest.json": "518fa58804c6d5625b8e32367a1e9300",
".git/config": "38881ccff4dc4e249623736f3cd97a15",
".git/objects/0d/480eb24acb7771b4e9f468c490789990bb23c9": "f546724b86da8b81f76a3030ab1939ae",
".git/objects/95/51ac1e83147463619de52a641f90d2562f3769": "bd5931454a871e2668f1cea440a4531e",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/92/b6eb7508de9a50656363940e79290df2b7e914": "8264056967612e2ad1da7ac85ba1aef1",
".git/objects/3b/a14a6449f1b49dc0c270ff98613583d8e21962": "0c9cc10a62cd8d826cb338fb492e9a5a",
".git/objects/6f/4e41aeb9ec40f57d6b7b9bc2e7ffbcd4d5c05c": "5b8521805512b1770b400f763dec4bb8",
".git/objects/03/8767a4001f6fa8ac993ac5406802d7acceb19b": "002e921ba6612e454a2fa4909ec9e383",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9b/56789bb5ed111698b2456012f88d985446db22": "41882a24d2a24b3d33e508c42f1acd76",
".git/objects/9e/e1919dc230d3433cce79d137c37081c974034a": "7918dcf5b15c1ac607255918935ca48a",
".git/objects/3c/b76f53074899a72c60996864fd67fc18849d8d": "5bcd1aa19d307d7a3ed9aef7b0af8e89",
".git/objects/51/1aa111bc393f09cf5ad59d34a685bb6076871f": "64cef2a1598cd6d0c6d2962300169b13",
".git/objects/0e/35ea62c8b91660961a88b01f017505a8156e58": "2c3429d6402b174e446d08aad807a78d",
".git/objects/33/d108488635375e084b5e1a9fe311a5fd7e5fbf": "8b48f0b5489c98cbd49171aedf58dbf2",
".git/objects/05/7d59a208f80329a0afa37f808008eb1380d0cf": "0d8957905b81b746f0fa2f1ca2d17be0",
".git/objects/b5/d7440d308a80fa362be175eecf1c79353a1574": "dd5818b0669ecf55cceada84820678e4",
".git/objects/bb/05369ad19ca1b577ae8fc29a6d016ad0417ada": "4fc2ae20351190dbcb09a367dc6cc9b6",
".git/objects/d6/797fc93d189dac0ec4fcd5766b5de73ed2abfc": "1154402a83562af9c673015921cdb424",
".git/objects/e2/90356d2055e04dff410debbbd4dddd1847db76": "c76c0bc5bd325f1193665f7f4092822f",
".git/objects/f4/fab32f2cbf88efdd244dc9079f23f0c6556c40": "a8e4f77851d3b453af7d16c0b8c66d48",
".git/objects/f3/f646d406d8be143beef2cc846b2ca0d21f643a": "f3e1930e0124058e92cfa2a76309a297",
".git/objects/c7/fd7d86e171aa5a14bf2d5c21c1253b883bef89": "fe5a7e2c0c97b32cee59c0cfd5678d59",
".git/objects/ee/0e319c5539dbb17d9167d3b7194b5e1a963b42": "b8904b0dc33f998f23b01fa587059178",
".git/objects/c9/7ce55965e9a22553f8787cdf5234f4a0509efe": "ec50cfbd13a90ce22723a167a78f6cfc",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/1a55361de7c9bf9548d79bd0dbbc4da0cab0fd": "040ba853886bc88d9b050785be9b0561",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fe/d0c4bebd312af0c01e9adece559c2659fab985": "79a5b11f2f506e4ed2ecc34391c2f802",
".git/objects/fe/c286ce52d3d1d5373568efbbc6e0a7aa494249": "ca19747fa69672fb365c74f2328337ed",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c6/973d78ac3980426b3e0a28d59981e3d2599b06": "c3e3a5bd1d640cb498ba0f3d39d3a899",
".git/objects/27/fb9a92701afb9cc032b21cc197a70688bb69a9": "5a2cd80af26bccfd6b37b5110ea27b14",
".git/objects/11/cc3635a690638e6b8f31de4413855e06d7053e": "e407a271f0f3220ada133ac8d19b6d08",
".git/objects/11/67d861e274eeda3ee60173fc05e89f21d9e39a": "a97a32f5ceb0c9311f9517644fae80ad",
".git/objects/16/4a218a7ef6309d18f56b6fbc042bf8a8995cdc": "7b78469664b6f3dfdd96cbef0feb2c1d",
".git/objects/42/2cc9139f243743058a0da62f5cef125c37fe0f": "f0b9c9dd6d057c39dc3aeb776055377f",
".git/objects/45/454ec21b8ddccbde124700d5b2a37f7fa825f9": "381c7abebc0eaca2c42dd074df1f9b40",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/c726e32781bc2c0a83170f6800c0ef4cb9ddcf": "69a43282cb8038fd0577dc0529e5d6cb",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/8a/26aee875cec92f392debe11bcc0d35e9c4d18e": "0e1f254db6427eb408648f3eeba2214e",
".git/objects/21/6a66d716e0fdc036ce536273f914f29bcc02a3": "adcfc43b5a3adbeb717fa0fa7e9a68b8",
".git/objects/86/2cb37e406218bb6ce81693378cdf14d0194e83": "59a9a7818911d070aed2876cf3d413f2",
".git/objects/72/51a9f45a67dc2babe09f8f97ff64c1abd338b4": "71886ecac4e424c802efdee380e12380",
".git/objects/44/6b4e8c0e562007d15df5f4b4fb3fdc70d12e5c": "3d90febcae9c6e6e700018497c1f5f34",
".git/objects/88/30f3744c633421e8c216860dec83d815b796ea": "f5b9e7577cdc0225d060548b3844337d",
".git/objects/9f/0c71b70a49664ced448c63edc9c4ff2bf8cf4a": "bfe12b0c8078a4f477699ecebf5fd96c",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/00/559eeb290fb8036f10633ff0640447d827b27c": "7fbd4486d5ea862eb2c1d2a07b06b395",
".git/objects/9a/7530d6e116675d390be06ba35901adf773b766": "195fb41a8b54a1ca599107bc69313e76",
".git/objects/36/e5cb568a9496cc5b0a39022de40514fb9d4102": "389bb45bc0bab33298c5498fc744e1c7",
".git/objects/65/2a888a8a1ae80f084c5fb0eec3c42a429e7359": "fcf4fc009125dbe80f7f25432d123f46",
".git/objects/96/dcd9913d2de0e9465cde30f2c2c8edc0c9482a": "d0b3ed3f1516bbe4d0aff726acc1f46a",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/a58dba042eaab37b9ac1cf254a185554b6eb0d": "c3e1c17232003766bce3876c1c8e08d6",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/30/2066a42ef6d3ab66d3196e6f22ce685074da9a": "9772c8ede531433fc48cdce07453d153",
".git/objects/37/835b74b09597010be912022e4bf8b83acf3130": "326dac3f5d4e2cc7e624187a385091f1",
".git/objects/01/4a41db1d173b7dd236100450bac7cc397227c9": "2ed6f33baac711d9dfe03fee9bb9cb7a",
".git/objects/99/d2a78c1c062e1e99af638d4f11b9b4ed51fe00": "1b2dc497b96d4d72597e5d4685a97d57",
".git/objects/0f/2379e4fe2e8da540ea4311679fd7235f58af06": "25a3111f21b85cd79c0ded5c4fabc57f",
".git/objects/0a/ec7b00c9ce6b22f213229924e6b955bf387b54": "376b1d9f5ce557e86bd227cc2c9f5034",
".git/objects/bf/2c2d3db3736584752c2c65636882edb48a4be7": "1327713fcbf9ff0fa9da5dd8fcc2c34f",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/b8/8afc9e8cbdda50baa5a75b6b73928dc0338ad8": "1a9aebd5ba85e45104a4a639044d54a9",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/b9/45edaa8eb4dae8f32beaccaee6e8f00afb441b": "5fa11e329606b9d7b391845d787458e2",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/c3/0a52ec307942a39e588560b526256b1b50ec44": "07cde0ebb9b30cc7fb372159b048160f",
".git/objects/ea/ead26ce95c9b6bd92ca36cdb02b74975793bcb": "8a6349b174239b37157bcfa749757227",
".git/objects/cd/b36d10db7f0c456b03813e00d6856c432fccb0": "635c0cd328faa6d35131784ad5a238df",
".git/objects/cc/29f135c643aa2a71a73d6d31d9f1518daa9c2c": "1021bf675dc9aa0094f03317dded4775",
".git/objects/e6/f2d5aa7557c062dd7c8294c650a5a7e0574308": "2ac54b759de62317c6a021dda213a611",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/f9/55cd673970a9f2b8d92bd78a219cc926a7d4db": "ee5d827ca7ce25429e7b8566e7c27546",
".git/objects/f0/7de57776395c94ad413c7736ba3122130720b7": "34ed7603843862d01691bb291aff9464",
".git/objects/f0/cf4d015fd6b98d1bdf613fe37964a77783e443": "7355ef30e1881ea00e208b1e71ecb57a",
".git/objects/e8/1af3dcb7ea69990bd5627367fe464dba33ca45": "de5b7793232e20dc1dfd75f4ac0def82",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/cb/2255886027321f05c149e6a0ee681357519dc3": "43aa43fd02983b63d9d9e3e722456c4d",
".git/objects/ce/8a0407af949b72ec28bc97f6e702c47be0e22b": "741c0973cfb90f73ec84b9b587b2014c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/46/d55d1440b2b2db85c0c9cdfe32b6488d11a773": "49e04db10a0622a32b0079b6d4bfaf34",
".git/objects/2d/46598b28ee7272928ef9c2d3f0803d492fb72b": "f60370a7f9f9d8d00c02d5c74eb5b161",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/70/a3b3cfcb1bbcce1fa85a38a9332b6e6e371706": "43de2665fcf2b07e67725a1224a61a86",
".git/objects/23/45cc40e58d81addab124bdf6ccce79d53ab157": "cb7881f4b1f5d357fafe92b5d6a1b24e",
".git/objects/71/7aeb2d544fb8ac94da07c2e326ec497bbb7a86": "ad83849ca6af78e0d4cbe036aec2ef4d",
".git/objects/71/ba2a5a7e285a871dd38cbbc1fe447896ae5cb9": "49521494491ff93ce27a92d4a012f2f8",
".git/objects/71/6cfcacee7f1a6b19f2ec7cf4da83635905e14f": "ade8dc95bb1160b14a0c8f2e33a0f684",
".git/objects/76/7b5a8ad084d262eeac7981832fdb6f84affdc2": "0ae38ca0a559c4af2080fe0d27b4c774",
".git/objects/1c/10972eceaea5bc6ddf055d7e4caa75e01e6f8e": "0185c67dad999f49755704755e660c16",
".git/objects/40/ddea80c3189bbdbee1f21dd3e5ba721268b70e": "75dc30d3102b65a8af48cfb285276026",
".git/objects/2e/0edf7a564317fefda1bf5ebb53b44f0a812fe1": "b634359a9b8abbc5f347725995771f1d",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3e826fd729ba43826298163e1bc61d02",
".git/logs/refs/heads/master": "3e826fd729ba43826298163e1bc61d02",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/master": "c070bb21c5e2f3703c9a7465a57b9ff9",
".git/index": "0848e0563d9eff4e0316e7dc52092a42",
".git/COMMIT_EDITMSG": "63d2d586efe4f2166de2fba8e15ebef7",
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
