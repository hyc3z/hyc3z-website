"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[785],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,l=e.originalType,i=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),s=u(n),d=o,g=s["".concat(i,".").concat(d)]||s[d]||b[d]||l;return n?r.createElement(g,c(c({ref:t},p),{},{components:n})):r.createElement(g,c({ref:t},p))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=n.length,c=new Array(l);c[0]=d;var a={};for(var i in t)hasOwnProperty.call(t,i)&&(a[i]=t[i]);a.originalType=e,a[s]="string"==typeof e?e:o,c[1]=a;for(var u=2;u<l;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},62277:function(e,t,n){n.r(t),n.d(t,{assets:function(){return i},contentTitle:function(){return c},default:function(){return s},frontMatter:function(){return l},metadata:function(){return a},toc:function(){return u}});var r=n(83117),o=(n(67294),n(3905));const l={},c=void 0,a={unversionedId:"ts_js/eventloop",id:"ts_js/eventloop",title:"eventloop",description:"2022/12/11",source:"@site/docs/ts_js/eventloop.md",sourceDirName:"ts_js",slug:"/ts_js/eventloop",permalink:"/docs/ts_js/eventloop",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"re",permalink:"/docs/python/re"},next:{title:"typescript",permalink:"/docs/ts_js/typescript"}},i={},u=[],p={toc:u};function s(e){let{components:t,...l}=e;return(0,o.kt)("wrapper",(0,r.Z)({},p,l,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"2022/12/11"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D"},"latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D")),(0,o.kt)("p",null,"\u542c\u5b8c\u5927\u4f6c\u51e0\u5e74\u524d\u7684JSConf\u4e0a\u7684\u5206\u4eab\uff0c\u611f\u89c9\u6536\u76ca\u5f88\u591a\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"image-20221211132016368",src:n(63216).Z,width:"2630",height:"1350"})),(0,o.kt)("p",null,"\u9996\u5148\uff0cJS\u662f\u4e00\u4e2a\u5355\u7ebf\u7a0b\u7684\u8bed\u8a00\u3002\u8fd9\u4e5f\u5c31\u610f\u5473\u7740\uff0c\u5b83\u6ca1\u6709\u771f\u6b63\u7684\u50cfC/C++\u90a3\u6837\u7684Thread\uff0c\u800c\u662f\u53ea\u80fd\u4e00\u6b21\u505a\u4e00\u4ef6\u4e8b\u60c5\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8eCall Stack\uff0c\u8fd9\u4e2a\u5bf9\u5404\u79cd\u8bed\u8a00\u90fd\u5dee\u4e0d\u591a\uff0c\u8c03\u7528\u6808\u90fd\u6709\u5165\u6808\u3001\u51fa\u6808\u7684\u64cd\u4f5c\u3002\u4f46\u662f\u5982\u679c\u9047\u5230Blocking\u7684\u4e8b\u4ef6\uff0c\u6bd4\u5982Alert\u5f39\u7a97\uff0c\u6bd4\u5982Xhr request\uff0c\u6bd4\u5982\u8d85\u7ea7\u5927\u7684\u6570\u7ec4\u904d\u5386\u5faa\u73af\uff0c\u90fd\u4f1a\u5360\u7528Call Stack\uff0c\u5bfc\u81f4\u540e\u7eed\u7684\u4e8b\u4ef6\u65e0\u6cd5\u8fdb\u884c\u3002"),(0,o.kt)("p",null,"\u8fd9\u91cc\u8fd8\u6709\u4e2a\u6982\u5ff5\uff0c\u5c31\u662fChrome\u7b49\u6d4f\u89c8\u5668\u9ed8\u8ba4\u90fd\u662f16ms \u5237\u65b0\u4e00\u6b21\u9875\u9762\uff0c\u6bcf\u79d260\u5e27\u3002\u5982\u679cjs\u7684Call Stack\u91cc\u5355\u4e2a\u4efb\u52a1\u8c03\u7528\u94fe\u7684\u8c03\u7528\u65f6\u957f\uff08\u5373\u6e05\u7a7aCall Stack\u6240\u9700\u82b1\u8d39\u7684\u65f6\u95f4\uff09\u8d85\u8fc716ms\uff0c\u90a3\u4e48\u5fc5\u7136\u4f1ablock\u4f4f\u6d4f\u89c8\u5668\u8bf7\u6c42\u7ed8\u5236\u9875\u9762\u7684\u4efb\u52a1\u3002"),(0,o.kt)("p",null,"\u5bf9\u4e8eNode\u6765\u8bf4\uff0c\u5b83\u7684backend\u662fC++\uff0c\u5bf9JS\u4ee3\u7801\u53ea\u5f00\u653eWeb API\u3002\u8fd9\u5957Web API\u662f\u7531\u4e00\u4e9b\u652f\u6301\u591a\u7ebf\u7a0b\u7684\u8bed\u8a00\u7f16\u5199\u7684\uff0c\u6bd4\u5982Node\u7684timer\uff1a"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://github.com/nodejs/node/blob/main/src/timers.cc"},"node/timers.cc at main \xb7 nodejs/node (github.com)")),(0,o.kt)("p",null,"\u7136\u540e\u5176\u5bf9JavaScript\u66b4\u9732SetTimeout\u63a5\u53e3\u3002"),(0,o.kt)("p",null,"\u4e5f\u5c31\u662f\u8bf4\uff0cJavaScript\u91cc\u7684SetTimeout\u65e0\u975e\u662f\u4e00\u4e2a\u5b8f\u5b9a\u4e49\uff0c\u5176\u771f\u6b63\u505a\u7684\u4e8b\u60c5\uff0c\u5c31\u662f\u628a\u4efb\u52a1\u4e22\u7ed9Web API\u7684\u5b9e\u73b0\u8005\u53bb\u505a\uff08\u65e0\u8bba\u662fNode \u8fd8\u662fChrome V8\uff09\uff0c\u7136\u540e\u540e\u7aef\u5f15\u64ce\u505a\u5b8c\u4efb\u52a1\u540e\u518d\u628a\u56de\u8c03\u4efb\u52a1\u653e\u5230Callback Queue\u91cc\u3002"),(0,o.kt)("p",null,"JS\u7684Runtime\u4f1a\u5728\u6e05\u7a7aCall Stack\u540e\uff0c\u53bb\u4e0d\u65ad\u68c0\u67e5Callback Queue\uff0c\u7136\u540e\u628aCallback Queue\u91cc\u7684\u4efb\u52a1\u632a\u5230Callback Stack\u91cc\u6267\u884c\u3002"),(0,o.kt)("p",null,"\u8fd9\u4e5f\u662fReact\u7b49\u6846\u67b6\u5206\u5757\u6e32\u67d3\u7684\u903b\u8f91\uff1a\u5c3d\u91cf\u628a\u4efb\u52a1\u5206\u5272\u5f97\u8db3\u591f\u5c0f\uff0c\u8ba9\u6d4f\u89c8\u5668\u80fd\u591f\u9891\u7e41\u5730\u6e05\u7a7aCallback Stack\uff0c\u8fd9\u6837\u6bcf16ms\u6267\u884c\u7684\u6e32\u67d3\u4efb\u52a1\u624d\u80fd\u6b63\u5e38\u5730\u88ab\u6267\u884c\u3002"))}s.isMDXComponent=!0},63216:function(e,t,n){t.Z=n.p+"assets/images/image-20221211132016368-e8af75569bb323ee1f56050c74c6ab2b.png"}}]);