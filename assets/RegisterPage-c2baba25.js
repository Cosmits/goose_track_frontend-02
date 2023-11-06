import{d as g,a as P,e as _,j as e,f as N,Q as x,s as p}from"./index-ff59e3f7.js";import{c as R,a as i,F as v,b as F,T as C,B as u,L as h,S as $,d as q,I as c,e as l,f as m,g as t,E as j,h as w,P as A,D as L,i as W,j as D,k as G,l as T,A as B}from"./AuthNavigate-069d7bcc.js";import{G as M,D as U}from"./Divider-1bb7f5f0.js";import"./toString-ee09ec1d.js";import"./index.esm-56b698f0.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./styled-d3c28df5.js";const d=({name:r})=>e.jsx(G,{name:r,render:n=>e.jsx(T,{children:n})}),z={name:"",email:"",password:""},Q=R().shape({name:i().required("Name is required"),email:i().matches(g.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:i().min(6,"Password must be at least 6 characters").matches(g.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),V=()=>{const[r,n]=P.useState(!1),f=()=>{n(!r)},y=_(),k=(o,{resetForm:s})=>{const{name:a,email:S,password:E}=o;y(N({userName:a,email:S,password:E})).unwrap().then(()=>{x.success("Registration successfully. Check your email and verify your registration"),s()}).catch(()=>x.error("Something went wrong. Try again"))},I=()=>{window.location.href="https://goose-track-backend-02.onrender.com/users/google/"};return e.jsx(v,{initialValues:z,validationSchema:Q,onSubmit:k,children:({values:o,errors:s,touched:a})=>e.jsxs(F,{children:[e.jsx(C,{children:"Sign Up"}),e.jsxs(u,{type:"button",onClick:I,className:"googleAuth",children:[e.jsx(h,{src:M}),"Sign up using Google"]}),e.jsx(U,{sx:{margin:"24px auto"},children:e.jsx($,{children:"or continue with google"})}),e.jsxs(q,{children:[e.jsxs(c,{children:[e.jsx(l,{htmlFor:"name",className:a.name?s.name?"error":"success":"",children:"Name"}),e.jsx(m,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?s.name?"error":"success":""}),e.jsx(d,{name:"name"}),s.name&&a.name?e.jsx(t,{src:j}):o.name&&!s.name?e.jsx(t,{src:w}):null]}),e.jsxs(c,{children:[e.jsx(l,{htmlFor:"email",className:a.email?s.email?"error":"success":"",children:"Email"}),e.jsx(m,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?s.email?"error":"success":""}),e.jsx(d,{name:"email"}),s.email&&a.email?e.jsx(t,{src:j}):o.email&&!s.email?e.jsx(t,{src:w}):null]}),e.jsxs(c,{children:[e.jsx(l,{htmlFor:"password",className:a.password?s.password?"error":"success":"",children:"Password"}),e.jsx(m,{type:r?"text":"password",value:o.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?s.password?"error":"success":""}),e.jsx(d,{name:"password"}),e.jsx(A,{type:"button",onClick:f,children:r?e.jsx(L,{}):e.jsx(W,{})})]})]}),e.jsxs(u,{type:"submit",children:["Sign Up",e.jsx(h,{src:D})]})]})})},H=p.div`
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
`,J=p.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: var(--white);

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`,K=p.div`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,b="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",O="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",X="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",Y="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",ne=()=>e.jsxs(H,{children:[e.jsx(J,{children:e.jsx(V,{})}),e.jsx(B,{route:"/login",textContent:"Log In"}),e.jsx(K,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${X} 1x, ${Y} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${b} 1x, ${O} 2x`}),e.jsx("img",{src:`${b}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{ne as default};
