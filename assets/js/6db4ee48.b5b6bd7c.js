"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[8833],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=a.createContext({}),c=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=c(e.components);return a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=r,h=d["".concat(p,".").concat(m)]||d[m]||u[m]||i;return n?a.createElement(h,l(l({ref:t},s),{},{components:n})):a.createElement(h,l({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var c=2;c<i;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80210:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return s},default:function(){return d}});var a=n(87462),r=n(63366),i=(n(67294),n(3905)),l=["components"],o={title:"Interpretable AI"},p=void 0,c={unversionedId:"ai/interpretable_ai",id:"ai/interpretable_ai",title:"Interpretable AI",description:"From book Interpretable AI",source:"@site/docs/ai/interpretable_ai.md",sourceDirName:"ai",slug:"/ai/interpretable_ai",permalink:"/docs/ai/interpretable_ai",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/ai/interpretable_ai.md",tags:[],version:"current",frontMatter:{title:"Interpretable AI"},sidebar:"tutorialSidebar",previous:{title:"Deep Learning from Scratch",permalink:"/docs/ai/deep_learning"},next:{title:"On the Opportunities and Risks of Foundation Models - 2021",permalink:"/docs/ai/on_the_opportunities_and_risks_of_foundation_models"}},s=[{value:"Data Representation",id:"data-representation",children:[],level:4},{value:"\u6709\u76d1\u7763\u548c\u65e0\u76d1\u7763",id:"\u6709\u76d1\u7763\u548c\u65e0\u76d1\u7763",children:[{value:"Data Leakage",id:"data-leakage",children:[],level:5},{value:"Bias",id:"bias",children:[],level:5},{value:"Regulatory",id:"regulatory",children:[],level:5}],level:4},{value:"Interpretability vs Explainability",id:"interpretability-vs-explainability",children:[],level:4}],u={toc:s};function d(e){var t=e.components,o=(0,r.Z)(e,l);return(0,i.kt)("wrapper",(0,a.Z)({},u,o,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"From book ",(0,i.kt)("em",{parentName:"p"},"Interpretable AI")),(0,i.kt)("h4",{id:"data-representation"},"Data Representation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220806091908298",src:n(66481).Z,width:"942",height:"688"})),(0,i.kt)("h4",{id:"\u6709\u76d1\u7763\u548c\u65e0\u76d1\u7763"},"\u6709\u76d1\u7763\u548c\u65e0\u76d1\u7763"),(0,i.kt)("p",null,"\u6709\u76d1\u7763\uff1a\u6709\u6807\u51c6tag\uff0cRegression Classification"),(0,i.kt)("p",null,"\u65e0\u76d1\u7763\uff1a\u5982\uff1a\u805a\u7c7b"),(0,i.kt)("p",null,"\u589e\u5f3a\u5b66\u4e60\uff1a\u548c\u73af\u5883\u4ea4\u4e92\uff0c\u5982\u626b\u5730\u673a\u5668\u4eba\uff0cGo, Chess"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220806092255249",src:n(84425).Z,width:"1050",height:"521"})),(0,i.kt)("p",null,"\u4e09\u4e2a\u6b65\u9aa4\uff1a"),(0,i.kt)("p",null,"Learning, Testing, Deploying"),(0,i.kt)("h5",{id:"data-leakage"},"Data Leakage"),(0,i.kt)("p",null,"\u6bd4\u5982\u533b\u751f\u8bca\u65ad\u7684\u4fe1\u606f\uff0c\u4f1a\u589e\u5f3a\u6d4b\u8bd5\u96c6\u7684\u6027\u80fd\uff0c\u4f46\u4f1a\u4e25\u91cd\u5f71\u54cdNew Data\u7684\u6027\u80fd"),(0,i.kt)("h5",{id:"bias"},"Bias"),(0,i.kt)("p",null,"\u91c7\u6837\u5b58\u5728\u504f\u5dee\uff0c\u53ea\u9488\u5bf9\u4e00\u5c0f\u90e8\u5206\u800c\u4e0d\u662f\u5168\u4f53\u60c5\u51b5"),(0,i.kt)("h5",{id:"regulatory"},"Regulatory"),(0,i.kt)("p",null,"GDPR"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4e0d\u8ba9\u4e0a\u8ff0\u4e09\u4e2a\u95ee\u9898\u5f71\u54cd\u6211\u4eec\u7684model\uff0c\u5f15\u5165Interpretation, Explanation\u548cMonitoring"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220806093448668",src:n(30563).Z,width:"1127",height:"645"})),(0,i.kt)("h4",{id:"interpretability-vs-explainability"},"Interpretability vs Explainability"),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Interpretability")," is all about understanding the cause and effect within an AI system. It is the degree to which we can consistently estimate what a model will predict given an input, understand how the model came up with the prediction, understand how the prediction changes with changes in the input or algorithmic parameters, and finally, understand when the model has made a mistake. "),(0,i.kt)("p",null,(0,i.kt)("strong",{parentName:"p"},"Explainability"),", on the other hand, goes beyond interpretability in that it helps us understand in a human-readable form how and why a model came up with a prediction. It explains the internal mechanics of the system in human terms, with the intent to reach a much wider audience. Explainability requires interpretability as a building block and also looks to other fields and areas, such as human-computer interaction (HCI), law, and ethics."),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220806094841603",src:n(85010).Z,width:"1299",height:"1077"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"image-20220806095152567",src:n(972).Z,width:"940",height:"570"})),(0,i.kt)("p",null,"\u51b3\u7b56\u6811\uff1a\u5bb9\u6613overfitting"),(0,i.kt)("p",null,"GAM: y = w0 + f1(x1) + f2(x2) +\u2026+ fn(xn)"),(0,i.kt)("p",null,"Bagging: \u591a\u4e2a\u51b3\u7b56\u6811\u5e73\u884c\u8bad\u7ec3\uff0c\u51cf\u5c11\u8fc7\u62df\u5408\u7684\u5f71\u54cd"),(0,i.kt)("p",null,"Boosting: \u4ece\u7b2c\u4e00\u68f5\u51b3\u7b56\u6811\u7684\u9519\u8bef\u4e2d\u5b66\u4e60\uff0c\u63d0\u5347\u6027\u80fd"))}d.isMDXComponent=!0},66481:function(e,t,n){t.Z=n.p+"assets/images/image-20220806091908298-e1b35b5693932a6e84350c2c0210cc37.png"},84425:function(e,t,n){t.Z=n.p+"assets/images/image-20220806092255249-b712eac75215b3a5ac2e92b71748f0d7.png"},30563:function(e,t,n){t.Z=n.p+"assets/images/image-20220806093448668-5a62842cc37df649c4644314d2daba5d.png"},85010:function(e,t,n){t.Z=n.p+"assets/images/image-20220806094841603-bdc04fc41600220411f343f19dc324c4.png"},972:function(e,t,n){t.Z=n.p+"assets/images/image-20220806095152567-78725d44e1eb3496a8084276751462e3.png"}}]);