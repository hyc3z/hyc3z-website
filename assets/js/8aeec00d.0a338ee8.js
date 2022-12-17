"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[1030],{3905:function(e,t,i){i.d(t,{Zo:function(){return u},kt:function(){return g}});var n=i(67294);function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function r(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,n)}return i}function s(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?r(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):r(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}function l(e,t){if(null==e)return{};var i,n,a=function(e,t){if(null==e)return{};var i,n,a={},r=Object.keys(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||(a[i]=e[i]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)i=r[n],t.indexOf(i)>=0||Object.prototype.propertyIsEnumerable.call(e,i)&&(a[i]=e[i])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),i=t;return e&&(i="function"==typeof e?e(t):s(s({},t),e)),i},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var i=e.components,a=e.mdxType,r=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(i),m=a,g=p["".concat(o,".").concat(m)]||p[m]||d[m]||r;return i?n.createElement(g,s(s({ref:t},u),{},{components:i})):n.createElement(g,s({ref:t},u))}));function g(e,t){var i=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=i.length,s=new Array(r);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l[p]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<r;c++)s[c]=i[c];return n.createElement.apply(null,s)}return n.createElement.apply(null,i)}m.displayName="MDXCreateElement"},75588:function(e,t,i){i.r(t),i.d(t,{assets:function(){return o},contentTitle:function(){return s},default:function(){return p},frontMatter:function(){return r},metadata:function(){return l},toc:function(){return c}});var n=i(83117),a=(i(67294),i(3905));const r={title:"Microservices Patterns"},s=void 0,l={unversionedId:"design/microservices",id:"design/microservices",title:"Microservices Patterns",description:"2022/7/31",source:"@site/docs/design/microservices.md",sourceDirName:"design",slug:"/design/microservices",permalink:"/docs/design/microservices",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/design/microservices.md",tags:[],version:"current",frontMatter:{title:"Microservices Patterns"},sidebar:"tutorialSidebar",previous:{title:"Domain Driven Design",permalink:"/docs/design/ddd"},next:{title:"Software Architecture",permalink:"/docs/design/software_architecture_fundamentals"}},o={},c=[{value:"Monolithic hell",id:"monolithic-hell",level:4},{value:"Benefits",id:"benefits",level:4},{value:"Drawbacks",id:"drawbacks",level:4},{value:"Three sections",id:"three-sections",level:4},{value:"Communication Overhead",id:"communication-overhead",level:4},{value:"4+1 View",id:"41-view",level:4},{value:"Defining an application\u2019s microservice architecture",id:"defining-an-applications-microservice-architecture",level:4},{value:"Single Responsibility Principle",id:"single-responsibility-principle",level:4},{value:"Obstacles",id:"obstacles",level:4},{value:"IPC",id:"ipc",level:4},{value:"Dimensions",id:"dimensions",level:5},{value:"Rest drawbacks",id:"rest-drawbacks",level:4},{value:"Message broker",id:"message-broker",level:4},{value:"Saga",id:"saga",level:4},{value:"Domain Driven Design",id:"domain-driven-design",level:4},{value:"Aggregates",id:"aggregates",level:4},{value:"Idempotent messages",id:"idempotent-messages",level:4}],u={toc:c};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022/7/31"),(0,a.kt)("p",null,"\u6458\u81eaMicroservices Patterns"),(0,a.kt)("h4",{id:"monolithic-hell"},"Monolithic hell"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731103629296",src:i(58318).Z,width:"1024",height:"868"})),(0,a.kt)("p",null,"\u5355app\u56ca\u62ec\u4e86\u6240\u6709\u529f\u80fd\uff0c\u5728\u65e9\u671f\u5f00\u53d1\u5f88\u4fbf\u6377\uff0cbreaking changes\u4e5f\u5f88\u5bb9\u6613\u505a\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731104010734",src:i(69544).Z,width:"1106",height:"732"})),(0,a.kt)("p",null,"\u4e0d\u540cteam contribute\u5230\u540c\u4e00\u4e2arepo\uff0c\u53ef\u60f3\u800c\u77e5\u8fd9\u91cc\u9762\u7684conflict resolving issue\u6709\u591a\u5c11\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731104221551",src:i(32272).Z,width:"1100",height:"800"})),(0,a.kt)("p",null,"\u540c\u65f6\uff0cChris\u8fd8\u4e3b\u5f20\u6bcf\u4e2aservice\u90fd\u6709\u81ea\u5df1\u7684data schema\u548cdata store\uff0c\u8fd9\u6837\u5c31\u4e0d\u4f1a\u51fa\u73b0\u4fee\u6539entity\u5f71\u54cd\u5176\u4ed6\u670d\u52a1\u7684\u60c5\u51b5\u3002"),(0,a.kt)("h4",{id:"benefits"},"Benefits"),(0,a.kt)("p",null,"\u5c0f\uff0c\u5bb9\u6613\u7ef4\u62a4\u3002\u5404\u4e2ateam\u81ea\u6cbb\uff0c\u4e3a\u5f15\u5165\u65b0\u6280\u672f\u63d0\u4f9b\u4fbf\u6377\u3002"),(0,a.kt)("p",null,"\u4e92\u76f8\u72ec\u7acb\uff0c\u9519\u8bef\u9694\u79bb\u3002"),(0,a.kt)("h4",{id:"drawbacks"},"Drawbacks"),(0,a.kt)("p",null,"\u5f88\u96be\u627e\u5230\u6700\u5408\u9002\u7684\u670d\u52a1\u8bbe\u8ba1\uff08Find the right set of services\uff09"),(0,a.kt)("p",null,"\u6d4b\u8bd5\u534f\u8c03\u6bd4\u8f83\u56f0\u96be"),(0,a.kt)("p",null,"\u6709\u4e9bFeature\u9700\u8981\u591a\u4e2ateam\u5408\u4f5c\uff0c\u534f\u8c03\uff08e.g. rollout plans\uff09"),(0,a.kt)("p",null,"\u540c\u65f6\uff0c\u5982\u679c\u8981\u4ecemonolithic\u5411microservice \u8f6c\u53d8\uff0c\u65f6\u95f4\u70b9\u5f88\u96be\u9009\u62e9"),(0,a.kt)("h4",{id:"three-sections"},"Three sections"),(0,a.kt)("p",null,"Forces - issues must be addressed"),(0,a.kt)("p",null,"Resulting context "),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Benefits: forces resolved"),(0,a.kt)("li",{parentName:"ul"},"Drawbacks: forces unresolved"),(0,a.kt)("li",{parentName:"ul"},"Issues: new problems introduced")),(0,a.kt)("p",null,"Related patterns"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Predecessor"),(0,a.kt)("li",{parentName:"ul"},"Successor"),(0,a.kt)("li",{parentName:"ul"},"Alternative"),(0,a.kt)("li",{parentName:"ul"},"Generalization"),(0,a.kt)("li",{parentName:"ul"},"Specialization")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731105805840",src:i(18524).Z,width:"1162",height:"870"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731105939843",src:i(33235).Z,width:"1052",height:"944"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731110052915",src:i(42806).Z,width:"1100",height:"782"})),(0,a.kt)("h4",{id:"communication-overhead"},"Communication Overhead"),(0,a.kt)("p",null,"the communication overhead of a team of size N is O(N^2^)"),(0,a.kt)("h4",{id:"41-view"},"4+1 View"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731110515932",src:i(70896).Z,width:"978",height:"834"})),(0,a.kt)("h4",{id:"defining-an-applications-microservice-architecture"},"Defining an application\u2019s microservice architecture"),(0,a.kt)("p",null,"\u4eceFunctional requirement\u5f00\u59cb"),(0,a.kt)("h4",{id:"single-responsibility-principle"},"Single Responsibility Principle"),(0,a.kt)("p",null,"A class should have only one reason to change. Robert C. Martin"),(0,a.kt)("h4",{id:"obstacles"},"Obstacles"),(0,a.kt)("p",null,"Maintaining data across services"),(0,a.kt)("p",null,"Network latency"),(0,a.kt)("p",null,"Synchronous communication"),(0,a.kt)("h4",{id:"ipc"},"IPC"),(0,a.kt)("p",null,"HTTP based REST or gRPC"),(0,a.kt)("h5",{id:"dimensions"},"Dimensions"),(0,a.kt)("p",null,"1 to 1 or 1 to many"),(0,a.kt)("p",null,"(A)Synchronous"),(0,a.kt)("h4",{id:"rest-drawbacks"},"Rest drawbacks"),(0,a.kt)("p",null,"It only supports the request/response style of communication. "),(0,a.kt)("p",null,"Reduced availability. Because the client and service communicate directly without an intermediary to buffer messages, they must both be running for the duration of the exchange. "),(0,a.kt)("p",null,"Clients must know the locations (URLs) of the service instances(s). As described in section 3.2.4, this is a nontrivial problem in a modern application. Clients must use what is known as a service discovery mechanism to locate service instances."),(0,a.kt)("h4",{id:"message-broker"},"Message broker"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731125022170",src:i(53590).Z,width:"1186",height:"670"})),(0,a.kt)("p",null,"\u8fd9\u4e2a\u7ed3\u6784\u7684Drawback\u5c31\u5728\u4e8e\u5355\u70b9\u6545\u969c\u548cPerformance bottleneck\u3002\u5f88\u5e78\u8fd0\uff0c\u6709\u4e86cloud\uff0c\u8fd9\u4e24\u4e2a\u95ee\u9898\u90fd\u53ef\u4ee5\u5f88\u597d\u5730\u89e3\u51b3\u3002"),(0,a.kt)("p",null,"\u4f46\u662f\uff0c\u7531\u4e8e\u8fd8\u662f\u5b58\u5728\u7406\u8bba\u4e0a\u6545\u969c\u7684\u53ef\u80fd\uff0c\u5f88\u591amessage queue\u90fd\u4fdd\u8bc1deliver message at least once."),(0,a.kt)("p",null,"\u56e0\u6b64\u8981\u4fdd\u8bc1\u6240\u8c13\u7684idempotent\uff0c\u5e42\u7b49\uff0c\u4e5f\u5c31\u662f\u591a\u6b21\u76f8\u540c\u6d88\u606f\u7684\u4f5c\u7528\u548c\u4e00\u6b21\u662f\u4e00\u6837\u7684\u3002"),(0,a.kt)("p",null,"API\u7684\u8c03\u7528\u901a\u5e38\u662f\u540c\u6b65\u7684\uff0c\u800c\u6d88\u606f\u9a71\u52a8\u5219\u662f\u5f02\u6b65\u7684\u3002"),(0,a.kt)("p",null,"ACID (Atomicity, Consistency, Isolation, Durability)"),(0,a.kt)("h4",{id:"saga"},"Saga"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731132244740",src:i(21567).Z,width:"1092",height:"464"})),(0,a.kt)("p",null,"\u4fdd\u8bc1\u4e8b\u52a1\u7684\u539f\u5b50\u6027\uff0c\u8981\u5728\u4e8b\u52a1fail\u4e4b\u540e\u505acompensate roll back steps"),(0,a.kt)("h4",{id:"domain-driven-design"},"Domain Driven Design"),(0,a.kt)("p",null,"DDD, each domain model being owned and developed by a single team"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220731160443551",src:i(94525).Z,width:"1182",height:"950"})),(0,a.kt)("h4",{id:"aggregates"},"Aggregates"),(0,a.kt)("p",null,"\u6570\u636e\u7684\u6574\u5408\u662f\u907f\u4e0d\u5f00\u7684\u3002\u7406\u60f3\u60c5\u51b5\u4e0b\uff0c\u6574\u5408\u5e94\u8be5\u5c3d\u53ef\u80fd\u5c0f\u3002"),(0,a.kt)("h4",{id:"idempotent-messages"},"Idempotent messages"),(0,a.kt)("p",null,"RDBMS-BASED, message ID\u53ef\u4ee5\u5f88\u597d\u5730\u8fa8\u522b\u662f\u5426\u662f\u91cd\u590d\u7684message"))}p.isMDXComponent=!0},58318:function(e,t,i){t.Z=i.p+"assets/images/image-20220731103629296-001118d738bd528d81aa92c93b21f34e.png"},69544:function(e,t,i){t.Z=i.p+"assets/images/image-20220731104010734-75862e15a8b200bcea53f2fb230b8960.png"},32272:function(e,t,i){t.Z=i.p+"assets/images/image-20220731104221551-c92d84a7732d0e4b7e6d446f0a9d226e.png"},18524:function(e,t,i){t.Z=i.p+"assets/images/image-20220731105805840-1d4bac88f3eec295329610e380e40639.png"},33235:function(e,t,i){t.Z=i.p+"assets/images/image-20220731105939843-2cad2f2b59fd26c6c57378ffd7d62928.png"},42806:function(e,t,i){t.Z=i.p+"assets/images/image-20220731110052915-1f88cf48880a9d4011e04b0472cfc646.png"},70896:function(e,t,i){t.Z=i.p+"assets/images/image-20220731110515932-88c6a7d383a679cb07a63481d4676f1a.png"},53590:function(e,t,i){t.Z=i.p+"assets/images/image-20220731125022170-421c1c60bd830ef039a10f6fd397ef28.png"},21567:function(e,t,i){t.Z=i.p+"assets/images/image-20220731132244740-f28f4b2592c9ebd1470eaa3030af80a9.png"},94525:function(e,t,i){t.Z=i.p+"assets/images/image-20220731160443551-312ea01943f27ad52030bc2b1a12299b.png"}}]);