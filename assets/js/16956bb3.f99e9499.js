(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[16552],{22122:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,{Z:function(){return n}})},19756:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}r.d(e,{Z:function(){return n}})},3905:function(t,e,r){"use strict";r.d(e,{Zo:function(){return p},kt:function(){return m}});var n=r(67294);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function a(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?a(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function i(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},a=Object.keys(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)r=a[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}var u=n.createContext({}),l=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):c(c({},e),t)),r},p=function(t){var e=l(t.components);return n.createElement(u.Provider,{value:e},t.children)},f={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var r=t.components,o=t.mdxType,a=t.originalType,u=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),s=l(r),m=o,d=s["".concat(u,".").concat(m)]||s[m]||f[m]||a;return r?n.createElement(d,c(c({ref:e},p),{},{components:r})):n.createElement(d,c({ref:e},p))}));function m(t,e){var r=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=r.length,c=new Array(a);c[0]=s;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:o,c[1]=i;for(var l=2;l<a;l++)c[l]=r[l];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}s.displayName="MDXCreateElement"},23996:function(t,e,r){"use strict";r.r(e),r.d(e,{frontMatter:function(){return c},metadata:function(){return i},toc:function(){return u},default:function(){return p}});var n=r(22122),o=r(19756),a=(r(67294),r(3905)),c={slug:"2020-04-27-taro-vs-jd",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png"},i={permalink:"/taro/blog/2020-04-27-taro-vs-jd",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2020-04-27-taro-vs-jd.md",source:"@site/blog/2020-04-27-taro-vs-jd.md",title:"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f Taro \u5f00\u53d1\u5bf9\u6bd4\u539f\u751f\u5f00\u53d1\u6d4b\u8bc4",description:"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002",date:"2020-04-27T00:00:00.000Z",formattedDate:"April 27, 2020",tags:[],readingTime:2.015,truncated:!0,prevItem:{title:"\u4f7f\u7528 Taro \u5feb\u901f\u5f00\u53d1\u4eac\u4e1c\u5c0f\u7a0b\u5e8f",permalink:"/taro/blog/2020-04-27-taro-build-jd"},nextItem:{title:"Taro Next H5 \u8de8\u6846\u67b6\u7ec4\u4ef6\u5e93\u5b9e\u8df5",permalink:"/taro/blog/2020-4-13-taro-components"}},u=[],l={toc:u};function p(t){var e=t.components,r=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},l,r,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("img",{parentName:"p",src:"https://img10.360buyimg.com/ling/jfs/t1/112290/35/2116/67015/5e9eee51E11ea7938/886d7ddc2e9e6026.png",alt:null})),(0,a.kt)("p",null,"Taro \u5df2\u7ecf 100% \u652f\u6301\u8f6c\u6362",(0,a.kt)("a",{parentName:"p",href:"https://taro.jd.com/jdmp/index.html"},"\u4eac\u4e1c\u5c0f\u7a0b\u5e8f"),"\uff0c\u53d7\u5230\u4e86\u5f88\u591a\u540c\u5b66\u7684\u5173\u6ce8\u3002\u5f53\u4e2d\u6709\u6b22\u547c\u96c0\u8dc3\u7684\u58f0\u97f3\uff1a\u201c\u4e00\u952e\u8f6c\u6362\u4e3a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\uff0c\u7ec8\u4e8e\u53ef\u4ee5\u51c6\u65f6\u4e0b\u73ed\u5566\u201d\u3002\u4e5f\u6709\u5bf9 Taro \u4e0d\u592a\u4e86\u89e3\u7684\u540c\u5b66\u63d0\u51fa\u4e86\u4e00\u4e9b\u7591\u95ee\uff1a\u201c\u8f6c\u6362\u7684\u6548\u679c\u5982\u4f55\uff1f\u201d\u3001\u201c\u8f6c\u6362\u540e\u4ee3\u7801\u7684\u6027\u80fd\u662f\u5426\u8fbe\u6807\uff1f\u201d \u7b49\u7b49\u3002"),(0,a.kt)("p",null,"\u9488\u5bf9\u5404\u79cd\u7591\u95ee\uff0c\u6211\u4eec\u4ece\u6027\u80fd\u4e0e\u5f00\u53d1\u4f53\u9a8c\u7684\u89d2\u5ea6\u5207\u5165\uff0c\u628a\u4eac\u4e1c\u5c0f\u7a0b\u5e8f\u539f\u751f\u5f00\u53d1\u4e0e Taro \u5f00\u53d1\u8fdb\u884c\u4e86\u4e00\u756a\u5bf9\u6bd4\u3002"))}p.isMDXComponent=!0}}]);