"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6042],{75032:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return i},default:function(){return k},frontMatter:function(){return u},metadata:function(){return s},toc:function(){return p}});var r=n(83117),o=n(80102),a=(n(67294),n(3905)),l=["components"],u={id:"use-require.context-to-auto-import-modules",slug:"/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",date:new Date("2021-09-12T00:00:00.000Z"),authors:"RiverMountain",tags:["node","webpack"],keywords:["node","webpack"]},i=void 0,s={unversionedId:"stack/node/use-require.context-to-auto-import-modules",id:"stack/node/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",description:"\u524d\u8a00",source:"@site/docs/stack/node/\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165.md",sourceDirName:"stack/node",slug:"/use-require.context-to-auto-import-modules",permalink:"/docs/use-require.context-to-auto-import-modules",draft:!1,tags:[{label:"node",permalink:"/docs/tags/node"},{label:"webpack",permalink:"/docs/tags/webpack"}],version:"current",frontMatter:{id:"use-require.context-to-auto-import-modules",slug:"/use-require.context-to-auto-import-modules",title:"\u4f7f\u7528 require.context \u5b9e\u73b0\u6a21\u5757\u81ea\u52a8\u5bfc\u5165",date:"2021-09-12T00:00:00.000Z",authors:"RiverMountain",tags:["node","webpack"],keywords:["node","webpack"]},sidebar:"stack",previous:{title:"npm\u955c\u50cf\u914d\u7f6e",permalink:"/docs/npm-mirror-config"},next:{title:"Css",permalink:"/docs/category/css"}},c={},p=[{value:"\u524d\u8a00",id:"\u524d\u8a00",level:2},{value:"\u5b9e\u73b0",id:"\u5b9e\u73b0",level:2},{value:"\u53c2\u8003\u94fe\u63a5",id:"\u53c2\u8003\u94fe\u63a5",level:2}],d={toc:p},m="wrapper";function k(e){var t=e.components,u=(0,o.Z)(e,l);return(0,a.kt)(m,(0,r.Z)({},d,u,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"\u524d\u8a00"},"\u524d\u8a00"),(0,a.kt)("p",null,"\u5728\u5199\u8d44\u6e90\u5bfc\u822a\u7684\u65f6\u5019\uff0c\u6211\u5728\u5c06\u8d44\u6e90\u5206\u7c7b\u4e3a\u4e00\u4e2a\u6587\u4ef6\u7684\u65f6\u5019\uff0c\u53d1\u73b0\u5982\u679c\u6211\u6bcf\u5b9a\u4e49\u4e00\u4e2a\u5206\u7c7b\uff0c\u90a3\u6211\u5c31\u9700\u8981\u521b\u5efa\u4e00\u4e2a\u6587\u4ef6\uff0c\u7136\u540e\u53c8\u8981\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"import form"),"\u5bfc\u5165\uff0c\u5c31\u5f88\u70e6\u8e81\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(13669).Z,width:"194",height:"514"})),(0,a.kt)("p",null,"\u7a81\u7136\u60f3\u5230\u8c8c\u4f3c vue-element-admin \u4e2d\u7684\u8def\u7531\u597d\u50cf\u4e5f\u662f\u8fd9\u6837\u7684\uff0c\u800c store \u8c8c\u4f3c\u5b9a\u4e49\u5b8c\u5c31\u65e0\u9700\u518d\u6b21\u5bfc\u5165\uff0c\u4e8e\u662f\u5c31\u5f00\u59cb\u7814\u7a76\u4ee3\u7801\uff0c\u679c\u4e0d\u5176\u7136\uff0c\u53d1\u73b0\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"require.context")),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(52927).Z,width:"701",height:"426"})),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://webpack.docschina.org/guides/dependency-management/"},"\u4f9d\u8d56\u7ba1\u7406 | webpack \u4e2d\u6587\u6587\u6863 (docschina.org)")),(0,a.kt)("h2",{id:"\u5b9e\u73b0"},"\u5b9e\u73b0"),(0,a.kt)("p",null,"require.context\uff1a\u662f\u4e00\u4e2a webpack \u63d0\u4f9b\u7684 api,\u901a\u8fc7\u6267\u884c require.context \u51fd\u6570\u904d\u5386\u83b7\u53d6\u5230\u6307\u5b9a\u6587\u4ef6\u5939\uff08\u53ca\u5176\u4e0b\u5b50\u6587\u4ef6\u5939\uff09\u5185\u7684\u6307\u5b9a\u6587\u4ef6\uff0c\u7136\u540e\u81ea\u52a8\u5bfc\u5165\u3002"),(0,a.kt)("p",null,"\u8bed\u6cd5\uff1a",(0,a.kt)("inlineCode",{parentName:"p"},"require.context(directory, useSubdirectories = false, regExp = /^.//)")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"directory \u6307\u5b9a\u6587\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"useSubdirectories \u662f\u5426\u904d\u5386\u76ee\u5f55\u7684\u5b50\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"regExp \u5339\u914d\u6587\u4ef6\u7684\u6b63\u5219\u8868\u8fbe\u5f0f\uff0c\u5373\u6587\u4ef6\u7c7b\u578b")),(0,a.kt)("p",null,"\u800c\u4e0a\u56fe\u4ee3\u7801\u4e2d\u5bf9\u5e94\u7684\u4ee3\u7801\u4e5f\u660e\u786e\u8868\u8fbe\u8981\u6307\u5b9a",(0,a.kt)("inlineCode",{parentName:"p"},"./modules"),"\u76ee\u5f55\u4e0b\u7684\uff0c\u6240\u6709 js \u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const modulesFiles = require.context('./modules', true, /\\.js$/)\n")),(0,a.kt)("p",null,"\u8f93\u51fa\u4e00\u4e0b\u770b\u770b modulesFiles \u5230\u5e95\u662f\u4ec0\u4e48(console.dir \u8f93\u51fa)"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(53851).Z,width:"473",height:"230"})),(0,a.kt)("p",null,"\u8fd4\u56de\u4e00\u4e2a\u51fd\u6570\uff0c\u4f46\u8be5\u51fd\u6570\u5305\u542b\u4e09\u4e2a\u5c5e\u6027 resolve()\u3001keys()\u3001id"),(0,a.kt)("p",null,"\u5176\u4e2d",(0,a.kt)("inlineCode",{parentName:"p"},"modulesFiles.keys()"),"\u5219\u662f\u6307\u5b9a\u76ee\u5f55\u4e0b\u6587\u4ef6\u540d\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\xa0['./app.js', './permission.js','./settings.js', './tagsView.js', './user.js']\n")),(0,a.kt)("p",null,"\u63a5\u7740\u770b\u4e0b vue-element-admin \u4e2d\u7684\u4e0b\u4e00\u884c\u4ee3\u7801"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"const modules = modulesFiles.keys().reduce((modules, modulePath) => {\n  // set './app.js' => 'app'\n  const moduleName = modulePath.replace(/^\\.\\/(.*)\\.\\w+$/, '$1')\n  const value = modulesFiles(modulePath)\n  modules[moduleName] = value.default\n  return modules\n}, {})\n")),(0,a.kt)("p",null,"\u8fd9\u8fb9\u5148\u8f93\u51fa\u4e00\u4e0b modules\uff0c\u770b\u4e0b\u7ed3\u679c\u662f\u4ec0\u4e48"),(0,a.kt)("p",null,(0,a.kt)("img",{src:n(51530).Z,width:"510",height:"117"})),(0,a.kt)("p",null,"\u6ca1\u9519\uff0c\u6b63\u5bf9\u5e94\u7740 modules \u4e0b\u7684\u6240\u6709\u6587\u4ef6\uff0c\u4ee5\u53ca\u6240\u5bfc\u51fa\u7684\u5bf9\u8c61"),(0,a.kt)("p",null,"\u5176\u4e2d\u5728\u5faa\u73af\u4f53\u4e2d\u8fd8\u8c03\u7528\u4e86",(0,a.kt)("inlineCode",{parentName:"p"},"const value = modulesFiles(modulePath)"),"\uff0c\u5176\u4e2d value \u662f Module \u5bf9\u8c61\uff0c\u6709\u4e2a\u5c5e\u6027",(0,a.kt)("inlineCode",{parentName:"p"},"default"),"\uff0c\u901a\u8fc7",(0,a.kt)("inlineCode",{parentName:"p"},"value.default"),"\u4fbf\u53ef\u83b7\u53d6\u5230\u5bf9\u5e94\u6a21\u5757\u6240\u5bfc\u51fa\u7684\u5185\u5bb9\u3002"),(0,a.kt)("p",null,"\u5c31\u6b64\u4fbf\u53ef\u4ee5\u5b9e\u73b0\u81ea\u52a8\u5bfc\u5165\u6a21\u5757\u3002\u4e0d\u8fc7\u7531\u4e8e\u5bfc\u51fa\u7684\u662f store \u5bf9\u8c61\uff0c\u6240\u5c01\u88c5\u7684\u4ee3\u7801\u4e5f\u6709\u70b9\u8fc7\u4e8e\u590d\u6742\uff0c\u8fd9\u8fb9\u6211\u8d34\u4e0b\u6211\u662f\u5982\u4f55\u81ea\u52a8\u5bfc\u5165\u6570\u7ec4\u5bf9\u8c61\u7684"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"const modulesFiles = require.context('./modules', true, /\\.ts$/)\n\nlet allData: any[] = []\n\nmodulesFiles.keys().forEach((modulePath) => {\n  const value = modulesFiles(modulePath)\n  let data = value.default\n\n  if (!data) return\n  allData.push(...value.default)\n})\n")),(0,a.kt)("h2",{id:"\u53c2\u8003\u94fe\u63a5"},"\u53c2\u8003\u94fe\u63a5"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},(0,a.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/garfieldzhong/p/12585280.html"},"\u524d\u7aef\u4f18\u5316\u4e4b -- \u4f7f\u7528 require.context \u8ba9\u9879\u76ee\u5b9e\u73b0\u8def\u7531\u81ea\u52a8\u5bfc\u5165 - \u6c90\u6d74\u70b9\u9633\u5149 - \u535a\u5ba2\u56ed (cnblogs.com)"))))}k.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return k}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,c=u(e,["components","mdxType","originalType","parentName"]),p=s(n),m=o,k=p["".concat(i,".").concat(m)]||p[m]||d[m]||a;return n?r.createElement(k,l(l({ref:t},c),{},{components:n})):r.createElement(k,l({ref:t},c))}));function k(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,l=new Array(a);l[0]=m;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[p]="string"==typeof e?e:o,l[1]=u;for(var s=2;s<a;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13669:function(e,t,n){t.Z=n.p+"assets/images/image-20230426204520-7b1c16caed1185652a8b84f019f03bd2.png"},52927:function(e,t,n){t.Z=n.p+"assets/images/image-20230426204529-077369347b8700f27a6bb883010f74d4.png"},53851:function(e,t,n){t.Z=n.p+"assets/images/image-20230426204544-2a7f9593e1432534a3864079825119af.png"},51530:function(e,t,n){t.Z=n.p+"assets/images/image-20230426204554-7a62d923e67272048542b80923796ff3.png"}}]);