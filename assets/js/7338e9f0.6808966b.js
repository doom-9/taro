(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[25165],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),u=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return r.createElement(o.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,s=c(t,["components","mdxType","originalType","parentName"]),p=u(n),k=a,h=p["".concat(o,".").concat(k)]||p[k]||d[k]||l;return n?r.createElement(h,i(i({ref:e},s),{},{components:n})):r.createElement(h,i({ref:e},s))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,i=new Array(l);i[0]=p;var c={};for(var o in e)hasOwnProperty.call(e,o)&&(c[o]=e[o]);c.originalType=t,c.mdxType="string"==typeof t?t:a,i[1]=c;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},84757:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return o},default:function(){return s}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),i={title:"Taro.notifyBLECharacteristicValueChange(option)",sidebar_label:"notifyBLECharacteristicValueChange"},c={unversionedId:"apis/device/ble/notifyBLECharacteristicValueChange",id:"apis/device/ble/notifyBLECharacteristicValueChange",isDocsHomePage:!1,title:"Taro.notifyBLECharacteristicValueChange(option)",description:"\u542f\u7528\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u53d8\u5316\u65f6\u7684 notify \u529f\u80fd\uff0c\u8ba2\u9605\u7279\u5f81\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 notify \u6216\u8005 indicate \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002",source:"@site/docs/apis/device/ble/notifyBLECharacteristicValueChange.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/notifyBLECharacteristicValueChange",permalink:"/taro/docs/next/apis/device/ble/notifyBLECharacteristicValueChange",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/device/ble/notifyBLECharacteristicValueChange.md",version:"current",sidebar_label:"notifyBLECharacteristicValueChange",frontMatter:{title:"Taro.notifyBLECharacteristicValueChange(option)",sidebar_label:"notifyBLECharacteristicValueChange"},sidebar:"API",previous:{title:"Taro.onBLECharacteristicValueChange(callback)",permalink:"/taro/docs/next/apis/device/ble/onBLECharacteristicValueChange"},next:{title:"Taro.getBLEDeviceServices(option)",permalink:"/taro/docs/next/apis/device/ble/getBLEDeviceServices"}},o=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Promised",id:"promised",children:[]},{value:"Option",id:"option",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],u={toc:o};function s(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u542f\u7528\u4f4e\u529f\u8017\u84dd\u7259\u8bbe\u5907\u7279\u5f81\u503c\u53d8\u5316\u65f6\u7684 notify \u529f\u80fd\uff0c\u8ba2\u9605\u7279\u5f81\u503c\u3002\u6ce8\u610f\uff1a\u5fc5\u987b\u8bbe\u5907\u7684\u7279\u5f81\u503c\u652f\u6301 notify \u6216\u8005 indicate \u624d\u53ef\u4ee5\u6210\u529f\u8c03\u7528\u3002"),(0,l.kt)("p",null,"\u53e6\u5916\uff0c\u5fc5\u987b\u5148\u542f\u7528 ",(0,l.kt)("inlineCode",{parentName:"p"},"notifyBLECharacteristicValueChange")," \u624d\u80fd\u76d1\u542c\u5230\u8bbe\u5907 ",(0,l.kt)("inlineCode",{parentName:"p"},"characteristicValueChange")," \u4e8b\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u64cd\u4f5c\u6210\u529f\u540e\u9700\u8981\u8bbe\u5907\u4e3b\u52a8\u66f4\u65b0\u7279\u5f81\u503c\u7684 value\uff0c\u624d\u4f1a\u89e6\u53d1 Taro.onBLECharacteristicValueChange \u56de\u8c03\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5b89\u5353\u5e73\u53f0\u4e0a\uff0c\u5728\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"notifyBLECharacteristicValueChange")," \u6210\u529f\u540e\u7acb\u5373\u8c03\u7528 ",(0,l.kt)("inlineCode",{parentName:"li"},"writeBLECharacteristicValue")," \u63a5\u53e3\uff0c\u5728\u90e8\u5206\u673a\u578b\u4e0a\u4f1a\u53d1\u751f 10008 \u7cfb\u7edf\u9519\u8bef")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/device/bluetooth-ble/wx.notifyBLECharacteristicValueChange.html"},"\u53c2\u8003\u6587\u6863"))),(0,l.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<Promised>\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"promised"},"Promised"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"errMsg"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",null,"\u6210\u529f\uff1aok\uff0c\u9519\u8bef\uff1a\u8be6\u7ec6\u4fe1\u606f")))),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"\u53c2\u6570"),(0,l.kt)("th",null,"\u7c7b\u578b"),(0,l.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,l.kt)("th",null,"\u8bf4\u660e"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"characteristicId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u7684 uuid")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"deviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u8bbe\u5907 id")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"serviceId"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u84dd\u7259\u7279\u5f81\u503c\u5bf9\u5e94\u670d\u52a1\u7684 uuid")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"state"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,l.kt)("td",null,"\u662f\u5426\u542f\u7528 notify")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: BluetoothError) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,l.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,l.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.notifyBLECharacteristicValueChange({\n  state: true, // \u542f\u7528 notify \u529f\u80fd\n  // \u8fd9\u91cc\u7684 deviceId \u9700\u8981\u5df2\u7ecf\u901a\u8fc7 createBLEConnection \u4e0e\u5bf9\u5e94\u8bbe\u5907\u5efa\u7acb\u94fe\u63a5\n  deviceId,\n  // \u8fd9\u91cc\u7684 serviceId \u9700\u8981\u5728 getBLEDeviceServices \u63a5\u53e3\u4e2d\u83b7\u53d6\n  serviceId,\n  // \u8fd9\u91cc\u7684 characteristicId \u9700\u8981\u5728 getBLEDeviceCharacteristics \u63a5\u53e3\u4e2d\u83b7\u53d6\n  characteristicId,\n  success: function (res) {\n    console.log('notifyBLECharacteristicValueChange success', res.errMsg)\n  }\n})\n")),(0,l.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.notifyBLECharacteristicValueChange"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);