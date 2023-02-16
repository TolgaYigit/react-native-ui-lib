/*! For license information please see af54067f.7bcbd51b.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[4311],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),d=p(n),f=a,m=d["".concat(l,".").concat(f)]||d[f]||u[f]||o;return n?r.createElement(m,i(i({ref:t},s),{},{components:n})):r.createElement(m,i({ref:t},s))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8840:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>i,default:()=>s,frontMatter:()=>o,metadata:()=>c,toc:()=>l});var r=n(7462),a=(n(7378),n(3905));const o={id:"AnimatedScanner",title:"AnimatedScanner",sidebar_label:"AnimatedScanner"},i=void 0,c={unversionedId:"components/media/AnimatedScanner",id:"components/media/AnimatedScanner",isDocsHomePage:!1,title:"AnimatedScanner",description:"description",source:"@site/../docs/components/media/AnimatedScanner.md",sourceDirName:"components/media",slug:"/components/media/AnimatedScanner",permalink:"/react-native-ui-lib/docs/components/media/AnimatedScanner",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/media/AnimatedScanner.md",tags:[],version:"current",frontMatter:{id:"AnimatedScanner",title:"AnimatedScanner",sidebar_label:"AnimatedScanner"},sidebar:"tutorialSidebar",previous:{title:"AnimatedImage",permalink:"/react-native-ui-lib/docs/components/media/AnimatedImage"},next:{title:"Avatar",permalink:"/react-native-ui-lib/docs/components/media/Avatar"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"duration",id:"duration",children:[]},{value:"hideScannerLine",id:"hidescannerline",children:[]},{value:"onBreakpoint",id:"onbreakpoint",children:[]},{value:"opacity",id:"opacity",children:[]},{value:"progress",id:"progress",children:[]},{value:"testID",id:"testid",children:[]}]}],p={toc:l};function s(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"description",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/CardScannerScreen.js"},"(code example)")),(0,a.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"This component extends ",(0,a.kt)("strong",{parentName:"p"},(0,a.kt)("a",{parentName:"strong",href:"https://reactnative.dev/docs/animated"},"Animated.View"))," props."))),(0,a.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,a.kt)("img",{style:{maxHeight:"420px"},src:"https://media.giphy.com/media/l49JVcxoclUXbryiA/giphy.gif"})),(0,a.kt)("h3",{id:"usage"},"Usage"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre"},"<AnimatedScanner progress={55} duration={1600}/>\n")),(0,a.kt)("h2",{id:"api"},"API"),(0,a.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,a.kt)("p",null,"Background color",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,a.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,a.kt)("p",null,"Component's container style",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,a.kt)("h3",{id:"duration"},"duration"),(0,a.kt)("p",null,"Duration of current break (can be change between breaks)",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"hidescannerline"},"hideScannerLine"),(0,a.kt)("p",null,"Whether to hide the scanner line",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,a.kt)("h3",{id:"onbreakpoint"},"onBreakpoint"),(0,a.kt)("p",null,"Breakpoint callback",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"({progress, isDone}) => void ")," "),(0,a.kt)("h3",{id:"opacity"},"opacity"),(0,a.kt)("p",null,"Opacity",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"progress"},"progress"),(0,a.kt)("p",null,"Animated value between 0 and 100",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,a.kt)("h3",{id:"testid"},"testID"),(0,a.kt)("p",null,"Used as a testing identifier",(0,a.kt)("br",{parentName:"p"}),"\n",(0,a.kt)("inlineCode",{parentName:"p"},"string ")))}s.isMDXComponent=!0},2525:e=>{var t=Object.getOwnPropertySymbols,n=Object.prototype.hasOwnProperty,r=Object.prototype.propertyIsEnumerable;function a(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}e.exports=function(){try{if(!Object.assign)return!1;var e=new String("abc");if(e[5]="de","5"===Object.getOwnPropertyNames(e)[0])return!1;for(var t={},n=0;n<10;n++)t["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(t).map((function(e){return t[e]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(e){r[e]=e})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(a){return!1}}()?Object.assign:function(e,o){for(var i,c,l=a(e),p=1;p<arguments.length;p++){for(var s in i=Object(arguments[p]))n.call(i,s)&&(l[s]=i[s]);if(t){c=t(i);for(var u=0;u<c.length;u++)r.call(i,c[u])&&(l[c[u]]=i[c[u]])}}return l}},1535:(e,t,n)=>{var r=n(2525),a=60103,o=60106;var i=60109,c=60110,l=60112;var p=60115,s=60116;if("function"==typeof Symbol&&Symbol.for){var u=Symbol.for;a=u("react.element"),o=u("react.portal"),u("react.fragment"),u("react.strict_mode"),u("react.profiler"),i=u("react.provider"),c=u("react.context"),l=u("react.forward_ref"),u("react.suspense"),p=u("react.memo"),s=u("react.lazy")}var d="function"==typeof Symbol&&Symbol.iterator;function f(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var m={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},y={};function b(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}function h(){}function v(e,t,n){this.props=e,this.context=t,this.refs=y,this.updater=n||m}b.prototype.isReactComponent={},b.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error(f(85));this.updater.enqueueSetState(this,e,t,"setState")},b.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},h.prototype=b.prototype;var k=v.prototype=new h;k.constructor=v,r(k,b.prototype),k.isPureReactComponent=!0;var g={current:null},w=Object.prototype.hasOwnProperty,O={key:!0,ref:!0,__self:!0,__source:!0};function j(e,t,n){var r,o={},i=null,c=null;if(null!=t)for(r in void 0!==t.ref&&(c=t.ref),void 0!==t.key&&(i=""+t.key),t)w.call(t,r)&&!O.hasOwnProperty(r)&&(o[r]=t[r]);var l=arguments.length-2;if(1===l)o.children=n;else if(1<l){for(var p=Array(l),s=0;s<l;s++)p[s]=arguments[s+2];o.children=p}if(e&&e.defaultProps)for(r in l=e.defaultProps)void 0===o[r]&&(o[r]=l[r]);return{$$typeof:a,type:e,key:i,ref:c,props:o,_owner:g.current}}function S(e){return"object"==typeof e&&null!==e&&e.$$typeof===a}var N=/\/+/g;function A(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function x(e,t,n,r,i){var c=typeof e;"undefined"!==c&&"boolean"!==c||(e=null);var l=!1;if(null===e)l=!0;else switch(c){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case a:case o:l=!0}}if(l)return i=i(l=e),e=""===r?"."+A(l,0):r,Array.isArray(i)?(n="",null!=e&&(n=e.replace(N,"$&/")+"/"),x(i,t,n,"",(function(e){return e}))):null!=i&&(S(i)&&(i=function(e,t){return{$$typeof:a,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(i,n+(!i.key||l&&l.key===i.key?"":(""+i.key).replace(N,"$&/")+"/")+e)),t.push(i)),1;if(l=0,r=""===r?".":r+":",Array.isArray(e))for(var p=0;p<e.length;p++){var s=r+A(c=e[p],p);l+=x(c,t,n,s,i)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=d&&e[d]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),p=0;!(c=e.next()).done;)l+=x(c=c.value,t,n,s=r+A(c,p++),i);else if("object"===c)throw t=""+e,Error(f(31,"[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t));return l}function _(e,t,n){if(null==e)return e;var r=[],a=0;return x(e,r,"","",(function(e){return t.call(n,e,a++)})),r}function C(e){if(-1===e._status){var t=e._result;t=t(),e._status=0,e._result=t,t.then((function(t){0===e._status&&(t=t.default,e._status=1,e._result=t)}),(function(t){0===e._status&&(e._status=2,e._result=t)}))}if(1===e._status)return e._result;throw e._result}var P={current:null};function E(){var e=P.current;if(null===e)throw Error(f(321));return e}},7378:(e,t,n)=>{n(1535)}}]);