"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6670],{47711:function(t,e,a){a.r(e),a.d(e,{assets:function(){return c},contentTitle:function(){return i},default:function(){return u},frontMatter:function(){return T},metadata:function(){return f},toc:function(){return p}});var n=a(83117),o=a(80102),l=(a(67294),a(3905)),r=["components"],T={slug:"/blog/project/web/overleaf-build-docker",title:"Docker\u90e8\u7f72Overleaf\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u955c\u50cf",description:"docker\u955c\u50cf\u91cc\u9762\u5305\u542b\u4e2d\u6587\u652f\u6301\u5b57\u4f53",tags:["docker","overleaf"],date:new Date("2023-04-12T16:09:48.000Z"),image:"/assets/images/cover/overleaf.png",sticky:2,authors:"RiverMountain"},i=void 0,f={permalink:"/en/blog/project/web/overleaf-build-docker",editUrl:"https://github.com/wrm244/wikiblog/edit/main/blog/project/web/Docker\u90e8\u7f72Overleaf\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u955c\u50cf.md",source:"@site/blog/project/web/Docker\u90e8\u7f72Overleaf\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u955c\u50cf.md",title:"Docker\u90e8\u7f72Overleaf\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u955c\u50cf",description:"docker\u955c\u50cf\u91cc\u9762\u5305\u542b\u4e2d\u6587\u652f\u6301\u5b57\u4f53",date:"2023-04-12T16:09:48.000Z",formattedDate:"April 12, 2023",tags:[{label:"docker",permalink:"/en/tags/docker"},{label:"overleaf",permalink:"/en/tags/overleaf"}],readingTime:6.19,hasTruncateMarker:!0,authors:[{name:"\u6cb3\u5c71\u7684\u6280\u672f\u5b58\u6863",title:"RiverMountain",url:"https://github.com/wrm244",imageURL:"/avatar.png",key:"RiverMountain"}],frontMatter:{slug:"/blog/project/web/overleaf-build-docker",title:"Docker\u90e8\u7f72Overleaf\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u955c\u50cf",description:"docker\u955c\u50cf\u91cc\u9762\u5305\u542b\u4e2d\u6587\u652f\u6301\u5b57\u4f53",tags:["docker","overleaf"],date:"2023-04-12T16:09:48.000Z",image:"/assets/images/cover/overleaf.png",sticky:2,authors:"RiverMountain"},prevItem:{title:"hexo\u63d2\u4ef6\u63a8\u8350",permalink:"/en/blog/project/hexo/hexo-plugins"},nextItem:{title:"\u5173\u4e8e\u5728\u6b64\u7f51\u7ad9\u90e8\u7f72\u7684\u51e0\u884c\u547d\u4ee4",permalink:"/en/blog/project/hexo/about-deploy-prompt"}},c={authorsImageUrls:[void 0]},p=[{value:"Overleaf Toolkit \u90e8\u7f72",id:"overleaf-toolkit-\u90e8\u7f72",level:2},{value:"\u62c9\u53d6Overleaf Toolkit \u5de5\u5177\u5305",id:"\u62c9\u53d6overleaf-toolkit-\u5de5\u5177\u5305",level:3},{value:"\u521d\u59cb\u5316\u914d\u7f6e",id:"\u521d\u59cb\u5316\u914d\u7f6e",level:3},{value:"\u4fee\u6539\u542f\u52a8\u955c\u50cf",id:"\u4fee\u6539\u542f\u52a8\u955c\u50cf",level:3},{value:"\u542f\u52a8\u670d\u52a1",id:"\u542f\u52a8\u670d\u52a1",level:2},{value:"\u521b\u5efa\u7ba1\u7406\u5458\u5e10\u6237",id:"\u521b\u5efa\u7ba1\u7406\u5458\u5e10\u6237",level:2}],s={toc:p},m="wrapper";function u(t){var e=t.components,T=(0,o.Z)(t,r);return(0,l.kt)(m,(0,n.Z)({},s,T,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(15532).Z,width:"2543",height:"1359"})),(0,l.kt)("admonition",{type:"tip"},(0,l.kt)("p",{parentName:"admonition"},"\u5982\u4eca",(0,l.kt)("inlineCode",{parentName:"p"},"Overleaf"),"\u5df2\u63a8\u51fa\u56fd\u5185\u57df\u540d",(0,l.kt)("a",{parentName:"p",href:"https://cn.overleaf.com/"},"\u8bbf\u95ee"),"\uff0c\u901f\u5ea6\u8f83\u4e4b\u524d\u6709\u5f88\u5927\u7684\u63d0\u5347\u3002\u4f46\u8003\u8651\u5230\u6709\u4e9b\u540c\u5b66\u4e3a\u4e86\u79c1\u5bc6\u4e0e\u65b9\u4fbf\u6027\uff0c\u56e0\u6b64\u6709\u4e86\u81ea\u5df1\u642d\u5efa\u5f00\u6e90Overleaf\u670d\u52a1\u7684\u6253\u7b97\u3002\u8bf7\u6ce8\u610f",(0,l.kt)("a",{parentName:"p",href:"https://github.com/overleaf/overleaf"},"\u5f00\u6e90\u9879\u76eeOverleaf"),"\u4e0d\u652f\u6301\u5f00\u653e\u6ce8\u518c\uff08\u9700\u7ba1\u7406\u5458\u8d26\u53f7\u6765\u7533\u8bf7\u6ce8\u518c",(0,l.kt)("a",{parentName:"p",href:"https://github.com/overleaf/overleaf/issues/461"},"issue#461"),"\uff09\u4e0e\u8ddf\u8e2a\u8bc4\u8bba\u529f\u80fd\u3002\u8be5\u9879\u76ee\u652f\u6301Docker\u5bb9\u5668\u5316\u90e8\u7f72\uff0c\u5b89\u88c5\u8fc7\u7a0b\u6bd4\u8f83\u5bb9\u6613\u3002\u672c\u6587\u8bb0\u5f55\u4e86\u5728\u5b9e\u9a8c\u5ba4\u5185\u7f51\u73af\u5883\u4e0b\u5229\u7528\u5b98\u65b9\u63d0\u4f9b\u7684Overleaf Toolkit\u7684docker-compose\u642d\u5efaOverleaf\u670d\u52a1\u7684\u8fc7\u7a0b\uff0c==\u540c\u65f6\u91c7\u7528\u4e86\u57fa\u4e8e\u5b98\u65b9\u5f00\u6e90\u642d\u5efa\u7684\u955c\u50cf\uff0c\u5305\u542b\u4e86\u4e2d\u6587\u5b57\u4f53\u4e0e\u5168\u5957texlive\u8f6f\u4ef6\u7cfb\u7edf==\u3002",(0,l.kt)("inlineCode",{parentName:"p"},"\u8be5\u6587\u7ae0\u6700\u540e\u66f4\u65b0\u4e3a2023\u5e741\u67085\u65e5\uff0c\u6ce8\u610f\u6280\u672f\u6587\u7ae0\u7684\u65f6\u6548\u6027\u3002"))),(0,l.kt)("h1",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,l.kt)("p",null,"Overleaf \u4f9d\u8d56\u4e8e\u4ee5\u4e0b\u7a0b\u5e8f\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"docker "),(0,l.kt)("li",{parentName:"ul"},"docker-compose")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5efa\u8bae\u5b89\u88c5\u6700\u65b0\u7248\u672c\u7684 docker \u548c docker-compose\u3002")),(0,l.kt)("p",null,"Docker\u73af\u5883\u7684\u5b89\u88c5\u8be6\u89c1",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"\u5b98\u65b9\u6587\u6863"),"\u8fdb\u884c\u5b89\u88c5\uff0c\u7136\u540e\u7ee7\u7eed\u5b89\u88c5",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"compose\u5b89\u88c5\u6587\u6863"),"\u5b89\u88c5docker-compose\u7ec4\u4ef6\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002","[1][1]",": ",(0,l.kt)("a",{parentName:"p",href:"https://docs.docker.com/get-docker/"},"Get Docker")),(0,l.kt)("h1",{id:"\u5b89\u88c5\u5e76\u914d\u7f6e-overleaf"},"\u5b89\u88c5\u5e76\u914d\u7f6e Overleaf"),(0,l.kt)("h2",{id:"overleaf-toolkit-\u90e8\u7f72"},"Overleaf Toolkit \u90e8\u7f72"),(0,l.kt)("h3",{id:"\u62c9\u53d6overleaf-toolkit-\u5de5\u5177\u5305"},"\u62c9\u53d6Overleaf Toolkit \u5de5\u5177\u5305"),(0,l.kt)("p",null,"\u9996\u5148\uff0c\u5c06\u8fd9\u4e2a\u5de5\u5177\u5305 git \u5b58\u50a8\u5e93\u514b\u9686\u5230\u4f60\u7684\u4e3b\u673a\u4e0a\uff08\u4ee5\u4e0b\u547d\u4ee4\u5df2\u91cd\u547d\u540d\u4e3aoverleaf-toolkit\u6587\u4ef6\u5939\uff09\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"git clone https://github.com/overleaf/toolkit.git ./overleaf-toolkit\n")),(0,l.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u8ba9\u6211\u4eec\u8fdb\u5165\u6b64\u76ee\u5f55\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ./overleaf-toolkit\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5bf9\u4e8e\u672c\u6587\u7ae0\u7684\u5176\u4f59\u90e8\u5206\uff0c\u6211\u4eec\u5c06\u5047\u5b9a\u4f60\u5c06\u4ece\u6b64\u76ee\u5f55\u8fd0\u884c\u6240\u6709\u540e\u7eed\u547d\u4ee4\u3002",(0,l.kt)("sup",{parentName:"p",id:"fnref-2-9a228f"},(0,l.kt)("a",{parentName:"sup",href:"#fn-2-9a228f",className:"footnote-ref"},"2")))),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316\u914d\u7f6e"},"\u521d\u59cb\u5316\u914d\u7f6e"),(0,l.kt)("p",null,"\u901a\u8fc7\u8fd0\u884c\u4ee5\u4e0b\u547d\u4ee4\u521b\u5efa\u672c\u5730\u914d\u7f6e\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/init\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"bin\u662f\u8be5\u5de5\u5177\u5305\u63d0\u4f9b\u7684\u4e00\u7ec4\u811a\u672c\uff0c\u8fd9\u4e9b\u811a\u672c\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e3a\u4f60\u5904\u7406\u5927\u90e8\u5206\u7684\u7ec6\u8282\u3002"),(0,l.kt)("p",{parentName:"blockquote"},"\u67e5\u770b\u914d\u7f6e\u76ee\u5f55\u4e0b\u7684\u5185\u5bb9config/")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"ls config\n")),(0,l.kt)("p",null,"config\u76ee\u5f55\u4e0b\u4f1a\u751f\u6210\u4ee5\u4e0b\u4e09\u4e2a\u6587\u4ef6\uff1a\n",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf.rc "),(0,l.kt)("br",{parentName:"p"}),"\n","",(0,l.kt)("inlineCode",{parentName:"p"},"variables.env "),"\n",(0,l.kt)("inlineCode",{parentName:"p"},"version")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e09\u4e2a\u914d\u7f6e\u6587\u4ef6\u7684\u4f5c\u7528\uff1a"),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"overleaf.rc\uff1a\u9876\u7ea7\u914d\u7f6e\u6587\u4ef6 ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"variables.env\uff1a\u52a0\u8f7d\u5230 docker \u5bb9\u5668\u4e2d\u7684\u73af\u5883\u53d8\u91cf ")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"version\uff1a\u4f7f\u7528\u7684 docker \u955c\u50cf\u7248\u672c"),(0,l.kt)("p",{parentName:"li"},"\u914d\u7f6e\u5185\u5bb9\u53ef\u6839\u636e\u540e\u7eed\u9700\u6c42\u4fee\u6539")))),(0,l.kt)("p",null,"\u5176\u4e2d\u9700\u8981\u6ce8\u610f\u7684\u662f\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf.rc "),"  \u6587\u4ef6\u4e2d\uff0c==\u53ef\u4ee5\u4fee\u6539\u5176\u670d\u52a1\u7aef\u53e3==\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-txt"},"# Sharelatex container\nSHARELATEX_DATA_PATH=data/sharelatex\nSERVER_PRO=false\nSHARELATEX_LISTEN_IP=127.0.0.1\nSHARELATEX_PORT=9000 #\u5c06\u8be5\u884c\u4fee\u6539\u4e3a\u4f60\u6240\u9700\u670d\u52a1\u7aef\u53e3\uff0c\u9ed8\u8ba4\u4e3a80\u7aef\u53e3\n")),(0,l.kt)("h3",{id:"\u4fee\u6539\u542f\u52a8\u955c\u50cf"},"\u4fee\u6539\u542f\u52a8\u955c\u50cf"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u8003\u8651\u5230\u5b98\u65b9\u63d0\u4f9b\u7684\u955c\u50cf\u662f\u4e0d\u5b8c\u5168texlive\u7a0b\u5e8f\u53ca\u4e0d\u652f\u6301\u4e2d\u6587\u5b57\u4f53\uff0c\u5728\u8fd9\u91cc\u6211\u57fa\u4e8e\u5b98\u65b9\u5f00\u6e90\u7684 overleaf \u955c\u50cf\u642d\u5efa\u4e86\u81ea\u5df1\u7684\u955c\u50cf\uff0cwrm244/sharelatex:with-texlive-full\uff0c\u5982\u679c\u5bf9 docker \u6bd4\u8f83\u719f\u6089\u7684\u540c\u5b66\u53ef\u4ee5\u8df3\u8fc7\u8be5\u6b65\u9aa4\u81ea\u884c\u62c9\u53d6\u5b98\u65b9\u955c\u50cf\u7136\u540e\u518d\u8fdb\u884c\u914d\u7f6e\uff0c\u5f53\u7136\u5b98\u65b9\u955c\u50cf\u4e0d\u5305\u542b\u4e2d\u6587\u5b57\u4f53\u652f\u6301\uff0c\u53ef",(0,l.kt)("a",{parentName:"p",href:"https://yxnchen.github.io/technique/Docker%E9%83%A8%E7%BD%B2ShareLaTeX%E5%B9%B6%E7%AE%80%E5%8D%95%E9%85%8D%E7%BD%AE%E4%B8%AD%E6%96%87%E7%8E%AF%E5%A2%83/#%E5%AE%89%E8%A3%85%E5%B9%B6%E9%85%8D%E7%BD%AEShareLaTeX"},"\u53c2\u8003\u6587\u7ae0"),"\u914d\u7f6e\u3002")),(0,l.kt)("p",null,"\u8fdb\u5165",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf-toolkit"),"\u6587\u4ef6\u5939\u4e0b\u7684 ",(0,l.kt)("inlineCode",{parentName:"p"},"lib")," \u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd lib\n")),(0,l.kt)("p",null,"\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"docker-compose.base.yml"),"\u6587\u4ef6\u4ee5\u4e0b\u5185\u5bb9"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"vim docker-compose.base.yml\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6e90\u6587\u4ef6\u7684",(0,l.kt)("inlineCode",{parentName:"p"},'image: "${IMAGE}"')," \u6539\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"image: wrm244/sharelatex:with-texlive-full")," \u6539\u8fd9\u4e00\u884c\u5373\u53ef\uff0c\u4ee5\u4e0b\u4e3a\u4fee\u6539\u540e\u6587\u4ef6\u5185\u5bb9")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},'---\nversion: \'2.2\'\nservices:\n\n    sharelatex:\n        restart: always\n        image: wrm244/sharelatex:with-texlive-full\n        container_name: sharelatex\n        volumes:\n            - "${SHARELATEX_DATA_PATH}:/var/lib/sharelatex"\n        ports:\n            - "${SHARELATEX_LISTEN_IP:-127.0.0.1}:${SHARELATEX_PORT:-80}:80"\n        environment:\n          SHARELATEX_MONGO_URL: "${MONGO_URL}"\n          SHARELATEX_REDIS_HOST: "${REDIS_HOST}"\n          REDIS_HOST: "${REDIS_HOST}"\n        env_file: ../config/variables.env\n')),(0,l.kt)("p",null,"\u4fdd\u5b58\u9000\u51fa\u8be5\u6587\u4ef6\uff0c\u91cd\u65b0\u56de\u5230\u4e0a\u4e00\u7ea7",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf-toolkit"),"\u76ee\u5f55"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"cd ..\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e5f\u53ef\u4ee5\u4fee\u6539",(0,l.kt)("inlineCode",{parentName:"p"},"config"),"\u76ee\u5f55\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf.rc"),"\u914d\u7f6e\u6587\u4ef6\u8d4b\u503c\u4e3a",(0,l.kt)("inlineCode",{parentName:"p"},"SHARELATEX_IMAGE=wrm244/sharelatex:with-texlive-full"))),(0,l.kt)("h2",{id:"\u542f\u52a8\u670d\u52a1"},"\u542f\u52a8\u670d\u52a1"),(0,l.kt)("p",null,"\u8ba9\u6211\u4eec\u542f\u52a8 docker \u670d\u52a1\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"bin/up\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"bin\u662f\u8be5\u5de5\u5177\u5305\u63d0\u4f9b\u7684\u4e00\u7ec4\u811a\u672c\uff0c\u8fd9\u4e9b\u811a\u672c\u5c01\u88c5\u8d77\u6765\uff0c\u5e76\u4e3a\u4f60\u5904\u7406\u5927\u90e8\u5206\u7684\u7ec6\u8282\u3002")),(0,l.kt)("p",null,"\u73b0\u5728\u4f1a\u770b\u5230\u6765\u81ea docker \u5bb9\u5668\u7684\u4e00\u4e9b\u65e5\u5fd7\u8f93\u51fa\uff0c\u8868\u793a\u6b63\u5728\u62c9\u53d6\u955c\u50cf\uff0c\u540e\u7eed\u4f1a\u81ea\u52a8\u8fd0\u884c\u5bb9\u5668\u3002\u5982\u679c\u5728\u7ec8\u7aef\u4e0a\u6309\u4e0b",(0,l.kt)("kbd",null,"Ctrl"),"+",(0,l.kt)("kbd",null,"c"),"\uff0c\u670d\u52a1\u5c06\u5173\u95ed\u3002\u60a8\u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4",(0,l.kt)("inlineCode",{parentName:"p"},"bin/start"),"\u6765\u91cd\u65b0\u542f\u52a8\u5b83\u4eec\uff08\u4e0d\u9644\u52a0\u5230\u65e5\u5fd7\u8f93\u51fa\uff09\u3002"),(0,l.kt)("h2",{id:"\u521b\u5efa\u7ba1\u7406\u5458\u5e10\u6237"},"\u521b\u5efa\u7ba1\u7406\u5458\u5e10\u6237"),(0,l.kt)("p",null,"\u5728\u6d4f\u89c8\u5668\u4e2d\uff0c\u6253\u5f00 http://localhost:\u670d\u52a1\u7aef\u53e3/launchpad \u540e\u4f1a\u770b\u5230\u6ce8\u518c\u754c\u9762\u3002 \u4f7f\u7528\u8981\u7528\u4f5c\u7ba1\u7406\u5458\u5e10\u6237\u7684\u51ed\u636e\u586b\u5199\uff0c\u7136\u540e\u70b9\u51fb\u201c\u6ce8\u518c\u201d\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u670d\u52a1\u7aef\u53e3\u9ed8\u8ba4\u4e3a80\uff0c\u5373http://localhost/launchpad \u7f3a\u7701\u6761\u4ef6\u4e0b\u5373\u53ef\u8bbf\u95ee\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"./config"),"\u76ee\u5f55\u4e0b",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf.rc"),"\u6587\u4ef6\u4e2d\u4fee\u6539\u6240\u9700\u7aef\u53e3\u3002")),(0,l.kt)("p",null,"\u7136\u540e\u5355\u51fb\u94fe\u63a5\u4ee5\u8f6c\u5230\u767b\u5f55\u9875\u9762\uff08http://localhost:\u670d\u52a1\u7aef\u53e3/login\uff09\u3002 \u767b\u5f55\u540e\uff0c\u4f60\u5c06\u88ab\u5e26\u5230\u6b22\u8fce\u9875\u9762\u3002"),(0,l.kt)("p",null,"\u5355\u51fb\u9875\u9762\u5e95\u90e8\u7684\u7eff\u8272\u6309\u94ae\u4ee5\u5f00\u59cb\u4f7f\u7528 Overleaf\u3002\n",(0,l.kt)("img",{src:a(2291).Z,width:"2182",height:"1264"})),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u5728Overleaf\u5b9e\u73b0\u4e2d\u6587\u8f93\u51fa\u9700\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"XeLaTex"),"\u7f16\u8bd1\uff0c\u5728\u9875\u9762\u53f3\u4e0a\u89d2\u53ef\u8fdb\u884c\u8bbe\u7f6e")),(0,l.kt)("p",null,(0,l.kt)("img",{src:a(60038).Z,width:"2549",height:"1362"})),(0,l.kt)("h1",{id:"\u53cd\u5411\u4ee3\u7406\u57df\u540d\u670d\u52a1"},"\u53cd\u5411\u4ee3\u7406\u57df\u540d\u670d\u52a1"),(0,l.kt)("p",null,"\u6709\u4e9b\u540c\u5b66\u6709\u57df\u540d\u8bbf\u95ee\u9700\u6c42\uff0c\u5728",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf-toolkit"),"\u5de5\u5177\u5305\u4e2d\u81ea\u7136\u63d0\u4f9b",(0,l.kt)("inlineCode",{parentName:"p"},"nginx"),"\u670d\u52a1\uff0c\u9ed8\u8ba4\u662f\u5173\u95ed\u7684\u3002\u53ef\u8bbf\u95ee\u8be5",(0,l.kt)("a",{parentName:"p",href:"https://github.com/overleaf/toolkit/blob/master/doc/quick-start-guide.md"},"\u6307\u5bfc\u6587\u6863"),"\u8fdb\u884c\u914d\u7f6e\u3002\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u81ea\u884c\u642d\u5efa\u4ee3\u7406\u670d\u52a1\uff0c\u8fd9\u91cc\u4e0d\u518d\u8d58\u8ff0\u3002"),(0,l.kt)("h1",{id:"\u8fc1\u79fb\u4e0e\u5907\u4efd"},"\u8fc1\u79fb\u4e0e\u5907\u4efd"),(0,l.kt)("p",null,"\u5982\u679c\u662f\u91c7\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf-toolkit"),"\u5de5\u5177\u5305\u8fdb\u884c\u90e8\u7f72\u670d\u52a1\u7684\u8bdd\uff0c\u5728\u8be5",(0,l.kt)("inlineCode",{parentName:"p"},"overleaf-toolkit"),"\u76ee\u5f55\u4e0b\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"data"),"\u6587\u4ef6\u5939\u4f1a\u6620\u5c04docker\u5bb9\u5668\u7684\u6587\u4ef6\uff0c\u5305\u62ec",(0,l.kt)("inlineCode",{parentName:"p"},"sharelatex")," ",(0,l.kt)("inlineCode",{parentName:"p"},"redis")," ",(0,l.kt)("inlineCode",{parentName:"p"},"mongo")," \u6587\u4ef6\u5939\uff0c\u5907\u4efd\u8fd9\u51e0\u4e2a\u6587\u4ef6\u5939\u5373\u53ef\uff0c\u5728\u8fc1\u79fb\u7684\u65f6\u5019\uff0c\u542f\u52a8\u5bb9\u5668\u524d\u5148\u628a\u6587\u4ef6\u590d\u5236\u5230",(0,l.kt)("inlineCode",{parentName:"p"},"data"),"\u76ee\u5f55\u4e0b\u5373\u53ef\u6062\u590d\u6570\u636e\u3002"),(0,l.kt)("h1",{id:"\u66f4\u591a"},"\u66f4\u591a"),(0,l.kt)("p",null,"\u6587\u7ae0\u91c7\u7528\u7684docker\u955c\u50cf\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"wrm244/sharelatex:with-texlive-full"),"\u5305\u542b\u4e86\u4ee5\u4e0b\u4e2d\u6587\u5b57\u4f53\uff0c\u5177\u4f53\u5728\u8def\u5f84",(0,l.kt)("inlineCode",{parentName:"p"},"/usr/share/fonts/chinese"),"\u4e0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"AGENCYB.TTF                  FRAMDCN.TTF                        PER_____.TTF\nAGENCYR.TTF                  framdit.ttf                        phagspab.ttf\nALGER.TTF                    framd.ttf                          phagspa.ttf\nANTQUABI.TTF                 FrederickatheGreat-Regular.ttf     PLAYBILL.TTF\nANTQUAB.TTF                  FredokaOne-Regular.ttf             PoiretOne-Regular.ttf\nANTQUAI.TTF                  FREESCPT.TTF                       POORICH.TTF\narialbd.ttf                  FRSCRIPT.TTF                       PRISTINA.TTF\narialbi.ttf                  FTLTLT.TTF                         RAGE.TTF\nariali.ttf                   FZSTK.TTF                          Raleway-Bold.ttf\nARIALNBI.TTF                 FZXBSJW.TTF                        Raleway-Regular.ttf\nARIALNB.TTF                  FZYTK.TTF                          RAVIE.TTF\nARIALNI.TTF                  Gabriola.ttf                       REFSAN.TTF\nARIALN.TTF                   gadugib.ttf                        REFSPCL.TTF\narial.ttf                    gadugi.ttf                         Roboto-BoldItalic.ttf\nariblk.ttf                   GARABD.TTF                         Roboto-Bold.ttf\nARLRDBD.TTF                  GARAIT.TTF                         RobotoCondensed-BoldItalic.ttf\nArvo-BoldItalic.ttf          GARA.TTF                           RobotoCondensed-Bold.ttf\nArvo-Bold.ttf                georgiab.ttf                       RobotoCondensed-Italic.ttf\nArvo-Italic.ttf              georgiai.ttf                       RobotoCondensed-Regular.ttf\nArvo-Regular.ttf             georgia.ttf                        Roboto-Italic.ttf\nbahnschrift.ttf              georgiaz.ttf                       Roboto-Regular.ttf\nBarlowCondensed-Regular.ttf  GIGI.TTF                           RobotoSlab-Bold.ttf\nBarrio-Regular.ttf           GILBI___.TTF                       RobotoSlab-Regular.ttf\nBASKVILL.TTF                 GILB____.TTF                       ROCCB___.TTF\nBAUHS93.TTF                  GILC____.TTF                       ROCC____.TTF\nBELLB.TTF                    GILI____.TTF                       ROCKBI.TTF\nBELLI.TTF                    GILLUBCD.TTF                       ROCKB.TTF\nBELL.TTF                     GILSANUB.TTF                       ROCKEB.TTF\nBERNHC.TTF                   GIL_____.TTF                       ROCKI.TTF\nBKANT.TTF                    GLECB.TTF                          ROCK.TTF\nBOD_BI.TTF                   GlobalMonospace.CompositeFont      sarasa-mono-k-bolditalic.ttf\nBOD_BLAI.TTF                 GlobalSansSerif.CompositeFont      sarasa-mono-k-bold.ttf\nBOD_BLAR.TTF                 GlobalSerif.CompositeFont          sarasa-mono-k-extralightitalic.ttf\nBOD_B.TTF                    GlobalUserInterface.CompositeFont  sarasa-mono-k-extralight.ttf\nBOD_CBI.TTF                  GLSNECB.TTF                        sarasa-mono-k-italic.ttf\nBOD_CB.TTF                   GOTHICBI.TTF                       sarasa-mono-k-lightitalic.ttf\nBOD_CI.TTF                   GOTHICB.TTF                        sarasa-mono-k-light.ttf\nBOD_CR.TTF                   GOTHICI.TTF                        sarasa-mono-k-regular.ttf\nBOD_I.TTF                    GOTHIC.TTF                         sarasa-mono-k-semibolditalic.ttf\nBOD_PSTC.TTF                 GOUDOSB.TTF                        sarasa-mono-k-semibold.ttf\nBOD_R.TTF                    GOUDOSI.TTF                        SCHLBKBI.TTF\nBOOKOSBI.TTF                 GOUDOS.TTF                         SCHLBKB.TTF\nBOOKOSB.TTF                  GOUDYSTO.TTF                       SCHLBKI.TTF\nBOOKOSI.TTF                  HARLOWSI.TTF                       SCRIPTBL.TTF\nBOOKOS.TTF                   HARNGTON.TTF                       segmdl2.ttf\nBRADHITC.TTF                 HATTEN.TTF                         segoeprb.ttf\nBRITANIC.TTF                 himalaya.ttf                       segoepr.ttf\nBRLNSB.TTF                   holomdl2.ttf                       segoescb.ttf\nBRLNSDB.TTF                  HTOWERTI.TTF                       segoesc.ttf\nBRLNSR.TTF                   HTOWERT.TTF                        segoeuib.ttf\nBROADW.TTF                   impact.ttf                         segoeuii.ttf\nBRUSHSCI.TTF                 IMPRISHA.TTF                       segoeuil.ttf\nBSSYM7.TTF                   IndieFlower.ttf                    segoeuisl.ttf\nBubblegumSans-Regular.ttf    INFROMAN.TTF                       segoeui.ttf\nCabinSketch-Bold.ttf         Inkfree.ttf                        segoeuiz.ttf\nCabinSketch-Regular.ttf      ITCBLKAD.TTF                       seguibli.ttf\ncalibrib.ttf                 ITCEDSCR.TTF                       seguibl.ttf\ncalibrii.ttf                 ITCKRIST.TTF                       seguiemj.ttf\ncalibrili.ttf                javatext.ttf                       seguihis.ttf\ncalibril.ttf                 JOKERMAN.TTF                       seguili.ttf\ncalibri.ttf                  JUICE___.TTF                       seguisbi.ttf\ncalibriz.ttf                 JuliusSansOne-Regular.ttf          seguisb.ttf\nCALIFB.TTF                   KUNSTLER.TTF                       seguisli.ttf\nCALIFI.TTF                   l_10646.ttf                        seguisym.ttf\nCALIFR.TTF                   LATINWD.TTF                        ShadowsIntoLight.ttf\nCALISTBI.TTF                 LBRITEDI.TTF                       SHOWG.TTF\nCALISTB.TTF                  LBRITED.TTF                        simfang.ttf\nCALISTI.TTF                  LBRITEI.TTF                        simhei.ttf\nCALIST.TTF                   LBRITE.TTF                         simkai.ttf\ncambriab.ttf                 LCALLIG.TTF                        SIMLI.TTF\ncambriai.ttf                 LeelaUIb.ttf                       simsunb.ttf\ncambria.ttc                  LEELAWAD.TTF                       simsun.ttc\ncambriaz.ttf                 LEELAWDB.TTF                       SIMYOU.TTF\nCandarab.ttf                 LeelawUI.ttf                       SitkaB.ttc\nCandarai.ttf                 LeelUIsl.ttf                       SitkaI.ttc\nCandarali.ttf                LFAXDI.TTF                         Sitka.ttc\nCandaral.ttf                 LFAXD.TTF                          SitkaZ.ttc\nCandara.ttf                  LFAXI.TTF                          SNAP____.TTF\nCandaraz.ttf                 LFAX.TTF                           StaticCache.dat\nCASTELAR.TTF                 LHANDW.TTF                         STCAIYUN.TTF\nCENSCBK.TTF                  Lobster-Regular.ttf                STENCIL.TTF\nCENTAUR.TTF                  LSANSDI.TTF                        STFANGSO.TTF\nCENTURY.TTF                  LSANSD.TTF                         STHUPO.TTF\nCHILLER.TTF                  LSANSI.TTF                         STKAITI.TTF\nCOLONNA.TTF                  LSANS.TTF                          STLITI.TTF\nComfortaa-Bold.ttf           LTYPEBO.TTF                        STSONG.TTF\nComfortaa-Regular.ttf        LTYPEB.TTF                         STXIHEI.TTF\ncomicbd.ttf                  LTYPEO.TTF                         STXINGKA.TTF\ncomici.ttf                   LTYPE.TTF                          STXINWEI.TTF\ncomic.ttf                    lucon.ttf                          STZHONGS.TTF\ncomicz.ttf                   MAGNETOB.TTF                       Swkeys1.ttf\nconsolab.ttf                 MAIAN.TTF                          sylfaen.ttf\nconsolai.ttf                 malgunbd.ttf                       symbol.ttf\nconsola.ttf                  malgunsl.ttf                       tahomabd.ttf\nconsolaz.ttf                 malgun.ttf                         tahoma.ttf\nconstanb.ttf                 marlett.ttf                        taileb.ttf\nconstani.ttf                 MATURASC.TTF                       taile.ttf\nconstan.ttf                  Megrim.ttf                         TCBI____.TTF\nconstanz.ttf                 micross.ttf                        TCB_____.TTF\nCOOPBL.TTF                   mingliub.ttc                       TCCB____.TTF\nCOPRGTB.TTF                  MISTRAL.TTF                        TCCEB.TTF\nCOPRGTL.TTF                  mmrtextb.ttf                       TCCM____.TTF\ncorbelb.ttf                  mmrtext.ttf                        TCMI____.TTF\ncorbeli.ttf                  MOD20.TTF                          TCM_____.TTF\ncorbelli.ttf                 monbaiti.ttf                       TEMPSITC.TTF\ncorbell.ttf                  Monoton-Regular.ttf                timesbd.ttf\ncorbel.ttf                   msgothic.ttc                       timesbi.ttf\ncorbelz.ttf                  msjhbd.ttc                         timesi.ttf\ncourbd.ttf                   msjhl.ttc                          times.ttf\ncourbi.ttf                   msjh.ttc                           trebucbd.ttf\ncouri.ttf                    MSUIGHUB.TTF                       trebucbi.ttf\ncour.ttf                     MSUIGHUR.TTF                       trebucit.ttf\nCURLZ___.TTF                 msyhbd.ttc                         trebuc.ttf\nDelius-Regular.ttf           msyhl.ttc                          VastShadow-Regular.ttf\nDengb.ttf                    msyh.ttc                           verdanab.ttf\nDengl.ttf                    msyi.ttf                           verdanai.ttf\nDeng.ttf                     MTCORSVA.TTF                       verdana.ttf\ndesktop.ini                  MTEXTRA.TTF                        verdanaz.ttf\nDosis-Regular.ttf            mvboli.ttf                         VINERITC.TTF\nDroidSerif-BoldItalic.ttf    NanumPenScript-Regular.ttf         VIVALDII.TTF\nDroidSerif-Bold.ttf          NIAGENG.TTF                        VLADIMIR.TTF\nDroidSerif-Italic.ttf        NIAGSOL.TTF                        webdings.ttf\nDroidSerif.ttf               NirmalaB.ttf                       wingding.ttf\nDShirgy4.ttc                 NirmalaS.ttf                       WINGDNG2.TTF\nDUBAI-BOLD.TTF               Nirmala.ttf                        WINGDNG3.TTF\nDUBAI-LIGHT.TTF              ntailub.ttf                        YuGothB.ttc\nDUBAI-MEDIUM.TTF             ntailu.ttf                         YuGothL.ttc\nDUBAI-REGULAR.TTF            OCRAEXT.TTF                        YuGothM.ttc\nebrimabd.ttf                 OLDENGL.TTF                        YuGothR.ttc\nebrima.ttf                   ONYX.TTF                           ZillaSlab-Bold.ttf\nELEPHNTI.TTF                 OpenSans-BoldItalic.ttf            ZillaSlab-Regular.ttf\nELEPHNT.TTF                  OpenSans-Bold.ttf                  \u4e66\u6cd5\u5bb6\u884c\u6977\u4f53.TTF\nENGR.TTF                     OpenSans-Italic.ttf                \u4eff\u5b8b_GB2312.ttf\nERASBD.TTF                   OpenSans-Regular.ttf               \u5357\u6784\u5468\u6d0b\u5b57\u4f53.ttf\nERASDEMI.TTF                 OpenSans-Semibold.ttf              \u5357\u6784\u65e0\u8fb9.ttf\nERASLGHT.TTF                 OUTLOOK.TTF                        \u5357\u6784\u65e5\u7cfb\u6977\u884c.ttf\nERASMD.TTF                   palabi.ttf                         \u5357\u6784\u7384\u9053\u786c\u7b14.ttf\nFELIXTI.TTF                  palab.ttf                          \u5357\u6784\u8bd7\u97f5\u65b0\u96b6.ttf\nfms_metadata.xml             palai.ttf                          \u5357\u6784\u90b1\u89c1\u884c\u4e66.ttf\nfonts.dir                    pala.ttf                           \u5357\u6784\u949f\u58f0\u884c\u4e66.ttf\nfonts.scale                  PALSCRI.TTF                        \u65b9\u6b63\u5c0f\u6807\u5b8b\u7b80\u4f53_0.ttf\nFORTE.TTF                    Pangolin-Regular.ttf               \u65e5\u6587\u6bdb\u7b14\u884c\u4e66.ttf\nFRABKIT.TTF                  PAPYRUS.TTF                        \u6977\u4f53_GB2312_0.ttf\nFRABK.TTF                    PARCHM.TTF                         \u6977\u4f53_GB2312.ttf\nFRADMCN.TTF                  PERBI___.TTF                       \u7279\u592a\u884c\u66f8.ttc\nFRADMIT.TTF                  PERB____.TTF                       \u8499\u7eb3\u7b80\u884c\u4e66.otf\nFRADM.TTF                    PERI____.TTF                       \u8499\u7eb3\u7b80\u884c\u6977.otf\nFRAHVIT.TTF                  PERTIBD.TTF\nFRAHV.TTF                    PERTILI.TTF\n")),(0,l.kt)("div",{className:"footnotes"},(0,l.kt)("hr",{parentName:"div"}),(0,l.kt)("ol",{parentName:"div"},(0,l.kt)("li",{parentName:"ol",id:"fn-2-9a228f"},(0,l.kt)("a",{parentName:"li",href:"https://github.com/overleaf/toolkit/blob/master/doc/quick-start-guide.md"},"overleaf-toolkit-quick-start-guide"),(0,l.kt)("a",{parentName:"li",href:"#fnref-2-9a228f",className:"footnote-backref"},"\u21a9")))))}u.isMDXComponent=!0},3905:function(t,e,a){a.d(e,{Zo:function(){return c},kt:function(){return u}});var n=a(67294);function o(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function r(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){o(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function T(t,e){if(null==t)return{};var a,n,o=function(t,e){if(null==t)return{};var a,n,o={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(o[a]=t[a]);return o}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(o[a]=t[a])}return o}var i=n.createContext({}),f=function(t){var e=n.useContext(i),a=e;return t&&(a="function"==typeof t?t(e):r(r({},e),t)),a},c=function(t){var e=f(t.components);return n.createElement(i.Provider,{value:e},t.children)},p="mdxType",s={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},m=n.forwardRef((function(t,e){var a=t.components,o=t.mdxType,l=t.originalType,i=t.parentName,c=T(t,["components","mdxType","originalType","parentName"]),p=f(a),m=o,u=p["".concat(i,".").concat(m)]||p[m]||s[m]||l;return a?n.createElement(u,r(r({ref:e},c),{},{components:a})):n.createElement(u,r({ref:e},c))}));function u(t,e){var a=arguments,o=e&&e.mdxType;if("string"==typeof t||o){var l=a.length,r=new Array(l);r[0]=m;var T={};for(var i in e)hasOwnProperty.call(e,i)&&(T[i]=e[i]);T.originalType=t,T[p]="string"==typeof t?t:o,r[1]=T;for(var f=2;f<l;f++)r[f]=a[f];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},15532:function(t,e,a){e.Z=a.p+"assets/images/image-20230424111833-94d6ee30827f2612fd58e138eae69dbb.png"},2291:function(t,e,a){e.Z=a.p+"assets/images/image-20230424111857-3bd7c37bb53d898bdf34161e8af29b0a.png"},60038:function(t,e,a){e.Z=a.p+"assets/images/image-20230424111912-ad2a07982e1b056e29ed5f0d6bdbdff7.png"}}]);