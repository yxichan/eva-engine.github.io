"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[66826],{3905:function(e,n,t){t.d(n,{kt:function(){return d}});var r=t(67294);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=r.createContext({}),c=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},u=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=c(t),m=i,g=d["".concat(s,".").concat(m)]||d[m]||p[m]||o;return t?r.createElement(g,a(a({ref:n},u),{},{components:t})):r.createElement(g,a({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var o=t.length,a=new Array(o);a[0]=u;var l={};for(var s in n)hasOwnProperty.call(n,s)&&(l[s]=n[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,a[1]=l;for(var c=2;c<o;c++)a[c]=t[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}u.displayName="MDXCreateElement"},52774:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return p},default:function(){return d}});var r=t(87462),i=t(63366),o=(t(67294),t(3905)),a=["components"],l={},s="Tiled Wizard TilingSprite",c={unversionedId:"tutorials/tilingSpriteComponent",id:"tutorials/tilingSpriteComponent",isDocsHomePage:!1,title:"Tiled Wizard TilingSprite",description:"In some games with infinite backgrounds, tile sprites can be used to achieve seamless background connection, similar to the background-repeat: repeat; function in css, and a renderer needs to be installed before use.",source:"@site/docs/tutorials/tilingSpriteComponent.md",sourceDirName:"tutorials",slug:"/tutorials/tilingSpriteComponent",permalink:"/docs/tutorials/tilingSpriteComponent",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/tilingSpriteComponent.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"NinePatch",permalink:"/docs/tutorials/ninePatchComponent"},next:{title:"Order and Alpha",permalink:"/docs/tutorials/orderAndTransparent"}},p=[{value:"Install",id:"install",children:[{value:"With NPM",id:"with-npm",children:[],level:3},{value:"In Browser",id:"in-browser",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"Options",id:"options",children:[{value:"resource: <code>String</code>",id:"resource-string",children:[],level:3},{value:"tileScale: <code>{x: float, y: float}</code>",id:"tilescale-x-float-y-float",children:[],level:3},{value:"tilePosition: <code>{x: number, y: number}</code>",id:"tileposition-x-number-y-number",children:[],level:3}],level:2}],u={toc:p};function d(e){var n=e.components,t=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"tiled-wizard-tilingsprite"},"Tiled Wizard TilingSprite"),(0,o.kt)("p",null,"In some games with infinite backgrounds, tile sprites can be used to achieve seamless background connection, similar to the ",(0,o.kt)("inlineCode",{parentName:"p"},"background-repeat: repeat;")," function in css, and a renderer needs to be installed before use."),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://eva.js.org/playground/#/tilingSprite"},"Demo")),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"with-npm"},"With NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"npm i @eva/plugin-renderer @eva/plugin-renderer-tiling-sprite\n")),(0,o.kt)("h3",{id:"in-browser"},"In Browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-renderer-tiling-sprite@1.1.x/dist/EVA.plugin.renderer.tilingSprite.min.js"><\/script>\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import {Game, GameObject, resource, RESOURCE_TYPE} from '@eva/eva.js'\nimport {RendererSystem} from '@eva/plugin-renderer'\nimport {TilingSprite, TilingSpriteSystem} from '@eva/plugin-renderer-tiling-sprite'\n\nresource.addResource([\n  {\n    name:'imageName',\n    type: RESOURCE_TYPE.IMAGE,\n    src: {\n      image: {\n        type:'png',\n        url:'https://gw.alicdn.com/tfs/TB1t7vtOvb2gK0jSZK9XXaEgFXa-300-431.png'\n      }\n    },\n    preload: true\n  }\n])\n\nconst game = new Game({\n  systems: [\n    new RendererSystem({\n      canvas: document.querySelector('#canvas'),\n      width: 750,\n      height: 1000\n    }),\n    new TilingSpriteSystem()\n  ]\n})\n\nconst tilingSprite = new GameObject('sprite', {\n  size: {width: 750, height: 1000}\n})\n\ntilingSprite.addComponent(\n  new TilingSprite({\n    resource:'imageName',\n    tileScale: {x: 0.7, y: 0.7 },\n    tilePosition: {x: 10, y: 40}\n  })\n)\n\ngame.scene.addChild(tilingSprite)\n")),(0,o.kt)("h2",{id:"options"},"Options"),(0,o.kt)("h3",{id:"resource-string"},"resource: ",(0,o.kt)("inlineCode",{parentName:"h3"},"String")),(0,o.kt)("p",null,"Resource name"),(0,o.kt)("h3",{id:"tilescale-x-float-y-float"},"tileScale: ",(0,o.kt)("inlineCode",{parentName:"h3"},"{x: float, y: float}")),(0,o.kt)("p",null,"Zoom"),(0,o.kt)("h3",{id:"tileposition-x-number-y-number"},"tilePosition: ",(0,o.kt)("inlineCode",{parentName:"h3"},"{x: number, y: number}")),(0,o.kt)("p",null,"Displacement"))}d.isMDXComponent=!0}}]);