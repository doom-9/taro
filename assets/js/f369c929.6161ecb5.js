(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[42851],{22122:function(e,t,n){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}n.d(t,{Z:function(){return r}})},19756:function(e,t,n){"use strict";function r(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}n.d(t,{Z:function(){return r}})},3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,k=m["".concat(i,".").concat(d)]||m[d]||s[d]||o;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},20057:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return l},metadata:function(){return p},toc:function(){return i},default:function(){return c}});var r=n(22122),a=n(19756),o=(n(67294),n(3905)),l={slug:"2021-08-13-Taro-3.3",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.3 \u7248\u672c\uff1a\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u4e0e\u6846\u67b6 DevTools",author:"JJ",author_url:"https://github.com/Chen-jj",author_image_url:"https://storage.jd.com/cjj-pub-images/11807297.png",tags:["v3"],description:""},p={permalink:"/taro/blog/2021-08-13-Taro-3.3",editUrl:"https://github.com/nervjs/taro/edit/blog/blog/2021-08-13-Taro-3.3.md",source:"@site/blog/2021-08-13-Taro-3.3.md",title:"Taro \u6b63\u5f0f\u53d1\u5e03 3.3 \u7248\u672c\uff1a\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u4e0e\u6846\u67b6 DevTools",description:"",date:"2021-08-13T00:00:00.000Z",formattedDate:"August 13, 2021",tags:[{label:"v3",permalink:"/taro/blog/tags/v-3"}],readingTime:1.69,truncated:!1,nextItem:{title:"Taro 3.3 alpha \u53d1\u5e03\uff1a\u7528 ant-design \u5f00\u53d1\u5c0f\u7a0b\u5e8f\uff1f",permalink:"/taro/blog/2021-04-22-Taro-3.3-alpha"}},i=[{value:"\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e",id:"\u652f\u6301\u4f7f\u7528-h5-\u6807\u7b7e",children:[{value:"\u7528\u6cd5",id:"\u7528\u6cd5",children:[]},{value:"\u793a\u4f8b\u9879\u76ee",id:"\u793a\u4f8b\u9879\u76ee",children:[]},{value:"What&#39;s news",id:"whats-news",children:[]}]},{value:"\u5c0f\u7a0b\u5e8f\u652f\u6301\u4f7f\u7528\u6846\u67b6\u7684 DevTools",id:"\u5c0f\u7a0b\u5e8f\u652f\u6301\u4f7f\u7528\u6846\u67b6\u7684-devtools",children:[{value:"React DevTools",id:"react-devtools",children:[]},{value:"Vue DevTools",id:"vue-devtools",children:[]}]},{value:"\u4fee\u590d\u767e\u5ea6\u5c0f\u7a0b\u5e8f flex \u5e03\u5c40\u7684\u95ee\u9898",id:"\u4fee\u590d\u767e\u5ea6\u5c0f\u7a0b\u5e8f-flex-\u5e03\u5c40\u7684\u95ee\u9898",children:[]},{value:"\u5347\u7ea7\u6307\u5357",id:"\u5347\u7ea7\u6307\u5357",children:[]},{value:"The End",id:"the-end",children:[{value:"Taro 3.4",id:"taro-34",children:[]},{value:"\u9e3f\u8499\u5e94\u7528 &amp;&amp; OpenHarmony",id:"\u9e3f\u8499\u5e94\u7528--openharmony",children:[]},{value:"\u5feb\u5e94\u7528",id:"\u5feb\u5e94\u7528",children:[]},{value:"\u611f\u6069",id:"\u611f\u6069",children:[]}]}],u={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"\u8ddd\u79bb Taro 3.3 \u7b2c\u4e00\u4e2a alpha \u7248\u672c\u7684\u53d1\u5e03\uff0c\u5df2\u8fc7\u53bb\u4e09\u4e2a\u6708\u7684\u65f6\u95f4\u3002\u671f\u95f4\u6211\u4eec\u4e0d\u65ad\u5730\u5bf9 3.3 \u7248\u672c\u8fdb\u884c\u6253\u78e8\uff0c\u9664\u4e86\u4f18\u5316 H5 \u540c\u6784\u65b9\u6848\u5916\uff0c\u8fd8\u5f15\u5165\u4e86\u4e00\u4e9b\u63d0\u5347\u5f00\u53d1\u4f53\u9a8c\u7684\u65b0\u7279\u6027\u548c\u4fee\u590d\u4e86\u82e5\u5e72\u91cd\u8981\u95ee\u9898\u3002"),(0,o.kt)("h2",{id:"\u652f\u6301\u4f7f\u7528-h5-\u6807\u7b7e"},"\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e"),(0,o.kt)("p",null,"Taro 3.3 \u6700\u91cd\u8981\u7684\u7279\u6027\u5c31\u662f\u652f\u6301\u4f7f\u7528 H5 \u6807\u7b7e\u8fdb\u884c\u5f00\u53d1\uff0c\u8ba9\u5f00\u53d1\u8005\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u590d\u7528\u90e8\u5206\u7684 Web \u751f\u6001\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u5728 React \u4e2d\u53ef\u4ee5\u8fd9\u6837\u4f7f\u7528\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx"},"function Index () {\n  return (\n    <div>Hello World!</div>\n  )\n}\n")),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u80cc\u666f\u53ca\u5b9e\u73b0\u601d\u8def\u5728 ",(0,o.kt)("a",{parentName:"p",href:"https://docs.taro.zone/blog/2021-04-22-Taro-3.3-alpha"},"\u300aTaro 3.3 alpha \u53d1\u5e03\u300b")," \u4e00\u6587\u4e2d\u6709\u8be6\u7ec6\u8bf4\u660e\u3002")),(0,o.kt)("h3",{id:"\u7528\u6cd5"},"\u7528\u6cd5"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u5b89\u88c5\u63d2\u4ef6 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-html"),"\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ npm i @tarojs/plugin-html\n")),(0,o.kt)("p",null,"\u7136\u540e\u914d\u7f6e\u4f7f\u7528\u5373\u53ef\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config/index.js\nconst config = {\n  // ...\n  plugins: [\n    '@tarojs/plugin-html'\n  ]\n}\n")),(0,o.kt)("p",null,"\u63d2\u4ef6\u7684\u8be6\u7ec6\u7528\u6cd5\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://docs.taro.zone/docs/use-h5"},"\u6587\u6863"),"\u3002"),(0,o.kt)("h3",{id:"\u793a\u4f8b\u9879\u76ee"},"\u793a\u4f8b\u9879\u76ee"),(0,o.kt)("p",null,"\u4e3a\u4e86\u9a8c\u8bc1\u540c\u6784\u529f\u80fd\u7684\u53ef\u7528\u6027\u548c\u6548\u679c\uff0c\u6211\u4eec\u5bf9 CSS \u6837\u5f0f\u5e93 WEUI\u3001React \u7ec4\u4ef6\u5e93 Antd Design Mobile\u3001Vue2 \u7ec4\u4ef6\u5e93 VantUI \u7684\u6240\u6709\u7ec4\u4ef6\u8fdb\u884c\u4e86\u6d4b\u8bd5\u3002\u7ed3\u679c\u663e\u793a\u6709\u76f8\u5f53\u4e00\u90e8\u5206\u7684\u7ec4\u4ef6\u80fd\u76f4\u63a5\u8fd0\u884c\u5728\u5c0f\u7a0b\u5e8f\u73af\u5883\u4e2d\u3002"),(0,o.kt)("p",null,"\u793a\u4f8b\u9879\u76ee\u4ed3\u5e93\u5730\u5740\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro-weui"},"\u517c\u5bb9 WeUI \u7684\u4f8b\u5b50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro-antd-mobile"},"\u517c\u5bb9 Antd Design Mobile \u7684\u4f8b\u5b50")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"https://github.com/NervJS/taro-vant"},"\u517c\u5bb9 VantUI \u7684\u4f8b\u5b50"))),(0,o.kt)("h3",{id:"whats-news"},"What's news"),(0,o.kt)("p",null,"\u5728\u5f00\u53d1 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-html")," \u63d2\u4ef6\u7684\u65f6\u5019\uff0c\u6211\u4eec\u53d1\u73b0\u9700\u8981\u4e3a Taro \u6a21\u62df\u7684 DOM APIs \u65b0\u589e\u4e00\u4e9b\u65b9\u6cd5\uff0c\u5982 ",(0,o.kt)("inlineCode",{parentName:"p"},"getBoundingClientRect")," \u7b49\u3002\u4f46\u662f\u5bf9\u4e8e\u4e0d\u4f7f\u7528\u8fd9\u4e2a\u63d2\u4ef6\u7684\u5f00\u53d1\u8005\u6765\u8bf4\u8fd9\u4e9b API \u662f\u5197\u4f59\u7684\uff0c\u4f1a\u589e\u5927\u5305\u4f53\u79ef\u3002\u56e0\u6b64\u6211\u4eec\u5bf9 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/runtime")," \u8fdb\u884c\u4e86\u91cd\u6784\uff0c\u628a DOM APIs \u505a\u6210\u53ef\u63d2\u62d4\u5f0f\uff0c\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u9009\u62e9\u5728\u6700\u7ec8\u7684\u7f16\u8bd1\u7ed3\u679c\u91cc\u53ea\u5b58\u5728\u54ea\u4e9b DOM APIs\u3002"),(0,o.kt)("p",null,"\u672c\u6b21\u5bf9\u8fd0\u884c\u65f6\u7684\u91cd\u6784\u4e5f\u662f\u4e3a\u4e86 Taro 3.4 \u7248\u672c\u4f5c\u94fa\u57ab\u3002React\u3001Vue2 \u548c Vue3 \u8fd9\u4e9b\u6846\u67b6\u8fd0\u884c\u65f6\u9700\u8981\u7684 DOM APIs \u662f\u4e0d\u5c3d\u76f8\u540c\u7684\uff0c\u4f46\u662f\u76ee\u524d\u5047\u8bbe\u5f00\u53d1\u8005\u4f7f\u7528\u4e86 React\uff0c\u7f16\u8bd1\u7ed3\u679c\u91cc\u4ecd\u7136\u4f1a\u5b58\u5728\u7740\u53ea\u6709 Vue2 \u6216 Vue3 \u4f9d\u8d56\u7684 DOM APIs\u3002Taro 3.4 \u5c06\u4f1a\u628a\u5bf9\u5404 Web \u5f00\u53d1\u6846\u67b6\u7684\u652f\u6301\u903b\u8f91\u62bd\u79bb\u6210\u4e3a\u4e00\u4e2a\u4e2a\u63d2\u4ef6\uff0c\u5982\uff1a",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-framework-react")," \u7b49\uff0c\u76ee\u7684\u662f\u5254\u9664\u6389\u5197\u4f59\u4ee3\u7801\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\uff0c\u5047\u8bbe\u5f00\u53d1\u8005\u6ca1\u6709\u4f7f\u7528\u6e32\u67d3 HTML \u6587\u672c\u7684 API\uff08\u5982 React \u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"dangerouslySetInnerHTML"),"\uff09\u3002\u8fd9\u65f6\u53ef\u4ee5\u4fee\u6539 Taro \u7f16\u8bd1\u914d\u7f6e\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"mini.runtime.enableInnerHTML")," \u9009\u9879\uff0c\u4ee4\u6700\u7ec8\u7684\u6253\u5305\u7ed3\u679c\u5254\u9664\u6389\u76f8\u5173\u4ee3\u7801\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"// config/index.js\nconfig = {\n  // ...\n  mini: {\n    runtime: {\n      enableInnerHTML: false\n    }\n  }\n}\n")),(0,o.kt)("h2",{id:"\u5c0f\u7a0b\u5e8f\u652f\u6301\u4f7f\u7528\u6846\u67b6\u7684-devtools"},"\u5c0f\u7a0b\u5e8f\u652f\u6301\u4f7f\u7528\u6846\u67b6\u7684 DevTools"),(0,o.kt)("p",null,"\u81ea Taro 3.x \u6539\u9020\u4e3a\u8fd0\u884c\u65f6\u6846\u67b6\u540e\uff0c\u6709\u4e0d\u5c11\u540c\u5b66\u62b1\u6028\u5c0f\u7a0b\u5e8f\u5f00\u53d1\u8005\u5de5\u5177\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"AppData")," \u9762\u677f\u770b\u5230\u7684\u90fd\u662f Taro \u865a\u62df DOM \u7684\u5e8f\u5217\u5316\u7ed3\u679c\uff0c\u800c\u4e0d\u662f\u9875\u9762\u7684 data \u6570\u636e\u3002\u4e3a\u4e86\u7f13\u89e3\u8fd9\u4e2a\u95ee\u9898\uff0c\u5e76\u8fdb\u4e00\u6b65\u5730\u63d0\u5347\u5f00\u53d1\u8005\u7684\u5f00\u53d1\u4f53\u9a8c\uff0cTaro \u5bf9 React DevTools \u548c Vue DevTools \u8fdb\u884c\u4e86\u9002\u914d\u3002\u53ea\u9700\u8981\u7b80\u5355\u5730\u914d\u7f6e\uff0c\u5c31\u80fd\u591f\u548c\u5f00\u53d1 Web \u5e94\u7528\u65f6\u4e00\u6837\u4f7f\u7528\u6846\u67b6\u7684 DevTools\u3002"),(0,o.kt)("h3",{id:"react-devtools"},"React DevTools"),(0,o.kt)("p",null,"\u5b89\u88c5\u5e76\u914d\u7f6e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-react-devtools")," \u5373\u53ef\uff0c\u8be6\u7ec6\u7528\u6cd5\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://docs.taro.zone/docs/react-devtools"},"\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u6548\u679c\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://storage.360buyimg.com/cjj-pub-images/react-devtools.png",alt:null})),(0,o.kt)("h3",{id:"vue-devtools"},"Vue DevTools"),(0,o.kt)("p",null,"\u5b89\u88c5\u5e76\u914d\u7f6e\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"@tarojs/plugin-vue-devtools")," \u5373\u53ef\uff0c\u8be6\u7ec6\u7528\u6cd5\u8bf7\u89c1",(0,o.kt)("a",{parentName:"p",href:"https://docs.taro.zone/docs/vue-devtools"},"\u6587\u6863"),"\u3002"),(0,o.kt)("p",null,"\u6548\u679c\u56fe\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://storage.360buyimg.com/cjj-pub-images/vue-devtools.png",alt:null})),(0,o.kt)("h2",{id:"\u4fee\u590d\u767e\u5ea6\u5c0f\u7a0b\u5e8f-flex-\u5e03\u5c40\u7684\u95ee\u9898"},"\u4fee\u590d\u767e\u5ea6\u5c0f\u7a0b\u5e8f flex \u5e03\u5c40\u7684\u95ee\u9898"),(0,o.kt)("p",null,"\u5728\u8fc7\u53bb\u5f88\u957f\u4e00\u6bb5\u65f6\u95f4\u91cc\uff0cTaro 3 \u5728\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u91cc\u662f\u4e0d\u652f\u6301\u4f7f\u7528 flex \u5e03\u5c40\u7684\u3002\u539f\u56e0\u662f\u903b\u8f91\u5c42\u7684\u6bcf\u4e2a Taro DOM \u8282\u70b9\u90fd\u5728\u6e32\u67d3\u5c42\u4f7f\u7528\u4e00\u4e2a\u5bf9\u5e94\u7684 ",(0,o.kt)("inlineCode",{parentName:"p"},"<template>")," \u8fdb\u884c\u6e32\u67d3\uff0c\u800c\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4f1a\u628a ",(0,o.kt)("inlineCode",{parentName:"p"},"<template>")," \u6e32\u67d3\u6210\u4e00\u4e2a\u771f\u5b9e\u8282\u70b9\u3002"),(0,o.kt)("p",null,"\u975e\u5e38\u611f\u8c22 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/SyMind"},"@SyMind")," \u7684 PR\uff0c\u5e2e\u52a9 Taro \u7ed5\u8fc7\u4e86\u6b64\u95ee\u9898\u3002\u4ece Taro 3.2 \u5f00\u59cb\uff0c\u90e8\u5206\u7ec4\u4ef6\u5728\u767e\u5ea6\u5c0f\u7a0b\u5e8f\u4e2d\u4e5f\u80fd\u591f\u4f7f\u7528 flex \u5e03\u5c40\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u76f8\u5173\u7684\u8ba8\u8bba\u548c\u63d0\u4ea4\u53ef\u4ee5\u6d4f\u89c8 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/issues/6015"},"#6015")," ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/pull/9529"},"#9529"))),(0,o.kt)("h2",{id:"\u5347\u7ea7\u6307\u5357"},"\u5347\u7ea7\u6307\u5357"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u4ece v2.x \u5347\u7ea7\u7684\u540c\u5b66\u9700\u8981\u5148\u6309 ",(0,o.kt)("a",{parentName:"p",href:"https://taro-docs.jd.com/taro/docs/next/migration"},"\u8fc1\u79fb\u6307\u5357")," \u8fdb\u884c\u64cd\u4f5c\u3002")),(0,o.kt)("p",null,"\u4ece v3.x \u5347\u7ea7\u7684\u540c\u5b66\uff0c\u9996\u5148\u9700\u8981\u5b89\u88c5 v3.3 \u7684 CLI \u5de5\u5177\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i -g @tarojs/cli\n")),(0,o.kt)("p",null,"\u7136\u540e\u624b\u5de5\u4fee\u6539 ",(0,o.kt)("inlineCode",{parentName:"p"},"package.json")," \u6587\u4ef6\u4e2d Taro \u76f8\u5173\u4f9d\u8d56\u7684\u7248\u672c\uff0c\u518d\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\uff1b\u6216\u8005\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"taro update project")," \u66f4\u65b0\u4f9d\u8d56\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u5982\u679c\u5b89\u88c5\u5931\u8d25\u6216\u6253\u5f00\u9879\u76ee\u5931\u8d25\uff0c\u53ef\u4ee5\u5220\u9664 ",(0,o.kt)("strong",{parentName:"p"},"node_modules"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"yarn.lock"),"\u3001",(0,o.kt)("strong",{parentName:"p"},"package-lock.json")," \u540e\u91cd\u65b0\u5b89\u88c5\u4f9d\u8d56\u518d\u5c1d\u8bd5\u3002")),(0,o.kt)("h2",{id:"the-end"},"The End"),(0,o.kt)("h3",{id:"taro-34"},"Taro 3.4"),(0,o.kt)("p",null,"\u4e0b\u4e00\u4e2a minor \u7248\u672c\uff0c\u6211\u4eec\u4f1a\u8003\u8651\u628a\u5bf9\u5404\u4e2a Web \u5f00\u53d1\u6846\u67b6\u7684\u652f\u6301\u903b\u8f91\u62c6\u5206\u4e3a\u5bf9\u5e94\u7684\u63d2\u4ef6\u3002\u8ba9\u5f00\u53d1\u8005\u53ef\u4ee5\u4ee5\u63d2\u4ef6\u7684\u5f62\u5f0f\u4e3a Taro \u62d3\u5c55\u652f\u6301\u4e00\u95e8\u65b0\u7684\u5f00\u53d1\u6846\u67b6\uff0c\u6211\u4eec\u4f1a\u8fd0\u7528\u6b64\u80fd\u529b\u8fdb\u884c\u5bf9 ",(0,o.kt)("strong",{parentName:"p"},"PReact")," \u7684\u652f\u6301\uff0c\u5e0c\u671b\u80fd\u8fdb\u4e00\u6b65\u51cf\u5c11\u7528\u6237\u7684\u5305\u4f53\u79ef\u3002"),(0,o.kt)("h3",{id:"\u9e3f\u8499\u5e94\u7528--openharmony"},"\u9e3f\u8499\u5e94\u7528 && OpenHarmony"),(0,o.kt)("p",null,"\u8fd1\u671f\u6211\u4eec\u4e5f\u4e00\u76f4\u5728\u63a2\u7d22\u5bf9",(0,o.kt)("strong",{parentName:"p"},"\u9e3f\u8499\u5e94\u7528 && OpenHarmony"),"\u7684\u9002\u914d\uff0c\u76ee\u524d\u5df2\u6709\u4e00\u7cfb\u5217\u7684\u8ba8\u8bba\u548c\u5f00\u53d1\u8ba1\u5212\uff0c\u4e5f\u6709\u53ef\u4ee5\u8fd0\u884c\u7684 Demo\uff0c\u8be6\u60c5\u8bf7\u89c1 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/discussions/categories/%E9%B8%BF%E8%92%99-openharmony-%E9%80%82%E9%85%8D%E5%B0%8F%E7%BB%84"},"\u9e3f\u8499 && OpenHarmony \u9002\u914d\u5c0f\u7ec4"),"\u3002"),(0,o.kt)("h4",{id:"roadmap\uff1a"},"RoadMap\uff1a"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"http://storage.360buyimg.com/cjj-pub-images/hos-roadmap.png",alt:null})),(0,o.kt)("p",null,"\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u53c2\u4e0e\u8ba8\u8bba\u548c\u5171\u5efa\uff5e"),(0,o.kt)("h3",{id:"\u5feb\u5e94\u7528"},"\u5feb\u5e94\u7528"),(0,o.kt)("p",null,"\u6b64\u5916\uff0c\u793e\u533a\u5927\u4f6c ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/bgfist"},"@bgfist")," \u6b63\u5728\u4e3a Taro \u5f00\u53d1\u652f\u6301",(0,o.kt)("strong",{parentName:"p"},"\u5feb\u5e94\u7528"),"\u7684\u529f\u80fd\u3002\u4e5f\u6b22\u8fce\u5404\u4f4d\u5f00\u53d1\u8005\u53c2\u4e0e\u8ba8\u8bba\u548c\u5171\u5efa\uff0c\u76f8\u5173 ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro/pull/9743"},"PR"),"\u3002"),(0,o.kt)("h3",{id:"\u611f\u6069"},"\u611f\u6069"),(0,o.kt)("p",null,"\u65f6\u5149\u98de\u901d\uff0c1 \u5e74\u524d Taro 3 \u6b63\u5f0f\u53d1\u5e03\uff0cTaro \u9010\u6e10\u6210\u4e3a\u88ab\u793e\u533a\u559c\u6b22\u3001\u4fe1\u8d56\u7684\u5f00\u6e90\u9879\u76ee\u3002\u672a\u6765\u6211\u4eec\u4e5f\u5c06\u7ee7\u7eed\u505a\u597d Taro \u7684\u5f00\u6e90\u5de5\u4f5c\uff0c\u540c\u65f6\u4e5f\u5e0c\u671b\u793e\u533a\u6709\u66f4\u591a\u7684\u5f00\u53d1\u8005\u53c2\u4e0e\u8fdb\u6765\uff0c\u65e0\u8bba\u662f\u63d0\u51fa Issues\u3001\u5728\u8bba\u575b\u53d1\u5e16\u3001\u63d0\u4ea4 PR \u8fd8\u662f\u5e2e\u52a9\u5efa\u8bbe\u5468\u8fb9\u751f\u6001\u7b49\u3002\u8ba9\u6211\u4eec\u4e00\u8d77\u628a Taro \u505a\u597d\uff0c\u505a\u5f3a\u3002"),(0,o.kt)("p",null,"\u6700\u540e\uff0c\u8877\u5fc3\u611f\u8c22\u4e3a Taro \u4ece v3.2 \u8d70\u5230 v3.3 \u8d21\u732e\u8fc7\u4ee3\u7801\u7684\u5404\u4f4d\u540c\u5b66\uff01"))}c.isMDXComponent=!0}}]);