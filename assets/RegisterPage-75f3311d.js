import{d as x,a as S,e as k,j as e,f as E,Q as g,s as p}from"./index-86979d3a.js";import{c as P,a as i,F as _,b as R,T as N,L as v,I as c,d as m,e as l,f as n,E as u,S as h,P as F,D as $,g as q,B as C,h as L,i as W,j as A,k as T,A as B}from"./AuthNavigate-4aa141cc.js";import"./toString-ee09ec1d.js";import"./index.esm-119ff3e8.js";const d=({name:r})=>e.jsx(A,{name:r,render:o=>e.jsx(T,{children:o})}),D={name:"",email:"",password:""},M=P().shape({name:i().required("Name is required"),email:i().matches(x.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:i().min(6,"Password must be at least 6 characters").matches(x.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),U=()=>{const[r,o]=S.useState(!1),j=()=>{o(!r)},b=k(),f=(t,{resetForm:s})=>{const{name:a,email:y,password:I}=t;b(E({userName:a,email:y,password:I})).unwrap().then(()=>{g.success("Registration successfully. Check your email and verify your registration"),s()}).catch(()=>g.error("Something went wrong. Try again"))};return e.jsx(_,{initialValues:D,validationSchema:M,onSubmit:f,children:({values:t,errors:s,touched:a})=>e.jsxs(R,{children:[e.jsx(N,{children:"Sign Up"}),e.jsxs(v,{children:[e.jsxs(c,{children:[e.jsx(m,{htmlFor:"name",className:a.name?s.name?"error":"success":"",children:"Name"}),e.jsx(l,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?s.name?"error":"success":""}),e.jsx(d,{name:"name"}),s.name&&a.name?e.jsx(n,{src:u}):t.name&&!s.name?e.jsx(n,{src:h}):null]}),e.jsxs(c,{children:[e.jsx(m,{htmlFor:"email",className:a.email?s.email?"error":"success":"",children:"Email"}),e.jsx(l,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?s.email?"error":"success":""}),e.jsx(d,{name:"email"}),s.email&&a.email?e.jsx(n,{src:u}):t.email&&!s.email?e.jsx(n,{src:h}):null]}),e.jsxs(c,{children:[e.jsx(m,{htmlFor:"password",className:a.password?s.password?"error":"success":"",children:"Password"}),e.jsx(l,{type:r?"text":"password",value:t.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?s.password?"error":"success":""}),e.jsx(d,{name:"password"}),e.jsx(F,{type:"button",onClick:j,children:r?e.jsx($,{}):e.jsx(q,{})})]})]}),e.jsxs(C,{type:"submit",children:["Sign Up",e.jsx(L,{src:W})]})]})})},z=p.div`
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
`,w="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",V="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",H="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",J="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",Z=()=>e.jsxs(z,{children:[e.jsx(G,{children:e.jsx(U,{})}),e.jsx(B,{route:"/login",textContent:"Log In"}),e.jsx(Q,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${H} 1x, ${J} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${w} 1x, ${V} 2x`}),e.jsx("img",{src:`${w}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{Z as default};
