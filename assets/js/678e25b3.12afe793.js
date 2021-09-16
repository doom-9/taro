(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[91005],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var d=r.createContext({}),u=function(t){var e=r.useContext(d),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=u(t.components);return r.createElement(d.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},p=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,d=t.parentName,c=i(t,["components","mdxType","originalType","parentName"]),p=u(n),m=l,s=p["".concat(d,".").concat(m)]||p[m]||k[m]||a;return n?r.createElement(s,o(o({ref:e},c),{},{components:n})):r.createElement(s,o({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=p;var i={};for(var d in e)hasOwnProperty.call(e,d)&&(i[d]=e[d]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var u=2;u<a;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},16747:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return d},default:function(){return c}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"Camera",sidebar_label:"Camera"},i={unversionedId:"components/media/camera",id:"version-3.x/components/media/camera",isDocsHomePage:!1,title:"Camera",description:"System camera.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/media/camera.md",sourceDirName:"components/media",slug:"/components/media/camera",permalink:"/taro/docs/components/media/camera",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/media/camera.md",version:"3.x",sidebar_label:"Camera",frontMatter:{title:"Camera",sidebar_label:"Camera"},sidebar:"version-3.x/components",previous:{title:"Video",permalink:"/taro/docs/components/media/video"},next:{title:"Map",permalink:"/taro/docs/components/maps/map"}},d=[{value:"Type",id:"type",children:[]},{value:"CameraProps",id:"cameraprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"mode",id:"mode",children:[]},{value:"resolution",id:"resolution",children:[]},{value:"devicePosition",id:"deviceposition",children:[]},{value:"flash",id:"flash",children:[]},{value:"frameSize",id:"framesize",children:[]},{value:"onInitDoneEventDetail",id:"oninitdoneeventdetail",children:[]}]},{value:"API Support",id:"api-support",children:[]}],u={toc:d};function c(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"System camera."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/camera.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<CameraProps>\n")),(0,a.kt)("h2",{id:"cameraprops"},"CameraProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"mode"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"normal" | "scanCode"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"normal"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Application mode. It is valid only during initialization, and cannot be dynamically changed.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"resolution"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"low" | "medium" | "high"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"medium"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Resolution, no dynamic changes supported.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"devicePosition"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"front" | "back"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"back"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The facing orientation of the camera.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"flash"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"auto" | "on" | "off" | "torch"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"auto"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The flash. Values include auto, on, and off.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"frameSize"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"medium" | "small" | "large"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"medium"')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the expected size of camera frame data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanArea"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number[]")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Scan to identify area, result is [x, y, w, h],",(0,a.kt)("br",null),"is the upper left corner of the display area relative to the camera.",(0,a.kt)("br",null),'w,h is the area size in px. It is valid only when only mode="scanCode"')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onStop"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the camera is closed unexpectedly, for example, exiting the background.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the camera is not authorized.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onInitDone"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onInitDoneEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered after the camera is initialized")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScanCode"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<any>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when a scanned QR code is recognized. ",(0,a.kt)("br",null),'It is valid only when mode="scanCode".')))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.mode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.resolution"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.devicePosition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.flash"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.frameSize"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.scanArea"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onStop"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onInitDone"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"CameraProps.onScanCode"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"mode"},"mode"),(0,a.kt)("p",null,"Valid values of mode"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"normal"),(0,a.kt)("td",null,"Camera mode")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scanCode"),(0,a.kt)("td",null,"Scanning mode")))),(0,a.kt)("h3",{id:"resolution"},"resolution"),(0,a.kt)("p",null,"Valid values of resolution"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"low"),(0,a.kt)("td",null,"low")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"medium"),(0,a.kt)("td",null,"medium")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"high"),(0,a.kt)("td",null,"high")))),(0,a.kt)("h3",{id:"deviceposition"},"devicePosition"),(0,a.kt)("p",null,"Valid values of device-position"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"front"),(0,a.kt)("td",null,"Front-facing camera")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"back"),(0,a.kt)("td",null,"Rear-facing camera")))),(0,a.kt)("h3",{id:"flash"},"flash"),(0,a.kt)("p",null,"Valid values of flash"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"auto"),(0,a.kt)("td",null,"Auto")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"on"),(0,a.kt)("td",null,"On")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"off"),(0,a.kt)("td",null,"Off")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"torch"),(0,a.kt)("td",null,"Always bright")))),(0,a.kt)("h3",{id:"framesize"},"frameSize"),(0,a.kt)("p",null,"Valid values of frame-size"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"small"),(0,a.kt)("td",null,"Small-size frame data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"medium"),(0,a.kt)("td",null,"Medium-size frame data")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"large"),(0,a.kt)("td",null,"Large-size frame data")))),(0,a.kt)("h3",{id:"oninitdoneeventdetail"},"onInitDoneEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"maxZoom"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Maximum zoom")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Camera"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}c.isMDXComponent=!0}}]);