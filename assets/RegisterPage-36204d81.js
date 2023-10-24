import{d as x,a as S,e as E,j as s,f as P,Q as g,s as p}from"./index-3709803c.js";import{F as _,a as k,T as R,L as N,I as i,b as c,c as m,d as o,E as u,S as h,P as v,D as F,e as $,B as q,f as L,g as W,h as C,i as A,A as T}from"./AuthNavigate-e9bbb21f.js";import{c as B,a as l}from"./index.esm-f12e5670.js";import"./toString-ee09ec1d.js";import"./index.esm-a8103f5f.js";const d=({name:r})=>s.jsx(C,{name:r,render:n=>s.jsx(A,{children:n})}),D={name:"",email:"",password:""},M=B().shape({name:l().required("Name is required"),email:l().matches(x.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:l().min(6,"Password must be at least 6 characters").matches(x.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),U=()=>{const[r,n]=S.useState(!1),j=()=>{n(!r)},b=E(),f=(t,{resetForm:e})=>{const{name:a,email:y,password:I}=t;b(P({userName:a,email:y,password:I})).unwrap().then(()=>{g.success("Registration successfully"),e()}).catch(()=>g.error("Something went wrong. Try again"))};return s.jsx(_,{initialValues:D,validationSchema:M,onSubmit:f,children:({values:t,errors:e,touched:a})=>s.jsxs(k,{children:[s.jsx(R,{children:"Sign Up"}),s.jsxs(N,{children:[s.jsxs(i,{children:[s.jsx(c,{htmlFor:"name",className:a.name?e.name?"error":"success":"",children:"Name"}),s.jsx(m,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?e.name?"error":"success":""}),s.jsx(d,{name:"name"}),e.name&&a.name?s.jsx(o,{src:u}):t.name&&!e.name?s.jsx(o,{src:h}):null]}),s.jsxs(i,{children:[s.jsx(c,{htmlFor:"email",className:a.email?e.email?"error":"success":"",children:"Email"}),s.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?e.email?"error":"success":""}),s.jsx(d,{name:"email"}),e.email&&a.email?s.jsx(o,{src:u}):t.email&&!e.email?s.jsx(o,{src:h}):null]}),s.jsxs(i,{children:[s.jsx(c,{htmlFor:"password",className:a.password?e.password?"error":"success":"",children:"Password"}),s.jsx(m,{type:r?"text":"password",value:t.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?e.password?"error":"success":""}),s.jsx(d,{name:"password"}),s.jsx(v,{type:"button",onClick:j,children:r?s.jsx(F,{}):s.jsx($,{})})]})]}),s.jsxs(q,{type:"submit",children:["Sign Up",s.jsx(L,{src:W})]})]})})},z=p.div`
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
`,w="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",V="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",H="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",J="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",ss=()=>s.jsxs(z,{children:[s.jsx(G,{children:s.jsx(U,{})}),s.jsx(T,{route:"/login",textContent:"Log In"}),s.jsx(Q,{children:s.jsxs("picture",{children:[s.jsx("source",{type:"image/webp",srcSet:`${H} 1x, ${J} 2x`}),s.jsx("source",{type:"image/png",srcSet:`${w} 1x, ${V} 2x`}),s.jsx("img",{src:`${w}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{ss as default};
