import{d as x,a as S,e as E,j as e,f as P,Q as g,s as p}from"./index-f5751185.js";import{F as _,a as k,T as R,L as N,I as i,b as c,c as m,d as o,E as u,S as h,P as v,D as F,e as $,B as q,f as C,g as L,h as W,i as A,A as T}from"./AuthNavigate-a4804bae.js";import{c as B,a as l}from"./index.esm-0e59388e.js";import"./toString-ee09ec1d.js";import"./index.esm-61514e15.js";const d=({name:r})=>e.jsx(W,{name:r,render:n=>e.jsx(A,{children:n})}),D={name:"",email:"",password:""},M=B().shape({name:l().required("Name is required"),email:l().matches(x.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:l().min(6,"Password must be at least 6 characters").matches(x.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),U=()=>{const[r,n]=S.useState(!1),j=()=>{n(!r)},f=E(),b=(t,{resetForm:s})=>{const{name:a,email:y,password:I}=t;f(P({userName:a,email:y,password:I})).unwrap().then(()=>{g.success("Registration successfully. Check your email and verify your registration"),s()}).catch(()=>g.error("Something went wrong. Try again"))};return e.jsx(_,{initialValues:D,validationSchema:M,onSubmit:b,children:({values:t,errors:s,touched:a})=>e.jsxs(k,{children:[e.jsx(R,{children:"Sign Up"}),e.jsxs(N,{children:[e.jsxs(i,{children:[e.jsx(c,{htmlFor:"name",className:a.name?s.name?"error":"success":"",children:"Name"}),e.jsx(m,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?s.name?"error":"success":""}),e.jsx(d,{name:"name"}),s.name&&a.name?e.jsx(o,{src:u}):t.name&&!s.name?e.jsx(o,{src:h}):null]}),e.jsxs(i,{children:[e.jsx(c,{htmlFor:"email",className:a.email?s.email?"error":"success":"",children:"Email"}),e.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?s.email?"error":"success":""}),e.jsx(d,{name:"email"}),s.email&&a.email?e.jsx(o,{src:u}):t.email&&!s.email?e.jsx(o,{src:h}):null]}),e.jsxs(i,{children:[e.jsx(c,{htmlFor:"password",className:a.password?s.password?"error":"success":"",children:"Password"}),e.jsx(m,{type:r?"text":"password",value:t.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?s.password?"error":"success":""}),e.jsx(d,{name:"password"}),e.jsx(v,{type:"button",onClick:j,children:r?e.jsx(F,{}):e.jsx($,{})})]})]}),e.jsxs(q,{type:"submit",children:["Sign Up",e.jsx(C,{src:L})]})]})})},z=p.div`
  background-color: var(--backdrop-blue);
   min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 18px;
 
  @media screen and (min-width: 768px) {
  gap: 24px;
  }
`,G=p.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: var(--white);

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`,Q=p.div`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,w="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",V="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",H="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",J="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",ee=()=>e.jsxs(z,{children:[e.jsx(G,{children:e.jsx(U,{})}),e.jsx(T,{route:"/login",textContent:"Log In"}),e.jsx(Q,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${H} 1x, ${J} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${w} 1x, ${V} 2x`}),e.jsx("img",{src:`${w}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{ee as default};
