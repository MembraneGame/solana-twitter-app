"use strict";(self.webpackChunksolana_twitter_app=self.webpackChunksolana_twitter_app||[]).push([[163],{918:function(n,e,t){t.d(e,{Z:function(){return m}});var r,a=t(9677),o=t(9382),s=t(3358),_={btn:"Button_btn__Nl0XW","btn--primary":"Button_btn--primary__wQaO+",loader_color:"Button_loader_color__uKVIQ","btn--secondary":"Button_btn--secondary__-FVi7",btn__loader:"Button_btn__loader__M8Ir4",btn__txt:"Button_btn__txt__1DO3e"},i=t(2727),c=t(9051),u=t(5583),l=t(2885),d=["children","className","loading","variant"];!function(n){n.PRIMARY="primary",n.SECONDARY="secondary"}(r||(r={}));var m=function(n){var e=n.children,t=n.className,m=n.loading,f=n.variant,p=void 0===f?r.PRIMARY:f,h=(0,o.Z)(n,d),b=(0,s.useRef)(null),x=(0,s.useMemo)((function(){return _["btn--".concat(p)]}),[p]);return(0,s.useEffect)((function(){if(b.current){var n=b.current.offsetWidth;b.current.style.width="".concat(n,"px")}}),[]),(0,l.jsx)("button",(0,a.Z)((0,a.Z)({ref:b},h),{},{className:[_.btn,x,t].join(" "),children:(0,l.jsx)(c.Z,{mode:"out-in",children:(0,l.jsx)(u.Z,{addEndListener:function(n,e){n.addEventListener("transitionend",e,!1)},classNames:"fade",unmountOnExit:!0,children:m?(0,l.jsx)("div",{className:_.btn__loader,children:(0,l.jsx)(i.Z,{className:_.loader_color})}):(0,l.jsx)("div",{className:_.btn__txt,children:e})},m?"loader":"btn")})}))}},3751:function(n,e,t){var r=t(9677),a=(t(3358),t(2885));e.Z=function(n){return(0,a.jsx)("svg",(0,r.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24"},n),{},{children:(0,a.jsx)("path",{fill:"currentColor",d:"M21 18H15V15H13.3C12.2 17.4 9.7 19 7 19C3.1 19 0 15.9 0 12S3.1 5 7 5C9.7 5 12.2 6.6 13.3 9H24V15H21V18M17 16H19V13H22V11H11.9L11.7 10.3C11 8.3 9.1 7 7 7C4.2 7 2 9.2 2 12S4.2 17 7 17C9.1 17 11 15.7 11.7 13.7L11.9 13H17V16M7 15C5.3 15 4 13.7 4 12S5.3 9 7 9 10 10.3 10 12 8.7 15 7 15M7 11C6.4 11 6 11.4 6 12S6.4 13 7 13 8 12.6 8 12 7.6 11 7 11Z"})}))}},9163:function(n,e,t){t.r(e),t.d(e,{default:function(){return p}});var r=t(3358),a=t(3680),o=t(9677),s=t(9382),_={input:"Input_input__+UP2D"},i=t(2885),c=["className"],u=function(n){var e=n.className,t=(0,s.Z)(n,c);return(0,i.jsx)("input",(0,o.Z)((0,o.Z)({},t),{},{className:[_.input,e].join(" ")}))},l=t(918),d={form__wrapper:"UsersForm_form__wrapper__+DdGz",key__wrapper:"UsersForm_key__wrapper__O-cQm",key__icon:"UsersForm_key__icon__el3a0",form__input:"UsersForm_form__input__5U-uD",form__btn:"UsersForm_form__btn__tMKt5"},m=t(3751),f=function(n){var e=n.className,t=(0,r.useState)(!1),o=(0,a.Z)(t,2),s=o[0],_=o[1],c=(0,r.useState)(""),f=(0,a.Z)(c,2),p=f[0],h=f[1],b=(0,r.useMemo)((function(){return!p.length}),[p]);return(0,i.jsxs)("form",{className:[d.form__wrapper,e].join(" "),children:[(0,i.jsx)("div",{className:d.key__wrapper,children:(0,i.jsx)(m.Z,{className:d.key__icon})}),(0,i.jsx)(u,{className:d.form__input,placeholder:"Public key",value:p,onChange:function(n){h(n.target.value)}}),(0,i.jsx)(l.Z,{disabled:b,className:d.form__btn,loading:s,onClick:function(n){n.preventDefault(),console.log("find",p),_(!0),setTimeout((function(){h(""),_(!1)}),1e3)},children:"Find"})]})},p=function(){return(0,i.jsx)(i.Fragment,{children:(0,i.jsx)(f,{})})}}}]);
//# sourceMappingURL=163.15412ca1.chunk.js.map