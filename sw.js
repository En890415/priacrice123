const filesToCache = [
    './lyria.jpg',
    './lyria2.png'
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
    
    
    
   const url = new URL(event.request.url);
  // serve the horse SVG from the cache if the request is
  // same-origin and the path is '/dog.svg'
  //console.log('url.pathname:',url.pathname);
  //console.log('url.origin:',url.origin);
  //console.log('location.origin:',location.origin);
  if (url.origin == location.origin && url.pathname == '/priacrice123/lyria.jpg') {
    console.log('url條件達成',url.origin);
    console.log('location條件達成',location.origin);
    event.respondWith(caches.match('./lyria2.png'));
  }
});
//-----------------------------------------------------------------------------
// deferredPromt 用來儲存 beforeinstallprompt 事件
var deferredPrompt;

self.addEventListener('beforeinstallprompt', function(e) {
  console.log('beforeinstallprompt Event fired');
  e.preventDefault();

  // Stash the event so it can be triggered later.
  deferredPrompt = e;

  return false;
});
self.addEventListener('click', function() {
  if(deferredPrompt !== undefined) {
    // The user has had a positive interaction with our app and Chrome
    // has tried to prompt previously, so let's show the prompt.
    deferredPrompt.prompt();

    // 看看使用者針對這個 prompt 做了什麼回應
    deferredPrompt.userChoice.then(function(choiceResult) {
      console.log(choiceResult.outcome);

      if(choiceResult.outcome == 'dismissed') {
        console.log('使用者拒絕加入主畫面');
      }
      else {
        console.log('使用者已加入到主畫面');
      }
      // We no longer need the prompt.  Clear it up.
      deferredPrompt = null;
    });
  }
});
