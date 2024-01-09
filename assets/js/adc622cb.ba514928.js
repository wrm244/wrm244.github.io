"use strict";(self.webpackChunkblog=self.webpackChunkblog||[]).push([[6508],{3446:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return o},default:function(){return d},frontMatter:function(){return i},metadata:function(){return s},toc:function(){return u}});var r=n(83117),a=n(80102),p=(n(67294),n(3905)),l=["components"],i={id:"typescript-advanced-grammar",slug:"/typescript-advanced-grammar",title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",date:new Date("2022-06-25T00:00:00.000Z"),authors:"RiverMountain",tags:["typescript"],keywords:["typescript"]},o=void 0,s={unversionedId:"stack/js/\u6280\u5de7\u7bc7/typescript-advanced-grammar",id:"stack/js/\u6280\u5de7\u7bc7/typescript-advanced-grammar",title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",description:"\u5728\u7ebf\u8fd0\u884c TypeScript https://www.typescriptlang.org/play",source:"@site/docs/stack/js/\u6280\u5de7\u7bc7/TypeScript\u9ad8\u7ea7\u8bed\u6cd5.md",sourceDirName:"stack/js/\u6280\u5de7\u7bc7",slug:"/typescript-advanced-grammar",permalink:"/docs/typescript-advanced-grammar",draft:!1,tags:[{label:"typescript",permalink:"/docs/tags/typescript"}],version:"current",frontMatter:{id:"typescript-advanced-grammar",slug:"/typescript-advanced-grammar",title:"TypeScript\u9ad8\u7ea7\u8bed\u6cd5",date:"2022-06-25T00:00:00.000Z",authors:"RiverMountain",tags:["typescript"],keywords:["typescript"]},sidebar:"stack",previous:{title:"JS\u6570\u7ec4\u5bf9\u8c61\u53bb\u91cd",permalink:"/docs/js-array-object-unique"},next:{title:"\u5e38\u7528util.js",permalink:"/docs/commonly-used-util.js"}},c={},u=[{value:"typeof",id:"typeof",level:2},{value:"keyof",id:"keyof",level:2},{value:"\u4ea4\u53c9\u7c7b\u578b",id:"\u4ea4\u53c9\u7c7b\u578b",level:2},{value:"\u6620\u5c04\u7c7b\u578b",id:"\u6620\u5c04\u7c7b\u578b",level:2},{value:"\u6761\u4ef6\u7c7b\u578b",id:"\u6761\u4ef6\u7c7b\u578b",level:2},{value:"\u7c7b\u578b\u63a8\u65ad",id:"\u7c7b\u578b\u63a8\u65ad",level:2},{value:"\u58f0\u660e\u6587\u4ef6",id:"\u58f0\u660e\u6587\u4ef6",level:2},{value:"type \u548c interface \u533a\u522b",id:"type-\u548c-interface-\u533a\u522b",level:2},{value:"\u76f8\u540c\u70b9",id:"\u76f8\u540c\u70b9",level:3},{value:"\u4e0d\u540c\u70b9",id:"\u4e0d\u540c\u70b9",level:3},{value:"\u4f7f\u7528\u573a\u666f",id:"\u4f7f\u7528\u573a\u666f",level:3},{value:"type \u7684\u4f7f\u7528\u573a\u666f",id:"type-\u7684\u4f7f\u7528\u573a\u666f",level:4},{value:"interface \u7684\u4f7f\u7528\u573a\u666f",id:"interface-\u7684\u4f7f\u7528\u573a\u666f",level:4},{value:"TypeScript \u5185\u7f6e\u5de5\u5177\u7c7b",id:"typescript-\u5185\u7f6e\u5de5\u5177\u7c7b",level:2},{value:"\u76f8\u5173\u6587\u6863\u4e0e\u7ec3\u4e60",id:"\u76f8\u5173\u6587\u6863\u4e0e\u7ec3\u4e60",level:2}],y={toc:u},m="wrapper";function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,p.kt)(m,(0,r.Z)({},y,n,{components:t,mdxType:"MDXLayout"}),(0,p.kt)("p",null,"\u5728\u7ebf\u8fd0\u884c TypeScript ",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/play"},"https://www.typescriptlang.org/play")),(0,p.kt)("h2",{id:"typeof"},"typeof"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"typeof val\n")),(0,p.kt)("p",null,"\u83b7\u53d6\u5bf9\u8c61\u7684\u7c7b\u578b"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5df2\u77e5\u4e00\u4e2a javascript \u53d8\u91cf\uff0c\u901a\u8fc7 typeof \u5c31\u80fd\u76f4\u63a5\u83b7\u53d6\u5176\u7c7b\u578b")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const str = 'foo'\ntypeof str === 'string' // true\n\nconst user = {\n  name: 'kuizuo',\n  age: 12,\n  address: {\n    province: '\u798f\u5efa',\n    city: '\u53a6\u95e8',\n  },\n}\n\ntype User = typeof user\n// {\n//   name: string;\n//   age: number;\n//   address: {\n//      province: string;\n//      city: string;\n//   };\n// }\n\ntype Address = typeof user['address']\n// {\n//    province: string;\n//    city: string;\n// }\n")),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u83b7\u53d6\u51fd\u6570\u7684\u7c7b\u578b\uff08\u53c2\u6570\u7c7b\u578b\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b\uff09")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function add(a: number, b: number): number {\n  return a + b\n}\n\ntype AddType = typeof add\n// (a: number, b: number) => number\n\ntype AddReturnType = ReturnType<typeof add>\n// number\n\ntype AddParameterType = Parameters<typeof add>\n// [a: number, b: number]\n")),(0,p.kt)("h2",{id:"keyof"},"keyof"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"keyof T\n")),(0,p.kt)("p",null,"\u83b7\u53d6 T \u7c7b\u578b\u4e2d\u7684\u6240\u6709 key\uff0c\u7c7b\u4f3c\u4e0e Object.keys(object)"),(0,p.kt)("p",null,"\u6839\u636e key \u83b7\u53d6\u5bf9\u8c61\u5176\u5c5e\u6027\u7684\u4f8b\u5b50"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"function getProperty<T extends object, K extends keyof T>(obj: T, key: K) {\n  return obj[key]\n}\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u6709\u5f88\u597d\u7684\u4ee3\u7801\u63d0\u793a\uff0c\u5e76\u4e14\u5982\u679c\u83b7\u53d6\u7684 key \u4e0d\u5728\u5176\u5bf9\u8c61\u4e2d\uff0c\u5c06\u4f1a\u76f4\u63a5\u62a5\u9519\u3002"),(0,p.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u5e38\u7528\u7c7b\u578b\u7684 keyof \u503c"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},'type K0 = keyof string\n// number | typeof Symbol.iterator | "toString" | "charAt" | ... more\ntype K1 = keyof boolean\n// "valueOf"\ntype K2 = keyof number\n// "toString" | "valueOf" | "toFixed" | "toExponential" | "toPrecision" | "toLocaleString"\ntype K3 = keyof any\n// string | number | symbol\n')),(0,p.kt)("h2",{id:"\u4ea4\u53c9\u7c7b\u578b"},"\u4ea4\u53c9\u7c7b\u578b"),(0,p.kt)("p",null,"& \u4ea4\u53c9\u8fd0\u7b97\u7b26"),(0,p.kt)("p",null,"\u7c7b\u4f3c\u96c6\u5408\u4e2d\u7684\u4ea4\u96c6\uff0c\u6ee1\u8db3\u4ee5\u4e0b\u7279\u6027"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u552f\u4e00\u6027\uff1aA & A \u7b49\u4ef7\u4e8e A"),(0,p.kt)("li",{parentName:"ol"},"\u6ee1\u8db3\u4ea4\u6362\u5f8b\uff1aA & B"),(0,p.kt)("li",{parentName:"ol"},"\u6ee1\u8db3\u7ed3\u5408\u5f8b\uff1a(A & B) & C \u7b49\u4ef7\u4e8e A & (B & C)"),(0,p.kt)("li",{parentName:"ol"},"\u7236\u7c7b\u578b\u6536\u655b\uff1a\u5982\u679c B \u662f A \u7684\u7236\u7c7b\u578b\uff0c\u90a3\u4e48 A & B \u5c06\u6536\u655b\u4e3a A \u7c7b\u578b.")),(0,p.kt)("p",null,"\u4efb\u4f55\u4e0e never \u4ea4\u53c9\u7684\u7c7b\u578b\u90fd\u662f nerver\uff0cany \u4ea4\u53c9\u7684\u7c7b\u578b\u4e3a any\uff08\u9664\u4e86 nerver\uff09"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type A0 = any & 1 // any\ntype A1 = any & boolean // any\ntype A2 = any & never // never\n\ntype A3 = string & number // never\n")),(0,p.kt)("h2",{id:"\u6620\u5c04\u7c7b\u578b"},"\u6620\u5c04\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"{ [P in K]: T }\n")),(0,p.kt)("p",null,"\u5176\u4e2d in \u7c7b\u4f3c\u4e0e for ...in \u8bed\u53e5\uff0c\u800c T \u7c7b\u578b\u8868\u793a\u4efb\u610f\u7c7b\u578b\u3002\u904d\u5386 K \u7c7b\u578b\u7684\u6240\u6709 key\uff0c\u751f\u6210 P : T\uff0c\u4f8b\u5982"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"interface Todo {\n  title: string\n  description: string\n  completed: boolean\n}\n\ntype Demo<T> = { [P in keyof T]: T }\ntype Todo1 = Demo<Todo>\n// {\n//   title: string\n//   description: string\n//   completed: boolean\n// }\n")),(0,p.kt)("p",null,"\u4e0a\u9762\u4ee3\u7801\u770b\u4f3c\u6ca1\u6709\u4efb\u4f55\u6620\u5c04\u5173\u7cfb\uff0c\u56e0\u4e3a\u5728\u6620\u5c04\u7c7b\u578b\u4e2d\u53ef\u4ee5\u7ed9\u5bf9\u5176\u6dfb\u52a0",(0,p.kt)("inlineCode",{parentName:"p"},"readonly "),"\u548c ",(0,p.kt)("inlineCode",{parentName:"p"},"?")," \u53ea\u8bfb\u4e0e\u53ef\u9009\u4fee\u9970\u7b26\uff0c\u4ee5\u53ca",(0,p.kt)("inlineCode",{parentName:"p"},"+")," ",(0,p.kt)("inlineCode",{parentName:"p"},"-")," \u589e\u52a0\u4e0e\u5220\u9664\u4fee\u9970\u7b26\uff08\u9ed8\u8ba4\u4e3a+\uff09\u4f8b\u5982"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"{ [ P in K] :T }\n{ [ P in K] ?:T }\n{ [ P in K] -?:T }\n\n{ readonly [ P in K] :T }\n{ readonly [ P in K] ?:T }\n{ -readonly [ P in K] ?:T }\n\n")),(0,p.kt)("p",null,"\u5c31\u53ef\u4ee5\u5b9e\u73b0\u4e00\u4e9b TypeScript \u7684\u5185\u7f6e\u5de5\u5177\u7c7b\uff08\u7ed9\u5bf9\u8c61\u5c5e\u6027\u53ea\u8bfb\uff0c\u53ef\u9009\u7b49\u7b49\uff09"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type MyPick<T, K extends keyof T> = {\n  [P in K]: T[P]\n}\n\ntype MyPartial<T> = {\n  [P in keyof T]?: T[P]\n}\n\ntype MyRequired<T> = {\n  [P in keyof T]-?: T[P];\n}\n\ntype MyReadonly<T> = {\n  readonly [P in keyof T]: T[P]\n}\n\n...\n")),(0,p.kt)("h2",{id:"\u6761\u4ef6\u7c7b\u578b"},"\u6761\u4ef6\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"T extends U ? X : Y\n")),(0,p.kt)("p",null,"\u5176\u4ee3\u7801\u8bed\u6cd5\u7c7b\u4f3c\u4e0e\u4e09\u5143\u8fd0\u7b97\u7b26\uff0c"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u5982\u679c T \u548c U \u90fd\u4e3a\u57fa\u672c\u7c7b\u578b\u4e24\u4fa7\u76f8\u540c\uff0c\u5219 extends \u5728\u8bed\u4e49\u4e0a\u53ef\u4ee5\u7406\u89e3\u4e3a ===")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Demo1 = 'foo' extends 'bar' ? true : false // false\ntype Demo2 = 'c' extends 'c' ? true : false // true\n")),(0,p.kt)("ol",{start:2},(0,p.kt)("li",{parentName:"ol"},"\u82e5\u4f4d\u4e8e extends \u53f3\u4fa7\u7684\u7c7b\u578b\u5305\u542b\u4f4d\u4e8e extends \u5de6\u4fa7\u7684\u7c7b\u578b(\u5373",(0,p.kt)("strong",{parentName:"li"},"\u72ed\u7a84\u7c7b\u578b extends \u5bbd\u6cdb\u7c7b\u578b"),")\u65f6\uff0c\u7ed3\u679c\u4e3a true\uff0c\u53cd\u4e4b\u4e3a false\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Demo3 = string extends string | number ? true : false // true\n")),(0,p.kt)("ol",{start:3},(0,p.kt)("li",{parentName:"ol"},"\u5f53 extends \u4f5c\u7528\u4e8e",(0,p.kt)("strong",{parentName:"li"},"\u5bf9\u8c61"),"\u65f6\uff0c\u82e5\u5728\u5bf9\u8c61\u4e2d\u6307\u5b9a\u7684 key \u8d8a\u591a\uff0c\u5219\u5176\u7c7b\u578b\u5b9a\u4e49\u7684\u8303\u56f4\u8d8a\u72ed\u7a84\u3002")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Demo4 = { a: true; b: false } extends { a: true } ? true : false // true\n")),(0,p.kt)("ol",{start:4},(0,p.kt)("li",{parentName:"ol"},"\u4f5c\u7528\u4e8e\u8054\u5408\u7c7b\u578b\u4e2d\uff0c\u4e14 T \u4e3a",(0,p.kt)("strong",{parentName:"li"},"\u88f8\u7c7b\u578b\u53c2\u6570"),"(\u65e0",(0,p.kt)("inlineCode",{parentName:"li"},"T[] [T] Promise<T>")," \u7b49\u7c7b\u578b\u5305\u88c5\u8fc7)\uff0c\u90a3\u4e48\u5219\u4e3a",(0,p.kt)("strong",{parentName:"li"},"\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b"),"\uff0c\u5bf9\u4e8e\u8be5\u7c7b\u578b\u6765\u8bf4\uff0c\u5f53 T \u4e3a\u8054\u5408\u7c7b\u578b\u65f6\uff0c\u8fd0\u7b97\u8fc7\u7a0b\u4f1a\u88ab\u5206\u89e3\u4e3a\u591a\u4e2a\u5206\u652f\uff08\u7c7b\u4f3c\u4e8e\u4e58\u6cd5\u5206\u914d\u5f8b\uff09\uff0c\u90a3\u4e48\u8fd4\u56de\u7684\u7c7b\u578b\u4e5f\u5c06\u662f\u591a\u4e2a\u7c7b\u578b\u3002")),(0,p.kt)("p",null,"\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b\u7684\u7279\u70b9\uff1a\u201c\u88f8\u201d\u7c7b\u578b\u3001\u7c7b\u578b\u53c2\u6570\u3001\u8054\u5408\u7c7b\u578b\u53c2\u6570\u4f1a\u89e6\u53d1\u5206\u652f\u3002"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Demo5<T, U> = T extends U ? never : T\ntype Demo6 = Demo5<'a' | 'b' | 'c' | 'd', 'c' | 'd'> // 'a' | 'b'\n")),(0,p.kt)("p",null,"\u4f8b\u5982\u4e0a\u9762\u5b9a\u4e49\u7684 Demo5\uff0c\u5176\u5b9e\u4e5f\u5c31\u662f TypeScript \u5185\u7f6e\u5de5\u5177\u7c7b\u7684",(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html#excludeuniontype-excludedmembers"},"Exclude<UnionType, ExcludedMembers>"),"\u7684\u5b9e\u73b0\uff0c\u6240\u8fd4\u56de\u7684\u7ed3\u679c\u662f ",(0,p.kt)("inlineCode",{parentName:"p"},"'a' | 'b'"),"\uff0c\u5176\u5185\u90e8\u7684\u5b9e\u73b0\u76f8\u5f53\u4e8e"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"'a' extends 'c' | 'd' ? never : 'a' // 'a'\n'b' extends 'c' | 'd' ? never : 'b' // 'b'\n'c' extends 'c' | 'd' ? never : 'c' // never\n'd' extends 'c' | 'd' ? never : 'd' // never\n// \u6267\u884c\u56db\u6b21\u6761\u4ef6\u7c7b\u578b,\u6700\u7ec8\u5408\u5e76\u5f97\u5230 'a' | 'b'\n\n")),(0,p.kt)("p",null,"\u4f46\u5982\u679c T \u4e0d\u80fd",(0,p.kt)("strong",{parentName:"p"},"\u88f8\u7c7b\u578b\u53c2\u6570"),"\u7c7b\u578b\uff0c\u90a3\u4e48\u4fbf\u4e0d\u4f1a\u505a",(0,p.kt)("strong",{parentName:"p"},"\u5206\u5e03\u5f0f\u6761\u4ef6\u7c7b\u578b"),"\uff0c\u8fd4\u56de\u7684\u7ed3\u679c\u4fbf\u53ea\u6709\u4e00\u4e2a\u3002"),(0,p.kt)("h2",{id:"\u7c7b\u578b\u63a8\u65ad"},"\u7c7b\u578b\u63a8\u65ad"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Demo<T> = T extends (infer U)[] ? U : T\n")),(0,p.kt)("p",null,"\u5982\u679c T \u4e3a",(0,p.kt)("inlineCode",{parentName:"p"},"string[]"),"\u7c7b\u578b\uff0c\u90a3\u4e48 infer \u53ef\u4ee5\u63a8\u5bfc\u51fa U \u4e3a string \u7c7b\u578b"),(0,p.kt)("p",null,"\u6ce8\uff1ainfer \u53ea\u80fd\u5728",(0,p.kt)("strong",{parentName:"p"},"\u6761\u4ef6\u7c7b\u578b\u7684",(0,p.kt)("inlineCode",{parentName:"strong"},"extends"),"\u5b50\u53e5"),"\u4e2d\u624d\u5141\u8bb8",(0,p.kt)("inlineCode",{parentName:"p"},"infer"),"\u58f0\u660e\uff0c\u4e14\u53ea\u80fd",(0,p.kt)("strong",{parentName:"p"},"\u5728\u6761\u4ef6\u5206\u652f\u4e2d true \u4e2d"),"\u4f7f\u7528"),(0,p.kt)("p",null,"\u4e0b\u5217\u8bed\u53e5\u90fd\u5c06\u62a5\u9519"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Wrong1<T extends (infer U)[]> = T[0]\n\ntype Wrong2<T> = (infer U)[] extends T ? U : T\n\ntype Wrong3<T> = T extends (infer U)[] ? T : U\n")),(0,p.kt)("p",null,"\u4e00\u4e9b\u4f8b\u5b50"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type Unpacked<T> = T extends (infer U)[] ? U : T extends (...args: any[]) => infer U ? U : T extends Promise<infer U> ? U : T\n\ntype T0 = Unpacked<string> // string\ntype T1 = Unpacked<string[]> // string\ntype T2 = Unpacked<() => string> // string\ntype T3 = Unpacked<Promise<string>> // string\ntype T4 = Unpacked<Promise<string>[]> // Promise<string>\ntype T5 = Unpacked<Promise<string> | string> // string | Promise<string>\n")),(0,p.kt)("p",null,"\u901a\u8fc7 infer \u5c31\u53ef\u4ee5\u63a8\u5bfc\u51fa\u51fd\u6570\u7684\u53c2\u6570\u7c7b\u578b\u4e0e\u8fd4\u56de\u503c\u7c7b\u578b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"const fn = (v: boolean) => {\n  if (v) return 1\n  else return 2\n}\n\ntype MyReturnType<T> = T extends (...args: any[]) => infer R ? R : any\n\ntype MyParameterType<T> = T extends (...args: infer P) => any ? P : any\n\ntype FnReturnType = MyReturnType<typeof fn>\n// 1 | 2\ntype FnParameterType = MyParameterType<typeof fn>\n// [v: boolean]\n")),(0,p.kt)("h2",{id:"\u58f0\u660e\u6587\u4ef6"},"\u58f0\u660e\u6587\u4ef6"),(0,p.kt)("p",null,"\u6211\u4e2a\u4eba\u4e60\u60ef\u4f1a\u5728\u6839\u76ee\u5f55\u521b\u5efa types \u6587\u4ef6\u5939\uff0c\u91cc\u9762\u5b58\u653e d.ts \u58f0\u660e\u6587\u4ef6\uff0c\u540c\u65f6 tsconfig.json \u4e2d\u914d\u7f6e ",(0,p.kt)("inlineCode",{parentName:"p"},'"include": ["src/**/*.ts", "types/**/*.d.ts"]')),(0,p.kt)("p",null,"\u521b\u5efa\u4e00\u4e2a\u5168\u5c40\u58f0\u660e\u6587\u4ef6",(0,p.kt)("inlineCode",{parentName:"p"},"global.d.ts"),"\uff0c\u4f7f\u7528 declare \u5173\u952e\u5b57\u6765\u58f0\u660e"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="global.d.ts"',title:'"global.d.ts"'},"declare module 'foo' {\n  export var bar: number\n}\n")),(0,p.kt)("p",null,"\u6b64\u65f6\u5c31\u53ef\u4ee5\u5728\u5176\u4ed6\u6587\u4ef6\u4e2d",(0,p.kt)("inlineCode",{parentName:"p"},"import * as foo from 'foo'"),"\uff0c\u5373\u4fbf\u6ca1\u6709\u5b89\u88c5 foo \u6a21\u5757\uff0c\u4f46\u662f foo \u4f9d\u7136\u6709 bar \u5c5e\u6027\u63d0\u793a\uff0c\u8fd9\u5728\u4e00\u4e9b\u7b2c\u4e09\u65b9\u4f7f\u7528 js \u6240\u7f16\u5199\u7684\u5e93\u4e2d\u7ecf\u5e38\u9047\u5230\u3002\u5728\u4f8b\u5982\u6211\u60f3\u7ed9\u6211\u7684 axios \u5c01\u88c5\u4e9b\u81ea\u5df1\u5b9a\u4e49\u7684\u4ee3\u7801\uff0c\u540c\u65f6\u8fd8\u5e26\u6709\u7c7b\u578b\u63d0\u793a\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u4f7f\u7528\u58f0\u660e\u6587\u4ef6\uff0c\u5982\u4e0b"),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="global.d.ts"',title:'"global.d.ts"'},"import * as axios from 'axios'\n\ndeclare module 'axios' {\n  export interface Axios {\n    myget: (url: string, config?: AxiosRequestConfig) => Promise<AxiosResponse>\n  }\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript",metastring:'title="demo.ts"',title:'"demo.ts"'},"import axios, { AxiosRequestConfig } from 'axios'\n\naxios.myget = async (url: string, config?: AxiosRequestConfig) => {\n  console.log(url)\n  return axios.get(url, config)\n}\n")),(0,p.kt)("h2",{id:"type-\u548c-interface-\u533a\u522b"},"type \u548c interface \u533a\u522b"),(0,p.kt)("h3",{id:"\u76f8\u540c\u70b9"},"\u76f8\u540c\u70b9"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u90fd\u53ef\u4ee5\u7528\u6765\u63cf\u8ff0\u5bf9\u8c61\u6216\u51fd\u6570")),(0,p.kt)("li",{parentName:"ol"},(0,p.kt)("p",{parentName:"li"},"\u7c7b\u578b\u522b\u540d\u548c\u63a5\u53e3\u90fd\u652f\u6301\u6269\u5c55"))),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type User = {\n  name: string\n}\n\ntype User1 = User & { age: number }\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"interface User {\n  name: string\n}\n\ninterface User1 extends User {\n  age: number\n}\n")),(0,p.kt)("h3",{id:"\u4e0d\u540c\u70b9"},"\u4e0d\u540c\u70b9"),(0,p.kt)("ol",null,(0,p.kt)("li",{parentName:"ol"},"\u540c\u540d\u63a5\u53e3\u4f1a\u81ea\u52a8\u5408\u5e76\uff0c\u800c\u7c7b\u578b\u522b\u540d\u4e0d\u4f1a")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"interface User {\n  name: string\n}\n\ninterface User {\n  age: number\n}\n\nconst user: User = {\n  name: 'kuizuo',\n  age: 20,\n}\n")),(0,p.kt)("pre",null,(0,p.kt)("code",{parentName:"pre",className:"language-typescript"},"type User = {\n  name: string\n}\n\ntype User = {\n  age: number\n}\n// \u6807\u8bc6\u7b26\u201cUser\u201d\u91cd\u590d\u3002\n")),(0,p.kt)("h3",{id:"\u4f7f\u7528\u573a\u666f"},"\u4f7f\u7528\u573a\u666f"),(0,p.kt)("h4",{id:"type-\u7684\u4f7f\u7528\u573a\u666f"},"type \u7684\u4f7f\u7528\u573a\u666f"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u57fa\u672c\u7c7b\u578b"),(0,p.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u5143\u7ec4\u7c7b\u578b"),(0,p.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u51fd\u6570\u7c7b\u578b"),(0,p.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u8054\u5408\u7c7b\u578b"),(0,p.kt)("li",{parentName:"ul"},"\u5b9a\u4e49\u6620\u5c04\u7c7b\u578b")),(0,p.kt)("h4",{id:"interface-\u7684\u4f7f\u7528\u573a\u666f"},"interface \u7684\u4f7f\u7528\u573a\u666f"),(0,p.kt)("ul",null,(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5229\u7528\u63a5\u53e3\u81ea\u52a8\u5408\u5e76\u7279\u6027\uff0c\u5728\u7b2c\u4e09\u65b9\u5e93\u4e2d\u53ef\u4ee5\u5bf9\u5176\u8fdb\u884c\u63a5\u53e3\u6269\u5c55")),(0,p.kt)("li",{parentName:"ul"},(0,p.kt)("p",{parentName:"li"},"\u5b9a\u4e49\u5bf9\u8c61\u7c7b\u578b\u4e14\u65e0\u9700\u4f7f\u7528 type \u65f6"))),(0,p.kt)("h2",{id:"typescript-\u5185\u7f6e\u5de5\u5177\u7c7b"},"TypeScript \u5185\u7f6e\u5de5\u5177\u7c7b"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/docs/handbook/utility-types.html"},"TypeScript: Documentation - Utility Types (typescriptlang.org)")),(0,p.kt)("h2",{id:"\u76f8\u5173\u6587\u6863\u4e0e\u7ec3\u4e60"},"\u76f8\u5173\u6587\u6863\u4e0e\u7ec3\u4e60"),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://www.typescriptlang.org/"},"TypeScript: JavaScript With Syntax For Types. (typescriptlang.org)")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://jkchao.github.io/typescript-book-chinese/"},"\u6df1\u5165\u7406\u89e3 TypeScript | \u6df1\u5165\u7406\u89e3 TypeScript (jkchao.github.io)")),(0,p.kt)("p",null,(0,p.kt)("a",{parentName:"p",href:"https://github.com/type-challenges/type-challenges"},"type-challenges/type-challenges: Collection of TypeScript type challenges with online judge (github.com)")))}d.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function p(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?p(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):p(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},p=Object.keys(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(r=0;r<p.length;r++)n=p[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),s=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(o.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,p=e.originalType,o=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(n),m=a,d=u["".concat(o,".").concat(m)]||u[m]||y[m]||p;return n?r.createElement(d,l(l({ref:t},c),{},{components:n})):r.createElement(d,l({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var p=n.length,l=new Array(p);l[0]=m;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<p;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);