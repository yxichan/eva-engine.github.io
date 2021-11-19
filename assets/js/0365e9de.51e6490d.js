"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[19739],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,y=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return n?r.createElement(y,a(a({ref:t},p),{},{components:n})):r.createElement(y,a({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var c=2;c<o;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},61768:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return l},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],s={},l="MatterJS",c={unversionedId:"tutorials/matterJS",id:"tutorials/matterJS",isDocsHomePage:!1,title:"MatterJS",description:"Introduction",source:"@site/docs/tutorials/matterJS.md",sourceDirName:"tutorials",slug:"/tutorials/matterJS",permalink:"/docs/tutorials/matterJS",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/matterJS.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Sound",permalink:"/docs/tutorials/sound"},next:{title:"A11y \u65e0\u969c\u788d\u63d2\u4ef6",permalink:"/docs/tutorials/a11yPlugin"}},u=[{value:"Introduction",id:"introduction",children:[],level:2},{value:"Install",id:"install",children:[{value:"With NPM",id:"with-npm",children:[],level:3},{value:"In Browser",id:"in-browser",children:[],level:3}],level:2},{value:"Usage",id:"usage",children:[],level:2},{value:"\u53c2\u6570",id:"\u53c2\u6570",children:[{value:"type <code>PhysicsType</code>",id:"type-physicstype",children:[],level:3},{value:"sides",id:"sides",children:[],level:3},{value:"radius",id:"radius",children:[],level:3},{value:"bodyOptions",id:"bodyoptions",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,n=(0,i.Z)(e,a);return(0,o.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"matterjs"},"MatterJS"),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Eva physics engine"),(0,o.kt)("h2",{id:"install"},"Install"),(0,o.kt)("h3",{id:"with-npm"},"With NPM"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"tnpm install @eva/plugin-matterjs\n")),(0,o.kt)("h3",{id:"in-browser"},"In Browser"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html"},'<script src="https://unpkg.com/@eva/plugin-matterjs@1.1.x/dist/EVA.plugin.renderer.matterjs.min.js"><\/script>\n')),(0,o.kt)("h2",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-javascript"},"// 1. Introduced after installing the physics engine\nimport {PhysicsSystem, Physics, PhysicsType} from '@eva/plugin-matterjs';\n\n// 2. Register the plugin in EVA\nconst game = new Game({\n  autoStart: true,\n  frameRate: 60,\n  systems: [\n    new RendererSystem({\n      transparent: true,\n      canvas: canvasNode,\n      backgroundColor: 0xfee79d,\n      width: 750,\n      height: 1624,\n      resolution: 2,\n    }),\n    new GraphicsSystem(),\n    new PhysicsSystem({\n      resolution: 2, // Keep the resolution of the RendererSystem consistent\n      // isTest: true, // Whether to enable debugging mode\n      // element: document.getElementById('game-container'), // Mount point of canvas node in debug mode\n      world: {\n        gravity: {\n          y: 2, // gravity\n        },\n      },\n      mouse: {\n        open: true,\n      },\n    }),\n    new TextSystem(),\n    new ImgSystem(),\n    new EventSystem(),\n  ],\n});\n\n// 3. New game entity object\nconst box = new GameObject('box', {\n  size: {\n    width: 75,\n    height: 75,\n  },\n  position: {\n    x: 75 + Math.random() * 300,\n    y: 75,\n  },\n  // Origin will be mapped to the center of mass of the physical system, which is the geometric center of the physics in a two-dimensional environment. It must be fixed here as {x:0.5,y:0.5}\n  origin: {\n    x: 0.5,\n    y: 0.5,\n  },\n});\n// 4. Add Componet to the game object\nconst physics = box.addComponent(\n  new Physics({\n    type: PhysicsType.RECTANGLE,\n    // body:{\n    // options:{\n\n    //}\n    //}\n    bodyOptions: {\n        isStatic: false, // Whether the object is still, any force acting on the object in a static state will not produce any effect\n        restitution: 0.8,\n        frictionAir: 0.1,\n        friction: 0,\n        frictionStatic: 0,\n        force: {\n          x: 0,\n          y: 0,\n        },\n    },\n    stopRotation: true, // default false, usually do not need to be set\n  }),\n);\n//Currently supported collision events collisionStart collisionActive collisionEnd\n//Rigid body events tick, beforeUpdate, afterUpdate, beforeRender, afterRender, afterTick usually use beforeUpdate and afterUpdate\nphysics.on('collisionStart', (body, gameObject1, gameObject2) => {});\n\nconsole.log(\"physics\",physics);\n")),(0,o.kt)("h2",{id:"\u53c2\u6570"},"\u53c2\u6570"),(0,o.kt)("h3",{id:"type-physicstype"},"type ",(0,o.kt)("inlineCode",{parentName:"h3"},"PhysicsType")),(0,o.kt)("p",null,"rigid body model shape."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"RECTANGLE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"CIRCLE")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("inlineCode",{parentName:"li"},"POLYGON")," regular polygon")),(0,o.kt)("h3",{id:"sides"},"sides"),(0,o.kt)("p",null,"Number of sides while type with ",(0,o.kt)("inlineCode",{parentName:"p"},"POLYGON"),"."),(0,o.kt)("h3",{id:"radius"},"radius"),(0,o.kt)("p",null,"The radius of ",(0,o.kt)("inlineCode",{parentName:"p"},"POLYGON")," / ",(0,o.kt)("inlineCode",{parentName:"p"},"CIRCLE"),"."),(0,o.kt)("h3",{id:"bodyoptions"},"bodyOptions"),(0,o.kt)("p",null,"Visiting ",(0,o.kt)("a",{parentName:"p",href:"https://brm.io/matter-js/docs/classes/Body.html#properties"},"Matterjs offical")," to learn more."),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null),(0,o.kt)("br",null))}d.isMDXComponent=!0}}]);