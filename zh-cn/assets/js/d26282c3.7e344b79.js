"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[53128],{3905:function(e,t,r){r.d(t,{kt:function(){return u}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),m=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},l=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=c(e,["components","mdxType","originalType","parentName"]),u=m(r),d=a,y=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return r?n.createElement(y,s(s({ref:t},l),{},{components:r})):n.createElement(y,s({ref:t},l))}));function u(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,s=new Array(o);s[0]=l;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,s[1]=c;for(var m=2;m<o;m++)s[m]=r[m];return n.createElement.apply(null,s)}return n.createElement.apply(null,r)}l.displayName="MDXCreateElement"},48556:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return m},toc:function(){return p},default:function(){return u}});var n=r(87462),a=r(63366),o=(r(67294),r(3905)),s=["components"],c={},i=void 0,m={unversionedId:"api/eva.js.game.addsystem_1",id:"api/eva.js.game.addsystem_1",isDocsHomePage:!1,title:"eva.js.game.addsystem_1",description:"Home &gt; @eva/eva.js &gt; Game &gt; addSystem",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/api/eva.js.game.addsystem_1.md",sourceDirName:"api",slug:"/api/eva.js.game.addsystem_1",permalink:"/zh-cn/docs/api/eva.js.game.addsystem_1",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/api/eva.js.game.addsystem_1.md",tags:[],version:"current",frontMatter:{}},p=[{value:"Game.addSystem() method",id:"gameaddsystem-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],l={toc:p};function u(e){var t=e.components,r=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,n.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/eva.js"},"@eva/eva.js")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/eva.js.game"},"Game")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/zh-cn/docs/api/eva.js.game.addsystem_1"},"addSystem")),(0,o.kt)("h2",{id:"gameaddsystem-method"},"Game.addSystem() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"addSystem<T extends System>(S: SystemConstructor<T>, obj?: ConstructorParameters<SystemConstructor<T>>): T;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"S"),(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva.js.systemconstructor"},"SystemConstructor"),"<","T",">"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"obj"),(0,o.kt)("td",{parentName:"tr",align:null},"ConstructorParameters","<",(0,o.kt)("a",{parentName:"td",href:"/zh-cn/docs/api/eva.js.systemconstructor"},"SystemConstructor"),"<","T",">",">"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"T"))}u.isMDXComponent=!0}}]);