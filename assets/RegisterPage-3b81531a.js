import{a as I,d as E,j as s,e as P,Q as x,s as p}from"./index-f883eae1.js";import{F as S,a as _,E as k}from"./formik.esm-1bd33f8b.js";import{c as N,a as i}from"./index.esm-43a083de.js";import{T as v,L as F,I as c,a as m,b as l,c as o,E as g,S as u,P as R,D as $,d as q,B as L,e as W,f as A,g as C,A as T}from"./AuthNavigate-318aa4eb.js";import"./toString-ee09ec1d.js";import"./index.esm-e638fd51.js";const d=({name:r})=>s.jsx(k,{name:r,render:n=>s.jsx(C,{children:n})}),B={name:"",email:"",password:""},D=N().shape({name:i().required("Name is required"),email:i().matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:i().min(6,"Password must be at least 6 characters").matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/[0-9]/,"Password must contain at least one number").required("Password is required")}),z=()=>{const[r,n]=I.useState(!1),w=()=>{n(!r)},j=E(),b=(t,{resetForm:e})=>{const{name:a,email:f,password:y}=t;j(P({userName:a,email:f,password:y})).unwrap().then(()=>x.success("Registration succesfully")).catch(()=>x.error("Something went wrong. Try again")),e()};return s.jsx(S,{initialValues:B,validationSchema:D,onSubmit:b,children:({values:t,errors:e,touched:a})=>s.jsxs(_,{children:[s.jsx(v,{children:"Sign Up"}),s.jsxs(F,{children:[s.jsxs(c,{children:[s.jsx(m,{htmlFor:"name",className:a.name?e.name?"error":"success":"",children:"Name"}),s.jsx(l,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?e.name?"error":"success":""}),s.jsx(d,{name:"name"}),e.name&&a.name?s.jsx(o,{src:g}):t.name&&!e.name?s.jsx(o,{src:u}):null]}),s.jsxs(c,{children:[s.jsx(m,{htmlFor:"email",className:a.email?e.email?"error":"success":"",children:"Email"}),s.jsx(l,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?e.email?"error":"success":""}),s.jsx(d,{name:"email"}),e.email&&a.email?s.jsx(o,{src:g}):t.email&&!e.email?s.jsx(o,{src:u}):null]}),s.jsxs(c,{children:[s.jsx(m,{htmlFor:"password",className:a.password?e.password?"error":"success":"",children:"Password"}),s.jsx(l,{type:r?"text":"password",value:t.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?e.password?"error":"success":""}),s.jsx(d,{name:"password"}),s.jsx(R,{type:"button",onClick:w,children:r?s.jsx($,{}):s.jsx(q,{})})]})]}),s.jsxs(L,{type:"submit",children:["Sign Up",s.jsx(W,{src:A})]})]})})},M=p.div`
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
`,U=p.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: var(--white);

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`,G=p.div`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,h="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",Q="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",V="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",Z="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",ss=()=>s.jsxs(M,{children:[s.jsx(U,{children:s.jsx(z,{})}),s.jsx(T,{route:"/login",textContent:"Log In"}),s.jsx(G,{children:s.jsxs("picture",{children:[s.jsx("source",{type:"image/webp",srcSet:`${V} 1x, ${Z} 2x`}),s.jsx("source",{type:"image/png",srcSet:`${h} 1x, ${Q} 2x`}),s.jsx("img",{src:`${h}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{ss as default};
