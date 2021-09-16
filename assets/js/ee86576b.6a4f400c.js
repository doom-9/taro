(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[68351],{22122:function(t,e,n){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(t[a]=n[a])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return a}})},19756:function(t,e,n){"use strict";function a(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return a}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},o=Object.keys(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(a=0;a<o.length;a++)n=o[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var i=a.createContext({}),s=function(t){var e=a.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return a.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},d=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=r,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?a.createElement(k,l(l({ref:e},u),{},{components:n})):a.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},42244:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return u}});var a=n(22122),r=n(19756),o=(n(67294),n(3905)),l={title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},c={unversionedId:"apis/canvas/canvasPutImageData",id:"version-3.x/apis/canvas/canvasPutImageData",isDocsHomePage:!1,title:"Taro.canvasPutImageData(option, component)",description:'Draws pixel data to the canvas. In a custom component, the "this" of the custom component instance is passed as the second parameter to operate on the canvas component in this component.',source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/canvas/canvasPutImageData.md",sourceDirName:"apis/canvas",slug:"/apis/canvas/canvasPutImageData",permalink:"/taro/docs/apis/canvas/canvasPutImageData",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/canvas/canvasPutImageData.md",version:"3.x",sidebar_label:"canvasPutImageData",frontMatter:{title:"Taro.canvasPutImageData(option, component)",sidebar_label:"canvasPutImageData"},sidebar:"version-3.x/API",previous:{title:"Taro.canvasToTempFilePath(option, component)",permalink:"/taro/docs/apis/canvas/canvasToTempFilePath"},next:{title:"Taro.canvasGetImageData(option, component)",permalink:"/taro/docs/apis/canvas/canvasGetImageData"}},i=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],s={toc:i};function u(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,a.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Draws pixel data to the canvas. In a custom component, the "this" of the custom component instance is passed as the second parameter to operate on the ',(0,o.kt)("inlineCode",{parentName:"p"},"canvas")," component in this component."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/canvas/wx.canvasPutImageData.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option, component?: Record<string, any>) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"canvasId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The canvas ID, which is the canvas-id property passed into the ",(0,o.kt)("code",null,"canvas")," component.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"data"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Uint8ClampedArray")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The image pixel data, which is a one-dimensional array in which every four items express the RGBA color of one pixel.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"height"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The height of the rectangular area of the source image.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"width"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The width of the rectangular area of the source image.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"x"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The position offset (x-axis offset) of the source image data on the destination canvas.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"y"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The position offset (y-axis offset) of the source image data on the destination canvas.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"const data = new Uint8ClampedArray([255, 0, 0, 1])\nTaro.canvasPutImageData({\n  canvasId: 'myCanvas',\n  x: 0,\n  y: 0,\n  width: 1,\n  data: data,\n  success: function (res) {}\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.canvasPutImageData"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);