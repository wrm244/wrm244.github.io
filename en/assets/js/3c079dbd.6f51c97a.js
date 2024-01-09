"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6506],{45414:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(67294),a=n(86010),u={tabItem:"tabItem_Ymn6"};function l(e){var t=e.children,n=e.hidden,l=e.className;return r.createElement("div",{role:"tabpanel",className:(0,a.Z)(u.tabItem,l),hidden:n},t)}},16091:function(e,t,n){n.d(t,{Z:function(){return N}});var r=n(83117),a=n(67294),u=n(86010),l=n(51085),o=n(76775),i=n(61994),s=n(74879),c=n(9954);function p(e){return function(e){var t,n;return null!=(t=null==(n=a.Children.map(e,(function(e){if(!e||(0,a.isValidElement)(e)&&(t=e.props)&&"object"==typeof t&&"value"in t)return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}function d(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:p(n);return function(e){var t=(0,s.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function g(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId,u=(0,o.k6)(),l=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:r});return[(0,i._X)(l),(0,a.useCallback)((function(e){if(l){var t=new URLSearchParams(u.location.search);t.set(l,e),u.replace(Object.assign({},u.location,{search:t.toString()}))}}),[l,u])]}function f(e){var t,n,r,u,l=e.defaultValue,o=e.queryString,i=void 0!==o&&o,s=e.groupId,p=d(e),f=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!g({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),h=f[0],v=f[1],b=m({queryString:i,groupId:s}),y=b[0],k=b[1],N=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:s}.groupId),n=(0,c.Nk)(t),r=n[0],u=n[1],[r,(0,a.useCallback)((function(e){t&&u.set(e)}),[t,u])]),w=N[0],E=N[1],D=function(){var e=null!=y?y:w;return g({value:e,tabValues:p})?e:null}();return(0,a.useLayoutEffect)((function(){D&&v(D)}),[D]),{selectedValue:h,selectValue:(0,a.useCallback)((function(e){if(!g({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);v(e),k(e),E(e)}),[k,E,p]),tabValues:p}}var h=n(35074),v={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){var t=e.className,n=e.block,o=e.selectedValue,i=e.selectValue,s=e.tabValues,c=[],p=(0,l.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=c.indexOf(t),r=s[n].value;r!==o&&(p(t),i(r))},g=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var r,a=c.indexOf(e.currentTarget)+1;n=null!=(r=c[a])?r:c[0];break;case"ArrowLeft":var u,l=c.indexOf(e.currentTarget)-1;n=null!=(u=c[l])?u:c[c.length-1]}null==(t=n)||t.focus()};return a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":n},t)},s.map((function(e){var t=e.value,n=e.label,l=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:o===t?0:-1,"aria-selected":o===t,key:t,ref:function(e){return c.push(e)},onKeyDown:g,onClick:d},l,{className:(0,u.Z)("tabs__item",v.tabItem,null==l?void 0:l.className,{"tabs__item--active":o===t})}),null!=n?n:t)})))}function y(e){var t=e.lazy,n=e.children,r=e.selectedValue,u=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=u.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return a.createElement("div",{className:"margin-top--md"},u.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})})))}function k(e){var t=f(e);return a.createElement("div",{className:(0,u.Z)("tabs-container",v.tabList)},a.createElement(b,(0,r.Z)({},e,t)),a.createElement(y,(0,r.Z)({},e,t)))}function N(e){var t=(0,h.Z)();return a.createElement(k,(0,r.Z)({key:String(t)},e))}},59159:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(67294),a="highlight_L1Iz";var u=function(e){var t=e.children;return r.createElement("span",{className:a},t)}},9970:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return m}});var r=n(83117),a=n(80102),u=(n(67294),n(3905)),l=n(59159),o=n(16091),i=n(45414),s=["components"],c={id:"Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",slug:"/Docusaurus-Hygen",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",date:"2023/03/16",authors:"RiverMountain",last_update:{date:"2023/03/16"},keywords:["docusaurus","hygen"]},p=void 0,d={unversionedId:"blog/Docusaurus/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",id:"blog/Docusaurus/Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",description:"Docusaurus \u76ee\u524d\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u6837\u4e00\u79cd\u5feb\u901f\u65b0\u5efa\u6587\u7ae0\u7684\u65b9\u6cd5\uff0c\u4f46 Markdown \u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u524d\u8a00\u5b57\u6bb5\u6216 import \u4e00\u4e9b\u7ec4\u4ef6\uff0c\u6570\u636e\u91cd\u590d\u6027\u7684\u64cd\u4f5c\uff0c\u6bcf\u6b21\u5199\u65b0\u6587\u7ae0\u7684\u65f6\u5019\u90fd\u8981\u624b\u52a8\u7f16\u5199\u5934\u90e8\u5b57\u6bb5\u5185\u5bb9\u6216\u8005\u590d\u5236\u7c98\u8d34\u6211\u5acc\u6709\u70b9\u9ebb\u70e6\uff0c\u4e8e\u662f\u5f15\u5165\u4e86 Hygen \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u3001\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u4ee3\u7801\u751f\u6210\u5668\uff0c\u5176\u7528\u9014\u662f\u5e2e\u52a9\u5f00\u53d1\u8005\u81ea\u52a8\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u7684\u5de5\u5177\uff0c\u65e8\u5728\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002",source:"@site/docs/blog/Docusaurus/\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f.md",sourceDirName:"blog/Docusaurus",slug:"/Docusaurus-Hygen",permalink:"/en/docs/Docusaurus-Hygen",draft:!1,tags:[],version:"current",frontMatter:{id:"Docusaurus-\u4f7f\u7528Hygen\u521b\u5efa\u6587\u7ae0\u6a21\u677f",slug:"/Docusaurus-Hygen",title:"\u4f7f\u7528 Hygen \u521b\u5efa\u6587\u7ae0\u6a21\u677f",date:"2023/03/16",authors:"RiverMountain",last_update:{date:"2023/03/16"},keywords:["docusaurus","hygen"]},sidebar:"blog",previous:{title:"\u6587\u6863\u7f16\u8f91\u6307\u5357",permalink:"/en/docs/Docusaurus-edit"},next:{title:"docs\u6a21\u677f\u793a\u4f8b",permalink:"/en/docs/docs-template"}},g={},m=[{value:"Start Hygen",id:"start-hygen",level:2},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:3},{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",level:3},{value:"\u521b\u5efa\u6a21\u677f",id:"\u521b\u5efa\u6a21\u677f",level:3},{value:"\u81ea\u5b9a\u4e49\u6a21\u677f",id:"\u81ea\u5b9a\u4e49\u6a21\u677f",level:3},{value:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0",id:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0",level:3},{value:"\u53c2\u8003\u4e0e\u81f4\u8c22",id:"\u53c2\u8003\u4e0e\u81f4\u8c22",level:2}],f={toc:m},h="wrapper";function v(e){var t=e.components,c=(0,a.Z)(e,s);return(0,u.kt)(h,(0,r.Z)({},f,c,{components:t,mdxType:"MDXLayout"}),(0,u.kt)("p",null,"Docusaurus \u76ee\u524d\u5e76\u6ca1\u6709\u63d0\u4f9b\u8fd9\u6837\u4e00\u79cd\u5feb\u901f\u65b0\u5efa\u6587\u7ae0\u7684\u65b9\u6cd5\uff0c\u4f46 Markdown \u9700\u8981\u8bbe\u7f6e\u4e00\u4e9b\u524d\u8a00\u5b57\u6bb5\u6216 import \u4e00\u4e9b\u7ec4\u4ef6\uff0c\u6570\u636e\u91cd\u590d\u6027\u7684\u64cd\u4f5c\uff0c\u6bcf\u6b21\u5199\u65b0\u6587\u7ae0\u7684\u65f6\u5019\u90fd\u8981\u624b\u52a8\u7f16\u5199\u5934\u90e8\u5b57\u6bb5\u5185\u5bb9\u6216\u8005\u590d\u5236\u7c98\u8d34\u6211\u5acc\u6709\u70b9\u9ebb\u70e6\uff0c\u4e8e\u662f\u5f15\u5165\u4e86 ",(0,u.kt)(l.Z,{mdxType:"HighLight"},"Hygen")," \u6765\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u8fd9\u662f\u4e00\u4e2a\u7b80\u5355\u3001\u5feb\u901f\u3001\u53ef\u6269\u5c55\u7684\u4ee3\u7801\u751f\u6210\u5668\uff0c\u5176\u7528\u9014\u662f",(0,u.kt)("strong",{parentName:"p"},"\u5e2e\u52a9\u5f00\u53d1\u8005\u81ea\u52a8\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u7684\u5de5\u5177\uff0c\u65e8\u5728\u63d0\u9ad8\u5f00\u53d1\u6548\u7387\u3002")),(0,u.kt)("h2",{id:"start-hygen"},"Start Hygen"),(0,u.kt)("h3",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,u.kt)(o.Z,{defaultValue:"npm",values:[{label:"npm",value:"npm"},{label:"yarn",value:"yarn"}],mdxType:"Tabs"},(0,u.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"npm i --save hygen\n"))),(0,u.kt)(i.Z,{value:"yarn",mdxType:"TabItem"},(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"yarn global add hygen\n")))),(0,u.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"cd [\u9879\u76ee\u6839\u76ee\u5f55]\nhygen init self\n")),(0,u.kt)("p",null,"\u521d\u59cb\u5316\u5b8c\u6210\u540e\u4f1a\u5728\u6839\u76ee\u5f55\u4e0b \u751f\u6210 ",(0,u.kt)("strong",{parentName:"p"},"_templates")," \u7684\u6587\u4ef6\u5939\uff0c\u6a21\u677f\u9700\u8981\u5b9a\u4e49\u5728\u8be5\u6587\u4ef6\u5939\u4e0b\uff0c",(0,u.kt)("strong",{parentName:"p"},"generator")," \u662f\u6784\u5efa\u5668\u6587\u4ef6\u5939\uff08\u8be5\u6587\u4ef6\u5939\u4e0d\u80fd\u5220\uff09\uff0c",(0,u.kt)("strong",{parentName:"p"},"ejs.t")," \u6587\u4ef6\u5219\u662f\u6a21\u677f\u6587\u4ef6"),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(67170).Z,width:"373",height:"368"})),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"_templates"))," \u6587\u4ef6\u5939\u4e0b\u7684\u76ee\u5f55\u4f1a\u662f ",(0,u.kt)("strong",{parentName:"p"},"Hygen \u547d\u4ee4\u4e2d\u7684\u4e00\u90e8\u5206"),"\uff0c\u6bd4\u5982\u6211\u7684\u6587\u4ef6\u76ee\u5f55\u4e3a\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"Shake-Blog\n\u251c\u2500\u2500 _templates\n\u2502   \u251c\u2500\u2500 blog\n\u2502   \u2502   \u2514\u2500\u2500 new\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello.ejs.t\n\u2502   \u2514\u2500\u2500 docs\n\u2502   \u2502   \u2514\u2500\u2500 new\n\u2502   \u2502   \u2502   \u2514\u2500\u2500 hello.ejs.t\n")),(0,u.kt)("h3",{id:"\u521b\u5efa\u6a21\u677f"},"\u521b\u5efa\u6a21\u677f"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"hygen generator new [\u6a21\u677f\u540d\u79f0] # \u5982blog\n")),(0,u.kt)("p",null,(0,u.kt)("img",{src:n(70423).Z,width:"398",height:"197"})),(0,u.kt)("h3",{id:"\u81ea\u5b9a\u4e49\u6a21\u677f"},"\u81ea\u5b9a\u4e49\u6a21\u677f"),(0,u.kt)("p",null,(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},"<%=  %>"))," \u53ef\u4ee5\u901a\u8fc7\u547d\u4ee4\u4f20\u9012\u53c2\u6570\uff0c\u4ee5\u53ca\u8d4b\u503c\uff0c\u5982\u6587\u4ef6\u540d\u3001\u8def\u5f84\u3001\u65e5\u671f\u7b49\u81ea\u5b9a\u4e49\u53c2\u6570\uff0c\u4ee5\u4e0b\u662f\u6211\u6839\u636e\u81ea\u5df1\u7684\u9700\u6c42\u6240\u5b9a\u4e49\u7684\u6a21\u677f"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"---\nto: blog/<%= path %>/<%= title %>.md\n---\n---\nslug: /<%= path %>-<%= title %>\ntitle: <%= title %>\nauthor: Shake\ndate: <%= h.getDate() %>\ntags: []\nkeywords: [] \n---\n\n\x3c!-- truncate --\x3e\n")),(0,u.kt)("p",null,"Hygen \u63d0\u4f9b\u4e86\u4e00\u4e9b\u9ed8\u8ba4\u7684\u8f85\u52a9\u51fd\u6570\u548c\u81ea\u5b9a\u4e49\u8f85\u52a9\u51fd\u6570\u7684\u62d3\u5c55\u673a\u5236\uff0c\u53ef\u4ee5\u66f4\u7075\u6d3b\u5730\u4f7f\u7528 Hygen \u6765\u751f\u6210\u6a21\u677f\u3002",(0,u.kt)("br",null),"\u5728\u6a21\u677f\u6587\u4ef6\u4e2d\uff0c\u8f85\u52a9\u51fd\u6570\u548c\u81ea\u5b9a\u4e49\u51fd\u6570\u901a\u8fc7 ",(0,u.kt)(l.Z,{mdxType:"HighLight"},"h")," \u5bf9\u8c61\u6765\u8c03\u7528\uff0c\u5176\u4e2d ",(0,u.kt)(l.Z,{mdxType:"HighLight"},"h.getDate()")," \u5c31\u662f\u8c03\u7528\u4e86\u81ea\u5b9a\u4e49\u7684 ",(0,u.kt)(l.Z,{mdxType:"HighLight"},"getDate")," \u51fd\u6570\u6765\u751f\u6210\u4e00\u4e2a\u65e5\u671f\u683c\u5f0f\u7684\u5b57\u7b26\u4e32\uff0c\u9700\u8981\u518d\u6839\u76ee\u5f55\u4e0b\u521b\u5efa ",(0,u.kt)("strong",{parentName:"p"},(0,u.kt)("inlineCode",{parentName:"strong"},".hygen.js"))," \u6587\u4ef6\uff0c\u5982\u4e0b\uff1a"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-javascript"},"module.exports = {\n  helpers: {\n    getDate: () => {\n      let d = new Date()\n      let year = d.getFullYear();\n      let month = d.getMonth() + 1;\n      let day = d.getDate();\n      return `${year}/${month}/${day}`\n    }\n  }\n}\n")),(0,u.kt)("h3",{id:"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0"},"\u4f7f\u7528\u6a21\u677f\u65b0\u5efa\u6587\u7ae0"),(0,u.kt)("pre",null,(0,u.kt)("code",{parentName:"pre",className:"language-bash"},"hygen blog new --path test/demo --title helloword\n")),(0,u.kt)("p",null,"hygen \u540e\u9762\u7d27\u63a5\u7740\u6a21\u677f\u540d\u79f0\uff0c\u53c2\u6570\uff08path\u3001title\uff09\u7684\u987a\u5e8f\u65e0\u56fa\u5b9a\u8981\u6c42\uff0c\u6267\u884c\u547d\u4ee4\u540e\u5c31\u53ef\u4ee5\u5f88\u65b9\u4fbf\u5730\u6839\u636e\u53c2\u6570\u4e0e\u6a21\u677f\u6765\u751f\u6210\u65b0\u7684 Markdown \u6587\u4ef6\u4e86"),(0,u.kt)("blockquote",null,(0,u.kt)("p",{parentName:"blockquote"},"\u53e6\u5916 Hygen \u8fd8\u6709\u5f88\u5927\u7684\u6269\u5c55\u6027\uff0c\u53ef\u4ee5\u81ea\u884c\u53bb\u9605\u8bfb\u5b98\u65b9\u6587\u6863\u8fdb\u884c\u6269\u5c55")),(0,u.kt)("h2",{id:"\u53c2\u8003\u4e0e\u81f4\u8c22"},"\u53c2\u8003\u4e0e\u81f4\u8c22"),(0,u.kt)("ul",null,(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://www.hygen.io/docs/quick-start"},"Hygen | Quick Start"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://yleave.top/docs/%E5%8D%9A%E5%AE%A2%E5%BB%BA%E8%AE%BE/hygen/"},"\u4f7f\u7528hygen\u5feb\u901f\u521b\u5efa\u6587\u7ae0\u6a21\u677f"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://mzvast.github.io/posts/2020-06-30-hygen"},"\u7528hygen\u4ee3\u7801\u751f\u6210\u5668\u4f18\u5316\u6548\u7387"))),(0,u.kt)("li",{parentName:"ul"},(0,u.kt)("strong",{parentName:"li"},(0,u.kt)("a",{parentName:"strong",href:"https://blog.csdn.net/Joe0217/article/details/103098448"},"hygen \u81ea\u52a8\u5316\u521b\u5efa\u6a21\u677f\u6587\u4ef6\u795e\u5668")))))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function u(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?u(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):u(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),s=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,u=e.originalType,i=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),g=a,m=p["".concat(i,".").concat(g)]||p[g]||d[g]||u;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var u=n.length,l=new Array(u);l[0]=g;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[p]="string"==typeof e?e:a,l[1]=o;for(var s=2;s<u;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},67170:function(e,t,n){t.Z=n.p+"assets/images/image-20230426201447-bae31639f154d50baed2de536e7193fc.png"},70423:function(e,t,n){t.Z=n.p+"assets/images/image-20230426201458-d69cff9c6a2d9d7f4a6afd3b2abc5146.png"}}]);