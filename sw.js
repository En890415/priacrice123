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
// 把 event 存起來
var installPromptEvent;

// 要顯示 prompt 的延遲
var showTime = 5 * 1000;

window.addEventListener('beforeinstallprompt', function (e) {
  e.preventDefault();
  installPromptEvent = e;
  var data = navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)\./);
  var version = (data && data.length >= 2) ? parseInt(data[2], 10) : null;
  if (version && installPromptEvent.prompt) {

    // 延遲一段時間才顯示 prompt
    setTimeout(function() {
        // 如果 Chrome 版本是 67（含）以下，可以直接呼叫
        if (version <= 67) {
            installPromptEvent.prompt();
            return;
        }

        // 否則的話必須透過 user action 主動觸發
        // 這邊幫 #root 加上 event listener，代表點擊螢幕任何一處都會顯示 prompt
        document.querySelector('#root').addEventListener('click', addToHomeScreen);
    }, showTime)
  }
});

function addToHomeScreen(e) {
    if (installPromptEvent) {
        installPromptEvent.prompt();
        installPromptEvent = null;
        document.querySelector('#root').removeEventListener('click', addToHomeScreen);
    }
}
