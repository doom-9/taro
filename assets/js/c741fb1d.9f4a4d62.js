(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[65241],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=s(n),d=o,f=m["".concat(l,".").concat(d)]||m[d]||c[d]||i;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u.mdxType="string"==typeof e?e:o,a[1]=u;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},74265:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return a},metadata:function(){return u},toc:function(){return l},default:function(){return p}});var r=n(22122),o=n(19756),i=(n(67294),n(3905)),a={title:"Vue3"},u={unversionedId:"vue3",id:"version-3.x/vue3",isDocsHomePage:!1,title:"Vue3",description:"Taro can be developed using Vue 3. Developers can use the taro init command to create templates for Vue 3, including default, vuex, and NutUI3.0. We recommend using NutUI3.0 templates for development.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/vue3.md",sourceDirName:".",slug:"/vue3",permalink:"/taro/docs/vue3",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/vue3.md",version:"3.x",frontMatter:{title:"Vue3"},sidebar:"version-3.x/docs",previous:{title:"Page Component",permalink:"/taro/docs/vue-page"},next:{title:"Vue DevTools",permalink:"/taro/docs/vue-devtools"}},l=[{value:"Other limitations",id:"other-limitations",children:[]},{value:"Related Reading",id:"related-reading",children:[]}],s={toc:l};function p(e){var t=e.components,n=(0,o.Z)(e,["components"]);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Taro can be developed using Vue 3. Developers can use the ",(0,i.kt)("inlineCode",{parentName:"p"},"taro init")," command to create templates for Vue 3, including ",(0,i.kt)("strong",{parentName:"p"},"default"),", ",(0,i.kt)("strong",{parentName:"p"},"vuex"),", and ",(0,i.kt)("a",{parentName:"p",href:"https://nutui.jd.com/#/button"},"NutUI3.0"),". We recommend using NutUI3.0 templates for development."),(0,i.kt)("p",null,"For details, please refer to the Taro Vue series documentation."),(0,i.kt)("p",null,"Developers can choose to organize their logic using options-style configuration or the ",(0,i.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/composition-api-introduction.html"},"Composition API")," and browse the ","[Vue 3 documentation]","(",(0,i.kt)("a",{parentName:"p",href:"https://v3."},"https://v3.")," vuejs.org/) to learn more about Vue3 changes."),(0,i.kt)("h2",{id:"other-limitations"},"Other limitations"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"<style scoped>")," is not supported in the mini-program, it is recommended to use cssModules instead.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/6662"},"#6662")),(0,i.kt)("li",{parentName:"ul"},"Elements cannot be inserted outside the DOM tree of a page component, so ",(0,i.kt)("inlineCode",{parentName:"li"},"<teleport>")," is not supported"),(0,i.kt)("li",{parentName:"ul"},"The internal implementation of Vue 3 uses Proxy, which does not work on iOS 9 and below. However, the official Vue team will release a compatible version after the official release."),(0,i.kt)("li",{parentName:"ul"},"Using ref on the H5 side to get the DOM node of the base component now only gets the Vue component instance of the adaptation layer, not the corresponding webComponent root node. This was possible in Vue2 by modifying the refs property of the parent element, but the order of initialization between components has changed in Vue3, so it is not supported for now."),(0,i.kt)("li",{parentName:"ul"},"The v-model binding property of Vue3 has been changed to modelValue and the event binding has been changed to update:modelValue. For example, input automatically corresponds to modelValue and value, update:modelValue and @input, but for Picker, which is an mini program-specific form, it does not, so we recommend not using v-model in this case."),(0,i.kt)("li",{parentName:"ul"},"The VirtualList component needs to implement a Vue3 version (to be implemented)"),(0,i.kt)("li",{parentName:"ul"},"The ",(0,i.kt)("inlineCode",{parentName:"li"},"id")," of all components must remain unique throughout the application (even if they are on different pages), otherwise it may cause problems with events not firing.",(0,i.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro/issues/7317"},"#7317"))),(0,i.kt)("h2",{id:"related-reading"},"Related Reading"),(0,i.kt)("p",null,"New Vue3 features can be found in the ",(0,i.kt)("a",{parentName:"p",href:"https://v3.vuejs.org/guide/migration/introduction.html#notable-new-features"},"Vue3 documentation"),"."),(0,i.kt)("p",null,"How Taro is compatible with Vue3 can be found in ",(0,i.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-rfcs/blob/master/rfcs/0001-vue-3-support.md"},"Taro RFC"),"."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://taro-club.jd.com/topic/2267/%E4%BD%BF%E7%94%A8-vue3-%E5%BC%80%E5%8F%91%E5%B0%8F%E7%A8%8B%E5%BA%8F"},"Developing Applets with Vue3")," by lillian."),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/jdf2e/nutui-demo/tree/master/taro"}," NutUI Development Example ")," by jdf2e."))}p.isMDXComponent=!0}}]);