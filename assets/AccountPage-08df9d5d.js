import{q as pe,a as G,s as P,t as ee,v as fe,w as ie,x as oe,y as B,z as me,A as V,B as he,D as ve,e as ge,E as _,j as i,d as $,F as xe,H as be}from"./index-1c3e6e26.js";import{c as ye}from"./index.esm-b18602fb.js";import{U as we,p as ke,t as je}from"./index-f20f4b4b.js";/* empty css                         */import{S as H,E as X}from"./error-66ecfc54.js";var se={exports:{}};(function(t,o){(function(u,g){t.exports=g(pe,G)})(window,function(u,g){return W={},s.m=y=[function(n,l){n.exports=u},function(n,l){n.exports=g},function(n,l,m){m.r(l),m.d(l,"namedSizes",function(){return k}),m.d(l,"Checkmark",function(){return M});var h=m(1),b=m.n(h),w=m(0),S=m.n(w),k=(m(3),{small:16,medium:24,large:52,xLarge:72,xxLarge:96}),M=function(v){var E=v.size,j=v.color,R=k[E]||E,I={width:R,height:R};return j&&(I["--checkmark-fill-color"]=j),b.a.createElement("svg",{className:"checkmark",xmlns:"http://www.w3.org/2000/svg",style:I,viewBox:"0 0 52 52"},b.a.createElement("circle",{className:"checkmark__circle",cx:"26",cy:"26",r:"25",fill:"none"}),b.a.createElement("path",{className:"checkmark__check",fill:"none",d:"M14.1 27.2l7.1 7.2 16.7-16.8"}))};M.propTypes={size:S.a.oneOfType([S.a.string,S.a.number]),color:S.a.string},M.defaultProps={size:"large"}},function(n,l,m){var h=m(4);typeof h=="string"&&(h=[[n.i,h,""]]);var b={hmr:!0,transform:void 0,insertInto:void 0};m(6)(h,b),h.locals&&(n.exports=h.locals)},function(n,l,m){(n.exports=m(5)(!1)).push([n.i,":root{--checkmark-fill-color:#7ac142;--checkmark-arrow-color:#fff;--checkmark-arrow-thickness:5}.checkmark{display:block;margin-left:auto;margin-right:auto;border-radius:50%;stroke:var(--checkmark-arrow-color);stroke-width:var(--checkmark-arrow-thickness);stroke-miterlimit:10;//box-shadow:inset 0 0 0 var(--checkmark-fill-color);animation:fill .4s ease-in-out .4s forwards,scale .3s ease-in-out .9s both}.checkmark__circle{stroke-dasharray:166;stroke-dashoffset:166;stroke-width:var(--checkmark-arrow-thickness);stroke-miterlimit:10;stroke:var(--checkmark-fill-color);fill:none;animation:stroke .6s cubic-bezier(.65,0,.45,1) forwards}.checkmark__check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;animation:stroke .3s cubic-bezier(.65,0,.45,1) .8s forwards}@keyframes stroke{to{stroke-dashoffset:0}}@keyframes scale{0%,to{transform:none}50%{transform:scale3d(1.1,1.1,1)}}@keyframes fill{to{box-shadow:inset 0 0 0 100vh var(--checkmark-fill-color)}}",""])},function(n,l){n.exports=function(m){var h=[];return h.toString=function(){return this.map(function(b){var w=function(S,k){var M=S[1]||"",v=S[3];if(!v)return M;if(k&&typeof btoa=="function"){var E=function(R){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(R))))+" */"}(v),j=v.sources.map(function(R){return"/*# sourceURL="+v.sourceRoot+R+" */"});return[M].concat(j).concat([E]).join(`
`)}return[M].join(`
`)}(b,m);return b[2]?"@media "+b[2]+"{"+w+"}":w}).join("")},h.i=function(b,w){typeof b=="string"&&(b=[[null,b,""]]);for(var S={},k=0;k<this.length;k++){var M=this[k][0];typeof M=="number"&&(S[M]=!0)}for(k=0;k<b.length;k++){var v=b[k];typeof v[0]=="number"&&S[v[0]]||(w&&!v[2]?v[2]=w:w&&(v[2]="("+v[2]+") and ("+w+")"),h.push(v))}},h}},function(n,l,m){var h,b,w,S={},k=(h=function(){return window&&document&&document.all&&!window.atob},function(){return b===void 0&&(b=h.apply(this,arguments)),b}),M=(w={},function(r,e){if(typeof r=="function")return r();if(w[r]===void 0){var a=(function(d,x){return x?x.querySelector(d):document.querySelector(d)}).call(this,r,e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch{a=null}w[r]=a}return w[r]}),v=null,E=0,j=[],R=m(7);function I(r,e){for(var a=0;a<r.length;a++){var d=r[a],x=S[d.id];if(x){x.refs++;for(var f=0;f<x.parts.length;f++)x.parts[f](d.parts[f]);for(;f<d.parts.length;f++)x.parts.push(A(d.parts[f],e))}else{var C=[];for(f=0;f<d.parts.length;f++)C.push(A(d.parts[f],e));S[d.id]={id:d.id,refs:1,parts:C}}}}function T(r,e){for(var a=[],d={},x=0;x<r.length;x++){var f=r[x],C=e.base?f[0]+e.base:f[0],p={css:f[1],media:f[2],sourceMap:f[3]};d[C]?d[C].parts.push(p):a.push(d[C]={id:C,parts:[p]})}return a}function D(r,e){var a=M(r.insertInto);if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var d=j[j.length-1];if(r.insertAt==="top")d?d.nextSibling?a.insertBefore(e,d.nextSibling):a.appendChild(e):a.insertBefore(e,a.firstChild),j.push(e);else if(r.insertAt==="bottom")a.appendChild(e);else{if(typeof r.insertAt!="object"||!r.insertAt.before)throw new Error(`[Style Loader]

 Invalid value for parameter 'insertAt' ('options.insertAt') found.
 Must be 'top', 'bottom', or Object.
 (https://github.com/webpack-contrib/style-loader#insertat)
`);var x=M(r.insertAt.before,a);a.insertBefore(e,x)}}function Y(r){if(r.parentNode===null)return!1;r.parentNode.removeChild(r);var e=j.indexOf(r);0<=e&&j.splice(e,1)}function O(r){var e=document.createElement("style");if(r.attrs.type===void 0&&(r.attrs.type="text/css"),r.attrs.nonce===void 0){var a=function(){return m.nc}();a&&(r.attrs.nonce=a)}return J(e,r.attrs),D(r,e),e}function J(r,e){Object.keys(e).forEach(function(a){r.setAttribute(a,e[a])})}function A(r,e){var a,d,x,f;if(e.transform&&r.css){if(!(f=typeof e.transform=="function"?e.transform(r.css):e.transform.default(r.css)))return function(){};r.css=f}if(e.singleton){var C=E++;a=v=v||O(e),d=K.bind(null,a,C,!1),x=K.bind(null,a,C,!0)}else x=r.sourceMap&&typeof URL=="function"&&typeof URL.createObjectURL=="function"&&typeof URL.revokeObjectURL=="function"&&typeof Blob=="function"&&typeof btoa=="function"?(a=function(p){var c=document.createElement("link");return p.attrs.type===void 0&&(p.attrs.type="text/css"),p.attrs.rel="stylesheet",J(c,p.attrs),D(p,c),c}(e),d=(function(p,c,N){var L=N.css,Z=N.sourceMap,ue=c.convertToAbsoluteUrls===void 0&&Z;(c.convertToAbsoluteUrls||ue)&&(L=R(L)),Z&&(L+=`
/*# sourceMappingURL=data:application/json;base64,`+btoa(unescape(encodeURIComponent(JSON.stringify(Z))))+" */");var de=new Blob([L],{type:"text/css"}),ne=p.href;p.href=URL.createObjectURL(de),ne&&URL.revokeObjectURL(ne)}).bind(null,a,e),function(){Y(a),a.href&&URL.revokeObjectURL(a.href)}):(a=O(e),d=(function(p,c){var N=c.css,L=c.media;if(L&&p.setAttribute("media",L),p.styleSheet)p.styleSheet.cssText=N;else{for(;p.firstChild;)p.removeChild(p.firstChild);p.appendChild(document.createTextNode(N))}}).bind(null,a),function(){Y(a)});return d(r),function(p){if(p){if(p.css===r.css&&p.media===r.media&&p.sourceMap===r.sourceMap)return;d(r=p)}else x()}}n.exports=function(r,e){if(typeof DEBUG<"u"&&DEBUG&&typeof document!="object")throw new Error("The style-loader cannot be used in a non-browser environment");(e=e||{}).attrs=typeof e.attrs=="object"?e.attrs:{},e.singleton||typeof e.singleton=="boolean"||(e.singleton=k()),e.insertInto||(e.insertInto="head"),e.insertAt||(e.insertAt="bottom");var a=T(r,e);return I(a,e),function(d){for(var x=[],f=0;f<a.length;f++){var C=a[f];(p=S[C.id]).refs--,x.push(p)}for(d&&I(T(d,e),e),f=0;f<x.length;f++){var p;if((p=x[f]).refs===0){for(var c=0;c<p.parts.length;c++)p.parts[c]();delete S[p.id]}}}};var F,Q=(F=[],function(r,e){return F[r]=e,F.filter(Boolean).join(`
`)});function K(r,e,a,d){var x=a?"":d.css;if(r.styleSheet)r.styleSheet.cssText=Q(e,x);else{var f=document.createTextNode(x),C=r.childNodes;C[e]&&r.removeChild(C[e]),C.length?r.insertBefore(f,C[e]):r.appendChild(f)}}},function(n,l){n.exports=function(m){var h=typeof window<"u"&&window.location;if(!h)throw new Error("fixUrls requires window.location");if(!m||typeof m!="string")return m;var b=h.protocol+"//"+h.host,w=b+h.pathname.replace(/\/[^\/]*$/,"/");return m.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(S,k){var M,v=k.trim().replace(/^"(.*)"$/,function(E,j){return j}).replace(/^'(.*)'$/,function(E,j){return j});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(v)?S:(M=v.indexOf("//")===0?v:v.indexOf("/")===0?b+v:w+v.replace(/^\.\//,""),"url("+JSON.stringify(M)+")")})}}],s.c=W,s.d=function(n,l,m){s.o(n,l)||Object.defineProperty(n,l,{enumerable:!0,get:m})},s.r=function(n){typeof Symbol<"u"&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},s.t=function(n,l){if(1&l&&(n=s(n)),8&l||4&l&&typeof n=="object"&&n&&n.__esModule)return n;var m=Object.create(null);if(s.r(m),Object.defineProperty(m,"default",{enumerable:!0,value:n}),2&l&&typeof n!="string")for(var h in n)s.d(m,h,(function(b){return n[b]}).bind(null,h));return m},s.n=function(n){var l=n&&n.__esModule?function(){return n.default}:function(){return n};return s.d(l,"a",l),l},s.o=function(n,l){return Object.prototype.hasOwnProperty.call(n,l)},s.p="",s(s.s=2);function s(n){if(W[n])return W[n].exports;var l=W[n]={i:n,l:!1,exports:{}};return y[n].call(l.exports,l,l.exports,s),l.l=!0,l.exports}var y,W})})(se);var Se=se.exports;const Ce="/goose_track_frontend-02/assets/user-fef7ac92.svg",Ne=P.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`,Me=P.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 10px 40px;
  background-color: ${({theme:t})=>t.secondaryBgColor};

  border-radius: 16px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
     padding: 60px 0; 
    height: 100%;
  }
`,Ge=P.h2`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,ae=P.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,Pe=P.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  margin-bottom: 18px;

  background-color: var(--main-background-color);
  border-radius: 50%;

  transition: all 0.5s;

  &:hover,
  &:focus {
    scale: 1.1;
  }

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -31px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    width: 124px;
    height: 124px;
    margin-bottom: 20px;
  }
`,Ue=P(ye)`
  position: absolute;
  bottom: -3px;
  right: 12px;
  background-color: var(--white);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--main-blue);

  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 18px;
    bottom: -4px;
  }
`,We=P.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1;

    grid-column-gap: 50px;
    grid-row-gap: 24px;
  }
`,Ee=P.p`
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;P.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;const Re=P.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & > div > div {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      gap: 18px;
    }

    @media screen and (min-width: 768px) {
      gap: 24px;
    }
  }

  & > div > div:nth-of-type(1) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  } 


  & > div > div > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
      align-items: center;
     }

  }

  & > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${({theme:t})=>t.borderInputColor};
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: ${({theme:t})=>t.borderInputColor};
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    &:hover,
    &:focus {
      border-color: var(--black);
    }

    @media screen and (min-width: 1440px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > label > p {
    color: ${({theme:t})=>t.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
  }

  & > div > div > div > label {
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    @media screen and (min-width: 768px) {
      align-items: center;
     }
  }

  & > div > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid ${({theme:t})=>t.borderInputColor};
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: var(--calendar-date-color);
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }
    &:hover,
    &:focus {
      border-color: var(--black);
    }

    @media screen and (min-width: 1440px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > div > label > p {
    color: ${({theme:t})=>t.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`,te=P.button`
  max-width: 195px;
  height: 46px;
  border-radius: 16px;
  background-color: var(--main-blue, #3e85f3);
  border: none;
  padding: 14px 50px;
  color: var(--white);
  font-family: 'InterSemiBold';
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
  outline: none;
  margin-top: 40px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  &:disabled {
    background-color: #3e85f380;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    grid-column: span 2;
  }
`,Ie=P.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({theme:t})=>t.borderInputColor};
  padding: 12px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--calendar-date-color);
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: ${({theme:t})=>t.borderInputColor};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border-color: var(--black);
  }

  @media screen and (min-width: 1440px) {
    width: 354px;
    height: 46px;
  }
`,ze=P.div`
  position: absolute;
  top: 6px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);
  background-color: ${({theme:t})=>t.secondaryBgColor};
  background-image: url(${Ce});

  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,z=P.img`
  position: absolute;
  bottom: 9px;
  right: 9px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    bottom: 10px;
  }
  
  @media screen and (min-width: 1440px) {
    right: 8px;
  }  
`,Le=P(te)`
  background-color: transparent;
  color: var(--main-blue);
  width: auto;
  padding: 10px 30px;

  @media screen and (min-width: 1440px) {
    grid-row-gap: 24px;
  }

  &:hover{
    color: var(--white);
  }
`,Te=P(te)`
  background-color: transparent;
  width: auto;
  padding: 10px 30px;
  color: var(--error-color);

  &:hover{
    background-color:var(--error-color);
    color: var(--white);
  }
`;function q(t,o){if(t.one!==void 0&&o===1)return t.one;var u=o%10,g=o%100;return u===1&&g!==11?t.singularNominative.replace("{{count}}",String(o)):u>=2&&u<=4&&(g<10||g>20)?t.singularGenitive.replace("{{count}}",String(o)):t.pluralGenitive.replace("{{count}}",String(o))}function U(t){return function(o,u){return u&&u.addSuffix?u.comparison&&u.comparison>0?t.future?q(t.future,o):"за "+q(t.regular,o):t.past?q(t.past,o):q(t.regular,o)+" тому":q(t.regular,o)}}var De=function(o,u){return u&&u.addSuffix?u.comparison&&u.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},Oe={lessThanXSeconds:U({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:U({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:De,lessThanXMinutes:U({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:U({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:U({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:U({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:U({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:U({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:U({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:U({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:U({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:U({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:U({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:U({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:U({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},Ae=function(o,u,g){return g=g||{},Oe[o](u,g)};const Fe=Ae;var Be={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},Ve={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},_e={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},$e={date:ee({formats:Be,defaultWidth:"full"}),time:ee({formats:Ve,defaultWidth:"full"}),dateTime:ee({formats:_e,defaultWidth:"full"})};const He=$e;function le(t,o,u){fe(2,arguments);var g=ie(t,u),s=ie(o,u);return g.getTime()===s.getTime()}var re=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function Xe(t){var o=re[t];switch(t){case 0:case 3:case 5:case 6:return"'у минулу "+o+" о' p";case 1:case 2:case 4:return"'у минулий "+o+" о' p"}}function ce(t){var o=re[t];return"'у "+o+" о' p"}function qe(t){var o=re[t];switch(t){case 0:case 3:case 5:case 6:return"'у наступну "+o+" о' p";case 1:case 2:case 4:return"'у наступний "+o+" о' p"}}var Ye=function(o,u,g){var s=oe(o),y=s.getUTCDay();return le(s,u,g)?ce(y):Xe(y)},Je=function(o,u,g){var s=oe(o),y=s.getUTCDay();return le(s,u,g)?ce(y):qe(y)},Qe={lastWeek:Ye,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:Je,other:"P"},Ke=function(o,u,g,s){var y=Qe[o];return typeof y=="function"?y(u,g,s):y};const Ze=Ke;var et={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},tt={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},rt={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},nt={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},it={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},at={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},ot={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},st=function(o,u){var g=String(u==null?void 0:u.unit),s=Number(o),y;return g==="date"?s===3||s===23?y="-є":y="-е":g==="minute"||g==="second"||g==="hour"?y="-а":y="-й",s+y},lt={ordinalNumber:st,era:B({values:et,defaultWidth:"wide"}),quarter:B({values:tt,defaultWidth:"wide",argumentCallback:function(o){return o-1}}),month:B({values:rt,defaultWidth:"wide",formattingValues:nt,defaultFormattingWidth:"wide"}),day:B({values:it,defaultWidth:"wide"}),dayPeriod:B({values:at,defaultWidth:"any",formattingValues:ot,defaultFormattingWidth:"wide"})};const ct=lt;var ut=/^(\d+)(-?(е|й|є|а|я))?/i,dt=/\d+/i,pt={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},ft={any:[/^д/i,/^н/i]},mt={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},ht={any:[/1/i,/2/i,/3/i,/4/i]},vt={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},gt={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},xt={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},bt={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},yt={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},wt={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},kt={ordinalNumber:me({matchPattern:ut,parsePattern:dt,valueCallback:function(o){return parseInt(o,10)}}),era:V({matchPatterns:pt,defaultMatchWidth:"wide",parsePatterns:ft,defaultParseWidth:"any"}),quarter:V({matchPatterns:mt,defaultMatchWidth:"wide",parsePatterns:ht,defaultParseWidth:"any",valueCallback:function(o){return o+1}}),month:V({matchPatterns:vt,defaultMatchWidth:"wide",parsePatterns:gt,defaultParseWidth:"any"}),day:V({matchPatterns:xt,defaultMatchWidth:"wide",parsePatterns:bt,defaultParseWidth:"any"}),dayPeriod:V({matchPatterns:yt,defaultMatchWidth:"wide",parsePatterns:wt,defaultParseWidth:"any"})};const jt=kt;var St={code:"uk",formatDistance:Fe,formatLong:He,formatRelative:Ze,localize:ct,match:jt,options:{weekStartsOn:1,firstWeekContainsDate:1}};const Ct=St;we("uk",Ct);const Nt=()=>{const{userName:t,email:o,phone:u,skype:g,birthday:s,avatarURL:y}=he(ve),[W,n]=G.useState(s===""?new Date:ke(s,"dd/MM/yyyy",new Date)),[l,m]=G.useState(t??""),[h,b]=G.useState(o??""),[w,S]=G.useState(u??""),[k,M]=G.useState(g??""),[v,E]=G.useState(y??""),[j,R]=G.useState(""),[I,T]=G.useState(!1),[D,Y]=G.useState(!0),[O,J]=G.useState(!0),[A,F]=G.useState(!0),[Q,K]=G.useState(!0),[r,e]=G.useState(!0),a=ge(),d=G.useRef(null);let x=t!==l||o!==h||u!==w||g!==k||s!==(W&&_(W,"dd/MM/yyyy"))||j!=="";G.useEffect(()=>()=>{j&&URL.revokeObjectURL(j)},[j]),G.useEffect(()=>{function c(){xe(y).then(function(N){E(N?y:"")})}c()},[y]),G.useEffect(()=>{if(I){const c=setTimeout(()=>{T(!1)},3e3);return()=>{clearTimeout(c)}}},[I]);const f=()=>{d.current&&d.current.click()},C=c=>{const N=c.target.files[0];if(E(N),N){const L=URL.createObjectURL(N);R(L)}else R(y)},p=async c=>{if(c.preventDefault(),!x)return;T(!0);const N=new FormData;t!==l&&N.append("userName",l),o!==h&&N.append("email",h),u!==w&&N.append("phone",w),g!==k&&N.append("skype",k),s!==_(W,"dd/MM/yyyy")&&N.append("birthday",_(W,"dd/MM/yyyy")),j!==""&&N.append("avatarURL",v),a(be(N))};return i.jsx(Ne,{children:i.jsx(Me,{children:i.jsxs(Re,{onSubmit:p,children:[i.jsxs(Pe,{children:[j?i.jsx(ae,{src:j,alt:t}):v?i.jsx(ae,{src:v,alt:t}):i.jsx(ze,{}),i.jsx(Ue,{onClick:f}),i.jsx("input",{type:"file",accept:"image/*",ref:d,onChange:C,style:{display:"none"},name:"avatar"})]}),i.jsx(Ge,{children:t}),i.jsx(Ee,{children:"User"}),i.jsxs(We,{children:[i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"User Name"}),i.jsx("input",{type:"text",name:"userName",placeholder:"Enter your name",value:l,onChange:c=>{m(c.target.value),J($.customFieldRegexp.test(c.target.value))},style:{borderColor:l?O?"var(--correct-color)":"var(--error-color)":""}}),l?O?i.jsx(z,{src:H}):i.jsx(z,{src:X}):null]}),i.jsx("div",{children:i.jsxs("label",{children:[i.jsx("p",{children:"Birthday"}),i.jsx(je,{dateFormat:"dd/MM/yyyy",calendarStartDay:1,selected:W,onChange:c=>{n(c),e(c?$.birthdayRegexp.test(_(c,"dd/MM/yyyy")):!1)},customInput:i.jsx(Ie,{type:"text",name:"birthday",placeholder:_(new Date,"dd/MM/yyyy"),value:W==null?void 0:W.toString(),style:{borderColor:s?r?"var(--correct-color)":"var(--error-color)":""}})}),s?r?i.jsx(z,{src:H}):i.jsx(z,{src:X}):null]})}),i.jsx("div",{children:i.jsxs("label",{children:[i.jsx("p",{children:"Email"}),i.jsx("input",{type:"text",name:"email",placeholder:"Enter your email address",value:h,onChange:c=>{b(c.target.value),Y($.emailRegexp.test(c.target.value))},style:{borderColor:h?D?"var(--correct-color)":"var(--error-color)":""}}),h?D?i.jsx(z,{src:H}):i.jsx(z,{src:X}):null]})})]}),i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"Phone"}),i.jsx("input",{type:"text",name:"phone",placeholder:"Enter phone number",value:w,onChange:c=>{S(c.target.value),F($.phoneRegexp.test(c.target.value))},style:{borderColor:w?A?"var(--correct-color)":"var(--error-color)":""}}),w?A?i.jsx(z,{src:H}):i.jsx(z,{src:X}):null]}),i.jsxs("label",{children:[i.jsx("p",{children:"Skype"}),i.jsx("input",{type:"text",name:"skype",placeholder:"Enter skype",value:k,onChange:c=>{M(c.target.value),K($.SkypeRegexp.test(c.target.value))},style:{borderColor:k?Q?"var(--correct-color)":"var(--error-color)":""}}),k?Q?i.jsx(z,{src:H}):i.jsx(z,{src:X}):null]})]}),I?i.jsx("div",{style:{marginTop:"8px"},children:i.jsx(Se.Checkmark,{})}):i.jsx(te,{type:"submit",disabled:I||!x,children:"Save"}),i.jsx(Le,{children:"Change Password"}),i.jsx(Te,{children:"Delete account"})]})]})})})},Et=()=>i.jsx(Nt,{});export{Et as default};
