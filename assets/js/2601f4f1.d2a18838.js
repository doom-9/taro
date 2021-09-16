(self.webpackChunktaro_docs=self.webpackChunktaro_docs||[]).push([[70891],{22122:function(e,t,a){"use strict";function r(){return(r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}a.d(t,{Z:function(){return r}})},19756:function(e,t,a){"use strict";function r(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}a.d(t,{Z:function(){return r}})},3905:function(e,t,a){"use strict";a.d(t,{Zo:function(){return m},kt:function(){return g}});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),s=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},m=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),c=s(a),g=n,u=c["".concat(o,".").concat(g)]||c[g]||d[g]||l;return a?r.createElement(u,p(p({ref:t},m),{},{components:a})):r.createElement(u,p({ref:t},m))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,p=new Array(l);p[0]=c;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,p[1]=i;for(var s=2;s<l;s++)p[s]=a[s];return r.createElement.apply(null,p)}return r.createElement.apply(null,a)}c.displayName="MDXCreateElement"},17705:function(e,t,a){"use strict";a.r(t),a.d(t,{frontMatter:function(){return p},metadata:function(){return i},toc:function(){return o},default:function(){return m}});var r=a(22122),n=a(19756),l=(a(67294),a(3905)),p={title:"Project Initialization Template"},i={unversionedId:"template",id:"version-3.x/template",isDocsHomePage:!1,title:"Project Initialization Template",description:"Supported since 1.3.9",source:"@site/i18n/en/docusaurus-plugin-content-docs/version-3.x/template.md",sourceDirName:".",slug:"/template",permalink:"/taro/docs/template",editUrl:"https://github.com/nervjs/taro/edit/docs/versioned_docs/version-3.x/template.md",version:"3.x",frontMatter:{title:"Project Initialization Template"},sidebar:"version-3.x/docs",previous:{title:"Vant UI",permalink:"/taro/docs/vant"},next:{title:"Access to Tencent youshu seamless burial point capability",permalink:"/taro/docs/youshu"}},o=[{value:"Template Source",id:"template-source",children:[{value:"Default tTemplate Source",id:"default-ttemplate-source",children:[]},{value:"Configuring the template source",id:"configuring-the-template-source",children:[]}]},{value:"Write templates",id:"write-templates",children:[{value:"Template Organization Format",id:"template-organization-format",children:[]},{value:"Static templates",id:"static-templates",children:[]},{value:"Dynamic templates",id:"dynamic-templates",children:[]}]}],s={toc:o};function m(e){var t=e.components,a=(0,n.Z)(e,["components"]);return(0,l.kt)("wrapper",(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Supported since ",(0,l.kt)("inlineCode",{parentName:"p"},"1.3.9"))),(0,l.kt)("p",null,"When creating a project using the Taro CLI's ",(0,l.kt)("inlineCode",{parentName:"p"},"taro init")," command, the CLI has always provided several built-in templates for developers to choose from. However, many teams have their own unique business scenarios and need to use and maintain different templates, so starting with ",(0,l.kt)("inlineCode",{parentName:"p"},"1.3.9")," we have packaged the project templates into a single capability for developers."),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"1.3.9")," has made the following changes to the template functionality of the CLI."),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"only the most basic ",(0,l.kt)("inlineCode",{parentName:"li"},"default")," template is retained by the CLI, all other templates are removed."),(0,l.kt)("li",{parentName:"ol"},"The CLI reads ",(0,l.kt)("strong",{parentName:"li"},"template source")," configuration items from the CLI global configuration, and then pulls templates from the template source for developers to choose from. 3."),(0,l.kt)("li",{parentName:"ol"},"Developers can use their own templates by modifying the ",(0,l.kt)("strong",{parentName:"li"},"Template Source"),".")),(0,l.kt)("h2",{id:"template-source"},"Template Source"),(0,l.kt)("p",null,"The template source is the ",(0,l.kt)("strong",{parentName:"p"},"templateSource")," field of the CLI configuration entry, which can be manipulated using the ",(0,l.kt)("a",{parentName:"p",href:"/taro/docs/GETTING-STARTED#cli-%E9%85%8D%E7%BD%AE"},"taro config")," command to manipulate it."),(0,l.kt)("h3",{id:"default-ttemplate-source"},"Default tTemplate Source"),(0,l.kt)("p",null,"The default template source is the ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-project-templates"},"taro-project-templates")," repository, where the original built-in templates are extracted."),(0,l.kt)("h3",{id:"configuring-the-template-source"},"Configuring the template source"),(0,l.kt)("p",null,"The template source supports two formats, ",(0,l.kt)("strong",{parentName:"p"},"git template source")," and ",(0,l.kt)("strong",{parentName:"p"},"url template source"),"."),(0,l.kt)("h4",{id:"git-template-source"},"git template source"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"GitHub - github:owner/name"),(0,l.kt)("li",{parentName:"ul"},"GitLab - gitlab:owner/name"),(0,l.kt)("li",{parentName:"ul"},"Direct - direct:url")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sh"},"# The --clone option can be used when initializing a project to specify the remote template to be pulled\n# git clone\ntaro init --clone\n")),(0,l.kt)("h4",{id:"url-template-source"},"url template source"),(0,l.kt)("p",null,"The url to a zip package."),(0,l.kt)("h2",{id:"write-templates"},"Write templates"),(0,l.kt)("h3",{id:"template-organization-format"},"Template Organization Format"),(0,l.kt)("p",null,"Two types of template directory organization are supported, ",(0,l.kt)("strong",{parentName:"p"},"single template mode")," and ",(0,l.kt)("strong",{parentName:"p"},"template group mode"),"."),(0,l.kt)("h4",{id:"single-template-mode"},"Single Template Mode"),(0,l.kt)("h5",{id:"git"},"git"),(0,l.kt)("p",null,"The package.json exists in the repository root."),(0,l.kt)("p",null,"The template name is the name of the repository."),(0,l.kt)("h5",{id:"zip-package"},"zip package"),(0,l.kt)("p",null,"The zip package extracts a single folder with package.json in the root folder."),(0,l.kt)("p",null,"The template name is the name of the folder from which the zip package was extracted."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-test/QQ20190717-154634.png",alt:"template"})),(0,l.kt)("h4",{id:"template-group-mode"},"Template group mode"),(0,l.kt)("h5",{id:"git-1"},"git"),(0,l.kt)("p",null,"For example, in ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/NervJS/taro-project-templates"},"Default template source"),", several templates are stored in the root directory of the repository."),(0,l.kt)("p",null,"The template names correspond to the names of all folders in the root directory."),(0,l.kt)("h5",{id:"zip-package-1"},"zip package"),(0,l.kt)("p",null,"The zip package extracts a single folder, which contains several templates."),(0,l.kt)("p",null,"The template names correspond to the names of all the folders within the folder."),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://storage.jd.com/cjj-test/QQ20190717-152451.png",alt:"templates"})),(0,l.kt)("h3",{id:"static-templates"},"Static templates"),(0,l.kt)("p",null,"Static templates represent templates without logic, the CLI will traverse the entire template folder and copy the files one by one to the target location."),(0,l.kt)("h3",{id:"dynamic-templates"},"Dynamic templates"),(0,l.kt)("p",null,"In many cases it is necessary to add some logic to the template to generate different template content depending on the environment."),(0,l.kt)("p",null,"Developers can add a ",(0,l.kt)("strong",{parentName:"p"},"template_creator.js")," file to the template root directory, which contains objects for the handler and basePageFiles fields in the external exports."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'{5,16} title="template_creator.js"',"{5,16}":!0,title:'"template_creator.js"'},"function createWhenTs (params) {\n  return params.typescript ? true : false\n}\n\nconst handler = {\n  '/global.d.ts': createWhenTs,\n  '/tsconfig.json': createWhenTs,\n  '/src/pages/index/index.jsx' ({ pageName }) {\n    return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` }\n  },\n  '/src/pages/index/index.css' ({ pageName}) {\n    return { setPageName: `/src/pages/${pageName}/${pageName}.css` }\n  }\n}\n\nconst basePageFiles = [\n  '/src/pages/index/index.jsx',\n  '/src/pages/index/index.css'\n]\n\nmodule.exports = {\n  handler,\n  basePageFiles\n}\n")),(0,l.kt)("h4",{id:"template-language"},"Template Language"),(0,l.kt)("p",null,"Please use ",(0,l.kt)("a",{parentName:"p",href:"https://ejs.co/"},"ejs")," as the template language, each template file will receive the global template parameters."),(0,l.kt)("h5",{id:"default-global-template-parameters-variables-that-can-be-used-directly-in-the-template"},"Default global template parameters (variables that can be used directly in the template)"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Variables"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"projectName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"project name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"description"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Project description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taro CLI version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"date"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Template creation timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"css"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'none' or 'sass' or 'stylus' or 'less'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Style preprocessor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"cssExt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Style file suffix")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"typescript"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to use TS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pageName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the page passed in during ",(0,l.kt)("inlineCode",{parentName:"td"},"taro create"),", default 'index'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"template"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"The name of the template")))),(0,l.kt)("h5",{id:"example"},"Example"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ejs",metastring:'title="index.js"',title:'"index.js"'},"<%if (typescript) {-%>\nimport Taro, { Component, Config } from '@tarojs/taro'\n<%} else { -%>\nimport Taro, { Component } from '@tarojs/taro'\n<%}-%>\nimport { View, Text } from '@tarojs/components'\nimport './<%= pageName %>.<%= cssExt %>'\n")),(0,l.kt)("h4",{id:"handler-field"},"handler field"),(0,l.kt)("p",null,"The handler is used to control whether a file is generated or not, or to pass specific parameters to the file."),(0,l.kt)("h5",{id:"handler-object"},"handler: object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"property"),(0,l.kt)("th",{parentName:"tr",align:"left"},"type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"file path"),(0,l.kt)("td",{parentName:"tr",align:"left"},"function"),(0,l.kt)("td",{parentName:"tr",align:"left"},"handler")))),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},'The file path starts with "/", representing the root of the template folder')),(0,l.kt)("h5",{id:"handler-functions"},"Handler functions"),(0,l.kt)("p",null,"params: object"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Properties"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"projectName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"project name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"description"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Project description")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"version"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Taro CLI version")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"date"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Template creation timestamp")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"css"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'none' or 'sass' or 'stylus' or 'less'"),(0,l.kt)("td",{parentName:"tr",align:"left"},"style preprocessor")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"typescript"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"whether to use TS")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"pageName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"pageName")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"template"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"template name")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"templatePath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"template path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"projectPath"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"target path")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"period"),(0,l.kt)("td",{parentName:"tr",align:"left"},"'createApp' or 'createPage'"),(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"taro init")," to create a project or ",(0,l.kt)("inlineCode",{parentName:"td"},"taro create")," to create a page")))),(0,l.kt)("p",null,"return: boolean/object"),(0,l.kt)("p",null,"Return Value Description"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Return Value"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"true"),(0,l.kt)("td",{parentName:"tr",align:"left"},"create file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"do not create file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"object"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Creates a file, the fields of the returned object will be merged into the global template parameter.")))),(0,l.kt)("p",null,"If the returned value is object, some of the attributes have special roles."),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"attribute"),(0,l.kt)("th",{parentName:"tr",align:"left"},"type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"setPageName"),(0,l.kt)("td",{parentName:"tr",align:"left"},"string"),(0,l.kt)("td",{parentName:"tr",align:"left"},"will replace the output path of the current file")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},"changeExt"),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Whether to automatically replace the file suffix")))),(0,l.kt)("h5",{id:"example-1"},"Example"),(0,l.kt)("p",null,"The ",(0,l.kt)("strong",{parentName:"p"},"global.d.ts")," and ",(0,l.kt)("strong",{parentName:"p"},"tsconfig.json")," files are generated only when the user has chosen to use typescript."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="template_creator.js"',title:'"template_creator.js"'},"function createWhenTs (params) {\n  return params.typescript ? true : false\n}\n\nconst handler = {\n  '/global.d.ts': createWhenTs,\n  '/tsconfig.json': createWhenTs\n}\n\nmodule.exports = { handler }\n")),(0,l.kt)("h4",{id:"basepagefiles-field"},"basePageFiles field"),(0,l.kt)("p",null,"basePageFiles tells the CLI to create the following files when the user creates a page using the ",(0,l.kt)("inlineCode",{parentName:"p"},"taro create")," command."),(0,l.kt)("h5",{id:"example-2"},"Example"),(0,l.kt)("p",null,"In combination with the handler field, new pages are created."),(0,l.kt)("p",null,"When the user uses the command ",(0,l.kt)("inlineCode",{parentName:"p"},"taro create --page=detail"),", two files ",(0,l.kt)("strong",{parentName:"p"},"/src/pages/detail/detail.jsx")," and ",(0,l.kt)("strong",{parentName:"p"},"/src/pages/detail/detail.css")," are created."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="template_creator.js"',title:'"template_creator.js"'},"const handler = {\n  '/src/pages/index/index.jsx' ({ pageName }) {\n    return { setPageName: `/src/pages/${pageName}/${pageName}.jsx` }\n  },\n  '/src/pages/index/index.css' ({ pageName}) {\n    return { setPageName: `/src/pages/${pageName}/${pageName}.css` }\n  }\n}\n\nconst basePageFiles = [\n  '/src/pages/index/index.jsx',\n  '/src/pages/index/index.css'\n]\n\nmodule.exports = {\n  handler,\n  basePageFiles\n}\n")))}m.isMDXComponent=!0}}]);