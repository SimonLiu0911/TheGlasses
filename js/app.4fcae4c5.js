(function(n){function e(e){for(var c,r,a=e[0],d=e[1],i=e[2],f=0,h=[];f<a.length;f++)r=a[f],Object.prototype.hasOwnProperty.call(u,r)&&u[r]&&h.push(u[r][0]),u[r]=0;for(c in d)Object.prototype.hasOwnProperty.call(d,c)&&(n[c]=d[c]);l&&l(e);while(h.length)h.shift()();return o.push.apply(o,i||[]),t()}function t(){for(var n,e=0;e<o.length;e++){for(var t=o[e],c=!0,r=1;r<t.length;r++){var a=t[r];0!==u[a]&&(c=!1)}c&&(o.splice(e--,1),n=d(d.s=t[0]))}return n}var c={},r={app:0},u={app:0},o=[];function a(n){return d.p+"js/"+({}[n]||n)+"."+{"chunk-0c360b2f":"81b9f5df","chunk-1d7048b8":"1df7da6d","chunk-25fff434":"f62d53a3","chunk-28b20186":"c2880731","chunk-29b7d231":"51fecab8","chunk-3b9dbdd6":"83c3d642","chunk-59ce5034":"8b42cc39","chunk-5c8bd014":"d7bb48c7","chunk-657fcd50":"697d9b59","chunk-6597198a":"856108d4","chunk-69f853be":"5d5b1ac7","chunk-77d79f1d":"2e8e7a93","chunk-7ae96aa0":"61682e48","chunk-8d3fc0ec":"d781d315","chunk-f40e2666":"f07a02c2"}[n]+".js"}function d(e){if(c[e])return c[e].exports;var t=c[e]={i:e,l:!1,exports:{}};return n[e].call(t.exports,t,t.exports,d),t.l=!0,t.exports}d.e=function(n){var e=[],t={"chunk-0c360b2f":1,"chunk-1d7048b8":1,"chunk-25fff434":1,"chunk-28b20186":1,"chunk-29b7d231":1,"chunk-3b9dbdd6":1,"chunk-59ce5034":1,"chunk-5c8bd014":1,"chunk-657fcd50":1,"chunk-69f853be":1,"chunk-7ae96aa0":1,"chunk-8d3fc0ec":1,"chunk-f40e2666":1};r[n]?e.push(r[n]):0!==r[n]&&t[n]&&e.push(r[n]=new Promise((function(e,t){for(var c="css/"+({}[n]||n)+"."+{"chunk-0c360b2f":"cff33c7b","chunk-1d7048b8":"9f110d62","chunk-25fff434":"3561b679","chunk-28b20186":"5a18c9bc","chunk-29b7d231":"adf380d3","chunk-3b9dbdd6":"2389b175","chunk-59ce5034":"c505e64e","chunk-5c8bd014":"c505e64e","chunk-657fcd50":"110e3330","chunk-6597198a":"31d6cfe0","chunk-69f853be":"0b5865c9","chunk-77d79f1d":"31d6cfe0","chunk-7ae96aa0":"b9a37f18","chunk-8d3fc0ec":"c505e64e","chunk-f40e2666":"838fd3cd"}[n]+".css",u=d.p+c,o=document.getElementsByTagName("link"),a=0;a<o.length;a++){var i=o[a],f=i.getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(f===c||f===u))return e()}var h=document.getElementsByTagName("style");for(a=0;a<h.length;a++){i=h[a],f=i.getAttribute("data-href");if(f===c||f===u)return e()}var l=document.createElement("link");l.rel="stylesheet",l.type="text/css",l.onload=e,l.onerror=function(e){var c=e&&e.target&&e.target.src||u,o=new Error("Loading CSS chunk "+n+" failed.\n("+c+")");o.code="CSS_CHUNK_LOAD_FAILED",o.request=c,delete r[n],l.parentNode.removeChild(l),t(o)},l.href=u;var p=document.getElementsByTagName("head")[0];p.appendChild(l)})).then((function(){r[n]=0})));var c=u[n];if(0!==c)if(c)e.push(c[2]);else{var o=new Promise((function(e,t){c=u[n]=[e,t]}));e.push(c[2]=o);var i,f=document.createElement("script");f.charset="utf-8",f.timeout=120,d.nc&&f.setAttribute("nonce",d.nc),f.src=a(n);var h=new Error;i=function(e){f.onerror=f.onload=null,clearTimeout(l);var t=u[n];if(0!==t){if(t){var c=e&&("load"===e.type?"missing":e.type),r=e&&e.target&&e.target.src;h.message="Loading chunk "+n+" failed.\n("+c+": "+r+")",h.name="ChunkLoadError",h.type=c,h.request=r,t[1](h)}u[n]=void 0}};var l=setTimeout((function(){i({type:"timeout",target:f})}),12e4);f.onerror=f.onload=i,document.head.appendChild(f)}return Promise.all(e)},d.m=n,d.c=c,d.d=function(n,e,t){d.o(n,e)||Object.defineProperty(n,e,{enumerable:!0,get:t})},d.r=function(n){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},d.t=function(n,e){if(1&e&&(n=d(n)),8&e)return n;if(4&e&&"object"===typeof n&&n&&n.__esModule)return n;var t=Object.create(null);if(d.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:n}),2&e&&"string"!=typeof n)for(var c in n)d.d(t,c,function(e){return n[e]}.bind(null,c));return t},d.n=function(n){var e=n&&n.__esModule?function(){return n["default"]}:function(){return n};return d.d(e,"a",e),e},d.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},d.p="",d.oe=function(n){throw console.error(n),n};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],f=i.push.bind(i);i.push=e,i=i.slice();for(var h=0;h<i.length;h++)e(i[h]);var l=f;o.push([0,"chunk-vendors"]),t()})({0:function(n,e,t){n.exports=t("56d7")},"56d7":function(n,e,t){"use strict";t.r(e);t("e260"),t("e6cf"),t("cca6"),t("a79d");var c=t("2b0e"),r=(t("4989"),t("ab8b"),t("9062")),u=t.n(r),o=(t("e40d"),t("bc3a")),a=t.n(o),d=t("a7fe"),i=t.n(d),f=t("039f"),h=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{attrs:{id:"app"}},[t("router-view")],1)},l=[],p={data:function(){return{}}},b=p,s=(t("5c0b"),t("2877")),k=Object(s["a"])(b,h,l,!1,null,null,null),m=k.exports,v=(t("d3b7"),t("8c4f"));c["default"].use(v["a"]);var g=[{path:"/",component:function(){return t.e("chunk-5c8bd014").then(t.bind(null,"2bc2"))},children:[{path:"",component:function(){return t.e("chunk-29b7d231").then(t.bind(null,"9cbb"))}},{path:"shop",component:function(){return t.e("chunk-25fff434").then(t.bind(null,"ecfc"))}},{path:"checkout",component:function(){return t.e("chunk-7ae96aa0").then(t.bind(null,"2cf6"))}},{path:"cart",component:function(){return t.e("chunk-f40e2666").then(t.bind(null,"62b3"))}},{path:"FAQ",component:function(){return t.e("chunk-0c360b2f").then(t.bind(null,"43f1"))}}]},{path:"/login",component:function(){return t.e("chunk-28b20186").then(t.bind(null,"676a"))}},{path:"/admin",component:function(){return t.e("chunk-59ce5034").then(t.bind(null,"459d"))},children:[{path:"/admin/productsmanagement",component:function(){return t.e("chunk-1d7048b8").then(t.bind(null,"4044"))}},{path:"/admin/ordersmanagement",component:function(){return t.e("chunk-77d79f1d").then(t.bind(null,"d04a"))}},{path:"/admin/orderdetail/:id",component:function(){return t.e("chunk-657fcd50").then(t.bind(null,"6dd8"))}},{path:"/admin/couponsmanagement",component:function(){return t.e("chunk-69f853be").then(t.bind(null,"72e7"))}},{path:"/admin/coupondetail/:id",component:function(){return t.e("chunk-6597198a").then(t.bind(null,"7cb2"))}},{path:"/admin/storagesmanagement",component:function(){return t.e("chunk-3b9dbdd6").then(t.bind(null,"9291"))}}]},{path:"*",component:function(){return t.e("chunk-8d3fc0ec").then(t.bind(null,"8cdb"))}}],y=new v["a"]({routes:g}),w=y,O=t("2f62");c["default"].use(O["a"]);var j=new O["a"].Store({state:{isLoading:!1},mutations:{isLoading:function(n){n.isLoading=!0},finishedLoading:function(n){n.isLoading=!1}}}),L=j;c["default"].config.productionTip=!1,c["default"].component("Loading",u.a),c["default"].use(i.a,a.a),c["default"].component("validation-provider",f["ValidationProvider"]),c["default"].component("validation-observer",f["ValidationObserver"]),Object(f["configure"])({classes:{valid:"is-valid",invalid:"is-invalid"}}),new c["default"]({router:w,store:L,render:function(n){return n(m)}}).$mount("#app")},"5c0b":function(n,e,t){"use strict";var c=t("9c0c"),r=t.n(c);r.a},"9c0c":function(n,e,t){}});
//# sourceMappingURL=app.4fcae4c5.js.map