"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[84523],{3905:function(e,n,t){t.d(n,{kt:function(){return d}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=l(t),u=a,g=d["".concat(p,".").concat(u)]||d[u]||m[u]||o;return t?r.createElement(g,s(s({ref:n},c),{},{components:t})):r.createElement(g,s({ref:n},c))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=c;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var l=2;l<o;l++)s[l]=t[l];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},74963:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return l},toc:function(){return m},default:function(){return d}});var r=t(87462),a=t(63366),o=(t(67294),t(3905)),s=["components"],i={},p="\u63d2\u4ef6\u5f00\u53d1",l={unversionedId:"tutorials/pluginDevelop",id:"tutorials/pluginDevelop",isDocsHomePage:!1,title:"\u63d2\u4ef6\u5f00\u53d1",description:"\u4e00\u822c\u901a\u8fc7\u811a\u672c\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5927\u90e8\u5206\u903b\u8f91\uff0c\u6d89\u53ca\u5f15\u64ce\u7ea7\u522b\u6216\u8005\u4e1a\u52a1\u7ea7\u522b\u7684\u901a\u7528\u80fd\u529b\uff0c\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d2\u4ef6\u4e3b\u8981\u662f\u7531 Component \u548c System \u7ec4\u6210\u3002",source:"@site/i18n/zh-cn/docusaurus-plugin-content-docs/current/tutorials/pluginDevelop.md",sourceDirName:"tutorials",slug:"/tutorials/pluginDevelop",permalink:"/zh-cn/docs/tutorials/pluginDevelop",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/tutorials/pluginDevelop.md",tags:[],version:"current",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"\u6027\u80fd\u76d1\u63a7",permalink:"/zh-cn/docs/tutorials/performancePlugin"}},m=[{value:"\u57fa\u7840",id:"\u57fa\u7840",children:[{value:"\u5f00\u53d1",id:"\u5f00\u53d1",children:[],level:3},{value:"\u63d2\u4ef6\u8fd0\u884c\u903b\u8f91",id:"\u63d2\u4ef6\u8fd0\u884c\u903b\u8f91",children:[],level:3},{value:"\u6784\u5efa\u4e0e\u53d1\u5e03\u89c4\u8303",id:"\u6784\u5efa\u4e0e\u53d1\u5e03\u89c4\u8303",children:[],level:3}],level:2},{value:"\u5f00\u53d1\u5b9e\u8df5",id:"\u5f00\u53d1\u5b9e\u8df5",children:[{value:"\u4f7f\u7528\u6848\u4f8b",id:"\u4f7f\u7528\u6848\u4f8b",children:[],level:3},{value:"Component \u8bbe\u8ba1",id:"component-\u8bbe\u8ba1",children:[],level:3},{value:"System \u8bbe\u8ba1",id:"system-\u8bbe\u8ba1",children:[{value:"Step1 \u786e\u5b9a\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u4ee5\u53ca\u53c2\u6570",id:"step1-\u786e\u5b9a\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u4ee5\u53ca\u53c2\u6570",children:[],level:4},{value:"Step2 \u8bbe\u7f6e\u7cfb\u7edf\u540d\u5b57",id:"step2-\u8bbe\u7f6e\u7cfb\u7edf\u540d\u5b57",children:[],level:4},{value:"Step3 \u6839\u636e\u7ec4\u4ef6\u53d8\u5316\u5b9e\u73b0\u903b\u8f91",id:"step3-\u6839\u636e\u7ec4\u4ef6\u53d8\u5316\u5b9e\u73b0\u903b\u8f91",children:[],level:4}],level:3}],level:2},{value:"\u57fa\u4e8e PixiJS \u7684\u63d2\u4ef6",id:"\u57fa\u4e8e-pixijs-\u7684\u63d2\u4ef6",children:[],level:2},{value:"\u751f\u547d\u5468\u671f",id:"\u751f\u547d\u5468\u671f",children:[],level:2},{value:"\u603b\u7ed3",id:"\u603b\u7ed3",children:[],level:2}],c={toc:m};function d(e){var n=e.components,t=(0,a.Z)(e,s);return(0,o.kt)("wrapper",(0,r.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u63d2\u4ef6\u5f00\u53d1"},"\u63d2\u4ef6\u5f00\u53d1"),(0,o.kt)("p",null,"\u4e00\u822c\u901a\u8fc7\u811a\u672c\u7ec4\u4ef6\u7684\u65b9\u5f0f\u5c31\u53ef\u4ee5\u5b9e\u73b0\u5927\u90e8\u5206\u903b\u8f91\uff0c\u6d89\u53ca\u5f15\u64ce\u7ea7\u522b\u6216\u8005\u4e1a\u52a1\u7ea7\u522b\u7684\u901a\u7528\u80fd\u529b\uff0c\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u7684\u5f62\u5f0f\u8fdb\u884c\u5f00\u53d1\uff0c\u63d2\u4ef6\u4e3b\u8981\u662f\u7531 Component \u548c System \u7ec4\u6210\u3002"),(0,o.kt)("p",null,"Eva.js \u7684\u6e32\u67d3\u662f\u57fa\u4e8e ",(0,o.kt)("a",{parentName:"p",href:"http://pixijs.io/"},"PixiJS")," \u7684\uff0c\u4e00\u822c Img/Sprite/Spine \u7b49\u63d2\u4ef6\u5b9e\u9645\u4e0a\u662f\u521b\u5efa\u4e86 Pixi \u7684\u6e32\u67d3\u5bf9\u8c61\uff0c\u50cf Stats/EvaX/Transition \u7b49\u63d2\u4ef6\u4e0d\u4f9d\u8d56 Pixi\u3002\u4e0d\u7ba1\u662f\u54ea\u79cd\u63d2\u4ef6\u90fd\u662f\u8f93\u51fa Component \u548c System \u7ed9\u5f15\u64ce\u4f7f\u7528\uff0c\u4f46\u662f\u5f00\u53d1\u65b9\u6848\u6709\u4e00\u4e9b\u4e0d\u540c\uff0c\u63a5\u4e0b\u6765\u6211\u4f1a\u5148\u8bb2\u89e3\u6700\u7b80\u5355\u7684\u63d2\u4ef6\u5f00\u53d1\u65b9\u6cd5\u3002"),(0,o.kt)("p",null,"\u6211\u4eec\u63d0\u4f9b\u4e86\u4e00\u4e2a",(0,o.kt)("a",{parentName:"p",href:"https://github.com/eva-engine/plugin-template"},"\u63d2\u4ef6\u6a21\u677f"),"\uff0c\u53ef\u4ee5\u70b9\u51fb ",(0,o.kt)("inlineCode",{parentName:"p"},"Use this Template")," \u76f4\u63a5\u4f7f\u7528\u6a21\u7248\u8fdb\u884c\u5f00\u53d1\uff0c\u91cc\u9762\u5e26\u4e86\u5fc5\u8981\u7684\u811a\u624b\u67b6\u3002"),(0,o.kt)("h2",{id:"\u57fa\u7840"},"\u57fa\u7840"),(0,o.kt)("h3",{id:"\u5f00\u53d1"},"\u5f00\u53d1"),(0,o.kt)("p",null,"\u8bfb\u5230\u8fd9\u91cc\uff0c\u76f8\u4fe1\u5927\u5bb6\u5df2\u7ecf\u5bf9 Eva.js \u6709\u6240\u4e86\u89e3\u5e76\u4e14\u77e5\u9053\u5982\u4f55\u5728\u9879\u76ee\u4e2d\u4f7f\u7528\u4e86\uff0c\u4e0b\u9762\u662f\u4e00\u4e2a\u63d2\u4ef6\u7684\u7b80\u5355\u7684\u4f7f\u7528\u65b9\u6cd5\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Demo, DemoSystem } from './tutorials/lib'\nconst game = new Game({\n  systems: [new DemoSystem()]\n})\nconst go = new GameObject()\ngo.addComponent(new Demo())\ngame.scene.addChild(go)\n")),(0,o.kt)("p",null,"\u6211\u4eec\u53ef\u4ee5\u770b\u5230\uff0c\u63d2\u4ef6\u662f\u7531 Component \u548c System \u7ec4\u6210\u7684\uff0c\u5e76\u4e14\u4e00\u4e2a\u63d2\u4ef6\u4e2d\u4e0d\u4e00\u5b9a\u53ea\u5305\u542b\u4e00\u4e2a Component\u3002"),(0,o.kt)("p",null,"\u6240\u4ee5\uff0c\u5f00\u53d1\u63d2\u4ef6\u9700\u8981\u5b9e\u73b0\u66b4\u9732\u7ed9\u7528\u6237\u4f7f\u7528\u7684 Component \u548c System\u3002"),(0,o.kt)("h3",{id:"\u63d2\u4ef6\u8fd0\u884c\u903b\u8f91"},"\u63d2\u4ef6\u8fd0\u884c\u903b\u8f91"),(0,o.kt)("p",null,"\u7ec4\u4ef6\uff08Component\uff09\u53ef\u4ee5\u8d4b\u4e88\u6e38\u620f\u5bf9\u8c61\u80fd\u529b\uff0c\u6211\u4eec\u5c06\u4e00\u4e9b\u914d\u7f6e\u548c\u5c5e\u6027\u8bb0\u5f55\u5728\u7ec4\u4ef6\u4e0a\u3002\n\u7cfb\u7edf\uff08System\uff09\u7528\u6765\u8bfb\u53d6\u7ec4\u4ef6\u4e0a\u9762\u7684\u6570\u636e\uff0c\u5b9e\u73b0\u7ec4\u4ef6\u5bf9\u5e94\u7684\u80fd\u529b\u3002"),(0,o.kt)("p",null,"\u5f53\u7cfb\u7edf\u88ab\u6dfb\u52a0\u5230\u6e38\u620f\u5b9e\u4f8b\u4e0a\u540e\uff0c\u7cfb\u7edf\u5728\u5b83\u6240\u9700\u5173\u5fc3\u7684\u7ec4\u4ef6\u5728\u6dfb\u52a0\u3001\u79fb\u9664\u3001\u5c5e\u6027\u53d8\u5316\u65f6\uff0c\u505a\u4e00\u7cfb\u5217\u5bf9\u5e94\u7684\u64cd\u4f5c\uff0c\u5373\u53ef\u5b9e\u73b0\u4e00\u4e9b\u529f\u80fd\u3002"),(0,o.kt)("p",null,"\u4f8b\u5982\u5728 Img \u63d2\u4ef6\u4e2d\uff0c\u5f53 Img \u88ab\u6dfb\u52a0\u5230\u6e38\u620f\u5bf9\u8c61\u4e0a\u65f6\uff0cSystem \u5185\u4f1a\u521b\u5efa\u4e00\u4e2a Pixi \u7684 Sprite \u5bf9\u8c61\uff0c\u6302\u8f7d\u5230 GameObject \u5bf9\u5e94\u7684 Pixi Container\u4e0a\uff0c\u5f53 Img \u7ec4\u4ef6\u7684 resource \u53d1\u751f\u53d8\u5316\u65f6\uff0cSystem \u4f1a\u53bb\u4fee\u6539\u5bf9\u5e94 Sprite \u4e0a\u9762\u7684 texture\u3002"),(0,o.kt)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4f1a\u8bb2\u89e3\u5982\u4f55\u8bbe\u8ba1\u4e00\u4e2a\u7ec4\u4ef6\uff0c\u4ee5\u53ca System \u662f\u5982\u4f55\u76d1\u542c\u7ec4\u4ef6\u53d8\u5316\u7684\u3002"),(0,o.kt)("h3",{id:"\u6784\u5efa\u4e0e\u53d1\u5e03\u89c4\u8303"},"\u6784\u5efa\u4e0e\u53d1\u5e03\u89c4\u8303"),(0,o.kt)("h2",{id:"\u5f00\u53d1\u5b9e\u8df5"},"\u5f00\u53d1\u5b9e\u8df5"),(0,o.kt)("p",null,"\u4e0b\u9762\u4ee5 ",(0,o.kt)("a",{parentName:"p",href:"a11yPlugin"},"@eva/plugin-a11y")," \u63d2\u4ef6\u4e3a\u4f8b\uff0c\u5bf9 Eva.js \u63d2\u4ef6\u5f00\u53d1\u505a\u4e00\u4e2a\u8be6\u7ec6\u7684\u4ecb\u7ecd\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"@eva/plugin-a11y \u7528\u4e8e\u4e3a\u6e38\u620f\u5bf9\u8c61\u6dfb\u52a0\u65e0\u969c\u788d\u7684\u80fd\u529b\u3002\u5728 DOM \u5f00\u53d1\u4e2d\uff0c\u65e0\u969c\u788d\u9605\u8bfb\u5668\u662f\u53ef\u4ee5\u9605\u8bfb\u5230 HTML \u5143\u7d20\u5185\u5bb9\u7684\uff0c\u76ee\u524d\u5728 Canvas \u91cc\u7684\u7ed8\u5236\u5143\u7d20\u65e0\u6cd5\u5b9e\u73b0\u65e0\u969c\u788d\u5316\u7684\u80fd\u529b\uff0c@eva/plugin-a11y \u63d2\u4ef6\u901a\u8fc7\u5b9a\u4f4d\u6e38\u620f\u5bf9\u8c61\u7684\u4f4d\u7f6e\uff0c\u81ea\u52a8\u5316\u5730\u6dfb\u52a0\u8f85\u52a9 DOM\uff0c\u4f7f\u5f97\u6e38\u620f\u5bf9\u8c61\u80fd\u88ab\u65e0\u969c\u788d\u9605\u8bfb\u5668\u805a\u7126\uff0c\u8ba9\u6e38\u620f\u62e5\u6709\u65e0\u969c\u788d\u529f\u80fd\u3002")),(0,o.kt)("p",null,"\u9996\u5148\u8bbe\u8ba1 Component\uff0c\u65e2\u9700\u8981\u8d4b\u4e88\u6e38\u620f\u5bf9\u8c61\u7684\u80fd\u529b\u3002"),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6848\u4f8b"},"\u4f7f\u7528\u6848\u4f8b"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { A11y, A11ySystem } from '@eva/plugin-a11y'\n\nconst game = new Game({\n  systems: [new A11ySystem()]\n})\n\nconst go = new GameObject()\n\ngo.addComponent(new A11y({\n  hint: '\u6240\u9700\u6717\u8bfb\u7684\u5185\u5bb9'\n}))\n\ngame.scene.addChild(go)\n\n")),(0,o.kt)("h3",{id:"component-\u8bbe\u8ba1"},"Component \u8bbe\u8ba1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u7ec4\u4ef6\u540d\u79f0: ",(0,o.kt)("inlineCode",{parentName:"li"},"A11y")," "),(0,o.kt)("li",{parentName:"ul"},"\u8bbe\u8ba1\u7ec4\u4ef6\u53c2\u6570:",(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"hint \u9700\u8981\u6717\u8bfb\u7684\u5185\u5bb9")))),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { Component } from '@eva/eva.js'\nexport default class A11y extends Component {\n  static componentName: string = 'A11y' // \u8fd9\u91cc\u662fComponent\u7684\u540d\u79f0\uff0c\u7528\u4e8e System \u76d1\u542c\u53d8\u5316\n\n  /**\n   * \u65e0\u969c\u788d\u6807\u7b7e\u6717\u8bfb\u5185\u5bb9\n   */\n  public hint: string\n\n  /**\n   * \u521d\u59cb\u5316\u65b9\u6cd5\uff0c\u6784\u9020\u51fd\u6570\u7684\u53c2\u6570\u4f1a\u4f20\u9012\u5230\u8fd9\u91cc\n   */\n  init(param = {hint: ''}) {\n    const { hint } = param\n    this.hint = hint\n  }\n}\n")),(0,o.kt)("h3",{id:"system-\u8bbe\u8ba1"},"System \u8bbe\u8ba1"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\uff0c\u4ee5\u53ca\u9700\u8981\u76d1\u542c\u54ea\u4e9b\u53c2\u6570\u7684\u53d8\u5316"),(0,o.kt)("li",{parentName:"ul"},"\u786e\u5b9a\u7cfb\u7edf\u540d\u5b57"),(0,o.kt)("li",{parentName:"ul"},"\u6839\u636e\u7ec4\u4ef6\u53d8\u5316\u5b9e\u73b0\u903b\u8f91")),(0,o.kt)("h4",{id:"step1-\u786e\u5b9a\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u4ee5\u53ca\u53c2\u6570"},"Step1 \u786e\u5b9a\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u4ee5\u53ca\u53c2\u6570"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { System, decorators } from '@eva/eva.js'\n\n@decorators.componentObserver({\n  A11y: ['hint'] // \u76d1\u542c A11y \u7ec4\u4ef6\u7684 hint \u5c5e\u6027\u53d8\u5316\n})\nclass A11ySystem extends System {\n\n}\n")),(0,o.kt)("p",null,"\u5728\u4e0a\u9762\u7684\u4ee3\u7801\u4e2d\uff0c\u6211\u4eec\u5c06\u9700\u8981\u76d1\u542c\u53d8\u5316\u7684\u7ec4\u4ef6\u540d\u79f0\u548c\u76d1\u542c\u5c5e\u6027\u4f20\u5165 ",(0,o.kt)("inlineCode",{parentName:"p"},"@decorators.componentObserver")," \u4e2d\uff0c\u4ee5\u4fbf\u521b\u5efa\u76d1\u542c\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u53ea\u9700\u8981\u76d1\u542c\u7ec4\u4ef6\u6dfb\u52a0\u79fb\u9664\u53ef\u4ee5\u4e0d\u586b\u5199\u5177\u4f53\u7684\u5c5e\u6027\uff0c\u4f8b\u5982"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@decorators.componentObserver({\n  A11y: [] // \u76d1\u542c A11y \u7ec4\u4ef6\u7684 hint \u5c5e\u6027\u53d8\u5316\n})\n")),(0,o.kt)("p",null,"\u5982\u679c\u76d1\u542c\u7684\u5c5e\u6027\u4e0d\u662f\u76f4\u63a5\u6302\u8f7d\u5230\u7ec4\u4ef6\u5bf9\u8c61\u4e0a\u7684\uff0c\u8fd8\u6709\u4e00\u7ea7\u5d4c\u5957"),(0,o.kt)("p",null,"\u4f8b\u5982\u76d1\u542c\u7ec4\u4ef6 A \u7684 style \u5c5e\u6027\u4e0b\u7684 size \u5c5e\u6027"),(0,o.kt)("p",null,"\u53ef\u4ee5\u8fd9\u6837\u5199\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@decorators.componentObserver({\n  A: [{\n    prop: ['style', 'size']\n  }]\n})\n")),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u8981\u6df1\u5ea6\u76d1\u542c style \u5c5e\u6027\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@decorators.componentObserver({\n  A: [{\n    prop: ['style'],\n    deep: true\n  }]\n})\n")),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u76d1\u542c\u591a\u4e2a\u7ec4\u4ef6\u53d8\u5316\uff0c\u53ef\u4ee5\u8fd9\u6837\u5199"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@decorators.componentObserver({\n  A: [{\n    prop: ['style'],\n    deep: true\n  }]\n  B: ['props']\n})\n")),(0,o.kt)("h4",{id:"step2-\u8bbe\u7f6e\u7cfb\u7edf\u540d\u5b57"},"Step2 \u8bbe\u7f6e\u7cfb\u7edf\u540d\u5b57"),(0,o.kt)("p",null,"\u7ed9 System \u8bbe\u7f6e\u540d\u5b57"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { System, decorators } from '@eva/eva.js'\n\n@decorators.componentObserver({\n  A11y: ['hint'] // \u76d1\u542c A11y \u7ec4\u4ef6\u7684 hint \u5c5e\u6027\u53d8\u5316\n})\nclass A11ySystem extends System {\n  static systemName = 'A11ySystem';\n}\n")),(0,o.kt)("h4",{id:"step3-\u6839\u636e\u7ec4\u4ef6\u53d8\u5316\u5b9e\u73b0\u903b\u8f91"},"Step3 \u6839\u636e\u7ec4\u4ef6\u53d8\u5316\u5b9e\u73b0\u903b\u8f91"),(0,o.kt)("p",null,"\u5728\u6b64\u4e4b\u524d\uff0c\u6211\u4eec\u505a\u4e86\u4e00\u4e9b\u76d1\u542c\u914d\u7f6e\uff0c\u90a3\u4e48\u6211\u4eec\u5982\u4f55\u62ff\u5230\u5bf9\u5e94\u7684\u53d8\u5316\u5462\uff1f"),(0,o.kt)("p",null,"\u6211\u4eec\u77e5\u9053 System \u6709 ",(0,o.kt)("inlineCode",{parentName:"p"},"update")," \u751f\u547d\u5468\u671f\uff0c\u6211\u4eec\u5728\u751f\u547d\u5468\u671f\u4e2d\u53ef\u4ee5\u83b7\u53d6\u5230\u5f53\u524d\u5e27 Component \u7684\u53d8\u5316\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"import { System, decorators, ComponentChanged } from '@eva/eva.js'\n\n@decorators.componentObserver({\n  A11y: ['hint'] // \u76d1\u542c A11y \u7ec4\u4ef6\u7684 hint \u5c5e\u6027\u53d8\u5316\n})\nclass A11ySystem extends System {\n  static systemName = 'A11ySystem';\n  private elemMap = new Map()\n  update () {\n    const changes: ComponentChanged[] = this.componentObserver.clear() // \u83b7\u53d6\u5f53\u524d\u5e27\u6240\u6709\u9700\u8981\u76d1\u542c\u7684\u7ec4\u4ef6\u5927\u53d8\u5316\uff0c\u5e76\u4e14\u8fdb\u884c\u6e05\u7406\n    for (const changed of changes) {\n        switch (changed.type) {\n          case OBSERVER_TYPE.ADD:\n            this.add(changed);\n            break;\n          case OBSERVER_TYPE.CHANGE:\n            this.change(changed)\n            break;\n          case OBSERVER_TYPE.REMOVE:\n            this.remove(changed);\n            break;\n        }\n      }\n  }\n  add(changed) {\n    if (changed.componentName === 'A11y') { // \u5982\u679c\u6709\u591a\u4e2aComponent\u7684\u8bdd\u9700\u8981\u5206\u5f00\u5904\u7406\n      const component = changed.component as A11y\n      const elem = document.createElement('div')\n      elem.setAttribute('aria-label', component.hint);\n      this.elemMap.set(component, elem)\n      document.body.append(elem) // \u6dfb\u52a0\u5230body\u4e0a\n    }\n  }\n  remove(changed) {\n    if (changed.componentName === 'A11y') { // \u5982\u679c\u6709\u591a\u4e2aComponent\u7684\u8bdd\u9700\u8981\u5206\u5f00\u5904\u7406\n      const component = changed.component as A11y\n      const elem = this.elemMap.get(component)\n      elem.remove() // \u79fb\u9664elem\n    }\n  }\n  change(changed) {\n    if (changed.componentName === 'A11y') { // \u5982\u679c\u6709\u591a\u4e2aComponent\u7684\u8bdd\u9700\u8981\u5206\u5f00\u5904\u7406\n      if (changed.prop?.prop[0] === 'hint'){ //\u5982\u679c\u6709\u591a\u4e2a\u76d1\u542c\u5c5e\u6027\u9700\u8981\u5206\u5f00\u5904\u7406\n        const component = changed.component as A11y\n        elem.setAttribute('aria-label', component.hint);\n      }\n    }\n  }\n}\n")),(0,o.kt)("p",null,"ComponentChanged \u5bf9\u5e94\u7684\u7c7b\u578b\u662f\u8fd9\u6837\u7684\uff0c\u53ef\u4ee5\u53c2\u8003\uff0c\u4e0d\u9700\u8981\u5728\u4ee3\u7801\u91cc\u5b9e\u73b0"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"export interface PureObserverProp {\n  deep: boolean;\n  prop: string[];\n}\n\nexport enum ObserverType {\n  ADD = 'ADD',\n  REMOVE = 'REMOVE',\n  CHANGE = 'CHANGE',\n}\n\nexport interface ComponentChanged {\n  type: ObserverType;\n  component: Component;\n  componentName: string;\n  prop?: PureObserverProp;\n  gameObject?: GameObject;\n  systemName?: string;\n}\n\n")),(0,o.kt)("p",null,"\u73b0\u5728\u6211\u4eec\u628aDOM\u521b\u5efa\u597d\uff0c\u5e76\u4e14\u653e\u5230\u4e86 body \u4e0a\u9762\uff0c\u6309\u7167\u80fd\u529b\u6765\u8bb2\uff0c\u6211\u4eec\u5df2\u7ecf\u5b8c\u6210\u4e86\u5177\u4f53\u7684\u529f\u80fd\uff0c\u56e0\u4e3a\u5c4f\u5e55\u9605\u8bfb\u5668\u5df2\u7ecf\u53ef\u4ee5\u9605\u8bfb\u6e38\u620f\u4e2d\u7684\u5143\u7d20\u4e86\uff0c\u4f46\u662f\u770b\u8d77\u6765\u76ee\u524d\u6b20\u7f3a\u4e00\u4e9b\u5185\u5bb9\uff0c\u4f8b\u5982\uff1a\u65e0\u6cd5\u901a\u8fc7\u89e6\u53d1 DOM \u70b9\u51fb\u4e8b\u4ef6\u6765\u89e6\u53d1\u6e38\u620f\u91cc\u9762\u7684\u70b9\u51fb\uff0cDOM \u7684\u6ca1\u6709\u5bbd\u9ad8\u548c\u5b9a\u4f4d\u3002"),(0,o.kt)("p",null,"\u5982\u679c\u60f3\u5b9e\u73b0\u8fd9\u4e9b\u529f\u80fd\uff0c\u5c31\u8981\u53bb\u5728\u5f53\u524d\u7ec4\u4ef6\u4e0b\u62ff\u5230\u522b\u7684\u7ec4\u4ef6\u53bb\u5b9e\u73b0\u529f\u80fd\u4e86\uff0c\u5982\u679c\u60f3\u89e6\u53d1\u70b9\u51fb\u4e8b\u4ef6\uff0c\u9700\u8981\u5224\u65ad ",(0,o.kt)("a",{parentName:"p",href:"interactionEvent"},"Event \u7ec4\u4ef6"),"\u662f\u5426\u5b89\u88c5\uff0c\u5982\u679c\u5b89\u88c5\u7684\u8bdd\uff0c\u53ef\u4ee5\u6839\u636e Event \u4e0a\u7ed1\u5b9a\u7684\u4e8b\u4ef6\uff0c\u89e6\u53d1\u5bf9\u5e94\u7684\u4e8b\u4ef6\u3002\u5982\u679c\u60f3\u83b7\u53d6\u5bbd\u9ad8\u4f4d\u7f6e\u7684\u8bdd\uff0c\u53ef\u4ee5\u83b7\u53d6\u6e38\u620f\u5bf9\u8c61\u7684 ",(0,o.kt)("a",{parentName:"p",href:"transformComponent"},"Transform \u7ec4\u4ef6")),(0,o.kt)("p",null,"\u589e\u52a0 Event \u7ec4\u4ef6\u7684\u76d1\u542c\uff0c\u5728\u4e0a\u8ff0 add remove \u7b49\u65b9\u6cd5\u91cc\u505a\u5bf9\u5e94\u64cd\u4f5c\u5373\u53ef\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"@decorators.componentObserver({\n  A11y: ['hint'] // \u76d1\u542c A11y \u7ec4\u4ef6\u7684 hint \u5c5e\u6027\u53d8\u5316\n  Event: [] // Event \u589e\u52a0\u5220\u9664\u76d1\u542c\n})\nclass A11ySystem extends System {\n}\n")),(0,o.kt)("p",null,"\u5bf9\u4e8e\u4f4d\u7f6e\u548c\u5bbd\u9ad8\uff0c\u53ef\u4ee5\u5728 A11y \u7ec4\u4ef6\u88ab\u6dfb\u52a0\u65f6\u62ff\u5230\u5bf9\u5e94 GameObject \u7684 Transform\uff0c\u8fd9\u91cc\u4ec5\u4e3e\u4e2a\u4f8b\u5b50"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"add(changed) {\n   if (changed.componentName === 'A11y') { // \u5982\u679c\u6709\u591a\u4e2aComponent\u7684\u8bdd\u9700\u8981\u5206\u5f00\u5904\u7406\n      const component = changed.component as A11y\n      const elem = document.createElement('div')\n      elem.setAttribute('aria-label', component.hint);\n      this.elemMap.set(component, elem)\n      document.body.append(elem) // \u6dfb\u52a0\u5230body\u4e0a\n\n\n      const transform = changed.gameObject.transform\n      elem.style.width = transform.size.width + 'px'\n      elem.style.height = transform.size.width + 'px'\n      elem.style.x = transform.position.x + 'px'\n      elem.style.y = transform.position.y + 'px'\n    }\n}\n")),(0,o.kt)("h2",{id:"\u57fa\u4e8e-pixijs-\u7684\u63d2\u4ef6"},"\u57fa\u4e8e PixiJS \u7684\u63d2\u4ef6"),(0,o.kt)("p",null,"\u4ee5\u56fe\u7247\u7ec4\u4ef6\u4e3e\u4f8b\uff1a"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js"},"  import {\n    GameObject,\n    decorators,\n    resource,\n    ComponentChanged,\n    RESOURCE_TYPE,\n    OBSERVER_TYPE,\n  } from '@eva/eva.js';\n  import {\n    RendererManager,\n    ContainerManager,\n    RendererSystem,\n    Renderer,\n  } from '@eva/plugin-renderer';\n\n  @decorators.componentObserver({\n    Img: [{prop: ['resource'], deep: false}],\n  })\n  export default class Img extends Renderer { // \u57fa\u4e8e PixiJS \u6e32\u67d3\u7684\u63d2\u4ef6\uff0c\u6211\u4eec\u7684 System \u9700\u8981\u7ee7\u627f\u4e8e\u7edf\u4e00\u7684\u4e00\u4e2a Renderer \u7c7b\n  rendererSystem: RendererSystem;\n  init() { // \u5728init\u4e2d\u53bb\u83b7\u53d6 rendererSystem \u4ee5\u4fbf\u540e\u7eed\u6dfb\u52a0 Pixi \u5bf9\u8c61\uff0c\u5e76\u4e14\u9700\u8981\u5c06\u5f53\u524d\u7cfb\u7edf\u6ce8\u518c\u5230rendererManager\u4e2d\u3002\n    this.rendererSystem = this.game.getSystem(RendererSystem) as RendererSystem;\n    this.rendererSystem.rendererManager.register(this);\n  }\n  rendererUpdate(gameObject: GameObject) { // rendererUpdate \u4ee3\u66ff Update \u65b9\u6cd5\uff0c\u56e0\u4e3aupdate\u5728 Renderer \u7c7b\u4e2d\u5df2\u7ecf\u5b9e\u73b0\n    const {width, height} = gameObject.transform.size;\n    if (this.imgs[gameObject.id]) {\n      this.imgs[gameObject.id].sprite.width = width;\n      this.imgs[gameObject.id].sprite.height = height;\n    }\n  }\n\n  async componentChanged(changed: ComponentChanged) { // \u5728 Renderer \u7c7b\u4e2d\u5b9e\u73b0\u4e86 update \u65b9\u6cd5\uff0c\u5e76\u4e14\u5c06 Img \u5bf9\u5e94\u7684\u7ec4\u4ef6\u53d8\u5316\u4f20\u9012\u7ed9 componentChanged\n  if (changed.componentName === 'Img') {\n      const component: ImgComponent = changed.component as ImgComponent;\n      if (changed.type === OBSERVER_TYPE.ADD) {\n        const sprite = new Sprite(null);\n        resource.getResource(component.resource).then(({instance}) => {\n          if (!instance) {\n            console.error(\n              `GameObject:${changed.gameObject.name}'s Img resource load error`,\n            );\n          }\n          sprite.image = instance;\n        });\n        this.imgs[changed.gameObject.id] = sprite;\n        this.containerManager\n          .getContainer(changed.gameObject.id)\n          .addChildAt(sprite.sprite, 0); // \u5c06\u521b\u5efa\u7684 Pixi \u6e32\u67d3\u5bf9\u8c61\u653e\u8fdb GameObject \u5bf9\u5e94\u7684 Pixi \u5bb9\u5668\u4e2d\n      } else if (changed.type === OBSERVER_TYPE.CHANGE) {\n        const {instance} = await resource.getResource(component.resource);\n        if (!instance) {\n          console.error(\n            `GameObject:${changed.gameObject.name}'s Img resource load error`,\n          );\n        }\n        this.imgs[changed.gameObject.id].image = instance;\n      } else if (changed.type === OBSERVER_TYPE.REMOVE) {\n        const sprite = this.imgs[changed.gameObject.id];\n        this.containerManager\n          .getContainer(changed.gameObject.id)\n          .removeChild(sprite.sprite);\n        delete this.imgs[changed.gameObject.id];\n      }\n    }\n  }\n\n")),(0,o.kt)("h2",{id:"\u751f\u547d\u5468\u671f"},"\u751f\u547d\u5468\u671f"),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"https://img.alicdn.com/imgextra/i2/O1CN01gEgYOz1T8qevGDloU_!!6000000002338-2-tps-1448-906.png",alt:"image.png"})),(0,o.kt)("h2",{id:"\u603b\u7ed3"},"\u603b\u7ed3"),(0,o.kt)("p",null,"\u901a\u8fc7 Component \u548c System \u7684\u7ed3\u5408\uff0c\u6211\u4eec\u53ef\u4ee5\u5b9e\u73b0\u5404\u79cd\u5404\u6837\u7684\u901a\u7528\u63d2\u4ef6\uff0c\u5728\u65e5\u5e38\u5f00\u53d1\u4e2d\uff0c\u6211\u4eec\u4ec5\u9700\u8981 ",(0,o.kt)("a",{parentName:"p",href:"customComponent"},"CustomComponent")," \u63d0\u4f9b\u7684\u80fd\u529b\u5f00\u53d1\u6e38\u620f\u903b\u8f91\u5373\u53ef\u3002"))}d.isMDXComponent=!0}}]);