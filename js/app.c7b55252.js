(function(t){function e(e){for(var r,a,o=e[0],c=e[1],l=e[2],u=0,d=[];u<o.length;u++)a=o[u],Object.prototype.hasOwnProperty.call(s,a)&&s[a]&&d.push(s[a][0]),s[a]=0;for(r in c)Object.prototype.hasOwnProperty.call(c,r)&&(t[r]=c[r]);f&&f(e);while(d.length)d.shift()();return i.push.apply(i,l||[]),n()}function n(){for(var t,e=0;e<i.length;e++){for(var n=i[e],r=!0,a=1;a<n.length;a++){var o=n[a];0!==s[o]&&(r=!1)}r&&(i.splice(e--,1),t=c(c.s=n[0]))}return t}var r={},a={app:0},s={app:0},i=[];function o(t){return c.p+"js/"+({}[t]||t)+"."+{"chunk-2d0e2517":"1928d480","chunk-506e4c4e":"c409475b","chunk-66b905e6":"0cd2f81c","chunk-ec227c9e":"2728b79a"}[t]+".js"}function c(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(t){var e=[],n={"chunk-506e4c4e":1,"chunk-66b905e6":1,"chunk-ec227c9e":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise((function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-2d0e2517":"31d6cfe0","chunk-506e4c4e":"28372fc2","chunk-66b905e6":"78ad17ec","chunk-ec227c9e":"8f04387a"}[t]+".css",s=c.p+r,i=document.getElementsByTagName("link"),o=0;o<i.length;o++){var l=i[o],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===r||u===s))return e()}var d=document.getElementsByTagName("style");for(o=0;o<d.length;o++){l=d[o],u=l.getAttribute("data-href");if(u===r||u===s)return e()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=e,f.onerror=function(e){var r=e&&e.target&&e.target.src||s,i=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=r,delete a[t],f.parentNode.removeChild(f),n(i)},f.href=s;var v=document.getElementsByTagName("head")[0];v.appendChild(f)})).then((function(){a[t]=0})));var r=s[t];if(0!==r)if(r)e.push(r[2]);else{var i=new Promise((function(e,n){r=s[t]=[e,n]}));e.push(r[2]=i);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=o(t);var d=new Error;l=function(e){u.onerror=u.onload=null,clearTimeout(f);var n=s[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+r+": "+a+")",d.name="ChunkLoadError",d.type=r,d.request=a,n[1](d)}s[t]=void 0}};var f=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=r,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)c.d(n,r,function(e){return t[e]}.bind(null,r));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/",c.oe=function(t){throw console.error(t),t};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=e,l=l.slice();for(var d=0;d<l.length;d++)e(l[d]);var f=u;i.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"3a31":function(t,e,n){t.exports=n.p+"img/獲利圖.53b585d8.png"},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return"/invest"===t.$route.path?n("div",{attrs:{id:"invest"}},[n("router-view")],1):n("div",[n("div",{attrs:{id:"nav"}},t._l(t.pages,(function(e,r){return n("router-link",{key:r,attrs:{to:e}},[t._v(t._s(r))])})),1),n("div",{attrs:{id:"section"}},[n("div",{attrs:{id:"article"}},[n("router-view")],1)])])},s=[],i={data:function(){return{pages:{home:"",about:"/about",dinner:"/dinner",test:"/test"}}}},o=i,c=(n("5c0b"),n("2877")),l=Object(c["a"])(o,a,s,!1,null,null,null),u=l.exports,d=n("9483");Object(d["a"])("/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(t){console.error("Error during service worker registration:",t)}});var f=n("8c4f"),v=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"home"},[r("img",{attrs:{alt:"Vue logo",src:n("cf05")}}),r("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},p=[],h=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",[t._v(t._s(t.msg))])},m=[],g={name:"HelloWorld",props:{msg:String}},b=g,_=(n("df33"),Object(c["a"])(b,h,m,!1,null,"4cdfecb7",null)),C=_.exports,y={name:"Home",components:{HelloWorld:C}},k=y,w=Object(c["a"])(k,v,p,!1,null,null,null),O=w.exports,x=(n("bf34"),function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),j=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"about"},[n("h1",[t._v("This is an error page")])])}],E={},P=Object(c["a"])(E,x,j,!1,null,null,null),$=P.exports;r["a"].use(f["a"]);const S=new f["a"]({routes:[{path:"/",component:O},{path:"/invest",component:t=>Promise.resolve().then(function(){var e=[n("bf34")];t.apply(null,e)}.bind(this)).catch(n.oe)},{path:"/about",component:t=>n.e("chunk-2d0e2517").then(function(){var e=[n("7dd8")];t.apply(null,e)}.bind(this)).catch(n.oe)},{path:"/dinner",component:t=>n.e("chunk-66b905e6").then(function(){var e=[n("cd60")];t.apply(null,e)}.bind(this)).catch(n.oe)},{path:"/test",component:t=>n.e("chunk-ec227c9e").then(function(){var e=[n("bd8c")];t.apply(null,e)}.bind(this)).catch(n.oe)},{path:"/kajsidojmamsikodmisoa",component:t=>n.e("chunk-506e4c4e").then(function(){var e=[n("ba92")];t.apply(null,e)}.bind(this)).catch(n.oe)},{path:"/*",component:$}]});var T=S,A=n("2f62");r["a"].use(A["a"]);var N=new A["a"].Store({state:{},mutations:{},actions:{},modules:{}}),L=n("bc3a"),H=n.n(L),M=n("130e");n("f5df");r["a"].use(M["a"],H.a),r["a"].config.productionTip=!1,new r["a"]({router:T,store:N,render:function(t){return t(u)}}).$mount("#app")},"5c0b":function(t,e,n){"use strict";n("9c0c")},"68b1":function(t,e,n){},6925:function(t,e,n){},"9c0c":function(t,e,n){},b506:function(t,e,n){t.exports=n.p+"img/學員分享2.4f4e7584.jpg"},bf34:function(t,e,n){"use strict";n.r(e);var r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"root"},[t.add?n("div",{staticClass:"add"},[t._v(t._s(t.add)+" 已領取")]):t._e(),n("div",{staticClass:"layout main"},[n("div",{staticClass:"group"},[t._m(0),n("div",{staticClass:"content"},[n("div",{staticClass:"link"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.go.apply(null,arguments)}}},[t._v("LINE 點此領取")])]),t._m(1)])])]),t._m(2),t._m(3),t._m(4),n("div",{staticClass:"layout main"},[n("div",{staticClass:"group"},[n("div",{staticClass:"content"},[n("div",{staticClass:"link"},[n("a",{attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.go.apply(null,arguments)}}},[t._v("LINE 點此領取")])])])])])])},a=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"caption"},[n("h1",[t._v("最強理財課，賺錢原來如此簡單")]),n("div",{staticClass:"price"},[t._v("25 元/人")]),n("div",{staticClass:"p"},[t._v("現在不用錢立刻領取！")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",[t._v(" 有別於一般外面的財經課程，"),n("br"),t._v(" 我們沒有虛無飄渺的投資心法，"),n("br"),t._v(" 沒有無法複製的實踐方法，"),n("br"),t._v(" 只教你如何用輕鬆闖蕩股海！ ")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout introduce"},[n("div",{staticClass:"group"},[n("div",{staticClass:"essay"},[n("div",{staticClass:"p"},[t._v("不太會投顧董事長")]),n("div",{staticClass:"name"},[n("div",{staticClass:"title"},[t._v("業餘財經")]),n("div",{staticClass:"text"},[t._v("李中中 老師")])]),n("div",{staticClass:"p"},[t._v("暢銷書《還沒致富》作者")])]),n("div",{staticClass:"man"})])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout extend"},[r("div",{staticClass:"group"},[r("ul",[r("li",[r("div",{staticClass:"label"},[t._v("現任")]),r("div",{staticClass:"text"},[t._v("不太會投顧董事長")])]),r("li",[r("div",{staticClass:"label"},[t._v("經歷")]),r("div",{staticClass:"text"},[t._v("兆豐金控-場外兼職保全、臺灣金控-活動飲料遞送員")])]),r("li",[r("div",{staticClass:"label"},[t._v("著作")]),r("div",{staticClass:"text"},[t._v("《還沒致富》《投資最大的秘密：賺錢的贏、虧錢的輸》《跟我這樣輕鬆投資，每年多賺一碗滷肉飯》")])]),r("li",[r("div",{staticClass:"label"},[t._v("績效")]),r("div",{staticClass:"text"},[r("dt",[r("dd",[r("div",{staticClass:"explan"},[t._v("大魯閣(TPE: 1432) 在 2019 從 15.09 元開始進場買進，最高在 2023 賣 15.90 元，波段總獲利達 5.31% (圖一)，遠超一般銀行定存 5%。")]),r("div",{staticClass:"image"},[r("img",{attrs:{src:n("3a31"),alt:""}})])]),r("dd",[r("div",{staticClass:"explan"},[t._v("2015至2023創造近 0.3% 年化報酬率，8年投資總獲利高達兩百多元。")])])])])])])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"layout share"},[r("div",{staticClass:"group"},[r("p",[t._v("學員口碑一致好評")]),r("ul",[r("li",[r("img",{attrs:{src:n("cd0a"),alt:""}})]),r("li",[r("img",{attrs:{src:n("b506"),alt:""}})]),r("li",[r("img",{attrs:{src:n("dbad"),alt:""}})])])])])}],s={name:"Home",data(){return{add:"",list:["洪O琳","李O程","趙O琳","栗O芳","陳O永","劉O昇","吳O怡","吳O建","李O雅","廖O尼"],timer:null}},methods:{go:function(){alert("你這樣要加我...我會不好意思啦，害羞捏 ><")},addPerson:function(){let t=this.list,e=t.length,n=Math.floor(Math.random()*e);this.add=t[n],this.timer=window.setTimeout(this.removePerson,8e3)},removePerson:function(){this.add="",this.timer=window.setTimeout(this.addPerson,2e3)}},created:function(){this.addPerson()}},i=s,o=(n("ead7"),n("2877")),c=Object(o["a"])(i,r,a,!1,null,"f9f1338e",null);e["default"]=c.exports},cd0a:function(t,e,n){t.exports=n.p+"img/學員分享1.e071909f.jpg"},cf05:function(t,e,n){t.exports=n.p+"img/logo.82b9c7a5.png"},dbad:function(t,e,n){t.exports=n.p+"img/學員分享3.c2631a48.jpg"},df33:function(t,e,n){"use strict";n("6925")},ead7:function(t,e,n){"use strict";n("68b1")}});
//# sourceMappingURL=app.c7b55252.js.map