(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[34580],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,l=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=s(n),k=o,m=d["".concat(c,".").concat(k)]||d[k]||p[k]||l;return n?r.createElement(m,a(a({ref:e},u),{},{components:n})):r.createElement(m,a({ref:e},u))}));function k(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=n.length,a=new Array(l);a[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,a[1]=i;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67669:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return a},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(22122),o=n(19756),l=(n(67294),n(3905)),a={title:"Taro.showToast(option)",sidebar_label:"showToast"},i={unversionedId:"apis/ui/interaction/showToast",id:"version-3.x/apis/ui/interaction/showToast",isDocsHomePage:!1,title:"Taro.showToast(option)",description:"Displays the message prompt box.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/ui/interaction/showToast.md",sourceDirName:"apis/ui/interaction",slug:"/apis/ui/interaction/showToast",permalink:"/taro/docs/apis/ui/interaction/showToast",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/ui/interaction/showToast.md",version:"3.x",sidebar_label:"showToast",frontMatter:{title:"Taro.showToast(option)",sidebar_label:"showToast"},sidebar:"version-3.x/API",previous:{title:"Page",permalink:"/taro/docs/apis/framework/Page"},next:{title:"Taro.showModal(option)",permalink:"/taro/docs/apis/ui/interaction/showModal"}},c=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],s={toc:c};function u(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Displays the message prompt box."),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Either ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.showLoading")," or ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.showToast")," can be displayed."),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"Taro.showToast")," should be paired with ",(0,l.kt)("inlineCode",{parentName:"li"},"Taro.hideToast"),".")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/ui/interaction/wx.showToast.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,l.kt)("h2",{id:"parameters"},"Parameters"),(0,l.kt)("h3",{id:"option"},"Option"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"title"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"Prompt content")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"complete"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"duration"),(0,l.kt)("td",null,(0,l.kt)("code",null,"number")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The delay time for a prompt")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"fail"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a failed API call")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"icon"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"success" | "loading" | "none"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Icon")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"image"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The local path of the custom icon. image has priority over icon.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"mask"),(0,l.kt)("td",null,(0,l.kt)("code",null,"boolean")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Indicates whether to display a transparent mask to prevent touch penetration")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"success"),(0,l.kt)("td",null,(0,l.kt)("code",null,"(res: CallbackResult) => void")),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"The callback function for a successful API call")))),(0,l.kt)("h2",{id:"sample-code"},"Sample Code"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.showToast({\n  title: 'Success',\n  icon: 'success',\n  duration: 2000\n})\n")),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"Taro.showToast"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}u.isMDXComponent=!0}}]);