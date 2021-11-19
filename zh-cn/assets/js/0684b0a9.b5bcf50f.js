"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[32002],{3905:function(t,e,a){a.d(e,{kt:function(){return N}});var n=a(67294);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function l(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?l(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,r=function(t,e){if(null==t)return{};var a,n,r={},l=Object.keys(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(n=0;n<l.length;n++)a=l[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var d=n.createContext({}),m=function(t){var e=n.useContext(d),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},k={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},o=n.forwardRef((function(t,e){var a=t.components,r=t.mdxType,l=t.originalType,d=t.parentName,o=p(t,["components","mdxType","originalType","parentName"]),N=m(a),g=r,f=N["".concat(d,".").concat(g)]||N[g]||k[g]||l;return a?n.createElement(f,i(i({ref:e},o),{},{components:a})):n.createElement(f,i({ref:e},o))}));function N(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=a.length,i=new Array(l);i[0]=o;var p={};for(var d in e)hasOwnProperty.call(e,d)&&(p[d]=e[d]);p.originalType=t,p.mdxType="string"==typeof t?t:r,i[1]=p;for(var m=2;m<l;m++)i[m]=a[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}o.displayName="MDXCreateElement"},5637:function(t,e,a){a.r(e),a.d(e,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return m},toc:function(){return k},default:function(){return N}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],p={},d="\u56fe\u5f62 Graphics",m={unversionedId:"tutorials/graphicsComponent",id:"tutorials/graphicsComponent",isDocsHomePage:!1,title:"\u56fe\u5f62 Graphics",description:"Graphics \u7ec4\u4ef6\u4e3a GameObject \u63d0\u4f9b\u4e86\u7ed8\u5236\u56fe\u5f62\u7684\u80fd\u529b\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/graphicsComponent.md",sourceDirName:"tutorials",slug:"/tutorials/graphicsComponent",permalink:"/zh-cn/docs/tutorials/graphicsComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/graphicsComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6587\u672c Text",permalink:"/zh-cn/docs/tutorials/textComponent"},next:{title:"\u7cbe\u7075\u56fe Sprite",permalink:"/zh-cn/docs/tutorials/spriteComponent"}},k=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[{value:"\u7ed8\u5236\u65b9\u6cd5",id:"\u7ed8\u5236\u65b9\u6cd5",children:[{value:"beginFill\xa0(color, alpha)",id:"beginfillcolor-alpha",children:[],level:4},{value:"endFill\xa0()",id:"endfill",children:[],level:4},{value:"lineStyle\xa0({ width, color, alpha, alignment, native })",id:"linestyle-width-color-alpha-alignment-native-",children:[],level:4},{value:"lineStyle\xa0(width, color, alpha, alignment, native)",id:"linestylewidth-color-alpha-alignment-native",children:[],level:4},{value:"lineTo\xa0(x, y)",id:"linetox-y",children:[],level:4},{value:"moveTo\xa0(x, y)",id:"movetox-y",children:[],level:4},{value:"quadraticCurveTo\xa0(cpX, cpY, toX, toY)",id:"quadraticcurvetocpx-cpy-tox-toy",children:[],level:4},{value:"clear\xa0()",id:"clear",children:[],level:4},{value:"closePath\xa0()",id:"closepath",children:[],level:4}],level:3},{value:"\u9884\u8bbe\u56fe\u5f62",id:"\u9884\u8bbe\u56fe\u5f62",children:[{value:"arc\xa0(cx, cy, radius, startAngle, endAngle, anticlockwise)",id:"arccx-cy-radius-startangle-endangle-anticlockwise",children:[],level:4},{value:"arcTo\xa0(x1, y1, x2, y2, radius)",id:"arctox1-y1-x2-y2-radius",children:[],level:4},{value:"bezierCurveTo\xa0(cpX, cpY, cpX2, cpY2, toX, toY)",id:"beziercurvetocpx-cpy-cpx2-cpy2-tox-toy",children:[],level:4},{value:"drawCircle\xa0(x, y, radius)",id:"drawcirclex-y-radius",children:[],level:4},{value:"drawEllipse\xa0(x, y, width, height)",id:"drawellipsex-y-width-height",children:[],level:4},{value:"drawPolygon\xa0(path)",id:"drawpolygonpath",children:[],level:4},{value:"drawRect\xa0(x, y, width, height)",id:"drawrectx-y-width-height",children:[],level:4},{value:"drawRoundedRect\xa0(x, y, width, height, radius)",id:"drawroundedrectx-y-width-height-radius",children:[],level:4},{value:"drawStar\xa0(x, y, points, radius, innerRadius, rotation)",id:"drawstarx-y-points-radius-innerradius-rotation",children:[],level:4}],level:3}],level:2}],o={toc:k};function N(t){var e=t.components,a=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,n.Z)({},o,a,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u56fe\u5f62-graphics"},"\u56fe\u5f62 Graphics"),(0,l.kt)("p",null,"Graphics \u7ec4\u4ef6\u4e3a GameObject \u63d0\u4f9b\u4e86\u7ed8\u5236\u56fe\u5f62\u7684\u80fd\u529b\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/graphics"},"Demo")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-graphics\n")),(0,l.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-graphics@1.1.x/dist/EVA.plugin.renderer.graphics.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("p",null,"\u65e0\u9700\u53c2\u6570\uff0c\u5c06\u4f1a\u8fd4\u56de\u4e00\u4e2a graphics \u6302\u8f7d component \u5b9e\u4f8b\u4e0a\uff0c\u8c03\u7528 graphics \u5c5e\u6027\u4e0a\u7684\u65b9\u6cd5\u5373\u53ef\u7ed8\u5236\u56fe\u5f62"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Graphics, GraphicsSystem } from '@eva/plugin-renderer-graphics'\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new GraphicsSystem()\n  ]\n})\n\nconst outter = new GameObject('container', {\n  position: {\n    x: 200,\n    y: 500\n  },\n  size: {\n    width: 300,\n    height: 24\n  }\n})\nconst progress = new GameObject('container', {\n  position: {\n    x: 3,\n    y: 3\n  }\n})\n\nconst outterGraphics = outter.addComponent(new Graphics())\noutterGraphics.graphics.beginFill(0xde3249, 1)\noutterGraphics.graphics.drawRoundedRect(0, 0, 300, 24, 12)\noutterGraphics.graphics.endFill()\n\nconst progressGraphics = progress.addComponent(new Graphics())\n\nlet i = 0\nsetInterval(() => {\n  setProgress(i++)\n}, 100)\n\noutter.addChild(progress)\n\ngame.scene.addChild(outter)\n\nfunction setProgress(progress) {\n  if (progress > 100) return\n  const width = Math.max(12, (296 * progress) / 100)\n  progressGraphics.graphics.clear()\n  progressGraphics.graphics.beginFill(0x000000, 1)\n  progressGraphics.graphics.drawRoundedRect(0, 0, width, 18, 9)\n  progressGraphics.graphics.endFill()\n}\n")),(0,l.kt)("h3",{id:"\u7ed8\u5236\u65b9\u6cd5"},"\u7ed8\u5236\u65b9\u6cd5"),(0,l.kt)("h4",{id:"beginfillcolor-alpha"},"beginFill\xa0(color, alpha)"),(0,l.kt)("p",null,"\u6307\u5b9a\u4e00\u4e2a\u7b80\u5355\u7684\u5355\u8272\u586b\u5145\uff0c\u968f\u540e\u8c03\u7528\u5176\u4ed6 Graphics \u65b9\u6cd5 \uff08\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"lineTo()"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"drawCircle()"),"\uff09\u5728\u7ed8\u5236\u65f6\u4f7f\u7528\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u586b\u5145\u7684\u989c\u8272")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"alpha")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u586b\u5145\u7684 Alpha")))),(0,l.kt)("h4",{id:"endfill"},"endFill\xa0()"),(0,l.kt)("p",null,"\u5bf9\u81ea\u4e0a\u4e00\u6b21\u8c03\u7528 beginFill() \u65b9\u6cd5\u4ee5\u6765\u6dfb\u52a0\u7684\u7ebf\u6761\u548c\u5f62\u72b6\u5e94\u7528\u586b\u5145\u3002"),(0,l.kt)("h4",{id:"linestyle-width-color-alpha-alignment-native-"},"lineStyle\xa0({ width, color, alpha, alignment, native })"),(0,l.kt)("p",null,"\u6307\u5b9a\u7528\u4e8e\u968f\u540e\u8c03\u7528 Graphics \u65b9\u6cd5\u7684\u7ebf\u6837\u5f0f\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"lineTo()"),"\u65b9\u6cd5 \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"drawCircle()"),"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u753b\u7ebf\u7684\u5bbd\u5ea6\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0x0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u6761\u7684\u989c\u8272\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"alpha")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u6761\u7684 Alpha\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"alignment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u7684\u5bf9\u9f50\u65b9\u5f0f\uff080 = \u5185\u90e8\uff0c0.5 = \u5c45\u4e2d\uff0c1 = \u5916\u90e8\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u5982\u679c\u4e3a true\uff0c\u5219\u5c06\u4f7f\u7528 LINES \u6765\u4ee3\u66ff TRIANGLE_STRIP \u7ed8\u5236\u7ebf\u6761")))),(0,l.kt)("h4",{id:"linestylewidth-color-alpha-alignment-native"},"lineStyle\xa0(width, color, alpha, alignment, native)"),(0,l.kt)("p",null,"\u6307\u5b9a\u7528\u4e8e\u968f\u540e\u8c03\u7528 Graphics \u65b9\u6cd5\u7684\u7ebf\u6837\u5f0f\uff0c\u4f8b\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"lineTo()"),"\u65b9\u6cd5\u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"drawCircle()"),"\u65b9\u6cd5"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u753b\u7ebf\u7684\u5bbd\u5ea6\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"color")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0x0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u6761\u7684\u989c\u8272\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"alpha")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"1"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u6761\u7684 Alpha\uff0c\u5c06\u66f4\u65b0\u5bf9\u8c61\u5b58\u50a8\u7684\u6837\u5f0f")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"alignment")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0.5"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u7ed8\u5236\u7ebf\u7684\u5bf9\u9f50\u65b9\u5f0f\uff080 = \u5185\u90e8\uff0c0.5 = \u5c45\u4e2d\uff0c1 = \u5916\u90e8\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"native")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u5982\u679c\u4e3a true\uff0c\u5219\u5c06\u4f7f\u7528 LINES \u6765\u4ee3\u66ff TRIANGLE_STRIP \u7ed8\u5236\u7ebf\u6761")))),(0,l.kt)("h4",{id:"linetox-y"},"lineTo\xa0(x, y)"),(0,l.kt)("p",null,"\u4f7f\u7528\u5f53\u524d\u7ebf\u6837\u5f0f\u4ece\u5f53\u524d\u7ed8\u56fe\u4f4d\u7f6e\u5230 (x, y )\u7ed8\u5236\u4e00\u6761\u7ebf\uff1b \u7136\u540e\u5c06\u5f53\u524d\u56fe\u5f62\u4f4d\u7f6e\u8bbe\u7f6e\u4e3a (x, y)\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u7ed8\u5236\u5230\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u7ed8\u5236\u5230\u7684 Y \u5750\u6807")))),(0,l.kt)("h4",{id:"movetox-y"},"moveTo\xa0(x, y)"),(0,l.kt)("p",null,"\u5c06\u5f53\u524d\u56fe\u5f62\u4f4d\u7f6e\u79fb\u52a8\u5230 x,y\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u79fb\u52a8\u5230\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8981\u79fb\u52a8\u5230\u7684 Y \u5750\u6807")))),(0,l.kt)("h4",{id:"quadraticcurvetocpx-cpy-tox-toy"},"quadraticCurveTo\xa0(cpX, cpY, toX, toY)"),(0,l.kt)("p",null,"\u8ba1\u7b97\u4e8c\u6b21\u8d1d\u585e\u5c14\u66f2\u7ebf\u7684\u70b9\uff0c\u7136\u540e\u7ed8\u5236\u5b83\u3002 \u57fa\u4e8e: ",(0,l.kt)("a",{parentName:"p",href:"https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c"},"https://stackoverflow.com/questions/785097/how-do-i-implement-a-bezier-curve-in-c")),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpX")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a7\u5236\u70b9 x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpY")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a7\u5236\u70b9 y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toX")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u7684\u70b9 x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toY")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u7684\u70b9 y")))),(0,l.kt)("h4",{id:"clear"},"clear\xa0()"),(0,l.kt)("p",null,"\u6e05\u9664\u7ed8\u5236\u5230\u6b64 Graphics \u5bf9\u8c61\u7684\u56fe\u5f62\uff0c\u5e76\u91cd\u7f6e\u586b\u5145\u548c\u7ebf\u6761\u6837\u5f0f\u8bbe\u7f6e\u3002"),(0,l.kt)("h4",{id:"closepath"},"closePath\xa0()"),(0,l.kt)("p",null,"\u5173\u95ed\u5f53\u524d\u8def\u5f84\u3002"),(0,l.kt)("h3",{id:"\u9884\u8bbe\u56fe\u5f62"},"\u9884\u8bbe\u56fe\u5f62"),(0,l.kt)("h4",{id:"arccx-cy-radius-startangle-endangle-anticlockwise"},"arc\xa0(cx, cy, radius, startAngle, endAngle, anticlockwise)"),(0,l.kt)("p",null,"\u5706\u5f27\u65b9\u6cd5\u521b\u5efa\u5706\u5f27/\u66f2\u7ebf\uff08\u7528\u4e8e\u521b\u5efa\u5706\u6216\u5706\u7684\u4e00\u90e8\u5206\uff09\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cx")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5fc3\u7684 x \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cy")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5fc3\u7684 y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"radius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u7684\u534a\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"startAngle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u8d77\u59cb\u89d2\u5ea6\uff0c\u4ee5\u5f27\u5ea6\u4e3a\u5355\u4f4d\uff080 \u662f\u5706\u5f27\u7684 3 \u70b9\u4f4d\u7f6e\uff09")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"endAngle")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7ec8\u6b62\u89d2\u5ea6\uff0c\u4ee5\u5f27\u5ea6\u4e3a\u5355\u4f4d")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"anticlockwise")),(0,l.kt)("td",{parentName:"tr",align:"left"},"boolean"),(0,l.kt)("td",{parentName:"tr",align:"left"},"false"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u6307\u5b9a\u56fe\u5f62\u662f\u9006\u65f6\u9488\u8fd8\u662f\u987a\u65f6\u9488\u3002 ",(0,l.kt)("inlineCode",{parentName:"td"},"false")," \u662f\u9ed8\u8ba4\u503c\uff0c\u8868\u793a\u987a\u65f6\u9488\uff0c\u800c",(0,l.kt)("inlineCode",{parentName:"td"},"true"),"\u8868\u793a\u9006\u65f6\u9488\u3002")))),(0,l.kt)("h4",{id:"arctox1-y1-x2-y2-radius"},"arcTo\xa0(x1, y1, x2, y2, radius)"),(0,l.kt)("p",null,"arcTo()\u65b9\u6cd5\u5728\u753b\u5e03\u4e0a\u7684\u4e24\u4e2a\u5207\u7ebf\u4e4b\u95f4\u521b\u5efa\u5f27/\u66f2\u7ebf\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5f27\u7684\u7b2c\u4e00\u4e2a\u5207\u70b9\u7684 x \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y1")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5f27\u7684\u7b2c\u4e00\u4e2a\u5207\u70b9\u7684 y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5f27\u672b\u7aef\u7684 x \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5f27\u672b\u7aef\u7684 y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"radius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5f27\u534a\u5f84")))),(0,l.kt)("h4",{id:"beziercurvetocpx-cpy-cpx2-cpy2-tox-toy"},"bezierCurveTo\xa0(cpX, cpY, cpX2, cpY2, toX, toY)"),(0,l.kt)("p",null,"\u8ba1\u7b97\u8d1d\u585e\u5c14\u66f2\u7ebf\u7684\u70b9\uff0c\u7136\u540e\u7ed8\u5236\u5b83\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpX")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a7\u5236\u70b9 x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpY")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u63a7\u5236\u70b9 y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpX2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e8c\u63a7\u5236\u70b9 x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"cpY2")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7b2c\u4e8c\u63a7\u5236\u70b9 y")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toX")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u7684\u70b9 x")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"toY")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u76ee\u7684\u70b9 y")))),(0,l.kt)("h4",{id:"drawcirclex-y-radius"},"drawCircle\xa0(x, y, radius)"),(0,l.kt)("p",null,"\u7ed8\u5236\u4e00\u4e2a\u5706\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5fc3\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u5fc3\u7684 Y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"radius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u5706\u7684\u534a\u5f84")))),(0,l.kt)("h4",{id:"drawellipsex-y-width-height"},"drawEllipse\xa0(x, y, width, height)"),(0,l.kt)("p",null,"\u7ed8\u5236\u4e00\u4e2a\u692d\u5706\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u692d\u5706\u4e2d\u5fc3\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u692d\u5706\u4e2d\u5fc3\u7684 Y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u692d\u5706\u7684\u534a\u5bbd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u692d\u5706\u7684\u534a\u9ad8")))),(0,l.kt)("h4",{id:"drawpolygonpath"},"drawPolygon\xa0(path)"),(0,l.kt)("p",null,"\u4f7f\u7528\u6307\u5b9a\u7684\u8def\u5f84\u7ed8\u5236\u591a\u8fb9\u5f62\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"path")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number[] ","|"," Array.<{x,y}>"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u7528\u4e8e\u6784\u9020\u591a\u8fb9\u5f62\u7684\u8def\u5f84\u6570\u636e\u3002")))),(0,l.kt)("h4",{id:"drawrectx-y-width-height"},"drawRect\xa0(x, y, width, height)"),(0,l.kt)("p",null,"\u7ed8\u5236\u4e00\u4e2a\u77e9\u5f62\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u5de6\u4e0a\u89d2\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u5de6\u4e0a\u89d2\u7684 Y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u7684\u9ad8\u5ea6")))),(0,l.kt)("h4",{id:"drawroundedrectx-y-width-height-radius"},"drawRoundedRect\xa0(x, y, width, height, radius)"),(0,l.kt)("p",null,"\u7ed8\u5236\u4e00\u4e2a\u5e26\u6709\u5706\u89d2/\u659c\u89d2\u7684\u77e9\u5f62\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u5de6\u4e0a\u89d2\u7684 X \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u5de6\u4e0a\u89d2\u7684 Y \u5750\u6807")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"width")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u7684\u5bbd\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"height")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u7684\u9ad8\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"radius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u77e9\u5f62\u89d2\u5ea6\u7684\u534a\u5f84")))),(0,l.kt)("h4",{id:"drawstarx-y-points-radius-innerradius-rotation"},"drawStar\xa0(x, y, points, radius, innerRadius, rotation)"),(0,l.kt)("p",null,"\u7528\u4efb\u610f\u6570\u91cf\u7684\u70b9\u753b\u4e00\u4e2a\u661f\u5f62\u3002"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:"left"},"Name"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Type"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Default"),(0,l.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"x")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u661f\u7684\u4e2d\u5fc3 X \u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"y")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u661f\u7684\u4e2d\u5fc3 Y \u4f4d\u7f6e")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"points")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u661f\u661f\u7684\u70b9\u6570\u5fc5\u987b > 1")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"radius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"\u661f\u661f\u7684\u5916\u534a\u5f84")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"innerRadius")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"}),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u70b9\u4e4b\u95f4\u7684\u5185\u534a\u5f84\uff0c\u9ed8\u8ba4\u4e3a",(0,l.kt)("inlineCode",{parentName:"td"},"radius"),"\u7684\u4e00\u534a")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:"left"},(0,l.kt)("inlineCode",{parentName:"td"},"rotation")),(0,l.kt)("td",{parentName:"tr",align:"left"},"number"),(0,l.kt)("td",{parentName:"tr",align:"left"},"0"),(0,l.kt)("td",{parentName:"tr",align:"left"},"optional \u661f\u661f\u81ea\u8f6c\u7684\u5f27\u5ea6\uff0c\u5176\u4e2d 0 \u4e3a\u5782\u76f4")))))}N.isMDXComponent=!0}}]);