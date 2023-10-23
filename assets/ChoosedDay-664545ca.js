import{s as r,a as o,j as t,P as c,H as G,p as V,I as Z,k as E,J as N,K as B,M as J}from"./index-2f950cad.js";const K=r.section`
  padding: 0 20px 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 18px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 50px;
  }
`,Q=r.li`
  width: 335px;
  flex-shrink: 0;
  padding: 18px 6px 10px 18px;
  background-color: ${({theme:e})=>e.secondaryBgColor};
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 8px 28px 20px;
  }
`,X=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),Y=r.div`
  margin-bottom: 24px;
  width: 299px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    width: 301px;
    height: 38px;
  }
`,ee=r.h4`
  color: ${({theme:e})=>e.mainTextColor};
  text-align: center;
  font-family: 'InterTightBold', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${()=>20/18};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: ${()=>24/20};
  }
`,te=r(X)`
  width: 22px;
  height: 22px;
  stroke: #111111;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;function $({title:e,category:n,showModal:i}){return t.jsxs(Y,{children:[t.jsx(ee,{children:e}),t.jsx("button",{type:"button",onClick:()=>i(n),children:t.jsx(te,{})})]})}$.propTypes={title:c.string.isRequired,category:c.string.isRequired};const I=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"plus"},o.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),re=r.button`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background-color: ${({theme:e})=>e.btnNoActive};
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: ${({theme:e})=>e.btnActive};
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,oe=r(I)`
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  /* transition: stroke 300ms linear; */
  cursor: pointer;

  /* &:hover,
  &:focus {
    stroke: #3e85f3;
  } */
`,ne=r.p`
  color: ${({theme:e})=>e.mainTextColor};

  text-align: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function M({category:e,showModal:n}){return t.jsxs(re,{type:"button",onClick:()=>{n(e)},children:[t.jsx(oe,{}),t.jsx(ne,{children:"Add task"})]})}M.propTypes={category:c.string.isRequired};const R=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"pencil-01"},o.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),se=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),ie=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{clipPath:"url(#clip0_3288_961)"},o.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_3288_961"},o.createElement("rect",{width:16,height:16,fill:"white"})))),ae=r.ul`
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,de=r.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ce=r.button`
  width: 100%;
  height: 100%;
`,le=r(ie)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,pe=r(R)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,he=r(se)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`;function q({id:e,showModal:n}){const[i]=G(e),a={swipe:[t.jsx(le,{}),()=>{console.log(`swipe button click ${e}`)}],edit:[t.jsx(pe,{}),()=>{n(e)}],remove:[t.jsx(he,{}),()=>{i(e)}]},l=Object.keys(a);return t.jsx(t.Fragment,{children:t.jsx(ae,{children:l.map(s=>t.jsx(de,{children:t.jsx(ce,{type:"button",onClick:a[s][1],children:a[s][0]})},s))})})}q.propTypes={id:c.string.isRequired};const xe=r.li`
  flex-shrink: 0;
  width: 299px;
  height: 108px;
  padding: 14px 14px 18px 15px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: ${({theme:e})=>e.mainBGColor};

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 112px;
  }
`,ue=r.p`
  overflow: hidden;
  color: ${({theme:e})=>e.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,ge=r.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,me=r.div`
  display: flex;
  justify-content: space-between;
`,fe=r.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,ke=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,be=r.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,we=r.p`
  color: ${({theme:e})=>e.mainBGColor};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function A({taskTitle:e,priority:n,avatar:i,id:a,showModal:l}){const s={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function d(u){const p=u.split("");return[p[0].toUpperCase(),...p.slice(1)].join("")}return t.jsx(xe,{children:t.jsxs(ge,{children:[t.jsx(ue,{children:e}),t.jsxs(me,{children:[t.jsxs(fe,{children:[t.jsx(ke,{src:i}),t.jsx(be,{color:s[n],children:t.jsx(we,{children:d(n)})})]}),t.jsx(q,{id:a,showModal:l})]})]})})}A.propTypes={taskTitle:c.string.isRequired,priority:c.string.isRequired,avatar:c.string.isRequired,id:c.string.isRequired};const ye=r.ul`
  height: 40vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 14px;
  overflow-x: hidden;

  &::-webkit-scrollbar {
    width: 6px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: #e7e5e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    /* background-color: #3e85f3; */
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    gap: 18px;
    margin-bottom: 32px;

    &::-webkit-scrollbar {
      width: 8px;
    }
  }

  @media screen and (min-width: 1440px) {
    height: 50vh;
  }
`;function z({tasks:e,showModal:n}){const i=V(Z);return t.jsx(ye,{children:e.map(a=>{const{_id:l,title:s,priority:d}=a;return t.jsx(A,{showModal:n,id:l,taskTitle:s,priority:d,avatar:i},l)})})}z.propTypes={tasks:c.arrayOf(c.object).isRequired};function W({title:e,tasks:n,showModal:i}){return t.jsxs(Q,{children:[t.jsx($,{title:e,category:e,showModal:i}),n&&t.jsx(z,{tasks:n,showModal:i}),t.jsx(M,{showModal:i,category:e})]})}W.propTypes={title:c.string.isRequired,tasks:c.array.isRequired};const Ce=r.ul`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background: #f2f2f2;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background: #e7e5e5;
  }

  &::-webkit-scrollbar-thumb:hover {
    background: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;function H({filteredTasks:e,showModal:n}){const i=Object.keys(e);return t.jsx(Ce,{children:i.map(a=>t.jsx(W,{showModal:n,title:a,tasks:e[a]},a))})}H.propTypes={filteredTasks:c.objectOf(c.array).isRequired};const Te=r(R)`
  width: 18px;
  height: 18px;
  stroke: #fff;
  cursor: pointer;
`,je=r(I)`
  width: 20px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`,ve=r.div`
  width: 396px;
  height: 360;
  margin: 0 auto;
  padding: 40px 28px 40px 28px;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({theme:e})=>e.secondaryBgColor};
`,y=r.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({theme:e})=>e.secondaryTextColor};
`,Le=r.input`
  width: 340px;
  height: 46px;
  background-color: ${({theme:e})=>e.popUpBg};
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
    padding-left: 18px;
    color: rgba(52, 52, 52, 1);
  }
`,Se=r.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 28px;
`,S=r.input`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  width: 163px;
  height: 46px;
  padding-left: 18px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 8px;
  background-color: ${({theme:e})=>e.popUpBg};
`,Ee=r.div`
  display: flex;
  margin-bottom: 32px;
`,C=r.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`,T=r.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`,Be=r(T)`
  background-color: #72c2f8;
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
  }
`,$e=r(T)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
  }
`,Ie=r(T)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
  }
`,Me=r.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`,D=r.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 182px;
  height: 48px;
  border-radius: 8px;
  color: #ffff;
  background-color: #3e85f3;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`,Re=r(D)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`,qe=r.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({theme:e})=>e.popUpBgBtn};
  border-radius: 8px;
  border: none;
`,Ae=({initialData:e,closeModal:n,category:i=""})=>{const a=h=>{switch(h){case"To do":d({...s,category:"to-do"}),p(!1);break;case"In Progress":d({...s,category:"in-progress"}),p(!1);break;case"Done":d({...s,category:"done"}),p(!1);break;default:const m=U.data.filter(({_id:w})=>w===h);p(!0),d(...m);break}},{currentDay:l}=E(),[s,d]=o.useState(e||{title:"",start:"09:00",end:"09:30",priority:"low",date:l,category:""}),[u,p]=o.useState(!1),[f,x]=o.useState(!!e),[k,b]=o.useState(""),[He,F]=o.useState([]),[P,De]=N(),{currentData:U}=B(l);o.useEffect(()=>{a(i),e?(d(e),x(!0)):x(!1)},[e]);const j=h=>{F(m=>m.map(L=>L.id===h.id?h:L)),n()},v=h=>{P(s),console.log(s),n()},g=h=>{const{name:m,value:w}=h.target;d({...s,[m]:w}),b("")},_=h=>{if(h.preventDefault(),!["to-do","in-progress","done"].includes(s.category)){b("Invalid category. Choose from: to-do, in-progress, done.");return}f?j(s):v(),d(e),x(!1)},O=()=>{n(),x(!1)};return t.jsx(ve,{children:t.jsxs("form",{onSubmit:_,children:[t.jsxs(y,{children:["Title",t.jsx(Le,{type:"text",name:"title",value:s.title,onChange:g,placeholder:"Enter text",required:!0,maxLength:"250"})]}),t.jsxs(Se,{children:[t.jsxs(y,{children:["Start",t.jsx(S,{type:"time",name:"start",value:s.start,onChange:g,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]"})]}),t.jsxs(y,{children:["End",t.jsx(S,{type:"time",name:"end",value:s.end,onChange:g,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]",min:s.start})]})]}),t.jsxs(Ee,{children:[t.jsxs(C,{children:[t.jsx(Be,{type:"radio",name:"priority",value:"low",checked:s.priority==="low",onChange:g,required:!0}),"Low"]}),t.jsxs(C,{children:[t.jsx($e,{type:"radio",name:"priority",value:"medium",checked:s.priority==="medium",onChange:g,required:!0}),"Medium"]}),t.jsxs(C,{children:[t.jsx(Ie,{type:"radio",name:"priority",value:"high",checked:s.priority==="high",onChange:g,required:!0}),"High"]})]}),k&&t.jsx("div",{children:k}),t.jsxs(Me,{children:[u?t.jsxs(D,{onClick:j,type:"submit",children:[t.jsx(Te,{}),"Edit"]}):t.jsxs(Re,{onClick:v,type:"submit",children:[t.jsx(je,{}),"Add"]}),t.jsx(qe,{type:"button",onClick:O,children:"Cancel"})]})]})})},ze=({initialData:e,closeModal:n,category:i})=>t.jsx(J,{onClose:n,children:t.jsx(Ae,{initialData:e,closeModal:n,category:i})}),We=ze;function Pe(){const[e,n]=o.useState(!1),[i,a]=o.useState(null),l=f=>{n(!0),a(f)},s=()=>{n(!1)},{currentDay:d}=E(),u={"To do":[],"In progress":[],Done:[]},{currentData:p}=B(d);return p&&p.data.map(x=>{const{category:k,date:b}=x;if(b===d)switch(k){case"to-do":u["To do"].push(x);break;case"in-progress":u["In progress"].push(x);break;default:u.Done.push(x);break}}),t.jsxs(K,{children:[t.jsx(H,{filteredTasks:u,showModal:l}),e&&t.jsx(We,{category:i,closeModal:s})]})}export{Pe as default};
