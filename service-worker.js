"use strict";var precacheConfig=[["/edu_platform/index.html","acf93099142bdfc83217d6a877e7e5aa"],["/edu_platform/static/css/main.fefeaa48.css","f129dafcf3b411f4f0fbed386d2b8763"],["/edu_platform/static/js/main.6546b868.js","7874250cdd517e3417eec1ffc15df52c"],["/edu_platform/static/media/1.364539b1.png","364539b18ebd6e58a7c1dc083b873c6c"],["/edu_platform/static/media/2.db272d50.png","db272d507a8e4da16ffb1f5afcf83ab2"],["/edu_platform/static/media/3.eaa5f6a5.png","eaa5f6a5e0acde345476739c577ed620"],["/edu_platform/static/media/4.8902f90e.png","8902f90eeb9d92dce737a937f3fd3c53"],["/edu_platform/static/media/5.efeb17d8.png","efeb17d861458ec422658ac34bc377f4"],["/edu_platform/static/media/6.9e64e10a.png","9e64e10acc911373345e88952e7ed730"],["/edu_platform/static/media/7.c1f2130b.png","c1f2130b99856e969d435140d8556a65"],["/edu_platform/static/media/8.8a5af23b.png","8a5af23b80d0b7c72323d1a1a3e48fac"],["/edu_platform/static/media/Aldrich-Regular.08310f05.svg","08310f05065d04a9f7120417711328c9"],["/edu_platform/static/media/Aldrich-Regular.33b0bcc0.woff","33b0bcc00d3af97a3e1e0b2317c38bb3"],["/edu_platform/static/media/Aldrich-Regular.8e319a5f.ttf","8e319a5f4a08715ef8c181fe03d7b010"],["/edu_platform/static/media/Aldrich-Regular.c0a64bc6.eot","c0a64bc65770d103baff66f783aecee1"],["/edu_platform/static/media/Aldrich-Regular.f2ba1dee.woff2","f2ba1dee94e3a43dec8ffdcc6b6d1e46"],["/edu_platform/static/media/back.6dcbcbc7.png","6dcbcbc7f5e3037bbc174be7eb5a3a75"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var a=new URL(e);return"/"===a.pathname.slice(-1)&&(a.pathname+=t),a.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(t){return new Response(t,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,t,a,r){var n=new URL(e);return r&&n.pathname.match(r)||(n.search+=(n.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(a)),n.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var a=new URL(t).pathname;return e.some(function(e){return a.match(e)})},stripIgnoredUrlParameters=function(e,t){var a=new URL(e);return a.hash="",a.search=a.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return t.every(function(t){return!t.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),a.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],a=e[1],r=new URL(t,self.location),n=createCacheKey(r,hashParamName,a,/\.\w{8}\./);return[r.toString(),n]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(t){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(a){if(!t.has(a)){var r=new Request(a,{credentials:"same-origin"});return fetch(r).then(function(t){if(!t.ok)throw new Error("Request for "+a+" returned a response with status "+t.status);return cleanResponse(t).then(function(t){return e.put(a,t)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var t=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(a){return Promise.all(a.map(function(a){if(!t.has(a.url))return e.delete(a)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var t,a=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching),r="index.html";(t=urlsToCacheKeys.has(a))||(a=addDirectoryIndex(a,r),t=urlsToCacheKeys.has(a));var n="/edu_platform/index.html";!t&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(a=new URL(n,self.location).toString(),t=urlsToCacheKeys.has(a)),t&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(a)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(t){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,t),fetch(e.request)}))}});