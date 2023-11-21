import{a as l,R as pe,U as be,j as a,V as Mt,s as f,P as W,n as ke,W as Fe,X as dt,Y as It,A as ut,Z as Lt,O as Nt,_ as Ot,$ as Ve,M as Bt,N as Dt,r as At,F as Xe}from"./index-0b01e0bf.js";import{a as K,_ as g}from"./objectWithoutPropertiesLoose-df62547b.js";import{e as Ft,f as _t,T as Ht,g as Ee,a as Te,s as ce,b as Ye,u as Ce,c as Z,d as we}from"./styled-74dc7260.js";import{_ as Wt,C as zt}from"./CalendarToolBar-4e5bbe0d.js";import{b as Ut,d as qt}from"./index-8cba0fa1.js";import"./index-812410d9.js";/* empty css                         */function Ze(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function Gt(e,t=166){let n;function o(...i){const r=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function V(e){return e&&e.ownerDocument||document}function xe(e){return V(e).defaultView||window}function Le(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const Kt=typeof window<"u"?l.useLayoutEffect:l.useEffect,Ne=Kt;function Qe(e){const t=l.useRef(e);return Ne(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function te(...e){return l.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Le(n,t)})},e)}function Vt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function pt(){const e=Ft(_t);return e[Ht]||e}const Xt=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Je=Xt,et={disabled:!1},ft=pe.createContext(null);var Yt=function(t){return t.scrollTop},fe="unmounted",J="exited",ee="entering",le="entered",Oe="exiting",Y=function(e){Wt(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=i,d=s&&!s.isMounting?o.enter:o.appear,c;return r.appearStatus=null,o.in?d?(c=J,r.appearStatus=ee):c=le:o.unmountOnExit||o.mountOnEnter?c=fe:c=J,r.state={status:c},r.nextCallback=null,r}t.getDerivedStateFromProps=function(i,r){var s=i.in;return s&&r.status===fe?{status:J}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var r=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ee&&s!==le&&(r=ee):(s===ee||s===le)&&(r=Oe)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,r,s,d;return r=s=d=i,i!=null&&typeof i!="number"&&(r=i.exit,s=i.enter,d=i.appear!==void 0?i.appear:s),{exit:r,enter:s,appear:d}},n.updateStatus=function(i,r){if(i===void 0&&(i=!1),r!==null)if(this.cancelNextCallback(),r===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:be.findDOMNode(this);s&&Yt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:fe})},n.performEnter=function(i){var r=this,s=this.props.enter,d=this.context?this.context.isMounting:i,c=this.props.nodeRef?[d]:[be.findDOMNode(this),d],u=c[0],x=c[1],m=this.getTimeouts(),P=d?m.appear:m.enter;if(!i&&!s||et.disabled){this.safeSetState({status:le},function(){r.props.onEntered(u)});return}this.props.onEnter(u,x),this.safeSetState({status:ee},function(){r.props.onEntering(u,x),r.onTransitionEnd(P,function(){r.safeSetState({status:le},function(){r.props.onEntered(u,x)})})})},n.performExit=function(){var i=this,r=this.props.exit,s=this.getTimeouts(),d=this.props.nodeRef?void 0:be.findDOMNode(this);if(!r||et.disabled){this.safeSetState({status:J},function(){i.props.onExited(d)});return}this.props.onExit(d),this.safeSetState({status:Oe},function(){i.props.onExiting(d),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:J},function(){i.props.onExited(d)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,r){r=this.setNextCallback(r),this.setState(i,r)},n.setNextCallback=function(i){var r=this,s=!0;return this.nextCallback=function(d){s&&(s=!1,r.nextCallback=null,i(d))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,r){this.setNextCallback(r);var s=this.props.nodeRef?this.props.nodeRef.current:be.findDOMNode(this),d=i==null&&!this.props.addEndListener;if(!s||d){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var c=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=c[0],x=c[1];this.props.addEndListener(u,x)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===fe)return null;var r=this.props,s=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var d=K(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pe.createElement(ft.Provider,{value:null},typeof s=="function"?s(i,d):pe.cloneElement(pe.Children.only(s),d))},t}(pe.Component);Y.contextType=ft;Y.propTypes={};function ae(){}Y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ae,onEntering:ae,onEntered:ae,onExit:ae,onExiting:ae,onExited:ae};Y.UNMOUNTED=fe;Y.EXITED=J;Y.ENTERING=ee;Y.ENTERED=le;Y.EXITING=Oe;const ht=Y,xt=e=>e.scrollTop;function ve(e,t){var n,o;const{timeout:i,easing:r,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:s.transitionDelay}}function Zt(e){return Ee("MuiPaper",e)}Te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Qt=["className","component","elevation","square","variant"],Jt=e=>{const{square:t,elevation:n,variant:o,classes:i}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return we(r,Zt,i)},en=ce("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return g({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&g({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ye("#fff",Je(t.elevation))}, ${Ye("#fff",Je(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),tn=l.forwardRef(function(t,n){const o=Ce({props:t,name:"MuiPaper"}),{className:i,component:r="div",elevation:s=1,square:d=!1,variant:c="elevation"}=o,u=K(o,Qt),x=g({},o,{component:r,elevation:s,square:d,variant:c}),m=Jt(x);return a.jsx(en,g({as:r,ownerState:x,className:Z(m.root,i),ref:n},u))}),nn=tn;function mt(e){return typeof e=="string"}function on(e,t,n){return e===void 0||mt(e)?t:g({},t,{ownerState:g({},t.ownerState,n)})}function gt(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function rn(e,t,n){return typeof e=="function"?e(t,n):e}function tt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function sn(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:i,className:r}=e;if(!t){const M=Z(n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),b=g({},n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),S=g({},n,i,o);return M.length>0&&(S.className=M),Object.keys(b).length>0&&(S.style=b),{props:S,internalRef:void 0}}const s=gt(g({},i,o)),d=tt(o),c=tt(i),u=t(s),x=Z(u==null?void 0:u.className,n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),m=g({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),P=g({},u,n,c,d);return x.length>0&&(P.className=x),Object.keys(m).length>0&&(P.style=m),{props:P,internalRef:u.ref}}const an=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ye(e){var t;const{elementType:n,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:r=!1}=e,s=K(e,an),d=r?{}:rn(o,i),{props:c,internalRef:u}=sn(g({},s,{externalSlotProps:d})),x=te(u,d==null?void 0:d.ref,(t=e.additionalProps)==null?void 0:t.ref);return on(n,g({},c,{ref:x}),i)}const ln=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function cn(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function dn(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function un(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||dn(e))}function pn(e){const t=[],n=[];return Array.from(e.querySelectorAll(ln)).forEach((o,i)=>{const r=cn(o);r===-1||!un(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function fn(){return!0}function hn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=pn,isEnabled:s=fn,open:d}=e,c=l.useRef(!1),u=l.useRef(null),x=l.useRef(null),m=l.useRef(null),P=l.useRef(null),M=l.useRef(!1),b=l.useRef(null),S=te(t.ref,b),w=l.useRef(null);l.useEffect(()=>{!d||!b.current||(M.current=!n)},[n,d]),l.useEffect(()=>{if(!d||!b.current)return;const p=V(b.current);return b.current.contains(p.activeElement)||(b.current.hasAttribute("tabIndex")||b.current.setAttribute("tabIndex","-1"),M.current&&b.current.focus()),()=>{i||(m.current&&m.current.focus&&(c.current=!0,m.current.focus()),m.current=null)}},[d]),l.useEffect(()=>{if(!d||!b.current)return;const p=V(b.current),T=k=>{w.current=k,!(o||!s()||k.key!=="Tab")&&p.activeElement===b.current&&k.shiftKey&&(c.current=!0,x.current&&x.current.focus())},C=()=>{const k=b.current;if(k===null)return;if(!p.hasFocus()||!s()||c.current){c.current=!1;return}if(k.contains(p.activeElement)||o&&p.activeElement!==u.current&&p.activeElement!==x.current)return;if(p.activeElement!==P.current)P.current=null;else if(P.current!==null)return;if(!M.current)return;let O=[];if((p.activeElement===u.current||p.activeElement===x.current)&&(O=r(b.current)),O.length>0){var A,j;const F=!!((A=w.current)!=null&&A.shiftKey&&((j=w.current)==null?void 0:j.key)==="Tab"),N=O[0],_=O[O.length-1];typeof N!="string"&&typeof _!="string"&&(F?_.focus():N.focus())}else k.focus()};p.addEventListener("focusin",C),p.addEventListener("keydown",T,!0);const L=setInterval(()=>{p.activeElement&&p.activeElement.tagName==="BODY"&&C()},50);return()=>{clearInterval(L),p.removeEventListener("focusin",C),p.removeEventListener("keydown",T,!0)}},[n,o,i,s,d,r]);const I=p=>{m.current===null&&(m.current=p.relatedTarget),M.current=!0,P.current=p.target;const T=t.props.onFocus;T&&T(p)},h=p=>{m.current===null&&(m.current=p.relatedTarget),M.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:d?0:-1,onFocus:h,ref:u,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:S,onFocus:I}),a.jsx("div",{tabIndex:d?0:-1,onFocus:h,ref:x,"data-testid":"sentinelEnd"})]})}function xn(e){return typeof e=="function"?e():e}const mn=l.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[s,d]=l.useState(null),c=te(l.isValidElement(o)?o.ref:null,n);if(Ne(()=>{r||d(xn(i)||document.body)},[i,r]),Ne(()=>{if(s&&!r)return Le(n,s),()=>{Le(n,null)}},[n,s,r]),r){if(l.isValidElement(o)){const u={ref:c};return l.cloneElement(o,u)}return a.jsx(l.Fragment,{children:o})}return a.jsx(l.Fragment,{children:s&&Mt.createPortal(o,s)})});function gn(e){const t=V(e);return t.body===e?xe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function he(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function nt(e){return parseInt(xe(e).getComputedStyle(e).paddingRight,10)||0}function bn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function ot(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,s=>{const d=r.indexOf(s)===-1,c=!bn(s);d&&c&&he(s,i)})}function Re(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function vn(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(gn(o)){const s=Vt(V(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${nt(o)+s}px`;const d=V(o).querySelectorAll(".mui-fixed");[].forEach.call(d,c=>{n.push({value:c.style.paddingRight,property:"padding-right",el:c}),c.style.paddingRight=`${nt(c)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=V(o).body;else{const s=o.parentElement,d=xe(o);r=(s==null?void 0:s.nodeName)==="HTML"&&d.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:d})=>{r?s.style.setProperty(d,r):s.style.removeProperty(d)})}}function yn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class kn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&he(t.modalRef,!1);const i=yn(n);ot(n,t.mount,t.modalRef,i,!0);const r=Re(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=Re(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=vn(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Re(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&he(t.modalRef,n),ot(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&he(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function En(e){return typeof e=="function"?e():e}function Tn(e){return e?e.props.hasOwnProperty("in"):!1}const Cn=new kn;function wn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=Cn,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:d,children:c,onClose:u,open:x,rootRef:m}=e,P=l.useRef({}),M=l.useRef(null),b=l.useRef(null),S=te(b,m),[w,I]=l.useState(!x),h=Tn(c);let p=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(p=!1);const T=()=>V(M.current),C=()=>(P.current.modalRef=b.current,P.current.mount=M.current,P.current),L=()=>{i.mount(C(),{disableScrollLock:o}),b.current&&(b.current.scrollTop=0)},k=Qe(()=>{const y=En(t)||T().body;i.add(C(),y),b.current&&L()}),O=l.useCallback(()=>i.isTopModal(C()),[i]),A=Qe(y=>{M.current=y,y&&(x&&O()?L():b.current&&he(b.current,p))}),j=l.useCallback(()=>{i.remove(C(),p)},[p,i]);l.useEffect(()=>()=>{j()},[j]),l.useEffect(()=>{x?k():(!h||!r)&&j()},[x,j,h,r,k]);const F=y=>E=>{var D;(D=y.onKeyDown)==null||D.call(y,E),!(E.key!=="Escape"||E.which===229||!O())&&(n||(E.stopPropagation(),u&&u(E,"escapeKeyDown")))},N=y=>E=>{var D;(D=y.onClick)==null||D.call(y,E),E.target===E.currentTarget&&u&&u(E,"backdropClick")};return{getRootProps:(y={})=>{const E=gt(e);delete E.onTransitionEnter,delete E.onTransitionExited;const D=g({},E,y);return g({role:"presentation"},D,{onKeyDown:F(D),ref:S})},getBackdropProps:(y={})=>{const E=y;return g({"aria-hidden":!0},E,{onClick:N(E),open:x})},getTransitionProps:()=>{const y=()=>{I(!1),s&&s()},E=()=>{I(!0),d&&d(),r&&j()};return{onEnter:Ze(y,c==null?void 0:c.props.onEnter),onExited:Ze(E,c==null?void 0:c.props.onExited)}},rootRef:S,portalRef:A,isTopModal:O,exited:w,hasTransition:h}}const Pn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],Sn={entering:{opacity:1},entered:{opacity:1}},Rn=l.forwardRef(function(t,n){const o=pt(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:d,easing:c,in:u,onEnter:x,onEntered:m,onEntering:P,onExit:M,onExited:b,onExiting:S,style:w,timeout:I=i,TransitionComponent:h=ht}=t,p=K(t,Pn),T=l.useRef(null),C=te(T,d.ref,n),L=$=>v=>{if($){const y=T.current;v===void 0?$(y):$(y,v)}},k=L(P),O=L(($,v)=>{xt($);const y=ve({style:w,timeout:I,easing:c},{mode:"enter"});$.style.webkitTransition=o.transitions.create("opacity",y),$.style.transition=o.transitions.create("opacity",y),x&&x($,v)}),A=L(m),j=L(S),F=L($=>{const v=ve({style:w,timeout:I,easing:c},{mode:"exit"});$.style.webkitTransition=o.transitions.create("opacity",v),$.style.transition=o.transitions.create("opacity",v),M&&M($)}),N=L(b),_=$=>{r&&r(T.current,$)};return a.jsx(h,g({appear:s,in:u,nodeRef:T,onEnter:O,onEntered:A,onEntering:k,onExit:F,onExited:N,onExiting:j,addEndListener:_,timeout:I},p,{children:($,v)=>l.cloneElement(d,g({style:g({opacity:0,visibility:$==="exited"&&!u?"hidden":void 0},Sn[$],w,d.props.style),ref:C},v))}))}),jn=Rn;function $n(e){return Ee("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const Mn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],In=e=>{const{classes:t,invisible:n}=e;return we({root:["root",n&&"invisible"]},$n,t)},Ln=ce("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>g({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),Nn=l.forwardRef(function(t,n){var o,i,r;const s=Ce({props:t,name:"MuiBackdrop"}),{children:d,className:c,component:u="div",components:x={},componentsProps:m={},invisible:P=!1,open:M,slotProps:b={},slots:S={},TransitionComponent:w=jn,transitionDuration:I}=s,h=K(s,Mn),p=g({},s,{component:u,invisible:P}),T=In(p),C=(o=b.root)!=null?o:m.root;return a.jsx(w,g({in:M,timeout:I},h,{children:a.jsx(Ln,g({"aria-hidden":!0},C,{as:(i=(r=S.root)!=null?r:x.Root)!=null?i:u,className:Z(T.root,c,C==null?void 0:C.className),ownerState:g({},p,C==null?void 0:C.ownerState),classes:T,ref:n,children:d}))}))}),On=Nn;function Bn(e){return Ee("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const Dn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],An=e=>{const{open:t,exited:n,classes:o}=e;return we({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Bn,o)},Fn=ce("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>g({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),_n=ce(On,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Hn=l.forwardRef(function(t,n){var o,i,r,s,d,c;const u=Ce({name:"MuiModal",props:t}),{BackdropComponent:x=_n,BackdropProps:m,className:P,closeAfterTransition:M=!1,children:b,container:S,component:w,components:I={},componentsProps:h={},disableAutoFocus:p=!1,disableEnforceFocus:T=!1,disableEscapeKeyDown:C=!1,disablePortal:L=!1,disableRestoreFocus:k=!1,disableScrollLock:O=!1,hideBackdrop:A=!1,keepMounted:j=!1,onBackdropClick:F,open:N,slotProps:_,slots:$}=u,v=K(u,Dn),y=g({},u,{closeAfterTransition:M,disableAutoFocus:p,disableEnforceFocus:T,disableEscapeKeyDown:C,disablePortal:L,disableRestoreFocus:k,disableScrollLock:O,hideBackdrop:A,keepMounted:j}),{getRootProps:E,getBackdropProps:D,getTransitionProps:H,portalRef:G,isTopModal:me,exited:U,hasTransition:ge}=wn(g({},y,{rootRef:n})),Q=g({},y,{exited:U}),X=An(Q),ne={};if(b.props.tabIndex===void 0&&(ne.tabIndex="-1"),ge){const{onEnter:R,onExited:B}=H();ne.onEnter=R,ne.onExited=B}const oe=(o=(i=$==null?void 0:$.root)!=null?i:I.Root)!=null?o:Fn,de=(r=(s=$==null?void 0:$.backdrop)!=null?s:I.Backdrop)!=null?r:x,ue=(d=_==null?void 0:_.root)!=null?d:h.root,re=(c=_==null?void 0:_.backdrop)!=null?c:h.backdrop,Pe=ye({elementType:oe,externalSlotProps:ue,externalForwardedProps:v,getSlotProps:E,additionalProps:{ref:n,as:w},ownerState:Q,className:Z(P,ue==null?void 0:ue.className,X==null?void 0:X.root,!Q.open&&Q.exited&&(X==null?void 0:X.hidden))}),Se=ye({elementType:de,externalSlotProps:re,additionalProps:m,getSlotProps:R=>D(g({},R,{onClick:B=>{F&&F(B),R!=null&&R.onClick&&R.onClick(B)}})),className:Z(re==null?void 0:re.className,m==null?void 0:m.className,X==null?void 0:X.backdrop),ownerState:Q});return!j&&!N&&(!ge||U)?null:a.jsx(mn,{ref:G,container:S,disablePortal:L,children:a.jsxs(oe,g({},Pe,{children:[!A&&x?a.jsx(de,g({},Se)):null,a.jsx(hn,{disableEnforceFocus:T,disableAutoFocus:p,disableRestoreFocus:k,isEnabled:me,open:N,children:l.cloneElement(b,ne)})]}))})}),Wn=Hn,zn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Be(e){return`scale(${e}, ${e**2})`}const Un={entering:{opacity:1,transform:Be(1)},entered:{opacity:1,transform:"none"}},je=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),bt=l.forwardRef(function(t,n){const{addEndListener:o,appear:i=!0,children:r,easing:s,in:d,onEnter:c,onEntered:u,onEntering:x,onExit:m,onExited:P,onExiting:M,style:b,timeout:S="auto",TransitionComponent:w=ht}=t,I=K(t,zn),h=l.useRef(),p=l.useRef(),T=pt(),C=l.useRef(null),L=te(C,r.ref,n),k=v=>y=>{if(v){const E=C.current;y===void 0?v(E):v(E,y)}},O=k(x),A=k((v,y)=>{xt(v);const{duration:E,delay:D,easing:H}=ve({style:b,timeout:S,easing:s},{mode:"enter"});let G;S==="auto"?(G=T.transitions.getAutoHeightDuration(v.clientHeight),p.current=G):G=E,v.style.transition=[T.transitions.create("opacity",{duration:G,delay:D}),T.transitions.create("transform",{duration:je?G:G*.666,delay:D,easing:H})].join(","),c&&c(v,y)}),j=k(u),F=k(M),N=k(v=>{const{duration:y,delay:E,easing:D}=ve({style:b,timeout:S,easing:s},{mode:"exit"});let H;S==="auto"?(H=T.transitions.getAutoHeightDuration(v.clientHeight),p.current=H):H=y,v.style.transition=[T.transitions.create("opacity",{duration:H,delay:E}),T.transitions.create("transform",{duration:je?H:H*.666,delay:je?E:E||H*.333,easing:D})].join(","),v.style.opacity=0,v.style.transform=Be(.75),m&&m(v)}),_=k(P),$=v=>{S==="auto"&&(h.current=setTimeout(v,p.current||0)),o&&o(C.current,v)};return l.useEffect(()=>()=>{clearTimeout(h.current)},[]),a.jsx(w,g({appear:i,in:d,nodeRef:C,onEnter:A,onEntered:j,onEntering:O,onExit:N,onExited:_,onExiting:F,addEndListener:$,timeout:S==="auto"?null:S},I,{children:(v,y)=>l.cloneElement(r,g({style:g({opacity:0,transform:Be(.75),visibility:v==="exited"&&!d?"hidden":void 0},Un[v],b,r.props.style),ref:L},y))}))});bt.muiSupportAuto=!0;const qn=bt;function Gn(e){return Ee("MuiPopover",e)}Te("MuiPopover",["root","paper"]);const Kn=["onEntering"],Vn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Xn=["slotProps"];function rt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function it(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function st(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const Yn=e=>{const{classes:t}=e;return we({root:["root"],paper:["paper"]},Gn,t)},Zn=ce(Wn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Qn=ce(nn,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Jn=l.forwardRef(function(t,n){var o,i,r;const s=Ce({props:t,name:"MuiPopover"}),{action:d,anchorEl:c,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:m="anchorEl",children:P,className:M,container:b,elevation:S=8,marginThreshold:w=16,open:I,PaperProps:h={},slots:p,slotProps:T,transformOrigin:C={vertical:"top",horizontal:"left"},TransitionComponent:L=qn,transitionDuration:k="auto",TransitionProps:{onEntering:O}={},disableScrollLock:A=!1}=s,j=K(s.TransitionProps,Kn),F=K(s,Vn),N=(o=T==null?void 0:T.paper)!=null?o:h,_=l.useRef(),$=te(_,N.ref),v=g({},s,{anchorOrigin:u,anchorReference:m,elevation:S,marginThreshold:w,externalPaperSlotProps:N,transformOrigin:C,TransitionComponent:L,transitionDuration:k,TransitionProps:j}),y=Yn(v),E=l.useCallback(()=>{if(m==="anchorPosition")return x;const R=$e(c),z=(R&&R.nodeType===1?R:V(_.current).body).getBoundingClientRect();return{top:z.top+rt(z,u.vertical),left:z.left+it(z,u.horizontal)}},[c,u.horizontal,u.vertical,x,m]),D=l.useCallback(R=>({vertical:rt(R,C.vertical),horizontal:it(R,C.horizontal)}),[C.horizontal,C.vertical]),H=l.useCallback(R=>{const B={width:R.offsetWidth,height:R.offsetHeight},z=D(B);if(m==="none")return{top:null,left:null,transformOrigin:st(z)};const We=E();let ie=We.top-z.vertical,se=We.left-z.horizontal;const ze=ie+B.height,Ue=se+B.width,qe=xe($e(c)),Ge=qe.innerHeight-w,Ke=qe.innerWidth-w;if(w!==null&&ie<w){const q=ie-w;ie-=q,z.vertical+=q}else if(w!==null&&ze>Ge){const q=ze-Ge;ie-=q,z.vertical+=q}if(w!==null&&se<w){const q=se-w;se-=q,z.horizontal+=q}else if(Ue>Ke){const q=Ue-Ke;se-=q,z.horizontal+=q}return{top:`${Math.round(ie)}px`,left:`${Math.round(se)}px`,transformOrigin:st(z)}},[c,m,E,D,w]),[G,me]=l.useState(I),U=l.useCallback(()=>{const R=_.current;if(!R)return;const B=H(R);B.top!==null&&(R.style.top=B.top),B.left!==null&&(R.style.left=B.left),R.style.transformOrigin=B.transformOrigin,me(!0)},[H]);l.useEffect(()=>(A&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[c,A,U]);const ge=(R,B)=>{O&&O(R,B),U()},Q=()=>{me(!1)};l.useEffect(()=>{I&&U()}),l.useImperativeHandle(d,()=>I?{updatePosition:()=>{U()}}:null,[I,U]),l.useEffect(()=>{if(!I)return;const R=Gt(()=>{U()}),B=xe(c);return B.addEventListener("resize",R),()=>{R.clear(),B.removeEventListener("resize",R)}},[c,I,U]);let X=k;k==="auto"&&!L.muiSupportAuto&&(X=void 0);const ne=b||(c?V($e(c)).body:void 0),oe=(i=p==null?void 0:p.root)!=null?i:Zn,de=(r=p==null?void 0:p.paper)!=null?r:Qn,ue=ye({elementType:de,externalSlotProps:g({},N,{style:G?N.style:g({},N.style,{opacity:0})}),additionalProps:{elevation:S,ref:$},ownerState:v,className:Z(y.paper,N==null?void 0:N.className)}),re=ye({elementType:oe,externalSlotProps:(T==null?void 0:T.root)||{},externalForwardedProps:F,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ne,open:I},ownerState:v,className:Z(y.root,M)}),{slotProps:Pe}=re,Se=K(re,Xn);return a.jsx(oe,g({},Se,!mt(oe)&&{slotProps:Pe,disableScrollLock:A},{children:a.jsx(L,g({appear:!0,in:I,onEntering:ge,onExited:Q,timeout:X},j,{children:a.jsx(de,g({},ue,{children:P}))}))}))}),eo=Jn,to=f.section`
  width: 335px;
  height: 100%;
  margin: 0 auto;
  /* width: 375px; */


  @media screen and (min-width: 768px) {
    width: 704px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
  }
`,no=f.li`
  width: 335px;
  flex-shrink: 0;
  padding: 18px 6px 10px 18px;
  background-color: ${({theme:e})=>e.secondaryBgColor};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 20px 28px 20px;
  }
`,oo=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),ro=f.div`
  margin-bottom: 24px;
  width: 299px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    width: 301px;
    height: 38px;
  }
`,io=f.h4`
  color: ${({theme:e})=>e.mainTextColor};
  text-align: center;
  font-family: 'InterTightBold', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${()=>20/18};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: ${()=>24/20};
  }
`,so=f(oo)`
  width: 22px;
  height: 22px;
  stroke: #111111;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`,vt=l.createContext(),_e=()=>l.useContext(vt);function yt({title:e,idOfCompletion:t}){const{toggleModal:n}=_e();return a.jsxs(ro,{children:[a.jsx(io,{children:e}),a.jsx("button",{type:"button",onClick:()=>{n(t)},children:a.jsx(so,{})})]})}yt.propTypes={title:W.string.isRequired,idOfCompletion:W.string.isRequired};const kt=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{id:"plus"},l.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),ao=f.button`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background-color: ${({theme:e})=>e.sidebarActiveBtnBG};
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,lo=f(kt)`
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  cursor: pointer;
`,co=f.p`
  color: ${({theme:e})=>e.mainTextColor};

  text-align: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function Et({idOfCompletion:e}){const{toggleModal:t}=_e();return a.jsxs(ao,{type:"button",onClick:()=>{t(e)},children:[a.jsx(lo,{}),a.jsx(co,{children:"Add task"})]})}Et.propTypes={idOfCompletion:W.string.isRequired};const Tt=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{id:"pencil-01"},l.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),uo=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),Ct=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{clipPath:"url(#clip0_3288_961)"},l.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_3288_961"},l.createElement("rect",{width:16,height:16,fill:"white"})))),po=f.ul`
  position: relative;
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,fo=f.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ho=f.button`
  width: 100%;
  height: 100%;
`,xo=f(Ct)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,mo=f(Tt)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,go=f(uo)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,bo=f.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 115px;
  padding: 14px;

  border-radius: 8px;
  background-color: ${({theme:e})=>e.secondaryBgColor};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  border: ${({theme:e})=>e.toolbarBorder};

  @media screen and (min-width: 768px) {
    width: 147px;
    padding: 20px 24px;
  }
`,De=f.p`
  flex-shrink: 0;
  color: ${({theme:e})=>e.secondaryTextColor};
  font-family: 'InterTightMedium', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16; /* 116.667% */

  transition: color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28; /* 128.571% */
  }
`,Ae=f(Ct)`
  cursor: pointer;
  width: 14px;
  height: 14px;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,vo=f.button`
  display: flex;
  justify-content: space-between;

  &:hover ${Ae}, &:focus ${Ae} {
    stroke: ${({theme:e})=>e.btnTextColor};
  }

  &:hover ${De}, &:focus ${De} {
    color: ${({theme:e})=>e.btnTextColor};
  }
`,at=e=>e.split(" ").map(t=>t.toLowerCase()).join("-");function yo({id:e}){const t=["To do","In progress","Done"],{currentDay:n}=ke(),{currentData:o}=Fe(n),[i]=o.data.filter(c=>c._id===e),{category:r}=i,[s]=dt(),d=c=>{const u={...i,category:at(c)};delete u._id,delete u.date,s({id:e,data:u})};return a.jsx(bo,{children:t.map(c=>{if(r!==at(c))return a.jsxs(vo,{onClick:()=>{d(c)},children:[a.jsx(De,{children:c}),a.jsx(Ae,{})]},c)})})}function wt({id:e}){const{toggleModal:t}=_e(),[n,o]=l.useState(null),[i]=It(),r=()=>{o(null)},s=!!n,d=s?"simple-popover":void 0,c={swipe:{component:a.jsx(xo,{"aria-describedby":d}),onClickCallback:x=>{o(x.currentTarget)}},edit:{component:a.jsx(mo,{}),onClickCallback:()=>{t(e)}},remove:{component:a.jsx(go,{}),onClickCallback:()=>{i(e)}}},u=Object.keys(c);return a.jsx(a.Fragment,{children:a.jsxs(po,{children:[u.map(x=>{const{component:m,onClickCallback:P}=c[x];return a.jsx(fo,{children:a.jsx(ho,{type:"button",onClick:P,children:m})},x)}),a.jsx(eo,{id:e,open:s,anchorEl:n,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},PaperProps:{sx:{borderRadius:"8px"}},children:a.jsx(yo,{id:e})})]})})}wt.propTypes={id:W.string.isRequired};const ko=f.li`
  flex-shrink: 0;
  width: 299px;
  height: 108px;
  padding: 14px 14px 18px 15px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${({theme:e})=>e.mainBGColor};

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 112px;
  }
`,Eo=f.p`
  overflow: hidden;
  color: ${({theme:e})=>e.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,To=f.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Co=f.div`
  display: flex;
  justify-content: space-between;
`,wo=f.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,Po=f.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,So=f.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,Ro=f.p`
  color: ${({theme:e})=>e.taskCardSuccessText};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function Pt({taskTitle:e,priority:t,id:n}){const o=ut(Lt),i={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function r(s){const d=s.split("");return[d[0].toUpperCase(),...d.slice(1)].join("")}return a.jsx(ko,{children:a.jsxs(To,{children:[a.jsx(Eo,{children:e}),a.jsxs(Co,{children:[a.jsxs(wo,{children:[a.jsx(Po,{src:o}),a.jsx(So,{color:i[t],children:a.jsx(Ro,{children:r(t)})})]}),a.jsx(wt,{id:n})]})]})})}Pt.propTypes={taskTitle:W.string.isRequired,priority:W.string.isRequired,id:W.string.isRequired};const jo=f.ul`
  max-height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarThumb};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    max-height: 50vh;
  }
`;function St({tasks:e}){return a.jsx(jo,{children:e.map(t=>{const{_id:n,title:o,priority:i}=t;return a.jsx(Pt,{taskTitle:o,priority:i,id:n},n)})})}St.propTypes={tasks:W.arrayOf(W.object).isRequired};function Rt({title:e,tasks:t}){return a.jsxs(no,{children:[a.jsx(yt,{title:e,idOfCompletion:e}),t&&a.jsx(St,{tasks:t}),a.jsx(Et,{idOfCompletion:e})]})}Rt.propTypes={title:W.string.isRequired,tasks:W.arrayOf(W.object).isRequired};const $o=f.ul`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarThumb};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;function jt({filteredTasks:e}){const t=Object.keys(e);return a.jsx($o,{children:t.map(n=>a.jsx(Rt,{title:n,tasks:e[n]},n))})}jt.propTypes={filteredTasks:W.objectOf(W.array).isRequired};const Mo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",...e},l.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Io=f.div`
  padding-top: 48px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  max-width: 303px;

  @media screen and (min-width: 767px) {
    max-width: none;
    width: 396px;
    padding-top: 40px;
    padding-left: 28px;
    padding-right: 28px;
  }
`,Lo=f(Mo)`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  top: 14px;
  right: 14px;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`,Me=f.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: ${({theme:e})=>e.formLabelColor};
`,No=f.input`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.28;
  height: 42px;
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding-left: 14px;
  color: ${({theme:e})=>e.secondaryTextColor};
  border: 1px solid ${({theme:e})=>e.inputBorderColor};
  background-color: ${({theme:e})=>e.mainBGColor};

  &::placeholder {
    font-size: 14px;
    color: ${({theme:e})=>e.formLabelColor};
  }

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>e.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`,Oo=f.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`,lt=f.input`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  border: none;
  border-radius: 8px;

  color-scheme: ${({theme:e})=>e.colorScheme};
  border: 1px solid ${({theme:e})=>e.inputBorderColor};
  background-color: ${({theme:e})=>e.mainBGColor};

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>e.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`,Bo=f.div`
  margin-bottom: 32px;
`,Ie=f.label`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`,He=f.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`,Do=f(He)`
  background-color: #72c2f8;
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`,Ao=f(He)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`,Fo=f(He)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`,_o=f.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`,Ho=f(kt)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`,Wo=f(Tt)`
  width: 30px;
  height: 18px;
  stroke: #fff;
`,$t=f.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 182px;
  height: 48px;
  border-radius: 8px;
  color: #ffff;
  background-color: #3e85f3;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`,zo=f($t)``,Uo=f.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({theme:e})=>e.inputBorderColor};
  border: 1px solid ${({theme:e})=>e.inputBorderColor};
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${({theme:e})=>e.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`,qo=({initialData:e,closeModal:t,category:n=""})=>{const{currentDay:o}=ke(),i=ut(Nt),[r,s]=l.useState(!1),[d,c]=l.useState(!!e),[u,x]=l.useState(""),[m,{isError:P,error:M}]=Ot(),[b,{isError:S,error:w}]=dt(),{currentData:I}=Fe(o),[h,p]=l.useState(e||{title:"",start:"09:00",end:"09:30",priority:"low",date:o,category:""}),T=j=>{switch(j){case"To do":p({...h,category:"to-do"}),s(!1);break;case"In progress":p({...h,category:"in-progress"}),s(!1);break;case"Done":p({...h,category:"done"}),s(!1);break;default:{const F=I.data.filter(({_id:N})=>N===j);s(!0),p(...F);break}}};l.useEffect(()=>{T(n),e?(p(e),c(!0)):c(!1)},[n,e]),l.useEffect(()=>{P&&(console.log(M),Ve("Error creating task",i)),S&&(console.log(w),Ve("Error creating task",i))},[M,P,w,S,i]);const C=()=>{const j=h._id;delete h._id,delete h.date,b({id:j,data:h}),t()},L=()=>{m(h),t()},k=j=>{const{name:F,value:N}=j.target;p({...h,[F]:N}),x("")},O=j=>{if(j.preventDefault(),!["to-do","in-progress","done"].includes(h.category)){x("Invalid category. Choose from: to-do, in-progress, done.");return}d?C():L(),p(e),c(!1)},A=()=>{t(),c(!1)};return a.jsxs(Io,{children:[a.jsx(Lo,{onClick:()=>{t()}}),a.jsxs("form",{onSubmit:O,children:[a.jsx(Me,{htmlFor:"title",children:"Title"}),a.jsx(No,{type:"text",name:"title",value:(h==null?void 0:h.title)||"",onChange:k,placeholder:"Enter text",required:!0,maxLength:"250"}),a.jsxs(Oo,{children:[a.jsxs("div",{children:[a.jsx(Me,{htmlFor:"start",children:" Start"}),a.jsx(lt,{type:"time",name:"start",value:(h==null?void 0:h.start)||"",onChange:k,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]"})]}),a.jsxs("div",{children:[a.jsx(Me,{htmlFor:"end",children:"End"}),a.jsx(lt,{type:"time",name:"end",value:(h==null?void 0:h.end)||"",onChange:k,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]",min:h==null?void 0:h.start})]})]}),a.jsxs(Bo,{children:[a.jsxs(Ie,{children:[a.jsx(Do,{type:"radio",name:"priority",value:"low",checked:(h==null?void 0:h.priority)==="low",onChange:k,required:!0}),"Low"]}),a.jsxs(Ie,{children:[a.jsx(Ao,{type:"radio",name:"priority",value:"medium",checked:(h==null?void 0:h.priority)==="medium",onChange:k,required:!0}),"Medium"]}),a.jsxs(Ie,{children:[a.jsx(Fo,{type:"radio",name:"priority",value:"high",checked:(h==null?void 0:h.priority)==="high",onChange:k,required:!0}),"High"]})]}),u&&a.jsx("div",{children:u}),a.jsxs(_o,{children:[r?a.jsxs($t,{onClick:C,type:"submit",children:[a.jsx(Wo,{}),"Edit"]}):a.jsxs(zo,{onClick:L,type:"submit",children:[a.jsx(Ho,{}),"Add"]}),a.jsx(Uo,{type:"button",onClick:A,children:"Cancel"})]})]})]})},Go=({initialData:e,closeModal:t,category:n})=>a.jsx(Bt,{onClose:t,children:a.jsx(qo,{initialData:e,closeModal:t,category:n})}),Ko=Go;function Vo(e,t){const n={"To do":[],"In progress":[],Done:[]};return e.map(o=>{const{category:i,date:r}=o;if(r===t)switch(i){case"to-do":n["To do"].unshift(o);break;case"in-progress":n["In progress"].unshift(o);break;default:n.Done.unshift(o);break}}),n}const Xo=f(Dt)`
  padding: 4px 6px;
  color: ${({theme:e})=>e.secondaryTextColor};
  transition:
    background-color 300ms linear,
    color 300ms linear;

  &.active {
    border-radius: 6px;
    background-color: ${({theme:e})=>e.btnTextColor};
    color: #fff;

    pointer-events: none;
    cursor: default;
    text-decoration: none;
  }
  &:hover {
    border-radius: 6px;
    background-color: #dcebf7;
    color: ${({theme:e})=>e.secondaryBgColor};
  }

  @media screen and (min-width: 768px) {
    padding: 4px 8px;
  }
`,Yo=f.div`
  width: 335px;
  padding: 14px 18px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: ${({theme:e})=>e.secondaryBgColor};

  @media screen and (min-width: 768px) {
    width: 704px;
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 10px 46px;
  }
`,Zo=f.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 4px;
  }
`,Qo=f.p`
  color: ${({theme:e})=>e.secondaryTextColor};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12; /* 112.5% */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28; /* 128.571% */
  }
`,Jo=f.p`
  font-family: 'InterTightBold', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16; /* 116.667% */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12; /* 112.5% */
  }
`;function er(e){const t=[],n=Ut(e,{weekStartsOn:1});t.push(Xe(n,"	iii-EEEEE-d-dd-MM-yyyy"));for(let o=1;o<=6;o++){const i=qt(n,o);t.push(Xe(i,"	iii-EEEEE-d-dd-MM-yyyy"))}return t}function tr(){const{currentDay:e}=ke(),t=At.useMediaQuery({maxWidth:767}),n=er(new Date(e));return a.jsx(Yo,{children:n.map(o=>{const[i,r,s,d,c,u]=o.split("-");return a.jsxs(Zo,{children:[a.jsx(Qo,{children:t?r:i}),a.jsx(Xo,{to:`/calendar/day/${u}-${c}-${d}`,children:a.jsx(Jo,{children:s})})]},o)})})}const ct={"To do":[],"In progress":[],Done:[]};function cr(){const{currentDay:e}=ke(),{currentData:t}=Fe(e),[n,o]=l.useState(!1),[i,r]=l.useState(null),[s,d]=l.useState(ct);l.useEffect(()=>{if(t){const u=t.data;d(Vo(u,e))}return()=>{d(ct),r(null)}},[e,t]);const c=u=>{r(u),o(!n),n?document.body.style.overflow="auto":document.body.style.overflow="hidden"};return a.jsxs(a.Fragment,{children:[a.jsx(zt,{}),a.jsx(to,{children:a.jsxs(vt.Provider,{value:{toggleModal:c},children:[a.jsx(tr,{}),a.jsx(jt,{filteredTasks:s}),n&&a.jsx(Ko,{category:i,closeModal:c})]})})]})}export{cr as default};
