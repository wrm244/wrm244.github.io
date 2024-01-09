"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[4466],{26451:function(e,A,t){t.r(A),t.d(A,{assets:function(){return i},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=t(83117),r=t(80102),c=(t(67294),t(3905)),a=["components"],o={id:"fix-docker-config-that-cannot-start-up",slug:"/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",date:new Date("2021-08-17T00:00:00.000Z"),authors:"RiverMountain",tags:["docker","elasticsearch"],keywords:["docker","elasticsearch"]},l=void 0,s={unversionedId:"stack/docker/fix-docker-config-that-cannot-start-up",id:"stack/docker/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",description:"\u524d\u56e0",source:"@site/docs/stack/docker/\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6.md",sourceDirName:"stack/docker",slug:"/fix-docker-config-that-cannot-start-up",permalink:"/en/docs/fix-docker-config-that-cannot-start-up",draft:!1,tags:[{label:"docker",permalink:"/en/docs/tags/docker"},{label:"elasticsearch",permalink:"/en/docs/tags/elasticsearch"}],version:"current",frontMatter:{id:"fix-docker-config-that-cannot-start-up",slug:"/fix-docker-config-that-cannot-start-up",title:"\u4fee\u6539\u65e0\u6cd5\u542f\u52a8\u7684Docker\u5bb9\u5668\u914d\u7f6e\u6587\u4ef6",date:"2021-08-17T00:00:00.000Z",authors:"RiverMountain",tags:["docker","elasticsearch"],keywords:["docker","elasticsearch"]},sidebar:"stack",previous:{title:"Docker\u90e8\u7f72Node\u9879\u76ee",permalink:"/en/docs/docker-deploy-node-project"},next:{title:"database",permalink:"/en/docs/category/database"}},i={},u=[{value:"\u524d\u56e0",id:"\u524d\u56e0",level:2},{value:"\u89e3\u51b3\u529e\u6cd5",id:"\u89e3\u51b3\u529e\u6cd5",level:3},{value:"\u540e\u679c",id:"\u540e\u679c",level:2}],d={toc:u},p="wrapper";function f(e){var A=e.components,o=(0,r.Z)(e,a);return(0,c.kt)(p,(0,n.Z)({},d,o,{components:A,mdxType:"MDXLayout"}),(0,c.kt)("h2",{id:"\u524d\u56e0"},"\u524d\u56e0"),(0,c.kt)("p",null,"\u4e8b\u60c5\u662f\u8fd9\u6837\u7684"),(0,c.kt)("p",null,"\u6211\u60f3\u7ed9\u6211\u7684 elasticsearch \u6269\u5145\u4e00\u4e0b\u5185\u5b58\uff0c\u9ed8\u8ba4\u914d\u7f6e\u7684\u5185\u5b58\u592a\u5c11\u4e86\uff0c\u673a\u5668 32g\uff0c\u8fde 16g \u90fd\u6ca1\u5360\u7528\u4e0a\uff0c\u6709\u597d\u51e0\u6b21\u7684\u65f6\u5019\u540c\u65f6\u5e76\u53d1\u51e0\u5343\u6761\u670d\u52a1\u5c31\u6302\u4e86\u3002\u3002\u3002"),(0,c.kt)("p",null,"\u4e8e\u662f\uff0c\u8fdb\u5165 elasticsearch \u5bb9\u5668\uff0c\u627e\u5230",(0,c.kt)("inlineCode",{parentName:"p"},"elasticsearch.yml"),"\uff08\u6ce8\u610f\u8fd9\u4e2a\u6587\u4ef6\uff09"),(0,c.kt)("p",null,(0,c.kt)("img",{alt:"image-20210817142200704",src:t(93336).Z,width:"529",height:"269"})),(0,c.kt)("p",null,"\u6dfb\u52a0\u4e86\u4e0b\u5217\u4e24\u4e2a\u53c2\u6570"),(0,c.kt)("p",null,"-Xms16g\n-Xmx16g"),(0,c.kt)("p",null,"\u7136\u540e\u91cd\u542f\u5bb9\u5668\uff0c\u5c31\u53d1\u73b0\u5bb9\u5668\u600e\u4e48\u4e5f\u542f\u52a8\u4e0d\u4e86\uff0c\u7136\u540e\u548b\u4e00\u770b\uff0c\u914d\u7f6e\u6587\u4ef6\u641e\u9519\u4e86\uff0c\u8bbe\u7f6e\u5185\u5b58\u7684\u5e94\u8be5\u662f",(0,c.kt)("inlineCode",{parentName:"p"},"jvm.options"),"\u8fd9\u4e2a\u914d\u7f6e\u6587\u4ef6"),(0,c.kt)("h3",{id:"\u89e3\u51b3\u529e\u6cd5"},"\u89e3\u51b3\u529e\u6cd5"),(0,c.kt)("p",null,"\u6240\u4ee5\u76ee\u6807\u5f88\u660e\u786e\uff0c\u53ea\u9700\u8981\u66f4\u6539\u56de\u539f\u6765\u914d\u7f6e\u6587\u4ef6\u5373\u53ef\u6b63\u5e38\u542f\u52a8\u3002\u4f46\u5bb9\u5668\u53ea\u8981\u4e00\u91cd\u542f\u5c31\u4f1a\u7acb\u9a6c\u6302\u6389\uff0c\u90fd\u542f\u52a8\u4e0d\u4e86\uff0c\u53c8\u600e\u4e48\u901a\u8fc7",(0,c.kt)("inlineCode",{parentName:"p"},"docker exec -it elasticsearch /bin/bash"),"\u8fdb\u5165\u5bb9\u5668\uff0c\u7136\u540e\u901a\u8fc7 vim \u4fee\u6539\u914d\u7f6e\u5462\u3002"),(0,c.kt)("p",null,"\u6211\u5f53\u65f6\u7684\u60f3\u6cd5\u662f\u8fd9\u6837\u7684\uff0c\u5bb9\u5668\u4e00\u542f\u52a8\u80af\u5b9a\u4e0d\u4f1a\u7acb\u9a6c\u6302\u6389\uff0c\u81f3\u5c11\u4f1a\u6709\u4e2a\u51e0\u79d2\uff0c\u6211\u80fd\u4e0d\u80fd\u901a\u8fc7\u4e00\u7cfb\u5217\u7684\u547d\u4ee4\u8fdb\u5165\u5bb9\u5668\u7136\u540e\u7acb\u9a6c\u4fee\u6539\u6587\u4ef6\uff0c\u60f3\u6cd5\u662f\u633a\u597d\uff0c\u53ef\u5f53 vim \u7f16\u8f91\u6587\u4ef6\u7684\uff0c\u6211\u53c8\u6539\u600e\u4e48\u901a\u8fc7\u8fdb\u5165\u7f16\u8f91\uff0c\u4fdd\u5b58\u9000\u51fa\u7f16\u8f91\u3002\u4e8e\u662f\u5c31\u679c\u65ad\u653e\u5f03\uff0c\u7ffb\u770b\u81ea\u5df1\u4e4b\u524d\u5199\u8fc7\u7684 Docker \u7b14\u8bb0 \uff0c\u53d1\u73b0\u3002\u6709\u4e00\u4e2a\u547d\u4ee4",(0,c.kt)("inlineCode",{parentName:"p"},"docker cp \u5bb9\u5668id:\u5bb9\u5668\u5185\u8def\u5f84 \u5bbf\u4e3b\u673a\u8def\u5f84"),"\u4ece\u5bb9\u5668\u5185\u62f7\u8d1d\u6587\u4ef6\u5230\u5bbf\u4e3b\u673a\u4e0a\uff0c\u4e8e\u662f\u627e\u5230 elasticsearch \u7684\u914d\u7f6e\u6587\u4ef6\u8def\u5f84",(0,c.kt)("inlineCode",{parentName:"p"},"/usr/share/elasticsearch/config"),"\uff0c\u6211\u7684\u5bb9\u5668\u540d\u5b57"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"docker cp elasticsearch:/usr/share/elasticsearch/config/elasticsearch.yml .\nvi elasticsearch.yml\n# \u7f16\u8f91\u6587\u4ef6\ndocker cp elasticsearch.yml :/usr/share/elasticsearch/config/elasticsearch.yml\ndocker start elasticsearch\n")),(0,c.kt)("p",null,"\u7136\u540e\u91cd\u542f elasticsearch \u5bb9\u5668\u5373\u53ef\u6b63\u5e38\u8fd0\u884c"),(0,c.kt)("h2",{id:"\u540e\u679c"},"\u540e\u679c"),(0,c.kt)("p",null,"\u56de\u5230\u6700\u5f00\u59cb\u7684\u76ee\u7684\uff0c\u90a3\u4e48\u8981\u5982\u4f55\u66f4\u6539 elasticsearch \u5185\u5b58\u5462"),(0,c.kt)("p",null,"\u5982\u679c\u8981\u65b0\u5efa\u4e00\u4e2a\u5bb9\u5668\u7684\u8bdd \u9644\u5e26\u8fd9\u4e2a\u53c2\u6570\u5373\u53ef",(0,c.kt)("inlineCode",{parentName:"p"},'-e ES_JAVA_OPTS="-Xms64m -Xmx512m"')),(0,c.kt)("p",null,"\u5982\u679c\u5df2\u7ecf\u65b0\u5efa\u8fc7\u5bb9\u5668\u7684\u8bdd\uff0c\u627e\u5230",(0,c.kt)("strong",{parentName:"p"},"jvm.options"),"\u8fd9\u4e2a\u6587\u4ef6"),(0,c.kt)("pre",null,(0,c.kt)("code",{parentName:"pre",className:"language-sh"},"[root@localhost /]# find /var/lib/docker/ -name jvm.options\n/var/lib/docker/overlay2/1f06b1e87d0fd473cc910d8689add0638f1ac36676d92f92dc03b17e65bf7dae/diff/usr/share/elasticsearch/config/jvm.options\n/var/lib/docker/overlay2/d20c175dffdc80467dbce39d4a5bc6dc9f7ff239564a8ee1ac8c4bcfdd9a461e/merged/usr/share/elasticsearch/config/jvm.options\n")),(0,c.kt)("p",null,(0,c.kt)("img",{src:t(5885).Z,width:"932",height:"527"})),(0,c.kt)("p",null,"\u5982\u56fe\uff0c\u8bbe\u7f6e\u5bf9\u5e94\u7684\u5185\u5b58\u5927\u5c0f\u5373\u53ef\uff0c\u91cd\u542f elasticsearch \u5bb9\u5668\u5373\u53ef"))}f.isMDXComponent=!0},3905:function(e,A,t){t.d(A,{Zo:function(){return i},kt:function(){return f}});var n=t(67294);function r(e,A,t){return A in e?Object.defineProperty(e,A,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[A]=t,e}function c(e,A){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);A&&(n=n.filter((function(A){return Object.getOwnPropertyDescriptor(e,A).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var A=1;A<arguments.length;A++){var t=null!=arguments[A]?arguments[A]:{};A%2?c(Object(t),!0).forEach((function(A){r(e,A,t[A])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(A){Object.defineProperty(e,A,Object.getOwnPropertyDescriptor(t,A))}))}return e}function o(e,A){if(null==e)return{};var t,n,r=function(e,A){if(null==e)return{};var t,n,r={},c=Object.keys(e);for(n=0;n<c.length;n++)t=c[n],A.indexOf(t)>=0||(r[t]=e[t]);return r}(e,A);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)t=c[n],A.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var l=n.createContext({}),s=function(e){var A=n.useContext(l),t=A;return e&&(t="function"==typeof e?e(A):a(a({},A),e)),t},i=function(e){var A=s(e.components);return n.createElement(l.Provider,{value:A},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var A=e.children;return n.createElement(n.Fragment,{},A)}},p=n.forwardRef((function(e,A){var t=e.components,r=e.mdxType,c=e.originalType,l=e.parentName,i=o(e,["components","mdxType","originalType","parentName"]),u=s(t),p=r,f=u["".concat(l,".").concat(p)]||u[p]||d[p]||c;return t?n.createElement(f,a(a({ref:A},i),{},{components:t})):n.createElement(f,a({ref:A},i))}));function f(e,A){var t=arguments,r=A&&A.mdxType;if("string"==typeof e||r){var c=t.length,a=new Array(c);a[0]=p;var o={};for(var l in A)hasOwnProperty.call(A,l)&&(o[l]=A[l]);o.originalType=e,o[u]="string"==typeof e?e:r,a[1]=o;for(var s=2;s<c;s++)a[s]=t[s];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}p.displayName="MDXCreateElement"},93336:function(e,A){A.Z="data:image/png;base64,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"},5885:function(e,A,t){A.Z=t.p+"assets/images/image-20230426204303-7bba642c6725b2640e35637cf1e83f1e.png"}}]);