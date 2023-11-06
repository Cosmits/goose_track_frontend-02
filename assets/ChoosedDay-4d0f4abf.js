import{a as l,R as pe,M as be,j as a,S as $t,s as f,P as W,k as ke,T as Fe,U as dt,V as Mt,z as It,W as Lt,X as Nt,Q as Ve,Y as Bt,N as Ot,r as Dt,B as Xe}from"./index-ff59e3f7.js";import{a as K,_ as b}from"./objectWithoutPropertiesLoose-df62547b.js";import{e as At,f as Ft,T as Ht,g as Ee,a as Te,s as ce,b as Ye,u as Ce,c as Z,d as we}from"./styled-d3c28df5.js";import{_ as _t,C as Wt}from"./CalendarToolBar-a987412a.js";import{b as zt}from"./index-7e7456d9.js";import"./index-7b0baa8b.js";/* empty css                         */function Ze(...e){return e.reduce((t,n)=>n==null?t:function(...i){t.apply(this,i),n.apply(this,i)},()=>{})}function Ut(e,t=166){let n;function o(...i){const r=()=>{e.apply(this,i)};clearTimeout(n),n=setTimeout(r,t)}return o.clear=()=>{clearTimeout(n)},o}function V(e){return e&&e.ownerDocument||document}function xe(e){return V(e).defaultView||window}function Le(e,t){typeof e=="function"?e(t):e&&(e.current=t)}const qt=typeof window<"u"?l.useLayoutEffect:l.useEffect,Ne=qt;function Qe(e){const t=l.useRef(e);return Ne(()=>{t.current=e}),l.useRef((...n)=>(0,t.current)(...n)).current}function te(...e){return l.useMemo(()=>e.every(t=>t==null)?null:t=>{e.forEach(n=>{Le(n,t)})},e)}function Gt(e){const t=e.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}function ut(){const e=At(Ft);return e[Ht]||e}const Kt=e=>{let t;return e<1?t=5.11916*e**2:t=4.5*Math.log(e+1)+2,(t/100).toFixed(2)},Je=Kt,et={disabled:!1},pt=pe.createContext(null);var Vt=function(t){return t.scrollTop},fe="unmounted",J="exited",ee="entering",le="entered",Be="exiting",Y=function(e){_t(t,e);function t(o,i){var r;r=e.call(this,o,i)||this;var s=i,c=s&&!s.isMounting?o.enter:o.appear,d;return r.appearStatus=null,o.in?c?(d=J,r.appearStatus=ee):d=le:o.unmountOnExit||o.mountOnEnter?d=fe:d=J,r.state={status:d},r.nextCallback=null,r}t.getDerivedStateFromProps=function(i,r){var s=i.in;return s&&r.status===fe?{status:J}:null};var n=t.prototype;return n.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},n.componentDidUpdate=function(i){var r=null;if(i!==this.props){var s=this.state.status;this.props.in?s!==ee&&s!==le&&(r=ee):(s===ee||s===le)&&(r=Be)}this.updateStatus(!1,r)},n.componentWillUnmount=function(){this.cancelNextCallback()},n.getTimeouts=function(){var i=this.props.timeout,r,s,c;return r=s=c=i,i!=null&&typeof i!="number"&&(r=i.exit,s=i.enter,c=i.appear!==void 0?i.appear:s),{exit:r,enter:s,appear:c}},n.updateStatus=function(i,r){if(i===void 0&&(i=!1),r!==null)if(this.cancelNextCallback(),r===ee){if(this.props.unmountOnExit||this.props.mountOnEnter){var s=this.props.nodeRef?this.props.nodeRef.current:be.findDOMNode(this);s&&Vt(s)}this.performEnter(i)}else this.performExit();else this.props.unmountOnExit&&this.state.status===J&&this.setState({status:fe})},n.performEnter=function(i){var r=this,s=this.props.enter,c=this.context?this.context.isMounting:i,d=this.props.nodeRef?[c]:[be.findDOMNode(this),c],u=d[0],x=d[1],m=this.getTimeouts(),C=c?m.appear:m.enter;if(!i&&!s||et.disabled){this.safeSetState({status:le},function(){r.props.onEntered(u)});return}this.props.onEnter(u,x),this.safeSetState({status:ee},function(){r.props.onEntering(u,x),r.onTransitionEnd(C,function(){r.safeSetState({status:le},function(){r.props.onEntered(u,x)})})})},n.performExit=function(){var i=this,r=this.props.exit,s=this.getTimeouts(),c=this.props.nodeRef?void 0:be.findDOMNode(this);if(!r||et.disabled){this.safeSetState({status:J},function(){i.props.onExited(c)});return}this.props.onExit(c),this.safeSetState({status:Be},function(){i.props.onExiting(c),i.onTransitionEnd(s.exit,function(){i.safeSetState({status:J},function(){i.props.onExited(c)})})})},n.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},n.safeSetState=function(i,r){r=this.setNextCallback(r),this.setState(i,r)},n.setNextCallback=function(i){var r=this,s=!0;return this.nextCallback=function(c){s&&(s=!1,r.nextCallback=null,i(c))},this.nextCallback.cancel=function(){s=!1},this.nextCallback},n.onTransitionEnd=function(i,r){this.setNextCallback(r);var s=this.props.nodeRef?this.props.nodeRef.current:be.findDOMNode(this),c=i==null&&!this.props.addEndListener;if(!s||c){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var d=this.props.nodeRef?[this.nextCallback]:[s,this.nextCallback],u=d[0],x=d[1];this.props.addEndListener(u,x)}i!=null&&setTimeout(this.nextCallback,i)},n.render=function(){var i=this.state.status;if(i===fe)return null;var r=this.props,s=r.children;r.in,r.mountOnEnter,r.unmountOnExit,r.appear,r.enter,r.exit,r.timeout,r.addEndListener,r.onEnter,r.onEntering,r.onEntered,r.onExit,r.onExiting,r.onExited,r.nodeRef;var c=K(r,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return pe.createElement(pt.Provider,{value:null},typeof s=="function"?s(i,c):pe.cloneElement(pe.Children.only(s),c))},t}(pe.Component);Y.contextType=pt;Y.propTypes={};function ae(){}Y.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:ae,onEntering:ae,onEntered:ae,onExit:ae,onExiting:ae,onExited:ae};Y.UNMOUNTED=fe;Y.EXITED=J;Y.ENTERING=ee;Y.ENTERED=le;Y.EXITING=Be;const ft=Y,ht=e=>e.scrollTop;function ve(e,t){var n,o;const{timeout:i,easing:r,style:s={}}=e;return{duration:(n=s.transitionDuration)!=null?n:typeof i=="number"?i:i[t.mode]||0,easing:(o=s.transitionTimingFunction)!=null?o:typeof r=="object"?r[t.mode]:r,delay:s.transitionDelay}}function Xt(e){return Ee("MuiPaper",e)}Te("MuiPaper",["root","rounded","outlined","elevation","elevation0","elevation1","elevation2","elevation3","elevation4","elevation5","elevation6","elevation7","elevation8","elevation9","elevation10","elevation11","elevation12","elevation13","elevation14","elevation15","elevation16","elevation17","elevation18","elevation19","elevation20","elevation21","elevation22","elevation23","elevation24"]);const Yt=["className","component","elevation","square","variant"],Zt=e=>{const{square:t,elevation:n,variant:o,classes:i}=e,r={root:["root",o,!t&&"rounded",o==="elevation"&&`elevation${n}`]};return we(r,Xt,i)},Qt=ce("div",{name:"MuiPaper",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,t[n.variant],!n.square&&t.rounded,n.variant==="elevation"&&t[`elevation${n.elevation}`]]}})(({theme:e,ownerState:t})=>{var n;return b({backgroundColor:(e.vars||e).palette.background.paper,color:(e.vars||e).palette.text.primary,transition:e.transitions.create("box-shadow")},!t.square&&{borderRadius:e.shape.borderRadius},t.variant==="outlined"&&{border:`1px solid ${(e.vars||e).palette.divider}`},t.variant==="elevation"&&b({boxShadow:(e.vars||e).shadows[t.elevation]},!e.vars&&e.palette.mode==="dark"&&{backgroundImage:`linear-gradient(${Ye("#fff",Je(t.elevation))}, ${Ye("#fff",Je(t.elevation))})`},e.vars&&{backgroundImage:(n=e.vars.overlays)==null?void 0:n[t.elevation]}))}),Jt=l.forwardRef(function(t,n){const o=Ce({props:t,name:"MuiPaper"}),{className:i,component:r="div",elevation:s=1,square:c=!1,variant:d="elevation"}=o,u=K(o,Yt),x=b({},o,{component:r,elevation:s,square:c,variant:d}),m=Zt(x);return a.jsx(Qt,b({as:r,ownerState:x,className:Z(m.root,i),ref:n},u))}),en=Jt;function xt(e){return typeof e=="string"}function tn(e,t,n){return e===void 0||xt(e)?t:b({},t,{ownerState:b({},t.ownerState,n)})}function mt(e,t=[]){if(e===void 0)return{};const n={};return Object.keys(e).filter(o=>o.match(/^on[A-Z]/)&&typeof e[o]=="function"&&!t.includes(o)).forEach(o=>{n[o]=e[o]}),n}function nn(e,t,n){return typeof e=="function"?e(t,n):e}function tt(e){if(e===void 0)return{};const t={};return Object.keys(e).filter(n=>!(n.match(/^on[A-Z]/)&&typeof e[n]=="function")).forEach(n=>{t[n]=e[n]}),t}function on(e){const{getSlotProps:t,additionalProps:n,externalSlotProps:o,externalForwardedProps:i,className:r}=e;if(!t){const I=Z(i==null?void 0:i.className,o==null?void 0:o.className,r,n==null?void 0:n.className),g=b({},n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),P=b({},n,i,o);return I.length>0&&(P.className=I),Object.keys(g).length>0&&(P.style=g),{props:P,internalRef:void 0}}const s=mt(b({},i,o)),c=tt(o),d=tt(i),u=t(s),x=Z(u==null?void 0:u.className,n==null?void 0:n.className,r,i==null?void 0:i.className,o==null?void 0:o.className),m=b({},u==null?void 0:u.style,n==null?void 0:n.style,i==null?void 0:i.style,o==null?void 0:o.style),C=b({},u,n,d,c);return x.length>0&&(C.className=x),Object.keys(m).length>0&&(C.style=m),{props:C,internalRef:u.ref}}const rn=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function ye(e){var t;const{elementType:n,externalSlotProps:o,ownerState:i,skipResolvingSlotProps:r=!1}=e,s=K(e,rn),c=r?{}:nn(o,i),{props:d,internalRef:u}=on(b({},s,{externalSlotProps:c})),x=te(u,c==null?void 0:c.ref,(t=e.additionalProps)==null?void 0:t.ref);return tn(n,b({},d,{ref:x}),i)}const sn=["input","select","textarea","a[href]","button","[tabindex]","audio[controls]","video[controls]",'[contenteditable]:not([contenteditable="false"])'].join(",");function an(e){const t=parseInt(e.getAttribute("tabindex")||"",10);return Number.isNaN(t)?e.contentEditable==="true"||(e.nodeName==="AUDIO"||e.nodeName==="VIDEO"||e.nodeName==="DETAILS")&&e.getAttribute("tabindex")===null?0:e.tabIndex:t}function ln(e){if(e.tagName!=="INPUT"||e.type!=="radio"||!e.name)return!1;const t=o=>e.ownerDocument.querySelector(`input[type="radio"]${o}`);let n=t(`[name="${e.name}"]:checked`);return n||(n=t(`[name="${e.name}"]`)),n!==e}function cn(e){return!(e.disabled||e.tagName==="INPUT"&&e.type==="hidden"||ln(e))}function dn(e){const t=[],n=[];return Array.from(e.querySelectorAll(sn)).forEach((o,i)=>{const r=an(o);r===-1||!cn(o)||(r===0?t.push(o):n.push({documentOrder:i,tabIndex:r,node:o}))}),n.sort((o,i)=>o.tabIndex===i.tabIndex?o.documentOrder-i.documentOrder:o.tabIndex-i.tabIndex).map(o=>o.node).concat(t)}function un(){return!0}function pn(e){const{children:t,disableAutoFocus:n=!1,disableEnforceFocus:o=!1,disableRestoreFocus:i=!1,getTabbable:r=dn,isEnabled:s=un,open:c}=e,d=l.useRef(!1),u=l.useRef(null),x=l.useRef(null),m=l.useRef(null),C=l.useRef(null),I=l.useRef(!1),g=l.useRef(null),P=te(t.ref,g),w=l.useRef(null);l.useEffect(()=>{!c||!g.current||(I.current=!n)},[n,c]),l.useEffect(()=>{if(!c||!g.current)return;const h=V(g.current);return g.current.contains(h.activeElement)||(g.current.hasAttribute("tabIndex")||g.current.setAttribute("tabIndex","-1"),I.current&&g.current.focus()),()=>{i||(m.current&&m.current.focus&&(d.current=!0,m.current.focus()),m.current=null)}},[c]),l.useEffect(()=>{if(!c||!g.current)return;const h=V(g.current),k=S=>{w.current=S,!(o||!s()||S.key!=="Tab")&&h.activeElement===g.current&&S.shiftKey&&(d.current=!0,x.current&&x.current.focus())},E=()=>{const S=g.current;if(S===null)return;if(!h.hasFocus()||!s()||d.current){d.current=!1;return}if(S.contains(h.activeElement)||o&&h.activeElement!==u.current&&h.activeElement!==x.current)return;if(h.activeElement!==C.current)C.current=null;else if(C.current!==null)return;if(!I.current)return;let B=[];if((h.activeElement===u.current||h.activeElement===x.current)&&(B=r(g.current)),B.length>0){var L,N;const F=!!((L=w.current)!=null&&L.shiftKey&&((N=w.current)==null?void 0:N.key)==="Tab"),D=B[0],H=B[B.length-1];typeof D!="string"&&typeof H!="string"&&(F?H.focus():D.focus())}else S.focus()};h.addEventListener("focusin",E),h.addEventListener("keydown",k,!0);const j=setInterval(()=>{h.activeElement&&h.activeElement.tagName==="BODY"&&E()},50);return()=>{clearInterval(j),h.removeEventListener("focusin",E),h.removeEventListener("keydown",k,!0)}},[n,o,i,s,c,r]);const p=h=>{m.current===null&&(m.current=h.relatedTarget),I.current=!0,C.current=h.target;const k=t.props.onFocus;k&&k(h)},M=h=>{m.current===null&&(m.current=h.relatedTarget),I.current=!0};return a.jsxs(l.Fragment,{children:[a.jsx("div",{tabIndex:c?0:-1,onFocus:M,ref:u,"data-testid":"sentinelStart"}),l.cloneElement(t,{ref:P,onFocus:p}),a.jsx("div",{tabIndex:c?0:-1,onFocus:M,ref:x,"data-testid":"sentinelEnd"})]})}function fn(e){return typeof e=="function"?e():e}const hn=l.forwardRef(function(t,n){const{children:o,container:i,disablePortal:r=!1}=t,[s,c]=l.useState(null),d=te(l.isValidElement(o)?o.ref:null,n);if(Ne(()=>{r||c(fn(i)||document.body)},[i,r]),Ne(()=>{if(s&&!r)return Le(n,s),()=>{Le(n,null)}},[n,s,r]),r){if(l.isValidElement(o)){const u={ref:d};return l.cloneElement(o,u)}return a.jsx(l.Fragment,{children:o})}return a.jsx(l.Fragment,{children:s&&$t.createPortal(o,s)})});function xn(e){const t=V(e);return t.body===e?xe(e).innerWidth>t.documentElement.clientWidth:e.scrollHeight>e.clientHeight}function he(e,t){t?e.setAttribute("aria-hidden","true"):e.removeAttribute("aria-hidden")}function nt(e){return parseInt(xe(e).getComputedStyle(e).paddingRight,10)||0}function mn(e){const n=["TEMPLATE","SCRIPT","STYLE","LINK","MAP","META","NOSCRIPT","PICTURE","COL","COLGROUP","PARAM","SLOT","SOURCE","TRACK"].indexOf(e.tagName)!==-1,o=e.tagName==="INPUT"&&e.getAttribute("type")==="hidden";return n||o}function ot(e,t,n,o,i){const r=[t,n,...o];[].forEach.call(e.children,s=>{const c=r.indexOf(s)===-1,d=!mn(s);c&&d&&he(s,i)})}function Re(e,t){let n=-1;return e.some((o,i)=>t(o)?(n=i,!0):!1),n}function gn(e,t){const n=[],o=e.container;if(!t.disableScrollLock){if(xn(o)){const s=Gt(V(o));n.push({value:o.style.paddingRight,property:"padding-right",el:o}),o.style.paddingRight=`${nt(o)+s}px`;const c=V(o).querySelectorAll(".mui-fixed");[].forEach.call(c,d=>{n.push({value:d.style.paddingRight,property:"padding-right",el:d}),d.style.paddingRight=`${nt(d)+s}px`})}let r;if(o.parentNode instanceof DocumentFragment)r=V(o).body;else{const s=o.parentElement,c=xe(o);r=(s==null?void 0:s.nodeName)==="HTML"&&c.getComputedStyle(s).overflowY==="scroll"?s:o}n.push({value:r.style.overflow,property:"overflow",el:r},{value:r.style.overflowX,property:"overflow-x",el:r},{value:r.style.overflowY,property:"overflow-y",el:r}),r.style.overflow="hidden"}return()=>{n.forEach(({value:r,el:s,property:c})=>{r?s.style.setProperty(c,r):s.style.removeProperty(c)})}}function bn(e){const t=[];return[].forEach.call(e.children,n=>{n.getAttribute("aria-hidden")==="true"&&t.push(n)}),t}class vn{constructor(){this.containers=void 0,this.modals=void 0,this.modals=[],this.containers=[]}add(t,n){let o=this.modals.indexOf(t);if(o!==-1)return o;o=this.modals.length,this.modals.push(t),t.modalRef&&he(t.modalRef,!1);const i=bn(n);ot(n,t.mount,t.modalRef,i,!0);const r=Re(this.containers,s=>s.container===n);return r!==-1?(this.containers[r].modals.push(t),o):(this.containers.push({modals:[t],container:n,restore:null,hiddenSiblings:i}),o)}mount(t,n){const o=Re(this.containers,r=>r.modals.indexOf(t)!==-1),i=this.containers[o];i.restore||(i.restore=gn(i,n))}remove(t,n=!0){const o=this.modals.indexOf(t);if(o===-1)return o;const i=Re(this.containers,s=>s.modals.indexOf(t)!==-1),r=this.containers[i];if(r.modals.splice(r.modals.indexOf(t),1),this.modals.splice(o,1),r.modals.length===0)r.restore&&r.restore(),t.modalRef&&he(t.modalRef,n),ot(r.container,t.mount,t.modalRef,r.hiddenSiblings,!1),this.containers.splice(i,1);else{const s=r.modals[r.modals.length-1];s.modalRef&&he(s.modalRef,!1)}return o}isTopModal(t){return this.modals.length>0&&this.modals[this.modals.length-1]===t}}function yn(e){return typeof e=="function"?e():e}function kn(e){return e?e.props.hasOwnProperty("in"):!1}const En=new vn;function Tn(e){const{container:t,disableEscapeKeyDown:n=!1,disableScrollLock:o=!1,manager:i=En,closeAfterTransition:r=!1,onTransitionEnter:s,onTransitionExited:c,children:d,onClose:u,open:x,rootRef:m}=e,C=l.useRef({}),I=l.useRef(null),g=l.useRef(null),P=te(g,m),[w,p]=l.useState(!x),M=kn(d);let h=!0;(e["aria-hidden"]==="false"||e["aria-hidden"]===!1)&&(h=!1);const k=()=>V(I.current),E=()=>(C.current.modalRef=g.current,C.current.mount=I.current,C.current),j=()=>{i.mount(E(),{disableScrollLock:o}),g.current&&(g.current.scrollTop=0)},S=Qe(()=>{const y=yn(t)||k().body;i.add(E(),y),g.current&&j()}),B=l.useCallback(()=>i.isTopModal(E()),[i]),L=Qe(y=>{I.current=y,y&&(x&&B()?j():g.current&&he(g.current,h))}),N=l.useCallback(()=>{i.remove(E(),h)},[h,i]);l.useEffect(()=>()=>{N()},[N]),l.useEffect(()=>{x?S():(!M||!r)&&N()},[x,N,M,r,S]);const F=y=>T=>{var A;(A=y.onKeyDown)==null||A.call(y,T),!(T.key!=="Escape"||!B())&&(n||(T.stopPropagation(),u&&u(T,"escapeKeyDown")))},D=y=>T=>{var A;(A=y.onClick)==null||A.call(y,T),T.target===T.currentTarget&&u&&u(T,"backdropClick")};return{getRootProps:(y={})=>{const T=mt(e);delete T.onTransitionEnter,delete T.onTransitionExited;const A=b({},T,y);return b({role:"presentation"},A,{onKeyDown:F(A),ref:P})},getBackdropProps:(y={})=>{const T=y;return b({"aria-hidden":!0},T,{onClick:D(T),open:x})},getTransitionProps:()=>{const y=()=>{p(!1),s&&s()},T=()=>{p(!0),c&&c(),r&&N()};return{onEnter:Ze(y,d==null?void 0:d.props.onEnter),onExited:Ze(T,d==null?void 0:d.props.onExited)}},rootRef:P,portalRef:L,isTopModal:B,exited:w,hasTransition:M}}const Cn=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"],wn={entering:{opacity:1},entered:{opacity:1}},Pn=l.forwardRef(function(t,n){const o=ut(),i={enter:o.transitions.duration.enteringScreen,exit:o.transitions.duration.leavingScreen},{addEndListener:r,appear:s=!0,children:c,easing:d,in:u,onEnter:x,onEntered:m,onEntering:C,onExit:I,onExited:g,onExiting:P,style:w,timeout:p=i,TransitionComponent:M=ft}=t,h=K(t,Cn),k=l.useRef(null),E=te(k,c.ref,n),j=$=>v=>{if($){const y=k.current;v===void 0?$(y):$(y,v)}},S=j(C),B=j(($,v)=>{ht($);const y=ve({style:w,timeout:p,easing:d},{mode:"enter"});$.style.webkitTransition=o.transitions.create("opacity",y),$.style.transition=o.transitions.create("opacity",y),x&&x($,v)}),L=j(m),N=j(P),F=j($=>{const v=ve({style:w,timeout:p,easing:d},{mode:"exit"});$.style.webkitTransition=o.transitions.create("opacity",v),$.style.transition=o.transitions.create("opacity",v),I&&I($)}),D=j(g),H=$=>{r&&r(k.current,$)};return a.jsx(M,b({appear:s,in:u,nodeRef:k,onEnter:B,onEntered:L,onEntering:S,onExit:F,onExited:D,onExiting:N,addEndListener:H,timeout:p},h,{children:($,v)=>l.cloneElement(c,b({style:b({opacity:0,visibility:$==="exited"&&!u?"hidden":void 0},wn[$],w,c.props.style),ref:E},v))}))}),Sn=Pn;function Rn(e){return Ee("MuiBackdrop",e)}Te("MuiBackdrop",["root","invisible"]);const jn=["children","className","component","components","componentsProps","invisible","open","slotProps","slots","TransitionComponent","transitionDuration"],$n=e=>{const{classes:t,invisible:n}=e;return we({root:["root",n&&"invisible"]},Rn,t)},Mn=ce("div",{name:"MuiBackdrop",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,n.invisible&&t.invisible]}})(({ownerState:e})=>b({position:"fixed",display:"flex",alignItems:"center",justifyContent:"center",right:0,bottom:0,top:0,left:0,backgroundColor:"rgba(0, 0, 0, 0.5)",WebkitTapHighlightColor:"transparent"},e.invisible&&{backgroundColor:"transparent"})),In=l.forwardRef(function(t,n){var o,i,r;const s=Ce({props:t,name:"MuiBackdrop"}),{children:c,className:d,component:u="div",components:x={},componentsProps:m={},invisible:C=!1,open:I,slotProps:g={},slots:P={},TransitionComponent:w=Sn,transitionDuration:p}=s,M=K(s,jn),h=b({},s,{component:u,invisible:C}),k=$n(h),E=(o=g.root)!=null?o:m.root;return a.jsx(w,b({in:I,timeout:p},M,{children:a.jsx(Mn,b({"aria-hidden":!0},E,{as:(i=(r=P.root)!=null?r:x.Root)!=null?i:u,className:Z(k.root,d,E==null?void 0:E.className),ownerState:b({},h,E==null?void 0:E.ownerState),classes:k,ref:n,children:c}))}))}),Ln=In;function Nn(e){return Ee("MuiModal",e)}Te("MuiModal",["root","hidden","backdrop"]);const Bn=["BackdropComponent","BackdropProps","classes","className","closeAfterTransition","children","container","component","components","componentsProps","disableAutoFocus","disableEnforceFocus","disableEscapeKeyDown","disablePortal","disableRestoreFocus","disableScrollLock","hideBackdrop","keepMounted","onBackdropClick","onClose","onTransitionEnter","onTransitionExited","open","slotProps","slots","theme"],On=e=>{const{open:t,exited:n,classes:o}=e;return we({root:["root",!t&&n&&"hidden"],backdrop:["backdrop"]},Nn,o)},Dn=ce("div",{name:"MuiModal",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:n}=e;return[t.root,!n.open&&n.exited&&t.hidden]}})(({theme:e,ownerState:t})=>b({position:"fixed",zIndex:(e.vars||e).zIndex.modal,right:0,bottom:0,top:0,left:0},!t.open&&t.exited&&{visibility:"hidden"})),An=ce(Ln,{name:"MuiModal",slot:"Backdrop",overridesResolver:(e,t)=>t.backdrop})({zIndex:-1}),Fn=l.forwardRef(function(t,n){var o,i,r,s,c,d;const u=Ce({name:"MuiModal",props:t}),{BackdropComponent:x=An,BackdropProps:m,className:C,closeAfterTransition:I=!1,children:g,container:P,component:w,components:p={},componentsProps:M={},disableAutoFocus:h=!1,disableEnforceFocus:k=!1,disableEscapeKeyDown:E=!1,disablePortal:j=!1,disableRestoreFocus:S=!1,disableScrollLock:B=!1,hideBackdrop:L=!1,keepMounted:N=!1,onBackdropClick:F,open:D,slotProps:H,slots:$}=u,v=K(u,Bn),y=b({},u,{closeAfterTransition:I,disableAutoFocus:h,disableEnforceFocus:k,disableEscapeKeyDown:E,disablePortal:j,disableRestoreFocus:S,disableScrollLock:B,hideBackdrop:L,keepMounted:N}),{getRootProps:T,getBackdropProps:A,getTransitionProps:_,portalRef:G,isTopModal:me,exited:U,hasTransition:ge}=Tn(b({},y,{rootRef:n})),Q=b({},y,{exited:U}),X=On(Q),ne={};if(g.props.tabIndex===void 0&&(ne.tabIndex="-1"),ge){const{onEnter:R,onExited:O}=_();ne.onEnter=R,ne.onExited=O}const oe=(o=(i=$==null?void 0:$.root)!=null?i:p.Root)!=null?o:Dn,de=(r=(s=$==null?void 0:$.backdrop)!=null?s:p.Backdrop)!=null?r:x,ue=(c=H==null?void 0:H.root)!=null?c:M.root,re=(d=H==null?void 0:H.backdrop)!=null?d:M.backdrop,Pe=ye({elementType:oe,externalSlotProps:ue,externalForwardedProps:v,getSlotProps:T,additionalProps:{ref:n,as:w},ownerState:Q,className:Z(C,ue==null?void 0:ue.className,X==null?void 0:X.root,!Q.open&&Q.exited&&(X==null?void 0:X.hidden))}),Se=ye({elementType:de,externalSlotProps:re,additionalProps:m,getSlotProps:R=>A(b({},R,{onClick:O=>{F&&F(O),R!=null&&R.onClick&&R.onClick(O)}})),className:Z(re==null?void 0:re.className,m==null?void 0:m.className,X==null?void 0:X.backdrop),ownerState:Q});return!N&&!D&&(!ge||U)?null:a.jsx(hn,{ref:G,container:P,disablePortal:j,children:a.jsxs(oe,b({},Pe,{children:[!L&&x?a.jsx(de,b({},Se)):null,a.jsx(pn,{disableEnforceFocus:k,disableAutoFocus:h,disableRestoreFocus:S,isEnabled:me,open:D,children:l.cloneElement(g,ne)})]}))})}),Hn=Fn,_n=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function Oe(e){return`scale(${e}, ${e**2})`}const Wn={entering:{opacity:1,transform:Oe(1)},entered:{opacity:1,transform:"none"}},je=typeof navigator<"u"&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),gt=l.forwardRef(function(t,n){const{addEndListener:o,appear:i=!0,children:r,easing:s,in:c,onEnter:d,onEntered:u,onEntering:x,onExit:m,onExited:C,onExiting:I,style:g,timeout:P="auto",TransitionComponent:w=ft}=t,p=K(t,_n),M=l.useRef(),h=l.useRef(),k=ut(),E=l.useRef(null),j=te(E,r.ref,n),S=v=>y=>{if(v){const T=E.current;y===void 0?v(T):v(T,y)}},B=S(x),L=S((v,y)=>{ht(v);const{duration:T,delay:A,easing:_}=ve({style:g,timeout:P,easing:s},{mode:"enter"});let G;P==="auto"?(G=k.transitions.getAutoHeightDuration(v.clientHeight),h.current=G):G=T,v.style.transition=[k.transitions.create("opacity",{duration:G,delay:A}),k.transitions.create("transform",{duration:je?G:G*.666,delay:A,easing:_})].join(","),d&&d(v,y)}),N=S(u),F=S(I),D=S(v=>{const{duration:y,delay:T,easing:A}=ve({style:g,timeout:P,easing:s},{mode:"exit"});let _;P==="auto"?(_=k.transitions.getAutoHeightDuration(v.clientHeight),h.current=_):_=y,v.style.transition=[k.transitions.create("opacity",{duration:_,delay:T}),k.transitions.create("transform",{duration:je?_:_*.666,delay:je?T:T||_*.333,easing:A})].join(","),v.style.opacity=0,v.style.transform=Oe(.75),m&&m(v)}),H=S(C),$=v=>{P==="auto"&&(M.current=setTimeout(v,h.current||0)),o&&o(E.current,v)};return l.useEffect(()=>()=>{clearTimeout(M.current)},[]),a.jsx(w,b({appear:i,in:c,nodeRef:E,onEnter:L,onEntered:N,onEntering:B,onExit:D,onExited:H,onExiting:F,addEndListener:$,timeout:P==="auto"?null:P},p,{children:(v,y)=>l.cloneElement(r,b({style:b({opacity:0,transform:Oe(.75),visibility:v==="exited"&&!c?"hidden":void 0},Wn[v],g,r.props.style),ref:j},y))}))});gt.muiSupportAuto=!0;const zn=gt;function Un(e){return Ee("MuiPopover",e)}Te("MuiPopover",["root","paper"]);const qn=["onEntering"],Gn=["action","anchorEl","anchorOrigin","anchorPosition","anchorReference","children","className","container","elevation","marginThreshold","open","PaperProps","slots","slotProps","transformOrigin","TransitionComponent","transitionDuration","TransitionProps","disableScrollLock"],Kn=["slotProps"];function rt(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.height/2:t==="bottom"&&(n=e.height),n}function it(e,t){let n=0;return typeof t=="number"?n=t:t==="center"?n=e.width/2:t==="right"&&(n=e.width),n}function st(e){return[e.horizontal,e.vertical].map(t=>typeof t=="number"?`${t}px`:t).join(" ")}function $e(e){return typeof e=="function"?e():e}const Vn=e=>{const{classes:t}=e;return we({root:["root"],paper:["paper"]},Un,t)},Xn=ce(Hn,{name:"MuiPopover",slot:"Root",overridesResolver:(e,t)=>t.root})({}),Yn=ce(en,{name:"MuiPopover",slot:"Paper",overridesResolver:(e,t)=>t.paper})({position:"absolute",overflowY:"auto",overflowX:"hidden",minWidth:16,minHeight:16,maxWidth:"calc(100% - 32px)",maxHeight:"calc(100% - 32px)",outline:0}),Zn=l.forwardRef(function(t,n){var o,i,r;const s=Ce({props:t,name:"MuiPopover"}),{action:c,anchorEl:d,anchorOrigin:u={vertical:"top",horizontal:"left"},anchorPosition:x,anchorReference:m="anchorEl",children:C,className:I,container:g,elevation:P=8,marginThreshold:w=16,open:p,PaperProps:M={},slots:h,slotProps:k,transformOrigin:E={vertical:"top",horizontal:"left"},TransitionComponent:j=zn,transitionDuration:S="auto",TransitionProps:{onEntering:B}={},disableScrollLock:L=!1}=s,N=K(s.TransitionProps,qn),F=K(s,Gn),D=(o=k==null?void 0:k.paper)!=null?o:M,H=l.useRef(),$=te(H,D.ref),v=b({},s,{anchorOrigin:u,anchorReference:m,elevation:P,marginThreshold:w,externalPaperSlotProps:D,transformOrigin:E,TransitionComponent:j,transitionDuration:S,TransitionProps:N}),y=Vn(v),T=l.useCallback(()=>{if(m==="anchorPosition")return x;const R=$e(d),z=(R&&R.nodeType===1?R:V(H.current).body).getBoundingClientRect();return{top:z.top+rt(z,u.vertical),left:z.left+it(z,u.horizontal)}},[d,u.horizontal,u.vertical,x,m]),A=l.useCallback(R=>({vertical:rt(R,E.vertical),horizontal:it(R,E.horizontal)}),[E.horizontal,E.vertical]),_=l.useCallback(R=>{const O={width:R.offsetWidth,height:R.offsetHeight},z=A(O);if(m==="none")return{top:null,left:null,transformOrigin:st(z)};const We=T();let ie=We.top-z.vertical,se=We.left-z.horizontal;const ze=ie+O.height,Ue=se+O.width,qe=xe($e(d)),Ge=qe.innerHeight-w,Ke=qe.innerWidth-w;if(w!==null&&ie<w){const q=ie-w;ie-=q,z.vertical+=q}else if(w!==null&&ze>Ge){const q=ze-Ge;ie-=q,z.vertical+=q}if(w!==null&&se<w){const q=se-w;se-=q,z.horizontal+=q}else if(Ue>Ke){const q=Ue-Ke;se-=q,z.horizontal+=q}return{top:`${Math.round(ie)}px`,left:`${Math.round(se)}px`,transformOrigin:st(z)}},[d,m,T,A,w]),[G,me]=l.useState(p),U=l.useCallback(()=>{const R=H.current;if(!R)return;const O=_(R);O.top!==null&&(R.style.top=O.top),O.left!==null&&(R.style.left=O.left),R.style.transformOrigin=O.transformOrigin,me(!0)},[_]);l.useEffect(()=>(L&&window.addEventListener("scroll",U),()=>window.removeEventListener("scroll",U)),[d,L,U]);const ge=(R,O)=>{B&&B(R,O),U()},Q=()=>{me(!1)};l.useEffect(()=>{p&&U()}),l.useImperativeHandle(c,()=>p?{updatePosition:()=>{U()}}:null,[p,U]),l.useEffect(()=>{if(!p)return;const R=Ut(()=>{U()}),O=xe(d);return O.addEventListener("resize",R),()=>{R.clear(),O.removeEventListener("resize",R)}},[d,p,U]);let X=S;S==="auto"&&!j.muiSupportAuto&&(X=void 0);const ne=g||(d?V($e(d)).body:void 0),oe=(i=h==null?void 0:h.root)!=null?i:Xn,de=(r=h==null?void 0:h.paper)!=null?r:Yn,ue=ye({elementType:de,externalSlotProps:b({},D,{style:G?D.style:b({},D.style,{opacity:0})}),additionalProps:{elevation:P,ref:$},ownerState:v,className:Z(y.paper,D==null?void 0:D.className)}),re=ye({elementType:oe,externalSlotProps:(k==null?void 0:k.root)||{},externalForwardedProps:F,additionalProps:{ref:n,slotProps:{backdrop:{invisible:!0}},container:ne,open:p},ownerState:v,className:Z(y.root,I)}),{slotProps:Pe}=re,Se=K(re,Kn);return a.jsx(oe,b({},Se,!xt(oe)&&{slotProps:Pe,disableScrollLock:L},{children:a.jsx(j,b({appear:!0,in:p,onEntering:ge,onExited:Q,timeout:X},N,{children:a.jsx(de,b({},ue,{children:C}))}))}))}),Qn=Zn,Jn=f.section`
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
`,eo=f.li`
  width: 335px;
  flex-shrink: 0;
  padding: 18px 6px 10px 18px;
  background-color: ${({theme:e})=>e.secondaryBgColor};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 8px 28px 20px;
  }
`,to=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),no=f.div`
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
`,oo=f.h4`
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
`,ro=f(to)`
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
`,bt=l.createContext(),He=()=>l.useContext(bt);function vt({title:e,idOfCompletion:t}){const{toogleModal:n}=He();return a.jsxs(no,{children:[a.jsx(oo,{children:e}),a.jsx("button",{type:"button",onClick:()=>{n(t)},children:a.jsx(ro,{})})]})}vt.propTypes={title:W.string.isRequired,idOfCompletion:W.string.isRequired};const yt=e=>l.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{id:"plus"},l.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),io=f.button`
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
`,so=f(yt)`
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  cursor: pointer;
`,ao=f.p`
  color: ${({theme:e})=>e.mainTextColor};

  text-align: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function kt({idOfCompletion:e}){const{toogleModal:t}=He();return a.jsxs(io,{type:"button",onClick:()=>{t(e)},children:[a.jsx(so,{}),a.jsx(ao,{children:"Add task"})]})}kt.propTypes={idOfCompletion:W.string.isRequired};const Et=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{id:"pencil-01"},l.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),lo=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),Tt=e=>l.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},l.createElement("g",{clipPath:"url(#clip0_3288_961)"},l.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),l.createElement("defs",null,l.createElement("clipPath",{id:"clip0_3288_961"},l.createElement("rect",{width:16,height:16,fill:"white"})))),co=f.ul`
  position: relative;
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,uo=f.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,po=f.button`
  width: 100%;
  height: 100%;
`,fo=f(Tt)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,ho=f(Et)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,xo=f(lo)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,mo=f.div`
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
`,Ae=f(Tt)`
  cursor: pointer;
  width: 14px;
  height: 14px;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,go=f.button`
  display: flex;
  justify-content: space-between;

  &:hover ${Ae}, &:focus ${Ae} {
    stroke: ${({theme:e})=>e.btnTextColor};
  }

  &:hover ${De}, &:focus ${De} {
    color: ${({theme:e})=>e.btnTextColor};
  }
`,at=e=>e.split(" ").map(t=>t.toLowerCase()).join("-");function bo({id:e}){const t=["To do","In progress","Done"],{currentDay:n}=ke(),{currentData:o}=Fe(n),[i]=o.data.filter(d=>d._id===e),{category:r}=i,[s]=dt(),c=d=>{const u={...i,category:at(d)};delete u._id,delete u.date,s({id:e,data:u})};return a.jsx(mo,{children:t.map(d=>{if(r!==at(d))return a.jsxs(go,{onClick:()=>{c(d)},children:[a.jsx(De,{children:d}),a.jsx(Ae,{})]},d)})})}function Ct({id:e}){const{toogleModal:t}=He(),[n,o]=l.useState(null),[i]=Mt(),r=()=>{o(null)},s=!!n,c=s?"simple-popover":void 0,d={swipe:{component:a.jsx(fo,{"aria-describedby":c}),onClickCallback:x=>{o(x.currentTarget)}},edit:{component:a.jsx(ho,{}),onClickCallback:()=>{t(e)}},remove:{component:a.jsx(xo,{}),onClickCallback:()=>{i(e)}}},u=Object.keys(d);return a.jsx(a.Fragment,{children:a.jsxs(co,{children:[u.map(x=>{const{component:m,onClickCallback:C}=d[x];return a.jsx(uo,{children:a.jsx(po,{type:"button",onClick:C,children:m})},x)}),a.jsx(Qn,{id:e,open:s,anchorEl:n,onClose:r,anchorOrigin:{vertical:"bottom",horizontal:"left"},PaperProps:{sx:{borderRadius:"8px"}},children:a.jsx(bo,{id:e})})]})})}Ct.propTypes={id:W.string.isRequired};const vo=f.li`
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
`,yo=f.p`
  overflow: hidden;
  color: ${({theme:e})=>e.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,ko=f.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Eo=f.div`
  display: flex;
  justify-content: space-between;
`,To=f.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,Co=f.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,wo=f.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,Po=f.p`
  color: ${({theme:e})=>e.taskCardSuccessText};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function wt({taskTitle:e,priority:t,id:n}){const o=It(Lt),i={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function r(s){const c=s.split("");return[c[0].toUpperCase(),...c.slice(1)].join("")}return a.jsx(vo,{children:a.jsxs(ko,{children:[a.jsx(yo,{children:e}),a.jsxs(Eo,{children:[a.jsxs(To,{children:[a.jsx(Co,{src:o}),a.jsx(wo,{color:i[t],children:a.jsx(Po,{children:r(t)})})]}),a.jsx(Ct,{id:n})]})]})})}wt.propTypes={taskTitle:W.string.isRequired,priority:W.string.isRequired,id:W.string.isRequired};const So=f.ul`
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
`;function Pt({tasks:e}){return a.jsx(So,{children:e.map(t=>{const{_id:n,title:o,priority:i}=t;return a.jsx(wt,{taskTitle:o,priority:i,id:n},n)})})}Pt.propTypes={tasks:W.arrayOf(W.object).isRequired};function St({title:e,tasks:t}){return a.jsxs(eo,{children:[a.jsx(vt,{title:e,idOfCompletion:e}),t&&a.jsx(Pt,{tasks:t}),a.jsx(kt,{idOfCompletion:e})]})}St.propTypes={title:W.string.isRequired,tasks:W.arrayOf(W.object).isRequired};const Ro=f.ul`
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
`;function Rt({filteredTasks:e}){const t=Object.keys(e);return a.jsx(Ro,{children:t.map(n=>a.jsx(St,{title:n,tasks:e[n]},n))})}Rt.propTypes={filteredTasks:W.objectOf(W.array).isRequired};const jo=e=>l.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",...e},l.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),l.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),$o=f.div`
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
`,Mo=f(jo)`
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
`,Io=f.input`
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
`,Lo=f.div`
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
`,No=f.div`
  margin-bottom: 32px;
`,Ie=f.label`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`,_e=f.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`,Bo=f(_e)`
  background-color: #72c2f8;
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`,Oo=f(_e)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`,Do=f(_e)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`,Ao=f.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`,Fo=f(yt)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`,Ho=f(Et)`
  width: 30px;
  height: 18px;
  stroke: #fff;
`,jt=f.button`
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
`,_o=f(jt)``,Wo=f.button`
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
`,zo=({initialData:e,closeModal:t,category:n=""})=>{const{currentDay:o}=ke(),[i,r]=l.useState(!1),[s,c]=l.useState(!!e),[d,u]=l.useState(""),[x,{isError:m,error:C}]=Nt(),[I,{isError:g,error:P}]=dt(),{currentData:w}=Fe(o),[p,M]=l.useState(e||{title:"",start:"09:00",end:"09:30",priority:"low",date:o,category:""}),h=L=>{switch(L){case"To do":M({...p,category:"to-do"}),r(!1);break;case"In progress":M({...p,category:"in-progress"}),r(!1);break;case"Done":M({...p,category:"done"}),r(!1);break;default:{const N=w.data.filter(({_id:F})=>F===L);r(!0),M(...N);break}}};l.useEffect(()=>{h(n),e?(M(e),c(!0)):c(!1)},[n,e]),l.useEffect(()=>{m&&(console.log(C),Ve.error("Error creating task")),g&&(console.log(P),Ve.error("Error creating task"))},[C,m,P,g]);const k=()=>{const L=p._id;delete p._id,delete p.date,I({id:L,data:p}),t()},E=()=>{x(p),t()},j=L=>{const{name:N,value:F}=L.target;M({...p,[N]:F}),u("")},S=L=>{if(L.preventDefault(),!["to-do","in-progress","done"].includes(p.category)){u("Invalid category. Choose from: to-do, in-progress, done.");return}s?k():E(),M(e),c(!1)},B=()=>{t(),c(!1)};return a.jsxs($o,{children:[a.jsx(Mo,{onClick:()=>{t()}}),a.jsxs("form",{onSubmit:S,children:[a.jsx(Me,{htmlFor:"title",children:"Title"}),a.jsx(Io,{type:"text",name:"title",value:(p==null?void 0:p.title)||"",onChange:j,placeholder:"Enter text",required:!0,maxLength:"250"}),a.jsxs(Lo,{children:[a.jsxs("div",{children:[a.jsx(Me,{htmlFor:"start",children:" Start"}),a.jsx(lt,{type:"time",name:"start",value:(p==null?void 0:p.start)||"",onChange:j,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]"})]}),a.jsxs("div",{children:[a.jsx(Me,{htmlFor:"end",children:"End"}),a.jsx(lt,{type:"time",name:"end",value:(p==null?void 0:p.end)||"",onChange:j,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]",min:p==null?void 0:p.start})]})]}),a.jsxs(No,{children:[a.jsxs(Ie,{children:[a.jsx(Bo,{type:"radio",name:"priority",value:"low",checked:(p==null?void 0:p.priority)==="low",onChange:j,required:!0}),"Low"]}),a.jsxs(Ie,{children:[a.jsx(Oo,{type:"radio",name:"priority",value:"medium",checked:(p==null?void 0:p.priority)==="medium",onChange:j,required:!0}),"Medium"]}),a.jsxs(Ie,{children:[a.jsx(Do,{type:"radio",name:"priority",value:"high",checked:(p==null?void 0:p.priority)==="high",onChange:j,required:!0}),"High"]})]}),d&&a.jsx("div",{children:d}),a.jsxs(Ao,{children:[i?a.jsxs(jt,{onClick:k,type:"submit",children:[a.jsx(Ho,{}),"Edit"]}):a.jsxs(_o,{onClick:E,type:"submit",children:[a.jsx(Fo,{}),"Add"]}),a.jsx(Wo,{type:"button",onClick:B,children:"Cancel"})]})]})]})},Uo=({initialData:e,closeModal:t,category:n})=>a.jsx(Bt,{onClose:t,children:a.jsx(zo,{initialData:e,closeModal:t,category:n})}),qo=Uo;function Go(e,t){const n={"To do":[],"In progress":[],Done:[]};return e.map(o=>{const{category:i,date:r}=o;if(r===t)switch(i){case"to-do":n["To do"].unshift(o);break;case"in-progress":n["In progress"].unshift(o);break;default:n.Done.unshift(o);break}}),n}const Ko=f(Ot)`
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
`,Vo=f.div`
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
`,Xo=f.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    gap: 4px;
  }
`,Yo=f.p`
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
`,Zo=f.p`
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
`;function Qo(e){const t=[];t.push(Xe(e,"	iii-EEEEE-d-dd-MM-yyyy"));for(let n=1;n<=6;n++){const o=zt(e,n);t.push(Xe(o,"	iii-EEEEE-d-dd-MM-yyyy"))}return t}function Jo(){const{currentDay:e}=ke(),t=Dt.useMediaQuery({maxWidth:767}),n=Qo(new Date(e));return a.jsx(Vo,{children:n.map(o=>{const[i,r,s,c,d,u]=o.split("-");return a.jsxs(Xo,{children:[a.jsx(Yo,{children:t?r:i}),a.jsx(Ko,{to:`/calendar/day/${u}-${d}-${c}`,children:a.jsx(Zo,{children:s})})]},o)})})}const ct={"To do":[],"In progress":[],Done:[]};function ar(){const{currentDay:e}=ke(),{currentData:t}=Fe(e),[n,o]=l.useState(!1),[i,r]=l.useState(null),[s,c]=l.useState(ct);l.useEffect(()=>{if(t){const u=t.data;c(Go(u,e))}return()=>{c(ct),r(null)}},[e,t]);const d=u=>{r(u),o(!n),n?document.body.style.overflow="auto":document.body.style.overflow="hidden"};return a.jsxs(a.Fragment,{children:[a.jsx(Wt,{}),a.jsx(Jn,{children:a.jsxs(bt.Provider,{value:{toogleModal:d},children:[a.jsx(Jo,{}),a.jsx(Rt,{filteredTasks:s}),n&&a.jsx(qo,{category:i,closeModal:d})]})})]})}export{ar as default};
