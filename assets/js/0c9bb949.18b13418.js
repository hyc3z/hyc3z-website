"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[437],{3905:function(e,r,t){t.d(r,{Zo:function(){return c},kt:function(){return m}});var n=t(7294);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},c=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),d=i(t),m=o,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return t?n.createElement(f,p(p({ref:r},c),{},{components:t})):n.createElement(f,p({ref:r},c))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,p=new Array(a);p[0]=d;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s.mdxType="string"==typeof e?e:o,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},8269:function(e,r,t){t.r(r),t.d(r,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return i},toc:function(){return c},default:function(){return d}});var n=t(7462),o=t(3366),a=(t(7294),t(3905)),p=["components"],s={},l=void 0,i={unversionedId:"python/re",id:"python/re",title:"re",description:"re.split(pattern, string, maxsplit=0, flags=0)",source:"@site/docs/python/re.md",sourceDirName:"python",slug:"/python/re",permalink:"/docs/python/re",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/python/re.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Docker",permalink:"/docs/docker/"},next:{title:"graph-database",permalink:"/docs/graph/graph-database"}},c=[],u={toc:c};function d(e){var r=e.components,t=(0,o.Z)(e,p);return(0,a.kt)("wrapper",(0,n.Z)({},u,t,{components:r,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"re.``split"),"(",(0,a.kt)("em",{parentName:"p"},"pattern"),", ",(0,a.kt)("em",{parentName:"p"},"string"),", ",(0,a.kt)("em",{parentName:"p"},"maxsplit=0"),", ",(0,a.kt)("em",{parentName:"p"},"flags=0"),")"),(0,a.kt)("p",null,"\u7528 ",(0,a.kt)("em",{parentName:"p"},"pattern")," \u5206\u5f00  ",(0,a.kt)("em",{parentName:"p"},"string")," \u3002 \u5982\u679c\u5728 ",(0,a.kt)("em",{parentName:"p"},"pattern")," \u4e2d\u6355\u83b7\u5230\u62ec\u53f7\uff0c\u90a3\u4e48\u6240\u6709\u7684\u7ec4\u91cc\u7684\u6587\u5b57\u4e5f\u4f1a\u5305\u542b\u5728\u5217\u8868\u91cc\u3002\u5982\u679c ",(0,a.kt)("em",{parentName:"p"},"maxsplit")," \u975e\u96f6\uff0c \u6700\u591a\u8fdb\u884c ",(0,a.kt)("em",{parentName:"p"},"maxsplit")," \u6b21\u5206\u9694\uff0c \u5269\u4e0b\u7684\u5b57\u7b26\u5168\u90e8\u8fd4\u56de\u5230\u5217\u8868\u7684\u6700\u540e\u4e00\u4e2a\u5143\u7d20\u3002"),(0,a.kt)("p",null,">",">>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> re.split(r'\\W+', 'Words, words, words.')\n['Words', 'words', 'words', '']\n>>> re.split(r'(\\W+)', 'Words, words, words.')\n['Words', ', ', 'words', ', ', 'words', '.', '']\n>>> re.split(r'\\W+', 'Words, words, words.', 1)\n['Words', 'words, words.']\n>>> re.split('[a-f]+', '0a3B9', flags=re.IGNORECASE)\n['0', '3', '9']\n")),(0,a.kt)("p",null,"\u5982\u679c\u5206\u9694\u7b26\u91cc\u6709\u6355\u83b7\u7ec4\u5408\uff0c\u5e76\u4e14\u5339\u914d\u5230\u5b57\u7b26\u4e32\u7684\u5f00\u59cb\uff0c\u90a3\u4e48\u7ed3\u679c\u5c06\u4f1a\u4ee5\u4e00\u4e2a\u7a7a\u5b57\u7b26\u4e32\u5f00\u59cb\u3002\u5bf9\u4e8e\u7ed3\u5c3e\u4e5f\u662f\u4e00\u6837"),(0,a.kt)("p",null,">",">>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},">>> re.split(r'(\\W+)', '...words, words...')\n['', '...', 'words', ', ', 'words', '...', '']\n")),(0,a.kt)("p",null,"\u8fd9\u6837\u7684\u8bdd\uff0c\u5206\u9694\u7ec4\u5c06\u4f1a\u51fa\u73b0\u5728\u7ed3\u679c\u5217\u8868\u4e2d\u540c\u6837\u7684\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"\u6837\u5f0f\u7684\u7a7a\u5339\u914d\u4ec5\u5728\u4e0e\u524d\u4e00\u4e2a\u7a7a\u5339\u914d\u4e0d\u76f8\u90bb\u65f6\u624d\u4f1a\u62c6\u5206\u5b57\u7b26\u4e32\u3002"),(0,a.kt)("p",null,">",">>"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"\nre.split(r'\\b', 'Words, words, words.')\n['', 'Words', ', ', 'words', ', ', 'words', '.']\nre.split(r'\\W*', '...words...')\n['', '', 'w', 'o', 'r', 'd', 's', '', '']\nre.split(r'(\\W*)', '...words...')\n['', '...', '', '', 'w', '', 'o', '', 'r', '', 'd', '', 's', '...', '', '', '']\n")),(0,a.kt)("p",null,"\u5728 3.1 \u7248\u66f4\u6539: \u589e\u52a0\u4e86\u53ef\u9009\u6807\u8bb0\u53c2\u6570\u3002"),(0,a.kt)("p",null,"\u5728 3.7 \u7248\u66f4\u6539: \u589e\u52a0\u4e86\u7a7a\u5b57\u7b26\u4e32\u7684\u6837\u5f0f\u5206\u9694\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/faq/design.html"},"FAQ")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://docs.python.org/zh-cn/3/library/functions.html#getattr"},"\u5185\u7f6e\u51fd\u6570")))}d.isMDXComponent=!0}}]);