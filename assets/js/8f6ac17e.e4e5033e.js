(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[78619],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function d(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var k=r.createContext({}),c=function(t){var e=r.useContext(k),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},p=function(t){var e=c(t.components);return r.createElement(k.Provider,{value:e},t.children)},o={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},u=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,k=t.parentName,p=d(t,["components","mdxType","originalType","parentName"]),u=c(n),m=l,g=u["".concat(k,".").concat(m)]||u[m]||o[m]||a;return n?r.createElement(g,i(i({ref:e},p),{},{components:n})):r.createElement(g,i({ref:e},p))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=u;var d={};for(var k in e)hasOwnProperty.call(e,k)&&(d[k]=e[k]);d.originalType=t,d.mdxType="string"==typeof t?t:l,i[1]=d;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},53270:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return i},metadata:function(){return d},toc:function(){return k},default:function(){return p}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),i={title:"Swiper",sidebar_label:"Swiper"},d={unversionedId:"components/viewContainer/swiper",id:"version-2.x/components/viewContainer/swiper",isDocsHomePage:!1,title:"Swiper",description:"\u6ed1\u5757\u89c6\u56fe\u5bb9\u5668\u3002\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e swiper-item \u7ec4\u4ef6\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002",source:"@site/versioned_docs/version-2.x/components/viewContainer/swiper.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/swiper",permalink:"/taro/docs/2.x/components/viewContainer/swiper",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-2.x/components/viewContainer/swiper.md",version:"2.x",sidebar_label:"Swiper",frontMatter:{title:"Swiper",sidebar_label:"Swiper"},sidebar:"version-2.x/components",previous:{title:"ScrollView",permalink:"/taro/docs/2.x/components/viewContainer/scroll-view"},next:{title:"MovableView",permalink:"/taro/docs/2.x/components/viewContainer/movable-view"}},k=[{value:"\u7c7b\u578b",id:"\u7c7b\u578b",children:[]},{value:"\u793a\u4f8b\u4ee3\u7801",id:"\u793a\u4f8b\u4ee3\u7801",children:[]},{value:"SwiperProps",id:"swiperprops",children:[{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6",children:[]},{value:"TChangeSource",id:"tchangesource",children:[]},{value:"TEasingFunction",id:"teasingfunction",children:[]},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[]},{value:"onTransitionEventDetail",id:"ontransitioneventdetail",children:[]}]},{value:"API \u652f\u6301\u5ea6",id:"api-\u652f\u6301\u5ea6-1",children:[]}],c={toc:k};function p(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},c,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"\u6ed1\u5757\u89c6\u56fe\u5bb9\u5668\u3002\u5176\u4e2d\u53ea\u53ef\u653e\u7f6e swiper-item \u7ec4\u4ef6\uff0c\u5426\u5219\u4f1a\u5bfc\u81f4\u672a\u5b9a\u4e49\u7684\u884c\u4e3a\u3002"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/dev/component/swiper.html"},"\u53c2\u8003\u6587\u6863"))),(0,a.kt)("h2",{id:"\u7c7b\u578b"},"\u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<SwiperProps>\n")),(0,a.kt)("h2",{id:"\u793a\u4f8b\u4ee3\u7801"},"\u793a\u4f8b\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Component {\n  render () {\n    return (\n      <Swiper\n        className='test-h'\n        indicatorColor='#999'\n        indicatorActiveColor='#333'\n        vertical\n        circular\n        indicatorDots\n        autoplay>\n        <SwiperItem>\n          <View className='demo-text-1'>1</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-2'>2</View>\n        </SwiperItem>\n        <SwiperItem>\n          <View className='demo-text-3'>3</View>\n        </SwiperItem>\n      </Swiper>\n    )\n  }\n}\n")),(0,a.kt)("h2",{id:"swiperprops"},"SwiperProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u9ed8\u8ba4\u503c"),(0,a.kt)("th",{style:{textAlign:"center"}},"\u5fc5\u586b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"indicatorDots"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u663e\u793a\u9762\u677f\u6307\u793a\u70b9")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"indicatorColor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"rgba(0, 0, 0, .3)"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u793a\u70b9\u989c\u8272")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"indicatorActiveColor"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"#000000"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u524d\u9009\u4e2d\u7684\u6307\u793a\u70b9\u989c\u8272")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoplay"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u81ea\u52a8\u5207\u6362")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"current"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684 index")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"currentItemId"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'""')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684 item-id \uff0c\u4e0d\u80fd\u4e0e current \u88ab\u540c\u65f6\u6307\u5b9a")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"interval"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"5000")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u81ea\u52a8\u5207\u6362\u65f6\u95f4\u95f4\u9694")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"duration"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"500")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6ed1\u52a8\u52a8\u753b\u65f6\u957f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"circular"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u91c7\u7528\u8854\u63a5\u6ed1\u52a8")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"vertical"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6ed1\u52a8\u65b9\u5411\u662f\u5426\u4e3a\u7eb5\u5411")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"previousMargin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"0px"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u524d\u8fb9\u8ddd\uff0c\u53ef\u7528\u4e8e\u9732\u51fa\u524d\u4e00\u9879\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u63a5\u53d7 px \u548c rpx \u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"nextMargin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"0px"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u540e\u8fb9\u8ddd\uff0c\u53ef\u7528\u4e8e\u9732\u51fa\u540e\u4e00\u9879\u7684\u4e00\u5c0f\u90e8\u5206\uff0c\u63a5\u53d7 px \u548c rpx \u503c")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"displayMultipleItems"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u540c\u65f6\u663e\u793a\u7684\u6ed1\u5757\u6570\u91cf")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"skipHiddenItemLayout"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u662f\u5426\u8df3\u8fc7\u672a\u663e\u793a\u7684\u6ed1\u5757\u5e03\u5c40\uff0c\u8bbe\u4e3a true \u53ef\u4f18\u5316\u590d\u6742\u60c5\u51b5\u4e0b\u7684\u6ed1\u52a8\u6027\u80fd\uff0c\u4f46\u4f1a\u4e22\u5931\u9690\u85cf\u72b6\u6001\u6ed1\u5757\u7684\u5e03\u5c40\u4fe1\u606f")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"easingFunction"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"default" | "linear" | "easeInCubic" | "easeOutCubic" | "easeInOutCubic"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,'"default"')),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u6307\u5b9a swiper \u5207\u6362\u7f13\u52a8\u52a8\u753b\u7c7b\u578b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"current \u6539\u53d8\u65f6\u4f1a\u89e6\u53d1 change \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onTransition"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onTransitionEventDetail>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"swiper-item \u7684\u4f4d\u7f6e\u53d1\u751f\u6539\u53d8\u65f6\u4f1a\u89e6\u53d1 transition \u4e8b\u4ef6")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onAnimationFinish"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"\u52a8\u753b\u7ed3\u675f\u65f6\u4f1a\u89e6\u53d1 animationfinish \u4e8b\u4ef6")))),(0,a.kt)("h3",{id:"api-\u652f\u6301\u5ea6"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorDots"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorColor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.indicatorActiveColor"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.autoplay"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.current"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.interval"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.duration"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.circular"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.vertical"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.previousMargin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.nextMargin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.displayMultipleItems"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.skipHiddenItemLayout"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.easingFunction"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onTransition"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"SwiperProps.onAnimationFinish"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"tchangesource"},"TChangeSource"),(0,a.kt)("p",null,"\u5bfc\u81f4\u53d8\u66f4\u7684\u539f\u56e0"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoplay"),(0,a.kt)("td",null,"\u81ea\u52a8\u64ad\u653e")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"touch"),(0,a.kt)("td",null,"\u7528\u6237\u5212\u52a8")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"\u5176\u5b83\u539f\u56e0")))),(0,a.kt)("h3",{id:"teasingfunction"},"TEasingFunction"),(0,a.kt)("p",null,"\u6307\u5b9a swiper \u5207\u6362\u7f13\u52a8\u52a8\u753b\u7c7b\u578b"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"default"),(0,a.kt)("td",null,"\u9ed8\u8ba4\u7f13\u52a8\u51fd\u6570")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"linear"),(0,a.kt)("td",null,"\u7ebf\u6027\u52a8\u753b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"easeInCubic"),(0,a.kt)("td",null,"\u7f13\u5165\u52a8\u753b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"easeOutCubic"),(0,a.kt)("td",null,"\u7f13\u51fa\u52a8\u753b")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"easeInOutCubic"),(0,a.kt)("td",null,"\u7f13\u5165\u7f13\u51fa\u52a8\u753b")))),(0,a.kt)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"current"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"\u5f53\u524d\u6240\u5728\u6ed1\u5757\u7684\u7d22\u5f15")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"source"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"" | "autoplay" | "touch"')),(0,a.kt)("td",null,"\u5bfc\u81f4\u53d8\u66f4\u7684\u539f\u56e0")))),(0,a.kt)("h3",{id:"ontransitioneventdetail"},"onTransitionEventDetail"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"\u53c2\u6570"),(0,a.kt)("th",null,"\u7c7b\u578b"),(0,a.kt)("th",null,"\u8bf4\u660e"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"dx"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"X \u5750\u6807")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"dy"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Y \u5750\u6807")))),(0,a.kt)("h2",{id:"api-\u652f\u6301\u5ea6-1"},"API \u652f\u6301\u5ea6"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5fae\u4fe1\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u767e\u5ea6\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u652f\u4ed8\u5b9d\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"\u5b57\u8282\u8df3\u52a8\u5c0f\u7a0b\u5e8f"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"Swiper"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}p.isMDXComponent=!0}}]);