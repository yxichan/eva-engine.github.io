"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[97921],{3905:function(e,n,r){r.d(n,{kt:function(){return s}});var t=r(67294);function a(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function i(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function o(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?i(Object(r),!0).forEach((function(n){a(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function l(e,n){if(null==e)return{};var r,t,a=function(e,n){if(null==e)return{};var r,t,a={},i=Object.keys(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||(a[r]=e[r]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(t=0;t<i.length;t++)r=i[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=t.createContext({}),u=function(e){var n=t.useContext(d),r=n;return e&&(r="function"==typeof e?e(n):o(o({},n),e)),r},c={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},p=t.forwardRef((function(e,n){var r=e.components,a=e.mdxType,i=e.originalType,d=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=u(r),m=a,g=s["".concat(d,".").concat(m)]||s[m]||c[m]||i;return r?t.createElement(g,o(o({ref:n},p),{},{components:r})):t.createElement(g,o({ref:n},p))}));function s(e,n){var r=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var d in n)hasOwnProperty.call(n,d)&&(l[d]=n[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var u=2;u<i;u++)o[u]=r[u];return t.createElement.apply(null,o)}return t.createElement.apply(null,r)}p.displayName="MDXCreateElement"},81376:function(e,n,r){r.r(n),r.d(n,{frontMatter:function(){return l},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return c},default:function(){return s}});var t=r(87462),a=r(63366),i=(r(67294),r(3905)),o=["components"],l={},d="\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6",u={unversionedId:"tutorials/orderAndTransparent",id:"tutorials/orderAndTransparent",isDocsHomePage:!1,title:"\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6",description:"\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/orderAndTransparent.md",sourceDirName:"tutorials",slug:"/tutorials/orderAndTransparent",permalink:"/zh-cn/docs/tutorials/orderAndTransparent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/orderAndTransparent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u5e73\u94fa\u7cbe\u7075 TilingSprite",permalink:"/zh-cn/docs/tutorials/tilingSpriteComponent"},next:{title:"\u8fc7\u6e21\u52a8\u753b",permalink:"/zh-cn/docs/tutorials/transitionAnimation"}},c=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"sortableChildren: <code>boolean</code>\xa0",id:"sortablechildren-boolean",children:[],level:3},{value:"zIndex: <code>number</code>\xa0",id:"zindex-number",children:[],level:3},{value:"alpha: <code>number</code>\xa0",id:"alpha-number",children:[],level:3}],level:2}],p={toc:c};function s(e){var n=e.components,r=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,t.Z)({},p,r,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6"},"\u906e\u6321\u6392\u5e8f\u4e0e\u900f\u660e\u5ea6"),(0,i.kt)("p",null,"\u4f7f\u7528\u524d\u9700\u8981\u5b89\u88c5\u6e32\u67d3\u5668"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/render/alpha"},"\u900f\u660e\u5ea6 Demo")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"https://eva.js.org/playground/#/render/sort"},"\u6392\u5e8f Demo"))),(0,i.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,i.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-render\n")),(0,i.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-render@1.1.x/dist/EVA.plugin.renderer.render.min.js"><\/script>\n')),(0,i.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject, resource, RESOURCE_TYPE } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Img, ImgSystem } from '@eva/plugin-renderer-img'\nimport { Render, RenderSystem } from '@eva/plugin-renderer-render'\nimport { Transition, TransitionSystem } from '@eva/plugin-transition'\n\nresource.addResource([\n  {\n    name: 'heart',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type: 'png',\n        url: 'https://gw.alicdn.com/bao/uploaded/TB1lVHuaET1gK0jSZFhXXaAtVXa-200-200.png'\n      }\n    },\n    preload: false\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new ImgSystem(),\n    new RenderSystem(),\n    new TransitionSystem()\n  ]\n})\n\nconst image = new GameObject('image', {\n  size: { width: 200, height: 200 },\n  origin: { x: 0, y: 0 },\n  position: {\n    x: 300,\n    y: 400\n  },\n  anchor: {\n    x: 0,\n    y: 0\n  }\n})\nconst img = image.addComponent(\n  new Img({\n    resource: 'heart'\n  })\n)\n\nconst render = image.addComponent(\n  new Render({\n    alpha: 0.5\n  })\n)\n\nconst animation = image.addComponent(new Transition())\nanimation.group = {\n  idle: [\n    {\n      name: 'alpha',\n      component: render,\n      values: [\n        {\n          time: 0,\n          value: 1,\n          tween: 'ease-out'\n        },\n        {\n          time: 1000,\n          value: 0,\n          tween: 'ease-in'\n        },\n        {\n          time: 2000,\n          value: 1\n        }\n      ]\n    }\n  ]\n}\n\nanimation.play('idle', Infinity)\n\ngame.scene.addChild(image)\n")),(0,i.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,i.kt)("h3",{id:"sortablechildren-boolean"},"sortableChildren: ",(0,i.kt)("inlineCode",{parentName:"h3"},"boolean"),"\xa0"),(0,i.kt)("p",null,"\u5982\u679c\u9700\u8981\u4f7f\u7528 zIndex \u6392\u5e8f\uff0c\u9700\u8981\u5728\u7236\u7ea7\u7684 Render \u7ec4\u4ef6\u4e0a\u8bbe\u7f6e sortableChildren"),(0,i.kt)("h3",{id:"zindex-number"},"zIndex: ",(0,i.kt)("inlineCode",{parentName:"h3"},"number"),"\xa0"),(0,i.kt)("p",null,"\u6e32\u67d3\u987a\u5e8f\uff0czIndex \u8d8a\u5927\u5728\u4e0a\u9762"),(0,i.kt)("h3",{id:"alpha-number"},"alpha: ",(0,i.kt)("inlineCode",{parentName:"h3"},"number"),"\xa0"),(0,i.kt)("p",null,"\u900f\u660e\u5ea6"))}s.isMDXComponent=!0}}]);