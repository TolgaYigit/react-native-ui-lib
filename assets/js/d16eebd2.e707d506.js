/*! For license information please see d16eebd2.e707d506.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[8891],{3905:(e,t,n)=>{n.d(t,{Zo:()=>s,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),u=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(n),m=o,f=p["".concat(c,".").concat(m)]||p[m]||d[m]||i;return n?r.createElement(f,a(a({ref:t},s),{},{components:n})):r.createElement(f,a({ref:t},s))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[p]="string"==typeof e?e:o,a[1]=l;for(var u=2;u<i;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},7321:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var r=n(7462),o=(n(7378),n(3905));const i={id:"SegmentedControl",title:"SegmentedControl",sidebar_label:"SegmentedControl"},a=void 0,l={unversionedId:"components/form/SegmentedControl",id:"components/form/SegmentedControl",isDocsHomePage:!1,title:"SegmentedControl",description:"SegmentedControl component for toggling two values or more",source:"@site/../docs/components/form/SegmentedControl.md",sourceDirName:"components/form",slug:"/components/form/SegmentedControl",permalink:"/react-native-ui-lib/docs/components/form/SegmentedControl",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/form/SegmentedControl.md",tags:[],version:"current",frontMatter:{id:"SegmentedControl",title:"SegmentedControl",sidebar_label:"SegmentedControl"},sidebar:"tutorialSidebar",previous:{title:"SectionsWheelPicker",permalink:"/react-native-ui-lib/docs/components/form/SectionsWheelPicker"},next:{title:"Stepper",permalink:"/react-native-ui-lib/docs/components/form/Stepper"}},c=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"activeBackgroundColor",id:"activebackgroundcolor",children:[]},{value:"activeColor",id:"activecolor",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"iconOnRight",id:"icononright",children:[]},{value:"initialIndex",id:"initialindex",children:[]},{value:"onChangeIndex",id:"onchangeindex",children:[]},{value:"outlineColor",id:"outlinecolor",children:[]},{value:"outlineWidth",id:"outlinewidth",children:[]},{value:"segments",id:"segments",children:[]},{value:"segmentsStyle",id:"segmentsstyle",children:[]},{value:"style",id:"style",children:[]},{value:"testID",id:"testid",children:[]},{value:"throttleTime",id:"throttletime",children:[]}]}],u={toc:c},s="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(s,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,"SegmentedControl component for toggling two values or more",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/SegmentedControlScreen.tsx"},"(code example)")),(0,o.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}}),(0,o.kt)("h3",{id:"usage"},"Usage"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"<SegmentedControl segments={[{label: '1st'}, {label: '2nd'}]}/>\n")),(0,o.kt)("h2",{id:"api"},"API"),(0,o.kt)("h3",{id:"activebackgroundcolor"},"activeBackgroundColor"),(0,o.kt)("p",null,"The background color of the active segment",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"activecolor"},"activeColor"),(0,o.kt)("p",null,"The color of the active segment label",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,o.kt)("p",null,"The background color of the inactive segments",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"borderradius"},"borderRadius"),(0,o.kt)("p",null,"The segmentedControl borderRadius",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,o.kt)("p",null,"Additional spacing styles for the container",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"icononright"},"iconOnRight"),(0,o.kt)("p",null,"Should the icon be on right of the label",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,o.kt)("h3",{id:"initialindex"},"initialIndex"),(0,o.kt)("p",null,"Initial index to be active",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"onchangeindex"},"onChangeIndex"),(0,o.kt)("p",null,"Callback for when index has change.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"(index: number) => void ")," "),(0,o.kt)("h3",{id:"outlinecolor"},"outlineColor"),(0,o.kt)("p",null,"The color of the active segment outline",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"outlinewidth"},"outlineWidth"),(0,o.kt)("p",null,"The width of the active segment outline",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,o.kt)("h3",{id:"segments"},"segments"),(0,o.kt)("p",null,"Array on segments",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"SegmentedControlItemProps ")," "),(0,o.kt)("h3",{id:"segmentsstyle"},"segmentsStyle"),(0,o.kt)("p",null,"Additional style for the segments",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"style"},"style"),(0,o.kt)("p",null,"Custom style to inner container",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,o.kt)("h3",{id:"testid"},"testID"),(0,o.kt)("p",null,"Component test id",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,o.kt)("h3",{id:"throttletime"},"throttleTime"),(0,o.kt)("p",null,"Trailing throttle time of changing index in ms.",(0,o.kt)("br",{parentName:"p"}),"\n",(0,o.kt)("inlineCode",{parentName:"p"},"number ")))}p.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),o=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),s=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var f={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},h=Object.assign,b={};function y(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}function g(){}function k(e,t,n){this.props=e,this.context=t,this.refs=b,this.updater=n||f}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},g.prototype=y.prototype;var v=k.prototype=new g;v.constructor=k,h(v,y.prototype),v.isPureReactComponent=!0;var S=Array.isArray,C=Object.prototype.hasOwnProperty,w={current:null},N={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var o,i={},a=null,l=null;if(null!=t)for(o in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,o)&&!N.hasOwnProperty(o)&&(i[o]=t[o]);var c=arguments.length-2;if(1===c)i.children=r;else if(1<c){for(var u=Array(c),s=0;s<c;s++)u[s]=arguments[s+2];i.children=u}if(e&&e.defaultProps)for(o in c=e.defaultProps)void 0===i[o]&&(i[o]=c[o]);return{$$typeof:n,type:e,key:a,ref:l,props:i,_owner:w.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var j=/\/+/g;function _(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function P(e,t,o,i,a){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var c=!1;if(null===e)c=!0;else switch(l){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case n:case r:c=!0}}if(c)return a=a(c=e),e=""===i?"."+_(c,0):i,S(a)?(o="",null!=e&&(o=e.replace(j,"$&/")+"/"),P(a,t,o,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,o+(!a.key||c&&c.key===a.key?"":(""+a.key).replace(j,"$&/")+"/")+e)),t.push(a)),1;if(c=0,i=""===i?".":i+":",S(e))for(var u=0;u<e.length;u++){var s=i+_(l=e[u],u);c+=P(l,t,o,s,a)}else if(s=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof s)for(e=s.call(e),u=0;!(l=e.next()).done;)c+=P(l=l.value,t,o,s=i+_(l,u++),a);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return c}function T(e,t,n){if(null==e)return e;var r=[],o=0;return P(e,r,"","",(function(e){return t.call(n,e,o++)})),r}function I(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var D={current:null},E={transition:null}},7378:(e,t,n)=>{n(1535)}}]);