(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[61845],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),p=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(i.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,i=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),d=p(n),k=a,m=d["".concat(i,".").concat(k)]||d[k]||s[k]||l;return n?r.createElement(m,o(o({ref:e},c),{},{components:n})):r.createElement(m,o({ref:e},c))}));function k(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=d;var u={};for(var i in e)hasOwnProperty.call(e,i)&&(u[i]=e[i]);u.originalType=t,u.mdxType="string"==typeof t?t:a,o[1]=u;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(67294),a=n(80944),l=n(86010),o="tabItem_1uMI",u="tabItemActive_2DSg";var i=37,p=39;var c=function(t){var e=t.lazy,n=t.block,c=t.defaultValue,s=t.values,d=t.groupId,k=t.className,m=(0,a.Z)(),f=m.tabGroupChoices,g=m.setTabGroupChoices,h=(0,r.useState)(c),y=h[0],v=h[1],b=r.Children.toArray(t.children),N=[];if(null!=d){var O=f[d];null!=O&&O!==y&&s.some((function(t){return t.value===O}))&&v(O)}var x=function(t){var e=t.currentTarget,n=N.indexOf(e),r=s[n].value;v(r),null!=d&&(g(d,r),setTimeout((function(){var t,n,r,a,l,o,i,p;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,l=t.right,o=window,i=o.innerHeight,p=o.innerWidth,n>=0&&l<=p&&a<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(u),setTimeout((function(){return e.classList.remove(u)}),2e3))}),150))},T=function(t){var e,n;switch(t.keyCode){case p:var r=N.indexOf(t.target)+1;n=N[r]||N[0];break;case i:var a=N.indexOf(t.target)-1;n=N[a]||N[N.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.Z)("tabs",{"tabs--block":n},k)},s.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:y===e?0:-1,"aria-selected":y===e,className:(0,l.Z)("tabs__item",o,{"tabs__item--active":y===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:T,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(b.filter((function(t){return t.props.value===y}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},b.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==y})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},97523:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return p},toc:function(){return c},default:function(){return d}});var r=n(22122),a=n(19756),l=(n(67294),n(3905)),o=n(41395),u=n(58215),i={title:"OpenData",sidebar_label:"OpenData"},p={unversionedId:"components/open/open-data",id:"version-3.x/components/open/open-data",isDocsHomePage:!1,title:"OpenData",description:"Displays WeChat open data.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/open/open-data.md",sourceDirName:"components/open",slug:"/components/open/open-data",permalink:"/taro/docs/components/open/open-data",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/open/open-data.md",version:"3.x",sidebar_label:"OpenData",frontMatter:{title:"OpenData",sidebar_label:"OpenData"},sidebar:"version-3.x/components",previous:{title:"OfficialAccount",permalink:"/taro/docs/components/open/official-account"},next:{title:"WebView",permalink:"/taro/docs/components/open/web-view"}},c=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"OpenDataProps",id:"opendataprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"type",id:"type-1",children:[]},{value:"lang",id:"lang",children:[]}]},{value:"API Support",id:"api-support",children:[]}],s={toc:c};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"Displays WeChat open data."),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/open-data.html"},"Reference"))),(0,l.kt)("h2",{id:"type"},"Type"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<OpenDataProps>\n")),(0,l.kt)("h2",{id:"examples"},"Examples"),(0,l.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,l.kt)(u.Z,{value:"React",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <OpenData type='userAvatarUrl'/>\n    )\n  }\n}\n"))),(0,l.kt)(u.Z,{value:"Vue",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <open-data type="userAvatarUrl" />\n</template>\n')))),(0,l.kt)("h2",{id:"opendataprops"},"OpenDataProps"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Property"),(0,l.kt)("th",null,"Type"),(0,l.kt)("th",{style:{textAlign:"center"}},"Default"),(0,l.kt)("th",{style:{textAlign:"center"}},"Required"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"type"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"groupName" | "userNickName" | "userAvatarUrl" | "userGender" | "userCity" | "userProvince" | "userCountry" | "userLanguage"')),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,l.kt)("td",null,"The type of the open data.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"openGid"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'The ID of the group. It is valid when type="groupName".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"lang"),(0,l.kt)("td",null,(0,l.kt)("code",null,'"en" | "zh_CN" | "zh_TW"')),(0,l.kt)("td",{style:{textAlign:"center"}},(0,l.kt)("code",null,'"en"')),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,'Specifies the language used to display userInfo. It is valid when type="user*".')),(0,l.kt)("tr",null,(0,l.kt)("td",null,"defaultText"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Default text when data is empty")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"defaultAvatar"),(0,l.kt)("td",null,(0,l.kt)("code",null,"string")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Default image when user avatar is empty, supports relative paths and network image paths.")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"onError"),(0,l.kt)("td",null,(0,l.kt)("code",null,"BaseEventOrigFunction<any>")),(0,l.kt)("td",{style:{textAlign:"center"}}),(0,l.kt)("td",{style:{textAlign:"center"}},"No"),(0,l.kt)("td",null,"Triggered when the group name or user information is empty.")))),(0,l.kt)("h3",{id:"property-support"},"Property Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.type"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.openGid"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.lang"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultText"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.defaultAvatar"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenDataProps.onError"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))),(0,l.kt)("h3",{id:"type-1"},"type"),(0,l.kt)("p",null,"type Valid values of type"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"groupName"),(0,l.kt)("td",null,"The name of the group")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userNickName"),(0,l.kt)("td",null,"The nickname of the user")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userAvatarUrl"),(0,l.kt)("td",null,"The profile photo of the user")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userGender"),(0,l.kt)("td",null,"The gender of the user")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userCity"),(0,l.kt)("td",null,"The city where the user is located")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userProvince"),(0,l.kt)("td",null,"The province where the user is located")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userCountry"),(0,l.kt)("td",null,"The country where the user is located")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"userLanguage"),(0,l.kt)("td",null,"The language used by the user")))),(0,l.kt)("h3",{id:"lang"},"lang"),(0,l.kt)("p",null,"Valid values of lang"),(0,l.kt)("table",null,(0,l.kt)("thead",null,(0,l.kt)("tr",null,(0,l.kt)("th",null,"Value"),(0,l.kt)("th",null,"Description"))),(0,l.kt)("tbody",null,(0,l.kt)("tr",null,(0,l.kt)("td",null,"en"),(0,l.kt)("td",null,"English")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"zh_CN"),(0,l.kt)("td",null,"Simplified Chinese")),(0,l.kt)("tr",null,(0,l.kt)("td",null,"zh_TW"),(0,l.kt)("td",null,"Traditional Chinese")))),(0,l.kt)("h2",{id:"api-support"},"API Support"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"center"},"API"),(0,l.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,l.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,l.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"center"},"OpenData"),(0,l.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,l.kt)("td",{parentName:"tr",align:"center"}),(0,l.kt)("td",{parentName:"tr",align:"center"})))))}d.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);