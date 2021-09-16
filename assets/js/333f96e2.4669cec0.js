(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[59629],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return s},kt:function(){return k}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function a(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=l.createContext({}),u=function(t){var e=l.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},s=function(t){var e=u(t.components);return l.createElement(c.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},d=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,c=t.parentName,s=a(t,["components","mdxType","originalType","parentName"]),d=u(n),k=r,h=d["".concat(c,".").concat(k)]||d[k]||p[k]||o;return n?l.createElement(h,i(i({ref:e},s),{},{components:n})):l.createElement(h,i({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,i=new Array(o);i[0]=d;var a={};for(var c in e)hasOwnProperty.call(e,c)&&(a[c]=e[c]);a.originalType=t,a.mdxType="string"==typeof t?t:r,i[1]=a;for(var u=2;u<o;u++)i[u]=n[u];return l.createElement.apply(null,i)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41856:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return a},toc:function(){return c},default:function(){return s}});var l=n(22122),r=n(19756),o=(n(67294),n(3905)),i={title:"Taro.chooseInvoiceTitle(option)",sidebar_label:"chooseInvoiceTitle"},a={unversionedId:"apis/open-api/invoice/chooseInvoiceTitle",id:"version-3.x/apis/open-api/invoice/chooseInvoiceTitle",isDocsHomePage:!1,title:"Taro.chooseInvoiceTitle(option)",description:"Selects the user's invoice title. This API can be called only when the current Mini Program is associated with an Official Account that has completed WeChat verification.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/open-api/invoice/chooseInvoiceTitle.md",sourceDirName:"apis/open-api/invoice",slug:"/apis/open-api/invoice/chooseInvoiceTitle",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoiceTitle",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/open-api/invoice/chooseInvoiceTitle.md",version:"3.x",sidebar_label:"chooseInvoiceTitle",frontMatter:{title:"Taro.chooseInvoiceTitle(option)",sidebar_label:"chooseInvoiceTitle"},sidebar:"version-3.x/API",previous:{title:"Taro.addCard(option)",permalink:"/taro/docs/apis/open-api/card/addCard"},next:{title:"Taro.chooseInvoice(option)",permalink:"/taro/docs/apis/open-api/invoice/chooseInvoice"}},c=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]},{value:"invoice_type",id:"invoice_type",children:[]}]},{value:"Sample Code",id:"sample-code",children:[]},{value:"API Support",id:"api-support",children:[]}],u={toc:c};function s(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,l.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Selects the user's invoice title. This API can be called only when the current Mini Program is associated with an Official Account that has completed ",(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/doc/offiaccount/WeChat_Invoice/Quick_issuing/Access_Request.html"},"WeChat verification"),"."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/open-api/invoice/wx.chooseInvoiceTitle.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"title"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Title name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"type"),(0,o.kt)("td",null,(0,o.kt)("code",null,"0 | 1")),(0,o.kt)("td",null,"Title type")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"taxNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Tax number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"companyAddress"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Company address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"telephone"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Mobile number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bankName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Bank name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"bankAccount"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Bank account")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"errMsg"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",null,"Error message")))),(0,o.kt)("h3",{id:"invoice_type"},"invoice_type"),(0,o.kt)("p",null,"invoice type"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"0"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Company"'))),(0,o.kt)("tr",null,(0,o.kt)("td",null,"1"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"Individual"'))))),(0,o.kt)("h2",{id:"sample-code"},"Sample Code"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"Taro.chooseInvoiceTitle({\n  success: function(res) {}\n})\n")),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.chooseInvoiceTitle"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}s.isMDXComponent=!0}}]);