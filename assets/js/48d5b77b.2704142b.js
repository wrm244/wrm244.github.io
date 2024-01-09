"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[7359],{22540:function(e,t,r){r.r(t),r.d(t,{assets:function(){return d},contentTitle:function(){return l},default:function(){return m},frontMatter:function(){return s},metadata:function(){return i},toc:function(){return u}});var n=r(83117),o=r(80102),c=(r(67294),r(3905)),a=["components"],s={id:"docker-accesses-host-service",slug:"/docker-accesses-host-service",title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",date:new Date("2022-05-25T00:00:00.000Z"),authors:"RiverMountain",tags:["docker"],keywords:["docker"]},l=void 0,i={unversionedId:"stack/docker/docker-accesses-host-service",id:"stack/docker/docker-accesses-host-service",title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",description:"\u5982\u679c\u5c1d\u8bd5\u8fc7\u90e8\u7f72 docker \u5bb9\u5668\u5e94\u7528\uff0c\u5e76\u4e14\u8be5\u5e94\u7528\u9700\u8981\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684\u670d\u52a1\uff0c\u5982 Mysql\uff0cRedis\u3002\u4f1a\u53d1\u73b0\u5e94\u7528\u53ef\u80fd\u65e0\u6cd5\u8fde\u63a5\uff0c\u5176\u672c\u8d28\u7684\u539f\u56e0\u7684\u5c31\u662f docker \u5bb9\u5668\u5185\u7684 localhost \u4e0e\u5bbf\u4e3b\u673a\u7684 localhost \u5e76\u4e0d\u662f\u540c\u4e00\u4e2a\u4e1c\u897f\u3002\u6240\u4ee5\u8fde\u63a5\u5730\u5740\u4e0d\u80fd\u7528 localhost \u548c 127.0.0.1\u3002",source:"@site/docs/stack/docker/Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1.md",sourceDirName:"stack/docker",slug:"/docker-accesses-host-service",permalink:"/docs/docker-accesses-host-service",draft:!1,tags:[{label:"docker",permalink:"/docs/tags/docker"}],version:"current",frontMatter:{id:"docker-accesses-host-service",slug:"/docker-accesses-host-service",title:"Docker\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u670d\u52a1",date:"2022-05-25T00:00:00.000Z",authors:"RiverMountain",tags:["docker"],keywords:["docker"]},sidebar:"stack",previous:{title:"Docker\u5bb9\u5668\u65e5\u5fd7\u8fc7\u5927\u6e05\u7406",permalink:"/docs/docker-container-log-clean"},next:{title:"Docker\u90e8\u7f72Node\u9879\u76ee",permalink:"/docs/docker-deploy-node-project"}},d={},u=[{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:2},{value:"\u4f7f\u7528 host \u6a21\u5f0f\uff08\u5e38\u7528\uff09",id:"\u4f7f\u7528-host-\u6a21\u5f0f\u5e38\u7528",level:3},{value:"mac \u548c windows",id:"mac-\u548c-windows",level:4},{value:"linux",id:"linux",level:4},{value:"\u4f7f\u7528 docker0 \u7f51\u7edc\u7684\u9ed8\u8ba4\u7f51\u5173\u5730\u5740",id:"\u4f7f\u7528-docker0-\u7f51\u7edc\u7684\u9ed8\u8ba4\u7f51\u5173\u5730\u5740",level:3}],p={toc:u},k="wrapper";function m(e){var t=e.components,r=(0,o.Z)(e,a);return(0,c.kt)(k,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,c.kt)("p",null,"\u5982\u679c\u5c1d\u8bd5\u8fc7\u90e8\u7f72 docker \u5bb9\u5668\u5e94\u7528\uff0c\u5e76\u4e14\u8be5\u5e94\u7528\u9700\u8981\u8bbf\u95ee\u5bbf\u4e3b\u673a\u7684\u670d\u52a1\uff0c\u5982 Mysql\uff0cRedis\u3002\u4f1a\u53d1\u73b0\u5e94\u7528\u53ef\u80fd\u65e0\u6cd5\u8fde\u63a5\uff0c\u5176\u672c\u8d28\u7684\u539f\u56e0\u7684\u5c31\u662f docker \u5bb9\u5668\u5185\u7684 localhost \u4e0e\u5bbf\u4e3b\u673a\u7684 localhost \u5e76\u4e0d\u662f\u540c\u4e00\u4e2a\u4e1c\u897f\u3002\u6240\u4ee5\u8fde\u63a5\u5730\u5740\u4e0d\u80fd\u7528 localhost \u548c 127.0.0.1\u3002"),(0,c.kt)("p",null,(0,c.kt)("strong",{parentName:"p"},"\u5bbf\u4e3b\u673a\u662f\u53ef\u4ee5\u76f4\u63a5\u8bbf\u95ee docker \u5bb9\u5668\u5185\u7684\u5e94\u7528\u3002")),(0,c.kt)("h2",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,c.kt)("h3",{id:"\u4f7f\u7528-host-\u6a21\u5f0f\u5e38\u7528"},"\u4f7f\u7528 host \u6a21\u5f0f\uff08\u5e38\u7528\uff09"),(0,c.kt)("p",null,"docker \u8fd0\u884c\u5bb9\u5668\u65f6\u4f7f\u7528\u7684",(0,c.kt)("a",{parentName:"p",href:"https://so.csdn.net/so/search?q=%E6%A1%A5%E6%8E%A5&spm=1001.2101.3001.7020"},"\u6865\u63a5"),"\u6a21\u5f0f(\u9ed8\u8ba4)\uff0c\u5982\u679c\u4f7f\u7528 host \u6a21\u5f0f\u5c31\u53ef\u4ee5\u8bbf\u95ee\uff0c\u6240\u4ee5\u9700\u8981\u5c06 docker \u7684\u7f51\u7edc\u6a21\u5f0f\u8bbe\u7f6e\u4e3a host \u6a21\u5f0f\u3002"),(0,c.kt)("p",null,"\u901a\u8fc7",(0,c.kt)("inlineCode",{parentName:"p"},"docker run")," \u542f\u52a8\u5bb9\u5668\u65f6\u52a0\u5165",(0,c.kt)("inlineCode",{parentName:"p"},"\u2013net=host")," \u53c2\u6570\uff0c\u6216\u5728 compose \u6587\u4ef6\u4e2d\u6307\u5b9a",(0,c.kt)("inlineCode",{parentName:"p"},"network_mode: \u201chost\u201d"),"\uff0c\u4fbf\u53ef\u4ee5 host \u6a21\u5f0f\u8fd0\u884c\u5bb9\u5668"),(0,c.kt)("p",null,"\u8be5\u53c2\u6570\u6307\u5b9a\u8be5\u5bb9\u5668\u4f7f\u7528 host \u7f51\u7edc\u6a21\u5f0f\uff0c\u56e0\u6b64\u4e5f\u65e0\u9700\u6620\u5c04\u7aef\u53e3\uff08\u4e0d\u7136\u4f1a\u62a5\u8b66\u544a\uff09\u3002"),(0,c.kt)("h4",{id:"mac-\u548c-windows"},"mac \u548c windows"),(0,c.kt)("p",null,"\u9700\u8981 env \u914d\u7f6e\u4e2d\u7684 127.0.0.1 \u66ff\u6362\u4e3a",(0,c.kt)("strong",{parentName:"p"},"host.docker.internal")),(0,c.kt)("h4",{id:"linux"},"linux"),(0,c.kt)("p",null,"\u5728\u542f\u52a8 docker \u65f6\uff0c\u52a0\u5165\u5982\u4e0b\u8bed\u53e5"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-bash"},"--add-host=host.docker.internal:host-gateway\n")),(0,c.kt)("p",null,"\u800c\u5728 container \u5185\uff0c\u53ef\u4ee5\u76f4\u63a5\u8bf7\u6c42 host.docker.internal:PORT\uff0c\u6765\u83b7\u53d6\u5bbf\u4e3b\u673a\u4e0a\u63d0\u4f9b\u7684\u5404\u79cd\u670d\u52a1\n\u5982\u679c\u4f7f\u7528\u4e86 Docker Compose\uff0c\u5219\u5e94\u8be5\u5c06\u4e0b\u9762\u7684\u53e5\u5b50\u52a0\u5165 container \u7684\u58f0\u660e\u4e2d\uff1a"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-yaml"},"extra_hosts:\n  - 'host.docker.internal:host-gateway'\n")),(0,c.kt)("h3",{id:"\u4f7f\u7528-docker0-\u7f51\u7edc\u7684\u9ed8\u8ba4\u7f51\u5173\u5730\u5740"},"\u4f7f\u7528 docker0 \u7f51\u7edc\u7684\u9ed8\u8ba4\u7f51\u5173\u5730\u5740"),(0,c.kt)("p",null,"\u5728\u9ed8\u8ba4\u7684 bridge \u6a21\u5f0f\u4e0b\uff0cdocker0 \u7f51\u7edc\u7684\u9ed8\u8ba4\u7f51\u5173\u5373\u662f\u5bbf\u4e3b\u673a\u3002\u5728 Linux\uff08Windows\uff09\u4e0b\uff0cdocker0 \u7f51\u7edc\u901a\u5e38\u4f1a\u5206\u914d\u4e00\u4e2a 172.17.0.0/16 \u7684\u7f51\u6bb5\uff0c\u5176\u7f51\u5173\u901a\u5e38\u4e3a",(0,c.kt)("strong",{parentName:"p"},"172.17.0.1"),"\uff1bmacOS \u4e0b\u7684\u7f51\u6bb5\u5219\u4e3a 192.168.65.0/24\uff0c\u7f51\u5173\u4e3a",(0,c.kt)("strong",{parentName:"p"},"192.168.65.1"),"\u3002\u5728\u5bb9\u5668\u4e2d\u4f7f\u7528\u8be5 IP \u5730\u5740\u5373\u53ef\u8bbf\u95ee\u5bbf\u4e3b\u673a\u4e0a\u7684\u5404\u79cd\u670d\u52a1\u3002"),(0,c.kt)("p",null,"\u9700\u8981\u6ce8\u610f\u7684\u662f\uff0c\u8fd9\u79cd\u60c5\u51b5\u4e0b\uff0c\u7ecf\u7531 docker0 \u7f51\u6865\u800c\u6765\u7684\u6d41\u91cf\u4e0d\u7ecf\u8fc7\u5bbf\u4e3b\u673a\u7684\u672c\u5730\u56de\u73af\uff0c\u56e0\u6b64\u9700\u8981\u5c06\u5bbf\u4e3b\u673a\u4e0a\u7684\u5e94\u7528\uff08MySQL\uff0cRedis \u7b49\uff09\u914d\u7f6e\u4e3a\u76d1\u542c 0.0.0.0\u3002"),(0,c.kt)("p",null,"\u4f46\u6b64 IP \u5e76\u4e0d\u4e00\u5b9a\u5b8c\u5168\u56fa\u5b9a\uff0c\u53ef\u80fd\u4f1a\u56e0\u7cfb\u7edf\u53ca\u914d\u7f6e\u800c\u53d1\u751f\u53d8\u5316\uff0c\u5e94\u7528\u4e5f\u9700\u8981\u66f4\u6539\u3002"))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return d},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},d=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,c=e.originalType,l=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=i(r),k=o,m=u["".concat(l,".").concat(k)]||u[k]||p[k]||c;return r?n.createElement(m,a(a({ref:t},d),{},{components:r})):n.createElement(m,a({ref:t},d))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var c=r.length,a=new Array(c);a[0]=k;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<c;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}k.displayName="MDXCreateElement"}}]);