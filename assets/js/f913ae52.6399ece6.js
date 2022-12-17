"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[6820],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return h}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),c=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||d[m]||i;return n?r.createElement(h,o(o({ref:t},p),{},{components:n})):r.createElement(h,o({ref:t},p))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=n[c];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},60433:function(e,t,n){n.r(t),n.d(t,{assets:function(){return s},contentTitle:function(){return o},default:function(){return u},frontMatter:function(){return i},metadata:function(){return l},toc:function(){return c}});var r=n(83117),a=(n(67294),n(3905));const i={},o=void 0,l={unversionedId:"graph/graph-database",id:"graph/graph-database",title:"graph-database",description:"2022/08/01",source:"@site/docs/graph/graph-database.md",sourceDirName:"graph",slug:"/graph/graph-database",permalink:"/docs/graph/graph-database",draft:!1,tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"gitignore",permalink:"/docs/git/gitignore"},next:{title:"intro",permalink:"/docs/intro"}},s={},c=[{value:"Recursive query",id:"recursive-query",level:4},{value:"Modeling",id:"modeling",level:4},{value:"Uniqueness",id:"uniqueness",level:4},{value:"Gremlin server(apache tinkerpop)",id:"gremlin-serverapache-tinkerpop",level:4},{value:"\u6b65\u9aa4",id:"\u6b65\u9aa4",level:4},{value:"Known walk",id:"known-walk",level:4}],p={toc:c};function u(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"2022/08/01"),(0,a.kt)("p",null,"Key-value\u2014Represents all data by a unique identifier (a key) and an associated data object (the value). Examples include Berkeley DB, RocksDB, Redis, and Memcached. "),(0,a.kt)("p",null,"Wide-column (or column-oriented)\u2014Stores data in rows with a potentially large number or possibly varying numbers of columns in each row. Examples include Apache HBase, Azure Table Storage, Apache Cassandra, and Google Cloud Bigtable."),(0,a.kt)("p",null,"Document\u2014Stores data in a uniquely keyed document that can have varying schema and that can contain nested data. Examples include MongoDB and Apache CouchDB. "),(0,a.kt)("p",null,"Relational\u2014Stores data in tables containing rows with strict schema. Relationships can be established between tables allowing the joining of rows. Examples include PostgreSQL, Oracle Database, and Microsoft SQL Server. "),(0,a.kt)("p",null,"Graph\u2014Stores data as vertices (nodes, components) and edges (relationships). Examples include Neo4j, Apache TinkerPop\u2019s Gremlin Server, JanusGraph, and TigerGraph."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220801205636844",src:n(5601).Z,width:"1142",height:"774"})),(0,a.kt)("h4",{id:"recursive-query"},"Recursive query"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220801223743630",src:n(34394).Z,width:"538",height:"500"})),(0,a.kt)("p",null,"\u6bd4\u5982\u516c\u53f8\u7684\u67b6\u6784\u56fe\uff0c\u6bcf\u4e00\u5c42\u67e5\u4e0a\u7ea7\u662f\u8c01\uff0c\u4e00\u5c42\u4e00\u5c42\u67e5\uff0csql\u5c31\u5f88\u96be\u5199\u3002\u800c\u4e14\u4f1a\u6709\u6027\u80fd\u95ee\u9898"),(0,a.kt)("h4",{id:"modeling"},"Modeling"),(0,a.kt)("p",null,"Entity\u2014Commonly represented by nouns, entities describe the things or the type of things in the domain (for example, vehicles, users, or geographic locations). As we move from problem definition and conceptual modeling, entities often become vertices in the logical model and technical implementation. "),(0,a.kt)("p",null,"Relationship\u2014Often represented by verbs (or verbal phrases), relationships describe how entities interact with one another. It could be something like moves as in \u201ca vehicle moves to a location,\u201d or friends as in the Facebook sense of this word as a verb (for example, \u201ca person friends another person\u201d). As we move from problem definition and conceptual modeling, relationships often become edges in the logical model and technical implementation. "),(0,a.kt)("p",null,"Attribute\u2014Like entities, also represented by a noun, but always in the context of an entity or relationship. Attributes describe a quality about the entity or relationship. We limit our use of attributes as we feel that these can distract from the more critical parts of the model development process. "),(0,a.kt)("p",null,"Access pattern\u2014Describes either questions or methods of interaction in the domain. Examples can be questions like, Where is this vehicle going? or Who are this person\u2019s friends? As we move from problem definition and conceptual modeling, access patterns often become queries in the logical model and technical implementation. "),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220801224608944",src:n(64244).Z,width:"864",height:"240"})),(0,a.kt)("h4",{id:"uniqueness"},"Uniqueness"),(0,a.kt)("p",null,"\u4e00\u5bf9\u4e00\uff0c\u4e00\u5bf9\u591a"),(0,a.kt)("p",null,"\u6bd4\u5982movie\u548c\u4eba\uff0c\u4eba\u53ef\u4ee5\u770b\u591a\u6b21\u540c\u4e00\u90e8\u7535\u5f71\uff0c\u56e0\u6b64\u4f1a\u6709\u591a\u4e2aedge"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20220801225814172",src:n(43235).Z,width:"960",height:"446"})),(0,a.kt)("p",null,"\u8fd9\u672c\u4e66\u540e\u9762\u7684\u4f8b\u5b50\u7528\u7684\u90fd\u662fGremlin"),(0,a.kt)("p",null,"\u56fe\u6570\u636e\u5e93\u4e5f\u5f88\u591a\u3002\u6bd4\u5982neo4j\uff0ccayley, dgraph, nebula."),(0,a.kt)("h4",{id:"gremlin-serverapache-tinkerpop"},"Gremlin server(apache tinkerpop)"),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://tinkerpop.apache.org/download.html"},"https://tinkerpop.apache.org/download.html")),(0,a.kt)("p",null,"\u6709\u4e00\u4e2agremlin server\uff0c\u4e00\u4e2agremlin console"),(0,a.kt)("p",null,"\u8fd9\u4e2a\u597d\u50cf\u5728mac\u4e0a\u8fd8\u88c5\u4e0d\u4e0a\uff0c\u5728windows\u4e0a\u80fd\u88c5\u4e0a\u3002"),(0,a.kt)("p",null,"\u6dfb\u52a0\u8fb9"),(0,a.kt)("p",null,"g.addE('friends').from(dave).to(jim)."),(0,a.kt)("h4",{id:"\u6b65\u9aa4"},"\u6b65\u9aa4"),(0,a.kt)("p",null,"1 Translating entities to vertices "),(0,a.kt)("p",null,"2 Translating relationships to edges "),(0,a.kt)("p",null,"3 Assigning properties to those vertices and edges "),(0,a.kt)("p",null,"4 Testing the model"),(0,a.kt)("h4",{id:"known-walk"},"Known walk"),(0,a.kt)("p",null,"\u5df2\u77e5\u7684\u70b9\u548c\u8fb9\u7684\u96c6\u5408\uff0cpath\u662f\u4e00\u79cd\u7279\u6b8a\u7684walk"))}u.isMDXComponent=!0},5601:function(e,t,n){t.Z=n.p+"assets/images/image-20220801205636844-bf180032f92e740312c9c686d4505117.png"},34394:function(e,t,n){t.Z=n.p+"assets/images/image-20220801223743630-6b4eaf62033485cbb3bdf7b966f1e4d8.png"},64244:function(e,t,n){t.Z=n.p+"assets/images/image-20220801224608944-1e22c3074fdef67942566c28fd1dd4d8.png"},43235:function(e,t,n){t.Z=n.p+"assets/images/image-20220801225814172-b641de166f65edbf0fe66b015f009570.png"}}]);