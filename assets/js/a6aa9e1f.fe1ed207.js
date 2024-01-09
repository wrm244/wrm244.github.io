"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[3089],{30467:function(e,t,a){a.d(t,{Z:function(){return m}});var n=a(67294),l=a(86010),r=a(67176),o=a(21185),c=a(51085),i=a(73768);var s={backToTopButton:"backToTopButton_sjWU",backToTopButtonShow:"backToTopButtonShow_xfvO"};function m(){var e=function(e){var t=e.threshold,a=(0,n.useState)(!1),l=a[0],r=a[1],o=(0,n.useRef)(!1),s=(0,c.Ct)(),m=s.startScroll,u=s.cancelScroll;return(0,c.RF)((function(e,a){var n=e.scrollY,l=null==a?void 0:a.scrollY;l&&(o.current?o.current=!1:n>=l?(u(),r(!1)):n<t?r(!1):n+window.innerHeight<document.documentElement.scrollHeight&&r(!0))})),(0,i.S)((function(e){e.location.hash&&(o.current=!0,r(!1))})),{shown:l,scrollToTop:function(){return m(0)}}}({threshold:300}),t=e.shown,a=e.scrollToTop;return n.createElement("button",{"aria-label":(0,r.I)({id:"theme.BackToTopButton.buttonAriaLabel",message:"Scroll back to top",description:"The ARIA label for the back to top button"}),className:(0,l.Z)("clean-btn",o.k.common.backToTopButton,s.backToTopButton,t&&s.backToTopButtonShow),type:"button",onClick:a})}},51205:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(67176),r=a(80187);function o(e){var t=e.metadata,a=t.previousPage,o=t.nextPage;return n.createElement("nav",{className:"pagination-nav","aria-label":(0,l.I)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"})},a&&n.createElement(r.Z,{permalink:a,title:n.createElement(l.Z,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)"},"Newer Entries")}),o&&n.createElement(r.Z,{permalink:o,title:n.createElement(l.Z,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)"},"Older Entries"),isNext:!0}))}},57160:function(e,t,a){a.d(t,{Z:function(){return g}});var n=a(67294),l=a(67176),r=a(21185),o=a(83117),c=a(80102),i=a(86010),s={iconEdit:"iconEdit_Z9Sw"},m=["className"];function u(e){var t=e.className,a=(0,c.Z)(e,m);return n.createElement("svg",(0,o.Z)({fill:"currentColor",height:"20",width:"20",viewBox:"0 0 40 40",className:(0,i.Z)(s.iconEdit,t),"aria-hidden":"true"},a),n.createElement("g",null,n.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"})))}function g(e){var t=e.editUrl;return n.createElement("a",{href:t,target:"_blank",rel:"noreferrer noopener",className:r.k.common.editThisPage},n.createElement(u,null),n.createElement(l.Z,{id:"theme.common.editThisPage",description:"The link label to edit the current page"},"Edit this page"))}},80187:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(67294),l=a(86010),r=a(19372);function o(e){var t=e.permalink,a=e.title,o=e.subLabel,c=e.isNext;return n.createElement(r.Z,{className:(0,l.Z)("pagination-nav__link",c?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t},o&&n.createElement("div",{className:"pagination-nav__sublabel"},o),n.createElement("div",{className:"pagination-nav__label"},a))}},25960:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(19372),o={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};function c(e){var t=e.permalink,a=e.label,c=e.count;return n.createElement(r.Z,{href:t,className:(0,l.Z)(o.tag,c?o.tagWithCount:o.tagRegular)},a,c&&n.createElement("span",null,c))}},46229:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(67294),l=a(86010),r=a(67176),o=a(25960),c={tags:"tags_jXut",tag:"tag_QGVx"};function i(e){var t=e.tags;return n.createElement(n.Fragment,null,n.createElement("b",null,n.createElement(r.Z,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list"},"Tags:")),n.createElement("ul",{className:(0,l.Z)(c.tags,"padding--none","margin-left--sm")},t.map((function(e){var t=e.label,a=e.permalink;return n.createElement("li",{key:a,className:c.tag},n.createElement(o.Z,{label:t,permalink:a}))}))))}},52428:function(e,t,a){a.d(t,{C:function(){return c},n:function(){return o}});var n=a(67294),l=a(95879),r=n.createContext(null);function o(e){var t=e.children,a=e.content,l=e.isBlogPostPage,o=function(e){var t=e.content,a=e.isBlogPostPage;return(0,n.useMemo)((function(){return{metadata:t.metadata,frontMatter:t.frontMatter,assets:t.assets,toc:t.toc,isBlogPostPage:a}}),[t,a])}({content:a,isBlogPostPage:void 0!==l&&l});return n.createElement(r.Provider,{value:o},t)}function c(){var e=(0,n.useContext)(r);if(null===e)throw new l.i6("BlogPostProvider");return e}},10385:function(e,t,a){a.d(t,{c:function(){return s}});var n=a(67294),l=a(99966),r=["zero","one","two","few","many","other"];function o(e){return r.filter((function(t){return e.includes(t)}))}var c={locale:"en",pluralForms:o(["one","other"]),select:function(e){return 1===e?"one":"other"}};function i(){var e=(0,l.Z)().i18n.currentLocale;return(0,n.useMemo)((function(){try{return t=e,a=new Intl.PluralRules(t),{locale:t,pluralForms:o(a.resolvedOptions().pluralCategories),select:function(e){return a.select(e)}}}catch(n){return console.error('Failed to use Intl.PluralRules for locale "'+e+'".\nDocusaurus will fallback to the default (English) implementation.\nError: '+n.message+"\n"),c}var t,a}),[e])}function s(){var e=i();return{selectMessage:function(t,a){return function(e,t,a){var n=e.split("|");if(1===n.length)return n[0];n.length>a.pluralForms.length&&console.error("For locale="+a.locale+", a maximum of "+a.pluralForms.length+" plural forms are expected ("+a.pluralForms.join(",")+"), but the message contains "+n.length+": "+e);var l=a.select(t),r=a.pluralForms.indexOf(l);return n[Math.min(r,n.length-1)]}(a,t,e)}}}},27494:function(e,t,a){a.r(t),a.d(t,{default:function(){return T}});var n=a(86010),l=a(67294),r=a(19372),o=a(72764),c=a(75642),i=a(21185),s=a(99966),m=a(30467),u=a(51205),g=a(34912),d=a(12525),p=a(78571),E=a(4577),f=a(33231),h=a(83228);var v=a(67176),b=a(1954);function N(e){var t=e.metadata,a=(0,s.Z)().siteConfig.title;t.blogDescription,t.blogTitle,t.permalink.includes("page");return l.createElement(l.Fragment,null,l.createElement(p.Z,{tag:"blog_posts_list"}))}function k(e){var t=e.viewType,a=e.toggleViewType;return l.createElement("div",{className:"bloghome__swith-view"},l.createElement(b.JO,{icon:"ph:list-fill",width:"24",height:"24",onClick:function(){return a("list")},color:"list"===t?"var(--ifm-color-primary)":"#ccc"}),l.createElement(b.JO,{icon:"ph:grid-four",width:"24",height:"24",onClick:function(){return a("grid")},color:"grid"===t?"var(--ifm-color-primary)":"#ccc"}),l.createElement(b.JO,{icon:"ph:columns",width:"24",height:"24",onClick:function(){return a("card")},color:"card"===t?"var(--ifm-color-primary)":"#ccc"}))}function Z(e){var t=e.items;return l.createElement(l.Fragment,null,t.map((function(e,t){var a=e.content,n=a.metadata,o=a.frontMatter.title,c=n.permalink,i=n.date,s=n.tags,m=new Date(i),u=m.getFullYear()+"-"+("0"+(m.getMonth()+1)).slice(-2)+"-"+("0"+m.getDate()).slice(-2);return l.createElement("div",{className:"post__list-item",key:n.permalink},l.createElement(r.Z,{to:c,className:"post__list-title"},o),l.createElement("div",{className:"post__list-tags"},s.length>0&&s.slice(0,2).map((function(e,t){var a=e.label,n=e.permalink;return l.createElement(r.Z,{key:n,className:"post__tags "+(t<s.length?"margin-right--sm":""),to:n,style:{fontSize:"0.75em",fontWeight:500}},a)}))),l.createElement("div",{className:"post__list-date"},u))})))}function _(e){var t,a=e.isPaginated,c=e.isCardView,i=(0,E.ZP)(),s=null==i||null==(t=i["docusaurus-plugin-content-blog"])?void 0:t.default,m=(null==s?void 0:s.blogs).filter((function(e){return e.metadata.frontMatter.sticky>0})).map((function(e){return e.metadata})).sort((function(e,t){return e.frontMatter.sticky-t.frontMatter.sticky})).slice(0,8);return 0===m.length?l.createElement(l.Fragment,null):l.createElement(l.Fragment,null,l.createElement("div",{className:"container-wrapper"},l.createElement("div",{className:"container padding-vert--sm transition",style:c?{}:{maxWidth:1200}},!a&&l.createElement("h2",{className:"blog__section-title"},l.createElement(v.Z,{id:"theme.blog.title.recommend"},"\u63a8\u8350\u9605\u8bfb")),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--12"},l.createElement("div",{className:"bloghome__posts"},l.createElement("ul",{className:"blog__recommend"},m.map((function(e){return l.createElement("li",{className:(0,n.Z)("card"),key:e.permalink},e.frontMatter.image&&l.createElement("div",{className:(0,n.Z)("card__image")},l.createElement(o.Z,{src:e.frontMatter.image,alt:e.title,img:""})),l.createElement("div",{className:"card__body"},l.createElement("h4",null,l.createElement(r.Z,{href:e.permalink},e.title)),l.createElement("p",null,e.description)))})))))))))}function P(e){var t=e.metadata,a=e.items,n=!t.permalink.includes("page"),r=t.page>1,o=function(){var e=(0,l.useState)("card"),t=e[0],a=e[1];return(0,l.useEffect)((function(){a(localStorage.getItem("viewType")||"card")}),[]),{viewType:t,toggleViewType:(0,l.useCallback)((function(e){a(e),localStorage.setItem("viewType",e)}),[])}}(),c=o.viewType,i=o.toggleViewType,s="card"===c,p="list"===c,E="grid"===c;return l.createElement(d.Z,{wrapperClassName:"blog=-list__page"},!r&&n&&l.createElement(h.Z,null),l.createElement(m.Z,null),!r&&n&&l.createElement(_,{isPaginated:r,isCardView:s}),l.createElement("div",{className:"container-wrapper"},l.createElement("div",{className:"container padding-vert--sm",style:s?{}:{maxWidth:1200}},!r&&l.createElement("h2",{className:"blog__section-title"},l.createElement(v.Z,{id:"theme.blog.title.new"},"\u6700\u65b0\u535a\u5ba2")),l.createElement("div",{className:"row"},l.createElement("div",{className:"col col--12"},l.createElement(k,{viewType:c,toggleViewType:i}))),l.createElement("div",{className:"row"},l.createElement("div",{className:s?"col col--9":"col col--12",style:{transition:"all 0.3s ease"}},l.createElement("div",{className:"bloghome__posts"},(p||s)&&l.createElement("div",{className:"bloghome__posts-list"},l.createElement(g.Z,{items:a})),E&&l.createElement("div",{className:"bloghome__posts-grid"},l.createElement(Z,{items:a})),l.createElement(u.Z,{metadata:t}))),s&&l.createElement(f.Z,null)))))}function T(e){return l.createElement(c.FG,{className:(0,n.Z)(i.k.wrapper.blogPages,i.k.page.blogListPage)},l.createElement(N,e),l.createElement(P,e))}},13697:function(e,t,a){a.d(t,{Z:function(){return S}});var n=a(67294),l=a(86010),r=a(52428),o=a(35555);function c(e){var t,a=e.children,l=e.className,c=(0,r.C)(),i=c.frontMatter,s=c.assets,m=(0,o.C)().withBaseUrl,u=null!=(t=s.image)?t:i.image;return n.createElement("article",{className:l,itemProp:"blogPost",itemScope:!0,itemType:"http://schema.org/BlogPosting"},u&&n.createElement("meta",{itemProp:"image",content:m(u,{absolute:!0})}),a)}var i=a(19372),s={titleLink:"titleLink_BX2g"};function m(e){var t=e.className,a=(0,r.C)(),o=a.metadata,c=a.isBlogPostPage,m=o.permalink,u=o.title,g=c?"h1":"h2";return n.createElement(g,{className:(0,l.Z)(s.title,t),itemProp:"headline"},c?u:n.createElement(i.Z,{itemProp:"url",to:m,className:s.titleLink},u))}var u=a(67176),g=a(10385),d={container:"container_iJTo"};function p(e){var t,a=e.readingTime,l=(t=(0,g.c)().selectMessage,function(e){var a=Math.ceil(e);return t(a,(0,u.I)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))});return n.createElement(n.Fragment,null,l(a))}function E(e){var t=e.date,a=e.formattedDate;return n.createElement("time",{dateTime:t,itemProp:"datePublished"},a)}function f(){return n.createElement(n.Fragment,null," \xb7 ")}function h(e){var t=e.className,a=(0,r.C)().metadata,o=a.date,c=a.formattedDate,i=a.readingTime;return n.createElement("div",{className:(0,l.Z)(d.container,"margin-vert--md",t)},n.createElement(E,{date:o,formattedDate:c}),void 0!==i&&n.createElement(n.Fragment,null,n.createElement(f,null),n.createElement(p,{readingTime:i})))}function v(e){return e.href?n.createElement(i.Z,e):n.createElement(n.Fragment,null,e.children)}function b(e){var t=e.author,a=e.className,r=t.name,o=t.title,c=t.url,i=t.imageURL,s=t.email,m=c||s&&"mailto:"+s||void 0;return n.createElement("div",{className:(0,l.Z)("avatar margin-bottom--sm",a)},i&&n.createElement(v,{href:m,className:"avatar__photo-link"},n.createElement("img",{className:"avatar__photo",src:i,alt:r})),r&&n.createElement("div",{className:"avatar__intro",itemProp:"author",itemScope:!0,itemType:"https://schema.org/Person"},n.createElement("div",{className:"avatar__name"},n.createElement(v,{href:m,itemProp:"url"},n.createElement("span",{itemProp:"name"},r))),o&&n.createElement("small",{className:"avatar__subtitle",itemProp:"description"},o)))}var N={authorCol:"authorCol_q4o9",imageOnlyAuthorRow:"imageOnlyAuthorRow_lXe7",imageOnlyAuthorCol:"imageOnlyAuthorCol_cxD5"};function k(e){var t=e.className,a=(0,r.C)(),o=a.metadata.authors,c=a.assets;if(0===o.length)return null;var i=o.every((function(e){return!e.name}));return n.createElement("div",{className:(0,l.Z)("margin-top--md margin-bottom--sm",i?N.imageOnlyAuthorRow:"row",t)},o.map((function(e,t){var a;return n.createElement("div",{className:(0,l.Z)(!i&&"col col--6",i?N.imageOnlyAuthorCol:N.authorCol),key:t},n.createElement(b,{author:Object.assign({},e,{imageURL:null!=(a=c.authorsImageUrls[t])?a:e.imageURL})}))})))}function Z(){var e=(0,r.C)().isBlogPostPage;return n.createElement("header",null,n.createElement(m,null),e&&n.createElement(n.Fragment,null,n.createElement(h,null),n.createElement(k,null)))}var _=a(24854),P=a(89671);function T(e){var t=e.children,a=e.className,o=(0,r.C)().isBlogPostPage;return n.createElement("div",{id:o?_.blogPostContainerID:void 0,className:(0,l.Z)("markdown",a),itemProp:"articleBody"},n.createElement(P.Z,null,t))}var w=a(57160),y=a(46229),B=a(25960),C=a(83117),F=a(80102),L=["blogPostTitle"];function x(){return n.createElement("b",null,n.createElement(u.Z,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts"},"Read More"))}function O(e){var t=e.blogPostTitle,a=(0,F.Z)(e,L);return n.createElement(i.Z,(0,C.Z)({"aria-label":(0,u.I)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t})},a),n.createElement(x,null))}var R=a(1954),I={blogPostFooterDetailsFull:"blogPostFooterDetailsFull_Wr5y",blogPostInfo:"blogPostInfo_k7sy",blogPostInfoTags:"blogPostInfoTags_W9UY",blogPostAuthor:"blogPostAuthor_OLeU",blogPostDate:"blogPostDate_Z606",blogPostReadTime:"blogPostReadTime_AZ1H",blogPostDetailsFull:"blogPostDetailsFull_rPUK",divider:"divider_nSib"};function M(){var e=(0,r.C)(),t=e.metadata,a=e.isBlogPostPage,o=t.tags,c=t.title,i=t.editUrl,s=t.hasTruncateMarker,m=t.date,u=t.formattedDate,g=t.readingTime,d=t.authors,E=!a&&s,f=o.length>0,h=d.length>0;return a?n.createElement("footer",{className:(0,l.Z)("row docusaurus-mt-lg",a&&I.blogPostFooterDetailsFull)},f&&n.createElement("div",{className:(0,l.Z)("col",{"col--9":E})},n.createElement(y.Z,{tags:o})),a&&i&&n.createElement("div",{className:"col margin-top--sm"},n.createElement(w.Z,{editUrl:i})),E&&n.createElement("div",{className:(0,l.Z)("col text--right",{"col--3":f})},n.createElement(O,{blogPostTitle:c,to:t.permalink}))):n.createElement(n.Fragment,null,n.createElement("hr",{className:I.divider}),n.createElement("div",{className:I.blogPostInfo},h&&n.createElement(n.Fragment,null,n.createElement(R.JO,{icon:"ri:user-fill",color:"#c4d3e0"}),d.map((function(e){return n.createElement("span",{key:e.url,className:"blog__author"},n.createElement("a",{href:e.url,className:I.blogPostAuthor},e.name))}))),m&&n.createElement(n.Fragment,null,n.createElement(R.JO,{icon:"ri:calendar-fill",color:"#c4d3e0"}),n.createElement("time",{dateTime:m,className:I.blogPostDate,itemProp:"datePublished"},u)),f&&n.createElement(n.Fragment,null,n.createElement(R.JO,{icon:"ri:price-tag-3-fill",color:"#c4d3e0"}),n.createElement("span",{className:I.blogPostInfoTags},o.map((function(e){var t=e.label,a=e.permalink;return n.createElement(B.Z,{label:t,permalink:a,key:a})})))),g&&n.createElement(n.Fragment,null,n.createElement(R.JO,{icon:"ri:time-fill",color:"#c4d3e0"}),n.createElement("span",{className:(0,l.Z)(I.blogPostReadTime,"blog__readingTime")},n.createElement(p,{readingTime:g})))))}function S(e){var t=e.children,a=e.className,o=(0,r.C)().isBlogPostPage?void 0:"blogPost-container margin-bottom--lg";return n.createElement(c,{className:(0,l.Z)(o,a)},n.createElement(Z,null),n.createElement(T,null,t),n.createElement(M,null))}},34912:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(52428),r=a(13697),o=a(13945);function c(e){var t=e.items,a=e.component,c=void 0===a?r.Z:a;return n.createElement(n.Fragment,null,t.map((function(e){var t=e.content;return n.createElement(l.n,{key:t.metadata.permalink,content:t},n.createElement(o.pT,{direction:"left",duration:800,triggerOnce:!0},n.createElement(c,null,n.createElement(t,null))))})))}},55610:function(e,t,a){a.d(t,{Z:function(){return c}});var n=a(67294),l=a(86010),r=a(11354),o=a(76454);function c(e){var t=e.children,a=e.className;return n.createElement(r.Z,{as:"pre",tabIndex:0,className:(0,l.Z)(o.Z.codeBlockStandalone,"thin-scrollbar",a)},n.createElement("code",{className:o.Z.codeBlockLines},t))}},3714:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(83117),l=a(67294),r=a(86010),o=a(86328),c=a(76537),i=a(81965),s=a(61931),m=a(23746),u=a(45431),g=a(56340),d=a(41747),p=a(11354),E=a(76454);function f(e){var t,a=e.children,f=e.className,h=void 0===f?"":f,v=e.metastring,b=e.title,N=e.showLineNumbers,k=void 0===N||N,Z=e.language,_=(0,o.L)().prism,P=_.defaultLanguage,T=_.magicComments,w=null!=(t=null!=Z?Z:(0,i.Vo)(h))?t:P,y=(0,c.p)(),B=(0,s.F)(),C=(0,i.bc)(v)||b,F=(0,i.nZ)(a,{metastring:v,language:w,magicComments:T}),L=F.lineClassNames,x=F.code,O=null!=k?k:(0,i.nt)(v);return l.createElement(p.Z,{as:"div",className:(0,r.Z)(h,w&&!h.includes("language-"+w)&&"language-"+w)},C&&l.createElement("div",{className:E.Z.codeBlockTitle},C),l.createElement("div",{className:E.Z.codeBlockContent},l.createElement(m.ZP,(0,n.Z)({},m.lG,{theme:y,code:x,language:null!=w?w:"text"}),(function(e){var t=e.className,a=e.tokens,n=e.getLineProps,o=e.getTokenProps;return l.createElement("pre",{tabIndex:0,ref:B.codeBlockRef,className:(0,r.Z)(t,E.Z.codeBlock,"thin-scrollbar")},l.createElement("code",{className:(0,r.Z)(E.Z.codeBlockLines,O&&E.Z.codeBlockLinesWithNumbering)},a.map((function(e,t){return l.createElement(u.Z,{key:t,line:e,getLineProps:n,getTokenProps:o,classNames:L[t],showLineNumbers:O})}))))})),l.createElement("div",{className:E.Z.buttonGroup},(B.isEnabled||B.isCodeScrollable)&&l.createElement(d.Z,{className:E.Z.codeButton,onClick:function(){return B.toggle()},isEnabled:B.isEnabled}),l.createElement(g.Z,{className:E.Z.codeButton,code:x}))))}},76454:function(e,t){t.Z={codeBlockContent:"codeBlockContent_m3Ux",codeBlockTitle:"codeBlockTitle_P25_",codeBlock:"codeBlock_qGQc",codeBlockStandalone:"codeBlockStandalone_zC50",codeBlockLines:"codeBlockLines_p187",codeBlockLinesWithNumbering:"codeBlockLinesWithNumbering_OFgW",buttonGroup:"buttonGroup_6DOT"}}}]);