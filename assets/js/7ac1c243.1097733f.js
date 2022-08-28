"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[291],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),h=u(n),f=a,d=h["".concat(l,".").concat(f)]||h[f]||s[f]||i;return n?r.createElement(d,o(o({ref:t},p),{},{components:n})):r.createElement(d,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,o[1]=c;for(var u=2;u<i;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8231:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return p},default:function(){return h}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],c={},l=void 0,u={unversionedId:"blockchain/Chainlink",id:"blockchain/Chainlink",title:"Chainlink",description:"Chainlink",source:"@site/docs/blockchain/Chainlink.md",sourceDirName:"blockchain",slug:"/blockchain/Chainlink",permalink:"/docs/blockchain/Chainlink",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blockchain/Chainlink.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"pcal",permalink:"/docs/cpp/pcal"},next:{title:"Ethereum",permalink:"/docs/blockchain/Ethereum"}},p=[{value:"Chainlink",id:"chainlink",children:[{value:"Off-Chain Oracle Node",id:"off-chain-oracle-node",children:[],level:4},{value:"Shared Data Resource",id:"shared-data-resource",children:[],level:4}],level:3}],s={toc:p};function h(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},s,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"chainlink"},"Chainlink"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://docs.chain.link/docs/conceptual-overview/"},"\u5b98\u7f51")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/smartcontractkit/chainlink"},"Github")),(0,i.kt)("p",null,(0,i.kt)("img",{parentName:"p",src:"https://docs.chain.link/files/881ade6-Simple_Architecture_Diagram_1_V1.png",alt:"Request Model Diagram"})),(0,i.kt)("h4",{id:"off-chain-oracle-node"},"Off-Chain Oracle Node"),(0,i.kt)("p",null,"\u57fa\u672c\u7684\u8bf7\u6c42\u4e5f\u65e0\u975e\u5c31\u662fRequest->Response"),(0,i.kt)("p",null,"\u4f46\u662f\u4e2d\u95f4\u591a\u4e86\u4e2a\u94fe\u4e0a\u94fe\u4e0b\u8f6c\u6362\u7684\u8fc7\u7a0b\uff0c\u800c\u4e14\u94fe\u4e0b\u7684Node\u5728\u63a5\u53d7\u5230\u8bf7\u6c42\u540e\uff0c\u9700\u8981\u5c06Response \u89e3\u6790\u4e3aBlockchain Compatible Format."),(0,i.kt)("h4",{id:"shared-data-resource"},"Shared Data Resource"),(0,i.kt)("p",null,"Data\u7684\u6765\u6e90\uff0c\u662f\u7531Community\u7ef4\u62a4\u7684\uff0c\u6709\u70b9\u6d88\u606f\u961f\u5217\u7684\u5473\u9053\u3002\u6709Consumer\uff0c\u6709Aggregator\uff0c\u5f53\u7136\u4e2d\u95f4\u8fd8\u6709Proxy\u3002"),(0,i.kt)("p",null,"\u70b9\u5f00\u4e86\u770b\u4e86\u4e0b\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://data.chain.link/?_ga=2.222197328.955058994.1653976634-1705804035.1653976634"},"\u6709\u5f88\u591a")),(0,i.kt)("p",null,"\u6d88\u606f\u662f\u7531\u591a\u4e2aOracle\u53d1\u51fa\u5230\u94fe\u4e0a\u7ecfAggregator\u6574\u5408\u540e\u4ea7\u751f\u7684\uff0c\u5f53\u7136\u65f6\u6548\u6027\u80af\u5b9a\u6ca1\u6709\u4ea4\u6613\u6240\u7684K\u7ebf\u56fe\u90a3\u4e48\u5b9e\u65f6\uff0c\u6bd5\u7adf\u533a\u5757\u786e\u8ba4\u4e5f\u9700\u8981\u65f6\u95f4\u3002\u76ee\u524d\u8bbe\u7f6e\u7684Trigger Parameter\u662f\u53d8\u52a8\u8d85\u8fc70.5%\uff0c\u6216\u8005\u4e00\u5c0f\u65f6\u3002"),(0,i.kt)("p",null,"\u5f53\u7136\uff0c\u884c\u60c5\u6570\u636e\u6ca1\u6709\u90a3\u4e48\u5b9e\u65f6\uff0c\u4f46\u662f\u5929\u6c14\u6570\u636e\u7b49\u7b49\u8fd8\u662f\u76f8\u5f53\u4e0d\u9519\u7684\u3002"),(0,i.kt)("p",null,"\u770b\u5230\u8fd9\u91cc\u662f\u4e0d\u662f\u4e5f\u6709\u70b9\u624b\u75d2\u75d2\uff1f\u56e0\u4e3a\u4ece\u8fd9\u4e2aChain\u4e0a\uff0c\u6211\u4eec\u4e5f\u53ef\u4ee5Consume\u6570\u636e\uff0c\u83b7\u53d6\u5230\u53bb\u4e2d\u5fc3\u5316\u7684\u4fe1\u606f\u3002"))}h.isMDXComponent=!0}}]);