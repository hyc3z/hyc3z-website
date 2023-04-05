"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[1333],{3905:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)r=p[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),i=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},c=function(e){var t=i(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,p=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=i(r),f=o,m=u["".concat(l,".").concat(f)]||u[f]||d[f]||p;return r?n.createElement(m,a(a({ref:t},c),{},{components:r})):n.createElement(m,a({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var p=r.length,a=new Array(p);a[0]=f;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:o,a[1]=s;for(var i=2;i<p;i++)a[i]=r[i];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},3851:function(e,t,r){r.r(t),r.d(t,{assets:function(){return l},contentTitle:function(){return a},default:function(){return u},frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i}});var n=r(83117),o=(r(67294),r(3905));const p={title:"Regular Expression"},a=void 0,s={unversionedId:"Python/re",id:"Python/re",title:"Regular Expression",description:"re.split(pattern, string, maxsplit=0, flags=0)",source:"@site/docs/Python/re.md",sourceDirName:"Python",slug:"/Python/re",permalink:"/docs/Python/re",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Regular Expression"},sidebar:"docs",previous:{title:"Theory",permalink:"/docs/Music/Theory"},next:{title:"Swift UI",permalink:"/docs/SwiftUI/"}},l={},i=[],c={toc:i};function u(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},c,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"re.``split"),"(",(0,o.kt)("em",{parentName:"p"},"pattern"),", ",(0,o.kt)("em",{parentName:"p"},"string"),", ",(0,o.kt)("em",{parentName:"p"},"maxsplit=0"),", ",(0,o.kt)("em",{parentName:"p"},"flags=0"),")"),(0,o.kt)("p",null,"\u7528 ",(0,o.kt)("em",{parentName:"p"},"pattern")," \u5206\u5f00  ",(0,o.kt)("em",{parentName:"p"},"string")," \u3002 \u5982\u679c\u5728 ",(0,o.kt)("em",{parentName:"p"},"pattern")," \u4e2d\u6355\u83b7\u5230\u62ec\u53f7\uff0c\u90a3\u4e48\u6240\u6709\u7684\u7ec4\u91cc\u7684\u6587\u5b57\u4e5f\u4f1a\u5305\u542b\u5728\u5217\u8868\u91cc\u3002\u5982\u679c ",(0,o.kt)("em",{parentName:"p"},"maxsplit")," \u975e\u96f6\uff0c \u6700\u591a\u8fdb\u884c ",(0,o.kt)("em",{parentName:"p"},"maxsplit")," \u6b21\u5206\u9694\uff0c \u5269\u4e0b\u7684\u5b57\u7b26\u5168\u90e8\u8fd4\u56de\u5230\u5217\u8868\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,o.kt)("p",null,">",">>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">>> re.split(r'\\W+', 'Words, words, words.')\n['Words', 'words', 'words', '']\n>>> re.split(r'(\\W+)', 'Words, words, words.')\n['Words', ', ', 'words', ', ', 'words', '.', '']\n>>> re.split(r'\\W+', 'Words, words, words.', 1)\n['Words', 'words, words.']\n>>> re.split('[a-f]+', '0a3B9', flags=re.IGNORECASE)\n['0', '3', '9']\n")),(0,o.kt)("p",null,"\u5982\u679c\u5206\u9694\u7b26\u91cc\u6709\u6355\u83b7\u7ec4\u5408\uff0c\u5e76\u4e14\u5339\u914d\u5230\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\uff0c\u90a3\u4e48\u7ed3\u679c\u5c06\u4f1a\u4ee5\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u5f00\u59cb\u3002\u5bf9\u4e8e\u7ed3\u5c3e\u4e5f\u662f\u4e00\u6837"),(0,o.kt)("p",null,">",">>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},">>> re.split(r'(\\W+)', '...words, words...')\n['', '...', 'words', ', ', 'words', '...', '']\n")),(0,o.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u5206\u9694\u7ec4\u5c06\u4f1a\u51fa\u73b0\u5728\u7ed3\u679c\u5217\u8868\u4e2d\u540c\u6837\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("p",null,"\u6837\u5f0f\u7684\u7a7a\u5339\u914d\u4ec5\u5728\u4e0e\u524d\u4e00\u4e2a\u7a7a\u5339\u914d\u4e0d\u76f8\u90bb\u65f6\u624d\u4f1a\u62c6\u5206\u5b57\u7b26\u4e32\u3002"),(0,o.kt)("p",null,">",">>"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\nre.split(r'\\b', 'Words, words, words.')\n['', 'Words', ', ', 'words', ', ', 'words', '.']\nre.split(r'\\W*', '...words...')\n['', '', 'w', 'o', 'r', 'd', 's', '', '']\nre.split(r'(\\W*)', '...words...')\n['', '...', '', '', 'w', '', 'o', '', 'r', '', 'd', '', 's', '...', '', '', '']\n")),(0,o.kt)("p",null,"\u5728 3.1 \u7248\u66f4\u6539: \u589e\u52a0\u4e86\u53ef\u9009\u6807\u8bb0\u53c2\u6570\u3002"),(0,o.kt)("p",null,"\u5728 3.7 \u7248\u66f4\u6539: \u589e\u52a0\u4e86\u7a7a\u5b57\u7b26\u4e32\u7684\u6837\u5f0f\u5206\u9694\u3002"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/faq/design.html"},"FAQ")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/library/functions.html#getattr"},"\u5185\u7f6e\u51fd\u6570")))}u.isMDXComponent=!0}}]);