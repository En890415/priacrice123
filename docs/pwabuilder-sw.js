importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.1.1/workbox-sw.js');

self.addEventListener("message", (event) => {
  if (event.data && event.data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
});

workbox.precaching.precacheAndRoute([{"revision":"3ee41bba1ba973298b9f40b75a8872cc","url":"global.css"},{"revision":"4dd05818973c1981658927b3445ed75b","url":"script/app-about-f98c17c6.js"},{"revision":"52ba75d048b08c5afe6e56d7f5a29b68","url":"script/app-index-4a4bd8a4.js"},{"revision":"9dec24b04d92efb266a7627e75afd169","url":"script/app-index.js"},{"revision":"d11e289124464ffa01d9a3dfaf3754dd","url":"index.html"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icon_512.png"},{"revision":"a80ffffb8d3a555b25a0f19a0a9878f1","url":"assets/icons/icon_192.png"},{"revision":"04fa5b0f5827d885b678f0d131406aab","url":"assets/icons/icon_24.png"},{"revision":"3dbd388868265c8498acfe676ef27811","url":"assets/icons/icon_48.png"},{"revision":"414aacb61ad294e75f267554db7e9368","url":"assets/icons/icon_512.png"},{"revision":"94d9829178c50c7cbf8d3d3a0d762b1f","url":"assets/screen.png"},{"revision":"94d9829178c50c7cbf8d3d3a0d762b1f","url":"assets/screenshots/screen.png"},{"revision":"8a199e4b84959cc9b68d5ed17db517f3","url":"manifest.json"}]);