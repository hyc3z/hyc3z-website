"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[961],{3905:function(e,t,n){n.d(t,{Zo:function(){return o},kt:function(){return k}});var l=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,l,i=function(e,t){if(null==e)return{};var n,l,i={},a=Object.keys(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(l=0;l<a.length;l++)n=a[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=l.createContext({}),c=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},o=function(e){var t=c(e.components);return l.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},p=l.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,s=e.parentName,o=d(e,["components","mdxType","originalType","parentName"]),p=c(n),k=i,g=p["".concat(s,".").concat(k)]||p[k]||u[k]||a;return n?l.createElement(g,r(r({ref:t},o),{},{components:n})):l.createElement(g,r({ref:t},o))}));function k(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,r=new Array(a);r[0]=p;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d.mdxType="string"==typeof e?e:i,r[1]=d;for(var c=2;c<a;c++)r[c]=n[c];return l.createElement.apply(null,r)}return l.createElement.apply(null,n)}p.displayName="MDXCreateElement"},7395:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return d},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return o},default:function(){return p}});var l=n(7462),i=n(3366),a=(n(7294),n(3905)),r=["components"],d={title:"Database Basics"},s=void 0,c={unversionedId:"database/database_internals",id:"database/database_internals",title:"Database Basics",description:"DBMS\u5206\u7c7b",source:"@site/docs/database/database_internals.md",sourceDirName:"database",slug:"/database/database_internals",permalink:"/docs/intro/docs/database/database_internals",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/database_internals.md",tags:[],version:"current",frontMatter:{title:"Database Basics"},sidebar:"tutorialSidebar",previous:{title:"Oracle",permalink:"/docs/intro/docs/database/Oracle"},next:{title:"MongoDB",permalink:"/docs/intro/docs/database/mongodb"}},o=[{value:"DBMS\u5206\u7c7b",id:"dbms\u5206\u7c7b",children:[{value:"OLTP Online Transaction Processing",id:"oltp-online-transaction-processing",children:[],level:5},{value:"OLAP Online Analytical Processing",id:"olap-online-analytical-processing",children:[],level:5},{value:"HTAP Hybrid transactional and analytical processing",id:"htap-hybrid-transactional-and-analytical-processing",children:[],level:5}],level:4},{value:"Storage Engine",id:"storage-engine",children:[{value:"Transaction Manager",id:"transaction-manager",children:[],level:5},{value:"Lock Manager",id:"lock-manager",children:[],level:5},{value:"Access Methods(storage structures)",id:"access-methodsstorage-structures",children:[],level:5},{value:"Buffer Manager",id:"buffer-manager",children:[],level:5},{value:"Recovery Manager",id:"recovery-manager",children:[],level:5},{value:"Memory-Based Stores",id:"memory-based-stores",children:[],level:5},{value:"Disk-Based Database",id:"disk-based-database",children:[],level:5},{value:"Column - vs Row- Oriented DBMS",id:"column---vs-row--oriented-dbms",children:[],level:5},{value:"Wide Column Store",id:"wide-column-store",children:[],level:5},{value:"Data files and Index files",id:"data-files-and-index-files",children:[],level:5},{value:"Data files",id:"data-files",children:[],level:5},{value:"Index file",id:"index-file",children:[],level:5}],level:4},{value:"B-Tree",id:"b-tree",children:[{value:"Binary Search Trees(BST)",id:"binary-search-treesbst",children:[],level:5},{value:"Tree Balancing",id:"tree-balancing",children:[],level:5},{value:"Big Little Endian",id:"big-little-endian",children:[],level:5},{value:"Simple Page Organization",id:"simple-page-organization",children:[],level:5},{value:"Slotted Pages",id:"slotted-pages",children:[],level:5}],level:4},{value:"Page Header",id:"page-header",children:[{value:"Magic Numbers",id:"magic-numbers",children:[],level:5},{value:"Sibling Links",id:"sibling-links",children:[],level:5},{value:"Rightmost Pointers",id:"rightmost-pointers",children:[],level:5},{value:"Node High Keys",id:"node-high-keys",children:[],level:5},{value:"Overflow Page",id:"overflow-page",children:[],level:5},{value:"Breadcrumbs",id:"breadcrumbs",children:[],level:5},{value:"Right-Only Appends",id:"right-only-appends",children:[],level:5}],level:4},{value:"ACID",id:"acid",children:[{value:"Cache Eviction",id:"cache-eviction",children:[],level:5},{value:"Pinned Pages",id:"pinned-pages",children:[],level:5},{value:"Page Replacement",id:"page-replacement",children:[],level:5}],level:4},{value:"Recovery",id:"recovery",children:[{value:"Steal and force",id:"steal-and-force",children:[],level:5}],level:4},{value:"Concurrency Control",id:"concurrency-control",children:[{value:"Serializable schedule",id:"serializable-schedule",children:[],level:5},{value:"Isolation Levels",id:"isolation-levels",children:[],level:5},{value:"Optimistic Concurrency Control",id:"optimistic-concurrency-control",children:[],level:5},{value:"Multiversion Concurrency Control",id:"multiversion-concurrency-control",children:[],level:5},{value:"Pessimistic Concurrency Control",id:"pessimistic-concurrency-control",children:[],level:5},{value:"Lock-Based Concurrency Control",id:"lock-based-concurrency-control",children:[],level:5},{value:"Locks and Latches",id:"locks-and-latches",children:[],level:5},{value:"RW Lock",id:"rw-lock",children:[],level:5},{value:"Copy-on-write",id:"copy-on-write",children:[],level:5},{value:"Lazy B-Tree",id:"lazy-b-tree",children:[],level:5},{value:"Lazy Adaptive Tree",id:"lazy-adaptive-tree",children:[],level:5},{value:"FD-Tree",id:"fd-tree",children:[],level:5},{value:"Bw-Tree",id:"bw-tree",children:[],level:5},{value:"LSM-Tree",id:"lsm-tree",children:[],level:5},{value:"Two and Multi component LSM Trees",id:"two-and-multi-component-lsm-trees",children:[],level:5},{value:"Bloom Filter",id:"bloom-filter",children:[],level:5},{value:"Skiplist",id:"skiplist",children:[],level:5},{value:"Keydir",id:"keydir",children:[],level:5}],level:4}],u={toc:o};function p(e){var t=e.components,d=(0,i.Z)(e,r);return(0,a.kt)("wrapper",(0,l.Z)({},u,d,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h4",{id:"dbms\u5206\u7c7b"},"DBMS\u5206\u7c7b"),(0,a.kt)("h5",{id:"oltp-online-transaction-processing"},"OLTP Online Transaction Processing"),(0,a.kt)("p",null,"\u9762\u5411\u7528\u6237\u7684\u8bf7\u6c42\u548c\u4e8b\u52a1\u5904\u7406\uff0cQuery\u662f\u9884\u5148\u5b9a\u597d\u7684"),(0,a.kt)("h5",{id:"olap-online-analytical-processing"},"OLAP Online Analytical Processing"),(0,a.kt)("p",null,"\u590d\u6742\u805a\u5408\u4efb\u52a1\uff0c\u5206\u6790\u3001\u5b58\u50a8\u6570\u636e\uff0c\u8fd0\u884c\u590d\u6742\u7684query"),(0,a.kt)("h5",{id:"htap-hybrid-transactional-and-analytical-processing"},"HTAP Hybrid transactional and analytical processing"),(0,a.kt)("p",null,"\u6df7\u5408\u4e86OLAP\u548cOLTP\u7684\u7279\u6027"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0101",src:n(8526).Z,width:"1182",height:"1880"})),(0,a.kt)("p",null,"Query -> Execution plan -> Execution engine -> Storage engine"),(0,a.kt)("h4",{id:"storage-engine"},"Storage Engine"),(0,a.kt)("h5",{id:"transaction-manager"},"Transaction Manager"),(0,a.kt)("p",null,"\u7ba1\u7406\u4e8b\u52a1\uff0c\u4e8b\u52a1\u53ea\u6709\u5728\u786e\u4fdd\u4e00\u81f4\u6027\u7684\u60c5\u51b5\u4e0b\u624d\u80fd\u79bb\u5f00\u6570\u636e\u5e93"),(0,a.kt)("h5",{id:"lock-manager"},"Lock Manager"),(0,a.kt)("p",null,"\u8d1f\u8d23\u7ed9\u6570\u636e\u5e93\u5bf9\u8c61\u52a0\u9501\uff0c\u4fdd\u8bc1\u6570\u636e\u5b8c\u6574\u6027"),(0,a.kt)("h5",{id:"access-methodsstorage-structures"},"Access Methods(storage structures)"),(0,a.kt)("p",null,"\u6570\u636e\u5728\u78c1\u76d8\u4e0a\u7684\u5b58\u53d6\uff0cB-Tree LSM Tree"),(0,a.kt)("h5",{id:"buffer-manager"},"Buffer Manager"),(0,a.kt)("p",null,"\u5728\u5185\u5b58\u4e2d\u7f13\u5b58\u6570\u636e"),(0,a.kt)("h5",{id:"recovery-manager"},"Recovery Manager"),(0,a.kt)("p",null,"\u5b58\u50a8\u64cd\u4f5c\u65e5\u5fd7\uff0c\u5728\u51fa\u9519\u65f6\u6062\u590d\u7cfb\u7edf\u72b6\u6001"),(0,a.kt)("h5",{id:"memory-based-stores"},"Memory-Based Stores"),(0,a.kt)("p",null,"\u901f\u5ea6\u5feb\uff0c\u4f46\u5185\u5b58\u4ef7\u683c\u8d35\uff0c\u4e14\u6613\u5931"),(0,a.kt)("h5",{id:"disk-based-database"},"Disk-Based Database"),(0,a.kt)("p",null,"\u78c1\u76d8\u7684\u968f\u673a\u5b58\u53d6\u6bd4\u5185\u5b58\u968f\u673a\u5b58\u53d6\u6162\u5f97\u591a\uff0c\u56e0\u6b64\u78c1\u76d8\u5b58\u50a8\u7ed3\u6784\u901a\u5e38\u90fd\u662f\u6811\u7ed3\u6784\uff0c\u5185\u5b58\u6570\u636e\u5e93\u6570\u636e\u7ed3\u6784\u5219\u66f4\u52a0\u591a\u6837\u3002"),(0,a.kt)("h5",{id:"column---vs-row--oriented-dbms"},"Column - vs Row- Oriented DBMS"),(0,a.kt)("p",null,"\u901a\u5e38\u6570\u636e\u5e93\u90fd\u5b58\u7740\u6570\u636e\u8bb0\u5f55\u7684\u96c6\u5408\uff0c\u5305\u62ec\u884c\u3001\u5217\u4ee5\u53ca\u5b83\u4eec\u7684\u4ea4\u70b9\u2014\u2014Field\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0102",src:n(7150).Z,width:"2817",height:"639"})),(0,a.kt)("p",null,"\u884c\u5b58\u50a8\u7684\u6570\u636e\u5e93\u5f88\u591a\uff0c\u6bd4\u5982MySQL\uff0cPostgres"),(0,a.kt)("p",null,"\u5217\u5b58\u50a8\u5982MonetDB C-Store\uff0cApache Druid"),(0,a.kt)("p",null,"\u5728\u5b58\u50a8\u4e0a\uff0c\u884c\u5b58\u50a8\u5728\u805a\u5408\u67e5\u8be2\u65f6\uff0c\u4f1a\u628a\u4e0d\u5fc5\u8981\u7684\u5217\u4e5f\u62ff\u51fa\u6765\uff0c\u589e\u52a0\u5f00\u9500\u3002\u5217\u5b58\u50a8\u5219\u66f4\u9002\u5408\u805a\u5408\uff0c\u540c\u4e00\u79cd\u6570\u636e\u7c7b\u578b\u5b58\u50a8\u5728\u4e00\u8d77\u4e5f\u4f1a\u6700\u5927\u5316\u538b\u7f29\u6548\u7387\uff08\u5bf9\u4e0d\u540c\u7c7b\u578b\u9009\u62e9\u4e0d\u540c\u538b\u7f29\u7b97\u6cd5\uff09\u3002"),(0,a.kt)("h5",{id:"wide-column-store"},"Wide Column Store"),(0,a.kt)("p",null,"\u5982 BigTable \u548cHBase"),(0,a.kt)("p",null,"\u4e0d\u8981\u548cColumn oriented\u6df7\u6dc6\u4e86\u3002"),(0,a.kt)("p",null,"Wide Column Store\u5176\u5b9e\u662f\u5bf9columns\u8fdb\u884c\u5206\u7ec4\uff0c\u6bcf\u4e2a\u5206\u7ec4\u5185\u90e8\u8fd8\u662frow-wise store."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0104",src:n(2967).Z,width:"1439",height:"604"})),(0,a.kt)("h5",{id:"data-files-and-index-files"},"Data files and Index files"),(0,a.kt)("p",null,"data files\u5b58\u50a8records\uff0cindex files\u5b58\u50a8meta\u6570\u636e"),(0,a.kt)("h5",{id:"data-files"},"Data files"),(0,a.kt)("p",null,"\u591a\u79cd\u5f62\u5f0f\uff0c\u5982"),(0,a.kt)("p",null,"Index Organized Tables"),(0,a.kt)("p",null,"Heap Organized Tables"),(0,a.kt)("p",null,"Hash Organized Tables"),(0,a.kt)("h5",{id:"index-file"},"Index file"),(0,a.kt)("p",null,"\u5728Primary data file\u4e0a\u7684index\u5c31\u79f0\u4f5cPrimary Index\u3002"),(0,a.kt)("p",null,"Secondary index\u53ef\u4ee5\u76f4\u63a5\u6307\u5411\u6570\u636erecord\uff0c\u4e5f\u53ef\u4ee5\u53ea\u5b58Primary key\u3002"),(0,a.kt)("p",null,"Clustered and Nonclustered\uff1a\u6709\u5e8f\u548c\u65e0\u5e8f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0105",src:n(6904).Z,width:"5700",height:"1470"})),(0,a.kt)("p",null,"\u5728\u6570\u636e\u8868\u6ca1\u6709\u6307\u5b9aprimary key\u65f6\uff0c\u6570\u636e\u5e93\u4f1a\u9ed8\u8ba4\u521b\u5efa\u4e00\u5217\u4e3b\u952e"),(0,a.kt)("p",null,"\u5982\u679cIndex\u76f4\u63a5\u6307\u5411\u6570\u636e\uff0c\u5728\u8bfb\u53d6\u65f6\u786e\u5b9e\u51cf\u5c11\u4e86\u8bfb\u76d8\u6b21\u6570\uff0c\u4f46\u66f4\u65b0\u65f6\u9700\u8981\u76f4\u63a5\u66f4\u65b0\u6307\u9488\uff0c\u5bf9\u4e8eWrite heavy\u7684\u5e94\u7528\u6765\u8bf4\uff0c\u5f00\u9500\u662f\u975e\u5e38\u5927\u7684\u3002\u800cMysql InnoDB\u4f7f\u7528\u4e86\u4e24\u6b21\u67e5\u627e\u7684\u65b9\u5f0f\uff0cSecondary Index\u548cPrimary Index\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0106",src:n(8366).Z,width:"2991",height:"1176"})),(0,a.kt)("h4",{id:"b-tree"},"B-Tree"),(0,a.kt)("p",null,"introduced by Rudolph Bayer and Edward M. McCreight back in 1971"),(0,a.kt)("h5",{id:"binary-search-treesbst"},"Binary Search Trees(BST)"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0202",src:n(3116).Z,width:"608",height:"434"})),(0,a.kt)("h5",{id:"tree-balancing"},"Tree Balancing"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0203",src:n(9957).Z,width:"1441",height:"538"})),(0,a.kt)("p",null,"\u5e73\u8861 vs \u4e0d\u5e73\u8861 \u6811"),(0,a.kt)("p",null,"\u5982\u679c\u6811\u9000\u5316\u4e86\uff0c\u67e5\u627e\u590d\u6742\u5ea6\u5c31\u4e0d\u518d\u662fLog~2~N\u800c\u662fN\u4e86\u3002"),(0,a.kt)("p",null,"\u4e8c\u53c9\u6811\u65cb\u8f6c\uff0c\u4e2d\u95f4\u7684\u8282\u70b9\u4f5c\u4e3a\u8f74\uff0c\u65cb\u8f6c\u6210\u4e3a\u65b0\u7684\u7236\u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0204",src:n(1220).Z,width:"847",height:"360"})),(0,a.kt)("p",null,"\u7136\u800c\uff0cBST\u6709\u51e0\u4e2a\u95ee\u9898\uff1a"),(0,a.kt)("p",null,"\u9996\u5148\uff0c\u6bcf\u6b21\u63d2\u5165\u90fd\u9700\u8981\u505a\u5e73\u8861\u64cd\u4f5c\uff0c\u8bfb\u5199\u5f00\u9500\u90fd\u5f88\u5927\u3002"),(0,a.kt)("p",null,"\u5176\u6b21\uff0c\u7236\u8282\u70b9\u4e0d\u4e00\u5b9a\u5b58\u5728\u5b50\u8282\u70b9\u9644\u8fd1\uff0c\u5982\u679c\u76f8\u5dee\u5f88\u8fdc\uff0c\u5c31\u9700\u8981\u5230\u522b\u7684\u6247\u533a\u8bfb\u53d6\uff0c\u589e\u52a0\u5bfb\u9053\u65f6\u95f4\u3002"),(0,a.kt)("p",null,"\u6240\u4ee5\uff0c\u9700\u8981\u4e24\u70b9\u6539\u8fdb\uff1a"),(0,a.kt)("p",null,"1\u3001\u589e\u52a0\u5b50\u8282\u70b9\u6570\u91cf\uff0c\u4e0d\u518d\u662f2\u4e2a"),(0,a.kt)("p",null,"2\u3001\u964d\u4f4e\u6811\u7684\u9ad8\u5ea6\uff0c\u51cf\u5c11seek\u6b21\u6570"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0207",src:n(6408).Z,width:"2817",height:"468"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0209",src:n(6711).Z,width:"4014",height:"1128"})),(0,a.kt)("p",null,"B-Tree\u5728\u4efb\u4f55\u5c42\u7ea7\u90fd\u53ef\u4ee5\u5b58\u50a8\u6570\u636e\uff0c\u800cB+-Tree\u53ea\u5728\u53f6\u8282\u70b9\u5b58\u6570\u636e\u3002"),(0,a.kt)("p",null,"InnoDB\u5c06B+-Tree\u5b9e\u73b0\u4e5f\u79f0\u4e3aB-Tree"),(0,a.kt)("p",null,"B-Tree \u7684\u6784\u5efa\u662f\u4eceBottom to top\uff0c\u4e0d\u50cfBST\u662f\u4eceTop to bottom"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0210",src:n(7427).Z,width:"1440",height:"465"})),(0,a.kt)("p",null,"\u6709\u4e9bB-Tree\u53f6\u8282\u70b9\u4e5f\u4f1a\u5305\u542b\u6307\u5411\u5144\u5f1f\u8282\u70b9\u7684\u6307\u9488\uff0c\u6709\u4e9b\u662f\u53cc\u5411\u6307\u9488\uff0c\u4f7f\u5f97\u6700\u5e95\u5c42\u7684\u53f6\u8282\u70b9\u4e5f\u79f0\u4e3a\u4e00\u4e2a\u53cc\u5411\u94fe\u8868\u3002"),(0,a.kt)("p",null,"\u5f53\u8282\u70b9\u63d2\u5165\u7684\u6570\u636e\u8d85\u8fc7\u4e00\u4e2a\u9608\u503c\uff0c\u5c31\u4f1a\u89e6\u53d1\u5206\u88c2\u3002"),(0,a.kt)("p",null,"\u5f53\u76f8\u90bb\u8282\u70b9\u7684\u6570\u636e\u91cf\u4f4e\u4e8eN\uff0c\u5c31\u53ef\u4ee5\u89e6\u53d1\u5408\u5e76\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5e0c\u671bB-Tree\u4e5f\u80fd\u5b58\u50a8\u5728\u786c\u76d8\u4e0a\uff0c\u4f46\u662f\u5185\u5b58\u91cc\u7684\u6570\u636e\u5b58\u50a8\u5f62\u5f0f\u4e0d\u662f\u5f88\u5173\u952e\uff0c\u56e0\u4e3a\u5185\u5b58\u7684\u968f\u673a\u5b58\u53d6\u901f\u5ea6\u5f88\u5feb\u3002\u5728\u786c\u76d8\u4e0a\uff0c\u6211\u4eec\u5c31\u9700\u8981\u8003\u8651\u5783\u573e\u56de\u6536\uff0c\u788e\u7247\u6574\u7406\u7b49\u60c5\u51b5\u3002"),(0,a.kt)("h5",{id:"big-little-endian"},"Big Little Endian"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0301",src:n(9093).Z,width:"1441",height:"182"})),(0,a.kt)("p",null,"\u6587\u4ef6\u7ed3\u6784"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0303",src:n(5733).Z,width:"1439",height:"385"})),(0,a.kt)("p",null,"Header\u548cTrailer\u90fd\u5305\u542b\u4e00\u4e9b\u8f85\u52a9\u4fe1\u606f\uff0c\u7528\u4e8e\u89e3\u5bc6\u6570\u636e\u7b49"),(0,a.kt)("h5",{id:"simple-page-organization"},"Simple Page Organization"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0304",src:n(6586).Z,width:"1439",height:"126"})),(0,a.kt)("p",null,"\u6709\u4e00\u4e9b\u95ee\u9898\uff1a"),(0,a.kt)("p",null,"\u589e\u52a0Key\u5c31\u6d89\u53ca\u5230\u79fb\u52a8\u5143\u7d20"),(0,a.kt)("p",null,"\u53ea\u9002\u5408\u56fa\u5b9a\u957f\u5ea6\u7684\u6570\u636e\uff0c\u4e0d\u80fd\u591f\u5b58\u53d6\u53d8\u957f\u6570\u636e"),(0,a.kt)("h5",{id:"slotted-pages"},"Slotted Pages"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0305",src:n(6966).Z,width:"906",height:"704"})),(0,a.kt)("p",null,"\u5728\u6bcf\u4e00\u4e2aPage\u4e2d\uff0c\u6709\u4e00\u4e2aPage header,\u5305\u542bPage\u548cCell\u7684\u4fe1\u606f\u3002\u7136\u540eCell\u91cc\u9762\u5b58\u50a8\u4e86\u4e00\u4e9b\u6570\u636e\uff0c\u53ef\u4ee5\u662f\u4efb\u610f\u6570\u636e\u3002Pointers\u6307\u5411cell\u3002"),(0,a.kt)("p",null,"Cell\u7684\u597d\u5904\u5728\u4e8e\uff0c\u5728\u5220\u9664\u7684\u65f6\u5019\u53ea\u9700\u8981\u6307\u9488\u7f6e\u7a7a\u5c31\u597d\u4e86\uff0c\u7136\u540e\u6570\u636e\u957f\u5ea6\u4e5f\u662f\u4e0d\u56fa\u5b9a\u7684\u3002\u788e\u7247\u548c\u4e0d\u8fde\u7eed\u7a7a\u95f4\u53ea\u9700\u8981\u91cd\u65b0\u5199\u4e00\u904dPage\u5c31\u53ef\u4ee5\u5f97\u5230\u5904\u7406\u3002"),(0,a.kt)("p",null,"\u800c\u4e14\uff0c\u5982\u679c\u9700\u8981\u6392\u5e8f\uff0c\u53ea\u9700\u8981\u5bf9Pointer\u6392\u5e8f\u5c31\u53ef\u4ee5\uff0c\u4e0d\u9700\u8981\u5bf9\u5b9e\u9645\u6570\u636e\u8fdb\u884c\u91cd\u65b0\u6392\u5e8f\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0309",src:n(4595).Z,width:"1441",height:"435"})),(0,a.kt)("p",null,"\u6240\u6709\u7684\u7a7a\u95f2\u533a\u57df\u7ec4\u6210\u4e00\u4e2aAvailability List\u3002SQLite\u4f1a\u5b58\u50a8\u6307\u5411\u7b2c\u4e00\u4e2a\u7a7a\u95f2\u5757\u7684\u6307\u9488\u3002"),(0,a.kt)("p",null,"\u65b0\u7684\u6570\u636e\u63d2\u5165\uff0c\u4f1a\u9075\u5faa\u4e24\u79cd:"),(0,a.kt)("p",null,"First Fit\u6216\u8005Best Fit\uff0c\u6765\u5c1d\u8bd5\u63d2\u5165\u3002"),(0,a.kt)("p",null,"\u5982\u679cdefragmentation\u4e4b\u540e\uff0c\u8fd8\u662f\u65e0\u6cd5\u63d2\u5165\uff0c\u5c31\u9700\u8981\u521b\u5efaOverflow Page\u3002"),(0,a.kt)("h4",{id:"page-header"},"Page Header"),(0,a.kt)("h5",{id:"magic-numbers"},"Magic Numbers"),(0,a.kt)("p",null,"\u4ee3\u8868page\u7684id\uff0c\u7c7b\u578b\u6216\u8005\u7248\u672c\u3002"),(0,a.kt)("h5",{id:"sibling-links"},"Sibling Links"),(0,a.kt)("p",null,"\u4e0d\u5fc5\u518d\u53bb\u8bbf\u95ee\u7236\u8282\u70b9\u6765\u5f97\u5230\u5144\u5f1f\u8282\u70b9\u7684\u4fe1\u606f"),(0,a.kt)("h5",{id:"rightmost-pointers"},"Rightmost Pointers"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0402",src:n(7486).Z,width:"1440",height:"465"})),(0,a.kt)("h5",{id:"node-high-keys"},"Node High Keys"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0405",src:n(2584).Z,width:"1440",height:"428"})),(0,a.kt)("p",null,"\u6307\u9488\u53ef\u4ee5\u6210\u5bf9\u51fa\u73b0\uff0c\u76f4\u63a5\u6307\u5411\u53f6\u8282\u70b9\uff0c\u4ee3\u8868\u53f6\u8282\u70b9\u7684\u6700\u503c"),(0,a.kt)("h5",{id:"overflow-page"},"Overflow Page"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0406",src:n(9846).Z,width:"802",height:"918"})),(0,a.kt)("h5",{id:"breadcrumbs"},"Breadcrumbs"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0408",src:n(7623).Z,width:"1440",height:"1327"})),(0,a.kt)("p",null,"Header\u4e2d\u5b58\u4e0a\u904d\u5386\u5230\u8fd9\u4e2a\u8282\u70b9\u7684\u8def\u5f84\u7ecf\u8fc7\u7684\u8282\u70b9\uff0c\u7528\u4e8e\u94fe\u5f0f\u5408\u5e76\u3001\u5206\u89e3\u8282\u70b9"),(0,a.kt)("h5",{id:"right-only-appends"},"Right-Only Appends"),(0,a.kt)("p",null,"\u5982\u679c\u6dfb\u52a0\u7684\u6570\u636e\u6bd4\u6700\u53f3Page\u7684\u503c\u8fd8\u5927\uff0c\u90a3\u4e48\u5c31\u53ef\u4ee5\u7701\u7565\u67e5\u627e\u8def\u5f84\u7684\u8fc7\u7a0b\uff0c\u76f4\u63a5\u5728\u6700\u53f3\u8282\u70b9\u589e\u52a0\u6570\u636e(Postgres)\u6216\u8005\u521b\u5efa\u4e00\u4e2a\u65b0\u7684\u6700\u53f3\u8282\u70b9(SQLite)\uff0c\u7136\u540e\u6dfb\u52a0\u5230\u7236\u8282\u70b9\u3002"),(0,a.kt)("h4",{id:"acid"},"ACID"),(0,a.kt)("p",null,"Atomicity \u4e8b\u52a1\u6b65\u9aa4\u662f\u4e0d\u53ef\u5206\u5272\u7684\uff0c\u6240\u6709\u6b65\u9aa4\u6210\u529f\u6216\u8005\u90fd\u4e0d\u6210\u529f\u3002"),(0,a.kt)("p",null,"Consistency \u8ba9\u6570\u636e\u5e93\u4ece\u4e00\u4e2a\u6709\u6548\u72b6\u6001\u66f4\u65b0\u5230\u53e6\u4e00\u4e2a\u6709\u6548\u72b6\u6001\uff0c\u5e94\u7528\u5c42"),(0,a.kt)("p",null,"Isolation \u591a\u4e2a\u5e76\u53d1\u4e8b\u52a1\u5e94\u5f53\u4e92\u76f8\u4e0d\u5e72\u6270\u3002"),(0,a.kt)("p",null,"Durability \u6240\u6709\u66f4\u6539\u5e94\u5f53\u80fd\u591f\u6301\u4e45\u5316\u5230\u78c1\u76d8"),(0,a.kt)("h5",{id:"cache-eviction"},"Cache Eviction"),(0,a.kt)("p",null,"\u5f53Cache\u4e2d\u7684page\u88ab\u4fee\u6539\u8fc7\u540e\uff0c\u5b83\u4f1a\u88ab\u7f6e\u810f\u3002\u56e0\u6b64\uff0c\u5728evict\u810fpage\u65f6\uff0c\u9700\u8981\u5148flush\u5230\u78c1\u76d8\uff0c\u518devict\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u6bcf\u4e00\u6b21eviction\u90fd\u505aflush\u663e\u7136\u5f00\u9500\u592a\u5927\uff0cPostgreSQL\u6709\u4e00\u4e2a\u540e\u53f0\u8fdb\u7a0b\u5b9a\u65f6\u53bb\u6267\u884c\u4efb\u52a1\u3002"),(0,a.kt)("h5",{id:"pinned-pages"},"Pinned Pages"),(0,a.kt)("p",null,"\u7531\u4e8eB-Tree\u7684\u7279\u6027\uff0c\u6700\u4e0a\u5c42\u7684\u8282\u70b9\u51e0\u4e4e\u603b\u662f\u88ab\u8bbf\u95ee\u5230\uff0c\u56e0\u6b64\u5c06\u5b83\u4eec\u6301\u4e45\u7f13\u5b58\u662f\u6536\u76ca\u5f88\u5927\u7684\u3002"),(0,a.kt)("h5",{id:"page-replacement"},"Page Replacement"),(0,a.kt)("p",null,"FIFO LRU Clock"),(0,a.kt)("p",null,"Clock"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0502",src:n(1804).Z,width:"1438",height:"1438"})),(0,a.kt)("p",null,"\u5982\u679c\u6307\u9488\u6307\u5411\u7684Page\u76ee\u524d\u6ca1\u6709\u88ab\u8bbf\u95ee(\u7070\u8272\u7684\u6b63\u5728\u88ab\u5f15\u7528\uff0c\u767d\u8272\u4e0d\u5728\u88ab\u5f15\u7528)\uff0c\u5c06\u5b83\u7684\u8bbf\u95eebit \u7f6e\u4e3a0.\u5982\u679c\u5df2\u7ecf\u662f0\uff0c\u90a3\u4e48\u51c6\u5907eviction\u3002"),(0,a.kt)("p",null,"LFU Least Frequently Used"),(0,a.kt)("h4",{id:"recovery"},"Recovery"),(0,a.kt)("p",null,(0,a.kt)("em",{parentName:"p"},"write-ahead log")," (commit log) \u53ea\u8ffd\u52a0\uff0c\u4e0d\u53ef\u4fee\u6539"),(0,a.kt)("p",null,"\u6bcf\u4e00\u6761record \u90fd\u6709\u4e00\u4e2alog sequence number(LSN)"),(0,a.kt)("p",null,"\u6240\u6709\u6570\u636e\u5e93\u7684\u5199\u64cd\u4f5c\u90fd\u8981\u4e8b\u5148Log,\u7136\u540e\u624d\u80fd\u4fee\u6539Page"),(0,a.kt)("p",null,"Page Cache\u80fd\u591f\u91cd\u5efa"),(0,a.kt)("p",null,"Log Checkpoint\uff0c\u6807\u8bb0\u5230N\u5f00\u59cb\u7684log\u5df2\u7ecf\u88ab\u6301\u4e45\u5316\uff0c\u4e0d\u518d\u9700\u8981\u4e86\u3002"),(0,a.kt)("h5",{id:"steal-and-force"},"Steal and force"),(0,a.kt)("p",null,"Steal\uff1a\u5141\u8bb8\u8fd8\u672a\u5b8c\u6210\u4e8b\u52a1\u7684page flush\u5230\u78c1\u76d8\u4e0a\u3002"),(0,a.kt)("p",null,"Force\uff1a \u5728\u4e8b\u52a1commit\u4e4b\u524d\uff0c\u6240\u6709\u4fee\u6539\u7684Page\u5fc5\u987b\u88abflush\u5230\u78c1\u76d8\u4e0a"),(0,a.kt)("p",null,"\u5982\u679c\u8bbe\u7f6e\u4e86no-steal\uff0c\u90a3\u4e48\u53ea\u9700\u8981redo log\u5c31\u53ef\u4ee5\u6062\u590d\u6570\u636e\u5e93"),(0,a.kt)("p",null,"\u8bbe\u7f6e\u4e86force\uff0ctransaction\u4f1a\u6162\u7684\u591a\uff0c\u4f46\u91cd\u5efa\u5c31\u76f8\u5bf9\u7b80\u5355\u3002"),(0,a.kt)("h4",{id:"concurrency-control"},"Concurrency Control"),(0,a.kt)("p",null,"Optimistic concurrency control "),(0,a.kt)("p",null,"\u5982\u679c\u591a\u4e2a\u4e8b\u52a1\u7684\u6267\u884c\u7ed3\u679c\u6709\u5206\u6b67\uff0c\u5176\u4e2d\u7684\u4e00\u4e2a\u4f1a\u88ab\u4e22\u5f03\u3002\u6240\u6709\u4e8b\u52a1\u90fd\u88ab\u5141\u8bb8\u5e76\u53d1\u8bfb\u5199\uff0c\u7136\u540e\u5224\u65ad\u7ed3\u679c"),(0,a.kt)("p",null,"Multiversion concurrency"),(0,a.kt)("p",null,"timestamp\u987a\u5e8f\uff0c\u5141\u8bb8\u591a\u4e2a\u65f6\u95f4\u70b9\u7684\u7248\u672c\u5171\u5b58\u3002"),(0,a.kt)("p",null,"Pessimistic concurrency control"),(0,a.kt)("p",null,"lock-based: \u9632\u6b62\u5176\u4ed6\u4e8b\u52a1\u4fee\u6539\u52a0\u9501\u7684\u7eaa\u5f55"),(0,a.kt)("p",null,"Nonlocking: \u7ef4\u62a4\u4e00\u4e2a\u5217\u8868\uff0c\u987a\u5e8f\u6267\u884c"),(0,a.kt)("p",null,"\u53ef\u80fd\u51fa\u73b0\u6b7b\u9501\u95ee\u9898"),(0,a.kt)("h5",{id:"serializable-schedule"},"Serializable schedule"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0504",src:n(3407).Z,width:"1438",height:"450"})),(0,a.kt)("p",null,"\u591a\u4e2atransaction\u6309\u4efb\u610f\u987a\u5e8f\u6267\u884c\uff0cone by one"),(0,a.kt)("h5",{id:"isolation-levels"},"Isolation Levels"),(0,a.kt)("p",null,"\u6700\u4f4e\u7ea7\u522b\u7684isolation\u662fread uncommitted\uff0c\u5141\u8bb8transaction\u8bfb\u53d6dirty reads"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0505",src:n(4121).Z,width:"1439",height:"300"})),(0,a.kt)("h5",{id:"optimistic-concurrency-control"},"Optimistic Concurrency Control"),(0,a.kt)("p",null,"\u5047\u8bbe\u4e8b\u52a1\u51b2\u7a81\u5f88\u5c11\uff0c\u6211\u4eec\u4e0d\u9700\u8981\u52a0\u9501\uff0c\u53ea\u9700\u8981\u9a8c\u8bc1\u4e8b\u52a1\u7684\u5408\u6cd5\u6027\u6765\u5224\u65ad\u662f\u5426commit\u3002"),(0,a.kt)("p",null,"\u4e8b\u52a1\u88ab\u5206\u4e3a\u4e09\u6b65\uff1a"),(0,a.kt)("p",null,"Read, Validation, Write"),(0,a.kt)("p",null,"Backward-oriented \u68c0\u67e5\u4e0e\u5df2\u7ecfcommit\u7684\u4e8b\u52a1\u662f\u5426\u51b2\u7a81"),(0,a.kt)("p",null,"Forward-oriented \u68c0\u67e5\u6b63\u5728\u8fdb\u884cvalidation\u7684\u4e8b\u52a1\u662f\u5426\u51b2\u7a81"),(0,a.kt)("p",null,"\u53ea\u8981\u6709\u5176\u4ed6\u4e8b\u52a1\u6b63\u5728\u88abvalidate\uff0c\u73b0\u5728\u7684\u4e8b\u52a1\u5c31\u4e0d\u5141\u8bb8commit\u3002"),(0,a.kt)("h5",{id:"multiversion-concurrency-control"},"Multiversion Concurrency Control"),(0,a.kt)("p",null,"\u533a\u5206committed \u548cuncomitted\u7684\u7248\u672c\uff0c\u5bf9\u5e94committed\u548cuncommitted\u7684\u4e8b\u52a1\u3002"),(0,a.kt)("p",null,"\u6700\u540e\u4e00\u4e2acommitted\u7684\u7248\u672c\u5c31\u662fcurrent\u3002"),(0,a.kt)("p",null,"\u901a\u5e38\u6765\u8bf4\uff0c\u76ee\u6807\u5c31\u662f\u81f3\u591a\u6709\u4e00\u4e2auncommitted\u503c\u3002"),(0,a.kt)("h5",{id:"pessimistic-concurrency-control"},"Pessimistic Concurrency Control"),(0,a.kt)("p",null,"time-stamp ordering\uff1a\u5982\u679c\u65f6\u95f4\u6233\u66f4\u665a\u7684\u4e8b\u52a1\u5df2\u7ecf\u63d0\u4ea4\uff0c\u5f53\u524d\u4e8b\u52a1\u5c31\u53ea\u80fd\u53d6\u6d88"),(0,a.kt)("h5",{id:"lock-based-concurrency-control"},"Lock-Based Concurrency Control"),(0,a.kt)("p",null,"Two-phase locking(2PL)"),(0,a.kt)("p",null,"Growing phase: \u53d6\u5f97\u6240\u6709\u9700\u8981\u7684\u9501"),(0,a.kt)("p",null,"Shrinking phase\uff1a\u91ca\u653e\u6240\u6709\u53d6\u5f97\u7684\u9501"),(0,a.kt)("p",null,"\u89e3\u51b3\u6b7b\u9501\uff1a"),(0,a.kt)("p",null,"\u8ffd\u8e2a\u4f9d\u8d56\u56fe\u662f\u5426\u6709\u73af"),(0,a.kt)("p",null,"\u8d85\u65f6\u3001\u88c1\u5b9a\u4f18\u5148\u7ea7"),(0,a.kt)("h5",{id:"locks-and-latches"},"Locks and Latches"),(0,a.kt)("p",null,"Locks\uff1a\u903b\u8f91\u6570\u636e\u4e00\u81f4\u6027, content"),(0,a.kt)("p",null,"Latch: \u7269\u7406\u6570\u636e\u4e00\u81f4\u6027\uff0c page level"),(0,a.kt)("h5",{id:"rw-lock"},"RW Lock"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0507",src:n(2285).Z,width:"1261",height:"359"})),(0,a.kt)("h5",{id:"copy-on-write"},"Copy-on-write"),(0,a.kt)("p",null,"\u5f53\u6570\u636e\u5373\u5c06\u88ab\u4fee\u6539\u65f6\uff0c\u521b\u5efa\u4e00\u4e2a\u5907\u4efd\uff0c\u7136\u540e\u4fee\u6539\u5907\u4efd\u3002"),(0,a.kt)("p",null,"\u8fd9\u6837Reader\u8bfb\u5230\u7684\u8fd8\u662f\u539f\u672c\uff0c\u4e0d\u9700\u8981\u540c\u6b65\u3002"),(0,a.kt)("p",null,"\u7f3a\u70b9\u5c31\u662f\u5360\u7528\u7a7a\u95f4\u8f83\u5927"),(0,a.kt)("h5",{id:"lazy-b-tree"},"Lazy B-Tree"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0602",src:n(2776).Z,width:"2673",height:"882"})),(0,a.kt)("p",null,"\u8bfb\u5199\u90fd\u4f1a\u5728\u7f13\u5b58\u4e2d\u8fdb\u884c\uff0c\u7136\u540e\u5b9a\u671fflush\u5230\u6811\u4e2d\u6301\u4e45\u5316"),(0,a.kt)("p",null,"\u7531\u4e8esplit \u548cmerge\u8f6c\u5230\u540e\u53f0\u8fd0\u884c\uff0cr/w\u64cd\u4f5c\u4e0d\u9700\u8981\u7b49\u5f85\u3002"),(0,a.kt)("h5",{id:"lazy-adaptive-tree"},"Lazy Adaptive Tree"),(0,a.kt)("p",null,"\u6bcf\u4e2anode\u90fd\u6709\u4e00\u4e2abuffer\uff0c\u5f53\u6839\u8282\u70b9buffer\u6ee1\u4e86\uff0c\u5c31\u4f1a\u5199\u5230\u5b50\u6811\u7684buffer\uff0c\u4e00\u76f4\u63a8\u5230\u53f6\u8282\u70b9\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0604",src:n(7718).Z,width:"4137",height:"1851"})),(0,a.kt)("h5",{id:"fd-tree"},"FD-Tree"),(0,a.kt)("p",null,"\u5047\u8bbe\u6709\u4e0b\u5217\u51e0\u4e2a\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A1 = [12, 24, 32, 34, 39]\nA2 = [22, 25, 28, 30, 35]\nA3 = [11, 16, 24, 26, 30]\n")),(0,a.kt)("p",null,"\u6bcf\u4e2a\u6570\u7ec4\u90fd\u5411\u4e0b\u65b9\u7684\u6570\u7ec4\u62bd\u5143\u7d20\uff0c\u586b\u5145\u5230\u81ea\u5df1\u7684\u5143\u7d20\u4e2d"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"A1 = [12, 24, 25, 30, 32, 34, 39]\nA2 = [16, 22, 25, 26, 28, 30, 35]\nA3 = [11, 16, 24, 26, 30]\n")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0605",src:n(300).Z,width:"1080",height:"780"})),(0,a.kt)("p",null,"\u8fd9\u79cd\u8fde\u63a5\u65b9\u5f0f\u88ab\u79f0\u4e3aBridge\uff0c\u53ef\u4ee5\u5927\u5927\u7f29\u5c0f\u67e5\u627e\u7a7a\u95f4\u3002"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0606",src:n(2848).Z,width:"6627",height:"1332"})),(0,a.kt)("h5",{id:"bw-tree"},"Bw-Tree"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0607",src:n(9217).Z,width:"3345",height:"681"})),(0,a.kt)("p",null,"Update chain\u5305\u542b\u4fee\u6539\u4fe1\u606f\uff0cBase node\u4e0d\u505ain place \u4fee\u6539"),(0,a.kt)("p",null,"\u8fd9\u6837\u5982\u679c\u8981\u66f4\u6362\u4e8b\u52a1\u987a\u5e8f\uff0c\u53ea\u9700\u8981compare and swap\uff0c\u66f4\u6362Update chain\u91cc\u7684pointer\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("p",null,"Update chain\u5728\u8fbe\u5230\u9608\u503c\u540e\uff0c\u5c31\u9700\u8981merge base node with deltas\uff0c\u5199\u5230\u65b0\u7684page\u4e0a\u7136\u540e\u6539\u53d8\u7236\u8282\u70b9\u7684\u6307\u9488\u3002"),(0,a.kt)("h5",{id:"lsm-tree"},"LSM-Tree"),(0,a.kt)("p",null,"Append-only "),(0,a.kt)("p",null,"\u56e0\u6b64insert update delete\u4e0d\u9700\u8981\u5b9a\u4f4d\u5230\u78c1\u76d8\u4e0a\u7684record\uff0c\u663e\u8457\u63d0\u5347\u5199\u6027\u80fd\u548c\u541e\u5410\u91cf\u3002"),(0,a.kt)("p",null,"\u5141\u8bb8\u91cd\u590d\u6570\u636e\uff0c\u51b2\u7a81\u5728\u8bfb\u65f6\u89e3\u51b3"),(0,a.kt)("p",null,"LSM Tree\u5728\u5199\u6bd4\u8bfb\u66f4\u591a\u65f6\u5f88\u5e38\u7528"),(0,a.kt)("p",null,"\u7b80\u800c\u8a00\u4e4b\uff0cIn-place update\u5bf9\u8bfb\u66f4\u53cb\u597d\uff0c\u5199\u5219\u9700\u8981\u5b9a\u4f4d\u5230\u4f4d\u7f6e\u3002"),(0,a.kt)("p",null,"Append-only\u5bf9\u5199\u66f4\u53cb\u597d\uff0c\u4f46\u8bfb\u53d6\u65f6\u9700\u8981\u53d6\u5230\u591a\u4e2a\u7248\u672c\u7684\u6570\u636e\u7136\u540e\u6574\u5408\u3002"),(0,a.kt)("p",null,"B-Tree\u4e5f\u7ecf\u5e38\u4f5c\u4e3aLSM Tree\u7684\u7d22\u5f15\u7ed3\u6784"),(0,a.kt)("p",null,"LSM\u6811\u5c06\u6570\u636e\u7684\u5199\u7f13\u5b58\u5230\u5185\u5b58\u91cc\u7684\u8868\u7ed3\u6784\u4e2d\u3002\u8bfb\u548c\u5199\u5206\u79bb\uff0c\u6240\u4ee5\u8bfb\u5199\u53ef\u4ee5\u540c\u65f6\u8fdb\u884c\u3002"),(0,a.kt)("p",null,"\u5f53LSM\u6811\u63a5\u6536\u5230\u5199\u8bf7\u6c42\u540e\uff0c\u5b58\u5230mutable memtable\u4e2d\uff0cbuffer and sort\u3002\u8fbe\u5230\u4e00\u5b9a\u9608\u503c\u540e\uff0c\u6301\u4e45\u5316\u5230\u78c1\u76d8\u3002"),(0,a.kt)("h5",{id:"two-and-multi-component-lsm-trees"},"Two and Multi component LSM Trees"),(0,a.kt)("p",null,"Two component\u53ea\u6709\u4e00\u4e2a\u78c1\u76d8\u6811\u3002\u5bf9\u6bcf\u4e2a\u5185\u5b58\u4e2d\u7684\u5b50\u6811\uff0c\u90fd\u548c\u78c1\u76d8\u4e2d\u5bf9\u5e94\u7684\u5b50\u6811\u5408\u5e76\uff0c\u751f\u6210\u4e00\u4e2a\u65b0\u7684\u5b50\u6811\u5199\u5230\u65b0\u7684\u78c1\u76d8\u533a\u57df\u3002\u5f53\u5b50\u6811\u88abflush\u4e4b\u540e\uff0c\u4e4b\u524d\u7684\u6811\u5c31\u88ab\u4e22\u5f03\u4e86\uff0c\u53d6\u800c\u4ee3\u4e4b\u7684\u662f\u65b0\u7684\u6811\u3002"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://kernelmaker.github.io/lsm-tree"},"\u3010Paper\u7b14\u8bb0\u3011The Log structured Merge-Tree\uff08LSM-Tree\uff09 \xb7 (kernelmaker.github.io)")),(0,a.kt)("p",null,"Multicomponent "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0703",src:n(6331).Z,width:"1440",height:"354"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0704",src:n(3214).Z,width:"1440",height:"599"})),(0,a.kt)("p",null,"\u5728LSM\u4e2d\uff0cUpdate\u548cInsert\u662f\u65e0\u6cd5\u533a\u5206\u7684\uff0c\u56e0\u6b64\u53ef\u4ee5\u79f0\u4f5cUpsert"),(0,a.kt)("p",null,"Compaction"),(0,a.kt)("p",null,"\u6839\u636e\u6811\u7684\u5c42\u7ea7\u8fdb\u884c\u6574\u5408"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0706",src:n(9810).Z,width:"2643",height:"735"})),(0,a.kt)("p",null,"LSM\u7684disk-resident table\u662fSSTable( Sorted String Table)\uff0c\u4e00\u822c\u5305\u542b\u4e00\u4e2aindex file\u548c data file\uff0cindex file\u53ef\u4ee5\u4f7f\u7528B-Tree\u6216\u54c8\u5e0c\u8868\u3002"),(0,a.kt)("h5",{id:"bloom-filter"},"Bloom Filter"),(0,a.kt)("p",null,"\u4f7f\u7528\u4e00\u4e2a\u5927\u578b\u7684bit array\uff0c\u591a\u4e2a\u54c8\u5e0c\u51fd\u6570\u3002"),(0,a.kt)("p",null,"\u5bf9\u6bcf\u4e2arecord\u7684\u952e\u8fdb\u884c\u54c8\u5e0c\u64cd\u4f5c\uff0c\u628a\u5f97\u5230\u7ed3\u679c\u4f5c\u4e3a\u4e0b\u6807\u7684\u4f4d\u7f6e\u4e3a1\u3002"),(0,a.kt)("p",null,"\u5982\u679c\u7ed9\u5b9a\u4e00\u4e2akey\uff0c\u6240\u6709\u54c8\u5e0c\u51fd\u6570\u5bf9\u5b83\u6c42\u54c8\u5e0c\u503c\u540e\u5bf9\u5e94\u7684\u4f4d\u90fd\u662f1\uff0c\u90a3\u4e48\u5b83",(0,a.kt)("strong",{parentName:"p"},"\u5f88\u6709\u53ef\u80fd"),"\u5728\u8fd9\u4e2a\u96c6\u5408\u4e2d\uff0c\u5426\u5219\u53ea\u8981\u67091\u4e2a\u51fa\u73b00\uff0c\u90a3\u4e48\u5b83",(0,a.kt)("strong",{parentName:"p"},"\u4e00\u5b9a"),"\u4e0d\u5728\u96c6\u5408\u4e2d\u3002"),(0,a.kt)("h5",{id:"skiplist"},"Skiplist"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0708",src:n(8612).Z,width:"1441",height:"185"})),(0,a.kt)("p",null,"\u6bcf\u4e2a\u8282\u70b9\u7684\u9ad8\u5ea6\u90fd\u662f\u968f\u673a\u7684\u3002"),(0,a.kt)("p",null,"\u5047\u5982\u4ece10\u51fa\u53d1\uff0c\u627e7\u3002"),(0,a.kt)("p",null,"1\u300110>7\uff0c\u56de\u9000\u5230\u4e0b\u4e00\u5c42\u7684\u4e0a\u4e00\u4e2a\u8282\u70b9"),(0,a.kt)("p",null,"2\u3001\u5230\u8fbe5\uff0c5<7\uff0c\u524d\u8fdb\uff0c\u53c8\u56de\u523010\uff0c\u8fd8\u662f\u6bd47\u5927\uff0c\u56de\u9000\u4e0b\u4e00\u5c42\u7684\u4e0a\u4e00\u4e2a\u8282\u70b9"),(0,a.kt)("p",null,"3\u3001\u5230\u8fbe7"),(0,a.kt)("h5",{id:"keydir"},"Keydir"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0711",src:n(3575).Z,width:"1439",height:"855"})),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"dbin 0001",src:n(3194).Z,width:"1441",height:"997"})))}p.isMDXComponent=!0},3194:function(e,t,n){t.Z=n.p+"assets/images/dbin_0001-06eebc7e8fa027ef72f318e2859990e9.png"},8526:function(e,t,n){t.Z=n.p+"assets/images/dbin_0101-37a1b1b725536ff01d7d39ea1509cd11.png"},7150:function(e,t,n){t.Z=n.p+"assets/images/dbin_0102-728f00e7a6fa55c085b777ae55603558.png"},2967:function(e,t,n){t.Z=n.p+"assets/images/dbin_0104-422e8b43a62b9717860388b6551f04a2.png"},6904:function(e,t,n){t.Z=n.p+"assets/images/dbin_0105-bc75954874128bba1c892090502be790.png"},8366:function(e,t,n){t.Z=n.p+"assets/images/dbin_0106-a732429f9e02c9448b0008a1d172b264.png"},3116:function(e,t,n){t.Z=n.p+"assets/images/dbin_0202-b237d34970a8b9e60a7ece0649b2e0ea.png"},9957:function(e,t,n){t.Z=n.p+"assets/images/dbin_0203-1f964eab01828da3375e219fe1e03925.png"},1220:function(e,t,n){t.Z=n.p+"assets/images/dbin_0204-750f737696b29101629496872e4b8829.png"},6408:function(e,t,n){t.Z=n.p+"assets/images/dbin_0207-99008f11b13f62f14a876439dd1e044c.png"},6711:function(e,t,n){t.Z=n.p+"assets/images/dbin_0209-8611a4b83ce9e3f04861fd6f53b096a4.png"},7427:function(e,t,n){t.Z=n.p+"assets/images/dbin_0210-bd313d6a54d73011abaa03e269d74aec.png"},9093:function(e,t,n){t.Z=n.p+"assets/images/dbin_0301-d1c8039931b15a0169724b99908a34e6.png"},5733:function(e,t,n){t.Z=n.p+"assets/images/dbin_0303-5c5b241b533d2eb52f37b9d0200a096b.png"},6586:function(e,t,n){t.Z=n.p+"assets/images/dbin_0304-d01fd3c4874813d08100c042bf9a8f1b.png"},6966:function(e,t,n){t.Z=n.p+"assets/images/dbin_0305-09721a0777d45465519889aff39caba9.png"},4595:function(e,t,n){t.Z=n.p+"assets/images/dbin_0309-79078a70b2fed851d9988b57d7c434ac.png"},7486:function(e,t,n){t.Z=n.p+"assets/images/dbin_0402-d74a04e406bbb7c940333fb033c522bf.png"},2584:function(e,t,n){t.Z=n.p+"assets/images/dbin_0405-9bbd290a1b5bc08f7b181582156b6c72.png"},9846:function(e,t,n){t.Z=n.p+"assets/images/dbin_0406-bedd63b1462fe046de2a6a91fc37b99a.png"},7623:function(e,t,n){t.Z=n.p+"assets/images/dbin_0408-5fe1bf37661ea088c5e12c91610a98dc.png"},1804:function(e,t,n){t.Z=n.p+"assets/images/dbin_0502-76128854194f2b785fe5dd95e20f1640.png"},3407:function(e,t,n){t.Z=n.p+"assets/images/dbin_0504-196d53a3115d645c2dd87f396c672340.png"},4121:function(e,t,n){t.Z=n.p+"assets/images/dbin_0505-948ca50cf6b1b453531b3db4dd63a9c1.png"},2285:function(e,t,n){t.Z=n.p+"assets/images/dbin_0507-7173061759e5e3becca4b66bbed9e7fc.png"},2776:function(e,t,n){t.Z=n.p+"assets/images/dbin_0602-b64654b6992647612351a4589a2b2eb4.png"},7718:function(e,t,n){t.Z=n.p+"assets/images/dbin_0604-5ea39eb67bd6d3f5cbbc3d0853631b39.png"},300:function(e,t,n){t.Z=n.p+"assets/images/dbin_0605-ebaab3c57c835312e5cc952f3ec0e59a.png"},2848:function(e,t,n){t.Z=n.p+"assets/images/dbin_0606-c1bf7860be20534985119fac842940dd.png"},9217:function(e,t,n){t.Z=n.p+"assets/images/dbin_0607-0e403e4ee43aca6019418cf11f8c85a6.png"},6331:function(e,t,n){t.Z=n.p+"assets/images/dbin_0703-770dd5396041a8ae92b3bc62ee9c96af.png"},3214:function(e,t,n){t.Z=n.p+"assets/images/dbin_0704-25746020c13b095465b16273776dd69d.png"},9810:function(e,t,n){t.Z=n.p+"assets/images/dbin_0706-7ad2540683188832bd35f12e43f6c513.png"},8612:function(e,t,n){t.Z=n.p+"assets/images/dbin_0708-6f10cb239f9f5c1bc9c61ab87cf5a062.png"},3575:function(e,t,n){t.Z=n.p+"assets/images/dbin_0711-8459c651f8dbb47fba77d26cea4736f7.png"}}]);