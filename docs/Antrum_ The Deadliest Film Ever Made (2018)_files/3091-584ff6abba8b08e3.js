"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[3091],{12110:function(e,n,t){t.d(n,{r:function(){return f},Z:function(){return d}});var r=t(52322),o=t(2784),a=t(45103),i=t(11998),c=t(72991),u=t(21849),s=t(97432),l=t(88221),f=function(e){var n=e.contributeButton,t=e.contributeUrl,f=e.iframeClassName,d=e.smallBreakpointAction,m=(0,o.useState)(!1),b=m[0],p=m[1],h=function(){return p(!1)},g=function(e){e.stopPropagation()},v=function(e){var n=e.breakpoint,t=e.isLoggedIn,r=e.largeBreakpointAction,o=e.refTagForLoginRedirect,a=e.smallBreakpointAction,i=n.l||n.xl;return function(e){e.preventDefault(),i?t?r(e):(0,l.r)(o):a(e)}}({isLoggedIn:(0,s.n)(),breakpoint:(0,a.useBreakpointsAsConfig)(),smallBreakpointAction:d,largeBreakpointAction:function(e){e.stopPropagation(),e.preventDefault(),p(!0)}}),y=o.cloneElement(n,{"data-testid":"edit-action-button",href:t,onClick:v,onKeyDown:function(e){(0,i.isEnterOrSpaceKey)(e)&&v(e)}}),k=(0,u.N)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"});return(0,r.jsxs)(r.Fragment,{children:[y,b&&(0,r.jsx)("div",{onClick:g,onMouseLeave:g,"data-testid":"contribute-iframe-drawer-container",children:(0,r.jsx)(a.Drawer,{isOpen:b,onCloseClicked:h,side:"right",closePromptLabel:k,children:(0,r.jsx)(c.o,{src:t,onCloseMeCallback:h,className:f,"data-testid":"contribute-iframe"})})})]})},d=f},72991:function(e,n,t){t.d(n,{o:function(){return l}});var r=t(52322),o=t(72779),a=t.n(o),i=t(2784),c=t(3411),u=t(71045);function s(){var e,n,t=(e=["\n    height: calc(100vh - 6rem);\n    width: 100%;\n    position: absolute;\n    overflow-y: scroll;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return s=function(){return t},t}var l=function(e){var n=i.useRef(),t=function(t){var r;(null===(r=n.current.contentWindow)||void 0===r?void 0:r.location.href)===u.$R&&e.onCloseMeCallback()};return i.useEffect((function(){return n.current.addEventListener("load",t),function(){var e;null===(e=n.current)||void 0===e||e.removeEventListener("load",t)}}),[]),(0,r.jsx)(f,{ref:n,src:e.src,className:a()(e.className)})},f=c.default.iframe.withConfig({componentId:"sc-1dbb0bdb-0"})(s())},23091:function(e,n,t){t.d(n,{Tz:function(){return Q},ZP:function(){return X}});var r=t(52322),o=t(2784),a=t(45103),i=t(60507),c=t(21849),u=t(72779),s=t.n(u),l=t(72282),f=t.n(l),d=t(3411),m=t(64846),b=t.n(m),p=t(41103),h=t(6107),g=t(12110),v=t(71045),y=t(12185),k="?ref_=",_="ext_shr_em",w="ext_shr_fb",j="ext_shr_tw",P="ext_shr_lnk",O=function(e,n,t,r){return{shareLabelText:e,shareLinkUrl:n,shareIconName:t,shareLinkTarget:r}},x=t(84891);function L(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function N(){var e,n,t=(e=["\n    cursor: pointer;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return N=function(){return t},t}var I={email:"share-em",facebook:"share-fb",twitter:"share-tw",link:"share-lnk"},C={email:"share_em",facebook:"share_fb",twitter:"share_tw",link:"share_lnk"},S="link",M="extra-contribute-action-",T="contribute-extra-action-",A=d.default.div.withConfig({componentId:"sc-c044652b-0"})(N()),B=function(e){var n=(0,x.y)(),t=n.pageType,o=n.subPageType,u=n.pageConst,l=n.refTagPrefix,d=(0,a.useSnackbar)().sendSnack,m=(0,c.N)({id:"common_linkCopied",defaultMessage:"Link copied"});if(i.UG)return null;var N=function(n){return function(r){r.stopPropagation(),(0,p.P6)(I[n.shareIconName]),l&&(0,p.K8)("".concat(l,"_").concat(C[n.shareIconName]),{type:t,subType:o,id:u},I[n.shareIconName],p.qB.ACTION_ONLY),e.interactionHandler(n.shareLinkUrl)&&r.preventDefault(),n.shareIconName==S&&d({primaryText:m})}},B=function(e){e.stopPropagation()},E=function(e,n){var t=encodeURIComponent((0,y.ZZ)(n.emailSubject)),r=encodeURIComponent((0,y.ZZ)(n.shareBody)),o=encodeURIComponent(e+k+w),a=encodeURIComponent(e+k+j),i=encodeURIComponent(e+k+_),c="".concat("https://www.facebook.com/sharer.php","?u=").concat(o),u="".concat("https://twitter.com/intent/tweet","?text=").concat(r," - ").concat(a),s="mailto:?subject=".concat(t,"&body=").concat(r," - ").concat(i);return[O("Facebook",c,"facebook","_blank"),O("Twitter",u,"twitter","_blank"),O(y.Vr,s,"email","_blank"),O(y.Rq,e+k+P,"link","_copy")]}(function(e){if(i.UG)throw new Error("not supported from node");e=null!==e&&void 0!==e?e:window.location.href;var n=new(b())(e,window.location,!0);return delete n.query.ref_,n.set("query",n.query),n.host||n.set("host",window.location.host),n.toString()}(e.url),e.shareProps).map((function(e){return"_copy"===e.shareLinkTarget?function(e){return(0,r.jsx)(f(),{text:e.shareLinkUrl,options:{format:"text/plain"},children:(0,r.jsx)(a.ListItem,{className:s()(["sharemenu-listitem","sharemenu-copylink"]),preIconName:S,onClick:N(e),children:(0,y.ZZ)(e.shareLabelText)})},"copy-to-clipboard")}(e):function(e){return(0,r.jsx)(a.ListItem,{preIconName:e.shareIconName,href:e.shareLinkUrl,target:e.shareLinkTarget,className:"sharemenu-listitem",onClick:N(e),children:(0,y.ZZ)(e.shareLabelText)},e.shareIconName)}(e)})),U=function(e,n,t){var o=e.linkUrl,i={contributeButton:(0,r.jsx)(A,{onMouseLeave:B,"data-testid":M+n,children:(0,r.jsx)(a.ListItem,{className:s()([e.className,"sharemenu-listitem"]),preIconName:e.iconName,postIconName:e.postIconName,children:(0,y.ZZ)(e.label)},e.iconName+"-"+t)}),contributeUrl:(0,h.oq)(o,v.$R,!0),iframeClassName:T+n,smallBreakpointAction:function(e){window.open((0,h.oq)(o,window.location.href,!0),"_self")}};return(0,r.jsx)(g.Z,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){L(e,n,t[n])}))}return e}({},i))};if(e.shareProps.extraActions){E.push((0,r.jsx)(a.ListDivider,{},"divider"));var Z=0;e.shareProps.extraActions.forEach((function(n,t){n.isContributionAction?(Z+=1,E.push(U(n,Z,t))):E.push(function(n,t){var o=n.linkUrl;return(0,r.jsx)(a.ListItem,{className:s()([n.className,"sharemenu-listitem"]),preIconName:n.iconName,postIconName:n.postIconName,href:o,target:n.linkTarget,onClick:function(t){t.stopPropagation();var r=!1;n.handler&&n.handler(o)&&(r=!0),e.interactionHandler(o)&&(r=!0),r&&t.preventDefault()},children:(0,y.ZZ)(n.label)},n.iconName+"-"+t)}(n,t))}))}return(0,r.jsx)(a.List,{className:"sharemenu-list",children:E})};function E(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function U(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){E(e,n,t[n])}))}return e}var Z=function(e){return(0,r.jsx)(a.BottomSheet,{isOpen:e.menuVisibility,onCloseClicked:function(){return e.interactionHandler()},"data-testid":"share-bottom-sheet",closePromptLabel:(0,c.N)({id:"common_ariaLabel_closePrompt",defaultMessage:"Close Prompt"}),children:(0,r.jsx)(B,U({},e))})};function R(){var e,n,t=(e=["\n    position: relative;\n    right: 0;\n    top: 0;\n    text-align: left;\n    z-index: 11;\n"],n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}})));return R=function(){return t},t}var D=d.default.div.withConfig({componentId:"sc-eece9490-0"})(R());function q(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function z(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){q(e,n,t[n])}))}return e}var H=function(e){var n=function(){return e.interactionHandler()};return(0,o.useEffect)((function(){return window.addEventListener("click",n),function(){return window.removeEventListener("click",n)}}),[]),(0,r.jsx)(D,{onMouseLeave:n,"data-testid":"share-container",children:(0,r.jsx)(a.SetPalette,{palette:"dark",children:(0,r.jsx)(a.Menu,{menuID:"media-details-share-button",isVisible:e.menuVisibility,mode:"anchored",children:(0,r.jsx)(B,z({},e))})})})};function V(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}var $=function(e){if(!i.jU)return null;var n=(0,a.useBreakpointsAsConfig)(),t=n.s||n.xs,o=e.forceBottomSheet||t?Z:H;return(0,r.jsx)(o,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){V(e,n,t[n])}))}return e}({},e))},F=t(27018);function K(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function G(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{},r=Object.keys(t);"function"===typeof Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t).filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})))),r.forEach((function(n){K(e,n,t[n])}))}return e}var Y,W,J;var Q=function(e){var n,t=(0,o.useState)(!1),i=t[0],c=t[1],u=(0,x.y)(),s=u.pageType,l=u.pageConst,f=u.subPageType,d=function(e){return{shareBody:null!==(Y=null===e||void 0===e?void 0:e.shareBody)&&void 0!==Y?Y:y.wM,emailSubject:null!==(W=null===e||void 0===e?void 0:e.emailSubject)&&void 0!==W?W:y.VN,label:null!==(J=null===e||void 0===e?void 0:e.label)&&void 0!==J?J:y.Pj,extraActions:null===e||void 0===e?void 0:e.extraActions}}(e.shareProps),m=(0,y.ZZ)(d.label),b={shareProps:d,url:e.url,forceBottomSheet:e.forceBottomSheet,interactionHandler:function(n){return c(!1),!(!n||!e.shareHandler)&&e.shareHandler(n)},menuVisibility:i};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(a.IconButton,{name:null!==(n=e.iconButtonName)&&void 0!==n?n:"share",label:m,onClick:function(n){n.stopPropagation();var t=!i;!function(e,n){var t="".concat(n).concat("-menu-open");(0,F.ar)(e,t,F.qB.POP_UP)}({type:s,subType:f,id:l},e.pageActionPrefix),c(t)},className:"sharemenu-iconbutton",onColor:e.onColor}),(0,r.jsx)($,G({},b))]})},X=Q},12185:function(e,n,t){t.d(n,{Pj:function(){return o},wM:function(){return a},VN:function(){return i},Rq:function(){return c},Vr:function(){return u},ZZ:function(){return s}});var r=t(21849),o={id:"shareMenu_ariaLabel_shareOnSocialMedia",defaultMessage:"Share on social media"},a={id:"shareMenu_shareText_checkoutThisLink",defaultMessage:"Check out this link on IMDb!"},i=a,c={id:"shareMenu_copyLink",defaultMessage:"Copy Link"},u={id:"shareMenu_emailLink",defaultMessage:"Email Link"},s=function(e){return"string"===typeof e?e:(0,r.N)(e)}},71045:function(e,n,t){t.d(n,{$C:function(){return u},z7:function(){return s},$R:function(){return l},_P:function(){return f},yS:function(){return d},KL:function(){return m}});var r=t(30382),o=t.n(r);function a(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}function i(){var e=a(['\n    fragment MediaSheetImageMeta on Image {\n        copyright\n        createdBy\n        caption {\n            plaidHtml(queryParams: $queryParams)\n        }\n        titles {\n            id\n            titleText {\n                text\n            }\n        }\n        source {\n            attributionUrl\n            text\n            banner {\n                url\n                attributionUrl\n            }\n        }\n        names {\n            id\n            nameText {\n                text\n            }\n        }\n        countries {\n            text\n        }\n        languages {\n            text\n        }\n        # On mobile, we need to refetch correctionLink and reportingLink\n        # data with isInIframe: false.\n        #\n        # This refetching is handled by the ContributeActionButton component.\n        correctionLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n        reportingLink(\n            relatedId: $id\n            contributionContext: {\n                isInIframe: true\n                returnUrl: "','"\n                business: "consumer"\n            }\n        ) {\n            url\n        }\n    }\n']);return i=function(){return e},e}function c(){var e=a(["\n    fragment MediaSheetListItemMeta on ListItemNode {\n        description {\n            originalText {\n                plaidHtml(queryParams: $queryParams)\n            }\n        }\n    }\n"]);return c=function(){return e},e}var u={CLOSE:"media-sheet__close",OPEN:"media-sheet__open",EDIT:"media-sheet__edit",REPORT:"media-sheet__report"},s={PARENT:"media-sheet",ATTR_BANNER:"media-sheet__attr-banner",COUNT_DISPLAY:"media-sheet__count-display"},l="https://www.imdb.com/close_me",f=o()(i(),l,l),d=o()(c()),m={closeSheetAriaLabel:{id:"common_buttons_close",defaultMessage:"Close"},openSheetAriaLabel:{id:"mediaSheet_ariaLabel_openSheet",defaultMessage:"Open"},editAriaLabel:{id:"mediaSheet_ariaLabel_edit",defaultMessage:"Edit tags"},reportAriaLabel:{id:"mediaSheet_ariaLabel_report",defaultMessage:"Report image"},nameLabel:{id:"mediaSheet_label_name",defaultMessage:"People"},titleLabel:{id:"mediaSheet_label_title",defaultMessage:"Titles"},countryLabel:{id:"mediaSheet_label_country",defaultMessage:"Countries"},languageLabel:{id:"mediaSheet_label_language",defaultMessage:"Languages"},photoByAttributionPrefix:{id:"mediaSheet_attribution_photoBy",defaultMessage:"Photo by"},courtesyAttributionPrefix:{id:"mediaSheet_attribution_courtesy",defaultMessage:"Image courtesy"}}}}]);