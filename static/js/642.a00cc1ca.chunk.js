(self.webpackChunksolana_twitter_app=self.webpackChunksolana_twitter_app||[]).push([[642],{3141:function(t,e,n){"use strict";n.d(e,{T:function(){return o}});var r=n(5245),o=function(){return(0,r.I0)()}},8684:function(t,e,n){"use strict";n.d(e,{C:function(){return r}});var r=n(5245).v9},818:function(t,e,n){"use strict";n.d(e,{Nu:function(){return o},st:function(){return r}});var r=280,o=50},6722:function(t,e,n){"use strict";n.d(e,{A:function(){return a},a:function(){return i}});var r=n(7994),o=n.n(r),a=function(t){return{memcmp:{offset:8,bytes:t}}},i=function(t){return{memcmp:{offset:52,bytes:o().encode(Buffer.from(t))}}}},3944:function(t,e,n){"use strict";n.d(e,{Z:function(){return u}});var r=n(9677),o=n(9382),a=(n(3358),n(8599)),i={input__wrapper:"IconInput_input__wrapper__snYNX",icon:"IconInput_icon__I71fy",field:"IconInput_field__DwuCl"},s=n(2885),c=["className","Icon"],u=function(t){var e=t.className,n=t.Icon,u=(0,o.Z)(t,c);return(0,s.jsxs)("div",{className:[i.input__wrapper,e].join(" "),children:[n&&(0,s.jsx)(n,{className:[i.icon,u.disabled?"!text-blue-500":""].join(" ")}),(0,s.jsx)(a.Z,(0,r.Z)({className:i.field},u))]})}},7877:function(t,e,n){"use strict";n.d(e,{Z:function(){return Z}});var r=n(4611),o=n(3755),a=n(3680),i=n(3358),s=n(9677),c=n(9382),u={textarea:"TextArea_textarea__eB0cu"},l=n(2885),f=["className","autoresize"],_=function(t){var e=t.className,n=t.autoresize,r=(0,c.Z)(t,f),o=(0,i.useRef)(null);return function(t){var e=(0,i.useCallback)((function(){var e=null===t||void 0===t?void 0:t.current;e&&(e.style.height="auto",e.style.height=e.scrollHeight+"px")}),[t]);(0,i.useEffect)((function(){var n=null===t||void 0===t?void 0:t.current;if(n)return e(),n.addEventListener("input",e),function(){null===n||void 0===n||n.removeEventListener("input",e)}}),[e,t])}(n?o:void 0),(0,l.jsx)("textarea",(0,s.Z)((0,s.Z)({ref:o},r),{},{className:[u.textarea,e].join(" ")}))},d=n(3944),m=n(5228),h=n(918),p=n(9319),v={form__wrapper:"TweetForm_form__wrapper__2kMtH",form__footer:"TweetForm_form__footer__nPiA1",topic:"TweetForm_topic__0Yyzd",button:"TweetForm_button__n2Jop",counter:"TweetForm_counter__8f62J"},w=n(5006),x=n(3141),j=n(5874),g=n(818),N=n(4566),Z=function(t){var e=t.className,n=t.forcedTopic,s=(0,w.Os)().connected,c=(0,x.T)(),u=(0,i.useState)(""),f=(0,a.Z)(u,2),Z=f[0],b=f[1],y=(0,i.useState)(n||""),C=(0,a.Z)(y,2),T=C[0],A=C[1],H=(0,i.useState)(!1),L=(0,a.Z)(H,2),I=L[0],M=L[1];(0,i.useEffect)((function(){A(n||"")}),[n]);var E=(0,i.useMemo)((function(){return g.st-Z.length}),[Z]),V=(0,i.useMemo)((function(){return E<0?"text-red-500":E<=10?"text-yellow-500":"text-gray-400"}),[E]),B=(0,i.useMemo)((function(){return!!n}),[n]),k=(0,i.useMemo)((function(){return!Z.length||E<0}),[Z,E]),U=function(){var t=(0,o.Z)((0,r.Z)().mark((function t(e){var o;return(0,r.Z)().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(e.preventDefault(),!I){t.next=3;break}return t.abrupt("return");case 3:return t.prev=3,M(!0),t.next=7,(0,N.R)(Z,T);case 7:o=t.sent,c(j.A3.addTweet(o)),b(""),A(n||""),t.next=15;break;case 13:t.prev=13,t.t0=t.catch(3);case 15:return t.prev=15,M(!1),t.finish(15);case 18:case"end":return t.stop()}}),t,null,[[3,13,15,18]])})));return function(e){return t.apply(this,arguments)}}();return s?(0,l.jsxs)("form",{className:[v.form__wrapper,e].join(" "),children:[(0,l.jsx)(_,{autoresize:!0,placeholder:"What's happening?",value:Z,onChange:function(t){b(t.target.value)}}),(0,l.jsxs)("div",{className:v.form__footer,children:[(0,l.jsx)(d.Z,{className:v.topic,Icon:m.Z,maxLength:g.Nu,disabled:B,value:T,onChange:function(t){A(t.target.value)}}),(0,l.jsxs)("div",{className:v.button,children:[(0,l.jsxs)("span",{className:[v.counter,V].join(" "),children:[E," left"]}),(0,l.jsx)(h.Z,{disabled:k,loading:I,onClick:U,children:"Tweet"})]})]})]}):(0,l.jsx)(p.Z,{content:"Connect your wallet to start tweeting..."})}},6031:function(t,e,n){"use strict";n.d(e,{Z:function(){return b}});var r=n(3358),o=n(5413),a=n(4203),i=n(9677),s=n(2885),c=function(t){return(0,s.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},t),{},{children:(0,s.jsx)("path",{fill:"currentColor",d:"M5,3C3.89,3 3,3.89 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19H5V5H12V3H5M17.78,4C17.61,4 17.43,4.07 17.3,4.2L16.08,5.41L18.58,7.91L19.8,6.7C20.06,6.44 20.06,6 19.8,5.75L18.25,4.2C18.12,4.07 17.95,4 17.78,4M15.37,6.12L8,13.5V16H10.5L17.87,8.62L15.37,6.12Z"})}))},u=function(t){return(0,s.jsx)("svg",(0,i.Z)((0,i.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},t),{},{children:(0,s.jsx)("path",{fill:"currentColor",d:"M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M9,8H11V17H9V8M13,8H15V17H13V8Z"})}))},l="TweetCard_tweet__wrapper__hIiC2",f="TweetCard_tweet__header__jQGp1",_="TweetCard_author__XIXl9",d="TweetCard_date__WvyVC",m="TweetCard_controls__4ShKX",h="TweetCard_tweet__body__V-vwr",p="TweetCard_content__MUB0l",v="TweetCard_topic__vvt95",w=n(2281),x=n(5006),j=n(3141),g=n(5874),N=function(t){var e,n=t.tweet,o=(0,x.Os)().publicKey,i=(0,j.T)(),N=(0,r.useCallback)((function(t){return(null===o||void 0===o?void 0:o.toBase58())===t.toBase58()?w.s2.PROFILE:"".concat(w.s2.USERS,"/").concat(t.toBase58())}),[o]),Z=(0,r.useMemo)((function(){return(null===o||void 0===o?void 0:o.toBase58())===n.author.toBase58()}),[o,n.author]);return(0,s.jsxs)("div",{className:l,children:[(0,s.jsxs)("div",{className:f,children:[(0,s.jsx)(a.OL,{className:_,to:N(n.author),children:n.authorKey}),(0,s.jsx)("span",{className:d,children:n.createdAt}),Z&&(0,s.jsxs)("div",{className:m,children:[(0,s.jsx)("button",{onClick:function(t){alert("Work in progress...")},children:(0,s.jsx)(c,{})}),(0,s.jsx)("button",{onClick:function(t){i(g.A3.deleteTweet(n))},children:(0,s.jsx)(u,{})})]})]}),(0,s.jsxs)("div",{className:h,children:[(0,s.jsx)("p",{className:p,children:n.content}),n.topic&&(0,s.jsxs)(a.OL,{className:v,to:(e=n.topic,"".concat(w.s2.TOPICS,"/").concat(e)),children:["#",n.topic]})]})]})},Z="TweetList_tweet__list__1e2VC",b=function(t){var e=t.tweets,n=t.loading;return(0,s.jsxs)("div",{className:Z,children:[e.map((function(t){return(0,s.jsx)(N,{tweet:t},t.key)})),n&&(0,s.jsx)(o.Z,{})]})}},918:function(t,e,n){"use strict";n.d(e,{Z:function(){return d}});var r,o=n(9677),a=n(9382),i=n(3358),s={btn:"Button_btn__Nl0XW","btn--primary":"Button_btn--primary__wQaO+",loader_color:"Button_loader_color__uKVIQ","btn--secondary":"Button_btn--secondary__-FVi7",btn__loader:"Button_btn__loader__M8Ir4",btn__txt:"Button_btn__txt__1DO3e"},c=n(2727),u=n(9051),l=n(5583),f=n(2885),_=["children","className","loading","variant"];!function(t){t.PRIMARY="primary",t.SECONDARY="secondary"}(r||(r={}));var d=function(t){var e=t.children,n=t.className,d=t.loading,m=t.variant,h=void 0===m?r.PRIMARY:m,p=(0,a.Z)(t,_),v=(0,i.useRef)(null),w=(0,i.useMemo)((function(){return s["btn--".concat(h)]}),[h]);return(0,i.useEffect)((function(){if(v.current){var t=v.current.offsetWidth;v.current.style.width="".concat(t,"px")}}),[]),(0,f.jsx)("button",(0,o.Z)((0,o.Z)({ref:v},p),{},{className:[s.btn,w,n].join(" "),children:(0,f.jsx)(u.Z,{mode:"out-in",children:(0,f.jsx)(l.Z,{addEndListener:function(t,e){t.addEventListener("transitionend",e,!1)},classNames:"fade",unmountOnExit:!0,children:d?(0,f.jsx)("div",{className:s.btn__loader,children:(0,f.jsx)(c.Z,{className:s.loader_color})}):(0,f.jsx)("div",{className:s.btn__txt,children:e})},d?"loader":"btn")})}))}},9319:function(t,e,n){"use strict";n.d(e,{Z:function(){return a}});n(3358);var r={item:"DataItem_item__Eym0s",item__icon:"DataItem_item__icon__MRwjp",item__content:"DataItem_item__content__3Imge"},o=n(2885),a=function(t){var e=t.className,n=t.content,a=t.Icon;return(0,o.jsxs)("div",{className:[r.item,e].join(" "),children:[a&&(0,o.jsx)(a,{className:r.item__icon}),(0,o.jsx)("span",{className:r.item__content,children:n})]})}},8599:function(t,e,n){"use strict";n.d(e,{Z:function(){return c}});var r=n(9677),o=n(9382),a=(n(3358),{input:"Input_input__+UP2D"}),i=n(2885),s=["className"],c=function(t){var e=t.className,n=(0,o.Z)(t,s);return(0,i.jsx)("input",(0,r.Z)((0,r.Z)({},n),{},{className:[a.input,e].join(" ")}))}},5228:function(t,e,n){"use strict";var r=n(9677),o=(n(3358),n(2885));e.Z=function(t){return(0,o.jsx)("svg",(0,r.Z)((0,r.Z)({xmlns:"http://www.w3.org/2000/svg",version:"1.1",width:"1em",height:"1em",viewBox:"0 0 24 24",fill:"currentColor"},t),{},{children:(0,o.jsx)("path",{fill:"currentColor",d:"M5.41,21L6.12,17H2.12L2.47,15H6.47L7.53,9H3.53L3.88,7H7.88L8.59,3H10.59L9.88,7H15.88L16.59,3H18.59L17.88,7H21.88L21.53,9H17.53L16.47,15H20.47L20.12,17H16.12L15.41,21H13.41L14.12,17H8.12L7.41,21H5.41M9.53,9L8.47,15H14.47L15.53,9H9.53Z"})}))}},5642:function(t,e,n){"use strict";n.r(e),n.d(e,{default:function(){return g}});var r=n(3358),o=n(3680),a=n(3944),i=n(5228),s=n(918),c={form__wrapper:"TopicsForm_form__wrapper__K+Dhq",form__input:"TopicsForm_form__input__rTsB3",form__btn:"TopicsForm_form__btn__Bf6p+"},u=n(4430),l=n(8684),f=n(2281),_=n(818),d=n(2885),m=function(t){var e=t.className,n=t.topicParam,m=(0,u.s0)(),h=(0,l.C)((function(t){return t.tweets.loading})),p=(0,r.useState)(n||""),v=(0,o.Z)(p,2),w=v[0],x=v[1];(0,r.useEffect)((function(){x(n||"")}),[n]);var j=(0,r.useMemo)((function(){return!w.length||w===n}),[w,n]);return(0,d.jsxs)("form",{className:[c.form__wrapper,e].join(" "),children:[(0,d.jsx)(a.Z,{className:c.form__input,Icon:i.Z,maxLength:_.Nu,value:w,onChange:function(t){x(t.target.value)}}),(0,d.jsx)(s.Z,{disabled:j,className:c.form__btn,onClick:function(t){t.preventDefault(),h||m("".concat(f.s2.TOPICS,"/").concat(w))},children:"Search"})]})},h=n(7877),p=n(6031),v=n(5874),w=n(3141),x=n(4180),j=n(6722),g=function(){var t=(0,w.T)(),e=(0,l.C)((function(t){return t.tweets.loading})),n=(0,l.C)(x.u),o=(0,u.UO)().topic;return(0,r.useEffect)((function(){return o&&t(v.A3.getTweets([(0,j.a)(o)])),function(){t(v.A3.setTweets([]))}}),[t,o]),(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(m,{topicParam:o}),o&&(0,d.jsx)(h.Z,{forcedTopic:o}),(0,d.jsx)(p.Z,{tweets:n,loading:e})]})}},8306:function(t){"use strict";t.exports=function(t){if(t.length>=255)throw new TypeError("Alphabet too long");for(var e=new Uint8Array(256),n=0;n<e.length;n++)e[n]=255;for(var r=0;r<t.length;r++){var o=t.charAt(r),a=o.charCodeAt(0);if(255!==e[a])throw new TypeError(o+" is ambiguous");e[a]=r}var i=t.length,s=t.charAt(0),c=Math.log(i)/Math.log(256),u=Math.log(256)/Math.log(i);function l(t){if("string"!==typeof t)throw new TypeError("Expected String");if(0===t.length)return new Uint8Array;for(var n=0,r=0,o=0;t[n]===s;)r++,n++;for(var a=(t.length-n)*c+1>>>0,u=new Uint8Array(a);t[n];){var l=e[t.charCodeAt(n)];if(255===l)return;for(var f=0,_=a-1;(0!==l||f<o)&&-1!==_;_--,f++)l+=i*u[_]>>>0,u[_]=l%256>>>0,l=l/256>>>0;if(0!==l)throw new Error("Non-zero carry");o=f,n++}for(var d=a-o;d!==a&&0===u[d];)d++;for(var m=new Uint8Array(r+(a-d)),h=r;d!==a;)m[h++]=u[d++];return m}return{encode:function(e){if(e instanceof Uint8Array||(ArrayBuffer.isView(e)?e=new Uint8Array(e.buffer,e.byteOffset,e.byteLength):Array.isArray(e)&&(e=Uint8Array.from(e))),!(e instanceof Uint8Array))throw new TypeError("Expected Uint8Array");if(0===e.length)return"";for(var n=0,r=0,o=0,a=e.length;o!==a&&0===e[o];)o++,n++;for(var c=(a-o)*u+1>>>0,l=new Uint8Array(c);o!==a;){for(var f=e[o],_=0,d=c-1;(0!==f||_<r)&&-1!==d;d--,_++)f+=256*l[d]>>>0,l[d]=f%i>>>0,f=f/i>>>0;if(0!==f)throw new Error("Non-zero carry");r=_,o++}for(var m=c-r;m!==c&&0===l[m];)m++;for(var h=s.repeat(n);m<c;++m)h+=t.charAt(l[m]);return h},decodeUnsafe:l,decode:function(t){var e=l(t);if(e)return e;throw new Error("Non-base"+i+" character")}}}},7994:function(t,e,n){var r=n(8306);t.exports=r("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz")}}]);
//# sourceMappingURL=642.a00cc1ca.chunk.js.map