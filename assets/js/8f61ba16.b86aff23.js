(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[12790],{22122:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,{Z:function(){return r}})},19756:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}n.d(e,{Z:function(){return r}})},3905:function(t,e,n){"use strict";n.d(e,{Zo:function(){return u},kt:function(){return p}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var c=r.createContext({}),d=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=d(t.components);return r.createElement(c.Provider,{value:e},t.children)},k={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},s=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,c=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),s=d(n),p=l,m=s["".concat(c,".").concat(p)]||s[p]||k[p]||a;return n?r.createElement(m,o(o({ref:e},u),{},{components:n})):r.createElement(m,o({ref:e},u))}));function p(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,o=new Array(a);o[0]=s;var i={};for(var c in e)hasOwnProperty.call(e,c)&&(i[c]=e[c]);i.originalType=t,i.mdxType="string"==typeof t?t:l,o[1]=i;for(var d=2;d<a;d++)o[d]=n[d];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}s.displayName="MDXCreateElement"},58215:function(t,e,n){"use strict";var r=n(67294);e.Z=function(t){var e=t.children,n=t.hidden,l=t.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:l},e)}},41395:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(67294),l=n(80944),a=n(86010),o="tabItem_1uMI",i="tabItemActive_2DSg";var c=37,d=39;var u=function(t){var e=t.lazy,n=t.block,u=t.defaultValue,k=t.values,s=t.groupId,p=t.className,m=(0,l.Z)(),g=m.tabGroupChoices,v=m.setTabGroupChoices,h=(0,r.useState)(u),b=h[0],f=h[1],N=r.Children.toArray(t.children),y=[];if(null!=s){var w=g[s];null!=w&&w!==b&&k.some((function(t){return t.value===w}))&&f(w)}var x=function(t){var e=t.currentTarget,n=y.indexOf(e),r=k[n].value;f(r),null!=s&&(v(s,r),setTimeout((function(){var t,n,r,l,a,o,c,d;(t=e.getBoundingClientRect(),n=t.top,r=t.left,l=t.bottom,a=t.right,o=window,c=o.innerHeight,d=o.innerWidth,n>=0&&a<=d&&l<=c&&r>=0)||(e.scrollIntoView({block:"center",behavior:"smooth"}),e.classList.add(i),setTimeout((function(){return e.classList.remove(i)}),2e3))}),150))},A=function(t){var e,n;switch(t.keyCode){case d:var r=y.indexOf(t.target)+1;n=y[r]||y[0];break;case c:var l=y.indexOf(t.target)-1;n=y[l]||y[y.length-1]}null==(e=n)||e.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},p)},k.map((function(t){var e=t.value,n=t.label;return r.createElement("li",{role:"tab",tabIndex:b===e?0:-1,"aria-selected":b===e,className:(0,a.Z)("tabs__item",o,{"tabs__item--active":b===e}),key:e,ref:function(t){return y.push(t)},onKeyDown:A,onFocus:x,onClick:x},n)}))),e?(0,r.cloneElement)(N.filter((function(t){return t.props.value===b}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},N.map((function(t,e){return(0,r.cloneElement)(t,{key:e,hidden:t.props.value!==b})}))))}},79443:function(t,e,n){"use strict";var r=(0,n(67294).createContext)(void 0);e.Z=r},80944:function(t,e,n){"use strict";var r=n(67294),l=n(79443);e.Z=function(){var t=(0,r.useContext)(l.Z);if(null==t)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return t}},97415:function(t,e,n){"use strict";n.r(e),n.d(e,{frontMatter:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return s}});var r=n(22122),l=n(19756),a=(n(67294),n(3905)),o=n(41395),i=n(58215),c={title:"MovableView",sidebar_label:"MovableView"},d={unversionedId:"components/viewContainer/movable-view",id:"version-3.x/components/viewContainer/movable-view",isDocsHomePage:!1,title:"MovableView",description:"A movable view container. It can be dragged to move on a page. The movable-view component must be included in the movable-area component. It must be a direct child node. Otherwise, the component cannot move.",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/components/viewContainer/movable-view.md",sourceDirName:"components/viewContainer",slug:"/components/viewContainer/movable-view",permalink:"/taro/docs/components/viewContainer/movable-view",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/components/viewContainer/movable-view.md",version:"3.x",sidebar_label:"MovableView",frontMatter:{title:"MovableView",sidebar_label:"MovableView"},sidebar:"version-3.x/components",previous:{title:"MovableArea",permalink:"/taro/docs/components/viewContainer/movable-area"},next:{title:"CoverView",permalink:"/taro/docs/components/viewContainer/cover-view"}},u=[{value:"Type",id:"type",children:[]},{value:"Examples",id:"examples",children:[]},{value:"MovableViewProps",id:"movableviewprops",children:[{value:"Property Support",id:"property-support",children:[]},{value:"TChangeSource",id:"tchangesource",children:[]},{value:"onChangeEventDeatil",id:"onchangeeventdeatil",children:[]},{value:"onScaleEventDeatil",id:"onscaleeventdeatil",children:[]}]},{value:"API Support",id:"api-support",children:[]}],k={toc:u};function s(t){var e=t.components,n=(0,l.Z)(t,["components"]);return(0,a.kt)("wrapper",(0,r.Z)({},k,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"A movable view container. It can be dragged to move on a page. The movable-view component must be included in the movable-area component. It must be a direct child node. Otherwise, the component cannot move."),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://developers.weixin.qq.com/miniprogram/en/dev/component/movable-view.html"},"Reference"))),(0,a.kt)("h2",{id:"type"},"Type"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"ComponentType<MovableViewProps>\n")),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)(o.Z,{defaultValue:"React",values:[{label:"React",value:"React"},{label:"Vue",value:"Vue"}],mdxType:"Tabs"},(0,a.kt)(i.Z,{value:"React",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-tsx"},"class App extends Components {\n  render () {\n    return (\n      <MovableArea style='height: 200px; width: 200px; background: red;'>\n        <MovableView style='height: 50px; width: 50px; background: blue;' direction='all'>move me</MovableView>\n      </MovableArea>\n    )\n  }\n}\n"))),(0,a.kt)(i.Z,{value:"Vue",mdxType:"TabItem"},(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},"  <movable-area style='height: 200px; width: 200px; background: red;'>\n    <movable-view style='height: 50px; width: 50px; background: blue;' direction='all'>move me</movable-view>\n  </movable-area>\n")))),(0,a.kt)("h2",{id:"movableviewprops"},"MovableViewProps"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Property"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",{style:{textAlign:"center"}},"Default"),(0,a.kt)("th",{style:{textAlign:"center"}},"Required"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"direction"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"all" | "vertical" | "horizontal" | "none"')),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"none")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,'The moving direction of movable-view. Its values include "all", "vertical", "horizontal", and "none".')),(0,a.kt)("tr",null,(0,a.kt)("td",null,"inertia"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether movable-view has inertia.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"outOfBounds"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether movable-view can move after the view container is out of the movable area.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"\u5426"),(0,a.kt)("td",null,"Specifies the offset in the x-axis direction. If the value of x is not within the movable range, the component will automatically move to the movable range. A change to the value of x will trigger an animation.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"string | number")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies the offset in the y-axis direction. If the value of y is not within the movable range, the component will automatically move to the movable range. A change to the value of y will trigger an animation.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"damping"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"20")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The damping coefficient, which is used to control the animation triggered when the value of x or y changes and the animation that is pulled back when the component exceeds the range. The higher value leads to faster movement.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"friction"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"2")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The friction coefficient, which is used to control the animation that moves due to inertia. The higher value leads to higher friction and indicates that the movement stops earlier. It must be greater than 0. Otherwise it will be set to the default value.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to disable the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"false")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to support two-finger scaling. The effective area for scaling gestures falls within the movable-view by default.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleMin"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"0.5")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The minimum value of the scaling level.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleMax"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"10")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The maximum value of the scaling level.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scaleValue"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"1")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"The scale level. Its values range from 0.5 to 10.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"animation"),(0,a.kt)("td",null,(0,a.kt)("code",null,"boolean")),(0,a.kt)("td",{style:{textAlign:"center"}},(0,a.kt)("code",null,"true")),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Specifies whether to use animations.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onChangeEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered during dragging.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onScale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"BaseEventOrigFunction<onScaleEventDeatil>")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered during scaling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onHTouchMove"),(0,a.kt)("td",null,(0,a.kt)("code",null,"TouchEventFunction")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered when the component is first touched by a finger and then moved in the horizontal direction. If this event is caught, it indicates that the touchmove event is also caught.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onVTouchMove"),(0,a.kt)("td",null,(0,a.kt)("code",null,"TouchEventFunction")),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"An event triggered when the component is first touched by a finger and then moved in the vertical direction. If this event is caught, it indicates that the touchmove event is also caught.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onDragStart"),(0,a.kt)("td",null," "),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered at the start of dragging")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onDragEnd"),(0,a.kt)("td",null," "),(0,a.kt)("td",{style:{textAlign:"center"}}),(0,a.kt)("td",{style:{textAlign:"center"}},"No"),(0,a.kt)("td",null,"Triggered at the end of dragging")))),(0,a.kt)("h3",{id:"property-support"},"Property Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"Property"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.direction"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.inertia"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.outOfBounds"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.x"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.y"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.damping"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.friction"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.disabled"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMin"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleMax"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.scaleValue"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.animation"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onChange"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onScale"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onHTouchMove"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onVTouchMove"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"})),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragStart"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableViewProps.onDragEnd"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))),(0,a.kt)("h3",{id:"tchangesource"},"TChangeSource"),(0,a.kt)("p",null,"Events triggered during dragging."),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"touch"),(0,a.kt)("td",null,"Dragging")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"touch-out-of-bounds"),(0,a.kt)("td",null,"The movable range is exceeded.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"out-of-bounds"),(0,a.kt)("td",null,"Pullback after the movable range is exceeded.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"friction"),(0,a.kt)("td",null,"Inertia")),(0,a.kt)("tr",null,(0,a.kt)("td",null),(0,a.kt)("td",null,"setData")))),(0,a.kt)("h3",{id:"onchangeeventdeatil"},"onChangeEventDeatil"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"X coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Y coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"source"),(0,a.kt)("td",null,(0,a.kt)("code",null,'"" | "touch" | "touch-out-of-bounds" | "out-of-bounds" | "friction"')),(0,a.kt)("td",null,"Trigger events")))),(0,a.kt)("h3",{id:"onscaleeventdeatil"},"onScaleEventDeatil"),(0,a.kt)("table",null,(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Param"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"x"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"X coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"y"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Y coordinate")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"scale"),(0,a.kt)("td",null,(0,a.kt)("code",null,"number")),(0,a.kt)("td",null,"Scaling number")))),(0,a.kt)("h2",{id:"api-support"},"API Support"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:"center"},"API"),(0,a.kt)("th",{parentName:"tr",align:"center"},"WeChat Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Baidu Smart-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"Alipay Mini-Program"),(0,a.kt)("th",{parentName:"tr",align:"center"},"H5"),(0,a.kt)("th",{parentName:"tr",align:"center"},"React Native"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:"center"},"MovableView"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f"),(0,a.kt)("td",{parentName:"tr",align:"center"}),(0,a.kt)("td",{parentName:"tr",align:"center"},"\u2714\ufe0f")))))}s.isMDXComponent=!0},86010:function(t,e,n){"use strict";function r(t){var e,n,l="";if("string"==typeof t||"number"==typeof t)l+=t;else if("object"==typeof t)if(Array.isArray(t))for(e=0;e<t.length;e++)t[e]&&(n=r(t[e]))&&(l&&(l+=" "),l+=n);else for(e in t)t[e]&&(l&&(l+=" "),l+=e);return l}function l(){for(var t,e,n=0,l="";n<arguments.length;)(t=arguments[n++])&&(e=r(t))&&(l&&(l+=" "),l+=e);return l}n.d(e,{Z:function(){return l}})}}]);