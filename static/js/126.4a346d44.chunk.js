"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[126],{126:function(t,n,e){e.r(n),e.d(n,{default:function(){return h}});var r=e(982),a=e(861),u=e(885),c=e(757),s=e.n(c),i=e(791),o=e(689),f=e(731),p=e(644),d=e(184);function h(){var t=(0,i.useState)([]),n=(0,u.Z)(t,2),e=n[0],c=n[1],h=(0,o.TH)();return(0,i.useEffect)((function(){var t=function(){var t=(0,a.Z)(s().mark((function t(){return s().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,(0,p.Eo)().then((function(t){c((function(n){return(0,r.Z)(t.results)}))})).catch((function(t){return alert(t.message)}));case 2:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();t()}),[]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("h2",{children:"Trending today"}),(0,d.jsx)("ul",{children:e.map((function(t){return(0,d.jsx)("li",{children:(0,d.jsxs)(f.OL,{to:"movies/".concat(t.id),state:{from:h},children:[(0,d.jsx)("span",{children:t.media_type}),":",(0,d.jsxs)("span",{children:[" ",t.title?t.title:t.name]})]})},t.id)}))})]})}},644:function(t,n,e){e.d(n,{Ag:function(){return p},Eo:function(){return f},H_:function(){return d},T2:function(){return h},a4:function(){return v}});var r=e(861),a=e(757),u=e.n(a),c=e(243),s="7f73521c2f89ba4f40b3583136c2bf19",i="https://api.themoviedb.org/3/";function o(t){new Promise.reject(new Error("".concat(t," Wrong request!! Nothing was found on your request. ")))}var f=function(){var t=(0,r.Z)(u().mark((function t(){var n;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"trending/all/day"),{params:{api_key:s,page:1}});case 2:if(200!==(n=t.sent).status){t.next=5;break}return t.abrupt("return",n.data);case 5:o(n);case 6:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),p=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n),{params:{api_key:s}});case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:o(e);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),d=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"search/movie"),{params:{api_key:s,query:n,language:"en-US"}});case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:o(e);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),h=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/reviews"),{params:{api_key:s}});case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:o(e);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}(),v=function(){var t=(0,r.Z)(u().mark((function t(n){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"movie/").concat(n,"/credits"),{params:{api_key:s}});case 2:if(200!==(e=t.sent).status){t.next=5;break}return t.abrupt("return",e.data);case 5:o(e);case 6:case"end":return t.stop()}}),t)})));return function(n){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=126.4a346d44.chunk.js.map