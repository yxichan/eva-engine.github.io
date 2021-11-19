"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[33707],{3905:function(e,t,n){n.d(t,{kt:function(){return d}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),d=c(n),v=a,s=d["".concat(p,".").concat(v)]||d[v]||u[v]||o;return n?r.createElement(s,l(l({ref:t},m),{},{components:n})):r.createElement(s,l({ref:t},m))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:a,l[1]=i;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},65363:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return i},contentTitle:function(){return p},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var r=n(87462),a=n(63366),o=(n(67294),n(3905)),l=["components"],i={},p=void 0,c={unversionedId:"api/plugin-renderer-event.event_2.once",id:"api/plugin-renderer-event.event_2.once",isDocsHomePage:!1,title:"plugin-renderer-event.event_2.once",description:"Home &gt; @eva/plugin-renderer-event &gt; Event\\2 &gt; once",source:"@site/docs/api/plugin-renderer-event.event_2.once.md",sourceDirName:"api",slug:"/api/plugin-renderer-event.event_2.once",permalink:"/docs/api/plugin-renderer-event.event_2.once",editUrl:"https://github.com/eva-engine/eva-engine.github.io/tree/master/docs/api/plugin-renderer-event.event_2.once.md",tags:[],version:"current",frontMatter:{}},u=[{value:"Event_2.once() method",id:"event_2once-method",children:[],level:2},{value:"Parameters",id:"parameters",children:[],level:2}],m={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"/docs/api/index"},"Home")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugin-renderer-event"},"@eva/plugin-renderer-event")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugin-renderer-event.event_2"},"Event","_","2")," ",">"," ",(0,o.kt)("a",{parentName:"p",href:"/docs/api/plugin-renderer-event.event_2.once"},"once")),(0,o.kt)("h2",{id:"event_2once-method"},"Event","_","2.once() method"),(0,o.kt)("b",null,"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-typescript"},"once(eventName: TouchEventName, fn: (arg: EventParam) => void, context?: any): this;\n")),(0,o.kt)("h2",{id:"parameters"},"Parameters"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Parameter"),(0,o.kt)("th",{parentName:"tr",align:null},"Type"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"eventName"),(0,o.kt)("td",{parentName:"tr",align:null},"TouchEventName"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"fn"),(0,o.kt)("td",{parentName:"tr",align:null},"(arg: EventParam) =",">"," void"),(0,o.kt)("td",{parentName:"tr",align:null})),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},"context"),(0,o.kt)("td",{parentName:"tr",align:null},"any"),(0,o.kt)("td",{parentName:"tr",align:null})))),(0,o.kt)("b",null,"Returns:"),(0,o.kt)("p",null,"this"))}d.isMDXComponent=!0}}]);