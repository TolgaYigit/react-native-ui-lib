/*! For license information please see 2bfda104.9f812d01.js.LICENSE.txt */
"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[7538],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>h});var r=n(7294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=i,h=u["".concat(l,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(h,a(a({ref:t},c),{},{components:n})):r.createElement(h,a({ref:t},c))}));function h(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},2507:(e,t,n)=>{n.r(t),n.d(t,{contentTitle:()=>a,default:()=>u,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var r=n(7462),i=(n(7378),n(3905));const o={id:"Chip",title:"Chip",sidebar_label:"Chip"},a=void 0,s={unversionedId:"components/controls/Chip",id:"components/controls/Chip",isDocsHomePage:!1,title:"Chip",description:"Chip component",source:"@site/../docs/components/controls/Chip.md",sourceDirName:"components/controls",slug:"/components/controls/Chip",permalink:"/react-native-ui-lib/docs/components/controls/Chip",editUrl:"https://github.com/facebook/docusaurus/edit/main/website/../docs/components/controls/Chip.md",tags:[],version:"current",frontMatter:{id:"Chip",title:"Chip",sidebar_label:"Chip"},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/react-native-ui-lib/docs/components/controls/Checkbox"},next:{title:"RadioButton",permalink:"/react-native-ui-lib/docs/components/controls/RadioButton"}},l=[{value:"Usage",id:"usage",children:[]},{value:"API",id:"api",children:[{value:"avatarProps",id:"avatarprops",children:[]},{value:"backgroundColor",id:"backgroundcolor",children:[]},{value:"badgeProps",id:"badgeprops",children:[]},{value:"borderRadius",id:"borderradius",children:[]},{value:"containerStyle",id:"containerstyle",children:[]},{value:"dismissColor",id:"dismisscolor",children:[]},{value:"dismissContainerStyle",id:"dismisscontainerstyle",children:[]},{value:"dismissIcon",id:"dismissicon",children:[]},{value:"dismissIconStyle",id:"dismissiconstyle",children:[]},{value:"iconProps",id:"iconprops",children:[]},{value:"iconSource",id:"iconsource",children:[]},{value:"iconStyle",id:"iconstyle",children:[]},{value:"label",id:"label",children:[]},{value:"labelStyle",id:"labelstyle",children:[]},{value:"leftElement",id:"leftelement",children:[]},{value:"onDismiss",id:"ondismiss",children:[]},{value:"onPress",id:"onpress",children:[]},{value:"resetSpacings",id:"resetspacings",children:[]},{value:"rightElement",id:"rightelement",children:[]},{value:"rightIconSource",id:"righticonsource",children:[]},{value:"size",id:"size",children:[]},{value:"testID",id:"testid",children:[]},{value:"useCounter",id:"usecounter",children:[]},{value:"useSizeAsMinimum",id:"usesizeasminimum",children:[]}]}],p={toc:l},c="wrapper";function u(e){let{components:t,...n}=e;return(0,i.kt)(c,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("p",null,"Chip component",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/ChipScreen.tsx"},"(code example)")),(0,i.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"This component extends ",(0,i.kt)("strong",{parentName:"p"},(0,i.kt)("a",{parentName:"strong",href:"https://github.com/wix/react-native-ui-lib/blob/master/src/components/touchableOpacity/index.tsx,https://github.com/wix/react-native-ui-lib/blob/master/src/components/view/index.tsx"},"TouchableOpacity, View"))," props."))),(0,i.kt)("div",{style:{display:"flex",flexDirection:"row",overflowX:"auto",maxHeight:"500px",alignItems:"center"}},(0,i.kt)("img",{style:{maxHeight:"420px"},src:"https://user-images.githubusercontent.com/1780255/119636022-e9743180-be1c-11eb-8f02-22eeab6558cd.png"})),(0,i.kt)("h3",{id:"usage"},"Usage"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre"},"<Chip label={'Chip'} onPress={() => console.log('pressed')}/>\n")),(0,i.kt)("h2",{id:"api"},"API"),(0,i.kt)("h3",{id:"avatarprops"},"avatarProps"),(0,i.kt)("p",null,"Avatar props object",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"AvatarProps ")," "),(0,i.kt)("h3",{id:"backgroundcolor"},"backgroundColor"),(0,i.kt)("p",null,"Background color",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"badgeprops"},"badgeProps"),(0,i.kt)("p",null,"Badge props object",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"BadgeProps ")," "),(0,i.kt)("h3",{id:"borderradius"},"borderRadius"),(0,i.kt)("p",null,"Border radius",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number ")," "),(0,i.kt)("h3",{id:"containerstyle"},"containerStyle"),(0,i.kt)("p",null,"Component's container style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ViewStyle ")," "),(0,i.kt)("h3",{id:"dismisscolor"},"dismissColor"),(0,i.kt)("p",null,"Dismiss color",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"dismisscontainerstyle"},"dismissContainerStyle"),(0,i.kt)("p",null,"Dismiss container style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,i.kt)("h3",{id:"dismissicon"},"dismissIcon"),(0,i.kt)("p",null,"Dismiss asset",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,i.kt)("h3",{id:"dismissiconstyle"},"dismissIconStyle"),(0,i.kt)("p",null,"Dismiss style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,i.kt)("h3",{id:"iconprops"},"iconProps"),(0,i.kt)("p",null,"Additional icon props",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"Omit<ImageProps, 'source'> ")," "),(0,i.kt)("h3",{id:"iconsource"},"iconSource"),(0,i.kt)("p",null,"Left icon's source",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,i.kt)("h3",{id:"iconstyle"},"iconStyle"),(0,i.kt)("p",null,"Icon style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageStyle ")," "),(0,i.kt)("h3",{id:"label"},"label"),(0,i.kt)("p",null,"Main Chip text",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"labelstyle"},"labelStyle"),(0,i.kt)("p",null,"Label's style",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"TextStyle ")," "),(0,i.kt)("h3",{id:"leftelement"},"leftElement"),(0,i.kt)("p",null,"Left custom element",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,i.kt)("h3",{id:"ondismiss"},"onDismiss"),(0,i.kt)("p",null,"Adds a dismiss button and serves as its callback",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(props: any) => void ")," "),(0,i.kt)("h3",{id:"onpress"},"onPress"),(0,i.kt)("p",null,"On Chip press callback",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"(props: any) => void ")," "),(0,i.kt)("h3",{id:"resetspacings"},"resetSpacings"),(0,i.kt)("p",null,"Disables all internal elements default spacings. Helps reach a custom design",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"rightelement"},"rightElement"),(0,i.kt)("p",null,"Right custom element",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"JSX.Element ")," "),(0,i.kt)("h3",{id:"righticonsource"},"rightIconSource"),(0,i.kt)("p",null,"Right icon's source",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"ImageSourcePropType ")," "),(0,i.kt)("h3",{id:"size"},"size"),(0,i.kt)("p",null,"Chip's size. Number or a width and height object",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"number | {{width: number, height: number}} ")," "),(0,i.kt)("h3",{id:"testid"},"testID"),(0,i.kt)("p",null,"The test id for e2e tests",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"string ")," "),(0,i.kt)("h3",{id:"usecounter"},"useCounter"),(0,i.kt)("p",null,"Display badge as counter (no background)",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")," "),(0,i.kt)("h3",{id:"usesizeasminimum"},"useSizeAsMinimum"),(0,i.kt)("p",null,"Uses size as minWidth and minHeight",(0,i.kt)("br",{parentName:"p"}),"\n",(0,i.kt)("inlineCode",{parentName:"p"},"boolean ")))}u.isMDXComponent=!0},1535:(e,t)=>{var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),i=Symbol.for("react.fragment"),o=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),s=Symbol.for("react.provider"),l=Symbol.for("react.context"),p=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),u=Symbol.for("react.memo"),d=Symbol.for("react.lazy"),m=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b=Object.assign,f={};function k(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}function y(){}function v(e,t,n){this.props=e,this.context=t,this.refs=f,this.updater=n||h}k.prototype.isReactComponent={},k.prototype.setState=function(e,t){if("object"!=typeof e&&"function"!=typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},k.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},y.prototype=k.prototype;var g=v.prototype=new y;g.constructor=v,b(g,k.prototype),g.isPureReactComponent=!0;var N=Array.isArray,C=Object.prototype.hasOwnProperty,S={current:null},w={key:!0,ref:!0,__self:!0,__source:!0};function O(e,t,r){var i,o={},a=null,s=null;if(null!=t)for(i in void 0!==t.ref&&(s=t.ref),void 0!==t.key&&(a=""+t.key),t)C.call(t,i)&&!w.hasOwnProperty(i)&&(o[i]=t[i]);var l=arguments.length-2;if(1===l)o.children=r;else if(1<l){for(var p=Array(l),c=0;c<l;c++)p[c]=arguments[c+2];o.children=p}if(e&&e.defaultProps)for(i in l=e.defaultProps)void 0===o[i]&&(o[i]=l[i]);return{$$typeof:n,type:e,key:a,ref:s,props:o,_owner:S.current}}function x(e){return"object"==typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function j(e,t){return"object"==typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,(function(e){return t[e]}))}(""+e.key):t.toString(36)}function _(e,t,i,o,a){var s=typeof e;"undefined"!==s&&"boolean"!==s||(e=null);var l=!1;if(null===e)l=!0;else switch(s){case"string":case"number":l=!0;break;case"object":switch(e.$$typeof){case n:case r:l=!0}}if(l)return a=a(l=e),e=""===o?"."+j(l,0):o,N(a)?(i="",null!=e&&(i=e.replace(P,"$&/")+"/"),_(a,t,i,"",(function(e){return e}))):null!=a&&(x(a)&&(a=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(a,i+(!a.key||l&&l.key===a.key?"":(""+a.key).replace(P,"$&/")+"/")+e)),t.push(a)),1;if(l=0,o=""===o?".":o+":",N(e))for(var p=0;p<e.length;p++){var c=o+j(s=e[p],p);l+=_(s,t,i,c,a)}else if(c=function(e){return null===e||"object"!=typeof e?null:"function"==typeof(e=m&&e[m]||e["@@iterator"])?e:null}(e),"function"==typeof c)for(e=c.call(e),p=0;!(s=e.next()).done;)l+=_(s=s.value,t,i,c=o+j(s,p++),a);else if("object"===s)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return l}function I(e,t,n){if(null==e)return e;var r=[],i=0;return _(e,r,"","",(function(e){return t.call(n,e,i++)})),r}function D(e){if(-1===e._status){var t=e._result;(t=t()).then((function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)}),(function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)})),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var E={current:null},T={transition:null}},7378:(e,t,n)=>{n(1535)}}]);