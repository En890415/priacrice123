const filesToCache = [
	'/',
    '/lyria.jpg',
];
const cacheName = 'static-v21';

// install
self.addEventListener('install', event => {
    console.log('安裝中......');
    event.waitUntil(
		caches.open(cacheName).then(cache => {
            console.log('Caching App Ok');
			return cache.addAll(filesToCache);
		})
	); 
});
//-----------------------------------------------------------------------------
// activate
self.addEventListener('activate', event => {
    console.log('已準備處理fetch!');
    event.waitUntil(
		caches.keys().then(function(cacheNames) {
			var promiseArr = cacheNames.map(function(item) {
				if (item !== cacheName) {
					// Delete that cached file
                    console.log('已刪除old cache成功');
					return caches.delete(item);
				}
			})
            console.log('已更新過一次cache');
			return Promise.all(promiseArr);
		})
	); // end e.waitUntil
});
//-----------------------------------------------------------------------------
// fetch
self.addEventListener('fetch', event => {
    console.log('now fetch!');
    console.log('event.request:', event.request);
	console.log('[ServiceWorker] Fetch', event.request.url);
    
    event.respondWith(
        caches.match(event.request).then(function (response) {
			return response || fetch(event.request).then(res =>
				// 存 caches 之前，要先打開 caches.open(dataCacheName)
				caches.open(cacheName)
				.then(function(cache) {
					// cache.put(key, value)
					// 下一次 caches.match 會對應到 event.request
					cache.put(event.request, res.clone());
                    console.log('已將新的fetch儲存在cache');
					return res;
				})
			);
		})
  );
    
    
   const url = new URL(event.request.url);
  // serve the horse SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  console.log('url.pathname:',url.pathname);
  console.log('url.origin:',url.origin);
  console.log('location.origin:',location.origin);
  if (url.origin == location.origin && url.pathname == '/lyria.jpg') {
    console.log('url條件達成',url.origin);
    console.log('location條件達成',location.origin);
    event.respondWith(caches.match('/lyria2.png'));
  }
});






