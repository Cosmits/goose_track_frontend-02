import{s as i,j as e,f as p,h}from"./index-fe63a8da.js";import{u as x,c as m,a as l,e as u}from"./index.esm-817dc865.js";import"./toString-ee09ec1d.js";const f=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: -31px;
  width: 124px;
  height: 124px;
  padding: 2px;
  background-color: #3e85f3;
  border-radius: 50%;
`,y=i.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`,g=i.img`
  display: block;
  height: 100%;
  width: 100%;
  object-fit: cover;
`,b=i.button`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  bottom: -4px;
  right: 15px;
  width: 24px;
  height: 24px;
  border: none;
  padding: 0;
  border-radius: 50%;
  background-color: #3e85f3;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`,j=i.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,v=i.p`
  margin-top: 59px;
  /* !--------------------- */
  font-family: InterTight;
  /* !--------------------- */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:r})=>r.secondaryTextColor};
`,S=i.p`
  font-family: InterTight;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  color: ${({theme:r})=>r.secondaryTextColor};
`,k="/goose_track_frontend-02/assets/plus-381c396d.svg",w=({userName:r,avatarURL:d})=>e.jsxs(e.Fragment,{children:[e.jsxs(f,{children:[e.jsx(y,{children:e.jsx(g,{src:d,alt:"Avatar"})}),e.jsx(b,{onClick:()=>console.log("add avatar"),children:e.jsx("img",{src:k,width:"18px",height:"18px"})})]}),e.jsxs(j,{children:[e.jsx(v,{children:r}),e.jsx(S,{children:"User"})]})]}),A=i.div`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  gap: 40px;
  padding-top: 59px;
  padding-bottom: 40px;
  border-radius: 16px;
  background-color: ${({theme:r})=>r.secondaryBgColor};

  border: 1px solid black;
`,F=i.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
  }
`,I=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`,a=i.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,o=i.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,n=i.label`
  color: ${({theme:r})=>r.labelTextColor};
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`,s=i.input`
  width: 100%;
  height: 42px;
  padding: 0 14px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 8px;
  border: 1px solid ${({theme:r})=>r.borderInputColor};
  color: ${({theme:r})=>r.mainTextColor};
  background-color: ${({theme:r})=>r.secondaryBgColor};

  &::placeholder {
    color: ${({theme:r})=>r.mainTextColor};
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
  }
`,N=i.button`
  display: flex;
  width: 195px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
`,$=/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/,P=/^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/,C=()=>{const{userName:r,avatarURL:d}=p(h),t=x({initialValues:{userName:"",birthday:"",email:"",phone:"",skype:""},validationSchema:m({userName:l().max(16,"Must be 16 characters or less").required("Required"),birthday:u(),email:l().email($,"Invalid email address").required("Please enter your email address"),phone:l().matches(P,"Phone number is not valid"),skype:l().max(16,"Must be 16 characters or less")}),onSubmit:c=>{alert(JSON.stringify(c,null,2))}});return e.jsxs(A,{children:[e.jsx(w,{userName:r,avatarURL:d}),e.jsxs(F,{name:"user_form",autoComplete:"off",onSubmit:t.handleSubmit,children:[e.jsxs(I,{children:[e.jsxs(a,{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"userName",children:"User Name"}),e.jsx(s,{id:"userName",name:"userName",type:"text",placeholder:"Add your name",...t.getFieldProps("userName")}),t.touched.userName&&t.errors.userName?e.jsx("div",{children:t.errors.userName}):null]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"birthday",children:"Birthday"}),e.jsx(s,{type:"date",name:"birthday",id:"birthday",...t.getFieldProps("birthday")}),t.touched.birthday&&t.errors.birthday?e.jsx("div",{children:t.errors.birthday}):null]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"email",children:"Email"}),e.jsx(s,{type:"email",name:"email",id:"email",placeholder:"Add a email",...t.getFieldProps("email")}),t.touched.email&&t.errors.email?e.jsx("div",{children:t.errors.email}):null]})]}),e.jsxs(a,{children:[e.jsxs(o,{children:[e.jsx(n,{htmlFor:"phone",children:"Phone"}),e.jsx(s,{type:"tel",name:"phone",id:"phone",placeholder:"Add a phone number",...t.getFieldProps("phone")}),t.touched.phone&&t.errors.phone?e.jsx("div",{children:t.errors.phone}):null]}),e.jsxs(o,{children:[e.jsx(n,{htmlFor:"skype",children:"Skype"}),e.jsx(s,{type:"text",name:"skype",id:"skype",placeholder:"Add a skype number",...t.getFieldProps("skype")}),t.touched.skype&&t.errors.skype?e.jsx("div",{children:t.errors.skype}):null]})]})]}),e.jsx(N,{type:"submit",children:"Save changes"})]})]})},B=()=>e.jsx(C,{});export{B as default};
