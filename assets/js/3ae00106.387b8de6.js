(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[85135],{22122:function(t,e,l){"use strict";function a(){return(a=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a])}return t}).apply(this,arguments)}l.d(e,{Z:function(){return a}})},19756:function(t,e,l){"use strict";function a(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}l.d(e,{Z:function(){return a}})},3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return k},kt:function(){return m}});var a=l(67294);function n(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function r(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,a)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?r(Object(l),!0).forEach((function(e){n(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):r(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function u(t,e){if(null==t)return{};var l,a,n=function(t,e){if(null==t)return{};var l,a,n={},r=Object.keys(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||(n[l]=t[l]);return n}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(a=0;a<r.length;a++)l=r[a],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(n[l]=t[l])}return n}var c=a.createContext({}),i=function(t){var e=a.useContext(c),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},k=function(t){var e=i(t.components);return a.createElement(c.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},p=a.forwardRef((function(t,e){var l=t.components,n=t.mdxType,r=t.originalType,c=t.parentName,k=u(t,["components","mdxType","originalType","parentName"]),p=i(l),m=n,s=p["".concat(c,".").concat(m)]||p[m]||d[m]||r;return l?a.createElement(s,o(o({ref:e},k),{},{components:l})):a.createElement(s,o({ref:e},k))}));function m(t,e){var l=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var r=l.length,o=new Array(r);o[0]=p;var u={};for(var c in e)hasOwnProperty.call(e,c)&&(u[c]=e[c]);u.originalType=t,u.mdxType="string"==typeof t?t:n,o[1]=u;for(var i=2;i<r;i++)o[i]=l[i];return a.createElement.apply(null,o)}return a.createElement.apply(null,l)}p.displayName="MDXCreateElement"},21315:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return o},metadata:function(){return u},toc:function(){return c},default:function(){return k}});var a=l(22122),n=l(19756),r=(l(67294),l(3905)),o={title:"CameraContext",sidebar_label:"CameraContext"},u={unversionedId:"apis/media/camera/CameraContext",id:"version-3.x/apis/media/camera/CameraContext",isDocsHomePage:!1,title:"CameraContext",description:"The CameraContext instance can be obtained via wx.createCameraContext.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/camera/CameraContext.md",sourceDirName:"apis/media/camera",slug:"/apis/media/camera/CameraContext",permalink:"/taro/docs/apis/media/camera/CameraContext",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/camera/CameraContext.md",version:"3.x",sidebar_label:"CameraContext",frontMatter:{title:"CameraContext",sidebar_label:"CameraContext"},sidebar:"version-3.x/API",previous:{title:"Taro.createCameraContext()",permalink:"/taro/docs/apis/media/camera/createCameraContext"},next:{title:"EditorContext",permalink:"/taro/docs/apis/media/editor/EditorContext"}},c=[{value:"Methods",id:"methods",children:[{value:"startRecord",id:"startrecord",children:[]},{value:"stopRecord",id:"stoprecord",children:[]},{value:"takePhoto",id:"takephoto",children:[]},{value:"onCameraFrame",id:"oncameraframe",children:[]}]},{value:"Parameters",id:"parameters",children:[{value:"StartRecordOption",id:"startrecordoption",children:[]},{value:"StartRecordTimeoutCallback",id:"startrecordtimeoutcallback",children:[]},{value:"StartRecordTimeoutCallbackResult",id:"startrecordtimeoutcallbackresult",children:[]},{value:"StopRecordOption",id:"stoprecordoption",children:[]},{value:"StopRecordSuccessCallbackResult",id:"stoprecordsuccesscallbackresult",children:[]},{value:"TakePhotoOption",id:"takephotooption",children:[]},{value:"TakePhotoSuccessCallbackResult",id:"takephotosuccesscallbackresult",children:[]},{value:"OnCameraFrameCallback",id:"oncameraframecallback",children:[]},{value:"OnCameraFrameCallbackResult",id:"oncameraframecallbackresult",children:[]},{value:"quality",id:"quality",children:[]}]},{value:"API Support",id:"api-support-4",children:[]}],i={toc:c};function k(t){var e=t.components,l=(0,n.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,a.Z)({},i,l,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"The ",(0,r.kt)("inlineCode",{parentName:"p"},"CameraContext")," instance can be obtained via wx.createCameraContext."),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"CameraContext")," is bound to the unique camera component on the page to use the ",(0,r.kt)("inlineCode",{parentName:"p"},"camera")," component."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.html"},"Reference"))),(0,r.kt)("h2",{id:"methods"},"Methods"),(0,r.kt)("h3",{id:"startrecord"},"startRecord"),(0,r.kt)("p",null,"Starts video recording."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.startRecord.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: StartRecordOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"StartRecordOption"))))),(0,r.kt)("h4",{id:"api-support"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.startRecord"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"stoprecord"},"stopRecord"),(0,r.kt)("p",null,"Stops video recording."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.stopRecord.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: StopRecordOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"StopRecordOption"))))),(0,r.kt)("h4",{id:"api-support-1"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.stopRecord"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"takephoto"},"takePhoto"),(0,r.kt)("p",null,"Takes a photo."),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.takePhoto.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: TakePhotoOption) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"option"),(0,r.kt)("td",null,(0,r.kt)("code",null,"TakePhotoOption"))))),(0,r.kt)("h4",{id:"api-support-2"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.takePhoto"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,r.kt)("h3",{id:"oncameraframe"},"onCameraFrame"),(0,r.kt)("p",null,"Gets the Camera real-time frame data."),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Note: To use this API, you must specify frame-size in the ",(0,r.kt)("inlineCode",{parentName:"strong"},"camera")," component property.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/camera/CameraContext.onCameraFrame.html"},"Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback: OnCameraFrameCallback) => CameraFrameListener\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCameraFrameCallback")),(0,r.kt)("td",null,"Callback function")))),(0,r.kt)("h4",{id:"sample-code"},"Sample Code"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const context = wx.createCameraContext()\nconst listener = context.onCameraFrame((frame) => {\n  console.log(frame.data instanceof ArrayBuffer, frame.width, frame.height)\n})\nlistener.start()\n")),(0,r.kt)("h4",{id:"api-support-3"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.onCameraFrame"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))),(0,r.kt)("h2",{id:"parameters"},"Parameters"),(0,r.kt)("h3",{id:"startrecordoption"},"StartRecordOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"timeoutCallback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"StartRecordTimeoutCallback")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Video recording will end after 30 sec or the page is ",(0,r.kt)("code",null,"onHide"),".")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"startrecordtimeoutcallback"},"StartRecordTimeoutCallback"),(0,r.kt)("p",null,"Video recording will end after 30 sec or the page is ",(0,r.kt)("inlineCode",{parentName:"p"},"onHide"),"."),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: StartRecordTimeoutCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"StartRecordTimeoutCallbackResult"))))),(0,r.kt)("h3",{id:"startrecordtimeoutcallbackresult"},"StartRecordTimeoutCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempThumbPath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The temporary path to cover images files")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempVideoPath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The temporary path to video files")))),(0,r.kt)("h3",{id:"stoprecordoption"},"StopRecordOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"stoprecordsuccesscallbackresult"},"StopRecordSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempThumbPath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The temporary path to cover images files")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempVideoPath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The temporary path to video files")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"takephotooption"},"TakePhotoOption"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",{style:{textAlign:"center"}},"Required"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"quality"),(0,r.kt)("td",null,(0,r.kt)("code",null,'"high" | "normal" | "low"')),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"Image quality")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"complete"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"fail"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: any) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a failed API call")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"success"),(0,r.kt)("td",null,(0,r.kt)("code",null,"(res: Result) => void")),(0,r.kt)("td",{style:{textAlign:"center"}},"No"),(0,r.kt)("td",null,"The callback function for a successful API call")))),(0,r.kt)("h3",{id:"takephotosuccesscallbackresult"},"TakePhotoSuccessCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"tempImagePath"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"The temporary path to photo files (jpg for Android and png for iOS).")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"errMsg"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",null,"Call result")))),(0,r.kt)("h3",{id:"oncameraframecallback"},"OnCameraFrameCallback"),(0,r.kt)("p",null,"Callback function"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(result: OnCameraFrameCallbackResult) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"result"),(0,r.kt)("td",null,(0,r.kt)("code",null,"OnCameraFrameCallbackResult"))))),(0,r.kt)("h3",{id:"oncameraframecallbackresult"},"OnCameraFrameCallbackResult"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Type"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"data"),(0,r.kt)("td",null,(0,r.kt)("code",null,"ArrayBuffer")),(0,r.kt)("td",null,"The image pixel data, which is a one-dimensional array in which every four items express the RGBA color of one pixel.")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"height"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The height of the image data rectangle")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"width"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",null,"The width of the image data rectangle")))),(0,r.kt)("h3",{id:"quality"},"quality"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"Property"),(0,r.kt)("th",null,"Description"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"high"),(0,r.kt)("td",null,"High quality")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"normal"),(0,r.kt)("td",null,"Normal quality")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"low"),(0,r.kt)("td",null,"Low quality")))),(0,r.kt)("h2",{id:"api-support-4"},"API Support"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:"center"},"API"),(0,r.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,r.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,r.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.startRecord"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.stopRecord"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.takePhoto"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:"center"},"CameraContext.onCameraFrame"),(0,r.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,r.kt)("td",{parentName:"tr",align:"center"}),(0,r.kt)("td",{parentName:"tr",align:"center"})))))}k.isMDXComponent=!0}}]);