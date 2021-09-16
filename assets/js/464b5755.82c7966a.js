(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25450],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=u(n),m=a,k=d["".concat(p,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},66871:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return p},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},i={unversionedId:"apis/base/weapp/app-event/onAppShow",id:"version-3.x/apis/base/weapp/app-event/onAppShow",isDocsHomePage:!1,title:"Taro.onAppShow(callback)",description:"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of App.onShow.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",sourceDirName:"apis/base/weapp/app-event",slug:"/apis/base/weapp/app-event/onAppShow",permalink:"/taro/docs/apis/base/weapp/app-event/onAppShow",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/base/weapp/app-event/onAppShow.md",version:"3.x",sidebar_label:"onAppShow",frontMatter:{title:"Taro.onAppShow(callback)",sidebar_label:"onAppShow"},sidebar:"version-3.x/API",previous:{title:"Taro.onAudioInterruptionBegin(callback)",permalink:"/taro/docs/apis/base/weapp/app-event/onAudioInterruptionBegin"},next:{title:"Taro.onAppHide(callback)",permalink:"/taro/docs/apis/base/weapp/app-event/onAppHide"}},p=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"CallbackResult",id:"callbackresult",children:[]},{value:"ResultReferrerInfo",id:"resultreferrerinfo",children:[]}]},{value:"API Support",id:"api-support",children:[]}],u={toc:p};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Listens on the event that Mini Program is switched to foreground. The callback timing for this event is consistent with that of ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/reference/api/App.html#onshowobject-object"},(0,o.kt)("inlineCode",{parentName:"a"},"App.onShow")),"."),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Scenes that Return Valid referrerInfo")),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Scene Value"),(0,o.kt)("th",{parentName:"tr",align:null},"Scene"),(0,o.kt)("th",{parentName:"tr",align:null},"Meaning of appId"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1020"),(0,o.kt)("td",{parentName:"tr",align:null},"Related Mini Program list in the profile page of an Official Account"),(0,o.kt)("td",{parentName:"tr",align:null},"Source Official Account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1035"),(0,o.kt)("td",{parentName:"tr",align:null},"Custom menu of an Official Account"),(0,o.kt)("td",{parentName:"tr",align:null},"Source Official Account")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1036"),(0,o.kt)("td",{parentName:"tr",align:null},"Message card shared from an app"),(0,o.kt)("td",{parentName:"tr",align:null},"Source app")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1037"),(0,o.kt)("td",{parentName:"tr",align:null},"Mini Program opened from a Mini Program"),(0,o.kt)("td",{parentName:"tr",align:null},"Source Mini Program")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1038"),(0,o.kt)("td",{parentName:"tr",align:null},"Returned from another Mini Program"),(0,o.kt)("td",{parentName:"tr",align:null},"Source Mini Program")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"1043"),(0,o.kt)("td",{parentName:"tr",align:null},"Template message of an Official Account"),(0,o.kt)("td",{parentName:"tr",align:null},"Source Official Account")))),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Note")),(0,o.kt)("p",null,"In some versions, when there is no ",(0,o.kt)("inlineCode",{parentName:"p"},"referrerInfo"),", the value ",(0,o.kt)("inlineCode",{parentName:"p"},"undefined")," is returned. You can use ",(0,o.kt)("inlineCode",{parentName:"p"},"options.referrerInfo && options.referrerInfo.appId")," to make a judgment."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/base/app/app-event/wx.onAppShow.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: (result: CallbackResult) => void) => void\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"callbackresult"},"CallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"path"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The path for switching the Mini Program to foreground")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"query"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The query parameter for switching the Mini Program to foreground")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"referrerInfo"),(0,o.kt)("td",null,(0,o.kt)("code",null,"ResultReferrerInfo")),(0,o.kt)("td",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, "," is returned. (see the Note below for details.)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"scene"),(0,o.kt)("td",null,(0,o.kt)("code",null,"number")),(0,o.kt)("td",null,"The",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/app-service/scene.html"},"scene value"),"for switching the Mini Program to foreground")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"shareTicket"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The shareTicket. See ",(0,o.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/en/dev/framework/open-ability/share.html"},"Obtaining More Forwarded Information")," for details.")))),(0,o.kt)("h3",{id:"resultreferrerinfo"},"ResultReferrerInfo"),(0,o.kt)("p",null,"The source information. This is returned when a user enters the Mini Program from another Mini Program, Official Account, or app. Otherwise, {} is returned. (see the Note below for details.)"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"appId"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"The appId of the source Mini Program, Official Account, or app.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"extraData"),(0,o.kt)("td",null,(0,o.kt)("code",null,"Record<string, any>")),(0,o.kt)("td",null,"The data transfered from the source Mini Program, supported when scene=1037 or 1038.")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.onAppShow"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}c.isMDXComponent=!0}}]);