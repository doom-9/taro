(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[46478],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return k}});var n=r(67294);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,l=function(e,t){if(null==e)return{};var r,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(l[r]=e[r]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(l[r]=e[r])}return l}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=a(e,["components","mdxType","originalType","parentName"]),p=s(r),k=l,v=p["".concat(o,".").concat(k)]||p[k]||d[k]||i;return r?n.createElement(v,c(c({ref:t},u),{},{components:r})):n.createElement(v,c({ref:t},u))}));function k(e,t){var r=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=r.length,c=new Array(i);c[0]=p;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:l,c[1]=a;for(var s=2;s<i;s++)c[s]=r[s];return n.createElement.apply(null,c)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},199:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return c},metadata:function(){return a},toc:function(){return o},default:function(){return u}});var n=r(22122),l=r(19756),i=(r(67294),r(3905)),c={title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},a={unversionedId:"apis/device/ble/getBLEDeviceServices",id:"version-3.x/apis/device/ble/getBLEDeviceServices",isDocsHomePage:!1,title:"Taro.getBLEDeviceServices(option)",description:"Gets all services of a Bluetooth device.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/ble/getBLEDeviceServices.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/getBLEDeviceServices",permalink:"/taro/docs/apis/device/ble/getBLEDeviceServices",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ble/getBLEDeviceServices.md",version:"3.x",sidebar_label:"getBLEDeviceServices",frontMatter:{title:"Taro.getBLEDeviceServices(option)",sidebar_label:"getBLEDeviceServices"},sidebar:"version-3.x/API",previous:{title:"Taro.notifyBLECharacteristicValueChange(option)",permalink:"/taro/docs/apis/device/ble/notifyBLECharacteristicValueChange"},next:{title:"Taro.getBLEDeviceCharacteristics(option)",permalink:"/taro/docs/apis/device/ble/getBLEDeviceCharacteristics"}},o=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"BLEService",id:"bleservice",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],s={toc:o};function u(e){var t=e.components,r=(0,l.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Gets all services of a Bluetooth device."),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth-ble/wx.getBLEDeviceServices.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"deviceId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The Bluetooth device ID")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a failed API call")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: Result) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a successful API call")))),(0,i.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"services"),(0,i.kt)("td",null,(0,i.kt)("code",null,"BLEService[]")),(0,i.kt)("td",null,"The device service list")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"errMsg"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"success: ok\uff0cfail: error message")))),(0,i.kt)("h3",{id:"bleservice"},"BLEService"),(0,i.kt)("p",null,"res.services is composed as follows"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"isPrimary"),(0,i.kt)("td",null,(0,i.kt)("code",null,"boolean")),(0,i.kt)("td",null,"Indicates whether this service is the primary service")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"uuid"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"The Bluetooth device service UUID")))),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.getBLEDeviceServices({\n  // This deviceId must have been used to connect the appropriate device via createBLEConnection.\n  deviceId,\n  success: function (res) {\n    console.log('device services:', res.services)\n  }\n})\n")),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.getBLEDeviceServices"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);