(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[95877],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},m=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(c,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(f,l(l({ref:e},p),{},{components:n})):r.createElement(f,l({ref:e},p))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13704:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"ImageData",sidebar_label:"ImageData"},i={unversionedId:"apis/canvas/ImageData",id:"version-2.x/apis/canvas/ImageData",isDocsHomePage:!1,title:"ImageData",description:"ImageData \u5bf9\u8c61",source:"@site/versioned_docs/version-2.x/apis/canvas/ImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/ImageData",permalink:"/taro/docs/2.x/apis/canvas/ImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/canvas/ImageData.md",version:"2.x",sidebar_label:"ImageData",frontMatter:{title:"ImageData",sidebar_label:"ImageData"},sidebar:"version-2.x/API",previous:{title:"Image",permalink:"/taro/docs/2.x/apis/canvas/Image"},next:{title:"OffscreenCanvas",permalink:"/taro/docs/2.x/apis/canvas/OffscreenCanvas"}},c=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:c};function p(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"ImageData \u5bf9\u8c61"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/canvas/ImageData.html"},"\u53c2\u8003\u6587\u6863"))),(0,o.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"\u53c2\u6570"),(0,o.kt)("th",null,"\u7c7b\u578b"),(0,o.kt)("th",null,"\u8bf4\u660e"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"data"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Uint8ClampedArray")),(0,o.kt)("td",null,"\u4e00\u7ef4\u6570\u7ec4\uff0c\u5305\u542b\u4ee5 RGBA \u987a\u5e8f\u7684\u6570\u636e\uff0c\u6570\u636e\u4f7f\u7528 0 \u81f3 255\uff08\u5305\u542b\uff09\u7684\u6574\u6570\u8868\u793a")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u4f7f\u7528\u50cf\u7d20\u63cf\u8ff0 ImageData \u7684\u5b9e\u9645\u9ad8\u5ea6")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"\u4f7f\u7528\u50cf\u7d20\u63cf\u8ff0 ImageData \u7684\u5b9e\u9645\u5bbd\u5ea6")))),(0,o.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"ImageData"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);