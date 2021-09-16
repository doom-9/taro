(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[66580],{22122:function(t,e,l){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var l=arguments[e];for(var n in l)Object.prototype.hasOwnProperty.call(l,n)&&(t[n]=l[n])}return t}).apply(this,arguments)}l.d(e,{Z:function(){return n}})},19756:function(t,e,l){"use strict";function n(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}l.d(e,{Z:function(){return n}})},3905:function(t,e,l){"use strict";l.d(e,{Zo:function(){return s},kt:function(){return k}});var n=l(67294);function r(t,e,l){return e in t?Object.defineProperty(t,e,{value:l,enumerable:!0,configurable:!0,writable:!0}):t[e]=l,t}function a(t,e){var l=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),l.push.apply(l,n)}return l}function o(t){for(var e=1;e<arguments.length;e++){var l=null!=arguments[e]?arguments[e]:{};e%2?a(Object(l),!0).forEach((function(e){r(t,e,l[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(l)):a(Object(l)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(l,e))}))}return t}function i(t,e){if(null==t)return{};var l,n,r=function(t,e){if(null==t)return{};var l,n,r={},a=Object.keys(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||(r[l]=t[l]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(n=0;n<a.length;n++)l=a[n],e.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(t,l)&&(r[l]=t[l])}return r}var u=n.createContext({}),c=function(t){var e=n.useContext(u),l=e;return t&&(l="function"==typeof t?t(e):o(o({},e),t)),l},s=function(t){var e=c(t.components);return n.createElement(u.Provider,{value:e},t.children)},d={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},p=n.forwardRef((function(t,e){var l=t.components,r=t.mdxType,a=t.originalType,u=t.parentName,s=i(t,["components","mdxType","originalType","parentName"]),p=c(l),k=r,m=p["".concat(u,".").concat(k)]||p[k]||d[k]||a;return l?n.createElement(m,o(o({ref:e},s),{},{components:l})):n.createElement(m,o({ref:e},s))}));function k(t,e){var l=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=l.length,o=new Array(a);o[0]=p;var i={};for(var u in e)hasOwnProperty.call(e,u)&&(i[u]=e[u]);i.originalType=t,i.mdxType="string"==typeof t?t:r,o[1]=i;for(var c=2;c<a;c++)o[c]=l[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,l)}p.displayName="MDXCreateElement"},41047:function(t,e,l){"use strict";l.r(e),l.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return u},default:function(){return s}});var n=l(22122),r=l(19756),a=(l(67294),l(3905)),o={title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},i={unversionedId:"apis/media/image/chooseImage",id:"version-3.x/apis/media/image/chooseImage",isDocsHomePage:!1,title:"Taro.chooseImage(option)",description:"Selects an image from the local album or takes a photo with the camera.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/media/image/chooseImage.md",sourceDirName:"apis/media/image",slug:"/apis/media/image/chooseImage",permalink:"/taro/docs/apis/media/image/chooseImage",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/media/image/chooseImage.md",version:"3.x",sidebar_label:"chooseImage",frontMatter:{title:"Taro.chooseImage(option)",sidebar_label:"chooseImage"},sidebar:"version-3.x/API",previous:{title:"Taro.chooseMessageFile(option)",permalink:"/taro/docs/apis/media/image/chooseMessageFile"},next:{title:"Taro.saveVideoToPhotosAlbum(option)",permalink:"/taro/docs/apis/media/video/saveVideoToPhotosAlbum"}},u=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"sizeType",id:"sizetype",children:[]},{value:"sourceType",id:"sourcetype",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"ImageFile",id:"imagefile",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support-1",children:[]}],c={toc:u};function s(t){var e=t.components,l=(0,r.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,n.Z)({},c,l,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Selects an image from the local album or takes a photo with the camera."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/media/image/wx.chooseImage.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"parameters"},"Parameters"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"count"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The maximum number of images allowed")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sizeType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'("original" | "compressed")[]')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The size of the select image")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"sourceType"),(0,a.kt)("td",null,(0,a.kt)("code",null,'("album" | "camera" | "user" | "environment")[]')),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The source of the image")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: any) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a failed API call")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: Result) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The callback function for a successful API call")))),(0,a.kt)("h3",{id:"sizetype"},"sizeType"),(0,a.kt)("p",null,"Valid values of object.sizeType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"original"),(0,a.kt)("td",null,"Original image")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"compressed"),(0,a.kt)("td",null,"compressed")))),(0,a.kt)("h3",{id:"sourcetype"},"sourceType"),(0,a.kt)("p",null,"Valid values of object.sourceType"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"album"),(0,a.kt)("td",null,"Selects an image from the album")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"camera"),(0,a.kt)("td",null,"Takes a photo with the camera")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"user"),(0,a.kt)("td",null,"Using the front camera (Only H5)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"environment"),(0,a.kt)("td",null,"Using the rear camera (Only H5)")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempFilePaths"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string[]")),(0,a.kt)("td",null,"The list of local temporary file paths to images")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"tempFiles"),(0,a.kt)("td",null,(0,a.kt)("code",null,"ImageFile[]")),(0,a.kt)("td",null,"The local temporary file list for images")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Call result")))),(0,a.kt)("h3",{id:"imagefile"},"ImageFile"),(0,a.kt)("p",null,"List of local temporary files for images"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"path"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The path to the local temporary file")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,a.kt)("td",null,"The size of a local temporary file, in bytes")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"type"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The MIME type of the file.",(0,a.kt)("br",null),"(Only H5)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"originalFileObj"),(0,a.kt)("td",null,(0,a.kt)("code",null,"File")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The original browser File object.",(0,a.kt)("br",null),"(Only H5)")))),(0,a.kt)("h4",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ImageFile.type"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"ImageFile.originalFileObj"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h2",{id:"sample-code"},"Sample Code"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseImage({\n  count: 1, // The default value is 9\n  sizeType: ['original', 'compressed'], // You can specify whether the image is original or compressed, both are available by default.\n  sourceType: ['album', 'camera'], // You can specify whether the source is an album or a camera, both are available by default.\n  success: function (res) {\n    // tempFilePath can be used as the src property of the img tag to display images.\n    var tempFilePaths = res.tempFilePaths\n  }\n})\n")),(0,a.kt)("h2",{id:"api-support-1"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseImage"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0}}]);