(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[63278],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return s},kt:function(){return f}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var a=r.createContext({}),u=function(e){var t=r.useContext(a),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(a.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=o,v=p["".concat(a,".").concat(f)]||p[f]||d[f]||i;return n?r.createElement(v,c(c({ref:t},s),{},{components:n})):r.createElement(v,c({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,c=new Array(i);c[0]=p;var l={};for(var a in t)hasOwnProperty.call(t,a)&&(l[a]=t[a]);l.originalType=e,l.mdxType="string"==typeof e?e:o,c[1]=l;for(var u=2;u<i;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},13737:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return c},metadata:function(){return l},toc:function(){return a},default:function(){return s}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),c={title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},l={unversionedId:"apis/device/ibeacon/IBeaconInfo",id:"version-3.x/apis/device/ibeacon/IBeaconInfo",isDocsHomePage:!1,title:"IBeaconInfo",description:"Methods",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",sourceDirName:"apis/device/ibeacon",slug:"/apis/device/ibeacon/IBeaconInfo",permalink:"/taro/docs/apis/device/ibeacon/IBeaconInfo",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/ibeacon/IBeaconInfo.md",version:"3.x",sidebar_label:"IBeaconInfo",frontMatter:{title:"IBeaconInfo",sidebar_label:"IBeaconInfo"},sidebar:"version-3.x/API",previous:{title:"Taro.getBeacons(option)",permalink:"/taro/docs/apis/device/ibeacon/getBeacons"},next:{title:"Taro.stopWifi(option)",permalink:"/taro/docs/apis/device/wifi/stopWifi"}},a=[{value:"Methods",id:"methods",children:[]}],u={toc:a};function s(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h2",{id:"methods"},"Methods"),(0,i.kt)("table",null,(0,i.kt)("thead",null,(0,i.kt)("tr",null,(0,i.kt)("th",null,"Property"),(0,i.kt)("th",null,"Type"),(0,i.kt)("th",null,"Description"))),(0,i.kt)("tbody",null,(0,i.kt)("tr",null,(0,i.kt)("td",null,"accuracy"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"The iBeacon device distance.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"major"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"The iBeacon device primary ID.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"minor"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"The iBeacon device secondary ID.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"proximity"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"The device distance enumerated value.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"rssi"),(0,i.kt)("td",null,(0,i.kt)("code",null,"number")),(0,i.kt)("td",null,"The signal strength of the device.")),(0,i.kt)("tr",null,(0,i.kt)("td",null,"uuid"),(0,i.kt)("td",null,(0,i.kt)("code",null,"string")),(0,i.kt)("td",null,"The iBeacon device broadcast UUID.")))))}s.isMDXComponent=!0}}]);