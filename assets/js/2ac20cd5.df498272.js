(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[37742],{22122:function(t,e,n){"use strict";function l(){return(l=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var l in n)Object.prototype.hasOwnProperty.call(n,l)&&(t[l]=n[l])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return l}})},19756:function(t,e,n){"use strict";function l(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}n.d(e,{Z:function(){return l}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return i},kt:function(){return p}});var l=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,l)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,l,r=function(t,e){if(null==t)return{};var n,l,r={},o=Object.keys(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(l=0;l<o.length;l++)n=o[l],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var a=l.createContext({}),c=function(t){var e=l.useContext(a),n=e;return t&&(n="function"==typeof t?t(e):d(d({},e),t)),n},i=function(t){var e=c(t.components);return l.createElement(a.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var n=t.components,r=t.mdxType,o=t.originalType,a=t.parentName,i=u(t,["components","mdxType","originalType","parentName"]),s=c(n),p=r,m=s["".concat(a,".").concat(p)]||s[p]||k[p]||o;return n?l.createElement(m,d(d({ref:e},i),{},{components:n})):l.createElement(m,d({ref:e},i))}));function p(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var o=n.length,d=new Array(o);d[0]=s;var u={};for(var a in e)hasOwnProperty.call(e,a)&&(u[a]=e[a]);u.originalType=t,u.mdxType="string"==typeof t?t:r,d[1]=u;for(var c=2;c<o;c++)d[c]=n[c];return l.createElement.apply(null,d)}return l.createElement.apply(null,n)}s.displayName="MDXCreateElement"},66257:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return d},metadata:function(){return u},toc:function(){return a},default:function(){return i}});var l=n(22122),r=n(19756),o=(n(67294),n(3905)),d={title:"Taro.addPhoneContact(option)",sidebar_label:"addPhoneContact"},u={unversionedId:"apis/device/contact/addPhoneContact",id:"version-3.x/apis/device/contact/addPhoneContact",isDocsHomePage:!1,title:"Taro.addPhoneContact(option)",description:'Adds a contact to the mobile contacts. The user can write this form to the mobile contacts using either "Add Contact" or "Add to Existing Contact" method.',source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/apis/device/contact/addPhoneContact.md",sourceDirName:"apis/device/contact",slug:"/apis/device/contact/addPhoneContact",permalink:"/taro/docs/apis/device/contact/addPhoneContact",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/apis/device/contact/addPhoneContact.md",version:"3.x",sidebar_label:"addPhoneContact",frontMatter:{title:"Taro.addPhoneContact(option)",sidebar_label:"addPhoneContact"},sidebar:"version-3.x/API",previous:{title:"WifiInfo",permalink:"/taro/docs/apis/device/wifi/WifiInfo"},next:{title:"Taro.writeBLECharacteristicValue(option)",permalink:"/taro/docs/apis/device/ble/writeBLECharacteristicValue"}},a=[{value:"Type",id:"type",children:[]},{value:"Parameters",id:"parameters",children:[{value:"Option",id:"option",children:[]}]},{value:"API Support",id:"api-support",children:[]}],c={toc:a};function i(t){var e=t.components,n=(0,r.Z)(t,["components"]);return(0,o.kt)("wrapper",(0,l.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("p",null,'Adds a contact to the mobile contacts. The user can write this form to the mobile contacts using either "Add Contact" or "Add to Existing Contact" method.'),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/api/device/contact/wx.addPhoneContact.html"},"Reference"))),(0,o.kt)("h2",{id:"type"},"Type"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx"},"(option: Option) => Promise<CallbackResult>\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("h3",{id:"option"},"Option"),(0,o.kt)("table",null,(0,o.kt)("thead",null,(0,o.kt)("tr",null,(0,o.kt)("th",null,"Property"),(0,o.kt)("th",null,"Type"),(0,o.kt)("th",{style:{textAlign:"center"}},"Required"),(0,o.kt)("th",null,"Description"))),(0,o.kt)("tbody",null,(0,o.kt)("tr",null,(0,o.kt)("td",null,"firstName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"Yes"),(0,o.kt)("td",null,"Name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"middleName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Middle name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"lastName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Last name")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"nickName"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Nickname")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"addressCity"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Contact address city")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"addressCountry"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Contact address country")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"addressPostalCode"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Contact address post code")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"addressState"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Contact address province")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"addressStreet"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Contact address street")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"email"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Email address")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeAddressCity"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home address city")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeAddressCountry"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home address county")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeAddressPostalCode"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home address post code")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeAddressState"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home address province")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeAddressStreet"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home address street")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homeFaxNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home fax")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"homePhoneNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Home phone number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"hostNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Company phone number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"mobilePhoneNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Mobile number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"organization"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Company")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"photoFilePath"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Path of the local profile photo file")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"remark"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Remarks")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"title"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Job title")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"url"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Website")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"weChatNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"WeChat ID")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workAddressCity"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work address city")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workAddressCountry"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work address country")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workAddressPostalCode"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work address post code")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workAddressState"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work address province")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workAddressStreet"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work address street")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workFaxNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work fax")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"workPhoneNumber"),(0,o.kt)("td",null,(0,o.kt)("code",null,"string")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"Work phone number")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"complete"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function used when the API call completed (always executed whether the call succeeds or fails)")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"fail"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: any) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a failed API call")),(0,o.kt)("tr",null,(0,o.kt)("td",null,"success"),(0,o.kt)("td",null,(0,o.kt)("code",null,"(res: Result) => void")),(0,o.kt)("td",{style:{textAlign:"center"}},"No"),(0,o.kt)("td",null,"The callback function for a successful API call")))),(0,o.kt)("h2",{id:"api-support"},"API Support"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:"center"},"API"),(0,o.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,o.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,o.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:"center"},"Taro.addPhoneContact"),(0,o.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,o.kt)("td",{parentName:"tr",align:"center"}),(0,o.kt)("td",{parentName:"tr",align:"center"})))))}i.isMDXComponent=!0}}]);