import{d as n,a as b,e as L,j as s,l as S,h as P}from"./index-ec039822.js";import{c as k,a as i,F as E,b as _,T as y,B as c,L as l,S as A,d as F,I as m,e as d,f as p,g,P as W,D as $,h as N,i as C,E as D,j as G,A as T}from"./AuthNavigate-0b561aac.js";import{E as q,S as v}from"./error-c1d13494.js";import{G as R,D as B}from"./Divider-a80ddfd0.js";import{A as M,a as U,L as V,P as z}from"./LoginPage.styled-d1498808.js";import"./toString-ee09ec1d.js";import"./index.esm-45b4c7ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./styled-a405bd27.js";const x=({name:o})=>s.jsx(D,{name:o,render:t=>s.jsx(G,{children:t})}),H={email:"",password:""},J=k().shape({email:i().matches(n.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:i().min(6,"Password must be at least 6 characters").matches(n.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),K=()=>{const[o,t]=b.useState(!1),h=()=>{t(!o)},j=L(),w=(r,{resetForm:e})=>{const{email:a,password:I}=r;j(S({email:a,password:I})).unwrap().then(()=>P("Login successfully")),e()},f=()=>{window.location.href="https://goose-track-backend-02.onrender.com/users/google/"};return s.jsx(E,{initialValues:H,validationSchema:J,onSubmit:w,children:({values:r,errors:e,touched:a})=>s.jsxs(_,{children:[s.jsx(y,{children:"Log In"}),s.jsxs(c,{type:"button",onClick:f,className:"googleAuth",children:[s.jsx(l,{src:R}),"Sign up using Google"]}),s.jsx(B,{sx:{margin:"24px auto"},children:s.jsx(A,{children:"or continue with google"})}),s.jsxs(F,{children:[s.jsxs(m,{children:[s.jsx(d,{htmlFor:"email",className:a.email?e.email?"error":"success":"",children:"Email"}),s.jsx(p,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?e.email?"error":"success":""}),s.jsx(x,{name:"email"}),e.email&&a.email?s.jsx(g,{src:q}):r.email&&!e.email?s.jsx(g,{src:v}):null]}),s.jsxs(m,{children:[s.jsx(d,{htmlFor:"password",className:a.password?e.password?"error":"success":"",children:"Password"}),s.jsx(p,{type:o?"text":"password",value:r.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?e.password?"error":"success":""}),s.jsx(x,{name:"password"}),s.jsx(W,{type:"button",onClick:h,children:o?s.jsx($,{}):s.jsx(N,{})})]})]}),s.jsxs(c,{type:"submit",children:["Log In",s.jsx(l,{src:C})]})]})})},u="/goose_track_frontend-02/assets/goose_login@1x-ca8bdd7d.png",O="/goose_track_frontend-02/assets/goose_login@2x-8464cca8.png",Q="/goose_track_frontend-02/assets/goose_login@1x-23c6154f.webp",X="/goose_track_frontend-02/assets/goose_login@2x-34889005.webp",is=()=>s.jsxs(M,{children:[s.jsx(U,{children:s.jsx(K,{})}),s.jsx(V,{children:s.jsx(T,{route:"/register",textContent:"Sign Up"})}),s.jsx(z,{children:s.jsxs("picture",{children:[s.jsx("source",{type:"image/webp",srcSet:`${Q} 1x, ${X} 2x`}),s.jsx("source",{type:"image/png",srcSet:`${u} 1x, ${O} 2x`}),s.jsx("img",{src:`${u}`,alt:"Goose flies in a rocket",width:368,height:521})]})})]});export{is as default};
