(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[21998],{22122:function(t,n,e){"use strict";function r(){return(r=Object.assign||function(t){for(var n=1;n<arguments.length;n++){var e=arguments[n];for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r])}return t}).apply(this,arguments)}e.d(n,{Z:function(){return r}})},19756:function(t,n,e){"use strict";function r(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}e.d(n,{Z:function(){return r}})},3905:function(t,n,e){"use strict";e.d(n,{Zo:function(){return p},kt:function(){return f}});var r=e(67294);function o(t,n,e){return n in t?Object.defineProperty(t,n,{value:e,enumerable:!0,configurable:!0,writable:!0}):t[n]=e,t}function a(t,n){var e=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(t,n).enumerable}))),e.push.apply(e,r)}return e}function l(t){for(var n=1;n<arguments.length;n++){var e=null!=arguments[n]?arguments[n]:{};n%2?a(Object(e),!0).forEach((function(n){o(t,n,e[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(e)):a(Object(e)).forEach((function(n){Object.defineProperty(t,n,Object.getOwnPropertyDescriptor(e,n))}))}return t}function c(t,n){if(null==t)return{};var e,r,o=function(t,n){if(null==t)return{};var e,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||(o[e]=t[e]);return o}(t,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)e=a[r],n.indexOf(e)>=0||Object.prototype.propertyIsEnumerable.call(t,e)&&(o[e]=t[e])}return o}var i=r.createContext({}),u=function(t){var n=r.useContext(i),e=n;return t&&(e="function"==typeof t?t(n):l(l({},n),t)),e},p=function(t){var n=u(t.components);return r.createElement(i.Provider,{value:n},t.children)},d={inlineCode:"code",wrapper:function(t){var n=t.children;return r.createElement(r.Fragment,{},n)}},s=r.forwardRef((function(t,n){var e=t.components,o=t.mdxType,a=t.originalType,i=t.parentName,p=c(t,["components","mdxType","originalType","parentName"]),s=u(e),f=o,k=s["".concat(i,".").concat(f)]||s[f]||d[f]||a;return e?r.createElement(k,l(l({ref:n},p),{},{components:e})):r.createElement(k,l({ref:n},p))}));function f(t,n){var e=arguments,o=n&&n.mdxType;if("string"==typeof t||o){var a=e.length,l=new Array(a);l[0]=s;var c={};for(var i in n)hasOwnProperty.call(n,i)&&(c[i]=n[i]);c.originalType=t,c.mdxType="string"==typeof t?t:o,l[1]=c;for(var u=2;u<a;u++)l[u]=e[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,e)}s.displayName="MDXCreateElement"},37479:function(t,n,e){"use strict";e.r(n),e.d(n,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return i},default:function(){return p}});var r=e(22122),o=e(19756),a=(e(67294),e(3905)),l={title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},c={unversionedId:"apis/open-api/account/getAccountInfoSync",id:"version-2.x/apis/open-api/account/getAccountInfoSync",isDocsHomePage:!1,title:"Taro.getAccountInfoSync()",description:"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f",source:"@site/versioned_docs/version-2.x/apis/open-api/account/getAccountInfoSync.md",sourceDirName:"apis/open-api/account",slug:"/apis/open-api/account/getAccountInfoSync",permalink:"/taro/docs/2.x/apis/open-api/account/getAccountInfoSync",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/open-api/account/getAccountInfoSync.md",version:"2.x",sidebar_label:"getAccountInfoSync",frontMatter:{title:"Taro.getAccountInfoSync()",sidebar_label:"getAccountInfoSync"},sidebar:"version-2.x/API",previous:{title:"Taro.navigateBackMiniProgram(option)",permalink:"/taro/docs/2.x/apis/open-api/navigate/navigateBackMiniProgram"},next:{title:"Taro.getUserProfile(option)",permalink:"/taro/docs/2.x/apis/open-api/user-info/getUserProfile"}},i=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"AccountInfo",id:"accountinfo",children:[]},{value:"MiniProgram",id:"miniprogram",children:[]},{value:"Plugin",id:"plugin",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:i};function p(t){var n=t.components,e=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,e,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u83b7\u53d6\u5f53\u524d\u5e10\u53f7\u4fe1\u606f"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/account-info/wx.getAccountInfoSync.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"() => AccountInfo\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"accountinfo"},"AccountInfo"),(0,a.kt)("p",null,"\u5e10\u53f7\u4fe1\u606f"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"miniProgram"),(0,a.kt)("td",null,(0,a.kt)("code",null,"MiniProgram")),(0,a.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"plugin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"Plugin")),(0,a.kt)("td",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09")))),(0,a.kt)("h3",{id:"miniprogram"},"MiniProgram"),(0,a.kt)("p",null,"\u5c0f\u7a0b\u5e8f\u5e10\u53f7\u4fe1\u606f"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"appId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u5c0f\u7a0b\u5e8f appId")))),(0,a.kt)("h3",{id:"plugin"},"Plugin"),(0,a.kt)("p",null,"\u63d2\u4ef6\u5e10\u53f7\u4fe1\u606f\uff08\u4ec5\u5728\u63d2\u4ef6\u4e2d\u8c03\u7528\u65f6\u5305\u542b\u8fd9\u4e00\u9879\uff09"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"appId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u63d2\u4ef6 appId")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"version"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u63d2\u4ef6\u7248\u672c\u53f7")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"const accountInfo = Taro.getAccountInfoSync();\n\nconsole.log(accountInfo.miniProgram.appId) // \u5c0f\u7a0b\u5e8f appId\nconsole.log(accountInfo.plugin.appId) // \u63d2\u4ef6 appId\nconsole.log(accountInfo.plugin.version) // \u63d2\u4ef6\u7248\u672c\u53f7\uff0c 'a.b.c' \u8fd9\u6837\u7684\u5f62\u5f0f\n")),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.getAccountInfoSync"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);