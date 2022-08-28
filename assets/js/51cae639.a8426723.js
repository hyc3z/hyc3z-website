"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[84],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),f=u(n),m=i,g=f["".concat(l,".").concat(m)]||f[m]||p[m]||o;return n?r.createElement(g,a(a({ref:t},s),{},{components:n})):r.createElement(g,a({ref:t},s))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:i,a[1]=c;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},2180:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return s},default:function(){return f}});var r=n(7462),i=n(3366),o=(n(7294),n(3905)),a=["components"],c={},l=void 0,u={unversionedId:"git/git",id:"git/git",title:"git",description:"Filter-branch",source:"@site/docs/git/git.md",sourceDirName:"git",slug:"/git/",permalink:"/docs/git/",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/git/git.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"fighting_churn_with_data",permalink:"/docs/data/fighting_churn_with_data"},next:{title:"gitignore",permalink:"/docs/git/gitignore"}},s=[{value:"Filter-branch",id:"filter-branch",children:[{value:"Git rebase -i",id:"git-rebase--i",children:[],level:4}],level:3}],p={toc:s};function f(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h3",{id:"filter-branch"},"Filter-branch"),(0,o.kt)("p",null,"\u5982\u679c\u8981\u6279\u91cf\u66f4\u65b0\u8fc7\u53bb\u7684commit, \u53ef\u4ee5\u7528git filter-branch:"),(0,o.kt)("p",null,"--env-filter\u53ef\u4ee5\u628acommitter\u548cauthor\u7684\u4fe1\u606f\u6539\u6389\uff0c\u800c"),(0,o.kt)("p",null,"--msg-filter\u53ef\u4ee5\u4fee\u6539commit message"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},'#!/bin/bash\n\n\ngit filter-branch -f --env-filter \'\n\nOLD_EMAIL="***@***.com"\n\nCORRECT_NAME="IkrAlonso"\n\nCORRECT_EMAIL="dennismark2021@126.com"\n\nif [ "$GIT_COMMITTER_EMAIL" = "$OLD_EMAIL" ]\n\nthen\n\n\u200b    export GIT_COMMITTER_NAME="$CORRECT_NAME"\n\n\u200b    export GIT_COMMITTER_EMAIL="$CORRECT_EMAIL"\n\nfi\n\nif [ "$GIT_AUTHOR_EMAIL" = "$OLD_EMAIL" ]\n\nthen\n\n\u200b    export GIT_AUTHOR_NAME="$CORRECT_NAME"\n\n\u200b    export GIT_AUTHOR_EMAIL="$CORRECT_EMAIL"\n\nfi\n\n\' --tag-name-filter cat \\\n\n--msg-filter \'sed "s/Signed-off-by:.*/private commit/g"\'\n\n\n')),(0,o.kt)("h4",{id:"git-rebase--i"},"Git rebase -i"),(0,o.kt)("p",null,"\u8fd9\u4e5f\u662f\u4e00\u4e2a\u5f88\u6709\u7528\u7684\u5de5\u5177\uff0c\u53ef\u4ee5squash\u8fc7\u53bb\u7684commits. \u6709\u4e9b\u65f6\u5019\uff0c\u8fd9\u5bf9\u4fdd\u62a4\u9690\u79c1\u4e5f\u5f88\u6709\u7528\uff0c\u56e0\u4e3a\u5220\u6389\u7684\u4ee3\u7801\u5728git history\u91cc\u4e5f\u662f\u6709\u8bb0\u5f55\u7684\uff0c\u6709\u4e9b\u65f6\u5019test\u7684\u65f6\u5019\u5077\u61d2\u5c31\u5c06\u4e00\u4e9bcredential\u5199\u5728\u4ee3\u7801\u91cc\u4e86\uff0c\u5c31\u53ef\u4ee5\u7528\u8fd9\u79cd\u65b9\u5f0f\u53bbsquash\u6389\u8bb0\u5f55\u3002"),(0,o.kt)("p",null,"\u5f53\u7136\uff0c\u6b63\u7ecf\u7684\u7528\u6cd5\u662f\u96c6\u6210\u5728CI/CD\u91cc\u4e86\uff0c\u76ee\u7684\u662f\u5c06\u82e5\u5e72\u4e2acommit\u5408\u5e76\uff0c\u907f\u514dgit history\u8fc7\u4e8e\u5197\u957f\uff0c\u7ed9\u5f00\u53d1\u5408\u4f5c\u9020\u6210\u56f0\u6270\u3002"),(0,o.kt)("p",null,"\u6bd4\u5982\u6211\u60f3squash\u6389\u6700\u8fd1\u76845\u4e2acommit:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"git rebase -i HEAD~5\n")),(0,o.kt)("p",null,"\u7136\u540egit\u4f1a\u8c03\u7528vi\u7684\u7f16\u8f91\u5668\uff0c\u5c06\u6700\u4e0a\u8fb9\u7684commit\u6539\u4e3apick\uff0c\u5176\u4f59\u7684commit\u4e3asquash\u5c31\u53ef\u4ee5\u4e86\u3002"))}f.isMDXComponent=!0}}]);