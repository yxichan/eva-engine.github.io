"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[85405],{3905:function(t,e,n){n.d(e,{kt:function(){return k}});var a=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var p=a.createContext({}),d=function(t){var e=a.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},m={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,p=t.parentName,u=o(t,["components","mdxType","originalType","parentName"]),k=d(n),g=r,N=k["".concat(p,".").concat(g)]||k[g]||m[g]||l;return n?a.createElement(N,i(i({ref:e},u),{},{components:n})):a.createElement(N,i({ref:e},u))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=u;var o={};for(var p in e)hasOwnProperty.call(e,p)&&(o[p]=e[p]);o.originalType=t,o.mdxType="string"==typeof t?t:r,i[1]=o;for(var d=2;d<l;d++)i[d]=n[d];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},38415:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return m},default:function(){return k}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),i=["components"],o={},p="\u6587\u672c Text",d={unversionedId:"tutorials/textComponent",id:"tutorials/textComponent",isDocsHomePage:!1,title:"\u6587\u672c Text",description:"Text \u7ec4\u4ef6\u4e3a gameObject \u63d0\u4f9b\u4e86\u5c55\u793a\u6587\u5b57\u7684\u80fd\u529b\uff0c\u4f7f\u7528\u4e86 Text \u7ec4\u4ef6\u540e\uff0cgameObject \u7684\u5bbd\u5ea6\u4f1a\u5728\u4e0b\u4e00\u5e27\u8bbe\u7f6e\u6587\u5b57\u6240\u5360\u533a\u57df\u7684\u5bbd\u5ea6\u7ed9 Transform\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/textComponent.md",sourceDirName:"tutorials",slug:"/tutorials/textComponent",permalink:"/zh-cn/docs/tutorials/textComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/textComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u56fe\u7247 Image",permalink:"/zh-cn/docs/tutorials/imageComponent"},next:{title:"\u56fe\u5f62 Graphics",permalink:"/zh-cn/docs/tutorials/graphicsComponent"}},m=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",children:[{value:"\u4f7f\u7528 NPM",id:"\u4f7f\u7528-npm",children:[],level:3},{value:"\u5728\u6d4f\u89c8\u5668\u4e2d",id:"\u5728\u6d4f\u89c8\u5668\u4e2d",children:[],level:3}],level:2},{value:"\u4f7f\u7528",id:"\u4f7f\u7528",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"text: <code>string</code>\xa0",id:"text-string",children:[],level:3},{value:"style",id:"style",children:[],level:3}],level:2}],u={toc:m};function k(t){var e=t.components,n=(0,r.Z)(t,i);return(0,l.kt)("wrapper",(0,a.Z)({},u,n,{components:e,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"\u6587\u672c-text"},"\u6587\u672c Text"),(0,l.kt)("p",null,"Text \u7ec4\u4ef6\u4e3a gameObject \u63d0\u4f9b\u4e86\u5c55\u793a\u6587\u5b57\u7684\u80fd\u529b\uff0c\u4f7f\u7528\u4e86 Text \u7ec4\u4ef6\u540e\uff0cgameObject \u7684\u5bbd\u5ea6\u4f1a\u5728\u4e0b\u4e00\u5e27\u8bbe\u7f6e\u6587\u5b57\u6240\u5360\u533a\u57df\u7684\u5bbd\u5ea6\u7ed9 Transform\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/text"},"Demo")),(0,l.kt)("h2",{id:"\u5b89\u88c5"},"\u5b89\u88c5"),(0,l.kt)("h3",{id:"\u4f7f\u7528-npm"},"\u4f7f\u7528 NPM"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-text\n")),(0,l.kt)("h3",{id:"\u5728\u6d4f\u89c8\u5668\u4e2d"},"\u5728\u6d4f\u89c8\u5668\u4e2d"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-text@1.1.x/dist/EVA.plugin.renderer.text.min.js"><\/script>\n')),(0,l.kt)("h2",{id:"\u4f7f\u7528"},"\u4f7f\u7528"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"import { Game, GameObject } from '@eva/eva.js'\nimport { RendererSystem } from '@eva/plugin-renderer'\nimport { Text, TextSystem } from '@eva/plugin-renderer-text'\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new TextSystem()\n  ]\n})\n\n// \u6b64\u5904\u8fd8\u5728\u8003\u8651\u5982\u4f55\u8bbe\u7f6e\u9ed8\u8ba4\u573a\u666f\u7684\u5bbd\u9ad8\ngame.scene.transform.size = {\n  width: 750,\n  height: 1000\n}\n\nconst text = new GameObject('text', {\n  position: {\n    x: 0,\n    y: 0\n  },\n  origin: {\n    x: 0.5,\n    y: 0.5\n  },\n  anchor: {\n    x: 0.5,\n    y: 0.5\n  }\n})\n\ntext.addComponent(\n  new Text({\n    text: '\u6b22\u8fce\u4f7f\u7528EVA\u4e92\u52a8\u6e38\u620f\u5f00\u53d1\u4f53\u7cfb\uff01',\n    style: {\n      fontFamily: 'Arial',\n      fontSize: 36,\n      fontStyle: 'italic',\n      fontWeight: 'bold',\n      fill: ['#b35d9e', '#84c35f', '#ebe44f'], // gradient\n      fillGradientType: 1,\n      fillGradientStops: [0.1, 0.4],\n      stroke: '#4a1850',\n      strokeThickness: 5,\n      dropShadow: true,\n      dropShadowColor: '#000000',\n      dropShadowBlur: 4,\n      dropShadowAngle: Math.PI / 6,\n      dropShadowDistance: 6,\n      wordWrap: true,\n      wordWrapWidth: 400,\n      breakWords: true\n    }\n  })\n)\n")),(0,l.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,l.kt)("h3",{id:"text-string"},"text: ",(0,l.kt)("inlineCode",{parentName:"h3"},"string"),"\xa0"),(0,l.kt)("p",null,"\u663e\u793a\u7684\u6587\u672c"),(0,l.kt)("h3",{id:"style"},"style"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Name"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"align")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'left'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u4f5c\u7528\u4e8e\u591a\u884c\u6587\u672c('left', 'center' or 'right'), \u5355\u884c\u6587\u672c\u4e0d\u751f\u6548")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"breakWords")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u662f\u5426\u5728\u8bcd\u8bed\u4e2d\u95f4\u6362\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadow")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u8bbe\u7f6e\u6587\u5b57\u9634\u5f71")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadowAlpha")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"1"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u9634\u5f71\u7684\u900f\u660e\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadowAngle")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"Math.PI/6"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u9634\u5f71\u89d2\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadowBlur")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u9634\u5f71\u6a21\u7cca\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadowColor")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null},"'black'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u9634\u5f71\u989c\u8272 \xa0 \u4f8b\u5982 'red', '#00FF00'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"dropShadowDistance")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"5"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u9634\u5f71\u8ddd\u79bb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fill")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'black'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u989c\u8272\uff0c\u53ef\u4ee5\u662f\u6e10\u53d8 'red', '#00FF00'\u3002\u4f20\u5165\u4e00\u4e2a\u989c\u8272\u6570\u7ec4\u5219\u4f1a\u5c55\u793a\u6e10\u53d8\u8272 ","['#000000','#FFFFFF']")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fillGradientType")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"'LINEAR_VERTICAL'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5982\u679c\u6587\u5b57\u989c\u8272\u4e3a\u6e10\u53d8\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u6c34\u5e73\u6216\u8005\u5782\u76f4\u6e10\u53d8, \u6c34\u5e73\u6e10\u53d8\uff1aLINEAR_VERTICAL \u5782\u76f4\u6e10\u53d8\uff1aLINEAR_HORIZONTAL")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fillGradientStops")),(0,l.kt)("td",{parentName:"tr",align:null},"number[]"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5982\u679c\u6587\u5b57\u989c\u8272\u4e3a\u6e10\u53d8\uff0c\u53ef\u4ee5\u8bbe\u7f6e\u5404\u4e2a\u989c\u8272\u7684\u5b9a\u4f4d\u70b9\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u662f\u5747\u5206\u7684")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontFamily")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," string[]"),(0,l.kt)("td",{parentName:"tr",align:null},"'Arial'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5b57\u4f53")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontSize")),(0,l.kt)("td",{parentName:"tr",align:null},"number ","|"," string"),(0,l.kt)("td",{parentName:"tr",align:null},"26"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5b57\u53f7(\u5982\u679c\u662f\u6570\u5b57\u7684\u8bdd\u4f1a\u88ab\u8f6c\u6210\u50cf\u7d20\uff0c\u53ef\u4ee5\u7528\u5b57\u7b26\u4e32\uff1a'26px','20pt','160%' or '1.6em')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontStyle")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'normal'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5b57\u4f53\u6837\u5f0f ('normal', 'italic' or 'oblique')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontVariant")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'normal'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5b57\u4f53\u53d8\u5316 ('normal' or 'small-caps')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"fontWeight")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'normal'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u5b57\u4f53\u52a0\u7c97 ('normal', 'bold', 'bolder', 'lighter' and '100', '200', '300', '400', '500', '600', '700', 800' or '900')")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"leading")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u884c\u95f4\u8ddd")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"letterSpacing")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6bb5\u843d\u524d\u7a7a\u7684\u8ddd\u79bb")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lineHeight")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u884c\u9ad8")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"lineJoin")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'miter'"),(0,l.kt)("td",{parentName:"tr",align:null},'optional \u8fb9\u89d2\u6837\u5f0f\u7c7b\u578b values "miter" (creates a sharp corner), "round" (creates a round corner) or "bevel" (creates a squared corner).')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"miterLimit")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"10"),(0,l.kt)("td",{parentName:"tr",align:null},"optionallineJoin \u4e3a miter \u7684\u65f6\u5019\uff0c\u4f7f\u7528\u6b64\u5c5e\u6027\uff0c\u53ef\u4ee5\u51cf\u5c11\u6e32\u67d3\u6587\u5b57\u7684\u5c16\u9510\u6027")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"padding")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6709\u4e9b\u5b57\u4f53\u4f1a\u88ab\u88c1\u526a\uff0c\u6dfb\u52a0 padding \u89e3\u51b3\u6b64\u95ee\u9898")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"stroke")),(0,l.kt)("td",{parentName:"tr",align:null},"string ","|"," number"),(0,l.kt)("td",{parentName:"tr",align:null},"'black'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u63cf\u8fb9 'blue', '#FCFF00'")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"strokeThickness")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"0"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u63cf\u8fb9\u539a\u5ea6")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"trim")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u53bb\u9664\u900f\u660e\u8fb9\u6846")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"textBaseline")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'alphabetic'"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u6587\u5b57\u57fa\u7ebf")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"whiteSpace")),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"'pre'"),(0,l.kt)("td",{parentName:"tr",align:null},'optional \u8bbe\u7f6e\u6362\u884c\u7684\u903b\u8f91, "normal" \u6b63\u5e38\u903b\u8f91\u6362\u884c,"pre"\xa0\xa0 \u4fdd\u7559\u7a7a\u767d\u7b26\u5e8f\u5217\uff0c\u4f46\u662f\u6b63\u5e38\u5730\u8fdb\u884c\u6362\u884c,"pre-line" \u5408\u5e76\u7a7a\u767d\u7b26\u5e8f\u5217\uff0c\u4f46\u662f\u4fdd\u7559\u6362\u884c\u7b26. \u9700\u8981 wordWrap \u4e3a true')),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wordWrap")),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"false"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u662f\u5426\u9700\u8981\u6362\u884c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("inlineCode",{parentName:"td"},"wordWrapWidth")),(0,l.kt)("td",{parentName:"tr",align:null},"number"),(0,l.kt)("td",{parentName:"tr",align:null},"100"),(0,l.kt)("td",{parentName:"tr",align:null},"optional \u8d85\u51fa\u6539\u5bbd\u5ea6\u6362\u884c")))))}k.isMDXComponent=!0}}]);