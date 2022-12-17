"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[4936],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return b}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(b,l(l({ref:t},u),{},{components:n})):r.createElement(b,l({ref:t},u))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<o;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},35896:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return o},metadata:function(){return i},toc:function(){return p}});var r=n(83117),a=(n(67294),n(3905));const o={title:"MongoDB"},l="MongoDB",i={unversionedId:"database/mongodb",id:"database/mongodb",title:"MongoDB",description:"\u77e5\u8bc6\u7bc7",source:"@site/docs/database/mongodb.md",sourceDirName:"database",slug:"/database/mongodb",permalink:"/docs/database/mongodb",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/database/mongodb.md",tags:[],version:"current",frontMatter:{title:"MongoDB"},sidebar:"tutorialSidebar",previous:{title:"Database Basics",permalink:"/docs/database/database_internals"},next:{title:"Domain Driven Design",permalink:"/docs/design/ddd"}},c={},p=[{value:"\u77e5\u8bc6\u7bc7",id:"\u77e5\u8bc6\u7bc7",level:2},{value:"Document",id:"document",level:3},{value:"\u5b89\u88c5\u7bc7",id:"\u5b89\u88c5\u7bc7",level:2},{value:"Mac",id:"mac",level:3},{value:"\u4f7f\u7528\u7bc7",id:"\u4f7f\u7528\u7bc7",level:2},{value:"TypeORM",id:"typeorm",level:3}],u={toc:p};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("h2",{id:"\u77e5\u8bc6\u7bc7"},"\u77e5\u8bc6\u7bc7"),(0,a.kt)("h3",{id:"document"},"Document"),(0,a.kt)("p",null,"MongoDB \u57fa\u672c\u5b58\u50a8\u5355\u5143\u7c7b\u578b\u4e3aDocument\uff0c\u662f\u4ee5BSON\u4e3a\u683c\u5f0f\u5b58\u50a8\u7684\u3002"),(0,a.kt)("p",null,"\u4e00\u4e2a\u6570\u636e\u5e93\u6709\u591a\u4e2acollection\uff0c\u6bcf\u4e2acollection\u4e2d\u6709\u591a\u4e2adocument"),(0,a.kt)("p",null,"document\u7684\u683c\u5f0f\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"{\n    field: value\n}\n")),(0,a.kt)("p",null,"_id \u4ee3\u8868ObjectId\uff0c\u662f\u552f\u4e00\u7684\u300112\u5b57\u8282\u957f\u5ea6\u3001\u751f\u6210\u7684\u6807\u8bc6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"a 4-byte ",(0,a.kt)("em",{parentName:"li"},"timestamp value"),", representing the ObjectId's creation, measured in seconds since the Unix epoch"),(0,a.kt)("li",{parentName:"ul"},"a 5-byte ",(0,a.kt)("em",{parentName:"li"},"random value")," generated once per process. This random value is unique to the machine and process."),(0,a.kt)("li",{parentName:"ul"},"a 3-byte ",(0,a.kt)("em",{parentName:"li"},"incrementing counter"),", initialized to a random value")),(0,a.kt)("p",null,"ObjectId\u6709\u4e24\u4e2a\u5f88\u6709\u610f\u601d\u7684\u5730\u65b9\uff0c\u56e0\u4e3a\u5b83\u7528\u5230\u4e86\u65f6\u95f4\u6233\uff0c\u4f46\u662f\u7c92\u5ea6\u662f\u4e00\u79d2\u3002\u56e0\u6b64\u4e00\u79d2\u5185\u751f\u6210\u7684\u591a\u4e2aObjectId\u662f\u5148\u540e\u4e0d\u5b9a\u7684\u3002\u800c\u4e14\uff0c\u7531\u4e8e\u662fClient\u751f\u6210\uff0c\u4e5f\u4f1a\u53d7\u5230\u7cfb\u7edf\u65f6\u95f4\u7684\u5f71\u54cd\u3002"),(0,a.kt)("p",null,"\u5728document\u7684\u952e\u540d\u4e2d\uff0c\u4e0d\u80fd\u7528_id\u3002"),(0,a.kt)("p",null,"\u5f53\u7136\uff0c\u7531\u4e8e\u7c7b\u4f3cjson\u7684\u7279\u6027\uff0c_id\u662f\u5141\u8bb8\u6709\u5b50document\u7684\uff0c\u5b50\u952e\u540d\u4e0d\u80fd\u4ee5$\u5f00\u5934\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The field name ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," is reserved for use as a primary key; its value must be unique in the collection, is immutable, and may be of any type other than an array. If the ",(0,a.kt)("inlineCode",{parentName:"p"},"_id")," contains subfields, the subfield names cannot begin with a (",(0,a.kt)("inlineCode",{parentName:"p"},"$"),") symbol.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Field names ",(0,a.kt)("strong",{parentName:"p"},"cannot")," contain the ",(0,a.kt)("inlineCode",{parentName:"p"},"null")," character.")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"The server permits storage of field names that contain dots (",(0,a.kt)("inlineCode",{parentName:"p"},"."),") and dollar signs (",(0,a.kt)("inlineCode",{parentName:"p"},"$"),").")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"MongodB 5.0 adds improved support for the use of (",(0,a.kt)("inlineCode",{parentName:"p"},"$"),") and (",(0,a.kt)("inlineCode",{parentName:"p"},"."),") in field names. There are some restrictions. See ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/manual/core/dot-dollar-considerations/#std-label-crud-concepts-dot-dollar-considerations"},"Field Name Considerations")," for more details."))),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},'{\n   ...\n   name: { first: "Alan", last: "Turing" },\n   contact: { phone: { type: "cell", number: "111-222-3333" } },\n   ...\n}\n')),(0,a.kt)("p",null,"\u5982\u679c\u8981\u83b7\u53d6\u5230 Alan\u7684number, \u7528'.'\u6765\u8868\u793a\u5b50document:",(0,a.kt)("inlineCode",{parentName:"p"},"contact.phone.number")),(0,a.kt)("p",null,"BSON Document\u6700\u5927\u4e0d\u8d85\u8fc7",(0,a.kt)("strong",{parentName:"p"},"16MB"),"\uff0c\u5982\u679c\u8d85\u8fc7\u8fd9\u4e2a\u5927\u5c0f\u5c31\u9700\u8981\u7528GridFS ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/database-tools/mongofiles/#mongodb-binary-bin.mongofiles"},"mongofiles"),"."),(0,a.kt)("p",null,"\u548cJSON\u4e0d\u540c\u7684\u662f\uff0cBSON\u6587\u4ef6\u4e2d\u7684\u952e\u503c\u5bf9\u662f\u6709\u5e8f\u7684\u3002"),(0,a.kt)("h2",{id:"\u5b89\u88c5\u7bc7"},"\u5b89\u88c5\u7bc7"),(0,a.kt)("h3",{id:"mac"},"Mac"),(0,a.kt)("p",null,"macOS Monterey:"),(0,a.kt)("p",null,"\u4f7f\u7528brew\u5b89\u88c5\uff0c\u975e\u5e38\u65b9\u4fbf\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"brew tap mongodb/brew\nbrew install mongodb-community@4.4\nbrew services start mongodb-community@4.4\n")),(0,a.kt)("p",null,"\u4e09\u53e5\u8bdd\u5c31\u53ef\u4ee5\u4e86\u3002"),(0,a.kt)("h2",{id:"\u4f7f\u7528\u7bc7"},"\u4f7f\u7528\u7bc7"),(0,a.kt)("p",null,"\u901a\u5e38\u9ed8\u8ba4\u7aef\u53e3\u4e3a27017\u3002\u8fde\u63a5\u65f6\u4e0d\u9700\u8981\u7528\u6237\u540d\u5bc6\u7801"),(0,a.kt)("h3",{id:"typeorm"},"TypeORM"),(0,a.kt)("p",null,"\u53c2\u8003",(0,a.kt)("a",{parentName:"p",href:"https://github.com/typeorm/typeorm/blob/master/docs/mongodb.md"},"README")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"@Entity()\nexport class User {\n    \n    @ObjectIdColumn()\n    id: ObjectID;\n    \n    @Column()\n    firstName: string;\n    \n    @Column()\n    lastName: string;\n    \n}\n")),(0,a.kt)("p",null,"\u5982\u679c\u8981\u548cMysql\u517c\u5bb9\uff0c\u53ef\u4ee5\u5c06ObjectID\u7684\u6807\u8bc6\u540d\u6539\u4e3aUserId\uff0c\u4e0d\u5f71\u54cd\uff0c\u5b9e\u9645\u5b58\u50a8\u65f6\u952e\u540d\u4f9d\u7136\u4e3a_id."),(0,a.kt)("p",null,"@ObjectIdColumn()\nUserId: ObjectID;"),(0,a.kt)("p",null,"\u81ea\u5df1\u7528\u7684\u65f6\u5019\uff0c127\u8fde\u4e0d\u4e0a\uff0c0.0.0.0\u5c31\u53ef\u4ee5\u8fde\u3002"))}s.isMDXComponent=!0}}]);