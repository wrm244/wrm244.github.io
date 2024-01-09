"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[9676],{20838:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return c},metadata:function(){return u},toc:function(){return s}});var r=n(83117),i=n(80102),o=(n(67294),n(3905)),a=["components"],c={slug:"/blog/CS/backend/why-is-nginx",title:"\u4e3a\u4ec0\u4e48\u662fNginx",description:"Nginx \u662f\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684 Web \u548c\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668",image:"/assets/images/cover/server.jpg",sticky:4,date:new Date("2023-04-14T21:10:23.000Z"),tags:["backend","nginx"],authors:"RiverMountain"},l=void 0,u={permalink:"/blog/CS/backend/why-is-nginx",editUrl:"https://github.com/wrm244/wikiblog/edit/main/blog/CS/backend/\u4e3a\u4ec0\u4e48\u662fNginx.md",source:"@site/blog/CS/backend/\u4e3a\u4ec0\u4e48\u662fNginx.md",title:"\u4e3a\u4ec0\u4e48\u662fNginx",description:"Nginx \u662f\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684 Web \u548c\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668",date:"2023-04-14T21:10:23.000Z",formattedDate:"2023\u5e744\u670814\u65e5",tags:[{label:"backend",permalink:"/tags/backend"},{label:"nginx",permalink:"/tags/nginx"}],readingTime:8.22,hasTruncateMarker:!0,authors:[{name:"\u6cb3\u5c71",title:"RiverMountain",url:"https://github.com/wrm244",email:"wrm244@139.com",imageURL:"/avatar.png",key:"RiverMountain"}],frontMatter:{slug:"/blog/CS/backend/why-is-nginx",title:"\u4e3a\u4ec0\u4e48\u662fNginx",description:"Nginx \u662f\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684 Web \u548c\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668",image:"/assets/images/cover/server.jpg",sticky:4,date:"2023-04-14T21:10:23.000Z",tags:["backend","nginx"],authors:"RiverMountain"},prevItem:{title:"\u5b9d\u5854 Flarum \u8bba\u575b\u7684\u642d\u5efa\u4e0e\u8fc1\u79fb",permalink:"/blog/project/web/bt-flarum-build"},nextItem:{title:"Http\u534f\u8bae\u63a2\u7a76",permalink:"/blog/CS/network/http"}},p={authorsImageUrls:[void 0]},s=[],g={toc:s},m="wrapper";function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)(m,(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Nginx \u662f\u5f00\u6e90\u3001\u9ad8\u6027\u80fd\u3001\u9ad8\u53ef\u9760\u7684 Web \u548c\u53cd\u5411\u4ee3\u7406\u670d\u52a1\u5668\uff0c\u800c\u4e14\u652f\u6301\u70ed\u90e8\u7f72\uff0c\u51e0\u4e4e\u53ef\u4ee5\u505a\u5230 7 * 24 \u5c0f\u65f6\u4e0d\u95f4\u65ad\u8fd0\u884c\uff0c\u5373\u4f7f\u8fd0\u884c\u51e0\u4e2a\u6708\u4e5f\u4e0d\u9700\u8981\u91cd\u65b0\u542f\u52a8\uff0c\u8fd8\u80fd\u5728\u4e0d\u95f4\u65ad\u670d\u52a1\u7684\u60c5\u51b5\u4e0b\u5bf9\u8f6f\u4ef6\u7248\u672c\u8fdb\u884c\u70ed\u66f4\u65b0\u3002")))}f.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),s=u(n),m=i,f=s["".concat(l,".").concat(m)]||s[m]||g[m]||o;return n?r.createElement(f,a(a({ref:t},p),{},{components:n})):r.createElement(f,a({ref:t},p))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);