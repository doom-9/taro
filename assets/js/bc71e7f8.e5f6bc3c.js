(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[48013],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return k}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),p=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=p(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),d=p(n),k=l,m=d["".concat(c,".").concat(k)]||d[k]||s[k]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function k(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},37745:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return o},metadata:function(){return i},toc:function(){return c},default:function(){return u}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o={title:"Taro.openSetting(option)",sidebar_label:"openSetting"},i={unversionedId:"apis/open-api/settings/openSetting",id:"apis/open-api/settings/openSetting",isDocsHomePage:!1,title:"Taro.openSetting(option)",description:"\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u754c\u9762\uff0c\u8fd4\u56de\u7528\u6237\u8bbe\u7f6e\u7684\u64cd\u4f5c\u7ed3\u679c\u3002\u8bbe\u7f6e\u754c\u9762\u53ea\u4f1a\u51fa\u73b0\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u5411\u7528\u6237\u8bf7\u6c42\u8fc7\u7684\u6743\u9650\u3002",source:"@site/docs/apis/open-api/settings/openSetting.md",sourceDirName:"apis/open-api/settings",slug:"/apis/open-api/settings/openSetting",permalink:"/taro/docs/next/apis/open-api/settings/openSetting",editUrl:"https://github.com/nervjs/taro/edit/docs/docs/apis/open-api/settings/openSetting.md",version:"current",sidebar_label:"openSetting",frontMatter:{title:"Taro.openSetting(option)",sidebar_label:"openSetting"},sidebar:"API",previous:{title:"Taro.authorize(option)",permalink:"/taro/docs/next/apis/open-api/authorize/authorize"},next:{title:"Taro.getSetting(option)",permalink:"/taro/docs/next/apis/open-api/settings/getSetting"}},c=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"Option",id:"option",children:[]},{value:"SuccessCallbackResult",id:"successcallbackresult",children:[]}]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]}],p={toc:c};function u(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u8c03\u8d77\u5ba2\u6237\u7aef\u5c0f\u7a0b\u5e8f\u8bbe\u7f6e\u754c\u9762\uff0c\u8fd4\u56de\u7528\u6237\u8bbe\u7f6e\u7684\u64cd\u4f5c\u7ed3\u679c\u3002",(0,a.kt)("strong",{parentName:"p"},"\u8bbe\u7f6e\u754c\u9762\u53ea\u4f1a\u51fa\u73b0\u5c0f\u7a0b\u5e8f\u5df2\u7ecf\u5411\u7528\u6237\u8bf7\u6c42\u8fc7\u7684",(0,a.kt)("a",{parentName:"strong",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/open-ability/authorize.html"},"\u6743\u9650")),"\u3002"),(0,a.kt)("p",null,"\u6ce8\u610f\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/framework/compatibility.html"},"2.3.0")," \u7248\u672c\u5f00\u59cb\uff0c\u7528\u6237\u53d1\u751f\u70b9\u51fb\u884c\u4e3a\u540e\uff0c\u624d\u53ef\u4ee5\u8df3\u8f6c\u6253\u5f00\u8bbe\u7f6e\u9875\uff0c\u7ba1\u7406\u6388\u6743\u4fe1\u606f\u3002",(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/community/develop/doc/000cea2305cc5047af5733de751008"},"\u8be6\u60c5")),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/api/open-api/setting/wx.openSetting.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"(option?: Option) => Promise<SuccessCallbackResult>\n")),(0,a.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,a.kt)("h3",{id:"option"},"Option"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"complete"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u7ed3\u675f\u7684\u56de\u8c03\u51fd\u6570\uff08\u8c03\u7528\u6210\u529f\u3001\u5931\u8d25\u90fd\u4f1a\u6267\u884c\uff09")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fail"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(res: CallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u5931\u8d25\u7684\u56de\u8c03\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"success"),(0,a.kt)("td",null,(0,a.kt)("code",null,"(result: SuccessCallbackResult) => void")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u63a5\u53e3\u8c03\u7528\u6210\u529f\u7684\u56de\u8c03\u51fd\u6570")))),(0,a.kt)("h3",{id:"successcallbackresult"},"SuccessCallbackResult"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"authSetting"),(0,a.kt)("td",null,(0,a.kt)("code",null,"AuthSetting")),(0,a.kt)("td",null,"\u7528\u6237\u6388\u6743\u7ed3\u679c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"\u8c03\u7528\u7ed3\u679c")))),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},'Taro.openSetting({\n  success: function (res) {\n    console.log(res.authSetting)\n    // res.authSetting = {\n    //   "scope.userInfo": true,\n    //   "scope.userLocation": true\n    // }\n  }\n})\n')),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Taro.openSetting"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}u.isMDXComponent=!0}}]);