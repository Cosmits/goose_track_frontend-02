import{i as L,t as M,G as _,s as n,d as V,k as T,m as W,o as Z,a as C,j as e,p as G,q as H,Q as F}from"./index-f883eae1.js";import{u as O}from"./formik.esm-1bd33f8b.js";import{c as Q,b as Y,a as m}from"./index.esm-43a083de.js";/* empty css                         */import{p as B,a as J}from"./index-fb206e5f.js";import"./toString-ee09ec1d.js";function K(t){L(1,arguments);var f=M(t),r=f.getDay();return r===0||r===6}function X(t){return _({tag:"svg",attr:{viewBox:"0 0 20 20",fill:"currentColor","aria-hidden":"true"},child:[{tag:"path",attr:{fillRule:"evenodd",d:"M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z",clipRule:"evenodd"}}]})(t)}const ee="/goose_track_frontend-02/assets/user-61345983.svg",ae=n.form`
  position: relative;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding-top: 59px;
  padding-bottom: 40px;
  border-radius: 16px;
  background-color: ${({theme:t})=>t.secondaryBgColor};

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
  }
`,te=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`,re=n.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -31px;
  width: 124px;
  height: 124px;
  padding: 2px;
  background-color: #3e85f3;
  fill: red;
  stroke: black;
  background-image: url(${ee});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  border: 2px solid var(--gradient-blue);
  border-radius: 50%;
  z-index: 1;
`,ne=n.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`,ie=n.img`
  position: absolute;
  align-items: center;
  display: flex;
  top: -31px;
  width: 124px;
  height: 124px;
  object-fit: cover;
  border: 2px solid var(--gradient-blue);
  border-radius: 50%;
  background-color: ${({theme:t})=>t.secondaryBgColor};
`;n(X)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  color: var(--white);
`;const se=n.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`,oe=n.p`
  margin-top: 59px;
  /* !--------------------- */
  font-family: InterTight;
  /* !--------------------- */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${({theme:t})=>t.secondaryTextColor};
`,le=n.p`
  font-family: InterTight;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  color: ${({theme:t})=>t.secondaryTextColor};
`,$=n.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`,u=n.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`,x=n.label`
  color: ${({theme:t})=>t.labelTextColor};
  font-family: 'InterTightRegular', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`,g=n.input`
  width: 100%;
  height: 42px;
  padding: 0 14px;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 8px;
  border: 1px solid ${({theme:t})=>t.borderInputColor};
  color: ${({theme:t})=>t.mainTextColor};
  background-color: ${({theme:t})=>t.secondaryBgColor};

  &::placeholder {
    color: ${({theme:t})=>t.mainTextColor};
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
  }
`,de=n.button`
  display: flex;
  width: 195px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  color: #fff;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
  &:disabled {
    background-color: red;
  }
`,pe=/^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/,ce=/^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/,he=()=>{const t=V(),f=T(W),r=T(Z),[k,S]=C.useState(""),A={userName:r.userName?r.userName:"",birthday:r.birthday?B(r.birthday):"",email:r.email?r.email:"",phone:r.phone?r.phone:"",telegram:r.telegram?r.telegram:"",avatarFile:""},D=Q().shape({avatarFile:Y().test("fileType","Invalid file type. Allowed .jpeg or .png",a=>a?["image/jpg","image/jpeg","image/png"].includes(a.type):!0),name:m().min(3,"The name must be at least 3 characters.").max(16,"The name must be 16 characters or less.").required("The name is required."),email:m().matches(pe,"Invalid email address.").required("The email is required"),birthday:m().nullable().transform(a=>a===""?null:a),phone:m().matches(ce,"Invalid number.").nullable().transform(a=>a===""?null:a),telegram:m().min(3,"The name must be at least 3 characters.").max(16,"The telegram must be 16 characters or less.").nullable().transform(a=>a===""?null:a)}),N=a=>{const l=a.target.files[0],d=new FileReader;d.onloadend=()=>{o("avatarFile",l),S(d.result)},d.readAsDataURL(l)},z=async(a,l)=>{const{userName:d,birthday:v,email:j,phone:w,skype:P,avatarFile:I}=s,p=new FormData;p.append("userName",d),p.append("birthday",v),p.append("email",j),p.append("phone",w),p.append("skype",P),I&&p.append("avatarFile",I),t(H(p)).unwrap().then(()=>{F.success("Your profile has been changed successfully."),l.setSubmitting(!0)}).catch(E=>{F.error(E.message)})},{values:s,errors:i,touched:y,dirty:U,isSubmitting:R,setFieldValue:o,handleBlur:c,handleChange:b,handleSubmit:q,setSubmitting:h}=O({initialValues:A,validationSchema:D,onSubmit:z});return C.useEffect(()=>{if(f){const{userName:a,birthday:l,email:d,phone:v,skype:j,avatarURL:w}=r;S(w),o("userName",a),o("email",d),o("birthday",l?B(l):""),o("phone",v),o("skype",j)}},[f,o,r]),e.jsxs(ae,{encType:"multipart/form-data",autoComplete:"off",onSubmit:q,children:[k?e.jsx(ie,{src:k,alt:"User's avatar"}):e.jsx(re,{}),e.jsx(ne,{children:e.jsx("input",{type:"file",name:"avatarFile",onBlur:c,onChange:a=>{N(a),h(!1)}})}),e.jsxs(se,{children:[e.jsx(oe,{children:s.name?s.name:"Name"}),e.jsx(le,{children:"User"})]}),e.jsxs(te,{children:[e.jsxs($,{children:[e.jsxs(u,{children:[e.jsx(x,{htmlFor:"userName",children:"User Name"}),e.jsx(g,{type:"text",name:"userName",placeholder:"Enter your name",value:s.userName,onBlur:c,id:"userName",onChange:a=>{b(a),h(!1)}}),i.name&&e.jsx("div",{children:i.name})]}),e.jsxs(u,{children:[e.jsx(x,{htmlFor:"birthday",children:"Birthday"}),e.jsx(g,{name:"birthday",type:"date",placeholderText:G(new Date,"dd/MM/yyyy"),selected:s.birthday,value:s.birthday,onBlur:c,onChange:a=>{o("birthday",a),h(!1)},id:"birthday",dateFormat:"dd/MM/yyyy",maxDate:J(new Date,0),highlightDates:a=>K(a)}),y.birthday&&i.birthday?e.jsx("div",{children:i.birthday}):null]}),e.jsxs(u,{children:[e.jsx(x,{htmlFor:"email",children:"Email"}),e.jsx(g,{type:"email",name:"email",id:"email",value:s.email,onBlur:c,placeholder:"Add a email",onChange:a=>{b(a),h(!1)},required:!0}),y.email&&i.email?e.jsx("div",{children:i.email}):null]})]}),e.jsxs($,{children:[e.jsxs(u,{children:[e.jsx(x,{htmlFor:"phone",children:"Phone"}),e.jsx(g,{type:"text",name:"phone",id:"phone",placeholder:"Add a phone number",value:s.phone,onBlur:c,onChange:a=>{b(a),h(!1)}}),y.phone&&i.phone?e.jsx("div",{children:i.phone}):null]}),e.jsxs(u,{children:[e.jsx(x,{htmlFor:"skype",children:"Skype"}),e.jsx(g,{type:"text",name:"skype",id:"skype",placeholder:"Add a skype number",value:s.skype,onBlur:c,onChange:a=>{b(a),h(!1)}}),y.skype&&i.skype?e.jsx("div",{children:i.skype}):null]})]})]}),e.jsx(de,{type:"submit",disabled:!U||R,children:"Save changes"})]})},be=()=>e.jsx(he,{});export{be as default};
