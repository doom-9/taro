(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[52948],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return m}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function c(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var i=r.createContext({}),s=function(t){var e=r.useContext(i),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(i.Provider,{value:e},t.children)},p={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,o=t.originalType,i=t.parentName,u=c(t,["components","mdxType","originalType","parentName"]),d=s(n),m=a,k=d["".concat(i,".").concat(m)]||d[m]||p[m]||o;return n?r.createElement(k,l(l({ref:e},u),{},{components:n})):r.createElement(k,l({ref:e},u))}));function m(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=n.length,l=new Array(o);l[0]=d;var c={};for(var i in e)hasOwnProperty.call(e,i)&&(c[i]=e[i]);c.originalType=t,c.mdxType="string"==typeof t?t:a,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,a=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(67294),a=n(80944),o=n(86010),l="tabItem_1uMI",c="tabItemActive_2DSg";var i=37,s=39;var u=function(t){var e=t.lazy,n=t.block,u=t.defaultValue,p=t.values,d=t.groupId,m=t.className,k=(0,a.Z)(),f=k.tabGroupChoices,y=k.setTabGroupChoices,g=(0,r.useState)(u),h=g[0],b=g[1],v=r.Children.toArray(t.children),N=[];if(null!=d){var w=f[d];null!=w&&w!==h&&p.some((function(t){return t.value===w}))&&b(w)}var x=function(t){var e=t.currentTarget,n=N.indexOf(e),r=p[n].value;b(r),null!=d&&(y(d,r),setTimeout((function(){var t,n,r,a,o,l,i,s;(t=e.getBoundingClientRect(),n=t.top,r=t.left,a=t.bottom,o=t.right,l=window,i=l.innerHeight,s=l.innerWidth,n>=0&&o<=s&&a<=i&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(c),setTimeout((function(){return e.classList.remove(c)}),2e3))}),150))},I=function(t){var e,n;switch(t.keyCode){case s:var r=N.indexOf(t.target)+1;n=N[r]||N[0];break;case i:var a=N.indexOf(t.target)-1;n=N[a]||N[N.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":n},m)},p.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:h===e?0:-1,"aria-selected":h===e,className:(0,o.Z)("tabs__item",l,{"tabs__item--active":h===e}),key:e,ref:function(t){return N.push(t)},onKeyDown:I,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(v.filter((function(t){return t.props.value===h}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},v.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==h})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),a=n(79443);e.Z=function(){var t=(0,r.useContext)(a.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},2986:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u},default:function(){return d}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l=n(41395),c=n(58215),i={title:"Icon",sidebar_label:"Icon"},s={unversionedId:"components/base/icon",id:"version-3.x/components/base/icon",isDocsHomePage:!1,title:"Icon",description:"Icon. The unit of length of the component's properties is px by default.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/base/icon.md",sourceDirName:"components/base",slug:"/components/base/icon",permalink:"/taro/docs/components/base/icon",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/base/icon.md",version:"3.x",sidebar_label:"Icon",frontMatter:{title:"Icon",sidebar_label:"Icon"},sidebar:"version-3.x/components",previous:{title:"MatchMedia",permalink:"/taro/docs/components/viewContainer/match-media"},next:{title:"Text",permalink:"/taro/docs/components/base/text"}},u=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"IconProps",id:"iconprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"TIconType",id:"ticontype",children:[]}]},{value:"API Support",id:"api-support",children:[]}],p={toc:u};function d(t){var e=t.components,n=(0,a.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"Icon. The unit of length of the component's properties is px by default."),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/icon.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<IconProps>\n")),(0,o.kt)("h2",{id:"examples"},"Examples"),(0,o.kt)(l.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,o.kt)(c.Z,{value:"React",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"export default class PageView extends Component {\n  constructor() {\n    super(...arguments)\n  }\n\n  render() {\n    return (\n      <View className='components-page'>\n        <Icon size='60' type='success' />\n        <Icon size='60' type='info' />\n        <Icon size='60' type='warn' color='#ccc' />\n        <Icon size='60' type='warn' />\n        <Icon size='60' type='waiting' />\n        <Icon size='20' type='success_no_circle' />\n        <Icon size='20' type='warn' />\n        <Icon size='20' type='success' />\n        <Icon size='20' type='download' />\n        <Icon size='20' type='clear' color='red' />\n        <Icon size='20' type='search' />\n      </View>\n    )\n  }\n}\n"))),(0,o.kt)(c.Z,{value:"Vue",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<template>\n  <view class="components-page">\n    <icon size="60" type="success" />\n    <icon size="60" type="info" />\n    <icon size="60" type="warn" color="#ccc" />\n    <icon size="60" type="warn" />\n    <icon size="60" type="waiting" />\n    <icon size="20" type="success_no_circle" />\n    <icon size="20" type="warn" />\n    <icon size="20" type="success" />\n    <icon size="20" type="download" />\n    <icon size="20" type="clear" color="red" />\n    <icon size="20" type="search" />\n  </view>\n</template>\n')))),(0,o.kt)("h2",{id:"iconprops"},"IconProps"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Default"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"type"),(0,o.kt)("td",null,(0,o.kt)("code",null,'"success" | "success_no_circle" | "info" | "warn" | "waiting" | "cancel" | "download" | "search" | "clear"')),(0,o.kt)("td",{style:{textAlign:"center"}}),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The type of the icon.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"size"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},(0,o.kt)("code",null,"23")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The size of the icon.")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"color"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}}),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"The color of the icon. It is the same as the color of the css.")))),(0,o.kt)("h3",{id:"property-support"},"Property Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"IconProps.type"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"IconProps.size"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"IconProps.color"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,o.kt)("h3",{id:"ticontype"},"TIconType"),(0,o.kt)("p",null,"Valid values of type"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"value"),(0,o.kt)("th",null,"description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,"success icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success_no_circle"),(0,o.kt)("td",null,"success icon(no circle)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"info"),(0,o.kt)("td",null,"info icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"warn"),(0,o.kt)("td",null,"warn icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"waiting"),(0,o.kt)("td",null,"waiting icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"cancel"),(0,o.kt)("td",null,"cancel icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"download"),(0,o.kt)("td",null,"download icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"search"),(0,o.kt)("td",null,"search icon")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"clear"),(0,o.kt)("td",null,"clear icon")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"ByteDance Micro-App"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Icon"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}d.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,a="";if("string"==typeof t||"number"==typeof t)a+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(a&&(a+=" "),a+=n);else for(e in t)t[e]&&(a&&(a+=" "),a+=e);return a}function a(){for(var t,e,n=0,a="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(a&&(a+=" "),a+=e);return a}n.d(e,{Z:function(){return a}})}}]);