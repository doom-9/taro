(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42889],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function o(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){o(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,o=function(t,e){if(null==t)return{};var n,r,o={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(o[n]=t[n]);return o}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(o[n]=t[n])}return o}var c=r.createContext({}),u=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},p=function(t){var e=u(t.components);return r.createElement(c.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,o=t.mdxType,a=t.originalType,c=t.parentName,p=i(t,["components","mdxType","originalType","parentName"]),d=u(n),f=o,m=d["".concat(c,".").concat(f)]||d[f]||s[f]||a;return n?r.createElement(m,l(l({ref:e},p),{},{components:n})):r.createElement(m,l({ref:e},p))}));function f(t,e){var n=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var a=n.length,l=new Array(a);l[0]=d;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:o,l[1]=i;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},43654:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return p}});var r=n(22122),o=n(19756),a=(n(67294),n(3905)),l={title:"OfficialAccount",sidebar_label:"OfficialAccount"},i={unversionedId:"components/open/official-account",id:"version-3.x/components/open/official-account",isDocsHomePage:!1,title:"OfficialAccount",description:"The Official Account following component. You can add this component to a Mini Program, to help a user conveniently follow an Official Account after the user opens the Mini Program by scanning the Mini Program code. This component can be nested into a native component.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/official-account.md",sourceDirName:"components/open",slug:"/components/open/official-account",permalink:"/taro/docs/components/open/official-account",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/official-account.md",version:"3.x",sidebar_label:"OfficialAccount",frontMatter:{title:"OfficialAccount",sidebar_label:"OfficialAccount"},sidebar:"version-3.x/components",previous:{title:"Ad",permalink:"/taro/docs/components/open/ad"},next:{title:"OpenData",permalink:"/taro/docs/components/open/open-data"}},c=[{value:"Type",id:"type",children:[]},{value:"OfficialAccountProps",id:"officialaccountprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"detail",id:"detail",children:[]},{value:"status",id:"status",children:[]}]},{value:"API Support",id:"api-support",children:[]}],u={toc:c};function p(t){var e=t.components,n=(0,o.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"The Official Account following component. You can add this component to a Mini Program, to help a user conveniently follow an Official Account after the user opens the ",(0,a.kt)("strong",{parentName:"p"},"Mini Program")," by scanning the Mini Program code. This component can be nested into a native component."),(0,a.kt)("p",null,"Tips"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Before using this component, you need to go to Mini Program Console, and choose ",(0,a.kt)("strong",{parentName:"p"},"Settings > API Settings > Official Account Following Component")," to set the Official Account to be displayed. ",(0,a.kt)("strong",{parentName:"p"},"Note: The Official Account and the Mini Program must belong to the same entity."))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"During the lifecycle of a Mini Program, the capability of displaying the Official Account following component is available only when the Mini Program is opened in any of the following scenarios:"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The Mini Program is opened by scanning the Mini Program code (scene value 1047).")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When the Mini Program is opened from ",(0,a.kt)("strong",{parentName:"p"},"Recently Used")," at the top of the Chats screen (scene value 1089), if the Mini Program is not destroyed, the component remains in the same state as that when the Mini Program was last opened.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"When returning to the Mini Program from another Mini Program (scene value 1038), if the Mini Program is not destroyed, the component remains in the same state as when the Mini Program was opened last time."))),(0,a.kt)("ol",{start:3},(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"The minimum width of the component is limited to 300 px and the height is fixed at 84 px.")),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Each page can include only one Official Account following component."))),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/official-account.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<OfficialAccountProps>\n")),(0,a.kt)("h2",{id:"officialaccountprops"},"OfficialAccountProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"onLoad"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<detail>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the component is loaded successfully.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onError"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<detail>")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered when the component fails to be loaded.")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OfficialAccountProps.onLoad"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OfficialAccountProps.onError"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))),(0,a.kt)("h3",{id:"detail"},"detail"),(0,a.kt)("p",null,"detail object"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"status"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Status code")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"errMsg"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",null,"Error message")))),(0,a.kt)("h3",{id:"status"},"status"),(0,a.kt)("p",null,"Valid values of status"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Value"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"-2"),(0,a.kt)("td",null,"Network error")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"-1"),(0,a.kt)("td",null,"Data parsing error")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"0"),(0,a.kt)("td",null,"Loading succeeded")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"1"),(0,a.kt)("td",null,"The Official Account following feature in the Mini Program is suspended")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"2"),(0,a.kt)("td",null,"Linked Official Account is suspended")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"3"),(0,a.kt)("td",null,"The Official Account is unlinked or not selected")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"4"),(0,a.kt)("td",null,"The Official Account following feature is disabled")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"5"),(0,a.kt)("td",null,"Scene value error")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"6"),(0,a.kt)("td",null,"Repeated creation")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"OfficialAccount"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})))))}p.isMDXComponent=!0}}]);