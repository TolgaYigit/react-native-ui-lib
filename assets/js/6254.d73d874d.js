"use strict";(self.webpackChunkuilib_docs=self.webpackChunkuilib_docs||[]).push([[6254],{830:(e,t,n)=>{n.d(t,{W:()=>r});var a=n(7294);function r(){return a.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20"},a.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}},8617:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294);const r="iconExternalLink_wgqa",l=e=>{let{width:t=13.5,height:n=13.5}=e;return a.createElement("svg",{width:t,height:n,"aria-hidden":"true",viewBox:"0 0 24 24",className:r},a.createElement("path",{fill:"currentColor",d:"M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"}))}},6254:(e,t,n)=>{n.d(t,{Z:()=>Ee});var a=n(7294),r=n(6010),l=n(6550),o=n(4973),c=n(941);const s="skipToContent_OuoZ";function i(e){e.setAttribute("tabindex","-1"),e.focus(),e.removeAttribute("tabindex")}const m=function(){const e=(0,a.useRef)(null),{action:t}=(0,l.k6)();return(0,c.SL)((n=>{let{location:a}=n;e.current&&!a.hash&&"PUSH"===t&&i(e.current)})),a.createElement("div",{ref:e},a.createElement("a",{href:"#",className:s,onClick:e=>{e.preventDefault();const t=document.querySelector("main:first-of-type")||document.querySelector(".main-wrapper");t&&i(t)}},a.createElement(o.Z,{id:"theme.common.skipToMainContent",description:"The skip to content label used for accessibility, allowing to rapidly navigate to main content with keyboard tab/enter navigation"},"Skip to main content")))};var u=n(7462);function d(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 24 24",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"}))}const h="announcementBar_axC9",f="announcementBarPlaceholder_xYHE",b="announcementBarClose_A3A1",v="announcementBarContent_6uhP";const g=function(){const{isClosed:e,close:t}=(0,c.nT)(),{announcementBar:n}=(0,c.LU)();if(!n)return null;const{content:l,backgroundColor:s,textColor:i,isCloseable:m}=n;return!l||m&&e?null:a.createElement("div",{className:h,style:{backgroundColor:s,color:i},role:"banner"},m&&a.createElement("div",{className:f}),a.createElement("div",{className:v,dangerouslySetInnerHTML:{__html:l}}),m?a.createElement("button",{type:"button",className:(0,r.Z)("clean-btn close",b),onClick:t,"aria-label":(0,o.I)({id:"theme.AnnouncementBar.closeButtonAriaLabel",message:"Close",description:"The ARIA label for close button of announcement bar"})},a.createElement(d,{width:14,height:14})):null)};var E=n(1036),p=n(2389);const k={toggle:"toggle_iYfV"},y=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.dark),style:n},t)},Z=e=>{let{icon:t,style:n}=e;return a.createElement("span",{className:(0,r.Z)(k.toggle,k.light),style:n},t)},w=(0,a.memo)((e=>{let{className:t,icons:n,checked:l,disabled:o,onChange:c}=e;const[s,i]=(0,a.useState)(l),[m,u]=(0,a.useState)(!1),d=(0,a.useRef)(null);return a.createElement("div",{className:(0,r.Z)("react-toggle",t,{"react-toggle--checked":s,"react-toggle--focus":m,"react-toggle--disabled":o})},a.createElement("div",{className:"react-toggle-track",role:"button",tabIndex:-1,onClick:()=>d.current?.click()},a.createElement("div",{className:"react-toggle-track-check"},n.checked),a.createElement("div",{className:"react-toggle-track-x"},n.unchecked),a.createElement("div",{className:"react-toggle-thumb"})),a.createElement("input",{ref:d,checked:s,type:"checkbox",className:"react-toggle-screenreader-only","aria-label":"Switch between dark and light mode",onChange:c,onClick:()=>i(!s),onFocus:()=>u(!0),onBlur:()=>u(!1),onKeyDown:e=>{"Enter"===e.key&&d.current?.click()}}))}));function _(e){const{colorMode:{switchConfig:{darkIcon:t,darkIconStyle:n,lightIcon:r,lightIconStyle:l}}}=(0,c.LU)(),o=(0,p.Z)();return a.createElement(w,(0,u.Z)({disabled:!o,icons:{checked:a.createElement(y,{icon:t,style:n}),unchecked:a.createElement(Z,{icon:r,style:l})}},e))}var C=n(5350),N=n(7898);const S=e=>{const t=(0,l.TH)(),[n,r]=(0,a.useState)(e),o=(0,a.useRef)(!1),[s,i]=(0,a.useState)(0),m=(0,a.useCallback)((e=>{null!==e&&i(e.getBoundingClientRect().height)}),[]);return(0,N.Z)(((t,n)=>{const a=t.scrollY,l=n?.scrollY;if(!e)return;if(a<s)return void r(!0);if(o.current)return o.current=!1,void r(!1);l&&0===a&&r(!0);const c=document.documentElement.scrollHeight-s,i=window.innerHeight;l&&a>=l?r(!1):a+i<c&&r(!0)}),[s,o]),(0,c.SL)((t=>{e&&!t.location.hash&&r(!0)})),(0,a.useEffect)((()=>{e&&t.hash&&(o.current=!0)}),[t.hash]),{navbarRef:m,isNavbarVisible:n}};const L=function(e){void 0===e&&(e=!0),(0,a.useEffect)((()=>(document.body.style.overflow=e?"hidden":"visible",()=>{document.body.style.overflow="visible"})),[e])};var I=n(3783),D=n(907),T=n(7819),B=n(5537);const x=e=>{let{width:t=30,height:n=30,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,width:t,height:n,viewBox:"0 0 30 30","aria-hidden":"true"},l),a.createElement("path",{stroke:"currentColor",strokeLinecap:"round",strokeMiterlimit:"10",strokeWidth:"2",d:"M4 7h22M4 15h22M4 23h22"}))};function A(e){let{width:t=20,height:n=20,className:r,...l}=e;return a.createElement("svg",(0,u.Z)({className:r,viewBox:"0 0 413.348 413.348",width:t,height:n,fill:"currentColor"},l),a.createElement("path",{d:"m413.348 24.354-24.354-24.354-182.32 182.32-182.32-182.32-24.354 24.354 182.32 182.32-182.32 182.32 24.354 24.354 182.32-182.32 182.32 182.32 24.354-24.354-182.32-182.32z"}))}const M={toggle:"toggle_2i4l",navbarHideable:"navbarHideable_RReh",navbarHidden:"navbarHidden_FBwS",navbarSidebarToggle:"navbarSidebarToggle_AVbO",navbarSidebarCloseSvg:"navbarSidebarCloseSvg_+9jJ"},P="right";function R(){return(0,c.LU)().navbar.items}function O(){const{colorMode:{disableSwitch:e}}=(0,c.LU)(),{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=(0,C.Z)();return{isDarkTheme:t,toggle:(0,a.useCallback)((e=>e.target.checked?r():n()),[n,r]),disabled:e}}function U(e){let{sidebarShown:t,toggleSidebar:n}=e;L(t);const l=R(),s=O(),i=function(e){let{sidebarShown:t,toggleSidebar:n}=e;const r=(0,c.g8)()?.({toggleSidebar:n}),l=(0,c.D9)(r),[o,s]=(0,a.useState)((()=>!1));(0,a.useEffect)((()=>{r&&!l&&s(!0)}),[r,l]);const i=!!r;return(0,a.useEffect)((()=>{i?t||s(!0):s(!1)}),[t,i]),{shown:o,hide:(0,a.useCallback)((()=>{s(!1)}),[]),content:r}}({sidebarShown:t,toggleSidebar:n});return a.createElement("div",{className:"navbar-sidebar"},a.createElement("div",{className:"navbar-sidebar__brand"},a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),!s.disabled&&a.createElement(_,{className:M.navbarSidebarToggle,checked:s.isDarkTheme,onChange:s.toggle}),a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__close",onClick:n},a.createElement(A,{width:20,height:20,className:M.navbarSidebarCloseSvg}))),a.createElement("div",{className:(0,r.Z)("navbar-sidebar__items",{"navbar-sidebar__items--show-secondary":i.shown})},a.createElement("div",{className:"navbar-sidebar__item menu"},a.createElement("ul",{className:"menu__list"},l.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({mobile:!0},e,{onClick:n,key:t})))))),a.createElement("div",{className:"navbar-sidebar__item menu"},l.length>0&&a.createElement("button",{type:"button",className:"clean-btn navbar-sidebar__back",onClick:i.hide},a.createElement(o.Z,{id:"theme.navbar.mobileSidebarSecondaryMenu.backButtonLabel",description:"The label of the back button to return to main menu, inside the mobile navbar sidebar secondary menu (notably used to display the docs sidebar)"},"\u2190 Back to main menu")),i.content)))}const H=function(){const{navbar:{hideOnScroll:e,style:t}}=(0,c.LU)(),n=function(){const e=(0,I.Z)(),t="mobile"===e,[n,r]=(0,a.useState)(!1);(0,c.Rb)((()=>{n&&r(!1)}));const l=(0,a.useCallback)((()=>{r((e=>!e))}),[]);return(0,a.useEffect)((()=>{"desktop"===e&&r(!1)}),[e]),{shouldRender:t,toggle:l,shown:n}}(),l=O(),o=(0,D.gA)(),{navbarRef:s,isNavbarVisible:i}=S(e),m=R(),d=m.some((e=>"search"===e.type)),{leftItems:h,rightItems:f}=function(e){return{leftItems:e.filter((e=>"left"===(e.position??P))),rightItems:e.filter((e=>"right"===(e.position??P)))}}(m);return a.createElement("nav",{ref:s,className:(0,r.Z)("navbar","navbar--fixed-top",{"navbar--dark":"dark"===t,"navbar--primary":"primary"===t,"navbar-sidebar--show":n.shown,[M.navbarHideable]:e,[M.navbarHidden]:e&&!i})},a.createElement("div",{className:"navbar__inner"},a.createElement("div",{className:"navbar__items"},(m?.length>0||o)&&a.createElement("button",{"aria-label":"Navigation bar toggle",className:"navbar__toggle clean-btn",type:"button",tabIndex:0,onClick:n.toggle,onKeyDown:n.toggle},a.createElement(x,null)),a.createElement(B.Z,{className:"navbar__brand",imageClassName:"navbar__logo",titleClassName:"navbar__title"}),h.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t}))))),a.createElement("div",{className:"navbar__items navbar__items--right"},f.map(((e,t)=>a.createElement(T.Z,(0,u.Z)({},e,{key:t})))),!l.disabled&&a.createElement(_,{className:M.toggle,checked:l.isDarkTheme,onChange:l.toggle}),!d&&a.createElement(E.Z,null))),a.createElement("div",{role:"presentation",className:"navbar-sidebar__backdrop",onClick:n.toggle}),n.shouldRender&&a.createElement(U,{sidebarShown:n.shown,toggleSidebar:n.toggle}))};var V=n(6742),$=n(4996),z=n(3919);const W="footerLogoLink_SRtH";var j=n(8465),F=n(8617);function K(e){let{to:t,href:n,label:r,prependBaseUrlToHref:l,...o}=e;const c=(0,$.Z)(t),s=(0,$.Z)(n,{forcePrependBaseUrl:!0});return a.createElement(V.Z,(0,u.Z)({className:"footer__link-item"},n?{href:l?s:n}:{to:c},o),n&&!(0,z.Z)(n)?a.createElement("span",null,r,a.createElement(F.Z,null)):r)}const q=e=>{let{sources:t,alt:n}=e;return a.createElement(j.Z,{className:"footer__logo",alt:n,sources:t})};const Y=function(){const{footer:e}=(0,c.LU)(),{copyright:t,links:n=[],logo:l={}}=e||{},o={light:(0,$.Z)(l.src),dark:(0,$.Z)(l.srcDark||l.src)};return e?a.createElement("footer",{className:(0,r.Z)("footer",{"footer--dark":"dark"===e.style})},a.createElement("div",{className:"container"},n&&n.length>0&&a.createElement("div",{className:"row footer__links"},n.map(((e,t)=>a.createElement("div",{key:t,className:"col footer__col"},null!=e.title?a.createElement("div",{className:"footer__title"},e.title):null,null!=e.items&&Array.isArray(e.items)&&e.items.length>0?a.createElement("ul",{className:"footer__items"},e.items.map(((e,t)=>e.html?a.createElement("li",{key:t,className:"footer__item",dangerouslySetInnerHTML:{__html:e.html}}):a.createElement("li",{key:e.href||e.to,className:"footer__item"},a.createElement(K,e))))):null)))),(l||t)&&a.createElement("div",{className:"footer__bottom text--center"},l&&(l.src||l.srcDark)&&a.createElement("div",{className:"margin-bottom--sm"},l.href?a.createElement(V.Z,{href:l.href,className:W},a.createElement(q,{alt:l.alt,sources:o})):a.createElement(q,{alt:l.alt,sources:o})),t?a.createElement("div",{className:"footer__copyright",dangerouslySetInnerHTML:{__html:t}}):null))):null};var G=n(412);const X=(0,c.WA)("theme"),J="light",Q="dark",ee=e=>e===Q?Q:J,te=e=>{(0,c.WA)("theme").set(ee(e))},ne=()=>{const{colorMode:{defaultMode:e,disableSwitch:t,respectPrefersColorScheme:n}}=(0,c.LU)(),[r,l]=(0,a.useState)((e=>G.Z.canUseDOM?ee(document.documentElement.getAttribute("data-theme")):ee(e))(e)),o=(0,a.useCallback)((()=>{l(J),te(J)}),[]),s=(0,a.useCallback)((()=>{l(Q),te(Q)}),[]);return(0,a.useEffect)((()=>{document.documentElement.setAttribute("data-theme",ee(r))}),[r]),(0,a.useEffect)((()=>{if(!t)try{const e=X.get();null!==e&&l(ee(e))}catch(e){console.error(e)}}),[l]),(0,a.useEffect)((()=>{t&&!n||window.matchMedia("(prefers-color-scheme: dark)").addListener((e=>{let{matches:t}=e;l(t?Q:J)}))}),[]),{isDarkTheme:r===Q,setLightTheme:o,setDarkTheme:s}};var ae=n(2924);const re=function(e){const{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}=ne();return a.createElement(ae.Z.Provider,{value:{isDarkTheme:t,setLightTheme:n,setDarkTheme:r}},e.children)},le="docusaurus.tab.",oe=()=>{const[e,t]=(0,a.useState)({}),n=(0,a.useCallback)(((e,t)=>{(0,c.WA)(`${le}${e}`).set(t)}),[]);return(0,a.useEffect)((()=>{try{const e={};(0,c._f)().forEach((t=>{if(t.startsWith(le)){const n=t.substring(15);e[n]=(0,c.WA)(t).get()}})),t(e)}catch(e){console.error(e)}}),[]),{tabGroupChoices:e,setTabGroupChoices:(e,a)=>{t((t=>({...t,[e]:a}))),n(e,a)}}},ce=(0,a.createContext)(void 0);const se=function(e){const{tabGroupChoices:t,setTabGroupChoices:n}=oe();return a.createElement(ce.Provider,{value:{tabGroupChoices:t,setTabGroupChoices:n}},e.children)};function ie(e){let{children:t}=e;return a.createElement(re,null,a.createElement(c.pl,null,a.createElement(se,null,a.createElement(c.L5,null,a.createElement(c.Cn,null,t)))))}var me=n(9105),ue=n(2263);function de(e){let{locale:t,version:n,tag:r}=e;const l=t;return a.createElement(me.Z,null,l&&a.createElement("meta",{name:"docsearch:language",content:l}),n&&a.createElement("meta",{name:"docsearch:version",content:n}),r&&a.createElement("meta",{name:"docsearch:docusaurus_tag",content:r}))}var he=n(1217);function fe(){const{i18n:{defaultLocale:e,locales:t}}=(0,ue.Z)(),n=(0,c.l5)();return a.createElement(me.Z,null,t.map((e=>a.createElement("link",{key:e,rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:e}))),a.createElement("link",{rel:"alternate",href:n.createUrl({locale:e,fullyQualified:!0}),hrefLang:"x-default"}))}function be(e){let{permalink:t}=e;const{siteConfig:{url:n}}=(0,ue.Z)(),r=function(){const{siteConfig:{url:e}}=(0,ue.Z)(),{pathname:t}=(0,l.TH)();return e+(0,$.Z)(t)}(),o=t?`${n}${t}`:r;return a.createElement(me.Z,null,a.createElement("meta",{property:"og:url",content:o}),a.createElement("link",{rel:"canonical",href:o}))}function ve(e){const{siteConfig:{favicon:t},i18n:{currentLocale:n,localeConfigs:r}}=(0,ue.Z)(),{metadatas:l,image:o}=(0,c.LU)(),{title:s,description:i,image:m,keywords:d,searchMetadatas:h}=e,f=(0,$.Z)(t),b=(0,c.pe)(s),v=n,g=r[n].direction;return a.createElement(a.Fragment,null,a.createElement(me.Z,null,a.createElement("html",{lang:v,dir:g}),t&&a.createElement("link",{rel:"shortcut icon",href:f}),a.createElement("title",null,b),a.createElement("meta",{property:"og:title",content:b}),a.createElement("meta",{name:"twitter:card",content:"summary_large_image"})),o&&a.createElement(he.Z,{image:o}),m&&a.createElement(he.Z,{image:m}),a.createElement(he.Z,{description:i,keywords:d}),a.createElement(be,null),a.createElement(fe,null),a.createElement(de,(0,u.Z)({tag:c.HX,locale:n},h)),a.createElement(me.Z,null,l.map(((e,t)=>a.createElement("meta",(0,u.Z)({key:`metadata_${t}`},e))))))}const ge=function(){(0,a.useEffect)((()=>{const e="navigation-with-keyboard";function t(t){"keydown"===t.type&&"Tab"===t.key&&document.body.classList.add(e),"mousedown"===t.type&&document.body.classList.remove(e)}return document.addEventListener("keydown",t),document.addEventListener("mousedown",t),()=>{document.body.classList.remove(e),document.removeEventListener("keydown",t),document.removeEventListener("mousedown",t)}}),[])};const Ee=function(e){const{children:t,noFooter:n,wrapperClassName:l,pageClassName:o}=e;return ge(),a.createElement(ie,null,a.createElement(ve,e),a.createElement(m,null),a.createElement(g,null),a.createElement(H,null),a.createElement("div",{className:(0,r.Z)(c.kM.wrapper.main,l,o)},t),!n&&a.createElement(Y,null))}},5537:(e,t,n)=>{n.d(t,{Z:()=>m});var a=n(7462),r=n(7294),l=n(6742),o=n(8465),c=n(4996),s=n(2263),i=n(941);const m=e=>{const{siteConfig:{title:t}}=(0,s.Z)(),{navbar:{title:n,logo:m={src:""}}}=(0,i.LU)(),{imageClassName:u,titleClassName:d,...h}=e,f=(0,c.Z)(m.href||"/"),b={light:(0,c.Z)(m.src),dark:(0,c.Z)(m.srcDark||m.src)};return r.createElement(l.Z,(0,a.Z)({to:f},h,m.target&&{target:m.target}),m.src&&r.createElement(o.Z,{className:u,sources:b,alt:m.alt||n||t}),null!=n&&r.createElement("b",{className:d},n))}},5525:(e,t,n)=>{n.d(t,{O:()=>d,Z:()=>b});var a=n(7462),r=n(7294),l=n(6010),o=n(6742),c=n(4996),s=n(8617),i=n(3919),m=n(7819);const u="dropdown__link--active";function d(e){let{activeBasePath:t,activeBaseRegex:n,to:l,href:m,label:d,activeClassName:h="",prependBaseUrlToHref:f,...b}=e;const v=(0,c.Z)(l),g=(0,c.Z)(t),E=(0,c.Z)(m,{forcePrependBaseUrl:!0}),p=d&&m&&!(0,i.Z)(m),k=h===u;return r.createElement(o.Z,(0,a.Z)({},m?{href:f?E:m}:{isNavLink:!0,activeClassName:b.className?.includes(h)?"":h,to:v,...t||n?{isActive:(e,t)=>n?new RegExp(n).test(t.pathname):t.pathname.startsWith(g)}:null},b),p?r.createElement("span",null,d,r.createElement(s.Z,k&&{width:12,height:12})):d)}function h(e){let{className:t,isDropdownItem:n=!1,...o}=e;const c=r.createElement(d,(0,a.Z)({className:(0,l.Z)(n?"dropdown__link":"navbar__item navbar__link",t)},o));return n?r.createElement("li",null,c):c}function f(e){let{className:t,isDropdownItem:n,...o}=e;return r.createElement("li",{className:"menu__list-item"},r.createElement(d,(0,a.Z)({className:(0,l.Z)("menu__link",t)},o)))}const b=function(e){let{mobile:t=!1,position:n,...l}=e;const o=t?f:h;return r.createElement(o,(0,a.Z)({},l,{activeClassName:l.activeClassName??(0,m.E)(t)}))}},6400:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(6010),s=n(7819),i=n(941),m=n(8780);function u(e){let{docId:t,label:n,docsPluginId:u,...d}=e;const{activeVersion:h,activeDoc:f}=(0,o.Iw)(u),{preferredVersion:b}=(0,i.J)(u),v=(0,o.yW)(u),g=function(e,t){const n=e.flatMap((e=>e.docs)),a=n.find((e=>e.id===t));if(!a){const a=n.map((e=>e.id)).join("\n- ");throw new Error(`DocNavbarItem: couldn't find any doc with id "${t}" in version${e.length?"s":""} ${e.map((e=>e.name)).join(", ")}".\nAvailable doc ids are:\n- ${a}`)}return a}((0,m.uniq)([h,b,v].filter(Boolean)),t),E=(0,s.E)(d.mobile);return r.createElement(l.Z,(0,a.Z)({exact:!0},d,{className:(0,c.Z)(d.className,{[E]:f?.sidebar&&f.sidebar===g.sidebar}),activeClassName:E,label:n??g.id,to:g.path}))}},9308:(e,t,n)=>{n.d(t,{Z:()=>u});var a=n(7462),r=n(7294),l=n(5525),o=n(3154),c=n(907),s=n(941),i=n(4973);const m=e=>e.docs.find((t=>t.id===e.mainDocId));function u(e){let{mobile:t,docsPluginId:n,dropdownActiveClassDisabled:u,dropdownItemsBefore:d,dropdownItemsAfter:h,...f}=e;const b=(0,c.Iw)(n),v=(0,c.gB)(n),g=(0,c.yW)(n),{preferredVersion:E,savePreferredVersionName:p}=(0,s.J)(n);const k=function(){const e=v.map((e=>{const t=b?.alternateDocVersions[e.name]||m(e);return{isNavLink:!0,label:e.label,to:t.path,isActive:()=>e===b?.activeVersion,onClick:()=>{p(e.name)}}}));return[...d,...e,...h]}(),y=b.activeVersion??E??g,Z=t&&k?(0,i.I)({id:"theme.navbar.mobileVersionsDropdown.label",message:"Versions",description:"The label for the navbar versions dropdown on mobile view"}):y.label,w=t&&k?void 0:m(y).path;return k.length<=1?r.createElement(l.Z,(0,a.Z)({},f,{mobile:t,label:Z,to:w,isActive:u?()=>!1:void 0})):r.createElement(o.Z,(0,a.Z)({},f,{mobile:t,label:Z,to:w,items:k,isActive:u?()=>!1:void 0}))}},7250:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(5525),o=n(907),c=n(941);const s=e=>e.docs.find((t=>t.id===e.mainDocId));function i(e){let{label:t,to:n,docsPluginId:i,...m}=e;const u=(0,o.zu)(i),{preferredVersion:d}=(0,c.J)(i),h=(0,o.yW)(i),f=u??d??h,b=t??f.label,v=n??s(f).path;return r.createElement(l.Z,(0,a.Z)({},m,{label:b,to:v}))}},3154:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(7462),r=n(7294),l=n(6010),o=n(941),c=n(5525),s=n(7819);const i="dropdown__link--active";function m(e,t){return e.some((e=>function(e,t){return!!(0,o.Mg)(e.to,t)||!(!e.activeBaseRegex||!new RegExp(e.activeBaseRegex).test(t))||!(!e.activeBasePath||!t.startsWith(e.activeBasePath))}(e,t)))}function u(e){let{items:t,position:n,className:o,...m}=e;const u=(0,r.useRef)(null),d=(0,r.useRef)(null),[h,f]=(0,r.useState)(!1);return(0,r.useEffect)((()=>{const e=e=>{u.current&&!u.current.contains(e.target)&&f(!1)};return document.addEventListener("mousedown",e),document.addEventListener("touchstart",e),()=>{document.removeEventListener("mousedown",e),document.removeEventListener("touchstart",e)}}),[u]),r.createElement("div",{ref:u,className:(0,l.Z)("navbar__item","dropdown","dropdown--hoverable",{"dropdown--right":"right"===n,"dropdown--show":h})},r.createElement(c.O,(0,a.Z)({className:(0,l.Z)("navbar__link",o)},m,{onClick:m.to?void 0:e=>e.preventDefault(),onKeyDown:e=>{"Enter"===e.key&&(e.preventDefault(),f(!h))}}),m.children??m.label),r.createElement("ul",{ref:d,className:"dropdown__menu"},t.map(((e,n)=>r.createElement(s.Z,(0,a.Z)({isDropdownItem:!0,onKeyDown:e=>{if(n===t.length-1&&"Tab"===e.key){e.preventDefault(),f(!1);const t=u.current.nextElementSibling;t&&t.focus()}},activeClassName:i},e,{key:n}))))))}function d(e){let{items:t,className:n,position:i,...u}=e;const d=(0,o.be)(),h=m(t,d),{collapsed:f,toggleCollapsed:b,setCollapsed:v}=(0,o.uR)({initialState:()=>!h});return(0,r.useEffect)((()=>{h&&v(!h)}),[d,h]),r.createElement("li",{className:(0,l.Z)("menu__list-item",{"menu__list-item--collapsed":f})},r.createElement(c.O,(0,a.Z)({role:"button",className:(0,l.Z)("menu__link menu__link--sublist",n)},u,{onClick:e=>{e.preventDefault(),b()}}),u.children??u.label),r.createElement(o.zF,{lazy:!0,as:"ul",className:"menu__list",collapsed:f},t.map(((e,t)=>r.createElement(s.Z,(0,a.Z)({mobile:!0,isDropdownItem:!0,onClick:u.onClick,activeClassName:"menu__link--active"},e,{key:t}))))))}const h=function(e){let{mobile:t=!1,...n}=e;const a=t?d:u;return r.createElement(a,n)}},7819:(e,t,n)=>{n.d(t,{Z:()=>g,E:()=>v});var a=n(7294),r=n(5525),l=n(3154),o=n(7462);const c=e=>{let{width:t=20,height:n=20,...r}=e;return a.createElement("svg",(0,o.Z)({viewBox:"0 0 20 20",width:t,height:n,"aria-hidden":"true"},r),a.createElement("path",{fill:"currentColor",d:"M19.753 10.909c-.624-1.707-2.366-2.726-4.661-2.726-.09 0-.176.002-.262.006l-.016-2.063 3.525-.607c.115-.019.133-.119.109-.231-.023-.111-.167-.883-.188-.976-.027-.131-.102-.127-.207-.109-.104.018-3.25.461-3.25.461l-.013-2.078c-.001-.125-.069-.158-.194-.156l-1.025.016c-.105.002-.164.049-.162.148l.033 2.307s-3.061.527-3.144.543c-.084.014-.17.053-.151.143.019.09.19 1.094.208 1.172.018.08.072.129.188.107l2.924-.504.035 2.018c-1.077.281-1.801.824-2.256 1.303-.768.807-1.207 1.887-1.207 2.963 0 1.586.971 2.529 2.328 2.695 3.162.387 5.119-3.06 5.769-4.715 1.097 1.506.256 4.354-2.094 5.98-.043.029-.098.129-.033.207l.619.756c.08.096.206.059.256.023 2.51-1.73 3.661-4.515 2.869-6.683zm-7.386 3.188c-.966-.121-.944-.914-.944-1.453 0-.773.327-1.58.876-2.156a3.21 3.21 0 011.229-.799l.082 4.277a2.773 2.773 0 01-1.243.131zm2.427-.553l.046-4.109c.084-.004.166-.01.252-.01.773 0 1.494.145 1.885.361.391.217-1.023 2.713-2.183 3.758zm-8.95-7.668a.196.196 0 00-.196-.145h-1.95a.194.194 0 00-.194.144L.008 16.916c-.017.051-.011.076.062.076h1.733c.075 0 .099-.023.114-.072l1.008-3.318h3.496l1.008 3.318c.016.049.039.072.113.072h1.734c.072 0 .078-.025.062-.076-.014-.05-3.083-9.741-3.494-11.04zm-2.618 6.318l1.447-5.25 1.447 5.25H3.226z"}))};var s=n(2263),i=n(941);const m="iconLanguage_EbrZ";function u(e){let{mobile:t,dropdownItemsBefore:n,dropdownItemsAfter:r,...u}=e;const{i18n:{currentLocale:d,locales:h,localeConfigs:f}}=(0,s.Z)(),b=(0,i.l5)();function v(e){return f[e].label}const g=[...n,...h.map((e=>{const t=`pathname://${b.createUrl({locale:e,fullyQualified:!1})}`;return{isNavLink:!0,label:v(e),to:t,target:"_self",autoAddBaseUrl:!1,className:e===d?"dropdown__link--active":"",style:{textTransform:"capitalize"}}})),...r],E=t?"Languages":v(d);return a.createElement(l.Z,(0,o.Z)({},u,{href:"#",mobile:t,label:a.createElement("span",null,a.createElement(c,{className:m}),a.createElement("span",null,E)),items:g}))}var d=n(1036);function h(e){let{mobile:t}=e;return t?null:a.createElement(d.Z,null)}const f={default:()=>r.Z,localeDropdown:()=>u,search:()=>h,dropdown:()=>l.Z,docsVersion:()=>n(7250).Z,docsVersionDropdown:()=>n(9308).Z,doc:()=>n(6400).Z},b=e=>{const t=f[e];if(!t)throw new Error(`No NavbarItem component found for type "${e}".`);return t()};const v=e=>e?"menu__link--active":"navbar__link--active";function g(e){let{type:t,...n}=e;const r=function(e,t){return e&&"default"!==e?e:t?"dropdown":"default"}(t,void 0!==n.items),l=b(r);return a.createElement(l,n)}},2924:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n(7294).createContext(void 0)},8465:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(7462),r=n(7294),l=n(6010),o=n(2389),c=n(5350);const s={themedImage:"themedImage_TMUO","themedImage--light":"themedImage--light_4Vu1","themedImage--dark":"themedImage--dark_uzRr"},i=e=>{const t=(0,o.Z)(),{isDarkTheme:n}=(0,c.Z)(),{sources:i,className:m,alt:u="",...d}=e,h=t?n?["dark"]:["light"]:["light","dark"];return r.createElement(r.Fragment,null,h.map((e=>r.createElement("img",(0,a.Z)({key:e,src:i[e],alt:u,className:(0,l.Z)(s.themedImage,s[`themedImage--${e}`],m)},d)))))}},7898:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294),r=n(412);const l=()=>r.Z.canUseDOM?{scrollX:window.pageXOffset,scrollY:window.pageYOffset}:null,o=function(e,t){void 0===t&&(t=[]);const n=(0,a.useRef)(l()),r=()=>{const t=l();e&&e(t,n.current),n.current=t};(0,a.useEffect)((()=>{const e={passive:!0};return r(),window.addEventListener("scroll",r,e),()=>window.removeEventListener("scroll",r,e)}),t)}},5350:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),r=n(2924);const l=function(){const e=(0,a.useContext)(r.Z);if(null==e)throw new Error('"useThemeContext" is used outside of "Layout" component. Please see https://docusaurus.io/docs/api/themes/configuration#usethemecontext.');return e}},1036:(e,t,n)=>{n.d(t,{Z:()=>D});var a=n(7462),r=n(7294),l=n(3935),o=n(2263),c=n(6550),s=n(4996),i=n(6742),m=n(9105),u=n(6397);function d(){return r.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},r.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}var h=n(830),f=["translations"];function b(){return b=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},b.apply(this,arguments)}function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null==n)return;var a,r,l=[],o=!0,c=!1;try{for(n=n.call(e);!(o=(a=n.next()).done)&&(l.push(a.value),!t||l.length!==t);o=!0);}catch(s){c=!0,r=s}finally{try{o||null==n.return||n.return()}finally{if(c)throw r}}return l}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(e);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function E(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p="Ctrl";var k=r.forwardRef((function(e,t){var n=e.translations,a=void 0===n?{}:n,l=E(e,f),o=a.buttonText,c=void 0===o?"Search":o,s=a.buttonAriaLabel,i=void 0===s?"Search":s,m=v((0,r.useState)(null),2),u=m[0],g=m[1];return(0,r.useEffect)((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?g("\u2318"):g(p))}),[]),r.createElement("button",b({type:"button",className:"DocSearch DocSearch-Button","aria-label":i},l,{ref:t}),r.createElement("span",{className:"DocSearch-Button-Container"},r.createElement(h.W,null),r.createElement("span",{className:"DocSearch-Button-Placeholder"},c)),r.createElement("span",{className:"DocSearch-Button-Keys"},null!==u&&r.createElement(r.Fragment,null,r.createElement("kbd",{className:"DocSearch-Button-Key"},u===p?r.createElement(d,null):u),r.createElement("kbd",{className:"DocSearch-Button-Key"},"K"))))})),y=n(907),Z=n(941);function w(){const{locale:e,tags:t}=function(){const{i18n:e}=(0,o.Z)(),t=(0,y._r)(),n=(0,y.WS)(),a=(0,Z.Oh)(),r=[Z.HX,...Object.keys(t).map((function(e){const r=n?.activePlugin?.pluginId===e?n.activeVersion:void 0,l=a[e],o=t[e].versions.find((e=>e.isLast)),c=r??l??o;return(0,Z.os)(e,c.name)}))];return{locale:e.currentLocale,tags:r}}();return[`language:${e}`,t.map((e=>`docusaurus_tag:${e}`))]}var _=n(4973);const C={searchBox:"searchBox_NKBi"};let N=null;function S(e){let{hit:t,children:n}=e;return r.createElement(i.Z,{to:t.url},n)}function L(e){let{state:t,onClose:n}=e;const{generateSearchPageLink:a}=(0,u.Z)();return r.createElement(i.Z,{to:a(t.query),onClick:n},"See all ",t.context.nbHits," results")}function I(e){let{contextualSearch:t,...i}=e;const{siteMetadata:u}=(0,o.Z)(),d=w(),h=i.searchParameters?.facetFilters??[],f=t?[...d,...h]:h,b={...i.searchParameters,facetFilters:f},{withBaseUrl:v}=(0,s.C)(),g=(0,c.k6)(),E=(0,r.useRef)(null),p=(0,r.useRef)(null),[y,Z]=(0,r.useState)(!1),[I,D]=(0,r.useState)(null),T=(0,r.useCallback)((()=>N?Promise.resolve():Promise.all([n.e(5359).then(n.bind(n,5359)),Promise.all([n.e(532),n.e(6945)]).then(n.bind(n,6945)),Promise.all([n.e(532),n.e(5256)]).then(n.bind(n,5256))]).then((e=>{let[{DocSearchModal:t}]=e;N=t}))),[]),B=(0,r.useCallback)((()=>{T().then((()=>{E.current=document.createElement("div"),document.body.insertBefore(E.current,document.body.firstChild),Z(!0)}))}),[T,Z]),x=(0,r.useCallback)((()=>{Z(!1),E.current.remove()}),[Z]),A=(0,r.useCallback)((e=>{T().then((()=>{Z(!0),D(e.key)}))}),[T,Z,D]),M=(0,r.useRef)({navigate(e){let{itemUrl:t}=e;g.push(t)}}).current,P=(0,r.useRef)((e=>e.map((e=>{const t=document.createElement("a");return t.href=e.url,{...e,url:v(`${t.pathname}${t.hash}`)}})))).current,R=(0,r.useMemo)((()=>e=>r.createElement(L,(0,a.Z)({},e,{onClose:x}))),[x]),O=(0,r.useCallback)((e=>(e.addAlgoliaAgent("docusaurus",u.docusaurusVersion),e)),[u.docusaurusVersion]);!function(e){var t=e.isOpen,n=e.onOpen,a=e.onClose,l=e.onInput,o=e.searchButtonRef;r.useEffect((function(){function e(e){var r;(27===e.keyCode&&t||"k"===(null===(r=e.key)||void 0===r?void 0:r.toLowerCase())&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)&&(e.preventDefault(),t?a():document.body.classList.contains("DocSearch--active")||document.body.classList.contains("DocSearch--active")||n()),o&&o.current===document.activeElement&&l&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&l(e)}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e)}}),[t,n,a,l,o])}({isOpen:y,onOpen:B,onClose:x,onInput:A,searchButtonRef:p});const U=(0,_.I)({id:"theme.SearchBar.label",message:"Search",description:"The ARIA label and placeholder for search button"});return r.createElement(r.Fragment,null,r.createElement(m.Z,null,r.createElement("link",{rel:"preconnect",href:`https://${i.appId}-dsn.algolia.net`,crossOrigin:"anonymous"})),r.createElement("div",{className:C.searchBox},r.createElement(k,{onTouchStart:T,onFocus:T,onMouseOver:T,onClick:B,ref:p,translations:{buttonText:U,buttonAriaLabel:U}})),y&&(0,l.createPortal)(r.createElement(N,(0,a.Z)({onClose:x,initialScrollY:window.scrollY,initialQuery:I,navigator:M,transformItems:P,hitComponent:S,resultsFooterComponent:R,transformSearchClient:O},i,{searchParameters:b})),E.current))}const D=function(){const{siteConfig:e}=(0,o.Z)();return r.createElement(I,e.themeConfig.algolia)}},6397:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(6550),r=n(412),l=n(2263);const o=function(){const e=(0,a.k6)(),t=(0,a.TH)(),{siteConfig:{baseUrl:n}={}}=(0,l.Z)();return{searchValue:r.Z.canUseDOM&&new URLSearchParams(t.search).get("q")||"",updateSearchPath:n=>{const a=new URLSearchParams(t.search);n?a.set("q",n):a.delete("q"),e.replace({search:a.toString()})},generateSearchPageLink:e=>`${n}search?q=${encodeURIComponent(e)}`}}}}]);