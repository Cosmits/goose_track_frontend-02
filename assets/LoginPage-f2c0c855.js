import{d as n,a as I,e as L,j as s,l as b,Q as i}from"./index-00b21907.js";import{F as E,a as P,E as _}from"./formik.esm-5593c883.js";import{c as y,a as c}from"./index.esm-32f24d90.js";import{T as S,L as k,I as l,a as m,b as d,c as p,E as F,S as W,P as $,D as A,d as C,B as N,e as q,f as v,g as R,A as g}from"./AuthNavigate-872a1698.js";import{A as T,a as B,L as D,P as M}from"./LoginPage.styled-2ce46061.js";import"./toString-ee09ec1d.js";import"./index.esm-d39202d5.js";const x=({name:o})=>s.jsx(_,{name:o,render:t=>s.jsx(R,{children:t})}),V={email:"",password:""},G=y().shape({email:c().matches(n.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:c().min(6,"Password must be at least 6 characters").matches(n.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),Q=()=>{const[o,t]=I.useState(!1),h=()=>{t(!o)},j=L(),w=(r,{resetForm:e})=>{const{email:a,password:f}=r;j(b({email:a,password:f})).unwrap().then(()=>i.success("Login successfully")).catch(()=>i.error("An error has occurred. Try again")),e()};return s.jsx(E,{initialValues:V,validationSchema:G,onSubmit:w,children:({values:r,errors:e,touched:a})=>s.jsxs(P,{children:[s.jsx(S,{children:"Log In"}),s.jsxs(k,{children:[s.jsxs(l,{children:[s.jsx(m,{htmlFor:"email",className:a.email?e.email?"error":"success":"",children:"Email"}),s.jsx(d,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?e.email?"error":"success":""}),s.jsx(x,{name:"email"}),e.email&&a.email?s.jsx(p,{src:F}):r.email&&!e.email?s.jsx(p,{src:W}):null]}),s.jsxs(l,{children:[s.jsx(m,{htmlFor:"password",className:a.password?e.password?"error":"success":"",children:"Password"}),s.jsx(d,{type:o?"text":"password",value:r.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?e.password?"error":"success":""}),s.jsx(x,{name:"password"}),s.jsx($,{type:"button",onClick:h,children:o?s.jsx(A,{}):s.jsx(C,{})})]})]}),s.jsxs(N,{type:"submit",children:["Log In",s.jsx(q,{src:v})]})]})})},u="/goose_track_frontend-02/assets/goose_login@1x-ca8bdd7d.png",U="/goose_track_frontend-02/assets/goose_login@2x-8464cca8.png",z="/goose_track_frontend-02/assets/goose_login@1x-23c6154f.webp",H="/goose_track_frontend-02/assets/goose_login@2x-34889005.webp",es=()=>s.jsxs(T,{children:[s.jsx(B,{children:s.jsx(Q,{})}),s.jsxs(D,{children:[s.jsx(g,{route:"/register",textContent:"Sign Up"}),s.jsx(g,{route:"/send-verify-email",textContent:"Verify Email"})]}),s.jsx(M,{children:s.jsxs("picture",{children:[s.jsx("source",{type:"image/webp",srcSet:`${z} 1x, ${H} 2x`}),s.jsx("source",{type:"image/png",srcSet:`${u} 1x, ${U} 2x`}),s.jsx("img",{src:`${u}`,alt:"Goose flies in a rocket",width:368,height:521})]})})]});export{es as default};
