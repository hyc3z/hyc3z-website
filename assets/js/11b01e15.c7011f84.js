"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[591],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return k}});var n=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function d(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),p=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=p(e.components);return n.createElement(o.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},s=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,o=e.parentName,u=d(e,["components","mdxType","originalType","parentName"]),s=p(a),k=l,m=s["".concat(o,".").concat(k)]||s[k]||c[k]||i;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function k(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,r=new Array(i);r[0]=s;var d={};for(var o in t)hasOwnProperty.call(t,o)&&(d[o]=t[o]);d.originalType=e,d.mdxType="string"==typeof e?e:l,r[1]=d;for(var p=2;p<i;p++)r[p]=a[p];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},9066:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return d},contentTitle:function(){return o},metadata:function(){return p},toc:function(){return u},default:function(){return s}});var n=a(7462),l=a(3366),i=(a(7294),a(3905)),r=["components"],d={title:"Hadoop \u57fa\u7840\u77e5\u8bc6"},o=void 0,p={unversionedId:"big-data/hadoop",id:"big-data/hadoop",title:"Hadoop \u57fa\u7840\u77e5\u8bc6",description:"Hadoop",source:"@site/docs/big-data/hadoop.md",sourceDirName:"big-data",slug:"/big-data/hadoop",permalink:"/docs/big-data/hadoop",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/big-data/hadoop.md",tags:[],version:"current",frontMatter:{title:"Hadoop \u57fa\u7840\u77e5\u8bc6"},sidebar:"tutorialSidebar",previous:{title:"Interpretable AI",permalink:"/docs/ai/interpretable_ai"},next:{title:"Kafka & Zookeeper \u57fa\u7840\u77e5\u8bc6",permalink:"/docs/big-data/kafka"}},u=[{value:"Hadoop",id:"hadoop",children:[{value:"MapReduce Job",id:"mapreduce-job",children:[{value:"Splits",id:"splits",children:[],level:5},{value:"Data Flow",id:"data-flow",children:[],level:5},{value:"Multiple Tasks(shuffle)",id:"multiple-tasksshuffle",children:[],level:5},{value:"Combiner function",id:"combiner-function",children:[],level:5},{value:"Hadoop Streaming",id:"hadoop-streaming",children:[],level:5}],level:4}],level:3},{value:"Hadoop Distributed Filesystem (HDFS)",id:"hadoop-distributed-filesystem-hdfs",children:[{value:"Blocks",id:"blocks",children:[],level:5},{value:"Namenodes and Datanodes",id:"namenodes-and-datanodes",children:[],level:5},{value:"Block Caching",id:"block-caching",children:[],level:5},{value:"Memory",id:"memory",children:[],level:5},{value:"Federation",id:"federation",children:[],level:5},{value:"HDFS HA",id:"hdfs-ha",children:[],level:5},{value:"Failover",id:"failover",children:[],level:5},{value:"Fencing",id:"fencing",children:[],level:5},{value:"\u7b80\u5355\u547d\u4ee4",id:"\u7b80\u5355\u547d\u4ee4",children:[],level:4},{value:"Data Flow",id:"data-flow-1",children:[{value:"Client Access Mode",id:"client-access-mode",children:[],level:5},{value:"File Write",id:"file-write",children:[],level:5},{value:"File Read",id:"file-read",children:[],level:5},{value:"Distances",id:"distances",children:[],level:5},{value:"Replica Strategy",id:"replica-strategy",children:[],level:5},{value:"Flush",id:"flush",children:[],level:5},{value:"Parallel Copying",id:"parallel-copying",children:[],level:5}],level:4}],level:3},{value:"YARN (Yet Another Resource Negotiator)",id:"yarn-yet-another-resource-negotiator",children:[{value:"Resource Requests",id:"resource-requests",children:[],level:5},{value:"Application Lifespan",id:"application-lifespan",children:[],level:5},{value:"Mapreduce 1 and Yarn",id:"mapreduce-1-and-yarn",children:[],level:5},{value:"Scheduler Options",id:"scheduler-options",children:[],level:5},{value:"Dominant Resource Fairness",id:"dominant-resource-fairness",children:[],level:5},{value:"Data Integrity",id:"data-integrity",children:[],level:5},{value:"Compression",id:"compression",children:[],level:5},{value:"Splitting",id:"splitting",children:[],level:5},{value:"SequenceFile",id:"sequencefile",children:[],level:5},{value:"Run a MapReduce Job",id:"run-a-mapreduce-job",children:[],level:5},{value:"Streaming",id:"streaming",children:[],level:5},{value:"Shuffle and Sort",id:"shuffle-and-sort",children:[{value:"Map Side",id:"map-side",children:[],level:5},{value:"Reduce Side",id:"reduce-side",children:[],level:5},{value:"Speculative Execution",id:"speculative-execution",children:[],level:5},{value:"Filesystem Image and Edit log",id:"filesystem-image-and-edit-log",children:[],level:5},{value:"Safe mode",id:"safe-mode",children:[],level:5},{value:"Balancer",id:"balancer",children:[],level:5}],level:4},{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[],level:4},{value:"\u76f8\u5173\u9879\u76ee\uff08\u6df1\u5751\uff09",id:"\u76f8\u5173\u9879\u76ee\u6df1\u5751",children:[{value:"Avro",id:"avro",children:[],level:5},{value:"Parquet",id:"parquet",children:[],level:5},{value:"Flume",id:"flume",children:[],level:5},{value:"Sqoop",id:"sqoop",children:[],level:5},{value:"Pig",id:"pig",children:[],level:5},{value:"Hive",id:"hive",children:[],level:5},{value:"Crunch",id:"crunch",children:[],level:5},{value:"Spark",id:"spark",children:[],level:5},{value:"HBase",id:"hbase",children:[],level:5}],level:4}],level:3}],c={toc:u};function s(e){var t=e.components,d=(0,l.Z)(e,r);return(0,i.kt)("wrapper",(0,n.Z)({},c,d,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h3",{id:"hadoop"},"Hadoop"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MapReduce logical data flow",src:a(1239).Z,width:"1000",height:"192"})),(0,i.kt)("p",null,"\u6570\u636e\u5904\u7406\u5206\u4e3a\u4e24\u4e2a\u9636\u6bb5\uff1aMap\u548cReduce"),(0,i.kt)("p",null,"Map\u9636\u6bb5\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u6e05\u6d17\uff0c\u8fc7\u6ee4\u4ee5\u53ca\u89e3\u6790\u3002"),(0,i.kt)("p",null,"\u7136\u540e\u7ecf\u8fc7mapreduce\u8fdb\u884c\u52a0\u5de5\uff0c\u518d\u4f20\u7ed9reduce function"),(0,i.kt)("p",null,"\u6700\u540e\u5f97\u5230\u7ed3\u679c"),(0,i.kt)("h4",{id:"mapreduce-job"},"MapReduce Job"),(0,i.kt)("p",null,"\u4e00\u4e2aJob \u5305\u542b\u8f93\u5165\u6570\u636e\uff0c\u914d\u7f6e\uff0c\u4ee5\u53caMapReduce Program"),(0,i.kt)("p",null,"Hadoop\u8d1f\u8d23\u628ajob\u62c6\u5206\u6210\u4e00\u7cfb\u5217Tasks\uff0c\u8fd9\u4e9btask\u53ea\u6709\u4e24\u79cd\u7c7b\u578b\uff1aMap\u548cReduce"),(0,i.kt)("p",null,"\u8fd9\u4e9btask\u88abYARN\u8c03\u5ea6\uff0c\u5728\u8282\u70b9\u4e0a\u8fd0\u884c\u3002\u5982\u679cTask\u5931\u8d25\u4e86\uff0c\u5b83\u4f1a\u81ea\u52a8\u88ab\u5b89\u6392\u5728\u53e6\u4e00\u4e2a\u8282\u70b9\u4e0a\u8fd0\u884c\u3002"),(0,i.kt)("p",null,"\uff08\u6ce8\uff1a\u8fd9\u4e2aYarn\u548cnodejs\u7684yarn\u5bb9\u6613\u53d1\u751f\u547d\u4ee4\u884c\u51b2\u7a81\uff0c\u56e0\u6b64\u4e5f\u53ef\u4ee5\u7528yarnpkg\u6765\u8c03\u7528\uff09"),(0,i.kt)("h5",{id:"splits"},"Splits"),(0,i.kt)("p",null,"Hadoop\u4f1a\u628a\u6570\u636e\u7eb5\u5411\u62c6\u5f00\uff0c\u5206\u7ed9\u4e0d\u540c\u7684task\u53bb\u505amap\uff0c\u8fd9\u6837\u53ef\u4ee5\u63d0\u5347\u6548\u7387\u3002"),(0,i.kt)("p",null,"\u5bf9\u5927\u591a\u6570Job\u6765\u8bf4\uff0cSplit size\u5c31\u662fHDFS Block\u7684\u5927\u5c0f\uff0c128MB"),(0,i.kt)("p",null,"\u5982\u679c\u5927\u4e8e128MB\uff0c\u5c31\u6709\u53ef\u80fd\u4f1a\u51fa\u73b0\u7ed3\u679c\u5b58\u5728\u591a\u4e2aBlock\u4e2d\uff0c\u53ef\u80fd\u4f1a\u5b58\u5728\u591a\u4e2a\u8282\u70b9\u91cc\uff0c\u51fa\u73b0\u7f51\u7edc\u8bf7\u6c42\u3002"),(0,i.kt)("p",null,"Map Task\u7684\u7ed3\u679c\u662f\u5199\u5728\u672c\u5730\u78c1\u76d8\uff0c\u4e0d\u662f\u5199\u5728HDFS\u91cc\u7684\uff0c\u56e0\u4e3a\u5b83\u5c5e\u4e8e\u4e2d\u95f4\u7ed3\u679c"),(0,i.kt)("h5",{id:"data-flow"},"Data Flow"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MapReduce data flow with a single reduce task",src:a(4642).Z,width:"1000",height:"538"})),(0,i.kt)("p",null,"\u865a\u7ebf\u4ee3\u8868\u672c\u5730\u6570\u636e\u6d41\uff0c\u5b9e\u7ebf\u4ee3\u8868\u8de8Node\u6570\u636e\u6d41\u3002"),(0,i.kt)("h5",{id:"multiple-tasksshuffle"},"Multiple Tasks(shuffle)"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"MapReduce data flow with multiple reduce tasks",src:a(4708).Z,width:"1000",height:"538"})),(0,i.kt)("h5",{id:"combiner-function"},"Combiner function"),(0,i.kt)("p",null,"\u9664\u4e86Mapper\u548cReducer\uff0c\u8fd8\u53ef\u4ee5\u6839\u636e\u5b9e\u9645\u60c5\u51b5\u9009\u62e9Combiner \u6765\u51cf\u5c11\u6570\u636e\u7684\u4ea4\u6362\u3002"),(0,i.kt)("p",null,"\u6bd4\u5982\u6c42\u6700\u5927\u503c\uff0c\u5c31\u53ef\u4ee5\u7528Combiner\uff0c\u5728\u6bcf\u4e2aMap\u7ed3\u675f\u540e\u76f4\u63a5\u8c03\u7528\uff0c\u6700\u540e\u7684\u7ed3\u679c\u4e0d\u53d8\uff0c\u4f46\u53c2\u4e0e\u7f51\u7edc\u4ea4\u6362\u7684\u6570\u636e\u5927\u5927\u51cf\u5c11\u4e86\u3002"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"max(0, 20, 10, 25, 15) = max(max(0, 20, 10), max(25, 15)) = max(20, 25) = 25\n")),(0,i.kt)("p",null,"\u5f53\u7136\uff0c\u4e0d\u662f\u6240\u6709\u95ee\u9898\u90fd\u80fd\u591f\u7528\u5f97\u5230\u3002"),(0,i.kt)("h5",{id:"hadoop-streaming"},"Hadoop Streaming"),(0,i.kt)("p",null,"\u7406\u8bba\u4e0a\uff0c\u53ea\u8981\u662f\u80fd\u591f\u8bfb\u53d6/\u5199\u5165 Unix\u6807\u51c6IO\u7684\u90fd\u80fd\u591f\u4f7f\u7528Hadoop Streaming\uff0c\u6240\u4ee5\u4e0d\u4e00\u5b9a\u8981\u7528Java\u3002"),(0,i.kt)("h3",{id:"hadoop-distributed-filesystem-hdfs"},"Hadoop Distributed Filesystem (HDFS)"),(0,i.kt)("p",null,"Hadoop\u5176\u5b9e\u4e5f\u53ef\u4ee5\u548c\u5176\u4ed6\u6587\u4ef6\u7cfb\u7edf\u7ed3\u5408\uff0c\u6bd4\u5982Amazon S3\u6216\u8005\u672c\u5730\u6587\u4ef6\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,"HDFS\u7684",(0,i.kt)("strong",{parentName:"p"},"\u7279\u70b9"),"\uff1a"),(0,i.kt)("p",null,"\u652f\u6301\u8d85\u5927\u6587\u4ef6\u3001\u6c11\u7528\u786c\u4ef6\u3001\u6d41\u5f0f\u6587\u4ef6\u5b58\u53d6"),(0,i.kt)("p",null,"HDFS\u7684",(0,i.kt)("strong",{parentName:"p"},"\u7f3a\u70b9"),"\uff1a"),(0,i.kt)("p",null,"\u5ef6\u8fdf\uff08\u6316\u5751 HBase\uff09\u3001\u5927\u91cf\u5c0f\u6587\u4ef6"),(0,i.kt)("p",null,"Append-only\uff0c\u4e0d\u652f\u6301\u968f\u673a\u5199\u5165\uff0c\u4e0d\u652f\u6301Multi writer"),(0,i.kt)("h5",{id:"blocks"},"Blocks"),(0,i.kt)("p",null,"HDFS\u7684\u6587\u4ef6\u90fd\u88abChunk\u6210Block\u8fdb\u884c\u5b58\u50a8\uff0c\u6bcf\u4e2aBlock 128MB\u3002\u5f53\u7136\uff0c\u4e0d\u50cf\u78c1\u76d8\u76844K \u5757\u5927\u5c0f\uff0c\u5c0f\u4e8e128M\u7684\u6587\u4ef6\u5728HDFS\u91cc\u5e76\u4e0d\u4f1a\u5360\u6709128MB\uff0c\u800c\u662f\u6587\u4ef6\u539f\u6765\u7684\u5927\u5c0f\u3002"),(0,i.kt)("p",null,"\u4e4b\u6240\u4ee5HDFS\u7684\u5757\u90a3\u4e48\u5927\uff0c\u5c31\u662f\u4e3a\u4e86\u6700\u5c0f\u5316seek time\uff0c\u4e5f\u5c31\u662f\u5bfb\u627e\u5757\u7684\u65f6\u95f4\u3002"),(0,i.kt)("h5",{id:"namenodes-and-datanodes"},"Namenodes and Datanodes"),(0,i.kt)("p",null,"Namenode: master"),(0,i.kt)("p",null,"\u8d1f\u8d23\u7ba1\u7406\u6587\u4ef6\u7cfb\u7edf\u7684namespace\uff0cfilesystem tree\uff0cmetadata\uff0cdirectories\u3002"),(0,i.kt)("p",null,"\u5b58\u50a8\u5728\u672c\u5730\uff0cnamespace image\u548cedit log"),(0,i.kt)("p",null,"\u5e76\u4e14\uff0c\u5728\u7cfb\u7edf\u542f\u52a8\u65f6\uff0c\u8fd8\u4f1a\u901a\u8fc7datanode\u5efa\u7acb\u4e00\u4e2a\u6587\u4ef6\u5757\u548cdatanode\u7684\u4f4d\u7f6e\u6620\u5c04\uff0c\u4f46\u662f\u662f\u975e\u6301\u4e45\u5316\u7684\u3002"),(0,i.kt)("p",null,"Namenode\u5982\u679c\u6302\u4e86\uff0c\u6570\u636e\u5c31\u5168\u4e22\u5931\u4e86\u3002\u56e0\u4e3a\u6ca1\u6709\u529e\u6cd5\u77e5\u9053\u5982\u4f55\u4ece\u5757\u91cd\u5efa\u6587\u4ef6\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e00\u79cd\u529e\u6cd5\uff0c\u5c31\u662f\u5907\u4efdNamenode\u7684state\uff0c\u5199\u5230\u672c\u5730\u78c1\u76d8\u6216\u8005nfs\u3002"),(0,i.kt)("p",null,"\u7b2c\u4e8c\u79cd\u529e\u6cd5\uff0c\u5c31\u662f\u53e6\u5916\u8fd0\u884c\u4e00\u4e2anode\u6765\u5b9a\u65f6merge namespace image\u548cedit log\u3002"),(0,i.kt)("p",null,"Datanode: workers"),(0,i.kt)("p",null,"\u5b58\u53d6\u5757\uff0c\u63a5\u53d7namenode\u6216\u8005client\u7684\u8bf7\u6c42\u3002"),(0,i.kt)("h5",{id:"block-caching"},"Block Caching"),(0,i.kt)("p",null,"\u6307\u5b9a\u4e00\u4e9b\u7ecf\u5e38\u4f7f\u7528\u7684Block\uff0c\u653e\u5165\u5185\u5b58\u4e2d\u4f5c\u4e3aCache"),(0,i.kt)("h5",{id:"memory"},"Memory"),(0,i.kt)("p",null,"1,000 MB per million blocks of storage"),(0,i.kt)("p",null,"a 200-node cluster with 24 TB of disk space per node, a block size of 128 MB, and a replication factor of 3"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},">>> 200* 24000000 / 128 / 3 / 1000000 * 1000\n12500.0\n")),(0,i.kt)("h5",{id:"federation"},"Federation"),(0,i.kt)("p",null,"HDFS Federation, 2.x\u7248\u672c\u5f00\u59cb, \u591a\u4e2aNamenode\u5206\u522b\u7ba1\u7406\u96c6\u7fa4\u4e2d\u7684\u4e00\u90e8\u5206"),(0,i.kt)("p",null,"\u6bd4\u5982Node 0\u7ba1\u7406/user\uff0cNode 1 \u7ba1\u7406/share"),(0,i.kt)("h5",{id:"hdfs-ha"},"HDFS HA"),(0,i.kt)("p",null,"NFS\u6216\u8005QJM\uff0c\u6765\u8ba9\u4e00\u5bf9\u70ed\u5907\u7684Namenode\u80fd\u591f\u540c\u65f6\u8bbf\u95ee\u5230edit log\uff0c\u7136\u540e\u80fd\u591f\u63a5\u7ba1"),(0,i.kt)("p",null,"QJM\u5c31\u662f\u4e00\u4e2a\u5c0f\u578b\u7684HDFS\uff0c\u63d0\u4f9b\u9ad8\u53ef\u7528edit log"),(0,i.kt)("h5",{id:"failover"},"Failover"),(0,i.kt)("p",null,"ZooKeeper\u786e\u5b9a\u53ea\u6709\u4e00\u4e2aNamenode\u662f\u6d3b\u52a8\u7684"),(0,i.kt)("h5",{id:"fencing"},"Fencing"),(0,i.kt)("p",null,"\u5047\u8bbe\u539f\u6709\u7684Node\u4f9d\u7136\u5728\u8fd0\u884c\uff0c\u4f46\u7531\u4e8e\u7f51\u7edc\u539f\u56e0\u88ab\u8ba4\u4e3a\u5931\u6548\u4e86\uff0c\u89e6\u53d1\u4e86Failover\uff0c\u9700\u8981\u4e00\u4e9b\u673a\u5236\u6765\u786e\u4fdd\u8fd9\u4e2aNode\u4e0d\u9020\u6210\u592a\u591a\u7684\u4f24\u5bb3\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u88ab\u79f0\u4e3aFencing"),(0,i.kt)("p",null,"QJM\u53ea\u5141\u8bb8\u540c\u65f6\u6709\u4e00\u4e2aNamenode\u5199edit log\uff0c\u4f46\u662fNFS\u6ca1\u529e\u6cd5\u505a\u5230"),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"STONITH"),", or \u201cshoot the other node in the head,\u201d "),(0,i.kt)("p",null,"\u76f4\u63a5\u63a7\u5236\u7535\u6e90\u8ba9\u53e6\u4e00\u4e2ahost\u5173\u673a"),(0,i.kt)("h4",{id:"\u7b80\u5355\u547d\u4ee4"},"\u7b80\u5355\u547d\u4ee4"),(0,i.kt)("p",null,"From Local"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hadoop fs -copyFromLocal input/docs/quangle.txt /user/tom/quangle.txt")),(0,i.kt)("p",null,"To Local"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"hadoop fs -copyToLocal quangle.txt quangle.copy.txt")),(0,i.kt)("h4",{id:"data-flow-1"},"Data Flow"),(0,i.kt)("h5",{id:"client-access-mode"},"Client Access Mode"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Accessing HDFS over HTTP directly and via a bank of HDFS proxies",src:a(533).Z,width:"984",height:"1000"})),(0,i.kt)("h5",{id:"file-write"},"File Write"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A client writing data to HDFS",src:a(8312).Z,width:"1000",height:"687"})),(0,i.kt)("p",null,"NameNode\u4f1a\u5148\u53bbcheck \u6587\u4ef6\u662f\u5426\u5b58\u5728\uff0c\u662f\u5426\u6709\u6743\u9650\u7b49\u3002\u5982\u679ccheck\u901a\u8fc7\u4e86\uff0c\u4f1a\u589e\u52a0\u4e00\u6761new file\u7684record\u3002"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"dfs.namenode.replication.min")," replicas (which defaults to 1) are written, \u5c31\u4f1asuccess"),(0,i.kt)("p",null,"asynchronously replicated across the cluster, ",(0,i.kt)("inlineCode",{parentName:"p"},"dfs.replication"),", which defaults to 3"),(0,i.kt)("h5",{id:"file-read"},"File Read"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A client reading data from HDFS",src:a(125).Z,width:"1000",height:"602"})),(0,i.kt)("h5",{id:"distances"},"Distances"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"distance(/d1/r1/n1, /d1/r1/n1)")," = 0 (processes on the same node)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"distance(/d1/r1/n1, /d1/r1/n2)")," = 2 (different nodes on the same rack)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"distance(/d1/r1/n1, /d1/r2/n3)")," = 4 (nodes on different racks in the same data center)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("em",{parentName:"li"},"distance(/d1/r1/n1, /d2/r3/n4)")," = 6 (nodes in different data centers)")),(0,i.kt)("h5",{id:"replica-strategy"},"Replica Strategy"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"A typical replica pipeline",src:a(5816).Z,width:"699",height:"772"})),(0,i.kt)("p",null,"\u540cNode\uff0cNode On other rack, other node on that rack"),(0,i.kt)("h5",{id:"flush"},"Flush"),(0,i.kt)("p",null,"\u6b63\u5728\u5199\u7684Block\uff0c\u5f88\u53ef\u80fd\u8fd8\u662f\u8bfb\u53d6\u4e0d\u4e86\u7684\u72b6\u6001\uff0c\u9700\u8981\u8fbe\u5230\u4e00\u4e2aBlock\u7684\u5927\u5c0f\u540e\u7f13\u5b58\u624d\u4f1a\u88abFlush\u3002\u5f53\u7136\u4e5f\u6709API\u53ef\u4ee5Force Flush"),(0,i.kt)("h5",{id:"parallel-copying"},"Parallel Copying"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"}," hadoop distcp file1 file2")),(0,i.kt)("p",null,"distcp\u672c\u8eab\u662f\u4e00\u4e2aMapReduce Job\uff0c\u6bcf\u4e2afile\u90fd\u88ab\u4e00\u4e2amap copy\u3002"),(0,i.kt)("h3",{id:"yarn-yet-another-resource-negotiator"},"YARN (Yet Another Resource Negotiator)"),(0,i.kt)("p",null,"Yarn \u662fHadoop\u7684\u96c6\u7fa4\u8d44\u6e90\u7ba1\u7406\u7cfb\u7edf\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"YARN applications",src:a(5882).Z,width:"1000",height:"361"})),(0,i.kt)("p",null,"\u63d0\u4f9b\u4e00\u4e2aAPI\u6765\u8bbf\u95ee\u96c6\u7fa4\u7684\u8d44\u6e90\uff0c\u901a\u5e38\u662f\u88ab\u66f4\u9ad8\u7ea7\u7684API\u8c03\u7528\u7684\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How YARN runs an application",src:a(9036).Z,width:"1000",height:"985"})),(0,i.kt)("p",null,"\u8fd9\u4e2aContainer\u53ef\u4ee5\u662fUnix Process\uff0c\u4e5f\u53ef\u4ee5\u662fLinux\u7684cgroup"),(0,i.kt)("h5",{id:"resource-requests"},"Resource Requests"),(0,i.kt)("p",null,"Yarn Application\u53ef\u4ee5\u5728\u8fd0\u884c\u524d\u5c31\u7533\u8bf7\u597d\u6240\u6709\u8d44\u6e90\uff0c\u6216\u8005\u5728\u8fd0\u884c\u65f6\u52a8\u6001\u5730\u7533\u8bf7\u66f4\u591a\u7684\u8d44\u6e90\u3002"),(0,i.kt)("p",null,"Spark\u5c31\u662f\u4f7f\u7528\u7684\u524d\u4e00\u79cd\u65b9\u5f0f"),(0,i.kt)("h5",{id:"application-lifespan"},"Application Lifespan"),(0,i.kt)("p",null,"App per job"),(0,i.kt)("p",null,"App per workflow/session of jobs"),(0,i.kt)("p",null,"Long-running"),(0,i.kt)("p",null,"Spark\u91c7\u7528\u7684\u7b2c\u4e8c\u79cd"),(0,i.kt)("h5",{id:"mapreduce-1-and-yarn"},"Mapreduce 1 and Yarn"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"MapReduce 1"),(0,i.kt)("th",{parentName:"tr",align:null},"YARN"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Jobtracker"),(0,i.kt)("td",{parentName:"tr",align:null},"Resource manager, application master, timeline server")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Tasktracker"),(0,i.kt)("td",{parentName:"tr",align:null},"Node manager")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Slot"),(0,i.kt)("td",{parentName:"tr",align:null},"Container")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"4000 nodes and 40000 tasks"),(0,i.kt)("td",{parentName:"tr",align:null},"10000 nodes and 100000 tasks")))),(0,i.kt)("h5",{id:"scheduler-options"},"Scheduler Options"),(0,i.kt)("p",null,"FIFO\u3001Capacity\u3001Fair"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Cluster utilization over time when running a large job and a small job under the FIFO Scheduler (i), Capacity Scheduler (ii), and Fair Scheduler (iii)",src:a(3966).Z,width:"382",height:"1000"})),(0,i.kt)("p",null,"Capacity scheduler\u7684\u8d44\u6e90\u662f\u5728\u914d\u7f6e\u91cc\u5b9a\u4e49\u7684"),(0,i.kt)("p",null,"Fair Scheduler\uff1a\u7528\u6237A \u548c\u7528\u6237B \u5982\u4e0b\u56fe"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Fair sharing between user queues",src:a(8083).Z,width:"755",height:"714"})),(0,i.kt)("p",null,"\u8d44\u6e90\u5728\u7528\u6237\u4e4b\u95f4\u4e5f\u662fFair shared\u3002"),(0,i.kt)("h5",{id:"dominant-resource-fairness"},"Dominant Resource Fairness"),(0,i.kt)("p",null,"\u8fd9\u4e2a\u5f88\u6709\u610f\u601d\uff0c\u662f\u9488\u5bf9\u4efb\u52a1\u4f7f\u7528\u5f02\u6784\u8d44\u6e90\u7684\u7b97\u6cd5\u3002"),(0,i.kt)("p",null,"\u5047\u5982\u96c6\u7fa4\u6709100CPU 10T \u5185\u5b58\uff0cA\u4efb\u52a1\u9700\u6c42 2CPU 300G\u5185\u5b58\uff0cB\u4efb\u52a1\u9700\u6c426CPU 100G\u5185\u5b58"),(0,i.kt)("p",null,"\u5b83\u662f\u6309\u7167\u8d44\u6e90\u9700\u6c42\u5360\u96c6\u7fa4\u603b\u8d44\u6e90\u7684\u767e\u5206\u6bd4\u7b97\u7684\uff0cA\u53602% 3%,B\u53606% 1%"),(0,i.kt)("p",null,"\u6240\u4ee5B\u7684Container\u6570\u91cf\u4f1a\u6bd4A\u5c11\u4e00\u534a\uff0c\u6765\u8fbe\u5230\u5e73\u8861"),(0,i.kt)("p",null,"\u9ed8\u8ba4DRF\u662f\u5173\u95ed\u7684\u3002"),(0,i.kt)("h5",{id:"data-integrity"},"Data Integrity"),(0,i.kt)("p",null,"HDFS\u9ed8\u8ba4\u4f1a\u5728\u6570\u636e\u5199\u5165\u540e\u8ba1\u7b97checksum\uff0c\u7136\u540e\u5728\u8bfb\u53d6\u65f6\u9a8c\u8bc1\u3002"),(0,i.kt)("p",null,"\u9ed8\u8ba4\u6bcf512byte\u5c31\u8fdb\u884c\u4e00\u6b21CRC-32C checksum\uff0c\u5b58\u4e00\u4e2a4byte\u7684\u54c8\u5e0c\u503c\u3002"),(0,i.kt)("p",null,"Datanode \u8d1f\u8d23\u5728\u6570\u636e\u5199\u5165\u4e4b\u524d\u9a8c\u8bc1checksum\uff0c\u7136\u540e\u5728\u8bfb\u53d6\u65f6\u4e5f\u662f\u4e00\u6837\u3002\u6bcf\u4e2aDatanode\u90fd\u6709\u4e00\u4e2apersistent log\u6765\u8bb0\u5f55verification\uff0c\u8bb0\u5f55\u6700\u540e\u4e00\u6b21\u6bcf\u4e2aBlock\u9a8c\u8bc1\u7684\u65f6\u95f4\u3002Client\u9a8c\u8bc1Block\u540e\uff0c\u4f1a\u56de\u4f20\u7ed3\u679c\u7ed9Datanode\u66f4\u65b0log\u3002"),(0,i.kt)("p",null,"\u9664\u4e86\u5728\u8bfb\u5199\u64cd\u4f5c\u4ee5\u5916\uff0cDataBlockScanner\u8fd8\u4f1a\u5728\u540e\u53f0\u5b9a\u671f\u68c0\u67e5\u9a8c\u8bc1blocks\u3002"),(0,i.kt)("p",null,"\u5f53\u53d1\u73b0\u51fa\u9519\u540e\uff0c\u7531\u4e8eHDFS\u6709\u591a\u4e2a\u5907\u4efd\uff0c\u5c31\u53ef\u4ee5\u628a\u4e00\u4e2a\u597d\u7684\u5907\u4efd\u590d\u5236\u8fc7\u6765\u3002"),(0,i.kt)("h5",{id:"compression"},"Compression"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Compression format"),(0,i.kt)("th",{parentName:"tr",align:null},"Tool"),(0,i.kt)("th",{parentName:"tr",align:null},"Algorithm"),(0,i.kt)("th",{parentName:"tr",align:null},"Filename extension"),(0,i.kt)("th",{parentName:"tr",align:null},"Splittable?"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"DEFLATE[",(0,i.kt)("a",{parentName:"td",href:"https://learning.oreilly.com/library/view/hadoop-the-definitive/9781491901687/ch05.html#ftn.id585983"},"a"),"]"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".deflate")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"gzip"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"gzip")),(0,i.kt)("td",{parentName:"tr",align:null},"DEFLATE"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".gz")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"bzip2")),(0,i.kt)("td",{parentName:"tr",align:null},"bzip2"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".bz2")),(0,i.kt)("td",{parentName:"tr",align:null},"Yes")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LZO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},"lzop")),(0,i.kt)("td",{parentName:"tr",align:null},"LZO"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".lzo")),(0,i.kt)("td",{parentName:"tr",align:null},"No[",(0,i.kt)("a",{parentName:"td",href:"https://learning.oreilly.com/library/view/hadoop-the-definitive/9781491901687/ch05.html#ftn.id726357"},"b"),"]")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"LZ4"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"LZ4"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".lz4")),(0,i.kt)("td",{parentName:"tr",align:null},"No")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,i.kt)("td",{parentName:"tr",align:null},"N/A"),(0,i.kt)("td",{parentName:"tr",align:null},"Snappy"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("em",{parentName:"td"},".snappy")),(0,i.kt)("td",{parentName:"tr",align:null},"No")))),(0,i.kt)("h5",{id:"splitting"},"Splitting"),(0,i.kt)("p",null,"\u5982\u679c\u538b\u7f29\u6587\u4ef6\u5927\u4e8e128MB\uff0c\u90a3\u4e48\u5c31\u4f1a\u88ab\u5206\u6210\u591a\u4e2aBlock\u3002\u7136\u800c\uff0c\u4e0d\u662f\u6240\u6709\u683c\u5f0f\u90fd\u652f\u6301\u4efb\u610f\u533a\u57df\u5f00\u59cb\u89e3\u538b\u7f29\u3002\u6bd4\u5982gzip\uff0c\u5c31\u5fc5\u987b\u540c\u4e00\u4e2aMap\u5b8c\u6210\u8fde\u7eed\u591a\u4e2aBlock\u7684\u8bfb\u53d6\u6765\u5b8c\u6210\u89e3\u538b\u3002"),(0,i.kt)("p",null,"Bz2\uff0cLZO\u90fd\u662f\u53ef\u4ee5\u5206\u5757\u7684\uff0c\u8fd9\u6837\u53ef\u4ee5\u5206\u5e03\u5f0f\u5730\u5904\u7406"),(0,i.kt)("h5",{id:"sequencefile"},"SequenceFile"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The internal structure of a sequence file with no compression and with record compression",src:a(5049).Z,width:"1000",height:"529"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The internal structure of a sequence file with block compression",src:a(1465).Z,width:"1000",height:"355"})),(0,i.kt)("h5",{id:"run-a-mapreduce-job"},"Run a MapReduce Job"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"How Hadoop runs a MapReduce job",src:a(1173).Z,width:"1000",height:"988"})),(0,i.kt)("h5",{id:"streaming"},"Streaming"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The relationship of the Streaming executable to the node manager and the task container",src:a(8694).Z,width:"448",height:"1000"})),(0,i.kt)("h4",{id:"shuffle-and-sort"},"Shuffle and Sort"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Shuffle and sort in MapReduce",src:a(1234).Z,width:"1000",height:"447"})),(0,i.kt)("h5",{id:"map-side"},"Map Side"),(0,i.kt)("p",null,"\u6bcf\u4e2aMap\u90fd\u6709\u4e00\u4e2amemory buffer\uff0c\u9ed8\u8ba4\u662f100MB\u3002"),(0,i.kt)("p",null,"Map\u4f1a\u5c06\u8f93\u51fa\u5199\u5230\u8fd9\u4e2abuffer\u91cc\uff0c\u6bcf\u5f53buffer\u5199\u6ee1\u540e\uff0c\u5c31\u4f1a\u89e6\u53d1spill\uff0c\u521b\u5efa\u4e00\u4e2a\u78c1\u76d8\u4e0a\u7684spill\u6587\u4ef6\u7136\u540e\u6e05\u7a7abuffer\u3002\u8fd9\u4e2abuffer\u662f\u5206\u533a(partitioned)\u7684\uff0c\u5bf9\u5e94\u4e0b\u6e38\u7684reducer\u3002\u7136\u540e\u5bf9\u6bcf\u4e2apartition\uff0c\u540e\u53f0\u4f1a\u6709\u4e00\u4e2a\u8fdb\u7a0b\u5bf9\u5176\u4e2d\u7684key\u8fdb\u884csort\uff0c\u7136\u540e\u518d\u5bf9sort\u8fd0\u884c\u4e00\u8fb9combiner\u3002"),(0,i.kt)("p",null,"\u591a\u4e2aSpill\u6587\u4ef6\u4f1a\u88ab\u5408\u6210\u4e3a\u4e00\u4e2a\u5206\u5757\u7684\u6709\u5e8f\u6587\u4ef6\u3002\u5982\u679c\u5408\u6210\u524dspill \u6587\u4ef6\u5927\u4e8e3\u4e2a\uff0ccombiner\u4f1a\u518d\u6b21\u8fd0\u884c\uff0c\u5426\u5219\u4e0d\u4f1a\u8fd0\u884c\u3002\u5728\u6b64\u8fc7\u7a0b\u4e2d\uff0c\u6570\u636e\u4e5f\u4f1a\u88ab\u538b\u7f29\u3002"),(0,i.kt)("h5",{id:"reduce-side"},"Reduce Side"),(0,i.kt)("p",null,"\u5f53Map \u4efb\u52a1\u5b8c\u6210\u540e\uff0c\u4f1a\u5411Application Master\u53d1\u9001\u6d88\u606f\uff0c\u7136\u540e\u5c31\u77e5\u9053\u4e86Map output\u548chost\u7684\u5173\u7cfb\u3002\u53ea\u6709\u5f53Application Master\u5411map host\u53d1\u9001\u6d88\u606f\u8981\u6c42\u5220\u9664\u7ed3\u679c\u540e\uff0c\u7ed3\u679c\u624d\u4f1a\u88ab\u5220\u9664\u3002"),(0,i.kt)("p",null,"Copy phase\uff1a\u4ecemap output\u590d\u5236\u7ed3\u679c\uff0c\u540e\u53f0\u6709\u591a\u4e2acopier threads\uff0c\u9ed8\u8ba4\u662f5\u4e2a\u3002"),(0,i.kt)("p",null,"\u5f53copies\u88ab\u590d\u5236\u5230\u78c1\u76d8\u4e0a\uff0c\u5c31\u4f1a\u5f00\u59cbmerge\u3002\u8fd9\u4e2a\u8fc7\u7a0b\u7531merge factor\u63a7\u5236\uff0c\u5982\u679c\u9ed8\u8ba4\u503c10\uff0c\u6536\u5230\u4e8650\u4e2a\u7ed3\u679c\uff0c\u5c31\u8981merge 5\u6b21\u540e\u5f62\u62105\u4e2a\u6587\u4ef6\u3002\u6700\u540e\u8fd95\u4e2a\u6587\u4ef6\u4e0d\u4f1a\u88abmerge\uff0c\u800c\u662f\u76f4\u63a5\u9001\u5230reducer"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"Efficiently merging 40 file segments with a merge factor of 10",src:a(4292).Z,width:"704",height:"1000"})),(0,i.kt)("p",null,"\u5982\u679c\u662f40\u4e2a\u6587\u4ef6\uff1a\u7b2c\u4e00\u6b214\u4e2a\uff0c\u7136\u540e10\u300110\u300110 \u8fd9\u56db\u6b21\u4ea7\u751f\u76844\u4e2a\u6587\u4ef6\u548c\u6700\u540e\u5269\u4e0b\u76846\u4e2a\u5408\u5e76\u6210\u4e3a\u4e00\u6b21merge\u3002"),(0,i.kt)("p",null,"\u8fd9\u6837\u505a\u662f\u4e3a\u4e86\u6700\u5c0f\u5316io\u6b21\u6570\u3002"),(0,i.kt)("h5",{id:"speculative-execution"},"Speculative Execution"),(0,i.kt)("p",null,"\u5982\u679chadoop\u5728\u8fd0\u884c\u8fc7\u7a0b\u4e2d\u53d1\u73b0\u54ea\u4e2atask\u6bd4\u9884\u671f\u6267\u884c\u5730\u6162\uff0c\u5c31\u4f1a\u542f\u52a8\u4e00\u4e2a\u540c\u6837\u5185\u5bb9\u7684backup \u4efb\u52a1\u3002\u8c01\u5148\u5b8c\u6210\uff0c\u53e6\u4e00\u4e2a\u90fd\u4f1a\u88abkill\u6389\u3002\u8fd9\u90e8\u5206\u53ea\u4f1a\u5360\u5f88\u5c0f\u4e00\u90e8\u5206\uff0c\u663e\u8457\u6162\u4e8e\u5176\u4ed6\u4efb\u52a1\u65f6\u624d\u4f1a\u89e6\u53d1\u3002"),(0,i.kt)("h5",{id:"filesystem-image-and-edit-log"},"Filesystem Image and Edit log"),(0,i.kt)("p",null,"\u5f53\u5ba2\u6237\u7aef\u53d1\u8d77\u5199\u8bf7\u6c42\uff0c\u8fd9\u4e2a\u64cd\u4f5c\u4f1a\u88ab\u8bb0\u5f55\u5728edit log\u4e2d\u3002namenode\u5728\u5185\u5b58\u4e2d\u4e5f\u4f1a\u6709\u4e00\u4e2ametadata\u7684\u6570\u636e\u7ed3\u6784\uff0c\u5728edit log\u4fee\u6539\u540e\u66f4\u65b0\u3002\u8fd9\u4e2a\u5185\u5b58\u4e2d\u7684metadata\u4f1a\u7528\u6765\u54cd\u5e94\u8bfb\u8bf7\u6c42\u3002"),(0,i.kt)("p",null,"Edit log\u4e8b\u5b9e\u4e0a\u662f\u5f88\u591a\u6587\u4ef6\uff0c\u5982",(0,i.kt)("em",{parentName:"p"},"edits_inprogress_0000000000000000020")," \u540e\u7f00\u662ftransaction ID\uff0c\u524d\u7f00\u662fedit\u3002"),(0,i.kt)("p",null,"\u6bcf\u6b21\u53ea\u6709\u4e00\u4e2a\u6587\u4ef6\u6253\u5f00\u53ef\u4ee5\u5199\u5165\uff0c\u5728\u4e8b\u52a1\u5b8c\u6210\u540eflush\uff0csync\u3002"),(0,i.kt)("p",null,"fsimage\u662f metadata\u7684\u5b8c\u5168checkpoint\uff0c\u901a\u5e38\u5f88\u5927\uff0cGB\u7ea7\u522b\u3002\u5185\u5bb9\u5305\u542b\u6587\u4ef6\u7cfb\u7edf\u4e2d\u6240\u6709\u6587\u4ef6\u5939\u548c\u6587\u4ef6\u7684inode\uff0c\u4ee3\u8868metadata\u3002fsimage",(0,i.kt)("strong",{parentName:"p"},"\u4e0d\u5305\u542b"),"block\u5728\u54ea\u4e2adatanode\u4e0a\u5b58\u50a8\u3002"),(0,i.kt)("p",null,"\u4e3a\u4e86\u4e0d\u8ba9Edit log\u8fc7\u591a\uff0c\u53ea\u80fd\u53e6\u8d77\u4e00\u4e2anamenode\uff0c\u5b9a\u65f6\u5730\u53d6\u6700\u65b0\u7684fsimage\u548cedit log\uff0c\u7136\u540e\u5408\u5e76\u6210\u6700\u65b0\u7684fsimage\u56de\u4f20\u7ed9namenode\uff0c\u8fd9\u6837edit log\u5c31\u4e0d\u4f1a\u592a\u591a\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"The checkpointing process",src:a(1098).Z,width:"921",height:"1000"})),(0,i.kt)("h5",{id:"safe-mode"},"Safe mode"),(0,i.kt)("p",null,"\u53ea\u5bf9client\u63d0\u4f9b\u6587\u4ef6\u7cfb\u7edf\u7684Read-only view"),(0,i.kt)("h5",{id:"balancer"},"Balancer"),(0,i.kt)("p",null,"\u628a\u7a7a\u95f4\u4f7f\u7528\u7387\u6700\u9ad8\u7684node\u4e0a\u4e00\u90e8\u5206block\u79fb\u52a8\u5230\u6700\u4f4e\u7684node"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"start-balancer.sh")),(0,i.kt)("h4",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"brew install hadoop")),(0,i.kt)("p",null,"\u6ce8\u610f\u5b89\u88c5\u7684\u4f4d\u7f6e"),(0,i.kt)("p",null,"\u672c\u4e66\u7684\u4ee3\u7801\u53ef\u4ee5\u5728github\u4e0a\u627e\u5230\uff0crepo owner\u5c31\u662f\u4e66\u7684\u4f5c\u8005"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://github.com/tomwhite/hadoop-book"},"tomwhite/hadoop-book: Example source code accompanying O'Reilly's \"Hadoop: The Definitive Guide\" by Tom White (github.com)")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"hadoop-book git:(master) \u2717 hadoop jar /opt/homebrew/Cellar/hadoop/3.3.3/libexec/share/hadoop/tools/lib/hadoop-streaming-*.jar \\\n  -input input/ncdc/sample.txt \\\n  -output output \\\n  -mapper ch02-mr-intro/src/main/python/max_temperature_map.py \\\n  -reducer ch02-mr-intro/src/main/python/max_temperature_reduce.py\n")),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://towardsdatascience.com/installing-hadoop-on-a-mac-ec01c67b003c"},"Installing Hadoop on a Mac. The only guide you will ever need! | by Siphu Langeni, MS | Towards Data Science")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ open core-site.xml\n<configuration>\n  <property>\n    <name>fs.defaultFS</name>\n    <value>hdfs://localhost:9000</value>\n  </property>\n</configuration>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ open hdfs-site.xml\n<configuration>\n  <property>\n    <name>dfs.replication</name>\n    <value>1</value>\n  </property>\n</configuration>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"$ open mapred-site.xml\n<configuration>\n  <property>\n    <name>mapreduce.framework.name</name>\n    <value>yarn</value>\n  </property>\n  <property>\n    <name>mapreduce.application.classpath</name>   <value>/opt/homebrew/Cellar/hadoop/3.3.3/libexec/share/hadoop/mapreduce/*:/opt/homebrew/Cellar/hadoop/3.3.3/libexec/share/hadoop/mapreduce/lib/*</value>\n  </property>\n</configuration>\n")),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"open yarn-site.xml\n<configuration> \n    <property> \n    <name>yarn.nodemanager.aux-services</name> \n    <value>mapreduce_shuffle</value> \n    </property> \n    <property> \n    <name>yarn.nodemanager.env-whitelist</name> <value>JAVA_HOME,HADOOP_COMMON_HOME,HADOOP_HDFS_HOME,HADOOP_CONF_DIR,CLASSPATH_PREPEND_DISTCACHE,HADOOP_YARN_HOME,HADOOP_MAPRED_HOME</value> \n    </property> \n    </configuration>\n")),(0,i.kt)("p",null,"Ssh \u672c\u5730\u53ef\u4ee5\u8dd1\u901a\uff0c\u5728\u8bbe\u7f6e\u91cc\u6253\u5f00\u6743\u9650"),(0,i.kt)("h4",{id:"\u76f8\u5173\u9879\u76ee\u6df1\u5751"},"\u76f8\u5173\u9879\u76ee\uff08\u6df1\u5751\uff09"),(0,i.kt)("h5",{id:"avro"},"Avro"),(0,i.kt)("p",null,"\u6570\u636e\u5e8f\u5217\u5316\u7cfb\u7edf"),(0,i.kt)("h5",{id:"parquet"},"Parquet"),(0,i.kt)("p",null,"\u5217\u5b58\u50a8\u683c\u5f0f"),(0,i.kt)("h5",{id:"flume"},"Flume"),(0,i.kt)("p",null,"\u6570\u636eIngestion"),(0,i.kt)("h5",{id:"sqoop"},"Sqoop"),(0,i.kt)("p",null,"\u4ece\u5173\u7cfb\u578b\u6570\u636e\u5e93\u63d0\u53d6\u6570\u636e"),(0,i.kt)("h5",{id:"pig"},"Pig"),(0,i.kt)("p",null,"\u5904\u7406\u5927\u578b\u6570\u636e\u96c6"),(0,i.kt)("h5",{id:"hive"},"Hive"),(0,i.kt)("p",null,"Data warehouse"),(0,i.kt)("h5",{id:"crunch"},"Crunch"),(0,i.kt)("p",null,"Map Reduce\u9ad8\u7ea7API"),(0,i.kt)("h5",{id:"spark"},"Spark"),(0,i.kt)("p",null,"\u5927\u6570\u636e\u5904\u7406\u5f15\u64ce"),(0,i.kt)("h5",{id:"hbase"},"HBase"),(0,i.kt)("p",null,"Big table"),(0,i.kt)("p",null,"\u8fd9\u4e9b\u6709\u7a7a\u518d\u66f4\u65b0\u5427\u2026\u2026"))}s.isMDXComponent=!0},1239:function(e,t,a){t.Z=a.p+"assets/images/hddg_0201-565ba1dd61ad20c95ff4303ba0bb72c2.png"},4642:function(e,t,a){t.Z=a.p+"assets/images/hddg_0203-6dd0644d38d83417bc59a7ea255a0740.png"},4708:function(e,t,a){t.Z=a.p+"assets/images/hddg_0204-b106253fc8c15aca49c21bd56355a8b4.png"},533:function(e,t,a){t.Z=a.p+"assets/images/hddg_0301-82db54098077811ac4a9b3e42a3b4f8b.png"},125:function(e,t,a){t.Z=a.p+"assets/images/hddg_0302-c8cb8291ea25d076380dab6ecd22d5f1.png"},8312:function(e,t,a){t.Z=a.p+"assets/images/hddg_0304-b3d309abf2a2450c2c4d5c0e1917580c.png"},5816:function(e,t,a){t.Z=a.p+"assets/images/hddg_0305-dd6b7f3ffae9cc0ec406e8ab622da51c.png"},5882:function(e,t,a){t.Z=a.p+"assets/images/hddg_0401-505d71e442efe4ce248f91816823d9a9.png"},9036:function(e,t,a){t.Z=a.p+"assets/images/hddg_0402-675ca1e354d72d1ce4f647d35db97ca4.png"},3966:function(e,t,a){t.Z=a.p+"assets/images/hddg_0403-91bd7d465f01d39e5212e61ed800e430.png"},8083:function(e,t,a){t.Z=a.p+"assets/images/hddg_0404-653cd8c49bb839c8537197fb5994eed1.png"},5049:function(e,t,a){t.Z=a.p+"assets/images/hddg_0502-a0e1ef72e84ab76bbedf95de7921eac3.png"},1465:function(e,t,a){t.Z=a.p+"assets/images/hddg_0503-4f3251d4d3811eccf37528af01dbe1cb.png"},1173:function(e,t,a){t.Z=a.p+"assets/images/hddg_0701-2fdcca932e60f88b5f572fb72f9f5153.png"},8694:function(e,t,a){t.Z=a.p+"assets/images/hddg_0702-b3791110376be07016d6e7fd620bada8.png"},1234:function(e,t,a){t.Z=a.p+"assets/images/hddg_0704-07f10a071f0f4f7892b3605621ca724d.png"},4292:function(e,t,a){t.Z=a.p+"assets/images/hddg_0705-7df5dacfb8bd9b80e405a767ecaad8a3.png"},1098:function(e,t,a){t.Z=a.p+"assets/images/hddg_1101-ea910422f7350ad26adec87e726ddc0e.png"}}]);