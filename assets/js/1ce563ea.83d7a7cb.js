"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[3982],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function l(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){l(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,r,l=function(t,e){if(null==t)return{};var n,r,l={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(l[n]=t[n]);return l}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(l[n]=t[n])}return l}var p=r.createContext({}),o=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},c=function(t){var e=o(t.components);return r.createElement(p.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},f=r.forwardRef((function(t,e){var n=t.components,l=t.mdxType,a=t.originalType,p=t.parentName,c=u(t,["components","mdxType","originalType","parentName"]),s=o(n),f=l,m=s["".concat(p,".").concat(f)]||s[f]||d[f]||a;return n?r.createElement(m,i(i({ref:e},c),{},{components:n})):r.createElement(m,i({ref:e},c))}));function m(t,e){var n=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var a=n.length,i=new Array(a);i[0]=f;var u={};for(var p in e)hasOwnProperty.call(e,p)&&(u[p]=e[p]);u.originalType=t,u[s]="string"==typeof t?t:l,i[1]=u;for(var o=2;o<a;o++)i[o]=n[o];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},99387:function(t,e,n){n.r(e),n.d(e,{assets:function(){return p},contentTitle:function(){return i},default:function(){return s},frontMatter:function(){return a},metadata:function(){return u},toc:function(){return o}});var r=n(83117),l=(n(67294),n(3905));const a={},i=void 0,u={unversionedId:"flutter/flutter",id:"flutter/flutter",title:"flutter",description:"2022/12/07",source:"@site/docs/flutter/flutter.md",sourceDirName:"flutter",slug:"/flutter/",permalink:"/docs/flutter/",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/flutter/flutter.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Principles of Economics",permalink:"/docs/finance/principles_of_economics"},next:{title:"git",permalink:"/docs/git/"}},p={},o=[{value:"Flutter \u5b89\u88c5",id:"flutter-\u5b89\u88c5",level:4},{value:"Flutter\u662f\u5565\uff1f",id:"flutter\u662f\u5565",level:4},{value:"Dart \u662f\u5565?",id:"dart-\u662f\u5565",level:4},{value:"Flutter \u7b80\u4ecb",id:"flutter-\u7b80\u4ecb",level:4},{value:"Flutter vs React Native vs Ionic",id:"flutter-vs-react-native-vs-ionic",level:4},{value:"Dependency",id:"dependency",level:4},{value:"Sound null safety",id:"sound-null-safety",level:4},{value:"\u9879\u76ee\u6587\u4ef6\u5939",id:"\u9879\u76ee\u6587\u4ef6\u5939",level:4},{value:"\u7279\u6b8a\u6587\u4ef6",id:"\u7279\u6b8a\u6587\u4ef6",level:4},{value:"Dart",id:"dart",level:4}],c={toc:o};function s(t){let{components:e,...a}=t;return(0,l.kt)("wrapper",(0,r.Z)({},c,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"2022/12/07"),(0,l.kt)("h4",{id:"flutter-\u5b89\u88c5"},"Flutter \u5b89\u88c5"),(0,l.kt)("p",null,"\u5982\u679c\u662fmac\u7cfb\u7edf\u7684\u8bdd\uff0c\u8981\u5148\u88c5\u4e2axcode"),(0,l.kt)("p",null,"\u7136\u540e\u6839\u636e"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dart.dev/get-dart"},"Get the Dart SDK | Dart")),(0,l.kt)("p",null,"\u5b89\u88c5dart"),(0,l.kt)("p",null,"\u6559\u7a0b\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://learning.oreilly.com/videos/learn-flutter-and/9781789951998/9781789951998-video1_2/"},"What Is Flutter? | Learn Flutter and Dart to Build iOS and Android Apps (2022) (oreilly.com)")),(0,l.kt)("h4",{id:"flutter\u662f\u5565"},"Flutter\u662f\u5565\uff1f"),(0,l.kt)("p",null,"Flutter\u5c31\u662f\u4e00\u79cd\u5de5\u5177\uff0c\u4e00\u79cd\u80fd\u591f\u7528\u540c\u4e00\u4efd\u4ee3\u7801\u6784\u5efa\u4e0d\u540c\u73af\u5883\u7684\u539f\u751fApp\u7684\u5de5\u5177\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209195008679",src:n(73004).Z,width:"1788",height:"902"})),(0,l.kt)("h4",{id:"dart-\u662f\u5565"},"Dart \u662f\u5565?"),(0,l.kt)("p",null,"404\u5f00\u53d1\uff0c\u4e13\u95e8\u7528\u6765\u5f00\u53d1\u524d\u7aefUI\u7684\u8bed\u8a00"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209195116375",src:n(49461).Z,width:"1394",height:"834"})),(0,l.kt)("h4",{id:"flutter-\u7b80\u4ecb"},"Flutter \u7b80\u4ecb"),(0,l.kt)("p",null,"Flutter\u662f\u57fa\u4e8eDart\u7f16\u5199\u7684\u4e00\u4e2a\u6846\u67b6\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209195233540",src:n(23209).Z,width:"1620",height:"676"})),(0,l.kt)("p",null,"\u7ec4\u4ef6\u662f\u6811\u72b6\u7ed3\u6784\u7684\uff08\u76ee\u524d\u770b\u6765\u597d\u50cf\u548cHtml\u6811\u6709\u70b9\u50cf\uff09"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209195431265",src:n(32999).Z,width:"1694",height:"834"})),(0,l.kt)("p",null,"\u540c\u65f6\uff0cFlutter\u662f\u5b8c\u5168\u7528code\u63a7\u5236\u7ec4\u4ef6\u7684\uff0c\u6ca1\u6709DnD\uff0c\u6ca1\u6709UI editor\u3002Flutter\u7684sdk\u4f1a\u628adart code\u7f16\u8bd1\u4e3a\u5e73\u53f0\u7684Native code\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209195929742",src:n(93362).Z,width:"2710",height:"1556"})),(0,l.kt)("p",null,"\u5e76\u4e14\uff0c\u8fd9\u4e2a\u7f16\u8bd1\u662f\u4e0d\u4f7f\u7528Platform Primitives\u7684\uff0c\u4e5f\u5c31\u662fQt\u3001ReactNative\u4f7f\u7528\u7684\u8de8\u5e73\u53f0\u65b9\u5f0f\uff0c\u800c\u662f\u76f4\u63a5\u63a7\u5236\u7ed8\u56fe\u3002\u8fd9\u6837\u53ef\u4ee5\u6700\u5927\u9650\u5ea6\u4fdd\u8bc1\u5404\u4e2a\u5e73\u53f0\u4e0a\u7684ui\u662f\u4e00\u81f4\u7684\u3002"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209200122963",src:n(8206).Z,width:"2864",height:"1584"})),(0,l.kt)("h4",{id:"flutter-vs-react-native-vs-ionic"},"Flutter vs React Native vs Ionic"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221209233646510",src:n(66271).Z,width:"1750",height:"1034"})),(0,l.kt)("h4",{id:"dependency"},"Dependency"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221210114702050",src:n(77628).Z,width:"1264",height:"72"})),(0,l.kt)("p",null,"flutter packages get "),(0,l.kt)("p",null,"\u83b7\u53d6pubspec.yaml\u91cc\u7684\u4f9d\u8d56"),(0,l.kt)("h4",{id:"sound-null-safety"},"Sound null safety"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://dart.dev/null-safety"},"Sound null safety | Dart")),(0,l.kt)("p",null,"\u5728Dart 2.12 Flutter 2.0\u4e4b\u540e\u7684\u7248\u672c \u90fd\u652f\u6301\u8fd9\u4e2a\u7279\u6027"),(0,l.kt)("h4",{id:"\u9879\u76ee\u6587\u4ef6\u5939"},"\u9879\u76ee\u6587\u4ef6\u5939"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".idea")," android studio \u7684\u914d\u7f6e\uff0c\u5176\u4ed6jb\u5bb6\u7684ide\u4e5f\u6709"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".vscode")," vscode \u914d\u7f6e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"android")," flutter\u7f16\u8bd1\u540e\uff0c\u4f1a\u628a\u76ee\u6807\u4ee3\u7801\u6ce8\u5165\u5230\u8fd9\u4e2a\u6587\u4ef6\u5939"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"build")," flutter\u7a0b\u5e8f\u7f16\u8bd1\u540e\u7684\u8f93\u51fa\u6587\u4ef6\u5939"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ios")," xcode\u9879\u76ee\uff0c\u548candroid\u4e00\u6837flutter\u7f16\u8bd1\u540e\uff0c\u4f1a\u628a\u76ee\u6807\u4ee3\u7801\u6ce8\u5165\u5230\u8fd9\u4e2a\u6587\u4ef6\u5939"),(0,l.kt)("p",null,"\u4ee5\u4e0a\u90fd\u662fpassive folder\uff0c\u57fa\u672c\u4e0d\u9700\u8981\u6539\u52a8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"lib")," \u4e3b\u8981\u7684\u6539\u52a8\u90fd\u5728\u8fd9\u91cc"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"test")," \u7f16\u5199\u7a0b\u5e8f\u7684\u81ea\u52a8\u5316\u6d4b\u8bd5"),(0,l.kt)("h4",{id:"\u7279\u6b8a\u6587\u4ef6"},"\u7279\u6b8a\u6587\u4ef6"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".metadata")," flutter \u81ea\u52a8\u751f\u6210\u7684\u4e00\u4e9b\u4fe1\u606f\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".package")," flutter \u81ea\u52a8\u751f\u6210\u7684\u4f9d\u8d56\u4fe1\u606f\uff0c\u4e00\u822c\u4e0d\u9700\u8981\u6539\u52a8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"<project_name>.iml")," flutter \u81ea\u52a8\u751f\u6210\u7684\u9879\u76ee\u914d\u7f6e\u4fe1\u606f\uff0c\u4e0d\u9700\u8981\u6539\u52a8"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},".pubspec.yaml")," \u9700\u8981\u6539\u52a8\uff0c\u7ba1\u7406\u9879\u76ee\u7684\u4f9d\u8d56\uff08\u9879\u76ee\u9700\u8981\u4f7f\u7528\u54ea\u4e9b\u7b2c\u4e09\u65b9\u7684\u5305\uff09"),(0,l.kt)("h4",{id:"dart"},"Dart"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221210143922535",src:n(90836).Z,width:"468",height:"198"})),(0,l.kt)("p",null,"constructor \u53ef\u4ee5\u5982\u4e0a\u56fe\u7b80\u5199"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u6bcf\u4e2aWidget, flutter \u90fd\u4f1acall build(context) \u6240\u4ee5build\u662f\u6bcf\u4e2aWidget\u90fd\u5fc5\u987b\u6709\u7684\u3002"),(0,l.kt)("p",null,"Arrow function\u4e5f\u53ef\u4ee5\u7528\uff0c\u4f46\u662f\u548cjs\u4e0d\u540c\u7684\u5730\u65b9\u5728\u4e8eDart\u7684Arrow function\u53ea\u80fd\u6709\u4e00\u884c\uff0c\u540e\u9762\u4e0d\u80fd\u8ddf\u7740\u82b1\u62ec\u53f7\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-dart"},"void main() => runApp(const MyApp());\n")),(0,l.kt)("p",null,"Widget \u5206\u4e3aLayout(invisible)\u548c Visible, \u548cReact\u5f88\u50cf"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20221210180118057",src:n(27251).Z,width:"1834",height:"882"})))}s.isMDXComponent=!0},73004:function(t,e,n){e.Z=n.p+"assets/images/image-20221209195008679-ba0c2e7684d8bd67cebdc62d78e69227.png"},49461:function(t,e,n){e.Z=n.p+"assets/images/image-20221209195116375-d18470de7b620919b9c137a95561a63c.png"},23209:function(t,e,n){e.Z=n.p+"assets/images/image-20221209195233540-fa97480ee34deef9172b9506de854df6.png"},32999:function(t,e,n){e.Z=n.p+"assets/images/image-20221209195431265-c5d779f4f4d602f8402c42626ff0920c.png"},93362:function(t,e,n){e.Z=n.p+"assets/images/image-20221209195929742-7099615980e80fe16bf89b4be72f2c6e.png"},8206:function(t,e,n){e.Z=n.p+"assets/images/image-20221209200122963-107c04e326333f1fa1c3184828e5cffa.png"},66271:function(t,e,n){e.Z=n.p+"assets/images/image-20221209233646510-598d1d0688fcae782ff893bc00a824ce.png"},77628:function(t,e,n){e.Z=n.p+"assets/images/image-20221210114702050-739cf08b45d94a0f6863fe103515584b.png"},90836:function(t,e,n){e.Z=n.p+"assets/images/image-20221210143922535-b90d4352fd1631ff9801837fd8eadc5e.png"},27251:function(t,e,n){e.Z=n.p+"assets/images/image-20221210180118057-f7049253080e0783a2f90650cc5a8712.png"}}]);