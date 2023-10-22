import{a as f,d as b,j as s,l as I,Q as i,s as n}from"./index-65a37e5d.js";import{c as L,a as c,F as E,b as P,E as y}from"./index.esm-f466e8e4.js";import{T as _,L as S,I as l,a as d,b as m,c as p,E as k,S as F,P as $,D as v,d as A,B as W,e as C,f as N,g as q,A as B}from"./AuthNavigate-f3f122a2.js";import"./toString-ee09ec1d.js";import"./index.esm-76d0d676.js";const x=({name:o})=>s.jsx(y,{name:o,render:t=>s.jsx(q,{children:t})}),D={email:"",password:""},T=L().shape({email:c().email('Invalid email, enter in format "example@ukr.net"').matches(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').required("Email is required"),password:c().min(6,"Password must be at least 6 characters").matches(/[a-zA-Z]/,"Password must contain at least one letter").matches(/[0-9]/,"Password must contain at least one number").required("Password is required")}),z=()=>{const[o,t]=f.useState(!1),u=()=>{t(!o)},h=b(),w=(r,{resetForm:e})=>{const{email:a,password:j}=r;h(I({email:a,password:j})).unwrap().then(()=>i.success("Login succesfully")).catch(()=>i.error("An error has occurred. Try again")),e()};return s.jsx(E,{initialValues:D,validationSchema:T,onSubmit:w,children:({values:r,errors:e,touched:a})=>s.jsxs(P,{children:[s.jsx(_,{children:"Log In"}),s.jsxs(S,{children:[s.jsxs(l,{children:[s.jsx(d,{htmlFor:"email",className:a.email?e.email?"error":"success":"",children:"Email"}),s.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?e.email?"error":"success":""}),s.jsx(x,{name:"email"}),e.email&&a.email?s.jsx(p,{src:k}):r.email&&!e.email?s.jsx(p,{src:F}):null]}),s.jsxs(l,{children:[s.jsx(d,{htmlFor:"password",className:a.password?e.password?"error":"success":"",children:"Password"}),s.jsx(m,{type:o?"text":"password",value:r.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?e.password?"error":"success":""}),s.jsx(x,{name:"password"}),s.jsx($,{type:"button",onClick:u,children:o?s.jsx(v,{}):s.jsx(A,{})})]})]}),s.jsxs(W,{type:"submit",children:["Log In",s.jsx(C,{src:N})]})]})})},M=n.div`
  background-color: #DCEBF7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 18px;
 
  @media screen and (min-width: 768px) {
  gap: 24px;
  }
`,G=n.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: #ffffff;

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`,Q=n.div`
  position:absolute;
  bottom: 19px;
  right: 60px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,g="/goose_track_frontend-02/assets/goose_login@1x-ca8bdd7d.png",R="/goose_track_frontend-02/assets/goose_login@2x-8464cca8.png",U="/goose_track_frontend-02/assets/goose_login@1x-23c6154f.webp",V="/goose_track_frontend-02/assets/goose_login@2x-34889005.webp",X=()=>s.jsxs(M,{children:[s.jsx(G,{children:s.jsx(z,{})}),s.jsx(B,{route:"/register",textContent:"Sign Up"}),s.jsx(Q,{children:s.jsxs("picture",{children:[s.jsx("source",{type:"image/webp",srcSet:`${U} 1x, ${V} 2x`}),s.jsx("source",{type:"image/png",srcSet:`${g} 1x, ${R} 2x`}),s.jsx("img",{src:`${g}`,alt:"Goose flies in a rocket",width:368,height:521})]})})]});export{X as default};
