import{d as x,a as E,e as P,j as e,f as _,s as p}from"./index-ec039822.js";import{c as N,a as i,F as R,b as v,T as F,B as g,L as u,S as $,d as q,I as c,e as m,f as l,g as t,P as A,D as C,h as L,i as W,E as D,j as G,A as T}from"./AuthNavigate-0b561aac.js";import{E as h,S as j}from"./error-c1d13494.js";import{G as B,D as M}from"./Divider-a80ddfd0.js";import"./toString-ee09ec1d.js";import"./index.esm-45b4c7ee.js";import"./objectWithoutPropertiesLoose-df62547b.js";import"./styled-a405bd27.js";const d=({name:r})=>e.jsx(D,{name:r,render:n=>e.jsx(G,{children:n})}),U={name:"",email:"",password:""},z=N().shape({name:i().required("Name is required"),email:i().matches(x.emailRegexp,'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"').email('Invalid email, enter in format "example@ukr.net"').required("Email is required"),password:i().min(6,"Password must be at least 6 characters").matches(x.passwordRegexp,"Password must contain lowercase and uppercase letters and digits").required("Password is required")}),V=()=>{const[r,n]=E.useState(!1),b=()=>{n(!r)},f=P(),I=(o,{resetForm:s})=>{const{name:a,email:k,password:y}=o;f(_({userName:a,email:k,password:y})).unwrap().then(()=>{s()})},S=()=>{window.location.href="https://goose-track-backend-02.onrender.com/users/google/"};return e.jsx(R,{initialValues:U,validationSchema:z,onSubmit:I,children:({values:o,errors:s,touched:a})=>e.jsxs(v,{children:[e.jsx(F,{children:"Sign Up"}),e.jsxs(g,{type:"button",onClick:S,className:"googleAuth",children:[e.jsx(u,{src:B}),"Sign up using Google"]}),e.jsx(M,{sx:{margin:"24px auto"},children:e.jsx($,{children:"or continue with google"})}),e.jsxs(q,{children:[e.jsxs(c,{children:[e.jsx(m,{htmlFor:"name",className:a.name?s.name?"error":"success":"",children:"Name"}),e.jsx(l,{type:"text",id:"name",name:"name",placeholder:"Enter your name",autoComplete:"off",className:a.name?s.name?"error":"success":""}),e.jsx(d,{name:"name"}),s.name&&a.name?e.jsx(t,{src:h}):o.name&&!s.name?e.jsx(t,{src:j}):null]}),e.jsxs(c,{children:[e.jsx(m,{htmlFor:"email",className:a.email?s.email?"error":"success":"",children:"Email"}),e.jsx(l,{type:"email",id:"email",name:"email",autoComplete:"off",placeholder:"Enter email",className:a.email?s.email?"error":"success":""}),e.jsx(d,{name:"email"}),s.email&&a.email?e.jsx(t,{src:h}):o.email&&!s.email?e.jsx(t,{src:j}):null]}),e.jsxs(c,{children:[e.jsx(m,{htmlFor:"password",className:a.password?s.password?"error":"success":"",children:"Password"}),e.jsx(l,{type:r?"text":"password",value:o.password,id:"password",name:"password",autoComplete:"off",placeholder:"Enter password",className:a.password?s.password?"error":"success":""}),e.jsx(d,{name:"password"}),e.jsx(A,{type:"button",onClick:b,children:r?e.jsx(C,{}):e.jsx(L,{})})]})]}),e.jsxs(g,{type:"submit",children:["Sign Up",e.jsx(u,{src:W})]})]})})},H=p.div`
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
`,w="/goose_track_frontend-02/assets/goose_register@1x-2b136b9f.png",O="/goose_track_frontend-02/assets/goose_register@2x-51d6b3fe.png",Q="/goose_track_frontend-02/assets/goose_register@1x-a383cad0.webp",X="/goose_track_frontend-02/assets/goose_register@2x-2c90f78f.webp",ne=()=>e.jsxs(H,{children:[e.jsx(J,{children:e.jsx(V,{})}),e.jsx(T,{route:"/login",textContent:"Log In"}),e.jsx(K,{children:e.jsxs("picture",{children:[e.jsx("source",{type:"image/webp",srcSet:`${Q} 1x, ${X} 2x`}),e.jsx("source",{type:"image/png",srcSet:`${w} 1x, ${O} 2x`}),e.jsx("img",{src:`${w}`,alt:"Goose registers in the app",width:400,height:416})]})})]});export{ne as default};
