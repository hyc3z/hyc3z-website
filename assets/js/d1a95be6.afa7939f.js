"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[8634],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),d=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},c=function(e){var t=d(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",A={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=d(n),p=i,m=s["".concat(u,".").concat(p)]||s[p]||A[p]||a;return n?r.createElement(m,l(l({ref:t},c),{},{components:n})):r.createElement(m,l({ref:t},c))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=p;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:i,l[1]=o;for(var d=2;d<a;d++)l[d]=n[d];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},59780:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return s},frontMatter:function(){return a},metadata:function(){return o},toc:function(){return d}});var r=n(83117),i=(n(67294),n(3905));const a={title:"Churn"},l=void 0,o={unversionedId:"data/fighting_churn_with_data",id:"data/fighting_churn_with_data",title:"Churn",description:"Churn",source:"@site/docs/data/fighting_churn_with_data.md",sourceDirName:"data",slug:"/data/fighting_churn_with_data",permalink:"/docs/data/fighting_churn_with_data",draft:!1,tags:[],version:"current",frontMatter:{title:"Churn"},sidebar:"tutorialSidebar",previous:{title:"Data Thoughts",permalink:"/docs/data/data_science"},next:{title:"Oracle",permalink:"/docs/database/Oracle"}},u={},d=[{value:"Churn",id:"churn",level:5},{value:"Customer Retention",id:"customer-retention",level:5},{value:"Mental Model",id:"mental-model",level:4},{value:"Segmentation",id:"segmentation",level:5},{value:"Intervention",id:"intervention",level:5},{value:"Predicting doesn&#39;t work well",id:"predicting-doesnt-work-well",level:5},{value:"Price reduction - can&#39;t afford",id:"price-reduction---cant-afford",level:5},{value:"Goal",id:"goal",level:5},{value:"Nonsubscription Churn",id:"nonsubscription-churn",level:5},{value:"Churn rate",id:"churn-rate",level:5},{value:"Net Retention",id:"net-retention",level:5},{value:"Standard churn rate",id:"standard-churn-rate",level:5},{value:"Activity Based",id:"activity-based",level:5},{value:"Time-windowed metrics",id:"time-windowed-metrics",level:5},{value:"Lead time",id:"lead-time",level:5},{value:"Active Periods",id:"active-periods",level:5},{value:"Cohort Analysis",id:"cohort-analysis",level:5},{value:"Behavior Correlation",id:"behavior-correlation",level:5}],c={toc:d};function s(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h5",{id:"churn"},"Churn"),(0,i.kt)("p",null,"\u5ba2\u6237\u505c\u6b62\u4f7f\u7528\u67d0\u4e2a\u670d\u52a1\uff0c\u505c\u6b62\u8ba2\u9605\uff0c\u79f0\u4e3aChurn"),(0,i.kt)("h5",{id:"customer-retention"},"Customer Retention"),(0,i.kt)("p",null,"\u8ba9\u5ba2\u6237\u7ee7\u7eed\u4f7f\u7528\u670d\u52a1\uff0c\u66f4\u65b0\u8ba2\u9605"),(0,i.kt)("h4",{id:"mental-model"},"Mental Model"),(0,i.kt)("h5",{id:"segmentation"},"Segmentation"),(0,i.kt)("p",null,"\u7ed9\u987e\u5ba2\u5212\u5206\uff0c\u6bd4\u5982\u7279\u70b9"),(0,i.kt)("h5",{id:"intervention"},"Intervention"),(0,i.kt)("p",null,"\u4ecb\u5165\uff0c\u6839\u636e\u6570\u636e\u6765\u8fdb\u884c\u4ecb\u5165\uff0c\u6bd4\u5982\u53d1\u90ae\u4ef6\uff0c\u7535\u8bdd\u8f70\u70b8\uff0c\u57f9\u8bad\u7b49"),(0,i.kt)("p",null,"1\u3001\u63d0\u5347\u4ea7\u54c1\u8d28\u91cf"),(0,i.kt)("p",null,"2\u3001\u5ba3\u4f20\u6d3b\u52a8"),(0,i.kt)("p",null,"3\u3001\u548c\u987e\u5ba2\u4e00\u5bf9\u4e00\u4ea4\u6d41"),(0,i.kt)("p",null,"4\u3001\u5408\u7406\u7684\u4ef7\u683c"),(0,i.kt)("p",null,"5\u3001\u5bfb\u627e\u66f4\u597d\u7684\u987e\u5ba2"),(0,i.kt)("h5",{id:"predicting-doesnt-work-well"},"Predicting doesn't work well"),(0,i.kt)("p",null,"\u4e3a\u5565\u673a\u5668\u5b66\u4e60\u9884\u6d4bChurn\u4e0d\u662f\u5f88\u594f\u6548\u5462\uff1f\u56e0\u4e3a\u987e\u5ba2\u8dd1\u4e86\uff0c\u8ddf\u628a\u90ae\u4ef6\u5206\u7c7b\u662f\u5b8c\u5168\u4e24\u7801\u4e8b\u3002\u5982\u679c\u4f60\u505a\u4e86\u4e00\u4e2a\u6a21\u578b\uff0c\u628a\u90ae\u4ef6\u5206\u6210\u5783\u573e\u90ae\u4ef6\u548c\u6b63\u5e38\u90ae\u4ef6\uff0c\u90a3\u4e48\u4f60\u53ea\u9700\u8981\u628a\u5783\u573e\u90ae\u4ef6\u5c4f\u853d\u6389\u5c31\u597d\u4e86\u3002"),(0,i.kt)("p",null,"\u4f46\u662f\u4f60\u5c31\u7b97\u9884\u6d4b\u5230\u5ba2\u6237\u53ef\u80fd\u4f1a\u505c\u6b62\u4f7f\u7528\u4f60\u7684\u4ea7\u54c1\uff0c\u4f60\u53c8\u80fd\u600e\u6837\uff1f\u7535\u8bdd\u8f70\u70b8\uff0c\u8fd8\u662f\u90ae\u4ef6\uff1f\u8fd9\u79cd\u65b9\u5f0f\u53ea\u9002\u5408\u8fd8\u4e0d\u4e86\u89e3\u4f60\u4ea7\u54c1\u7279\u6027\u7684\u7528\u6237\uff0c\u4ed6\u4eec\u6709\u53ef\u80fd\u5bf9\u65b0\u7279\u6027\u611f\u5174\u8da3\u3002"),(0,i.kt)("p",null,"\u5916\u90e8\u6761\u4ef6\u7b49\uff0c\u9884\u6d4bChurn\u5f88\u56f0\u96be"),(0,i.kt)("h5",{id:"price-reduction---cant-afford"},"Price reduction - can't afford"),(0,i.kt)("p",null,"\u964d\u4ef7\u603b\u662f\u80fd\u964d\u4f4eChurn\uff0c\u4f46\u5374\u8d1f\u62c5\u4e0d\u8d77"),(0,i.kt)("h5",{id:"goal"},"Goal"),(0,i.kt)("p",null,"The data person\u2019s goal is to make business people more effective at churn-reducing interventions"),(0,i.kt)("p",null,"The main deliverable to the business from the data analysis project is a set of customer metrics."),(0,i.kt)("h5",{id:"nonsubscription-churn"},"Nonsubscription Churn"),(0,i.kt)("p",null,"Inactivity "),(0,i.kt)("p",null,"\u4e00\u6bb5\u65f6\u95f4\u4e0d\u4f7f\u7528\u4ea7\u54c1\u4e86"),(0,i.kt)("p",null,"Free trial conversion"),(0,i.kt)("p",null,"\u8bd5\u7528\u4ea7\u54c1\u7684\u5ba2\u6237\u8d2d\u4e70\u6b63\u5f0f\u7248\u7684\u6982\u7387"),(0,i.kt)("p",null,"Upsell/down sell"),(0,i.kt)("p",null,"\u9500\u552e\u989d\u589e\u957f\u6216\u8005\u4e0b\u964d"),(0,i.kt)("h5",{id:"churn-rate"},"Churn rate"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(57638).Z,width:"600",height:"48"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(2278).Z,width:"782",height:"413"})),(0,i.kt)("h5",{id:"net-retention"},"Net Retention"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(90347).Z,width:"831",height:"485"})),(0,i.kt)("p",null,"Net retention\u7b97\u7684\u662f\u603b\u6536\u5165\u7684\u5bf9\u6bd4\uff0c\u8fd9\u8fb95\u4e2a\u4e00\u6708\u662f89.95\uff0c\u4e8c\u6708\u6709\u4e2a\u987e\u5ba2\u8dd1\u4e86\uff0c\u6709\u4e2a\u4eceStandard\u5347\u7ea7\u5230Premium\uff0c\u539f\u67655\u4e2a\u987e\u5ba2\u603b\u8425\u6536\u662f79.96"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(43861).Z,width:"775",height:"488"})),(0,i.kt)("h5",{id:"standard-churn-rate"},"Standard churn rate"),(0,i.kt)("p",null,"Outerjoin, \u7136\u540e\u770b\u53f3\u8fb9\u54ea\u4e9b\u662fNull\u5c31\u53ef\u4ee5\u5224\u65ad\u54ea\u4e9b\u8dd1\u8def\u4e86"),(0,i.kt)("h5",{id:"activity-based"},"Activity Based"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(91115).Z,width:"692",height:"233"})),(0,i.kt)("p",null,"\u8bbe\u7f6e\u4e00\u4e2aTimeout\uff0c\u8d85\u8fc7\u8fd9\u4e2aLimit\u7684\u7edd\u5927\u591a\u6570\u987e\u5ba2\u90fd\u4e0d\u4f1a\u518d\u56de\u6765\u4e86\u3002"),(0,i.kt)("h5",{id:"time-windowed-metrics"},"Time-windowed metrics"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(1504).Z,width:"737",height:"504"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(53994).Z,width:"755",height:"348"})),(0,i.kt)("h5",{id:"lead-time"},"Lead time"),(0,i.kt)("p",null,"\u6bd4\u5982\u4e0b\u8f7d\u670d\u52a1\uff0c\u5ba2\u6237\u5728\u51b3\u5b9a\u8981\u505c\u6b62\u4f7f\u7528\u8fd9\u4e2a\u4ea7\u54c1\u4e4b\u524d\uff0c\u4e0d\u4f1a\u518d\u4e0a\u4f20\uff0c\u800c\u662f\u5927\u91cf\u4e0b\u8f7d\u6587\u4ef6\u3002"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(23885).Z,width:"737",height:"371"})),(0,i.kt)("h5",{id:"active-periods"},"Active Periods"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(7474).Z,width:"844",height:"392"})),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(49058).Z,width:"827",height:"340"})),(0,i.kt)("h5",{id:"cohort-analysis"},"Cohort Analysis"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(36843).Z,width:"830",height:"427"})),(0,i.kt)("p",null,"\u4e00\u4e2a\u4ea7\u54c1\uff0c\u4f7f\u7528\u8d8a\u9891\u7e41\u8d8a\u4e0d\u592a\u5bb9\u6613Churn\u3002\u56e0\u6b64\u53ef\u4ee5\u6839\u636e\u4f7f\u7528\u9891\u5ea6\u8fdb\u884c\u5206\u7ec4\uff0c\u8ba1\u7b97\u6bcf\u4e2a\u7ec4\u7684Churn rate"),(0,i.kt)("h5",{id:"behavior-correlation"},"Behavior Correlation"),(0,i.kt)("p",null,(0,i.kt)("img",{alt:"img",src:n(71449).Z,width:"779",height:"633"})))}s.isMDXComponent=!0},57638:function(e,t){t.Z="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAlgAAAAwCAIAAABCPJOVAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAACVHSURBVHhe7Z13XFNX/8dvCGEjRPYygIBh742iKLJEQHHWhdrWVVerrbXVDrV1PI/rqVqtA/CHAwe4mIWAArIxYe+wRzAgYYSM+7v35gJBofV5+jwWX573PyQn595zzk2433vO93s+XwIMwxAAAAAAAB8qEvhfAAAAAAA+SIAhBAAAAMAHDTCEAAAAAPigAYZwkgDzu6oLy9oG0dfcrio6o4kDnLcAAADwDgDBMpOEwaqIT5dUr0//wXMKXH9nw2f0tdd+8FTBP3wdmN9TnZ2UlEjvN7QyVib1tVRxtL383GRZXXrWVAUJmF1w67eY51Xl9Ey1LXEnQ/Wk8OMmHby2jKjfHmRXlZbzV16MXGE09rnsT4aJ1wIAAIC/BribTBK47LZeQyMtBeQl71VHi6LmVBnRB2/Abcu+tNVvP005YN/3X6wNDQoKWrn582Dl2I89dj3nSRGQGgSy3fI9O0I0Wa1WztaaJNFhkxKSpvvarze69Faqultojf0t/vkwAQAA4L8CMISTA5jdUM6zoKgg3wfc01zVRlZXHteAcVtppz5Zd5f87T++nEeRGTEHBDXX0GBrL7vpIxZiqLkkp5viYUMhTXKbwe+qLqlUd3KYLocXoLz1MP8S8ADj+u7Np9I6+XgBAAD4IAGGcHIgNguEuzuZigbTVN40hAIOPXz35msdfjt2+OpJ4oUiCCRNo1lGGrL4W3ioIuNBnY6XA2XSroriwC9LnzOmeDkYy47Ytrcf5l/kFSPuVhxX11B1bCMAAOADAxjCv5eutANeMxAsl5yuyz8daoe8NF1wuKTj0mpb6owZS88x+vCKCLyqez9fLIDs1qzz0HpjRkRQnbUxYNpw8VBzcSFTxc3dVBEvmLQM1GWn9Dm7mCiPjOjfGOZfo7+c9rDdzttG579zOgAA8L4CDOHfi4rnDykVFeWMOzsNDHbeYZRXVLx4tN9FdtnF3AqE21ss5fGKkICdGX0hv1fCNSTQcgpeJg5BSkZ6+NuEW/OTiojONsZQxcPzp47u/Gjl6Wz2aFAUzG/NuHxoy8KQo7RW7nBZS9yumabr7zTi1QScsphjm1euPPG0E0Ze3zu4wmve7pg6HgxzkHMe+mzpx6dzumCI25Zz89SxQ7vC9kdXidlsEXBv3e/hp3+7GXVs/3dxdTy8FIL4HfTYXw4evnQnOvzapfu/syzcLVSHjdHbD/NtRoEg4FTFnz74j4jYW+cO/eNeWQ/6CdzJiL8f/vOxqyy96UP0h/EMZCQiYE5l3OkfD/8WHRtx5sS90tHIXbin7OH5A2sXbblTzUPPmXj51LdhIV/H1g1A/JaMy/84tOuTz2NrRseIIuirS7l8+nJ01Ikvv3tSz0PONeFVHb+fAADgnQAM4WRA0NNU36atpoz688SiZsbQU/o0qwtScvV30P2zGQzMKsvIkZxpI8zPgOZs2rlnq8/g1Th6rxD/tLfwZjxp0fZlNnU3ziQxRaUw60ViEnfk5HBn5p1q8w3LTUov36TlJEUzbXYe+DzURl0G6sqNpuus+iSUWnP1UX5txn2apPe2vV9smdNy5n5xP3YqHLir4MK+HyutNmxYusCZFHPpab2oJV5N7N5PD1ba7fz649AlCwy6cuopFjM0RtaB33aYbzMKlAFGxN4zXV7r1gSFrpg/taKShfoDCWqWvl6mCkNCyrwlK0KCfC1VRKPmMCL3HEwzWfflxiVBq0PNn35zIL4JM0j8zpS7+Uahq+cq/h6VUVWTFN1gunb76jmE5PDktMSI3KnLdmwP1v49PAMfI4qAXXD5sx9rHDesW7LAUTrmVno9d8KrirQ+bj8BAMA7ARjCyQC/u7NDkaqH3o7FombGIGTVFLRAkL7DDLU/NBAIgu7SvGyBcn/tkNFcqgJhqPlFdpmigqyk6LhXxY+rTILt5JmlOQNThxvis/JoSQKr2dbqaCW4I/1Wo908Q9Q6ETtTHrPsPQ3IpgGb1riq1j8rMvS0VejvbBrUENBTXzoutlORhF9WF9bJIy2gpxIxUHf38JZIjbXLrRQEDakxJW4r3fSRluCu7FP79ld7frXRiYwOltvfKzRY6D5jJPjlbYf5FqPAEDbRk0vbGCWNAxCR7BS2L2g6bnKHmHkpjericTfIqI/v+anHb8M8XXQgBGk5xe7ERAYLsYS8mpQa4wCqFLvtJUm1mZYuv8BLj9hVU1gpq1BWR/TzNVXgMktK+RS14QVemFd3f/+WGL21QZYKvMbUuGy3wJn6rya4qm5akoQJ+wkAAP73AEP4NwIPMc77oh5C6wWHMzsur7FFXlJ99mdU3vrEDXlpsSuuc2SBjNNaXTsAkQwMNKXxkgkRTaqU7YJmGyFTTF5t6r1sooO5AR6NIjPNL9CRLECdiCRHVzMltAzuyEvM5FHsbSlYGAphqkPYYktZXjuzbkDQQbCfaYkfKxySs1/srkboZdIL2Ow6sjN2W4ebMqPjBaYGqiP3brg19eyJZ4ablrgpdhWEX6SZ7D4QjNzZBeycyMNXWPM3hzqRiWi9gUZGnryHte5oRM/bDvMtRoEhoe8UbC9RevbkNbr4YiPMYxY9Y2r7uBsPx6rCQ+UPT9/u8109D71oCMIuZvFLHrOzGzmMoO652IkMt5c/bxTQm5U97NUI2NMGr49vM2eWljTMzr1zvd7ayVg0s4Tg5uSz51INl69yU2IV3DxJm/7DgUAD0kRXFWWCfgIAgHcBMIR/IwQpy83xFRUVZQ/3m5tviMxBXpYnH3aXDT71rAR5XXzSb3RaJCmjoCgBScrKjTgCx8BtK67CHV39VRkJdRK2vv6WyPwEHqrOiCmUcHI3HfbCSSkpyREwJyLk5GiBBUzC3ZXPs3vFZmaS8vLSBKivpboRItr5OGkP94Ior6OnIonMppB5GMXv00AL9FbeX50an0V0m+8wMg/rr066F9cz3UapKuLk3UbHncc3u2oi81G4/fnNuxXkOUEuoiAYuL/46UO2hb2JmC/wbYf5NqPAIBkv+uoTO+j5mW+u5rAFeCHEa3uRXUi0FGu6vyI1oUR8FKhJ5qq7zNBBOiJJ1lSRhtEpIJfss8TPCLGe2NOGStCngcYkqK/87pXbbCsfB22s0zCvOiUyrptqI1cbcf5Go92+4xudUbs+0VXFGL+fAADgXfCnhpDXU5Vx59yhA8eu3omNjb1x4cT5hwWtrWW5VRz0UwG7IPr4gV2fLPWyGBOh8E6BuxjxsdePhXmiIZeBX11COxodfuyrLV+eiEqr65v8D9joPVdRk4zcK2Fed2eLpr6uEjZhEkdWz9JBFeIP9HNH3VAjwJ1pZ6NqsA/goZqClA7K0k99sZkNdn9XmrvEXQca7Ovj49cCbsp7kgUN+9L6qx9ev92ljc3M+IODw84pdCdiB8nb2+31Lfn9FU9T69TnBThiZprXkBVPJy/2c1GV4A4OoQ0IW/ISiiBjSwszj7V7NgdZqYuWTDEHHkvF38tONB2EO3MfJ3eYmBupEPldTGYP1u7bDhPlrUYBERWsVh/5MUCpIurX34d/oTCrOIOOWVCk6Y4u5LLAnRV59RDaGbyz/eW5qQMUL2eD4dmlaApotjTIDl3URZ82OszXh7giYxmqSb1TALn6zjGSwa7AUFPes0Jour2FpcvaHduDrNTwRWmMCa/qeP0EAADvhD80hPzW7PM7/D5/phy4+/u9Yai4x4pNny9XjF3styt3AFvOIpLtluz5Iliz8pXVbAtNsf/3dwlBxdI3KDRkjj4Eqftu2b4R7eiStXsPH14keXNT2BeRjEmu2ilsZxZDBhQN5IrCgy/bO/CombEQNFyC56vwXjwvffn6aOCunGvXmZZG2LrcALMwn6ni7mWFvUPv7w3qi4I9NVkplxNb8CP5rOLcHMjR3xmdlMCd+clFA0oSBtRpCnBrWgStFaslWjwke8+3HgnoxOE1Fj5rMFgx30YOa6GtmFY41dvLTHmwJOZuMXqpOc1lJYMU3wXzjMnYTK09MzoDOSm6P5Kn6mxvgMUBIdOmtFtPO9ApF6GbHl/4Sgqzjm87TIQ/GwXMaSquQY0cJGsQ8NFy/f4COrNXdGhvVVYqm+JgogF1ZtxIbh6O9ZS1oGiI/iFQI53C89+80X1kTs6pys5hm/v7WCiiz3+5iTEsm2BPQ+Q7EzaXZDA1g1a66w4y/u+37G6Y01BWLaR4Bc0zUUJNIL8z81Faq6iN8a7qH/QTAAC8EyY2hPxm2tHt6yJVvv115zw97J6HQSA7hq6aLbZTG8YWygw9bPX+Tvc+Gq9RC0mYOlGH75OIkbb18qWwUo5df/rvheC9YkR8vfl42qh/7n8LPMju6DQ01EbFM4famUx5UdTM6xDJs7Zf3m+cdCGGwRFbOuN30SP/eYpGdBNJlMEdL2jFqsHzHUWzLtSZN22Fn1FPQkyNK+YyRBEO9nEEps7WOlIwp+R+gtDL12hQWk1NqTs3vsfVUxRxOVCflV44ZsETR9hUmFA4beHM6dgPQNhbW1xAtHYxk61Pqzf0t1ZEastqGJlNkVOQwaxgT9n9dJ6HgxYBktCZ4aIurSgnjZ5wsDq9CkYMhZqmElSenKnpjK2yIrzdMFH+bBQDJVGbDz2uG95ZAen6zjIRbatEnzwG1J3MNYeKMxudfFBfHUHderYV1NvPRb90QW9h9Gm65897ffVGJnPYpkPbYHcjKQJikukpGWzbWa76yHRRyGmoKJm2cKmbDONmHmWZK5kgq21kKCEnL4MeK+CUxSfwbN21RP8c413VifsJAADeDcTvvvsOfykO3EO/+MW6X9v8fjq81Xbq6D8tioREVzvH0M4UX77rL7176mKd07btnjpvzmPeFXB3/vVj0cUawds+ddYgDneDgNyF7z7t0Jy5wsfszcXGiegvCt91vt134wrz0U3e/0uEnPZWoYHtbFM1EjTQUd+tSnVynIYalNchyKhZzfantDy+dju9gcViVlcUPkvIaFb2XLZIX1rBxkpPmgCzsn47Umq/45PZOphUqRSJ15CSQG/hWi4Nc1YfvgTEKWpTiXmx8SUVjDq1gFUeFGXJvvzErFqhydJFTtgsDoKbU8/8K90s7OuQGfJjutJf/fDcP8utt+JfN0FKSXYoPymvbZDs5jdLB7NmRPJ0M9WG5CxmX8uLjMap8wNcNbDIF5KWtatSfnx2G7smv0TWNdCNQqiOTaoc1Jy71scAM48YbzFMrN6fjYKkNt2Cm5nCYLVXPovN4oXs2TlfX3QoYcoUxbbMR0VN/Sqey+aIzkdSMXe0Y6U9obe0l6Q+Kjfa8eNq+1FxHzSU5ki4MGTvcjsVEtyde/XHB1LLt4XZqRGRKyBP7MumFdW+Igcs9UavAGnqdCPthvRMJrv1RV7t1NmLXbVE663jX9WJ+wkAAN4N42afgHlVkWsXHi6k7roV9akV/qg+CswdHJKSwf9XhdU3Vq88a3oy4Rv3v+8xFu7P+YfP6ku9yy6i2RvwQghujd3qvTfVZO+9m+tNxQMo/gjsVGsrtzw5u8LgT+MzAQAAAPDeM97SKNyZeT0qX6jk+pGveIT3CATpYSuI1G0uSiqQdrafBpU9Pn/qyE5ccGQEbmtG+KHNi0MOp7SORGp0xu2ycFp/p374fU/ZveObl248kdEOI6/vfL/CLWA3KtIh4FTFoRomK39B4+j4rTnXzxw7+nnY7uiqwdeMd39NXk4HpGRnRRk1xvzmtCvX0zUXHjgcShW3gnBvfVrE4YOno2KjI27GRH3r77L7Ce4WQ4Nurv58KIplrDlET4xnjC6Own01v1/+5bfoiGNfHourH8BLAQAAAPD+M54h5FQ9TWJCEngYwh+CBSwQrW2IJRmQx6adu7cuGLr6qHjY1S/oLXgQT/LbvtyyLiI8CfeCiHY9j5yc35meUG27fDm19vLl5JykeKbzpgP7Qm1UZSF2fnS2xqrtodTSu4+KSjMisyQDNu/d8+mc+hv36a+wUw2Dhm/U4ruw4cGetjpGWvSpb04909t2/+6RFaZKo6OAO7LPfv7pTeKiPdtWBi0O1io6dlvoE+QgCvNBg268zRXYQopv6IqgQF9LPFACZude+OxkpeOqDUsCnKVTLqU3vh7R2HpvLeGPMDqRD4RCAAAAYHIyjiEUttUUdAmhMcJXE4CmDnghoPTXcgznIvYGbntBq1AURUkgDJQ+fkEJdpRnlpQOyIqiIlFTlJeYKbDF8+TB7KxbNTPmGaDbmolDmY+bqJ56GqaBYWvclesTKw0DrBV6Opu4CoK8nJez/ezIJGwvl+QYDRPkJGjgYq/EDKp8bXLsg7gn98KvxA957f/5mzWexkriQ+irunlkR5TCx3sXmSoQERvc09nJ1fcPchqJDBTtPdAbk7SBV313/5eReqHLLacIGp/FZJuvnKn3+lUj2268f3di7p/xnvbWLkoAAAAAvFPeDJYR9hbH/PNhMcFt+TZ/47GBEm/AKbr+fSRDKfjrL+brShN41Q9/Ol5ksmbDAmMs1oMgp0elKEs2ppy+lGGxes9CE+RsMOvZuQMPeIu3bnbRRGwDgaRmbq4jJ9Gc/q+IdKbJmq+WW4iiWmDuoKKBqaZsX1H0kQcM0txPd83VJUFDTXFnD9I0lm+bbyw/Yoz4rMzII3E101Z9e2S1pznV1NLRaXrLhfUnm6zm2uvIjlSDeVU3d2y6JfPJgX3zsQBXuIX2y4WqWVt2uKE9wRioTbhyodR62y6vafjiL6818Z87fpXe/NNGB+GL8OOJyp/t/siC/LohlCRTqKYTQzXWnOhC8lkvkuMzX5SVlZUmnVrssnBfnkBXpiPt1HqXlY8EulLstNN4oTT93GLvhfuyhwu3xguUZNhpp/BCuPjcBpeFP+YNF66MH8DPM3GhdPGFd9ziu+rbf9Lh/0GLb1f45aOS9oq81KSkpNScmo6XAwr6FFHAEgAAeFfAryPsyz7uYWJi/S2tBy8ZC6+VUcYSoq9ENe1XhJcNoW85pZdWU6lbohu46LthhA3RYVTHsOg67BD+S9oPriZLfqFzsA+H6aF9a21ivjmmBaskBof+yxIT1x9oL/nou6Gy8BX25jufdIhXE7bTDviYmCw4mt2Nl8CCHtpBa5ORRjFE1Zy/etKCdRYWDlWGr6CO7YmwLjrMccz5sRapwT/HxF89dvrBi45BvPy/Rm/e8dn4NwEAIKy524L/NgAAwDvizaVRgqyBuQMJ4uN7ql6D30kLj8K9fViICq4yBWH6GnQlvwB3XcnBvv4ReZKm7NSs4V3PEK/q4a+xXSq21vqyEJ87iIfPiHYiqnsHOr6+JX+o5umDSnV8VxzMq8+JL1RdHGyvCg0NjiiPoAntmNA4ufd6q2rbR8NaUMdnk4qPjwuu6NFblpRQqOrkMF0W1xZBGkCTNkCYGhm3q42NDAHbMyc0trcwc/loz/ZAK7UJ4kj/cx+hgv0XqfhXAQAghC/Swn8bAADgHfGmIYQIqvbBiw142Xml3a9rHsLs3Gu/NFiKNq2jISr1Kt4zrZTRlUW4vTKPqbdoubsmK+3yo7FaVq5znFFdZX5nZnqRpLwE1XiagqA1+Q6tU2QdMDEU0pt7t0UyHCYr/CwwZWRMH5Ls7mU1dbD4yd0SkTaxyKsnJDnbmKAb0sUR9nJGhbYwxyd5OAEszG98GnWvBJOiZmXczcRUTIS9pdmpPDTiBmLn3HjSwBPtlRYa+QbNFvka4c7s6LRheRZx/h4fIberilHWhtl6fldVYWlTH9CoBAAAgH+bcQwhRFCftef4fuusCzfpYuJkMJ9dFHn0FxrB0kIHDSXBQlQ0ggNsUelFkcIIxd/PoichotHV32g4RmWorwcynW2lQ8AkNiBHX32itK6aUndhfLeVp0huAxWrLCJ6z3bApJPFwDQbKXNmzhBlCOitpZcRnR3M5BvSynT9Rc1CveVPnzEh9bFKYASZqRqaiIHNflE9AMOcyizGSwIqazI8WH5j2rMWspqcia2+VGFarc1MTHJlCE0LIGtmTuEWJ7Y5hVjIIpNjbUMzCVkFGczSo/IlQx7ub2ZNhyAZg5nBiyYm2N96VD37v4aQ+fjLPTcq0CSAcGvqTxtu1wjGa4TfmhPx05eHUAXWOxEXL8eVsgfbyqvF0vS+I2A+plp78MCJcFQMNur8iYuxBY2dZYXlnHFkRQEAAOCdMb6yDEFKw2reHEpr4rWb6Q1dncyqssJnKRkNSp7rAvUllW1sdaVFISr5Zjs+n4MrjEhzGxIT6a2Q5aplziOSHAQFNU1h3p2EkqqyOlXvVTMNlaV68h9n1PKoS1c6kCXQGzfcQjtzPN9sy7YQUYjNCLzqh0fPl7tu2D5LFzudtJJ8f35CblufiluIm470UFNOcmrao2sX4xoGYQmlqfKvemAtPTUZxNoRiOom9jp9ZcmR1+NrBpQtPN0o8tJa1q7k4t/z29nVzwsk3JbOUu8qepRe1a/pvXouBYuMIU5RIrVlJhU1cVW8g+egEiEE4lR9M+2G5Mz6vlZ6Rq3K/MXOGuICyn8vA9UJv1ZMWxVirULkNaRfzFQIWu04qqojAm7POLr981rfk4eWO1OpZtY2xr33doadbbQNnKM/nIDoXcBty76yZ/VvbL+te9f7O5hTqVRLR1e99l/Xh1xWCF31RrcBAADgXYJ7JgDvG2gUku1BWo8AhnkdT/Zah0U3vB5qBAtqo1ZSrUPCK5BKOMKGmC1fjAlo6n8RvmvnMVrrG0f/Bwj76ZG7Np2kdfDwApTBltSfA6nzv3zSIF6KVObSzy85+rwPf/sXGbdpAAAA+HPGWxoFvAdgCZvUNabKIHMpsQT3YxD5OLltNS2jyV4JambzZontEIX7GYmX4oYMDF9TlP3PeMWIuxXH1TUcXeUWcOjhuzdf6/DbscNXb+zaN4GkaTTLSGM0i+5f4s2mAQAA4K0AhvB941XaARs0k71l6Km6ulOhltQxCe59zzOwnIAYEopmznNIwq7bFyMKR5yCMsYhgZajmnOvimlpLDsPe8zv+1fBUjTYedvojJyeV3Xv54sFkN2adR5vOlcJqrM2Bkz7bxjg8ZoGAACAt2OC7BOASYu0/pxNn3322frZxLxclzNPIw7t3OqjRHuuffjJvRN7PxvrbyPIqWtLMO5m5eakNCi5u1upofPHYfhdjNSk+Bun/5Wv4mGn0/uSpzZNQw5/MIL76tJvXryaynzVxCiqK7q17vNH2l7zjacgh6NBQ6d+OPhLpfYsBz247O7hXRsP56l6mPCyU+JvnP9XnpKHq0ZvG19tuoYcQcB+9uvui3lct62HPrYVU7obhkCUxH2uML818+rpn787Wazl6aiviM3q4Ja43f4Lb08JWmg2fKyAU5V4/kxs5avGjDsJjWrmVGREcCcjIfGNptHaMKcy/vy528Ud7OLfH9UoWlHV8AcAuKfs0dWzR36KFtjPN1MaqEqOjLx29mgywdmNqtiZcfViROS1WK6ZF3WqWKyvoK+OFhmRUlObEnG329jdSJko5JQ9OHXgh1/K1We56sLlMYe3bz2cqTTTawYZ+ejNfuLnAQAAkw98iRTwfiFsfrLTB1cM6Ht+1GNdeOWA6JPX4TWlHgqlmpiYOG8LL+0e6wgUSSK8rm8g7Mg8vS5kUzi9F63Non07Z1TTQNhCuxpXy0r91tox7DYt4UpSw8uSB+ejnrUMwnB39tEFJj7n6NyRRrqe/ehn8pqywXgIX+VHXsl+ieoqjHo0hR1PdpqPPba/8Jdgv29pLFSZIfvKkZhqkTjCeE3Dwl56+KbluGMSvVwhu540Yh/zOpIvR5Z2VIavMQm5VlIddyW5gSeoCA9xDLkYl3A5prSXhwoyhIRXjnpW+S/zfw0Lu/iil4+JP6xBrrawI/3qg0oWUpO65fbzuCtxNS9LH50Pz2jhCSfuJwAAmIyApdH3E5jTyZSjTkP3kMBdjeV9FFzK9U0kdWZ/eer8GisJduLhsO/v1omnzsAkEdSdHKaLRZAOlt88sD9KduXeFRYK6Nl7O5sG9Zf6O6GaBgJ2elyNnZsBGicsMZSS0mTvpEc2C9y0wl1LGhpi5qU0qnvZTR9ZdxWyagpacDF0vGhcXhU/rjIJtpNHdRWmWlBUsB+lSJzdarb16O5SYRM9ubSNUdI4ABHJTmH7gqbjrs43m4Y70o/v+anHb8M8XXR2SZCWU+xOTGSwYAji1aTUGAdQpdhtL0mqzbR0+QVeekRUw1ZWoayO6OdrqsBllpTyKWrD6ShhXt39/Vti9NYGWSrwGlPjst0CZ+q/Sr/VaDfPEO0AsTPlMcve04BsGrBpjZuWJGHCfgIAgEkJMITvF32Mc0tnIJgGHi4pubzaCfUWztuf0XfjE0fTGTNm7oobb7//qC2MO3E2VZRzCkUkieDjaipaSUTpr7p94gea1ppN8zFrB8FtL1JydIPmUrGQFglFh2UrLadgGd451QRbb8vR5I+Y+oG2j7vxqFHltFbXDkAkAwPNP87sKDPNL9CRLGguLmSSHF3NlNAyTJydR7G3pYwG00joOwXbS5SePXmNPhr9M17TaB7d07f7fFfPw5PyC7uYxS95zM5u5DCCuudiJzLcXv68UUBvVvawVyMIukvzsnl9fJs5s7SkYXbunev11k7GePAR3Jx89lyq4fJVbkqsgpsnadN/OBBoQJrqELbYUpaH7j0VdBDsZ4onLJugnwAAYJICDOH7hbzlltsVFRVlj/abq38cWVheUcFIPjxP1v/UM+RlxdOTfiOZs/rb216N3oUldTy3bF2qArET04pYuN4OJokg7WxvoCB6j5Swc65feK7k91EIbuH6q5MepuqOaBoQJOXlZQhCTkttLTTFzsded/Tmj+n+EC3tTUZMI9KojIKiBCQpKyc97s+M21ZcheWulFJSkiPArflJRZCTowUW9gl3Vz7P7jVY6D5DPJckyXjRV5/YQc/PfHMVTVGJ82bT/RWpCSVEMa0i1CRz1V1m6CAdkSRrqkhjaUy4ZJ8lfkbI0HpKn2Z14WKBfeV3r9xmW/k4aGOdhnnVKZFx3VQbudqI8zca7fYd3+iM2nXkSkgToL6W6kaIaOfjNDZh2fj9BAAAkxRgCN9HMFOkpk5GIzB43R1sTWOd10NRhqqfPKgQXwYlkC295mlBAk7foEjJBcslCVm5W6gS+Oy2Li562tKspC7dkQSN0EBl0v0iVXTJcUgkvioqRfNqkWYGuonFgYq09FAzRhzRboVk9SwdVCH+QP+IMKwYcGfa2aiakQ/gprwnWZCrvwNmXPurH16/3aXtYa0rBfEHR5XyiApWq4/8GKBUEfXr72Nl/MSbhjsr8uohE3MjFdFWCri/PDd1gOLlbDA8uxRNAc2WBtmhi8v9VRkJHebrQ1zJREwytwBy9Z1jJMMdHIJF8kbQdHsLS5e1O7YHWamJKyoMNZfkdJC8vd1wAdsRxusnAACYrABD+D6CqsFBFhQN9NsbfNnWq60+5bU7Mdxe+TQmr2Z0KwVSxO3v5UmY2pnjmwh7SrNyeWjWSQl2xv0nzYghHGqrKe8iWbuYifYUDjam3rtXLutgqSfLzrmb1oGfC0uDTHpNEq+3KiuVTXEw0YA6M24kN/OwQoKGS/B8Fd6L56WYmKs4cFfOtetMS6PhvY8iq4yLs8Od+clFA0oSBtRpCnBrWgStFYY5TcU1mH2VNQj4aLl+fwGdied/HrdppB5+fdDT5T5O4flv3ug+4qrkVGXnsM39fSwUUcdnbmIMyybY01AKeRZoLslgagatdNcdZPzfb9ndMKehrFpI8QqaZ6KEmkB+Z+ajtFZRG6IlWfIYeb8/6CcAAJisAEP4PsJlt/UaGmmhS5qo94skipoRAx5oZSmbVETFMYcnUzC/KTcxW2v15wuoosVGzG0m62RGGSpNbLTE1kKldaiW6lhttH5j9rMWaTXI0NaIUPi42Wa+SD9WlANEdqy4K4R5DdWdzDWHijMbnXyGHWZE8qztl/cbJ12IYXDEVgj5XfTIf56iEd0stIZ/f8LBPo7A1NlaRwrTdBV6+RoNSqupKXXnxve4euoSBkqiNh96jKc9QdD1nWUiyjYyTtMEdevZVhCePkXQWxh9mu75815fvZHJHLbp0DbY3Qi5FHAXPSWDbTvLVR+ZLmISBNMWLnWTYdzMoyxzJRNktY0MJeTkZdBjMb1cnq27SCMXGqjPSi8UX4BFmLifAABg0gL2Eb6HwH3tTUIDOxdTNWlosKP+pTLVzXYamnN/BGH/ANl5aag7P+9RQkFVfXVlQXzkY47Hvj1hjhp4PYKckiIr81FeU7+m9zIPHdSNRyBpm7tqVfye08yuziuAnJbO1ezKi0uvGdD0XzJXT2TceC2pl4+nT9/y9UKx3MgQYcoUxbbMR0VN/Sqey+bo4VmNEQgyalaz/Sktj6/dTm9gsZjVFYXPEjKalT2XLdKXVrCxGq5KnKI2lZgXG19SwahTC1jlQVGW7MtPzKoVmixd5ESWhEhq0y24mSkMVnvls9gsXsienfP1RYeO1zRJxdzRjpX2hN7SXpL6qNxox4+r7Uf0b7FQmiPhwpC9y+1USHB37tUfH0gt3xZmp0aECFLyxL5sWlHtK3LAUm9Ub5Y0dbqRdkN6JpPd+iKvdursxa5a+EQYbk498690s7CvQ2aMpl2euJ8AAGDSQoDh11etAAAAAAD4cABLowAAAAD4oAGGEAAAAAAfNMAQAgAAAOCDBhhCAAAAAHzQAEMIAAAAgA8aYAgBAAAA8AEDQf8PolJOuiSP50IAAAAASUVORK5CYII="},2278:function(e,t,n){t.Z=n.p+"assets/images/2-03-8ec46e33837b922cab7339e398bf3463.png"},90347:function(e,t,n){t.Z=n.p+"assets/images/2-04-cede67dd00f85437a4db10e3d28752fe.png"},43861:function(e,t,n){t.Z=n.p+"assets/images/2-06-705fb7afbf38cae597e0af384dc60768.png"},91115:function(e,t,n){t.Z=n.p+"assets/images/2-09-5d5a4eb7ddab036688fed14528e5acb8.png"},1504:function(e,t,n){t.Z=n.p+"assets/images/3-02-438eb5aa99b43f85b757a4ee42230a35.png"},53994:function(e,t,n){t.Z=n.p+"assets/images/3-05-eba2c211b5461e93e271857b4c128d7d.png"},23885:function(e,t,n){t.Z=n.p+"assets/images/4-02-8036bf3c4cf8acceda4e2a8ddddee47d.png"},7474:function(e,t,n){t.Z=n.p+"assets/images/4-05-ae1aba5edc81c71c46632c4a24a52972.png"},49058:function(e,t,n){t.Z=n.p+"assets/images/4-07-61e2cddc960115722438e853092963ec.png"},36843:function(e,t,n){t.Z=n.p+"assets/images/5-02-835c7dd8e574df6d541518072d20447b.png"},71449:function(e,t,n){t.Z=n.p+"assets/images/6-01-bcdef9f554c9b0b3d3120c99a78eb989.png"}}]);