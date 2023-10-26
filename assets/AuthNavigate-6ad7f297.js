import{g as Ze,a as f,o as er,s as w,N as rr,j as nr}from"./index-22b48f57.js";import{b as Oe,i as tr,a as ir,t as ar,c as or,d as ur,s as lr,e as sr,f as Re}from"./toString-ee09ec1d.js";import{a as cr,b as fr}from"./index.esm-893ee03f.js";var dr=function(n){return pr(n)&&!hr(n)};function pr(e){return!!e&&typeof e=="object"}function hr(e){var n=Object.prototype.toString.call(e);return n==="[object RegExp]"||n==="[object Date]"||yr(e)}var vr=typeof Symbol=="function"&&Symbol.for,mr=vr?Symbol.for("react.element"):60103;function yr(e){return e.$$typeof===mr}function gr(e){return Array.isArray(e)?[]:{}}function q(e,n){return n.clone!==!1&&n.isMergeableObject(e)?z(gr(e),e,n):e}function Er(e,n,a){return e.concat(n).map(function(i){return q(i,a)})}function br(e,n,a){var i={};return a.isMergeableObject(e)&&Object.keys(e).forEach(function(r){i[r]=q(e[r],a)}),Object.keys(n).forEach(function(r){!a.isMergeableObject(n[r])||!e[r]?i[r]=q(n[r],a):i[r]=z(e[r],n[r],a)}),i}function z(e,n,a){a=a||{},a.arrayMerge=a.arrayMerge||Er,a.isMergeableObject=a.isMergeableObject||dr;var i=Array.isArray(n),r=Array.isArray(e),o=i===r;return o?i?a.arrayMerge(e,n,a):br(e,n,a):q(n,a)}z.all=function(n,a){if(!Array.isArray(n))throw new Error("first argument should be an array");return n.reduce(function(i,r){return z(i,r,a)},{})};var se=z,xe=Array.isArray,we=Object.keys,Sr=Object.prototype.hasOwnProperty,Tr=typeof Element<"u";function ce(e,n){if(e===n)return!0;if(e&&n&&typeof e=="object"&&typeof n=="object"){var a=xe(e),i=xe(n),r,o,u;if(a&&i){if(o=e.length,o!=n.length)return!1;for(r=o;r--!==0;)if(!ce(e[r],n[r]))return!1;return!0}if(a!=i)return!1;var l=e instanceof Date,h=n instanceof Date;if(l!=h)return!1;if(l&&h)return e.getTime()==n.getTime();var g=e instanceof RegExp,F=n instanceof RegExp;if(g!=F)return!1;if(g&&F)return e.toString()==n.toString();var T=we(e);if(o=T.length,o!==we(n).length)return!1;for(r=o;r--!==0;)if(!Sr.call(n,T[r]))return!1;if(Tr&&e instanceof Element&&n instanceof Element)return e===n;for(r=o;r--!==0;)if(u=T[r],!(u==="_owner"&&e.$$typeof)&&!ce(e[u],n[u]))return!1;return!0}return e!==e&&n!==n}var Ar=function(n,a){try{return ce(n,a)}catch(i){if(i.message&&i.message.match(/stack|recursion/i)||i.number===-2146828260)return console.warn("Warning: react-fast-compare does not handle circular references.",i.name,i.message),!1;throw i}};const D=Ze(Ar);var Fr=!0;function Le(e,n){if(!Fr){if(e)return;var a="Warning: "+n;typeof console<"u"&&console.warn(a);try{throw Error(a)}catch{}}}var Ir=4;function Ce(e){return Oe(e,Ir)}function Ve(e){return tr(e)?ir(e,ar):or(e)?[e]:ur(lr(sr(e)))}var Rr=1,xr=4;function wr(e){return Oe(e,Rr|xr)}function y(){return y=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var a=arguments[n];for(var i in a)Object.prototype.hasOwnProperty.call(a,i)&&(e[i]=a[i])}return e},y.apply(this,arguments)}function Ne(e,n){e.prototype=Object.create(n.prototype),e.prototype.constructor=e,e.__proto__=n}function U(e,n){if(e==null)return{};var a={},i=Object.keys(e),r,o;for(o=0;o<i.length;o++)r=i[o],!(n.indexOf(r)>=0)&&(a[r]=e[r]);return a}function ke(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var J=f.createContext(void 0);J.displayName="FormikContext";var Cr=J.Provider,kr=J.Consumer;function De(){var e=f.useContext(J);return e||Le(!1),e}var _e=function(n){return Array.isArray(n)&&n.length===0},R=function(n){return typeof n=="function"},G=function(n){return n!==null&&typeof n=="object"},_r=function(n){return String(Math.floor(Number(n)))===n},oe=function(n){return Object.prototype.toString.call(n)==="[object String]"},Ue=function(n){return f.Children.count(n)===0},ue=function(n){return G(n)&&R(n.then)};function S(e,n,a,i){i===void 0&&(i=0);for(var r=Ve(n);e&&i<r.length;)e=e[r[i++]];return i!==r.length&&!e||e===void 0?a:e}function V(e,n,a){for(var i=Ce(e),r=i,o=0,u=Ve(n);o<u.length-1;o++){var l=u[o],h=S(e,u.slice(0,o+1));if(h&&(G(h)||Array.isArray(h)))r=r[l]=Ce(h);else{var g=u[o+1];r=r[l]=_r(g)&&Number(g)>=0?[]:{}}}return(o===0?e:r)[u[o]]===a?e:(a===void 0?delete r[u[o]]:r[u[o]]=a,o===0&&a===void 0&&delete i[u[o]],i)}function je(e,n,a,i){a===void 0&&(a=new WeakMap),i===void 0&&(i={});for(var r=0,o=Object.keys(e);r<o.length;r++){var u=o[r],l=e[u];G(l)?a.get(l)||(a.set(l,!0),i[u]=Array.isArray(l)?[]:{},je(l,n,a,i[u])):i[u]=n}return i}function Mr(e,n){switch(n.type){case"SET_VALUES":return y({},e,{values:n.payload});case"SET_TOUCHED":return y({},e,{touched:n.payload});case"SET_ERRORS":return D(e.errors,n.payload)?e:y({},e,{errors:n.payload});case"SET_STATUS":return y({},e,{status:n.payload});case"SET_ISSUBMITTING":return y({},e,{isSubmitting:n.payload});case"SET_ISVALIDATING":return y({},e,{isValidating:n.payload});case"SET_FIELD_VALUE":return y({},e,{values:V(e.values,n.payload.field,n.payload.value)});case"SET_FIELD_TOUCHED":return y({},e,{touched:V(e.touched,n.payload.field,n.payload.value)});case"SET_FIELD_ERROR":return y({},e,{errors:V(e.errors,n.payload.field,n.payload.value)});case"RESET_FORM":return y({},e,n.payload);case"SET_FORMIK_STATE":return n.payload(e);case"SUBMIT_ATTEMPT":return y({},e,{touched:je(e.values,!0),isSubmitting:!0,submitCount:e.submitCount+1});case"SUBMIT_FAILURE":return y({},e,{isSubmitting:!1});case"SUBMIT_SUCCESS":return y({},e,{isSubmitting:!1});default:return e}}var j={},Y={};function Or(e){var n=e.validateOnChange,a=n===void 0?!0:n,i=e.validateOnBlur,r=i===void 0?!0:i,o=e.validateOnMount,u=o===void 0?!1:o,l=e.isInitialValid,h=e.enableReinitialize,g=h===void 0?!1:h,F=e.onSubmit,T=U(e,["validateOnChange","validateOnBlur","validateOnMount","isInitialValid","enableReinitialize","onSubmit"]),c=y({validateOnChange:a,validateOnBlur:r,validateOnMount:u,onSubmit:F},T),A=f.useRef(c.initialValues),k=f.useRef(c.initialErrors||j),x=f.useRef(c.initialTouched||Y),_=f.useRef(c.initialStatus),C=f.useRef(!1),M=f.useRef({});f.useEffect(function(){return C.current=!0,function(){C.current=!1}},[]);var Q=f.useState(0),X=Q[1],W=f.useRef({values:c.initialValues,errors:c.initialErrors||j,touched:c.initialTouched||Y,status:c.initialStatus,isSubmitting:!1,isValidating:!1,submitCount:0}),b=W.current,E=f.useCallback(function(t){var s=W.current;W.current=Mr(s,t),s!==W.current&&X(function(d){return d+1})},[]),de=f.useCallback(function(t,s){return new Promise(function(d,p){var v=c.validate(t,s);v==null?d(j):ue(v)?v.then(function(m){d(m||j)},function(m){p(m)}):d(v)})},[c.validate]),Z=f.useCallback(function(t,s){var d=c.validationSchema,p=R(d)?d(s):d,v=s&&p.validateAt?p.validateAt(s,t):Vr(t,p);return new Promise(function(m,I){v.then(function(){m(j)},function(N){N.name==="ValidationError"?m(Lr(N)):I(N)})})},[c.validationSchema]),pe=f.useCallback(function(t,s){return new Promise(function(d){return d(M.current[t].validate(s))})},[]),he=f.useCallback(function(t){var s=Object.keys(M.current).filter(function(p){return R(M.current[p].validate)}),d=s.length>0?s.map(function(p){return pe(p,S(t,p))}):[Promise.resolve("DO_NOT_DELETE_YOU_WILL_BE_FIRED")];return Promise.all(d).then(function(p){return p.reduce(function(v,m,I){return m==="DO_NOT_DELETE_YOU_WILL_BE_FIRED"||m&&(v=V(v,s[I],m)),v},{})})},[pe]),Be=f.useCallback(function(t){return Promise.all([he(t),c.validationSchema?Z(t):{},c.validate?de(t):{}]).then(function(s){var d=s[0],p=s[1],v=s[2],m=se.all([d,p,v],{arrayMerge:Nr});return m})},[c.validate,c.validationSchema,he,de,Z]),L=O(function(t){return t===void 0&&(t=b.values),E({type:"SET_ISVALIDATING",payload:!0}),Be(t).then(function(s){return C.current&&(E({type:"SET_ISVALIDATING",payload:!1}),E({type:"SET_ERRORS",payload:s})),s})});f.useEffect(function(){u&&C.current===!0&&D(A.current,c.initialValues)&&L(A.current)},[u,L]);var $=f.useCallback(function(t){var s=t&&t.values?t.values:A.current,d=t&&t.errors?t.errors:k.current?k.current:c.initialErrors||{},p=t&&t.touched?t.touched:x.current?x.current:c.initialTouched||{},v=t&&t.status?t.status:_.current?_.current:c.initialStatus;A.current=s,k.current=d,x.current=p,_.current=v;var m=function(){E({type:"RESET_FORM",payload:{isSubmitting:!!t&&!!t.isSubmitting,errors:d,touched:p,status:v,values:s,isValidating:!!t&&!!t.isValidating,submitCount:t&&t.submitCount&&typeof t.submitCount=="number"?t.submitCount:0}})};if(c.onReset){var I=c.onReset(b.values,Fe);ue(I)?I.then(m):m()}else m()},[c.initialErrors,c.initialStatus,c.initialTouched,c.onReset]);f.useEffect(function(){C.current===!0&&!D(A.current,c.initialValues)&&g&&(A.current=c.initialValues,$(),u&&L(A.current))},[g,c.initialValues,$,u,L]),f.useEffect(function(){g&&C.current===!0&&!D(k.current,c.initialErrors)&&(k.current=c.initialErrors||j,E({type:"SET_ERRORS",payload:c.initialErrors||j}))},[g,c.initialErrors]),f.useEffect(function(){g&&C.current===!0&&!D(x.current,c.initialTouched)&&(x.current=c.initialTouched||Y,E({type:"SET_TOUCHED",payload:c.initialTouched||Y}))},[g,c.initialTouched]),f.useEffect(function(){g&&C.current===!0&&!D(_.current,c.initialStatus)&&(_.current=c.initialStatus,E({type:"SET_STATUS",payload:c.initialStatus}))},[g,c.initialStatus,c.initialTouched]);var ve=O(function(t){if(M.current[t]&&R(M.current[t].validate)){var s=S(b.values,t),d=M.current[t].validate(s);return ue(d)?(E({type:"SET_ISVALIDATING",payload:!0}),d.then(function(p){return p}).then(function(p){E({type:"SET_FIELD_ERROR",payload:{field:t,value:p}}),E({type:"SET_ISVALIDATING",payload:!1})})):(E({type:"SET_FIELD_ERROR",payload:{field:t,value:d}}),Promise.resolve(d))}else if(c.validationSchema)return E({type:"SET_ISVALIDATING",payload:!0}),Z(b.values,t).then(function(p){return p}).then(function(p){E({type:"SET_FIELD_ERROR",payload:{field:t,value:S(p,t)}}),E({type:"SET_ISVALIDATING",payload:!1})});return Promise.resolve()}),Pe=f.useCallback(function(t,s){var d=s.validate;M.current[t]={validate:d}},[]),He=f.useCallback(function(t){delete M.current[t]},[]),me=O(function(t,s){E({type:"SET_TOUCHED",payload:t});var d=s===void 0?r:s;return d?L(b.values):Promise.resolve()}),ye=f.useCallback(function(t){E({type:"SET_ERRORS",payload:t})},[]),ge=O(function(t,s){var d=R(t)?t(b.values):t;E({type:"SET_VALUES",payload:d});var p=s===void 0?a:s;return p?L(d):Promise.resolve()}),K=f.useCallback(function(t,s){E({type:"SET_FIELD_ERROR",payload:{field:t,value:s}})},[]),P=O(function(t,s,d){E({type:"SET_FIELD_VALUE",payload:{field:t,value:s}});var p=d===void 0?a:d;return p?L(V(b.values,t,s)):Promise.resolve()}),Ee=f.useCallback(function(t,s){var d=s,p=t,v;if(!oe(t)){t.persist&&t.persist();var m=t.target?t.target:t.currentTarget,I=m.type,N=m.name,ie=m.id,ae=m.value,Qe=m.checked,qr=m.outerHTML,Ie=m.options,Xe=m.multiple;d=s||N||ie,p=/number|range/.test(I)?(v=parseFloat(ae),isNaN(v)?"":v):/checkbox/.test(I)?Ur(S(b.values,d),Qe,ae):Ie&&Xe?Dr(Ie):ae}d&&P(d,p)},[P,b.values]),ee=O(function(t){if(oe(t))return function(s){return Ee(s,t)};Ee(t)}),H=O(function(t,s,d){s===void 0&&(s=!0),E({type:"SET_FIELD_TOUCHED",payload:{field:t,value:s}});var p=d===void 0?r:d;return p?L(b.values):Promise.resolve()}),be=f.useCallback(function(t,s){t.persist&&t.persist();var d=t.target,p=d.name,v=d.id,m=d.outerHTML,I=s||p||v;H(I,!0)},[H]),re=O(function(t){if(oe(t))return function(s){return be(s,t)};be(t)}),Se=f.useCallback(function(t){R(t)?E({type:"SET_FORMIK_STATE",payload:t}):E({type:"SET_FORMIK_STATE",payload:function(){return t}})},[]),Te=f.useCallback(function(t){E({type:"SET_STATUS",payload:t})},[]),Ae=f.useCallback(function(t){E({type:"SET_ISSUBMITTING",payload:t})},[]),ne=O(function(){return E({type:"SUBMIT_ATTEMPT"}),L().then(function(t){var s=t instanceof Error,d=!s&&Object.keys(t).length===0;if(d){var p;try{if(p=ze(),p===void 0)return}catch(v){throw v}return Promise.resolve(p).then(function(v){return C.current&&E({type:"SUBMIT_SUCCESS"}),v}).catch(function(v){if(C.current)throw E({type:"SUBMIT_FAILURE"}),v})}else if(C.current&&(E({type:"SUBMIT_FAILURE"}),s))throw t})}),$e=O(function(t){t&&t.preventDefault&&R(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&R(t.stopPropagation)&&t.stopPropagation(),ne().catch(function(s){console.warn("Warning: An unhandled error was caught from submitForm()",s)})}),Fe={resetForm:$,validateForm:L,validateField:ve,setErrors:ye,setFieldError:K,setFieldTouched:H,setFieldValue:P,setStatus:Te,setSubmitting:Ae,setTouched:me,setValues:ge,setFormikState:Se,submitForm:ne},ze=O(function(){return F(b.values,Fe)}),Ge=O(function(t){t&&t.preventDefault&&R(t.preventDefault)&&t.preventDefault(),t&&t.stopPropagation&&R(t.stopPropagation)&&t.stopPropagation(),$()}),We=f.useCallback(function(t){return{value:S(b.values,t),error:S(b.errors,t),touched:!!S(b.touched,t),initialValue:S(A.current,t),initialTouched:!!S(x.current,t),initialError:S(k.current,t)}},[b.errors,b.touched,b.values]),Ke=f.useCallback(function(t){return{setValue:function(d,p){return P(t,d,p)},setTouched:function(d,p){return H(t,d,p)},setError:function(d){return K(t,d)}}},[P,H,K]),Ye=f.useCallback(function(t){var s=G(t),d=s?t.name:t,p=S(b.values,d),v={name:d,value:p,onChange:ee,onBlur:re};if(s){var m=t.type,I=t.value,N=t.as,ie=t.multiple;m==="checkbox"?I===void 0?v.checked=!!p:(v.checked=!!(Array.isArray(p)&&~p.indexOf(I)),v.value=I):m==="radio"?(v.checked=p===I,v.value=I):N==="select"&&ie&&(v.value=v.value||[],v.multiple=!0)}return v},[re,ee,b.values]),te=f.useMemo(function(){return!D(A.current,b.values)},[A.current,b.values]),qe=f.useMemo(function(){return typeof l<"u"?te?b.errors&&Object.keys(b.errors).length===0:l!==!1&&R(l)?l(c):l:b.errors&&Object.keys(b.errors).length===0},[l,te,b.errors,c]),Je=y({},b,{initialValues:A.current,initialErrors:k.current,initialTouched:x.current,initialStatus:_.current,handleBlur:re,handleChange:ee,handleReset:Ge,handleSubmit:$e,resetForm:$,setErrors:ye,setFormikState:Se,setFieldTouched:H,setFieldValue:P,setFieldError:K,setStatus:Te,setSubmitting:Ae,setTouched:me,setValues:ge,submitForm:ne,validateForm:L,validateField:ve,isValid:qe,dirty:te,unregisterField:He,registerField:Pe,getFieldProps:Ye,getFieldMeta:We,getFieldHelpers:Ke,validateOnBlur:r,validateOnChange:a,validateOnMount:u});return Je}function Zr(e){var n=Or(e),a=e.component,i=e.children,r=e.render,o=e.innerRef;return f.useImperativeHandle(o,function(){return n}),f.createElement(Cr,{value:n},a?f.createElement(a,n):r?r(n):i?R(i)?i(n):Ue(i)?null:f.Children.only(i):null)}function Lr(e){var n={};if(e.inner){if(e.inner.length===0)return V(n,e.path,e.message);for(var r=e.inner,a=Array.isArray(r),i=0,r=a?r:r[Symbol.iterator]();;){var o;if(a){if(i>=r.length)break;o=r[i++]}else{if(i=r.next(),i.done)break;o=i.value}var u=o;S(n,u.path)||(n=V(n,u.path,u.message))}}return n}function Vr(e,n,a,i){a===void 0&&(a=!1);var r=fe(e);return n[a?"validateSync":"validate"](r,{abortEarly:!1,context:i||r})}function fe(e){var n=Array.isArray(e)?[]:{};for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var i=String(a);Array.isArray(e[i])===!0?n[i]=e[i].map(function(r){return Array.isArray(r)===!0||Re(r)?fe(r):r!==""?r:void 0}):Re(e[i])?n[i]=fe(e[i]):n[i]=e[i]!==""?e[i]:void 0}return n}function Nr(e,n,a){var i=e.slice();return n.forEach(function(o,u){if(typeof i[u]>"u"){var l=a.clone!==!1,h=l&&a.isMergeableObject(o);i[u]=h?se(Array.isArray(o)?[]:{},o,a):o}else a.isMergeableObject(o)?i[u]=se(e[u],o,a):e.indexOf(o)===-1&&i.push(o)}),i}function Dr(e){return Array.from(e).filter(function(n){return n.selected}).map(function(n){return n.value})}function Ur(e,n,a){if(typeof e=="boolean")return!!n;var i=[],r=!1,o=-1;if(Array.isArray(e))i=e,o=e.indexOf(a),r=o>=0;else if(!a||a=="true"||a=="false")return!!n;return n&&a&&!r?i.concat(a):r?i.slice(0,o).concat(i.slice(o+1)):i}var jr=typeof window<"u"&&typeof window.document<"u"&&typeof window.document.createElement<"u"?f.useLayoutEffect:f.useEffect;function O(e){var n=f.useRef(e);return jr(function(){n.current=e}),f.useCallback(function(){for(var a=arguments.length,i=new Array(a),r=0;r<a;r++)i[r]=arguments[r];return n.current.apply(void 0,i)},[])}function Br(e){var n=e.validate,a=e.name,i=e.render,r=e.children,o=e.as,u=e.component,l=e.className,h=U(e,["validate","name","render","children","as","component","className"]),g=De(),F=U(g,["validate","validationSchema"]),T=F.registerField,c=F.unregisterField;f.useEffect(function(){return T(a,{validate:n}),function(){c(a)}},[T,c,a,n]);var A=F.getFieldProps(y({name:a},h)),k=F.getFieldMeta(a),x={field:A,form:F};if(i)return i(y({},x,{meta:k}));if(R(r))return r(y({},x,{meta:k}));if(u){if(typeof u=="string"){var _=h.innerRef,C=U(h,["innerRef"]);return f.createElement(u,y({ref:_},A,C,{className:l}),r)}return f.createElement(u,y({field:A,form:F},h,{className:l}),r)}var M=o||"input";if(typeof M=="string"){var Q=h.innerRef,X=U(h,["innerRef"]);return f.createElement(M,y({ref:Q},A,X,{className:l}),r)}return f.createElement(M,y({},A,h,{className:l}),r)}var Pr=f.forwardRef(function(e,n){var a=e.action,i=U(e,["action"]),r=a??"#",o=De(),u=o.handleReset,l=o.handleSubmit;return f.createElement("form",y({onSubmit:l,ref:n,onReset:u,action:r},i))});Pr.displayName="Form";function Hr(e){var n=function(r){return f.createElement(kr,null,function(o){return o||Le(!1),f.createElement(e,y({},r,{formik:o}))})},a=e.displayName||e.name||e.constructor&&e.constructor.name||"Component";return n.WrappedComponent=e,n.displayName="FormikConnect("+a+")",er(n,e)}var $r=function(n,a,i){var r=B(n),o=r[a];return r.splice(a,1),r.splice(i,0,o),r},zr=function(n,a,i){var r=B(n),o=r[a];return r[a]=r[i],r[i]=o,r},le=function(n,a,i){var r=B(n);return r.splice(a,0,i),r},Gr=function(n,a,i){var r=B(n);return r[a]=i,r},B=function(n){if(n){if(Array.isArray(n))return[].concat(n);var a=Object.keys(n).map(function(i){return parseInt(i)}).reduce(function(i,r){return r>i?r:i},0);return Array.from(y({},n,{length:a+1}))}else return[]},Me=function(n,a){var i=typeof n=="function"?n:a;return function(r){if(Array.isArray(r)||G(r)){var o=B(r);return i(o)}return r}},Wr=function(e){Ne(n,e);function n(i){var r;return r=e.call(this,i)||this,r.updateArrayField=function(o,u,l){var h=r.props,g=h.name,F=h.formik.setFormikState;F(function(T){var c=Me(l,o),A=Me(u,o),k=V(T.values,g,o(S(T.values,g))),x=l?c(S(T.errors,g)):void 0,_=u?A(S(T.touched,g)):void 0;return _e(x)&&(x=void 0),_e(_)&&(_=void 0),y({},T,{values:k,errors:l?V(T.errors,g,x):T.errors,touched:u?V(T.touched,g,_):T.touched})})},r.push=function(o){return r.updateArrayField(function(u){return[].concat(B(u),[wr(o)])},!1,!1)},r.handlePush=function(o){return function(){return r.push(o)}},r.swap=function(o,u){return r.updateArrayField(function(l){return zr(l,o,u)},!0,!0)},r.handleSwap=function(o,u){return function(){return r.swap(o,u)}},r.move=function(o,u){return r.updateArrayField(function(l){return $r(l,o,u)},!0,!0)},r.handleMove=function(o,u){return function(){return r.move(o,u)}},r.insert=function(o,u){return r.updateArrayField(function(l){return le(l,o,u)},function(l){return le(l,o,null)},function(l){return le(l,o,null)})},r.handleInsert=function(o,u){return function(){return r.insert(o,u)}},r.replace=function(o,u){return r.updateArrayField(function(l){return Gr(l,o,u)},!1,!1)},r.handleReplace=function(o,u){return function(){return r.replace(o,u)}},r.unshift=function(o){var u=-1;return r.updateArrayField(function(l){var h=l?[o].concat(l):[o];return u=h.length,h},function(l){return l?[null].concat(l):[null]},function(l){return l?[null].concat(l):[null]}),u},r.handleUnshift=function(o){return function(){return r.unshift(o)}},r.handleRemove=function(o){return function(){return r.remove(o)}},r.handlePop=function(){return function(){return r.pop()}},r.remove=r.remove.bind(ke(r)),r.pop=r.pop.bind(ke(r)),r}var a=n.prototype;return a.componentDidUpdate=function(r){this.props.validateOnChange&&this.props.formik.validateOnChange&&!D(S(r.formik.values,r.name),S(this.props.formik.values,this.props.name))&&this.props.formik.validateForm(this.props.formik.values)},a.remove=function(r){var o;return this.updateArrayField(function(u){var l=u?B(u):[];return o||(o=l[r]),R(l.splice)&&l.splice(r,1),R(l.every)&&l.every(function(h){return h===void 0})?[]:l},!0,!0),o},a.pop=function(){var r;return this.updateArrayField(function(o){var u=o.slice();return r||(r=u&&u.pop&&u.pop()),u},!0,!0),r},a.render=function(){var r={push:this.push,pop:this.pop,swap:this.swap,move:this.move,insert:this.insert,replace:this.replace,unshift:this.unshift,remove:this.remove,handlePush:this.handlePush,handlePop:this.handlePop,handleSwap:this.handleSwap,handleMove:this.handleMove,handleInsert:this.handleInsert,handleReplace:this.handleReplace,handleUnshift:this.handleUnshift,handleRemove:this.handleRemove},o=this.props,u=o.component,l=o.render,h=o.children,g=o.name,F=o.formik,T=U(F,["validate","validationSchema"]),c=y({},r,{form:T,name:g});return u?f.createElement(u,c):l?l(c):h?typeof h=="function"?h(c):Ue(h)?null:f.Children.only(h):null},n}(f.Component);Wr.defaultProps={validateOnChange:!0};var Kr=function(e){Ne(n,e);function n(){return e.apply(this,arguments)||this}var a=n.prototype;return a.shouldComponentUpdate=function(r){return S(this.props.formik.errors,this.props.name)!==S(r.formik.errors,this.props.name)||S(this.props.formik.touched,this.props.name)!==S(r.formik.touched,this.props.name)||Object.keys(this.props).length!==Object.keys(r).length},a.render=function(){var r=this.props,o=r.component,u=r.formik,l=r.render,h=r.children,g=r.name,F=U(r,["component","formik","render","children","name"]),T=S(u.touched,g),c=S(u.errors,g);return T&&c?l?R(l)?l(c):null:h?R(h)?h(c):null:o?f.createElement(o,F,c):c:null},n}(f.Component),en=Hr(Kr);const rn="/goose_track_frontend-02/assets/success-60ad9918.svg",nn="/goose_track_frontend-02/assets/error-c78ccd3a.svg",tn="/goose_track_frontend-02/assets/login-38d3fb2e.svg",an=w.h1`
  margin-bottom: 32px;
  color: var(--main-blue);
  font-size: 18px;
  font-family:InterSemiBold;
  line-height: 1.33;
  
   @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`,on=w.ul`
 margin-bottom: 32px;

 @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`,un=w.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 24px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,ln=w.label`
  margin-bottom: 8px;
  color: var(--black);
  font-size: 12px;
  font-family:InterSemiBold;
  line-height: 1.21;
  color: ${e=>e.className==="error"?"var(--error-color)":e.className==="success"?"var(--correct-color)":"var(--black)"};

 @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,sn=w(Br)`
  border: 1px solid var(--input-gray);
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  font-family:InterTightRegular;
  line-height: 1.29;
  background-color:var(--white) !important;
  border-color: ${e=>e.className==="error"?"var(--error-color)":e.className==="success"?"var(--correct-color)":""};
  
  &::placeholder {
    color: var(--input-gray);
    background-color:var(--white) !important;
  } 

   &:hover,
   &:focus,
   :active {
    border-color: var(--black);
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.13;
  }
`,cn=w.img`
  position:absolute;
  right:14px;
  top:34px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    right:18px;
    top:40px;
  }
`,fn=w.button`
  display: flex;
  gap:11px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 16px;
  background-color: var(--main-blue);
  border: none;
  cursor: pointer;
  color: var(--white);
  font-size: 14px;
  font-family:InterSemiBold;
  line-height: 1.29;
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 18px;
    line-height: 1.33;
  }

 &:focus,
  &:hover  {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px #88A5BF7A;

  }
`,dn=w.img`
  width: 18px;
  height:18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height:20px;
  }
`,pn=w.p`
  margin-top:8px;
  margin-left:14px;
  font-size: 12px;
  font-family:InterTightRegular;
  line-height: 1.17;
  color: var(--error-color);

   @media screen and (min-width: 768px) {
    margin-left:18px;
  }
`,hn=w.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 38px;
  right: 14px;
  padding: 0;

   @media screen and (min-width: 768px) {
    right: 18px;
    top:42px;
  }
`,vn=w(cr)`
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,mn=w(fr)`
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,yn=w.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 32px;
  margin-top:32px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    margin-top:40px;
  }
`,Yr=w(rr)`
  display:block;
  font-family: InterSemiBold;
  font-size: 12px;
  line-height: 1.17;
  color: var(--main-blue);
  text-decoration:underline;
  text-align:center;
  transition: color 250ms linear;

   &:hover,
   &:focus {
    color: var(--hover-blue);
  }

  @media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
  }
`,gn=({route:e,textContent:n})=>nr.jsx(Yr,{to:e,children:n});export{gn as A,fn as B,vn as D,nn as E,Zr as F,un as I,on as L,hn as P,rn as S,an as T,yn as V,Pr as a,ln as b,sn as c,cn as d,mn as e,dn as f,tn as g,en as h,pn as i};
