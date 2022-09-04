"use strict";(self.webpackChunkhyc_3z_website=self.webpackChunkhyc_3z_website||[]).push([[708],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=p(n),h=a,k=d["".concat(s,".").concat(h)]||d[h]||c[h]||i;return n?r.createElement(k,o(o({ref:t},u),{},{components:n})):r.createElement(k,o({ref:t},u))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var p=2;p<i;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},1268:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return p},toc:function(){return u},default:function(){return d}});var r=n(7462),a=n(3366),i=(n(7294),n(3905)),o=["components"],l={},s=void 0,p={unversionedId:"blockchain/Ethereum",id:"blockchain/Ethereum",title:"Ethereum",description:"2022/05/25",source:"@site/docs/blockchain/Ethereum.md",sourceDirName:"blockchain",slug:"/blockchain/Ethereum",permalink:"/docs/blockchain/Ethereum",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/blockchain/Ethereum.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Chainlink",permalink:"/docs/blockchain/Chainlink"},next:{title:"Polkadot",permalink:"/docs/blockchain/Polkadot"}},u=[{value:"Ethereum Basics",id:"ethereum-basics",children:[{value:"Wei Gwei",id:"wei-gwei",children:[],level:4},{value:"EVM",id:"evm",children:[],level:4},{value:"Merkle Patricia Trie",id:"merkle-patricia-trie",children:[],level:4},{value:"Gas",id:"gas",children:[{value:"Gas Limit",id:"gas-limit",children:[],level:5}],level:4},{value:"Running node",id:"running-node",children:[{value:"Node as a service",id:"node-as-a-service",children:[],level:5}],level:4},{value:"Testnets",id:"testnets",children:[],level:4},{value:"Concensus",id:"concensus",children:[{value:"Weak Subjectivity",id:"weak-subjectivity",children:[],level:5}],level:4}],level:3},{value:"Tools",id:"tools",children:[],level:3},{value:"Token standards",id:"token-standards",children:[{value:"PoA Proof of Authority",id:"poa-proof-of-authority",children:[],level:4}],level:3}],c={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"2022/05/25"),(0,i.kt)("p",null,"Ethereum\u7684\u5b66\u4e60\u53ef\u4ee5\u6709\u5f88\u591a\u90e8\u5206\uff0c",(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/"},"\u53c2\u8003\u5b98\u7f51")),(0,i.kt)("h3",{id:"ethereum-basics"},"Ethereum Basics"),(0,i.kt)("p",null,"\u503c\u5f97\u6ce8\u610f\u7684\u662f\u76ee\u524d\u8fd8\u662fPoW\uff0cPoS\u7684beacon chain\u5df2\u7ecf\u5728\u8fd0\u884c\u4e86\uff0c\u4f46\u8fd8\u6ca1\u6709merge\u5230\u4e3b\u94fe\u4e0a\uff0c\u9884\u8ba12022\u5e74Q3~Q4merge\u3002"),(0,i.kt)("h4",{id:"wei-gwei"},"Wei Gwei"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:"left"},"Denomination"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Value in ether"),(0,i.kt)("th",{parentName:"tr",align:"left"},"Common Usage"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Wei"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10-18"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Technical implementations")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:"left"},"Gwei"),(0,i.kt)("td",{parentName:"tr",align:"left"},"10-9"),(0,i.kt)("td",{parentName:"tr",align:"left"},"Human-readable gas fees")))),(0,i.kt)("p",null,"\u4f60\u9012\u4ea4\u4e86\u4e00\u6b21\u4ea4\u6613\uff0c\u8fd9\u4e2a\u4ea4\u6613\u4f1a\u548c\u5176\u4ed6\u4ea4\u6613\u4e00\u540c\u53d1\u5f80pool\uff0c\u77ff\u5de5\u4eec\u4f1a\u8d1f\u8d23\u5c06\u4f60\u7684Transaction\u63d0\u4ea4\u5230block\u4e0a\u3002nonce\u8bc1\u660e\u8fd9\u4e2ablock\u7ecf\u8fc7\u4e86PoW\u3002"),(0,i.kt)("h4",{id:"evm"},"EVM"),(0,i.kt)("p",null,"Evm\u662f\u4e00\u4e2a\u72b6\u6001\u673a\uff0c\u800c\u4e14\u5b83\u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u53ef\u4ee5\u6a21\u62df\u5f88\u591a\u6307\u4ee4\u3002"),(0,i.kt)("h4",{id:"merkle-patricia-trie"},"Merkle Patricia Trie"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eth.wiki/en/fundamentals/patricia-tree"},"https://eth.wiki/en/fundamentals/patricia-tree"),"\n\u8fd9\u4e2a\u7b97\u6cd5\u8fd8\u6ca1\u6709\u4ed4\u7ec6\u7814\u7a76\uff0c\u65e5\u540e\u518d\u770b\u5427"),(0,i.kt)("h4",{id:"gas"},"Gas"),(0,i.kt)("p",null,"Let's say Jordan has to pay Taylor 1 ETH. In the transaction, the gas limit is 21,000 units and the base fee is 100 gwei. Jordan includes a tip of 10 gwei."),(0,i.kt)("p",null,"Using the formula above we can calculate this as ",(0,i.kt)("inlineCode",{parentName:"p"},"21,000 * (100 + 10) = 2,310,000 gwei")," or 0.00231 ETH."),(0,i.kt)("p",null,"When Jordan sends the money, 1.00231 ETH will be deducted from Jordan's account. Taylor will be credited 1.0000 ETH. Miner receives the tip of 0.00021 ETH. Base fee of 0.0021 ETH is burned."),(0,i.kt)("h5",{id:"gas-limit"},"Gas Limit"),(0,i.kt)("p",null,"\u662f\u6307\u4f60\u6700\u5927\u613f\u610f\u652f\u51fa\u7684Gas\u6570\u91cf\u3002\u503c\u5f97\u6ce8\u610f\u7684\u662f\uff0c\u5373\u4fbfTransaction reverted\uff0cgas\u4e5f\u4e0d\u4f1a\u9000\u56de\u3002"),(0,i.kt)("h4",{id:"running-node"},"Running node"),(0,i.kt)("p",null,"\u6709\u5f88\u591aEthereum\u7684implementation\uff0c\u5982V\u795e\u7684",(0,i.kt)("a",{parentName:"p",href:"https://geth.ethereum.org/downloads/"},"Geth")),(0,i.kt)("p",null,"\u8fd9\u91cc\u5217\u4e3e\u4e86\u5f88\u591aRun your own node\u7684\u597d\u5904\uff0c\u6bd4\u5982\u4f60\u53ef\u4ee5\u5728\u4e0a\u9762\u5f00\u53d1dapp, \u5e76\u4e14\u4f60\u4e0d\u4f1a\u6cc4\u9732\u5730\u5740\uff0c\u800c\u4e14\u53ef\u4ee5\u81ea\u5df1verify transaction\u7b49\u7b49\u3002"),(0,i.kt)("p",null,"\u8fd8\u6709Light node, Archive node\uff0c\u6ee1\u8db3\u4e0d\u540c\u9700\u6c42\u3002"),(0,i.kt)("h5",{id:"node-as-a-service"},"Node as a service"),(0,i.kt)("p",null,"\u8fd9\u91cc\u6bd4\u8f83\u6709\u540d\u7684\u5982",(0,i.kt)("a",{parentName:"p",href:"https://www.ankr.com/"},"Ankr"),", ",(0,i.kt)("a",{parentName:"p",href:"https://infura.io/"},"Infura")),(0,i.kt)("p",null,"Infura\u662f\u7528\u7684\u975e\u5e38\u591a\u7684\uff0c\u6bcf\u5929\u670910\u4e07\u6b21\u514d\u8d39\u7684api\u8bf7\u6c42\uff0c\u53ef\u4ee5\u5728testnet\u4e0a\u7528\uff0c\u6d4b\u8bd5\u81ea\u5df1\u7684dapp\u5f88\u68d2\u3002"),(0,i.kt)("h4",{id:"testnets"},"Testnets"),(0,i.kt)("p",null,"\u76ee\u524d\u6700\u65b0\u7684\u6709Sepolia \u548cG\xf6rli"),(0,i.kt)("h4",{id:"concensus"},"Concensus"),(0,i.kt)("p",null,"PoW\u6709Dagger-hashimoto\u7b97\u6cd5\u548cEthash\u3002"),(0,i.kt)("p",null,"PoS\u6bd4\u8f83\u6709\u610f\u601d\u4e86\uff0c\u6709Gasper\uff0c\u4f1a\u4e13\u95e8\u60e9\u7f5a\u61d2\u60f0\u548c\u72af\u9519\u7684verifier\u3002\u8fd9\u4e5f\u53ef\u80fd\u662f\u4e3a\u5565\u4e00\u5f00\u59cb\u5f88\u591a\u4eba\u8d28\u62bc\u53cd\u800c\u635f\u5931\u4e86Eth\u5427\u3002"),(0,i.kt)("h5",{id:"weak-subjectivity"},"Weak Subjectivity"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/"},"https://blog.ethereum.org/2014/11/25/proof-stake-learned-love-weak-subjectivity/")),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u5b89\u5168\u6709\u5173\u7684\u7279\u6027\u5427\uff0c\u53ef\u4ee5\u770b\u4e0b",(0,i.kt)("a",{parentName:"p",href:"https://notes.ethereum.org/@adiasg/weak-subjectvity-eth2"},"\u8fd9\u7bc7\u6587\u7ae0")),(0,i.kt)("p",null,"\u4e3b\u8981\u662f\u548c\u7b2c\u4e00\u4e2aGenesis Block\u6709\u5173\u7684"),(0,i.kt)("h3",{id:"tools"},"Tools"),(0,i.kt)("p",null,"\u51e0\u4e2a\u6709\u610f\u601d\u7684\u5b66\u4e60\u5de5\u5177\uff1a"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://cryptozombies.io/"},"CyptoZombies"),", \u7528Solidity\u505a\u4e00\u4e2a\u50f5\u5c38\u6e38\u620f"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://ethernaut.openzeppelin.com/"},"Ethernauts")," \u95ef\u5173\uff0c\u6311\u6218\u7834\u89e3\u5408\u7ea6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://capturetheether.com/"},"Capture The Ether")," Hack\u5408\u7ea6"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://eth.build/"},"Eth.build"),"\u529f\u80fd\u5f88\u5f3a\u5927\uff0c\u800c\u4e14\u53ef\u89c6\u5316\u7f16\u8f91\uff0c\u50cf\u505aDML\u56fe\u4e00\u6837\uff0c\u6f14\u793a\u7684\u65f6\u5019\u53ef\u4ee5\u7528"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"https://remix.ethereum.org/"},"Remix")," ",(0,i.kt)("a",{parentName:"p",href:"https://replit.com/@replit/Solidity-starter-beta"},"Replit")," \u5f88\u5f3a\u5927\u7684ide, Remix\u73b0\u5728\u6709VS Code\u7684extension\u4e86\u3002"),(0,i.kt)("h3",{id:"token-standards"},"Token standards"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-20/"},"ERC-20")," - A standard interface for fungible (interchangeable) tokens, like voting tokens, staking tokens or virtual currencies.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-721/"},"ERC-721")," - A standard interface for non-fungible tokens, like a deed for artwork or a song.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-777/"},"ERC-777")," - A token standard improving over ERC-20.")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("a",{parentName:"p",href:"https://ethereum.org/en/developers/docs/standards/tokens/erc-1155/"},"ERC-1155")," - A token standard which can contain both fungible and non-fungible assets."),(0,i.kt)("p",{parentName:"li"},"\u5728Chainlink\u4e2d\uff0c\u8fd8\u7528\u5230\u4e86ERC677 Compatible Token\uff0c\u8fd9\u79cd\u6807\u51c6\u662f\u4e00\u79cdtransferAndCall\u6807\u51c6\u3002",(0,i.kt)("a",{parentName:"p",href:"https://github.com/ethereum/EIPs/issues/677"},"link")))),(0,i.kt)("h4",{id:"poa-proof-of-authority"},"PoA Proof of Authority"),(0,i.kt)("p",null,"\u4e4b\u524d\u770b\u6587\u6863\u6709\u4e2aPoA Testnet\u4e00\u76f4\u4e0d\u61c2\u4ec0\u4e48\u610f\u601d\uff0c\u540e\u6765\u624d\u77e5\u9053\uff0cPoA\u5c31\u662fProof of Authority\u7684\u610f\u601d\uff0c\u8bf4\u767d\u4e86\u4e5f\u5c31\u662fPoS\u7684\u7a76\u6781\u5f62\u6001\uff0c\u5be1\u5934\u653f\u6cbb\u3002\u5927\u6982\u4e00\u5c0f\u64ae\u6743\u5a01\u4eba\u58eb\u638c\u63e1\u7740\u9a8c\u8bc1\u533a\u5757\u7684\u6743\u5229\uff0c\u800c\u5b83\u4eec\u4e5f\u5fc5\u987b\u4fdd\u8bc1\u81ea\u5df1\u7684node\u4e00\u76f4\u8fd0\u884c\u3002"))}d.isMDXComponent=!0}}]);