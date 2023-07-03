"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[685],{644:function(e,t,r){r.d(t,{Ag:function(){return p},Eo:function(){return l},H_:function(){return f},T2:function(){return d},a4:function(){return m}});var n=r(861),a=r(757),c=r.n(a),o=r(243),s="7f73521c2f89ba4f40b3583136c2bf19",i="https://api.themoviedb.org/3/";function u(e){return Promise.reject(new Error("Wrong request!! ".concat(e.message,", nothing was found. ")))}var l=function(){var e=(0,n.Z)(c().mark((function e(){var t;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"trending/all/day"),{params:{api_key:s,page:1}});case 3:return t=e.sent,e.abrupt("return",t.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}}(),p=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"movie/").concat(t),{params:{api_key:s}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),f=function(){var e=(0,n.Z)(c().mark((function e(t){var r,n,a;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="".concat(i,"search/movie"),n={api_key:s,query:"".concat(t),page:1},e.prev=2,e.next=5,o.Z.get(r,{params:n});case 5:return a=e.sent,e.abrupt("return",a.data);case 9:return e.prev=9,e.t0=e.catch(2),e.abrupt("return",u(e.t0));case 12:case"end":return e.stop()}}),e,null,[[2,9]])})));return function(t){return e.apply(this,arguments)}}(),d=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"movie/").concat(t,"/reviews"),{params:{api_key:s}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}(),m=function(){var e=(0,n.Z)(c().mark((function e(t){var r;return c().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.Z.get("".concat(i,"movie/").concat(t,"/credits"),{params:{api_key:s}});case 3:return r=e.sent,e.abrupt("return",r.data);case 7:return e.prev=7,e.t0=e.catch(0),e.abrupt("return",u(e.t0));case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(t){return e.apply(this,arguments)}}()},685:function(e,t,r){r.r(t),r.d(t,{default:function(){return v}});var n=r(413),a=r(861),c=r(885),o=r(757),s=r.n(o),i=r(689),u=r(731),l=r(644),p=r(791),f=r(311),d=r.n(f),m=r(184);function v(){var e,t,r=(0,p.useState)({}),o=(0,c.Z)(r,2),f=o[0],v=o[1],h=(0,i.UO)().movieId,g=(0,i.TH)(),b=(0,p.useRef)(null!==(e=null===(t=g.state)||void 0===t?void 0:t.from)&&void 0!==e?e:"/");(0,p.useEffect)((function(){var e=function(){var e=(0,a.Z)(s().mark((function e(){return s().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,(0,l.Ag)(h);case 2:return e.abrupt("return",e.sent);case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e().then((function(e){return v((function(t){return(0,n.Z)({},e)}))})).catch((function(e){return alert(e.message)}))}),[h]);var y=f.poster_path?"https://image.tmdb.org/t/p/w200".concat(f.poster_path):"https://via.placeholder.com/200x300",j=f.genres&&f.genres.map((function(e){return(0,m.jsx)("p",{children:e.name},function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(e)).reduce((function(e,t){return e+((t&=63)<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t>62?"-":"_")}),"")}(5))}));return(0,m.jsxs)(m.Fragment,{children:[(0,m.jsxs)(u.OL,{className:"backButton",to:b.current,children:[(0,m.jsx)("span",{children:"<-"})," ",(0,m.jsx)("span",{children:"Go back"})]}),(0,m.jsxs)("div",{className:"movieContent",children:[y&&(0,m.jsx)("img",{className:"moviePoster",src:y,alt:f.title}),(0,m.jsxs)("div",{children:[f.title&&(0,m.jsxs)("h2",{children:[f.title," (",f.release_date.split("-")[0],")"]}),(0,m.jsx)("p",{children:"User Score: 71%"}),(0,m.jsx)("h3",{children:"Overview"}),(0,m.jsx)("p",{children:f.overview}),(0,m.jsx)("h3",{children:"Genres"}),(0,m.jsx)("div",{className:"genres",children:j&&j})]})]}),(0,m.jsxs)("div",{children:[(0,m.jsx)("h3",{children:"Additional information"}),(0,m.jsxs)("ul",{className:"navInfo",children:[(0,m.jsx)("li",{children:(0,m.jsx)(u.OL,{to:"casts",children:"Cast"})}),(0,m.jsx)("li",{children:(0,m.jsx)(u.OL,{to:"reviews",children:"Review"})})]})]}),(0,m.jsx)("div",{className:"childConponents",children:(0,m.jsx)(p.Suspense,{fallback:(0,m.jsx)(d(),{color:"#ffaa06",loading:!0,size:15,speedMultiplier:1,"aria-label":"Loading Spinner","data-testid":"loader"}),children:(0,m.jsx)(i.j3,{})})})]})}},311:function(e,t,r){var n=this&&this.__assign||function(){return n=Object.assign||function(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var a in t=arguments[r])Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e},n.apply(this,arguments)},a=this&&this.__createBinding||(Object.create?function(e,t,r,n){void 0===n&&(n=r);var a=Object.getOwnPropertyDescriptor(t,r);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[r]}}),Object.defineProperty(e,n,a)}:function(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}),c=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),o=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)"default"!==r&&Object.prototype.hasOwnProperty.call(e,r)&&a(t,e,r);return c(t,e),t},s=this&&this.__rest||function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var a=0;for(n=Object.getOwnPropertySymbols(e);a<n.length;a++)t.indexOf(n[a])<0&&Object.prototype.propertyIsEnumerable.call(e,n[a])&&(r[n[a]]=e[n[a]])}return r};Object.defineProperty(t,"__esModule",{value:!0});var i=o(r(791)),u=r(945),l=r(74),p=[1,3,5],f=[(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(-".concat(p[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(p[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(p[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-0"),(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(-".concat(p[0],"rem) scale(0.75)}\n    50% {transform: translateX(-").concat(p[1],"rem) scale(0.6)}\n    75% {transform: translateX(-").concat(p[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-1"),(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(-".concat(p[0],"rem) scale(0.75)}\n    75% {transform: translateX(-").concat(p[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-2"),(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(".concat(p[0],"rem) scale(0.75)}\n    75% {transform: translateX(").concat(p[0],"rem) scale(0.75)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-3"),(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(".concat(p[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(p[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(p[1],"rem) scale(0.6)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-4"),(0,l.createAnimation)("PropagateLoader","25% {transform: translateX(".concat(p[0],"rem) scale(0.75)}\n    50% {transform: translateX(").concat(p[1],"rem) scale(0.6)}\n    75% {transform: translateX(").concat(p[2],"rem) scale(0.5)}\n    95% {transform: translateX(0rem) scale(1)}"),"propogate-5")];t.default=function(e){var t=e.loading,r=void 0===t||t,a=e.color,c=void 0===a?"#000000":a,o=e.speedMultiplier,l=void 0===o?1:o,p=e.cssOverride,d=void 0===p?{}:p,m=e.size,v=void 0===m?15:m,h=s(e,["loading","color","speedMultiplier","cssOverride","size"]),g=(0,u.parseLengthAndUnit)(v),b=g.value,y=g.unit,j=n({display:"inherit",position:"relative"},d),O=function(e){return{position:"absolute",fontSize:"".concat(b/3).concat(y),width:"".concat(b).concat(y),height:"".concat(b).concat(y),background:c,borderRadius:"50%",animation:"".concat(f[e]," ").concat(1.5/l,"s infinite"),animationFillMode:"forwards"}};return r?i.createElement("span",n({style:j},h),i.createElement("span",{style:O(0)}),i.createElement("span",{style:O(1)}),i.createElement("span",{style:O(2)}),i.createElement("span",{style:O(3)}),i.createElement("span",{style:O(4)}),i.createElement("span",{style:O(5)})):null}},74:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.createAnimation=void 0;t.createAnimation=function(e,t,r){var n="react-spinners-".concat(e,"-").concat(r);if("undefined"==typeof window||!window.document)return n;var a=document.createElement("style");document.head.appendChild(a);var c=a.sheet,o="\n    @keyframes ".concat(n," {\n      ").concat(t,"\n    }\n  ");return c&&c.insertRule(o,0),n}},945:function(e,t){Object.defineProperty(t,"__esModule",{value:!0}),t.cssValue=t.parseLengthAndUnit=void 0;var r={cm:!0,mm:!0,in:!0,px:!0,pt:!0,pc:!0,em:!0,ex:!0,ch:!0,rem:!0,vw:!0,vh:!0,vmin:!0,vmax:!0,"%":!0};function n(e){if("number"===typeof e)return{value:e,unit:"px"};var t,n=(e.match(/^[0-9.]*/)||"").toString();t=n.includes(".")?parseFloat(n):parseInt(n,10);var a=(e.match(/[^0-9]*$/)||"").toString();return r[a]?{value:t,unit:a}:(console.warn("React Spinners: ".concat(e," is not a valid css value. Defaulting to ").concat(t,"px.")),{value:t,unit:"px"})}t.parseLengthAndUnit=n,t.cssValue=function(e){var t=n(e);return"".concat(t.value).concat(t.unit)}},942:function(e,t,r){function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}r.d(t,{Z:function(){return n}})},413:function(e,t,r){r.d(t,{Z:function(){return c}});var n=r(942);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}}}]);
//# sourceMappingURL=685.37cb09dc.chunk.js.map