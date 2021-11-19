"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[78433],{3905:function(e,t,n){n.d(t,{kt:function(){return s}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=u(n),d=a,f=s["".concat(l,".").concat(d)]||s[d]||m[d]||o;return n?r.createElement(f,c(c({ref:t},p),{},{components:n})):r.createElement(f,c({ref:t},p))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var u=2;u<o;u++)c[u]=n[u];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},41423:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return l},metadata:function(){return u},toc:function(){return m},default:function(){return s}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),c=["components"],i={},l="\u6e38\u620f\u5bf9\u8c61 GameObject",u={unversionedId:"tutorials/gameObject",id:"tutorials/gameObject",isDocsHomePage:!1,title:"\u6e38\u620f\u5bf9\u8c61 GameObject",description:"\u6e38\u620f\u5bf9\u8c61\u662f\u6e38\u620f\u7684\u57fa\u672c\u5143\u7d20\uff0c\u4ee3\u8868\u4eba\u7269\u3001\u7269\u4f53\u3001\u98ce\u666f\u7b49\uff0c\u5b83\u672c\u8eab\u6ca1\u6709\u4efb\u4f55\u80fd\u529b\uff0c\u6bcf\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u9ed8\u8ba4\u5305\u542b\u4e00\u4e2a Transform \u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u7528\u6765\u5b9a\u4e49\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\u4fe1\u606f\uff0c\u8be5\u7ec4\u4ef6\u65e0\u6cd5\u88ab\u79fb\u9664\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/gameObject.md",sourceDirName:"tutorials",slug:"/tutorials/gameObject",permalink:"/zh-cn/docs/tutorials/gameObject",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/gameObject.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6e38\u620f Game",permalink:"/zh-cn/docs/tutorials/game"},next:{title:"Transform",permalink:"/zh-cn/docs/tutorials/transformComponent"}},m=[{value:"\u521b\u5efa\u6e38\u620f\u5bf9\u8c61",id:"\u521b\u5efa\u6e38\u620f\u5bf9\u8c61",children:[{value:"\u6dfb\u52a0\u5b50\u5bf9\u8c61",id:"\u6dfb\u52a0\u5b50\u5bf9\u8c61",children:[],level:3},{value:"\u79fb\u9664\u5b50\u5bf9\u8c61",id:"\u79fb\u9664\u5b50\u5bf9\u8c61",children:[],level:3},{value:"\u6dfb\u52a0\u7ec4\u4ef6",id:"\u6dfb\u52a0\u7ec4\u4ef6",children:[],level:3},{value:"\u79fb\u9664\u7ec4\u4ef6",id:"\u79fb\u9664\u7ec4\u4ef6",children:[],level:3},{value:"\u7ee7\u7eed",id:"\u7ee7\u7eed",children:[],level:3},{value:"\u6ce8\u610f\uff1a",id:"\u6ce8\u610f",children:[],level:3}],level:2}],p={toc:m};function s(e){var t=e.components,n=(0,a.Z)(e,c);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u6e38\u620f\u5bf9\u8c61-gameobject"},"\u6e38\u620f\u5bf9\u8c61 GameObject"),(0,o.kt)("p",null,"\u6e38\u620f\u5bf9\u8c61\u662f\u6e38\u620f\u7684",(0,o.kt)("strong",{parentName:"p"},"\u57fa\u672c\u5143\u7d20"),"\uff0c\u4ee3\u8868\u4eba\u7269\u3001\u7269\u4f53\u3001\u98ce\u666f\u7b49\uff0c\u5b83\u672c\u8eab\u6ca1\u6709\u4efb\u4f55\u80fd\u529b\uff0c\u6bcf\u4e00\u4e2a\u6e38\u620f\u5bf9\u8c61\u90fd\u9ed8\u8ba4\u5305\u542b\u4e00\u4e2a Transform \u7ec4\u4ef6\uff0c\u8fd9\u4e2a\u7ec4\u4ef6\u7528\u6765\u5b9a\u4e49\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\u3001\u5c3a\u5bf8\u7b49\u4fe1\u606f\uff0c\u8be5\u7ec4\u4ef6\u65e0\u6cd5\u88ab\u79fb\u9664\u3002"),(0,o.kt)("h2",{id:"\u521b\u5efa\u6e38\u620f\u5bf9\u8c61"},"\u521b\u5efa\u6e38\u620f\u5bf9\u8c61"),(0,o.kt)("p",null,"\u521b\u5efa\u6e38\u620f\u5bf9\u8c61\uff0c ",(0,o.kt)("inlineCode",{parentName:"p"},"new GameObject(name, transfrom)")," \uff0c\u7b2c\u4e00\u4e2a\u53c2\u6570\u4e3a\u5bf9\u8c61\u7684\u540d\u79f0\uff0c\u7b2c\u4e8c\u4e2a\u53c2\u6570\u4e3a\u5bf9\u8c61\u7684 Transform \u7ec4\u4ef6\u7684\u5c5e\u6027\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { GameObject } from '@eva/eva.js'\nconst gameObject = new GameObject('name', {\n  size: { width: 100, height: 100 },\n  position: { x: 50, y: 50 }\n})\n")),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u5b50\u5bf9\u8c61"},"\u6dfb\u52a0\u5b50\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"const childGameObject = new GameObject('b', {})\ngameObject.addChild(childGameObject)\n")),(0,o.kt)("h3",{id:"\u79fb\u9664\u5b50\u5bf9\u8c61"},"\u79fb\u9664\u5b50\u5bf9\u8c61"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"gameObject.removeChild(childGameObject)\n")),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u7ec4\u4ef6"},"\u6dfb\u52a0\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u65b9\u6cd5 1:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Img } from '@eva/plugn-render'\n// \u65b9\u6cd52\uff1a\u76f4\u63a5\u4f20\u5165\u5b9e\u4f8b\nconst img = new Img({\n  // \u8fd9\u91cc\u53ef\u4ee5\u8bbe\u7f6e\u9ed8\u8ba4\u53c2\u6570\n  resource: 'heart'\n})\n\ngameObject.addComponent(img)\n")),(0,o.kt)("h3",{id:"\u79fb\u9664\u7ec4\u4ef6"},"\u79fb\u9664\u7ec4\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Img } from '@eva/plugn-render'\ngameObject.removeComponent(Img)\n")),(0,o.kt)("h3",{id:"\u7ee7\u7eed"},"\u7ee7\u7eed"),(0,o.kt)("p",null,"\u6e38\u620f\u5bf9\u8c61\u9ed8\u8ba4\u643a\u5e26\u7684 ",(0,o.kt)("a",{parentName:"p",href:"transformComponent"},"Transform")," \u7ec4\u4ef6\u662f\u7528\u6765\u63a7\u5236\u6e38\u620f\u5bf9\u8c61\u7684\u5c3a\u5bf8\u3001\u4f4d\u7f6e\u3001\u7f29\u653e\u3001\u659c\u5207\u3001\u65cb\u8f6c\u7b49\u5c5e\u6027\u3002"),(0,o.kt)("h3",{id:"\u6ce8\u610f"},"\u6ce8\u610f\uff1a"),(0,o.kt)("p",null,"Img\u3001Texture\u3001Graphics\u3001DragonBone\u3001SpriteAnimation\u3001NinePatch \u6709\u56fe\u5f62\u6e32\u67d3\u529f\u80fd\u7684\u7ec4\u4ef6\u4e0d\u8981\u6dfb\u52a0\u5230\u540c\u4e00\u4e2a GameObject \u5185\u3002"))}s.isMDXComponent=!0}}]);