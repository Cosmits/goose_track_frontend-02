import{s as o,a as r,j as t,P as x,k as T,M as y,S as z,T as te,z as oe,U as re,V as ne,Q as I,W as se}from"./index-21324283.js";const ie=o.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  width: 375px;
  /* padding: 0 20px 20px 20px; */

  @media screen and (min-width: 768px) {
    width: 768px;
    /* padding: 0 32px 18px 32px; */
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
    /* padding-bottom: 50px; */
  }
`,ae=o.li`
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
`,de=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),le=o.div`
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
`,ce=o.h4`
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
`,pe=o(de)`
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
`,A=r.createContext(),j=()=>r.useContext(A);function H({title:e,idOfCompletion:n}){const{toogleModal:i}=j();return t.jsxs(le,{children:[t.jsx(ce,{children:e}),t.jsx("button",{type:"button",onClick:()=>{i(n)},children:t.jsx(pe,{})})]})}H.propTypes={title:x.string.isRequired,idOfCompletion:x.string.isRequired};const O=e=>r.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("g",{id:"plus"},r.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),xe=o.button`
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
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,he=o(O)`
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  /* transition: stroke 300ms linear; */
  cursor: pointer;

  /* &:hover,
  &:focus {
    stroke: #3e85f3;
  } */
`,ue=o.p`
  color: ${({theme:e})=>e.mainTextColor};

  text-align: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function F({idOfCompletion:e}){const{toogleModal:n}=j();return t.jsxs(xe,{type:"button",onClick:()=>{n(e)},children:[t.jsx(he,{}),t.jsx(ue,{children:"Add task"})]})}F.propTypes={idOfCompletion:x.string.isRequired};const P=e=>r.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("g",{id:"pencil-01"},r.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),ge=e=>r.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),_=e=>r.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},r.createElement("g",{clipPath:"url(#clip0_3288_961)"},r.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),r.createElement("defs",null,r.createElement("clipPath",{id:"clip0_3288_961"},r.createElement("rect",{width:16,height:16,fill:"white"})))),ke=o.ul`
  position: relative;
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,me=o.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,fe=o.button`
  width: 100%;
  height: 100%;
`,be=o(_)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,we=o(P)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,Ce=o(ge)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,Te=o.div`
  position: absolute;
  top: 44px;
  left: -39px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 14px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`,ye=o.p`
  flex-shrink: 0;
  color: #343434;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 116.667% */
`,je=o(_)`
  flex-shrink: 0;
  cursor: pointer;
  width: 14px;
  height: 14px;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,ve=o.button`
  display: flex;
  gap: 8px;
`,R=e=>e.split(" ").map(n=>n.toLowerCase()).join("-");function Se({id:e}){const n=["To do","In progress","Done"],{currentDay:i}=T(),{currentData:a}=y(i),[p]=a.data.filter(d=>d._id===e),{category:l}=p,[u]=z(),c=d=>{const h={...p,category:R(d)};delete h._id,delete h.date,u({id:e,...h})};return t.jsx(Te,{children:n.map(d=>{if(l!==R(d))return t.jsxs(ve,{onClick:()=>{c(d)},children:[t.jsx(ye,{children:d}),t.jsx(je,{})]},d)})})}function U({id:e}){const{toogleModal:n}=j(),[i,a]=r.useState(!1),[p]=te(),l={swipe:[t.jsx(be,{}),()=>{a(!i)}],edit:[t.jsx(we,{}),()=>{n(e)}],remove:[t.jsx(Ce,{}),()=>{p(e)}]},u=Object.keys(l);return t.jsx(t.Fragment,{children:t.jsxs(ke,{children:[u.map(c=>{const[d,h]=l[c];return t.jsx(me,{children:t.jsx(fe,{type:"button",onClick:h,children:d})},c)}),i&&t.jsx(Se,{id:e})]})})}U.propTypes={id:x.string.isRequired};const Ee=o.li`
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
`,Le=o.p`
  overflow: hidden;
  color: ${({theme:e})=>e.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,$e=o.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Be=o.div`
  display: flex;
  justify-content: space-between;
`,Me=o.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,Ie=o.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,Re=o.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,qe=o.p`
  color: ${({theme:e})=>e.taskCardSuccessText};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function V({taskTitle:e,priority:n,id:i}){const a=oe(re),p={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function l(u){const c=u.split("");return[c[0].toUpperCase(),...c.slice(1)].join("")}return t.jsx(Ee,{children:t.jsxs($e,{children:[t.jsx(Le,{children:e}),t.jsxs(Be,{children:[t.jsxs(Me,{children:[t.jsx(Ie,{src:a}),t.jsx(Re,{color:p[n],children:t.jsx(qe,{children:l(n)})})]}),t.jsx(U,{id:i})]})]})})}V.propTypes={taskTitle:x.string.isRequired,priority:x.string.isRequired,id:x.string.isRequired};const We=o.ul`
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
    background-color: ${({theme:e})=>e.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarThumb};
  }

  &::-webkit-scrollbar-thumb:hover {
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
`;function D({tasks:e}){return t.jsx(We,{children:e.map(n=>{const{_id:i,title:a,priority:p}=n;return t.jsx(V,{taskTitle:a,priority:p,id:i},i)})})}D.propTypes={tasks:x.arrayOf(x.object).isRequired};function G({title:e,tasks:n}){return t.jsxs(ae,{children:[t.jsx(H,{title:e,idOfCompletion:e}),n&&t.jsx(D,{tasks:n}),t.jsx(F,{idOfCompletion:e})]})}G.propTypes={title:x.string.isRequired,tasks:x.arrayOf(x.object).isRequired};const ze=o.ul`
  display: flex;
  gap: 16px;
  overflow-x: auto;

  &::-webkit-scrollbar {
    width: 12px;
  }

  &::-webkit-scrollbar-track {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarTrack};
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 12px;
    background-color: ${({theme:e})=>e.scrollbarThumb};
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: ${({theme:e})=>e.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    &::-webkit-scrollbar {
      width: 14px;
    }
  }

  @media screen and (min-width: 1440px) {
    gap: 27px;
  }
`;function Z({filteredTasks:e}){const n=Object.keys(e);return t.jsx(ze,{children:n.map(i=>t.jsx(G,{title:i,tasks:e[i]},i))})}Z.propTypes={filteredTasks:x.objectOf(x.array).isRequired};const Ae=e=>r.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"none",...e},r.createElement("path",{d:"M18 6L6 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}),r.createElement("path",{d:"M6 6L18 18",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),He=o(P)`
  width: 18px;
  height: 18px;
  stroke: #fff;
  cursor: pointer;
`,Oe=o(O)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`,Fe=o(Ae)`
  width: 24px;
  height: 24px;
  stroke: #111;
  cursor: pointer;
  margin-right: auto;
  position: absolute;
  top: 0;
  right: 0;
`,Pe=o.div`
  width: 100%;
  /* height:360px; */
  position: relative;
  margin: 0 auto;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  background-color: ${({theme:e})=>e.secondaryBgColor};
`,w=o.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({theme:e})=>e.labelTextColor};
`,_e=o.input`
  width: 340px;
  height: 46px;
  background-color: ${({theme:e})=>e.mainBGColor};
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  padding-left: 18px;
  border-color: ${({theme:e})=>e.calendarBtnColor}; ;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
    color: ${({theme:e})=>e.mainSideBarText};
  }
`,Ue=o.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 28px;
`,q=o.input`
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
  color-scheme: ${({theme:e})=>e.colorScheme};;
  
  &::-webkit-calendar-picker-indicator {
    margin-right: 20px;
  }

  @media screen and (max-width: 374px) {
    width: 126px;
  }
`,Ve=o.div`
  display: flex;
  margin-bottom: 32px;
`,C=o.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`,v=o.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`,De=o(v)`
  background-color: #72c2f8;
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`,Ge=o(v)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`,Ze=o(v)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`,Ne=o.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`,N=o.button`
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
`,Qe=o(N)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`,Xe=o.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({theme:e})=>e.popUpBgBtn};
  border-radius: 8px;
  border: none;
`,Je=({initialData:e,closeModal:n,category:i=""})=>{const{currentDay:a}=T(),[p,l]=r.useState(!1),[u,c]=r.useState(!!e),[d,h]=r.useState(""),[Q,{isError:S,error:E}]=ne(),[X,{isError:L,error:$}]=z(),{currentData:J}=y(a),[s,g]=r.useState(e||{title:"",start:"09:00",end:"09:30",priority:"low",date:a,category:""}),K=m=>{switch(m){case"To do":g({...s,category:"to-do"}),l(!1);break;case"In progress":g({...s,category:"in-progress"}),l(!1);break;case"Done":g({...s,category:"done"}),l(!1);break;default:{const f=J.data.filter(({_id:b})=>b===m);l(!0),g(...f);break}}};r.useEffect(()=>{K(i),e?(g(e),c(!0)):c(!1)},[i,e]),r.useEffect(()=>{S&&(console.log(E),I.error("Error creating task")),L&&(console.log($),I.error("Error creating task"))},[E,S,$,L]);const B=()=>{X(s._id,s),n()},M=()=>{Q(s),n()},k=m=>{const{name:f,value:b}=m.target;g({...s,[f]:b}),h("")},Y=m=>{if(m.preventDefault(),!["to-do","in-progress","done"].includes(s.category)){h("Invalid category. Choose from: to-do, in-progress, done.");return}u?B():M(),g(e),c(!1)},ee=()=>{n(),c(!1)};return t.jsxs(Pe,{children:[t.jsx(Fe,{onClick:()=>{n()}}),t.jsxs("form",{onSubmit:Y,children:[t.jsxs(w,{children:["Title",t.jsx(_e,{type:"text",name:"title",value:(s==null?void 0:s.title)||"",onChange:k,placeholder:"Enter text",required:!0,maxLength:"250"})]}),t.jsxs(Ue,{children:[t.jsxs(w,{children:["Start",t.jsx(q,{type:"time",name:"start",value:(s==null?void 0:s.start)||"",onChange:k,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]"})]}),t.jsxs(w,{children:["End",t.jsx(q,{type:"time",name:"end",value:(s==null?void 0:s.end)||"",onChange:k,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]",min:s==null?void 0:s.start})]})]}),t.jsxs(Ve,{children:[t.jsxs(C,{children:[t.jsx(De,{type:"radio",name:"priority",value:"low",checked:(s==null?void 0:s.priority)==="low",onChange:k,required:!0}),"Low"]}),t.jsxs(C,{children:[t.jsx(Ge,{type:"radio",name:"priority",value:"medium",checked:(s==null?void 0:s.priority)==="medium",onChange:k,required:!0}),"Medium"]}),t.jsxs(C,{children:[t.jsx(Ze,{type:"radio",name:"priority",value:"high",checked:(s==null?void 0:s.priority)==="high",onChange:k,required:!0}),"High"]})]}),d&&t.jsx("div",{children:d}),t.jsxs(Ne,{children:[p?t.jsxs(N,{onClick:B,type:"submit",children:[t.jsx(He,{}),"Edit"]}):t.jsxs(Qe,{onClick:M,type:"submit",children:[t.jsx(Oe,{}),"Add"]}),t.jsx(Xe,{type:"button",onClick:ee,children:"Cancel"})]})]})]})},Ke=({initialData:e,closeModal:n,category:i})=>t.jsx(se,{onClose:n,children:t.jsx(Je,{initialData:e,closeModal:n,category:i})}),Ye=Ke;function et(e,n){const i={"To do":[],"In progress":[],Done:[]};return e.map(a=>{const{category:p,date:l}=a;if(l===n)switch(p){case"to-do":i["To do"].unshift(a);break;case"in-progress":i["In progress"].unshift(a);break;default:i.Done.unshift(a);break}}),i}const W={"To do":[],"In progress":[],Done:[]};function ot(){const{currentDay:e}=T(),{currentData:n}=y(e),[i,a]=r.useState(!1),[p,l]=r.useState(null),[u,c]=r.useState(W);r.useEffect(()=>{if(n){const h=n.data;c(et(h,e))}return()=>{c(W),l(null)}},[e,n]);const d=h=>{l(h),a(!i)};return t.jsx(ie,{children:t.jsxs(A.Provider,{value:{toogleModal:d},children:[t.jsx(Z,{filteredTasks:u}),i&&t.jsx(Ye,{category:p,closeModal:d})]})})}export{ot as default};
