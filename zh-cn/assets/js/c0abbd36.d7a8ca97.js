"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[54978],{3905:function(e,n,r){r.d(n,{kt:function(){return d}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function o(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?o(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function c(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(t=0;t<o.length;t++)r=o[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=t.createContext({}),s=function(e){var n=t.useContext(u),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},i={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,g=d["".concat(u,".").concat(m)]||d[m]||i[m]||o;return r?t.createElement(g,l(l({ref:n},p),{},{components:r})):t.createElement(g,l({ref:n},p))}));function d(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=p;var c={};for(var u in n)hasOwnProperty.call(n,u)&&(c[u]=n[u]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var s=2;s<o;s++)l[s]=r[s];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},42334:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return c},contentTitle:function(){return u},metadata:function(){return s},toc:function(){return i},default:function(){return d}});var t=r(87462),a=r(63366),o=(r(67294),r(3905)),l=["components"],c={},u="\u8d44\u6e90\u7ba1\u7406",s={unversionedId:"tutorials/resourceManagement",id:"tutorials/resourceManagement",isDocsHomePage:!1,title:"\u8d44\u6e90\u7ba1\u7406",description:"\u6e38\u620f\u4e2d\u6240\u7528\u5230\u7684\u6240\u6709\u8d44\u6e90\u90fd\u4f1a\u653e\u5728\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u8fdb\u884c\u7ba1\u7406\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u4e4b\u524d\u9700\u8981\u5c06\u8d44\u6e90\u6dfb\u52a0\u5230\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\uff0c\u5e76\u4e3a\u8d44\u6e90\u8bbe\u7f6e\u4e00\u4e2a\u8d44\u6e90\u540d\uff0c\u5728\u9700\u8981\u65f6\u76f4\u63a5\u4f7f\u7528\u8d44\u6e90\u540d\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\uff1a",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/resourceManagement.md",sourceDirName:"tutorials",slug:"/tutorials/resourceManagement",permalink:"/zh-cn/docs/tutorials/resourceManagement",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/resourceManagement.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5feb\u901f\u5f00\u59cb",permalink:"/zh-cn/docs/tutorials/quickstart"},next:{title:"\u6e38\u620f Game",permalink:"/zh-cn/docs/tutorials/game"}},i=[{value:"\u6dfb\u52a0\u8d44\u6e90",id:"\u6dfb\u52a0\u8d44\u6e90",children:[],level:2},{value:"\u8d44\u6e90\u9884\u52a0\u8f7d",id:"\u8d44\u6e90\u9884\u52a0\u8f7d",children:[],level:2},{value:"\u83b7\u53d6\u8d44\u6e90",id:"\u83b7\u53d6\u8d44\u6e90",children:[{value:"getResource(resourceName)",id:"getresourceresourcename",children:[],level:3},{value:"loadSingle(resource)",id:"loadsingleresource",children:[],level:3},{value:"\u8d44\u6e90\u5904\u7406",id:"\u8d44\u6e90\u5904\u7406",children:[],level:3},{value:"\u8d44\u6e90\u9500\u6bc1",id:"\u8d44\u6e90\u9500\u6bc1",children:[],level:3},{value:"\u52a0\u8f7d\u8d85\u65f6\u4e8b\u4ef6\u8bbe\u7f6e",id:"\u52a0\u8f7d\u8d85\u65f6\u4e8b\u4ef6\u8bbe\u7f6e",children:[],level:3}],level:2}],p={toc:i};function d(e){var n=e.components,r=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u8d44\u6e90\u7ba1\u7406"},"\u8d44\u6e90\u7ba1\u7406"),(0,o.kt)("p",null,"\u6e38\u620f\u4e2d\u6240\u7528\u5230\u7684\u6240\u6709\u8d44\u6e90\u90fd\u4f1a\u653e\u5728\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\u8fdb\u884c\u7ba1\u7406\uff0c\u5728\u4f7f\u7528\u8d44\u6e90\u4e4b\u524d\u9700\u8981\u5c06\u8d44\u6e90\u6dfb\u52a0\u5230\u8d44\u6e90\u7ba1\u7406\u5668\u4e2d\uff0c\u5e76\u4e3a\u8d44\u6e90\u8bbe\u7f6e\u4e00\u4e2a\u8d44\u6e90\u540d\uff0c\u5728\u9700\u8981\u65f6\u76f4\u63a5\u4f7f\u7528\u8d44\u6e90\u540d\u3002\u8fd9\u6837\u505a\u7684\u597d\u5904\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u7edf\u4e00\u8d44\u6e90\u5165\u53e3\u7ba1\u7406\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u5728 Eva.js \u52a0\u8f7d\u8d44\u6e90\u65f6\uff0c\u8d44\u6e90\u7ba1\u7406\u5668\u53ef\u4ee5\u5bf9\u8d44\u6e90\u8fdb\u884c\u9884\u5904\u7406\uff0c\u51cf\u5c11\u8fd0\u884c\u65f6\u5904\u7406\u8d44\u6e90\u4ea7\u751f\u5361\u987f\u7b49\u95ee\u9898")),(0,o.kt)("h2",{id:"\u6dfb\u52a0\u8d44\u6e90"},"\u6dfb\u52a0\u8d44\u6e90"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { RESOURCE_TYPE, resource } from '@eva/eva.js'\n")),(0,o.kt)("p",null,"\u4e0b\u9762\u5217\u4e3e\u4e86\u6700\u5e38\u4f7f\u7528\u7684\u51e0\u79cd\u8d44\u6e90"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u56fe\u7247")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "image",\n  type: RESOURCE_TYPE.IMAGE,\n  src: {\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png"\n    }\n  },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u9f99\u9aa8\u52a8\u753b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "dragonBone",\n  type: RESOURCE_TYPE.DRAGONBONE,\n  src: {\n    ske: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json",\n    },\n    tex: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.json",\n    },\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"\n    },\n  },\n}\n')),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"spine \u52a8\u753b")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},'{\n  name: "spineAnimation",\n  type: RESOURCE_TYPE.SPINE,\n  src: {\n    ske: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB1SFUHVAzoK1RjSZFlXXai4VXa.json",\n    },\n    atlas: {\n      type: "json",\n      url: "//gw.alicdn.com/bao/uploaded/TB17n.IVrrpK1RjSZTEXXcWAVXa.atlas",\n    },\n    image: {\n      type: "png",\n      url: "//gw.alicdn.com/bao/uploaded/TB11W7FVyrpK1RjSZFhXXXSdXXa-489-886.png"\n    },\n  },\n}\n')),(0,o.kt)("p",null,"\u5b9e\u9645\u9879\u76ee\u4e2d\u53ef\u80fd\u9700\u8981\u4e00\u6b21\u6027\u6dfb\u52a0\u5f88\u591a\u8d44\u6e90\uff0c\u53ef\u4ee5\u901a\u8fc7 addResource\xa0 \u5b9e\u73b0\u8fd9\u4e00\u76ee\u7684"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { RESOURCE_TYPE, resource } from '@eva/eva.js'\n\nresource.addResource([\n  {\n    name: 'img1',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: '//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    }\n  }\n  // other resources\n])\n")),(0,o.kt)("h2",{id:"\u8d44\u6e90\u9884\u52a0\u8f7d"},"\u8d44\u6e90\u9884\u52a0\u8f7d"),(0,o.kt)("p",null,"\u4f7f\u7528 ",(0,o.kt)("inlineCode",{parentName:"p"},"preload()")," \u65b9\u6cd5\u5c06\u8d44\u6e90\u5217\u8868\u4e2d ",(0,o.kt)("inlineCode",{parentName:"p"},"preload")," \u4e3a true \u7684\u8d44\u6e90\u8fdb\u884c\u52a0\u8f7d\uff0c\u53ef\u4ee5\u901a\u8fc7\u76d1\u542c resource \u4e0a\u7684\u4e8b\u4ef6\u6765\u83b7\u53d6\u5f53\u524d\u52a0\u8f7d\u8fdb\u5ea6\uff0c\u9002\u5408\u5728\u6e38\u620f\u521d\u59cb\u5316\u5c55\u793a loading\uff0c\u5207\u6362\u573a\u666f\u65f6\u8bf7\u6c42\u8d44\u6e90\u65f6\u4f7f\u7528\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.on(LOAD_EVENT.START, () => {}) // \u5f00\u59cbloader\nresource.on(LOAD_EVENT.PROGRESS, () => {}) // \u52a0\u8f7d\u8fdb\u5ea6\u66f4\u65b0\nresource.on(LOAD_EVENT.LOADED, () => {}) // \u67d0\u6587\u4ef6\u52a0\u8f7d\u6210\u529f\nresource.on(LOAD_EVENT.COMPLETE, () => {}) // \u52a0\u8f7d\u5b8c\u6210\nresource.on(LOAD_EVENT.ERROR, () => {}) // \u67d0\u6587\u4ef6\u52a0\u8f7d\u5931\u8d25\nresource.preload()\n")),(0,o.kt)("h2",{id:"\u83b7\u53d6\u8d44\u6e90"},"\u83b7\u53d6\u8d44\u6e90"),(0,o.kt)("h3",{id:"getresourceresourcename"},"getResource(resourceName)"),(0,o.kt)("p",null,"\u4f7f\u7528 getResource \u65b9\u6cd5\u83b7\u53d6\u8d44\u6e90\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u7684\u662f\u4e00\u4e2a promise\u3002\u8d44\u6e90\u5c06\u4f1a\u5b58\u5728\u4e8e data \u5c5e\u6027\u4e2d\uff0c\u5982\u679c\u8d44\u6e90\u662f JSON \u6587\u4ef6\uff0c\u5219 data \u7684\u503c\u662f\u4e00\u4e2a js \u5bf9\u8c61\uff1b\u5982\u679c\u8d44\u6e90\u662f\u56fe\u7247\uff0c\u5219 data \u7684\u503c\u5c06\u4f1a\u662f Image \u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"resource.getResource('img1').then(res => {\n  const name = res.name // \u8d44\u6e90\u540d\u79f0\n  const data = res.data // \u8d44\u6e90\u4e2d\u6587\u4ef6\u5bf9\u5e94\u7684\u5185\u5bb9 json \u6216\u8005 img \u7b49\n  const instance = res.instance // \u5904\u7406\u540e\u7684\u5b9e\u4f8b\n})\n")),(0,o.kt)("h3",{id:"loadsingleresource"},"loadSingle(resource)"),(0,o.kt)("p",null,"\u4f7f\u7528 loadSingle \u6765\u52a0\u8f7d\u5355\u4e2a\u8d44\u6e90\uff0c\u4e0d\u9700\u8981\u5c06\u8d44\u6e90\u6dfb\u52a0\u5230 addResource \u91cc\u9762\uff0c\u8be5\u65b9\u6cd5\u8fd4\u56de\u7684\u662f promise\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource\n  .loadSingle({\n    name: 'img1',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: '//gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: true\n  })\n  .then(res => {})\n")),(0,o.kt)("h3",{id:"\u8d44\u6e90\u5904\u7406"},"\u8d44\u6e90\u5904\u7406"),(0,o.kt)("p",null,"\u901a\u8fc7\u4e3a\u67d0\u79cd\u7c7b\u578b\u7684\u8d44\u6e90\u6ce8\u518c\u65b9\u6cd5\uff0c\u53ef\u4ee5\u5728\u8d44\u6e90\u8bf7\u6c42\u56de\u6765\u65f6\u5bf9\u8d44\u6e90\u8fdb\u884c\u5904\u7406\uff0c\u5728\u4f7f\u7528\u65f6\u53ef\u4ee5\u76f4\u63a5\u83b7\u53d6\u5230\u8d44\u6e90\u5b9e\u4f8b\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.registerInstance(RESOURCE_TYPE.SPRITE, async ({ name, data }) => {\n  const instance = await instanceSth(data)\n  return instance\n})\n")),(0,o.kt)("h3",{id:"\u8d44\u6e90\u9500\u6bc1"},"\u8d44\u6e90\u9500\u6bc1"),(0,o.kt)("p",null,"\u8d44\u6e90\u53ef\u4ee5\u4e3b\u52a8\u9500\u6bc1\uff0c\u9700\u8981\u8981\u6ce8\u610f\u7684\u662f\uff0c\u5728\u9500\u6bc1\u8d44\u6e90\u524d\u8981\u786e\u4fdd\u6e38\u620f\u4e2d\u6ca1\u6709\u4f7f\u7528\u8be5\u8d44\u6e90\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.destory('img1')\n")),(0,o.kt)("p",null,"\u5982\u679c\u4e3a\u8be5\u7c7b\u578b\u8d44\u6e90\u6ce8\u518c\u4e86\u9500\u6bc1\u65b9\u6cd5\uff0c\u5219\u4f1a\u8c03\u7528\u8be5\u65b9\u6cd5\u9500\u6bc1\u8d44\u6e90\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.registerDestroy(RESOURCE_TYPE.SPRITE, async ({ instance }) => {\n  await instance.destory()\n})\n")),(0,o.kt)("h3",{id:"\u52a0\u8f7d\u8d85\u65f6\u4e8b\u4ef6\u8bbe\u7f6e"},"\u52a0\u8f7d\u8d85\u65f6\u4e8b\u4ef6\u8bbe\u7f6e"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"resource.timeout = 30000\n")))}d.isMDXComponent=!0}}]);