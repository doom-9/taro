(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37541],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,l=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(n),f=a,b=d["".concat(l,".").concat(f)]||d[f]||s[f]||p;return n?r.createElement(b,o(o({ref:t},u),{},{components:n})):r.createElement(b,o({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,o=new Array(p);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<p;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},51907:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return l},default:function(){return u}});var r=n(22122),a=n(19756),p=(n(67294),n(3905)),o={title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},i={unversionedId:"apis/base/weapp/app-event/onAppHide",id:"version-2.x/apis/base/weapp/app-event/onAppHide",isDocsHomePage:!1,title:"Taro.onAppHide(callback)",description:"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e App.onHide \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002",source:"@site/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppHide.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppHide",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/onAppHide",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/apis/base/weapp/app-event/onAppHide.md",version:"2.x",sidebar_label:"onAppHide",frontMatter:{title:"Taro.onAppHide(callback)",sidebar_label:"onAppHide"},sidebar:"version-2.x/API",previous:{title:"Taro.onAppShow(callback)",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/onAppShow"},next:{title:"Taro.offPageNotFound(callback)",permalink:"/taro/docs/2.x/apis/base/weapp/app-event/offPageNotFound"}},l=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],c={toc:l};function u(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,p.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u76d1\u542c\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u3002\u8be5\u4e8b\u4ef6\u4e0e ",(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/reference/api/App.html#onhide"},(0,p.kt)("inlineCode",{parentName:"a"},"App.onHide"))," \u7684\u56de\u8c03\u65f6\u673a\u4e00\u81f4\u3002"),(0,p.kt)("blockquote",null,(0,p.kt)("p",{parentName:"blockquote"},(0,p.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/base/app/app-event/wx.onAppHide.html"},"\u53c2\u8003\u6587\u6863"))),(0,p.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (res: CallbackResult) => void) => void\n")),(0,p.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,p.kt)("table",null,(0,p.kt)("thead",null,(0,p.kt)("tr",null,(0,p.kt)("th",null,"\u53c2\u6570"),(0,p.kt)("th",null,"\u7c7b\u578b"),(0,p.kt)("th",null,"\u8bf4\u660e"))),(0,p.kt)("tbody",null,(0,p.kt)("tr",null,(0,p.kt)("td",null,"callback"),(0,p.kt)("td",null,(0,p.kt)("code",null,"(res: CallbackResult) => void")),(0,p.kt)("td",null,"\u5c0f\u7a0b\u5e8f\u5207\u540e\u53f0\u4e8b\u4ef6\u7684\u56de\u8c03\u51fd\u6570")))),(0,p.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,p.kt)("table",null,(0,p.kt)("thead",{parentName:"table"},(0,p.kt)("tr",{parentName:"thead"},(0,p.kt)("th",{parentName:"tr",align:"center"},"API"),(0,p.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,p.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,p.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,p.kt)("tbody",{parentName:"table"},(0,p.kt)("tr",{parentName:"tbody"},(0,p.kt)("td",{parentName:"tr",align:"center"},"Taro.onAppHide"),(0,p.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,p.kt)("td",{parentName:"tr",align:"center"}),(0,p.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);