(this.webpackJsonppanopticon=this.webpackJsonppanopticon||[]).push([[0],{14:function(n,e,t){n.exports=t(22)},22:function(n,e,t){"use strict";t.r(e);var o=t(0),r=t.n(o),i=t(8),a=t.n(i),c=t(4),s=t.n(c),l=t(9),u=t(13),f=t(1),h=t(2);function d(){var n=Object(f.a)(["\n    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');\n    font-family: 'Ranchers', cursive;\n    left: 0;\n    right: 0;\n    margin: auto;\n    width: 45vh;\n    text-align: center;\n    height: 100vh;\n    line-height: 100vh;\n    font-size: 10vh;\n    display: flex;\n"]);return d=function(){return n},n}var v=h.a.div(d());function p(){var n=Object(f.a)(["\n    margin: 0.25vh;\n    width: 5vh;\n"]);return p=function(){return n},n}var g=h.a.div(p()),w=function(n){var e=n.time.split(" ")[1].split("");return 7===e.length&&(e=["0"].concat(e)),r.a.createElement(v,null,e.map((function(n,e){return r.a.createElement(g,{key:e},n)})))},m=function(n){return new Promise((function(e){return setTimeout(e,n)}))},b=window.navigator.language;var k=function(){var n=Object(o.useState)((new Date).toLocaleString(b)),e=Object(u.a)(n,2),t=e[0],i=e[1];return Object(o.useEffect)((function(){Object(l.a)(s.a.mark((function n(){return s.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=3,m(100);case 3:i((new Date).toLocaleString("ja")),n.next=0;break;case 6:case"end":return n.stop()}}),n)})))()})),r.a.createElement(w,{time:t})},y=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function j(n,e){navigator.serviceWorker.register(n).then((function(n){n.onupdatefound=function(){var t=n.installing;null!=t&&(t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),e&&e.onUpdate&&e.onUpdate(n)):(console.log("Content is cached for offline use."),e&&e.onSuccess&&e.onSuccess(n)))})}})).catch((function(n){console.error("Error during service worker registration:",n)}))}a.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),function(n){if("serviceWorker"in navigator){if(new URL("/panopticon",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/panopticon","/service-worker.js");y?(!function(n,e){fetch(n,{headers:{"Service-Worker":"script"}}).then((function(t){var o=t.headers.get("content-type");404===t.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(n){n.unregister().then((function(){window.location.reload()}))})):j(n,e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e,n),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):j(e,n)}))}}()}},[[14,1,2]]]);
//# sourceMappingURL=main.d71bcb5c.chunk.js.map