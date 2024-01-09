"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[1245],{16793:function(e,n,t){t.r(n),t.d(n,{assets:function(){return l},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return p}});var r=t(83117),a=t(80102),u=(t(67294),t(3905)),o=["components"],i={id:"js-array-object-unique",slug:"/js-array-object-unique",title:"JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",date:new Date("2021-07-05T00:00:00.000Z"),authors:"RiverMountain",tags:["javascript"],keywords:["javascript"]},c=void 0,s={unversionedId:"stack/js/\u6280\u5de7\u7bc7/js-array-object-unique",id:"stack/js/\u6280\u5de7\u7bc7/js-array-object-unique",title:"JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",description:"\u53c2\u8003 \u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",source:"@site/docs/stack/js/\u6280\u5de7\u7bc7/JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd.md",sourceDirName:"stack/js/\u6280\u5de7\u7bc7",slug:"/js-array-object-unique",permalink:"/docs/js-array-object-unique",draft:!1,tags:[{label:"javascript",permalink:"/docs/tags/javascript"}],version:"current",frontMatter:{id:"js-array-object-unique",slug:"/js-array-object-unique",title:"JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",date:"2021-07-05T00:00:00.000Z",authors:"RiverMountain",tags:["javascript"],keywords:["javascript"]},sidebar:"stack",previous:{title:"JS\u8f93\u51fa\u51fd\u6570\u8c03\u7528\u6808",permalink:"/docs/js-print-stack-of-function"},next:{title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",permalink:"/docs/typescript-advanced-grammar"}},l={},p=[{value:"\u89e3\u51b3\u65b9\u6cd5",id:"\u89e3\u51b3\u65b9\u6cd5",level:2},{value:"reduce \u53bb\u91cd",id:"reduce-\u53bb\u91cd",level:3},{value:"lodash \u5de5\u5177\u5e93\u53bb\u91cd",id:"lodash-\u5de5\u5177\u5e93\u53bb\u91cd",level:3}],d={toc:p},f="wrapper";function m(e){var n=e.components,t=(0,a.Z)(e,o);return(0,u.kt)(f,(0,r.Z)({},d,t,{components:n,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"\u53c2\u8003 ",(0,u.kt)("a",{parentName:"p",href:"https://www.nodejs.red/#/javascript/base?id=%E6%95%B0%E7%BB%84%E5%8E%BB%E9%87%8D%E7%9A%84%E4%B8%89%E7%A7%8D%E5%AE%9E%E7%8E%B0%E6%96%B9%E5%BC%8F"},"\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd")),(0,u.kt)("p",null,"\u6570\u636e\u5982\u4e0b:"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"[{ name: 'zs', age: 15 }, { name: 'lisi' }, { name: 'zs' }]\n")),(0,u.kt)("p",null,"\u60f3\u8981\u5c06 name \u4e3a zs \u7684\u6570\u636e\u53bb\u91cd\uff0c\u4f18\u5148\u4fdd\u7559\u7b2c\u4e00\u6761\u76f8\u540c\u6570\u636e"),(0,u.kt)("h2",{id:"\u89e3\u51b3\u65b9\u6cd5"},"\u89e3\u51b3\u65b9\u6cd5"),(0,u.kt)("h3",{id:"reduce-\u53bb\u91cd"},"reduce \u53bb\u91cd"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"let hash = {}\n\nfunction unique(arr, initialValue) {\n  return arr.reduce(function (previousValue, currentValue, index, array) {\n    hash[currentValue.name] ? '' : (hash[currentValue.name] = true && previousValue.push(currentValue))\n\n    return previousValue\n  }, initialValue)\n}\n\nconst uniqueArr = unique([{ name: 'zs', age: 15 }, { name: 'lisi' }, { name: 'zs' }], [])\n\nconsole.log(uniqueArr) // uniqueArr.length == 2\n")),(0,u.kt)("h3",{id:"lodash-\u5de5\u5177\u5e93\u53bb\u91cd"},"lodash \u5de5\u5177\u5e93\u53bb\u91cd"),(0,u.kt)("p",null,(0,u.kt)("a",{parentName:"p",href:"https://lodash.com/docs/4.17.15#uniqBy"},"Lodash Documentation")),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"_.uniqBy([{ x: 1 }, { x: 2 }, { x: 1 }], 'x')\n\n// => [{ 'x': 1 }, { 'x': 2 }]\n\n// \u6307\u5b9a\u6761\u4ef6\n_.uniqBy([2.1, 1.2, 2.3], Math.floor)\n// => [2.1, 1.2]\n")),(0,u.kt)("p",null,"\u60f3\u8981\u6240\u6709\u5bf9\u8c61\u5c5e\u6027\u90fd\u4e00\u6837\u624d\u53bb\u91cd\u4e5f\u7b80\u5355"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-js"},"var objects = [\n  { x: 1, y: 2 },\n  { x: 2, y: 1 },\n  { x: 1, y: 2 },\n]\n\n_.uniqWith(objects, _.isEqual)\n// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]\n")))}m.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return l},kt:function(){return m}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)t=u[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=r.createContext({}),s=function(e){var n=r.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},l=function(e){var n=s(e.components);return r.createElement(c.Provider,{value:n},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},f=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,u=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),p=s(t),f=a,m=p["".concat(c,".").concat(f)]||p[f]||d[f]||u;return t?r.createElement(m,o(o({ref:n},l),{},{components:t})):r.createElement(m,o({ref:n},l))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var u=t.length,o=new Array(u);o[0]=f;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var s=2;s<u;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}f.displayName="MDXCreateElement"}}]);