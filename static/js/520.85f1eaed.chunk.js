"use strict";(self.webpackChunksolana_twitter_app=self.webpackChunksolana_twitter_app||[]).push([[520],{3141:function(e,t,n){n.d(t,{T:function(){return a}});var r=n(5245),a=function(){return(0,r.I0)()}},8684:function(e,t,n){n.d(t,{C:function(){return r}});var r=n(5245).v9},9392:function(e,t,n){n.d(t,{a:function(){return a}});var r=n(3358),a=function(e,t){var n=(0,r.useMemo)((function(){return t-e.length}),[e.length,t]),a=(0,r.useMemo)((function(){return n<0?"text-red-500":n<=10?"text-yellow-500":"text-gray-400"}),[n]);return{charsLeft:n,charsLeftClass:a}}},818:function(e,t,n){n.d(t,{Nu:function(){return a},st:function(){return r}});var r=280,a=50},3944:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9677),a=n(9382),o=(n(3358),n(8599)),s={input__wrapper:"IconInput_input__wrapper__snYNX",icon:"IconInput_icon__I71fy",field:"IconInput_field__DwuCl"},c=n(2885),i=["className","Icon"],l=function(e){var t=e.className,n=e.Icon,l=(0,a.Z)(e,i);return(0,c.jsxs)("div",{className:[s.input__wrapper,t].join(" "),children:[n&&(0,c.jsx)(n,{className:[s.icon,l.disabled?"!text-blue-500":""].join(" ")}),(0,c.jsx)(o.Z,(0,r.Z)({className:s.field},l))]})}},4275:function(e,t,n){n.d(t,{Z:function(){return Q}});var r=n(3358),a=n(5413),o=n(4203),s="TweetControls_controls__wrapper__92WtL",c=n(9677),i=n(2885),l=function(e){return(0,i.jsx)("svg",(0,c.Z)((0,c.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),{},{children:(0,i.jsx)("path",{fill:"currentColor",d:"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"})}))},u=function(e){return(0,i.jsx)("svg",(0,c.Z)((0,c.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),{},{children:(0,i.jsx)("path",{fill:"currentColor",d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"})}))},_=n(9339),d="Modal_modal__backdrop__2Z3VS",f="Modal_modal__content__GUBXv",m=n(9916),p=function(e){var t=e.isOpen,n=e.close,r=e.children;return t?(0,_.createPortal)((0,i.jsx)("div",{className:d,onClick:function(){return n()},children:(0,i.jsx)("div",{className:f,onClick:m.UW,children:r})}),document.body):null},h=function(e){return(0,i.jsx)("svg",(0,c.Z)((0,c.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),{},{children:(0,i.jsx)("path",{fill:"currentColor",d:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z"})}))},v="UpdateTweetModal_modal__wrapper__qDOrg",x="UpdateTweetModal_modal__header__PuKRb",w="UpdateTweetModal_cancel__OiWYr",j=n(4611),L=n(3755),Z=n(3680),N=n(5020),g=n(3944),C=n(5228),b=n(918),H=n(9319),T={form__wrapper:"UpdateTweetForm_form__wrapper__BFBpL",form__header:"UpdateTweetForm_form__header__WibyX",cancel:"UpdateTweetForm_cancel__+9+nr",form__footer:"UpdateTweetForm_form__footer__XaW-3",topic:"UpdateTweetForm_topic__-7j8D",button:"UpdateTweetForm_button__NQuuh",counter:"UpdateTweetForm_counter__3dH33"},I=n(5006),y=n(3141),M=n(9392),V=n(5874),B=n(818),O=n(5286),k=function(e){var t=e.tweet,n=e.onFinish,a=(0,I.Os)().connected,o=(0,y.T)(),s=(0,r.useState)(t||{}),l=(0,Z.Z)(s,2),u=l[0],_=l[1],d=(0,r.useState)(!1),f=(0,Z.Z)(d,2),m=f[0],p=f[1],h=(0,M.a)(u.content,B.st),v=h.charsLeft,x=h.charsLeftClass,w=(0,r.useMemo)((function(){return!u.content.length||v<0}),[u.content,v]),k=function(){var e=(0,L.Z)((0,j.Z)().mark((function e(r){var a;return(0,j.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r.preventDefault(),!m){e.next=3;break}return e.abrupt("return");case 3:return e.prev=3,p(!0),e.next=7,(0,O.l_)(t,u.topic,u.content);case 7:a=e.sent,o(V.A3.updateTweet(a)),n(),e.next=14;break;case 12:e.prev=12,e.t0=e.catch(3);case 14:return e.prev=14,p(!1),e.finish(14);case 17:case"end":return e.stop()}}),e,null,[[3,12,14,17]])})));return function(t){return e.apply(this,arguments)}}();return a?(0,i.jsxs)("form",{className:T.form__wrapper,children:[(0,i.jsx)(N.Z,{autoresize:!0,placeholder:"What's happening?",value:u.content,onChange:function(e){_((0,c.Z)((0,c.Z)({},u),{},{content:e.target.value}))}}),(0,i.jsxs)("div",{className:T.form__footer,children:[(0,i.jsx)(g.Z,{className:T.topic,Icon:C.Z,maxLength:B.Nu,value:u.topic,onChange:function(e){_((0,c.Z)((0,c.Z)({},u),{},{topic:e.target.value}))}}),(0,i.jsxs)("div",{className:T.button,children:[(0,i.jsxs)("span",{className:[T.counter,x].join(" "),children:[v," left"]}),(0,i.jsx)(b.Z,{disabled:w,loading:m,onClick:k,children:"Update"})]})]})]}):(0,i.jsx)(H.Z,{content:"Connect your wallet to start tweeting..."})},U=function(e){var t=e.isOpen,n=e.close,r=e.tweet;return(0,i.jsx)(p,{isOpen:t,close:n,children:(0,i.jsxs)("div",{className:v,children:[(0,i.jsxs)("div",{className:x,children:[(0,i.jsx)("h1",{children:"Update tweet"}),(0,i.jsx)("button",{className:w,onClick:function(e){e.stopPropagation(),n()},children:(0,i.jsx)(h,{})})]}),(0,i.jsx)(k,{tweet:r,onFinish:n})]})})},F=function(e){var t=e.tweet,n=function(){var e=(0,r.useState)(!1),t=(0,Z.Z)(e,2),n=t[0],a=t[1];return{isOpen:n,toggle:function(){var e=!n;a(e),e?document.body.classList.add("overflow-hidden"):document.body.classList.remove("overflow-hidden")}}}(),a=n.isOpen,o=n.toggle,c=(0,y.T)();return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)("div",{className:s,children:[(0,i.jsx)("button",{onClick:function(e){o()},children:(0,i.jsx)(l,{})}),(0,i.jsx)("button",{onClick:function(e){c(V.A3.deleteTweet(t))},children:(0,i.jsx)(u,{})})]}),(0,i.jsx)(U,{isOpen:a,close:o,tweet:t})]})},A="TweetCard_tweet__wrapper__hIiC2",E="TweetCard_tweet__header__jQGp1",R="TweetCard_author__XIXl9",D="TweetCard_date__WvyVC",W="TweetCard_tweet__body__V-vwr",P="TweetCard_content__MUB0l",S="TweetCard_topic__vvt95",X=n(2281),Y=function(e){var t,n=e.tweet,a=(0,I.Os)().publicKey,s=(0,r.useCallback)((function(e){return(null===a||void 0===a?void 0:a.toBase58())===e.toBase58()?X.s2.PROFILE:"".concat(X.s2.USERS,"/").concat(e.toBase58())}),[a]),c=(0,r.useMemo)((function(){return(null===a||void 0===a?void 0:a.toBase58())===n.author.toBase58()}),[a,n.author]);return(0,i.jsxs)("div",{className:A,children:[(0,i.jsxs)("div",{className:E,children:[(0,i.jsx)(o.OL,{className:R,to:s(n.author),children:n.authorKey}),(0,i.jsx)("span",{className:D,children:n.createdAt}),c&&(0,i.jsx)(F,{tweet:n})]}),(0,i.jsxs)("div",{className:W,children:[(0,i.jsx)("p",{className:P,children:n.content}),n.topic&&(0,i.jsxs)(o.OL,{className:S,to:(t=n.topic,"".concat(X.s2.TOPICS,"/").concat(t)),children:["#",n.topic]})]})]})},K="TweetList_tweet__list__1e2VC",Q=function(e){var t=e.tweets,n=e.loading;return(0,i.jsxs)("div",{className:K,children:[t.map((function(e){return(0,i.jsx)(Y,{tweet:e},e.key)})),n&&(0,i.jsx)(a.Z,{})]})}},918:function(e,t,n){n.d(t,{Z:function(){return f}});var r,a=n(9677),o=n(9382),s=n(3358),c={btn:"Button_btn__Nl0XW","btn--primary":"Button_btn--primary__wQaO+",loader_color:"Button_loader_color__uKVIQ","btn--secondary":"Button_btn--secondary__-FVi7",btn__loader:"Button_btn__loader__M8Ir4",btn__txt:"Button_btn__txt__1DO3e"},i=n(2727),l=n(9051),u=n(5583),_=n(2885),d=["children","className","loading","variant"];!function(e){e.PRIMARY="primary",e.SECONDARY="secondary"}(r||(r={}));var f=function(e){var t=e.children,n=e.className,f=e.loading,m=e.variant,p=void 0===m?r.PRIMARY:m,h=(0,o.Z)(e,d),v=(0,s.useRef)(null),x=(0,s.useMemo)((function(){return c["btn--".concat(p)]}),[p]);return(0,s.useEffect)((function(){if(v.current){var e=v.current.offsetWidth;v.current.style.width="".concat(e,"px")}}),[]),(0,_.jsx)("button",(0,a.Z)((0,a.Z)({ref:v},h),{},{className:[c.btn,x,n].join(" "),children:(0,_.jsx)(l.Z,{mode:"out-in",children:(0,_.jsx)(u.Z,{addEndListener:function(e,t){e.addEventListener("transitionend",t,!1)},classNames:"fade",unmountOnExit:!0,children:f?(0,_.jsx)("div",{className:c.btn__loader,children:(0,_.jsx)(i.Z,{className:c.loader_color})}):(0,_.jsx)("div",{className:c.btn__txt,children:t})},f?"loader":"btn")})}))}},9319:function(e,t,n){n.d(t,{Z:function(){return o}});n(3358);var r={item:"DataItem_item__Eym0s",item__icon:"DataItem_item__icon__MRwjp",item__content:"DataItem_item__content__3Imge"},a=n(2885),o=function(e){var t=e.className,n=e.content,o=e.Icon;return(0,a.jsxs)("div",{className:[r.item,t].join(" "),children:[o&&(0,a.jsx)(o,{className:r.item__icon}),(0,a.jsx)("span",{className:r.item__content,children:n})]})}},8599:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(9677),a=n(9382),o=(n(3358),{input:"Input_input__+UP2D"}),s=n(2885),c=["className"],i=function(e){var t=e.className,n=(0,a.Z)(e,c);return(0,s.jsx)("input",(0,r.Z)((0,r.Z)({},n),{},{className:[o.input,t].join(" ")}))}},5020:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(9677),a=n(9382),o=n(3358),s={textarea:"TextArea_textarea__eB0cu"},c=n(2885),i=["className","autoresize"],l=function(e){var t=e.className,n=e.autoresize,l=(0,a.Z)(e,i),u=(0,o.useRef)(null);return function(e){var t=(0,o.useCallback)((function(){var t=null===e||void 0===e?void 0:e.current;t&&(t.style.height="auto",t.style.height=t.scrollHeight+"px")}),[e]);(0,o.useEffect)((function(){var n=null===e||void 0===e?void 0:e.current;if(n)return t(),n.addEventListener("input",t),function(){null===n||void 0===n||n.removeEventListener("input",t)}}),[t,e])}(n?u:void 0),(0,c.jsx)("textarea",(0,r.Z)((0,r.Z)({ref:u},l),{},{className:[s.textarea,t].join(" ")}))}},5228:function(e,t,n){var r=n(9677),a=(n(3358),n(2885));t.Z=function(e){return(0,a.jsx)("svg",(0,r.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},e),{},{children:(0,a.jsx)("path",{fill:"currentColor",d:"M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"})}))}}}]);
//# sourceMappingURL=520.85f1eaed.chunk.js.map