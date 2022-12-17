"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[1273],{3905:function(t,e,a){a.d(e,{Zo:function(){return o},kt:function(){return u}});var n=a(67294);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function d(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var p=n.createContext({}),N=function(t){var e=n.useContext(p),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},o=function(t){var e=N(t.components);return n.createElement(p.Provider,{value:e},t.children)},m="mdxType",k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,p=t.parentName,o=d(t,["components","mdxType","originalType","parentName"]),m=N(a),s=l,u=m["".concat(p,".").concat(s)]||m[s]||k[s]||r;return a?n.createElement(u,i(i({ref:e},o),{},{components:a})):n.createElement(u,i({ref:e},o))}));function u(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var d={};for(var p in e)hasOwnProperty.call(e,p)&&(d[p]=e[p]);d.originalType=t,d[m]="string"==typeof t?t:l,i[1]=d;for(var N=2;N<r;N++)i[N]=a[N];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},25120:function(t,e,a){a.r(e),a.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return m},frontMatter:function(){return r},metadata:function(){return d},toc:function(){return N}});var n=a(83117),l=(a(67294),a(3905));const r={title:"Oracle"},i=void 0,d={unversionedId:"database/Oracle",id:"database/Oracle",title:"Oracle",description:"Oracle \u6570\u636e\u5e93",source:"@site/docs/database/Oracle.md",sourceDirName:"database",slug:"/database/Oracle",permalink:"/docs/database/Oracle",draft:!1,tags:[],version:"current",frontMatter:{title:"Oracle"},sidebar:"tutorialSidebar",previous:{title:"Churn",permalink:"/docs/data/fighting_churn_with_data"},next:{title:"Database Basics",permalink:"/docs/database/database_internals"}},p={},N=[{value:"Oracle \u6570\u636e\u5e93",id:"oracle-\u6570\u636e\u5e93",level:2},{value:"\u5206\u7247",id:"\u5206\u7247",level:3},{value:"\u57fa\u7840DML",id:"\u57fa\u7840dml",level:3},{value:"\u7ed9\u67d0\u4e00\u5217\u6dfb\u52a0\u9650\u5236\uff1a",id:"\u7ed9\u67d0\u4e00\u5217\u6dfb\u52a0\u9650\u5236",level:4},{value:"SQL\u6807\u51c6",id:"sql\u6807\u51c6",level:3},{value:"\u96c6\u5408\u8fd0\u7b97\u7b26(The Set Operators (oracle.com))",id:"\u96c6\u5408\u8fd0\u7b97\u7b26the-set-operators-oraclecom",level:4},{value:"PL/SQL",id:"plsql",level:3},{value:"\u5757",id:"\u5757",level:4},{value:"\u5b50\u7a0b\u5e8f",id:"\u5b50\u7a0b\u5e8f",level:4},{value:"\u8d4b\u503c",id:"\u8d4b\u503c",level:4},{value:"SELECT INTO",id:"select-into",level:4},{value:"Row Locks",id:"row-locks",level:4},{value:"Table Locks",id:"table-locks",level:4},{value:"\u67e5\u770b\u9501\u8868\u8fdb\u7a0b",id:"\u67e5\u770b\u9501\u8868\u8fdb\u7a0b",level:5},{value:"MERGE INTO",id:"merge-into",level:4},{value:"WHILE...LOOP...END LOOP",id:"whileloopend-loop",level:4},{value:"\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26 ||",id:"\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26-",level:4},{value:"\u903b\u8f91\u4e0e\u6216\u975e",id:"\u903b\u8f91\u4e0e\u6216\u975e",level:4},{value:"\u903b\u8f91\u8fd0\u7b97\u7b26",id:"\u903b\u8f91\u8fd0\u7b97\u7b26",level:4},{value:"LIKE",id:"like",level:4},{value:"BETWEEN",id:"between",level:4},{value:"Blank-padding",id:"blank-padding",level:4},{value:"\u6ce8\u91ca",id:"\u6ce8\u91ca",level:4},{value:"Table, Array, \u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578bTYPE",id:"table-array-\u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578btype",level:4},{value:"SQL\u7ec3\u4e60",id:"sql\u7ec3\u4e60",level:3}],o={toc:N};function m(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"oracle-\u6570\u636e\u5e93"},"Oracle \u6570\u636e\u5e93"),(0,l.kt)("p",null,"\u6587\u6863\u94fe\u63a5\uff1a"),(0,l.kt)("h3",{id:"\u5206\u7247"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/shard/overview-oracle-sharding1.html#GUID-82BA92CE-67B3-4A0F-B6A4-8FE30587CB99"},"\u5206\u7247")),(0,l.kt)("h3",{id:"\u57fa\u7840dml"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/tdddg/creating-managing-schema-objects.html#GUID-A951A80F-7774-4620-8497-12E7DFFB663E"},"\u57fa\u7840DML")),(0,l.kt)("h4",{id:"\u7ed9\u67d0\u4e00\u5217\u6dfb\u52a0\u9650\u5236"},"\u7ed9\u67d0\u4e00\u5217\u6dfb\u52a0\u9650\u5236\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-sql"},"ALTER TABLE PERFORMANCE_PARTS\nMODIFY WEIGHT NOT NULL;\n")),(0,l.kt)("h3",{id:"sql\u6807\u51c6"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/History-of-SQL.html#GUID-4DD5E1B6-BEC7-4E9B-B369-1466F93ACA28"},"SQL\u6807\u51c6")),(0,l.kt)("h4",{id:"\u96c6\u5408\u8fd0\u7b97\u7b26the-set-operators-oraclecom"},"[\u96c6\u5408\u8fd0\u7b97\u7b26]","(",(0,l.kt)("a",{parentName:"h4",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/The-UNION-ALL-INTERSECT-MINUS-Operators.html#GUID-B64FE747-586E-4513-945F-80CB197125EE"},"The Set Operators (oracle.com)"),")"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION"),"\uff1a\u5408\u5e76\u67e5\u8be2\u7ed3\u679c\uff0c\u53bb\u9664\u91cd\u590d\u7ed3\u679c\u3001"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"UNION ALL"),"\uff1a\u5408\u5e76\u67e5\u8be2\u7ed3\u679c\uff0c\u4e0d\u53bb\u9664\u91cd\u590d\u7ed3\u679c\u3001"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"INTERSECT"),"\uff1a\u53ea\u53d6\u67e5\u8be2\u7ed3\u679c\u7684\u4ea4\u96c6\u3001"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"MINUS"),"\uff1a\u53ea\u5728\u7b2c\u4e00\u4e2a\u67e5\u8be2\u7ed3\u679c\uff0c\u4e0d\u5728\u7b2c\u4e8c\u4e2a\u7ed3\u679c\u3001"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPT"),"\uff1a\u548cMINUS\u4e00\u6837"),(0,l.kt)("h3",{id:"plsql"},(0,l.kt)("a",{parentName:"h3",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/lnpls/overview.html#GUID-EAC28BE9-598B-4FF1-B0EA-C1AD0884634B"},"PL/SQL")),(0,l.kt)("h4",{id:"\u5757"},"\u5757"),(0,l.kt)("p",null,"\u5728PL/SQL\u4e2d\uff0c\u4e00\u4e2a\u201c\u5757\u201d\u662f\u4e00\u4e2a\u57fa\u672c\u5355\u5143\uff0c\u7531",(0,l.kt)("inlineCode",{parentName:"p"},"DECLARE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"BEGIN"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"EXCEPTION"),",  ",(0,l.kt)("inlineCode",{parentName:"p"},"END"),"\u5b9a\u4e49\u3002\u5982\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"<< label >> (optional)\nDECLARE    -- Declarative part (optional)\n  -- Declarations of local types, variables, & subprograms\n\nBEGIN      -- Executable part (required)\n  -- Statements (which can use items declared in declarative part)\n\n[EXCEPTION -- Exception-handling part (optional)\n  -- Exception handlers for exceptions (errors) raised in executable part]\nEND;\n")),(0,l.kt)("h4",{id:"\u5b50\u7a0b\u5e8f"},"\u5b50\u7a0b\u5e8f"),(0,l.kt)("p",null,"\u4e00\u4e2a\u5b50\u7a0b\u5e8f\u5c31\u662f\u53ef\u91cd\u590d\u6267\u884c\u7684\u8bed\u53e5\u5757\u3002"),(0,l.kt)("p",null,"\u9664\u6b64\u4e4b\u5916\uff0cPL/SQL\u8fd8\u53ef\u4ee5\u8c03\u7528\u5176\u4ed6\u8bed\u8a00\u5199\u7684\u5916\u90e8\u5b50\u7a0b\u5e8f\u3002"),(0,l.kt)("h4",{id:"\u8d4b\u503c"},"\u8d4b\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  valid_id       BOOLEAN;\nBEGIN \n  valid_id := TRUE;\nEND;\n")),(0,l.kt)("h4",{id:"select-into"},"SELECT INTO"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  bonus   NUMBER(8,2);\nBEGIN\n  SELECT salary * 0.10 INTO bonus\n  FROM employees\n  WHERE employee_id = 100;\nEND;\n\nDBMS_OUTPUT.PUT_LINE('bonus = ' || TO_CHAR(bonus));\n/\n")),(0,l.kt)("h4",{id:"row-locks"},"Row Locks"),(0,l.kt)("p",null,"A transaction acquires a row lock for each row modified by one of the following statements: ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MERGE"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," ... ",(0,l.kt)("inlineCode",{parentName:"p"},"FOR")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),". The row lock exists until the transaction commits or rolls back."),(0,l.kt)("h4",{id:"table-locks"},"Table Locks"),(0,l.kt)("p",null,"A transaction automatically acquires a table lock (",(0,l.kt)("strong",{parentName:"p"},"TM lock"),") when a table is modified with the following statements: ",(0,l.kt)("inlineCode",{parentName:"p"},"INSERT"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"DELETE"),", ",(0,l.kt)("inlineCode",{parentName:"p"},"MERGE"),", and ",(0,l.kt)("inlineCode",{parentName:"p"},"SELECT")," ... ",(0,l.kt)("inlineCode",{parentName:"p"},"FOR")," ",(0,l.kt)("inlineCode",{parentName:"p"},"UPDATE"),". These DML operations require table locks to reserve DML access to the table on behalf of a transaction and to prevent DDL operations that would conflict with the transaction. You can explicitly obtain a table lock using the ",(0,l.kt)("inlineCode",{parentName:"p"},"LOCK")," ",(0,l.kt)("inlineCode",{parentName:"p"},"TABLE"),' statement, as described in "',(0,l.kt)("a",{parentName:"p",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Manual-Data-Locking.html#GUID-B1DE7D59-7FD1-4971-B98D-B69529DF7688"},"Manual Data Locking"),'".'),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"SQL Statement"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Row Locks"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Table Lock Mode"),(0,l.kt)("th",{parentName:"tr",align:"left"},"RS"),(0,l.kt)("th",{parentName:"tr",align:"left"},"RX"),(0,l.kt)("th",{parentName:"tr",align:"left"},"S"),(0,l.kt)("th",{parentName:"tr",align:"left"},"SRX"),(0,l.kt)("th",{parentName:"tr",align:"left"},"X"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SELECT")," ... ",(0,l.kt)("inlineCode",{parentName:"td"},"FROM")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table")),(0,l.kt)("inlineCode",{parentName:"td"},"...")),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2014"),(0,l.kt)("td",{parentName:"tr",align:"left"},"none"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"INSERT")," ",(0,l.kt)("inlineCode",{parentName:"td"},"INTO")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"UPDATE")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#GUID-3D57596F-8B73-4C80-8F4D-79A12F781EFD__BABHAJFD"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e474"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"MERGE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"INTO")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"DELETE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"FROM")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e541"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e546"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SELECT")," ... ",(0,l.kt)("inlineCode",{parentName:"td"},"FROM")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ",(0,l.kt)("inlineCode",{parentName:"td"},"FOR")," ",(0,l.kt)("inlineCode",{parentName:"td"},"UPDATE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"OF")," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"Yes"),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e588"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y",(0,l.kt)("a",{parentName:"td",href:"https://docs.oracle.com/en/database/oracle/oracle-database/21/sqlrf/Automatic-Locks-in-DML-Operations.html#fnsrc_d463693e593"},"Foot 1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"LOCK")," ",(0,l.kt)("inlineCode",{parentName:"td"},"TABLE")," ",(0,l.kt)("em",{parentName:"td"},(0,l.kt)("inlineCode",{parentName:"em"},"table"))," ",(0,l.kt)("inlineCode",{parentName:"td"},"IN")," ..."),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u2014"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"})),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ROW")," ",(0,l.kt)("inlineCode",{parentName:"td"},"SHARE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"MODE")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"SS"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"ROW")," ",(0,l.kt)("inlineCode",{parentName:"td"},"EXCLUSIVE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"MODE")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"SX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SHARE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"MODE")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"S"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"SHARE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"ROW")," ",(0,l.kt)("inlineCode",{parentName:"td"},"EXCLUSIVE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"MODE")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"SSX"),(0,l.kt)("td",{parentName:"tr",align:"left"},"Y"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"EXCLUSIVE")," ",(0,l.kt)("inlineCode",{parentName:"td"},"MODE")),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"X"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N"),(0,l.kt)("td",{parentName:"tr",align:"left"},"N")))),(0,l.kt)("h5",{id:"\u67e5\u770b\u9501\u8868\u8fdb\u7a0b"},"\u67e5\u770b\u9501\u8868\u8fdb\u7a0b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"select * from v$session t1, v$locked_object t2 where t1.sid = t2.SESSION_ID; \n")),(0,l.kt)("h4",{id:"merge-into"},"MERGE INTO"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"MERGE INTO schema. table alias\nUSING { schema. table | views | query} alias\nON {(condition) }\nWHEN MATCHED THEN\n  UPDATE SET {clause}\nWHEN NOT MATCHED THEN\n  INSERT VALUES {clause};\n\n")),(0,l.kt)("p",null,"INTO \u5b50\u53e5\n\u7528\u4e8e\u6307\u5b9a\u4f60\u6240update\u6216\u8005Insert\u76ee\u7684\u8868\u3002\nUSING \u5b50\u53e5\n\u7528\u4e8e\u6307\u5b9a\u4f60\u8981update\u6216\u8005Insert\u7684\u8bb0\u5f55\u7684\u6765\u6e90\uff0c\u5b83\u53ef\u80fd\u662f\u4e00\u4e2a\u8868\uff0c\u89c6\u56fe\uff0c\u5b50\u67e5\u8be2\u3002\nON Clause\n\u7528\u4e8e\u76ee\u7684\u8868\u548c\u6e90\u8868\uff08\u89c6\u56fe\uff0c\u5b50\u67e5\u8be2\uff09\u7684\u5173\u8054\uff0c\u5982\u679c\u5339\u914d\uff08\u6216\u5b58\u5728\uff09\uff0c\u5219\u66f4\u65b0\uff0c\u5426\u5219\u63d2\u5165\u3002\nmerge_update_clause\n\u7528\u4e8e\u5199update\u8bed\u53e5\nmerge_insert_clause\n\u7528\u4e8e\u5199insert\u8bed\u53e5"),(0,l.kt)("h4",{id:"whileloopend-loop"},"WHILE...LOOP...END LOOP"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  done    BOOLEAN;              -- Initial value is NULL by default\n  counter NUMBER := 0;\nBEGIN\n  done := FALSE;                -- Assign literal value\n  WHILE done != TRUE            -- Compare to literal value\n    LOOP\n      counter := counter + 1;\n      done := (counter > 500);  -- Assign value of BOOLEAN expression\n    END LOOP;\nEND;\n/\n")),(0,l.kt)("h4",{id:"\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26-"},"\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26 ||"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  x VARCHAR2(4) := 'suit';\n  y VARCHAR2(4) := 'case';\nBEGIN\n  DBMS_OUTPUT.PUT_LINE (x || y);\nEND;\n/\n")),(0,l.kt)("p",null,"\u8f93\u51fa\u7ed3\u679c\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"suitcase\n")),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u8fde\u63a5\u7b26\u4f1a\u65e0\u89c6NULL\uff0c\u5982"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"BEGIN\n  DBMS_OUTPUT.PUT_LINE ('apple' || NULL || NULL || 'sauce');\nEND;\n/\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"applesauce\n")),(0,l.kt)("h4",{id:"\u903b\u8f91\u4e0e\u6216\u975e"},"\u903b\u8f91\u4e0e\u6216\u975e"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"x"),(0,l.kt)("th",{parentName:"tr",align:null},"y"),(0,l.kt)("th",{parentName:"tr",align:null},"x AND y"),(0,l.kt)("th",{parentName:"tr",align:null},"x OR y"),(0,l.kt)("th",{parentName:"tr",align:null},"NOT x"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"TRUE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"FALSE")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL")),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NULL"))))),(0,l.kt)("h4",{id:"\u903b\u8f91\u8fd0\u7b97\u7b26"},"\u903b\u8f91\u8fd0\u7b97\u7b26"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Operator"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Meaning"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"=")),(0,l.kt)("td",{parentName:"tr",align:"left"},"equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<>"),", ",(0,l.kt)("inlineCode",{parentName:"td"},"!="),", ",(0,l.kt)("inlineCode",{parentName:"td"},"~="),", ",(0,l.kt)("inlineCode",{parentName:"td"}," ^=")),(0,l.kt)("td",{parentName:"tr",align:"left"},"not equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<")),(0,l.kt)("td",{parentName:"tr",align:"left"},"less than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">")),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"<=")),(0,l.kt)("td",{parentName:"tr",align:"left"},"less than or equal to")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},">=")),(0,l.kt)("td",{parentName:"tr",align:"left"},"greater than or equal to")))),(0,l.kt)("p",null,"\u51e0\u4e2a\u5751\uff1a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"TRUE"),"\u662f\u5927\u4e8e",(0,l.kt)("inlineCode",{parentName:"p"},"FALSE"),"\u7684"),(0,l.kt)("p",null,"\u5b57\u7b26\u4e32\u6bd4\u7684\u662f\u4e8c\u8fdb\u5236"),(0,l.kt)("p",null,"\u65e5\u671f\uff0c\u8d8a\u5f80\u540e\u8d8a\u5927"),(0,l.kt)("h4",{id:"like"},"LIKE"),(0,l.kt)("p",null,"\u4e0b\u5212\u7ebf",(0,l.kt)("inlineCode",{parentName:"p"},"_"),"\u5339\u914d\u4e00\u4e2a\u5b57\u7b26"),(0,l.kt)("p",null,"\u767e\u5206\u53f7",(0,l.kt)("inlineCode",{parentName:"p"},"%"),"\u5339\u914d0\u6216\u591a\u4e2a\u5b57\u7b26"),(0,l.kt)("h4",{id:"between"},"BETWEEN"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"BEGIN\n  print_boolean ('2 BETWEEN 1 AND 3', 2 BETWEEN 1 AND 3);\n  print_boolean ('2 BETWEEN 2 AND 3', 2 BETWEEN 2 AND 3);\n  print_boolean ('2 BETWEEN 1 AND 2', 2 BETWEEN 1 AND 2);\n  print_boolean ('2 BETWEEN 3 AND 4', 2 BETWEEN 3 AND 4);\nEND;\n/\n")),(0,l.kt)("p",null,"\u7ed3\u679c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"2 BETWEEN 1 AND 3 = TRUE\n2 BETWEEN 2 AND 3 = TRUE\n2 BETWEEN 1 AND 2 = TRUE\n2 BETWEEN 3 AND 4 = FALSE\n")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Data Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Size in PL/SQL"),(0,l.kt)("th",{parentName:"tr",align:null},"Maximum Size in SQL"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CHAR")),(0,l.kt)("td",{parentName:"tr",align:null},"32,767 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NCHAR")),(0,l.kt)("td",{parentName:"tr",align:null},"32,767 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"RAW")),(0,l.kt)("td",{parentName:"tr",align:null},"32,767 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"2,000 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"VARCHAR2")),(0,l.kt)("td",{parentName:"tr",align:null},"32,767 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"4,000 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NVARCHAR2")),(0,l.kt)("td",{parentName:"tr",align:null},"32,767 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"4,000 bytes")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LONG")),(0,l.kt)("td",{parentName:"tr",align:null},"32,760 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"2 gigabytes (GB) - 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"LONG")," ",(0,l.kt)("inlineCode",{parentName:"td"},"RAW")),(0,l.kt)("td",{parentName:"tr",align:null},"32,760 bytes"),(0,l.kt)("td",{parentName:"tr",align:null},"2 GB")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"BLOB")),(0,l.kt)("td",{parentName:"tr",align:null},"128 terabytes (TB)"),(0,l.kt)("td",{parentName:"tr",align:null},"(4 GB - 1) * ",(0,l.kt)("inlineCode",{parentName:"td"},"database_block_size"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"CLOB")),(0,l.kt)("td",{parentName:"tr",align:null},"128 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"(4 GB - 1) * ",(0,l.kt)("inlineCode",{parentName:"td"},"database_block_size"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"NCLOB")),(0,l.kt)("td",{parentName:"tr",align:null},"128 TB"),(0,l.kt)("td",{parentName:"tr",align:null},"(4 GB - 1) * ",(0,l.kt)("inlineCode",{parentName:"td"},"database_block_size"))))),(0,l.kt)("p",null,"varchar\u653e\u4e0d\u4e0b\u7684\uff0c\u53ef\u4ee5\u7528clob"),(0,l.kt)("h4",{id:"blank-padding"},"Blank-padding"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  first_name  CHAR(10 CHAR);\n  last_name   VARCHAR2(10 CHAR);\nBEGIN\n  first_name := 'John ';\n  last_name  := 'Chen ';\n \n  DBMS_OUTPUT.PUT_LINE('*' || first_name || '*');\n  DBMS_OUTPUT.PUT_LINE('*' || last_name || '*');\nEND;\n/\n")),(0,l.kt)("p",null,"\u8f93\u51fa"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"*John      *\n*Chen *\n")),(0,l.kt)("p",null,"VARCHAR2 \u4e0d\u4f1a\u81ea\u52a8\u8865\u9f50\u7a7a\u683c\uff0cCHAR\u4f1a\u7ed9\u5b57\u7b26\u4e32\u672b\u5c3e\u8865\u9f50\u7a7a\u683c\u3002"),(0,l.kt)("h4",{id:"\u6ce8\u91ca"},"\u6ce8\u91ca"),(0,l.kt)("p",null,"\u5355\u884c\u6ce8\u91ca"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"-- Begin processing\n")),(0,l.kt)("p",null,"\u591a\u884c\u6ce8\u91ca"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"/*\n  IF 2 + 2 = 4 THEN\n    some_condition := TRUE;\n  /* We expect this THEN to always be performed */\n  END IF;\n*/\n")),(0,l.kt)("h4",{id:"table-array-\u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578btype"},"Table, Array, \u7528\u6237\u81ea\u5b9a\u4e49\u7c7b\u578bTYPE"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"DECLARE\n  -- Associative array indexed by string:\n  \n  TYPE population IS TABLE OF NUMBER  -- Associative array type\n    INDEX BY VARCHAR2(64);            --  indexed by string\n  \n  city_population  population;        -- Associative array variable\n  i  VARCHAR2(64);                    -- Scalar variable\n  \nBEGIN\n  -- Add elements (key-value pairs) to associative array:\n \n  city_population('Smallville')  := 2000;\n  city_population('Midland')     := 750000;\n  city_population('Megalopolis') := 1000000;\n \n  -- Change value associated with key 'Smallville':\n \n  city_population('Smallville') := 2001;\n \n  -- Print associative array:\n \n  i := city_population.FIRST;  -- Get first element of array\n \n  WHILE i IS NOT NULL LOOP\n    DBMS_Output.PUT_LINE\n      ('Population of ' || i || ' is ' || city_population(i));\n    i := city_population.NEXT(i);  -- Get next element of array\n  END LOOP;\nEND;\n/\n")),(0,l.kt)("h3",{id:"sql\u7ec3\u4e60"},"SQL\u7ec3\u4e60"),(0,l.kt)("p",null,"\u88681: Person"),(0,l.kt)("p",null,"+-------------+---------+\n| \u5217\u540d         | \u7c7b\u578b     |\n+-------------+---------+\n| PersonId    | int     |\n| FirstName   | varchar |\n| LastName    | varchar |\n+-------------+---------+\nPersonId \u662f\u4e0a\u8868\u4e3b\u952e"),(0,l.kt)("p",null,"\u88682: Address"),(0,l.kt)("p",null,"+-------------+---------+\n| \u5217\u540d         | \u7c7b\u578b    |\n+-------------+---------+\n| AddressId   | int     |\n| PersonId    | int     |\n| City        | varchar |\n| State       | varchar |\n+-------------+---------+\nAddressId \u662f\u4e0a\u8868\u4e3b\u952e"),(0,l.kt)("p",null,"\u7f16\u5199\u4e00\u4e2a SQL \u67e5\u8be2\uff0c\u6ee1\u8db3\u6761\u4ef6\uff1a\u65e0\u8bba person \u662f\u5426\u6709\u5730\u5740\u4fe1\u606f\uff0c\u90fd\u9700\u8981\u57fa\u4e8e\u4e0a\u8ff0\u4e24\u8868\u63d0\u4f9b person \u7684\u4ee5\u4e0b\u4fe1\u606f"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre"},"FirstName, LastName, City, State\n")),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://leetcode-cn.com/problems/combine-two-tables"},"https://leetcode-cn.com/problems/combine-two-tables")),(0,l.kt)("p",null,"\u6807\u51c6\u89e3\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-plsql"},"select FirstName, LastName, City, State\nfrom Person left join Address\non Person.PersonId = Address.PersonId\n")),(0,l.kt)("p",null,"\u5de6\u5916\u8fde\u63a5\uff0c\u5982\u679c\u53f3\u8868\u6ca1\u6709\u6570\u636e\uff0c\u5c31\u4e3a\u7a7a\u3002"))}m.isMDXComponent=!0}}]);