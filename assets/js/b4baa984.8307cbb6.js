(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[99124],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},19756:function(e,t,r){"use strict";function n(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}r.d(t,{Z:function(){return n}})},3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return u},kt:function(){return h}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=s(r),h=a,k=p["".concat(o,".").concat(h)]||p[h]||d[h]||i;return r?n.createElement(k,l(l({ref:t},u),{},{components:r})):n.createElement(k,l({ref:t},u))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=p;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},34787:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return l},metadata:function(){return c},toc:function(){return o},default:function(){return u}});var n=r(22122),a=r(19756),i=(r(67294),r(3905)),l={title:"Taro.readBLECharacteristicValue(option)",sidebar_label:"readBLECharacteristicValue"},c={unversionedId:"apis/device/ble/readBLECharacteristicValue",id:"version-3.x/apis/device/ble/readBLECharacteristicValue",isDocsHomePage:!1,title:"Taro.readBLECharacteristicValue(option)",description:"Reads the hexadecimal data values of the BLE device characteristics. Note: The device characteristics must support read to use this method.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/ble/readBLECharacteristicValue.md",sourceDirName:"apis/device/ble",slug:"/apis/device/ble/readBLECharacteristicValue",permalink:"/taro/docs/apis/device/ble/readBLECharacteristicValue",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ble/readBLECharacteristicValue.md",version:"3.x",sidebar_label:"readBLECharacteristicValue",frontMatter:{title:"Taro.readBLECharacteristicValue(option)",sidebar_label:"readBLECharacteristicValue"},sidebar:"version-3.x/API",previous:{title:"Taro.writeBLECharacteristicValue(option)",permalink:"/taro/docs/apis/device/ble/writeBLECharacteristicValue"},next:{title:"Taro.onBLEConnectionStateChange(callback)",permalink:"/taro/docs/apis/device/ble/onBLEConnectionStateChange"}},o=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],s={toc:o};function u(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Reads the hexadecimal data values of the BLE device characteristics. Note: The device characteristics must support read to use this method."),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Notes")),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Multiple parallel calls may cause read failures."),(0,i.kt)("li",{parentName:"ul"},"The information read by the API must be obtained in the callback registered in the ",(0,i.kt)("inlineCode",{parentName:"li"},"onBLECharacteristicValueChange")," method.")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/bluetooth-ble/wx.readBLECharacteristicValue.html"},"Reference"))),(0,i.kt)("h2",{id:"type"},"Type"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<BluetoothError>\n")),(0,i.kt)("h2",{id:"parameters"},"Parameters"),(0,i.kt)("h3",{id:"option"},"Option"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",{style:{textAlign:"center"}},"Required"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"characteristicId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The Bluetooth characteristic UUID")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"deviceId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The Bluetooth device ID")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"serviceId"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,i.kt)("td",null,"The UUID of the service corresponding to a Bluetooth characteristic")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"complete"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"fail"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: any) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a failed API call")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"success"),(0,i.kt)("td",null,(0,i.kt)("code",null,"(res: Result) => void")),(0,i.kt)("td",{style:{textAlign:"center"}},"No"),(0,i.kt)("td",null,"The callback function for a successful API call")))),(0,i.kt)("h2",{id:"sample-code"},"Sample Code"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-tsx"},"// You must perform a callback here to get the information.\nTaro.onBLECharacteristicValueChange(function(characteristic) {\n  console.log('characteristic value comed:', characteristic)\n})\nTaro.readBLECharacteristicValue({\n  // This deviceId must have been used to connect the appropriate device via createBLEConnection.\n  deviceId,\n  // This serviceId must be obtained in the getBLEDeviceServices API.\n  serviceId,\n  // This characteristicId must be obtained in the getBLEDeviceCharacteristics API.\n  characteristicId,\n  success (res) {\n    console.log('readBLECharacteristicValue:', res.errCode)\n  }\n})\n")),(0,i.kt)("h2",{id:"api-support"},"API Support"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"center"},"API"),(0,i.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,i.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,i.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"center"},"Taro.readBLECharacteristicValue"),(0,i.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,i.kt)("td",{parentName:"tr",align:"center"}),(0,i.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);