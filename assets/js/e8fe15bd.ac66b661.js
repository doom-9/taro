(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[81522],{22122:function(t,l,n){"use strict";function e(){return(e=Object.assign||function(t){for(var l=1;l<arguments.length;l++){var n=arguments[l];for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])}return t}).apply(this,arguments)}n.d(l,{Z:function(){return e}})},19756:function(t,l,n){"use strict";function e(t,l){if(null==t)return{};var n,e,a={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(l,{Z:function(){return e}})},3905:function(t,l,n){"use strict";n.d(l,{Zo:function(){return i},kt:function(){return s}});var e=n(67294);function a(t,l,n){return l in t?Object.defineProperty(t,l,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[l]=n,t}function r(t,l){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var e=Object.getOwnPropertySymbols(t);l&&(e=e.filter((function(l){return Object.getOwnPropertyDescriptor(t,l).enumerable}))),n.push.apply(n,e)}return n}function u(t){for(var l=1;l<arguments.length;l++){var n=null!=arguments[l]?arguments[l]:{};l%2?r(Object(n),!0).forEach((function(l){a(t,l,n[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(l){Object.defineProperty(t,l,Object.getOwnPropertyDescriptor(n,l))}))}return t}function o(t,l){if(null==t)return{};var n,e,a=function(t,l){if(null==t)return{};var n,e,a={},r=Object.keys(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||(a[n]=t[n]);return a}(t,l);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(e=0;e<r.length;e++)n=r[e],l.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var d=e.createContext({}),k=function(t){var l=e.useContext(d),n=l;return t&&(n="function"==typeof t?t(l):u(u({},l),t)),n},i=function(t){var l=k(t.components);return e.createElement(d.Provider,{value:l},t.children)},c={inlineCode:"code",wrapper:function(t){var l=t.children;return e.createElement(e.Fragment,{},l)}},p=e.forwardRef((function(t,l){var n=t.components,a=t.mdxType,r=t.originalType,d=t.parentName,i=o(t,["components","mdxType","originalType","parentName"]),p=k(n),s=a,g=p["".concat(d,".").concat(s)]||p[s]||c[s]||r;return n?e.createElement(g,u(u({ref:l},i),{},{components:n})):e.createElement(g,u({ref:l},i))}));function s(t,l){var n=arguments,a=l&&l.mdxType;if("string"==typeof t||a){var r=n.length,u=new Array(r);u[0]=p;var o={};for(var d in l)hasOwnProperty.call(l,d)&&(o[d]=l[d]);o.originalType=t,o.mdxType="string"==typeof t?t:a,u[1]=o;for(var k=2;k<r;k++)u[k]=n[k];return e.createElement.apply(null,u)}return e.createElement.apply(null,n)}p.displayName="MDXCreateElement"},72724:function(t,l,n){"use strict";n.r(l),n.d(l,{frontMatter:function(){return u},metadata:function(){return o},toc:function(){return d},default:function(){return i}});var e=n(22122),a=n(19756),r=(n(67294),n(3905)),u={title:"BackgroundAudioManager",sidebar_label:"BackgroundAudioManager"},o={unversionedId:"apis/media/background-audio/BackgroundAudioManager",id:"apis/media/background-audio/BackgroundAudioManager",isDocsHomePage:!1,title:"BackgroundAudioManager",description:"BackgroundAudioManager \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 Taro.getBackgroundAudioManager \u83b7\u53d6\u3002",source:"@site/docs/apis/media/background-audio/BackgroundAudioManager.md",sourceDirName:"apis/media/background-audio",slug:"/apis/media/background-audio/BackgroundAudioManager",permalink:"/taro/docs/next/apis/media/background-audio/BackgroundAudioManager",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/media/background-audio/BackgroundAudioManager.md",version:"current",sidebar_label:"BackgroundAudioManager",frontMatter:{title:"BackgroundAudioManager",sidebar_label:"BackgroundAudioManager"},sidebar:"API",previous:{title:"Taro.getBackgroundAudioManager()",permalink:"/taro/docs/next/apis/media/background-audio/getBackgroundAudioManager"},next:{title:"Taro.createLivePusherContext()",permalink:"/taro/docs/next/apis/media/live/createLivePusherContext"}},d=[{value:"\u65b9\u6cd5",id:"\u65b9\u6cd5",children:[{value:"play",id:"play",children:[]},{value:"pause",id:"pause",children:[]},{value:"stop",id:"stop",children:[]},{value:"seek",id:"seek",children:[]},{value:"onCanplay",id:"oncanplay",children:[]},{value:"onPlay",id:"onplay",children:[]},{value:"onPause",id:"onpause",children:[]},{value:"onStop",id:"onstop",children:[]},{value:"onEnded",id:"onended",children:[]},{value:"onTimeUpdate",id:"ontimeupdate",children:[]},{value:"onPrev",id:"onprev",children:[]},{value:"onNext",id:"onnext",children:[]},{value:"onError",id:"onerror",children:[]},{value:"onWaiting",id:"onwaiting",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]}],k={toc:d};function i(t){var l=t.components,n=(0,a.Z)(t,["components"]);return(0,r.kt)("wrapper",(0,e.Z)({},k,n,{components:l,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"BackgroundAudioManager \u5b9e\u4f8b\uff0c\u53ef\u901a\u8fc7 ",(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/wx.getBackgroundAudioManager.html"},"Taro.getBackgroundAudioManager")," \u83b7\u53d6\u3002"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/media/background-audio/BackgroundAudioManager.html"},"\u53c2\u8003\u6587\u6863"))),(0,r.kt)("h2",{id:"\u65b9\u6cd5"},"\u65b9\u6cd5"),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"),(0,r.kt)("th",{style:{textAlign:"center"}},"\u53ea\u8bfb"),(0,r.kt)("th",null,"\u8bf4\u660e"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"buffered"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u97f3\u9891\u5df2\u7f13\u51b2\u7684\u65f6\u95f4\uff0c\u4ec5\u4fdd\u8bc1\u5f53\u524d\u64ad\u653e\u65f6\u95f4\u70b9\u5230\u6b64\u65f6\u95f4\u70b9\u5185\u5bb9\u5df2\u7f13\u51b2\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"coverImgUrl"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u5c01\u9762\u56fe URL\uff0c\u7528\u4e8e\u505a\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u80cc\u666f\u56fe\u3002\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u4e2d\u7684\u5206\u4eab\u529f\u80fd\uff0c\u5206\u4eab\u51fa\u53bb\u7684\u5361\u7247\u914d\u56fe\u53ca\u80cc\u666f\u4e5f\u5c06\u4f7f\u7528\u8be5\u56fe\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"currentTime"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5f53\u524d\u97f3\u9891\u7684\u64ad\u653e\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u6709\u5408\u6cd5 src \u65f6\u8fd4\u56de\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"duration"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5f53\u524d\u97f3\u9891\u7684\u957f\u5ea6\uff08\u5355\u4f4d\uff1as\uff09\uff0c\u53ea\u6709\u5728\u6709\u5408\u6cd5 src \u65f6\u8fd4\u56de\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"epname"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u4e13\u8f91\u540d\uff0c\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u4e2d\u7684\u5206\u4eab\u529f\u80fd\uff0c\u5206\u4eab\u51fa\u53bb\u7684\u5361\u7247\u7b80\u4ecb\uff0c\u4e5f\u5c06\u4f7f\u7528\u8be5\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"paused"),(0,r.kt)("td",null,(0,r.kt)("code",null,"boolean")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u662f"),(0,r.kt)("td",null,"\u5f53\u524d\u662f\u5426\u6682\u505c\u6216\u505c\u6b62\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"protocol"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u97f3\u9891\u534f\u8bae\u3002\u9ed8\u8ba4\u503c\u4e3a 'http'\uff0c\u8bbe\u7f6e 'hls' \u53ef\u4ee5\u652f\u6301\u64ad\u653e HLS \u534f\u8bae\u7684\u76f4\u64ad\u97f3\u9891\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"singer"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u6b4c\u624b\u540d\uff0c\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u4e2d\u7684\u5206\u4eab\u529f\u80fd\uff0c\u5206\u4eab\u51fa\u53bb\u7684\u5361\u7247\u7b80\u4ecb\uff0c\u4e5f\u5c06\u4f7f\u7528\u8be5\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"src"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u97f3\u9891\u7684\u6570\u636e\u6e90\uff08",(0,r.kt)("a",{href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"},"2.2.3")," \u5f00\u59cb\u652f\u6301\u4e91\u6587\u4ef6ID\uff09\u3002\u9ed8\u8ba4\u4e3a\u7a7a\u5b57\u7b26\u4e32\uff0c",(0,r.kt)("strong",null,"\u5f53\u8bbe\u7f6e\u4e86\u65b0\u7684 src \u65f6\uff0c\u4f1a\u81ea\u52a8\u5f00\u59cb\u64ad\u653e"),"\uff0c\u76ee\u524d\u652f\u6301\u7684\u683c\u5f0f\u6709 m4a, aac, mp3, wav\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"startTime"),(0,r.kt)("td",null,(0,r.kt)("code",null,"number")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u97f3\u9891\u5f00\u59cb\u64ad\u653e\u7684\u4f4d\u7f6e\uff08\u5355\u4f4d\uff1as\uff09\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"title"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u97f3\u9891\u6807\u9898\uff0c\u7528\u4e8e\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u97f3\u9891\u6807\u9898\uff08\u5fc5\u586b\uff09\u3002\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u4e2d\u7684\u5206\u4eab\u529f\u80fd\uff0c\u5206\u4eab\u51fa\u53bb\u7684\u5361\u7247\u6807\u9898\uff0c\u4e5f\u5c06\u4f7f\u7528\u8be5\u503c\u3002")),(0,r.kt)("tr",null,(0,r.kt)("td",null,"webUrl"),(0,r.kt)("td",null,(0,r.kt)("code",null,"string")),(0,r.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,r.kt)("td",null,"\u9875\u9762\u94fe\u63a5\uff0c\u539f\u751f\u97f3\u9891\u64ad\u653e\u5668\u4e2d\u7684\u5206\u4eab\u529f\u80fd\uff0c\u5206\u4eab\u51fa\u53bb\u7684\u5361\u7247\u7b80\u4ecb\uff0c\u4e5f\u5c06\u4f7f\u7528\u8be5\u503c\u3002")))),(0,r.kt)("h3",{id:"play"},"play"),(0,r.kt)("p",null,"\u64ad\u653e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h3",{id:"pause"},"pause"),(0,r.kt)("p",null,"\u6682\u505c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h3",{id:"stop"},"stop"),(0,r.kt)("p",null,"\u505c\u6b62"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"() => void\n")),(0,r.kt)("h3",{id:"seek"},"seek"),(0,r.kt)("p",null,"\u8df3\u8f6c\u5230\u6307\u5b9a\u4f4d\u7f6e\uff0c\u5355\u4f4d s"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(position: any) => void\n")),(0,r.kt)("h3",{id:"oncanplay"},"onCanplay"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u8fdb\u5165\u53ef\u4ee5\u64ad\u653e\u72b6\u6001\uff0c\u4f46\u4e0d\u4fdd\u8bc1\u540e\u9762\u53ef\u4ee5\u6d41\u7545\u64ad\u653e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onplay"},"onPlay"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u64ad\u653e\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onpause"},"onPause"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u6682\u505c\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onstop"},"onStop"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u505c\u6b62\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onended"},"onEnded"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u81ea\u7136\u64ad\u653e\u7ed3\u675f\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"ontimeupdate"},"onTimeUpdate"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u64ad\u653e\u8fdb\u5ea6\u66f4\u65b0\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onprev"},"onPrev"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u7cfb\u7edf\u97f3\u4e50\u64ad\u653e\u9762\u677f\u70b9\u51fb\u4e0a\u4e00\u66f2\u4e8b\u4ef6\uff08iOS only\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onnext"},"onNext"),(0,r.kt)("p",null,"\u7528\u6237\u5728\u7cfb\u7edf\u97f3\u4e50\u64ad\u653e\u9762\u677f\u70b9\u51fb\u4e0b\u4e00\u66f2\u4e8b\u4ef6\uff08iOS only\uff09"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onerror"},"onError"),(0,r.kt)("p",null,"\u80cc\u666f\u97f3\u9891\u64ad\u653e\u9519\u8bef\u4e8b\u4ef6"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h3",{id:"onwaiting"},"onWaiting"),(0,r.kt)("p",null,"\u97f3\u9891\u52a0\u8f7d\u4e2d\u4e8b\u4ef6\uff0c\u5f53\u97f3\u9891\u56e0\u4e3a\u6570\u636e\u4e0d\u8db3\uff0c\u9700\u8981\u505c\u4e0b\u6765\u52a0\u8f7d\u65f6\u4f1a\u89e6\u53d1"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"(callback?: () => void) => void\n")),(0,r.kt)("table",null,(0,r.kt)("thead",null,(0,r.kt)("tr",null,(0,r.kt)("th",null,"\u53c2\u6570"),(0,r.kt)("th",null,"\u7c7b\u578b"))),(0,r.kt)("tbody",null,(0,r.kt)("tr",null,(0,r.kt)("td",null,"callback"),(0,r.kt)("td",null,(0,r.kt)("code",null,"() => void"))))),(0,r.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},"const backgroundAudioManager = Taro.getBackgroundAudioManager()\nbackgroundAudioManager.title = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.epname = '\u6b64\u65f6\u6b64\u523b'\nbackgroundAudioManager.singer = '\u8bb8\u5dcd'\nbackgroundAudioManager.coverImgUrl = 'https://y.gtimg.cn/music/photo_new/T002R300x300M000003rsKF44GyaSk.jpg?max_age=2592000'\n// \u8bbe\u7f6e\u4e86 src \u4e4b\u540e\u4f1a\u81ea\u52a8\u64ad\u653e\nbackgroundAudioManager.src = 'https://ws.stream.qqmusic.qq.com/M500001VfvsJ21xFqb.mp3?guid=ffffffff82def4af4b12b3cd9337d5e7&uin=346897220&vkey=6292F51E1E384E061FF02C31F716658E5C81F5594D561F2E88B854E81CAAB7806D5E4F103E55D33C16F3FAC506D1AB172DE8600B37E43FAD&fromtag=46'\n")))}i.isMDXComponent=!0}}]);