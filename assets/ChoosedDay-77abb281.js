import{s as r,a as o,j as t,P as u,H as M,I as K,p as X,J as Y,k as R,K as ee,M as q,Q as B,S as te}from"./index-e85a3019.js";const re=r.section`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  width: 375px;
  padding: 0 20px 20px 20px;

  @media screen and (min-width: 768px) {
    width: 768px;
    padding: 0 32px 18px 32px;
  }

  @media screen and (min-width: 1440px) {
    width: 1151px;
    padding-bottom: 50px;
  }
`,oe=r.li`
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
`,ne=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),se=r.div`
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
`,ie=r.h4`
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
`,ae=r(ne)`
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
`;function A({title:e,category:n,showModal:s}){return t.jsxs(se,{children:[t.jsx(ie,{children:e}),t.jsx("button",{type:"button",onClick:()=>s(n),children:t.jsx(ae,{})})]})}A.propTypes={title:u.string.isRequired,category:u.string.isRequired};const z=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"plus"},o.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),de=r.button`
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
`,le=r(z)`
  width: 24px;
  height: 24px;
  stroke: ${({theme:e})=>e.mainTextColor};
  /* transition: stroke 300ms linear; */
  cursor: pointer;

  /* &:hover,
  &:focus {
    stroke: #3e85f3;
  } */
`,ce=r.p`
  color: ${({theme:e})=>e.mainTextColor};

  text-align: center;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function W({category:e,showModal:n}){return t.jsxs(de,{type:"button",onClick:()=>{n(e)},children:[t.jsx(le,{}),t.jsx(ce,{children:"Add task"})]})}W.propTypes={category:u.string.isRequired};const D=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"pencil-01"},o.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),pe=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),H=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{clipPath:"url(#clip0_3288_961)"},o.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_3288_961"},o.createElement("rect",{width:16,height:16,fill:"white"})))),xe=r.ul`
  position: relative;
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,he=r.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,ue=r.button`
  width: 100%;
  height: 100%;
`,ge=r(H)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,me=r(D)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,fe=r(pe)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({theme:e})=>e.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({theme:e})=>e.btnTextColor};
  }
`,ke=r.div`
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
`,be=r.p`
  flex-shrink: 0;
  color: #343434;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 116.667% */
`,we=r(H)`
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
`,ye=r.button`
  display: flex;
  gap: 8px;
`;function Te({category:e,id:n,tasksData:s}){const d=["To do","In progress","Done"],[l]=M(),h=a=>{const[i]=s.filter(g=>g._id===n),c=a.split(" ").map(g=>g.toLowerCase()).join("-"),p={...i,category:c};delete p._id,delete p.date,l({id:n,...p})};return t.jsx(ke,{children:d.map(a=>{if(a!==e)return t.jsxs(ye,{onClick:()=>{h(a)},children:[t.jsx(be,{children:a}),t.jsx(we,{})]},a)})})}function F({id:e,showModal:n,category:s,tasksData:d}){const[l,h]=o.useState(!1),[a]=K(e),i={swipe:[t.jsx(ge,{}),()=>{h(!l)}],edit:[t.jsx(me,{}),()=>{n(e)}],remove:[t.jsx(fe,{}),()=>{a(e)}]},c=Object.keys(i);return t.jsx(t.Fragment,{children:t.jsxs(xe,{children:[c.map(p=>t.jsx(he,{children:t.jsx(ue,{type:"button",onClick:i[p][1],children:i[p][0]})},p)),l&&t.jsx(Te,{category:s,id:e,tasksData:d})]})})}F.propTypes={id:u.string.isRequired};const Ce=r.li`
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
`,je=r.p`
  overflow: hidden;
  color: ${({theme:e})=>e.mainTextColor};
  text-overflow: ellipsis;
  white-space: nowrap;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,ve=r.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Se=r.div`
  display: flex;
  justify-content: space-between;
`,Ee=r.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,Le=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,$e=r.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,Be=r.p`
  color: ${({theme:e})=>e.taskCardSuccessText};
  font-family: 'InterSemiBold', sans-serif;
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function _({tasksData:e,category:n,taskTitle:s,priority:d,avatar:l,id:h,showModal:a}){const i={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function c(p){const g=p.split("");return[g[0].toUpperCase(),...g.slice(1)].join("")}return t.jsx(Ce,{children:t.jsxs(ve,{children:[t.jsx(je,{children:s}),t.jsxs(Se,{children:[t.jsxs(Ee,{children:[t.jsx(Le,{src:l}),t.jsx($e,{color:i[d],children:t.jsx(Be,{children:c(d)})})]}),t.jsx(F,{id:h,showModal:a,category:n,tasksData:e})]})]})})}_.propTypes={taskTitle:u.string.isRequired,priority:u.string.isRequired,avatar:u.string.isRequired,id:u.string.isRequired};const Ie=r.ul`
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
`;function P({tasks:e,showModal:n,category:s,tasksData:d}){const l=X(Y);return t.jsx(Ie,{children:e.map(h=>{const{_id:a,title:i,priority:c}=h;return t.jsx(_,{category:s,showModal:n,id:a,taskTitle:i,priority:c,avatar:l,tasksData:d},a)})})}P.propTypes={tasks:u.arrayOf(u.object).isRequired};function O({title:e,tasks:n,showModal:s,tasksData:d}){return t.jsxs(oe,{children:[t.jsx(A,{title:e,category:e,showModal:s}),n&&t.jsx(P,{tasks:n,showModal:s,category:e,tasksData:d}),t.jsx(W,{showModal:s,category:e})]})}O.propTypes={title:u.string.isRequired,tasks:u.array.isRequired};const Me=r.ul`
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
`;function U({filteredTasks:e,showModal:n,tasksData:s}){const d=Object.keys(e);return t.jsx(Me,{children:d.map(l=>t.jsx(O,{showModal:n,title:l,tasks:e[l],tasksData:s},l))})}U.propTypes={filteredTasks:u.objectOf(u.array).isRequired};const Re=r(D)`
  width: 18px;
  height: 18px;
  stroke: #fff;
  cursor: pointer;
`,qe=r(z)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`,Ae=r.div`
  /* width: 396px; */
  /* height: 360px; */
  margin: 0 auto;
  /* padding: 40px 28px 40px 28px; */
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2); */
  background-color: ${({theme:e})=>e.secondaryBgColor};
`,C=r.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({theme:e})=>e.labelTextColor};
`,ze=r.input`
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
`,We=r.div`
  display: flex;
  gap: 14px;
  justify-content: center;
  margin-bottom: 28px;
`,I=r.input`
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
`,De=r.div`
  display: flex;
  margin-bottom: 32px;
`,j=r.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`,v=r.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`,He=r(v)`
  background-color: #72c2f8;
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`,Fe=r(v)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`,_e=r(v)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`,Pe=r.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`,G=r.button`
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
`,Oe=r(G)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
`,Ue=r.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({theme:e})=>e.popUpBgBtn};
  border-radius: 8px;
  border: none;
`,Ge=({initialData:e,closeModal:n,category:s=""})=>{const{currentDay:d}=R(),[l,h]=o.useState(!1),[a,i]=o.useState(!!e),[c,p]=o.useState(""),[g,{isError:b,error:w}]=ee(),[V,{isError:S,error:E}]=M(),{currentData:Z}=q(d),[x,m]=o.useState(e||{title:"",start:"09:00",end:"09:30",priority:"low",date:d,category:""}),N=k=>{switch(k){case"To do":m({...x,category:"to-do"}),h(!1);break;case"In progress":m({...x,category:"in-progress"}),h(!1);break;case"Done":m({...x,category:"done"}),h(!1);break;default:{const y=Z.data.filter(({_id:T})=>T===k);h(!0),m(...y);break}}};o.useEffect(()=>{N(s),e?(m(e),i(!0)):i(!1)},[s,e]),o.useEffect(()=>{b&&(console.log(w),B.error("Error creating task")),S&&(console.log(E),B.error("Error creating task"))},[w,b,E,S]);const L=()=>{V(x._id,x),n()},$=()=>{g(x),n()},f=k=>{const{name:y,value:T}=k.target;m({...x,[y]:T}),p("")},Q=k=>{if(k.preventDefault(),!["to-do","in-progress","done"].includes(x.category)){p("Invalid category. Choose from: to-do, in-progress, done.");return}a?L():$(),m(e),i(!1)},J=()=>{n(),i(!1)};return t.jsx(Ae,{children:t.jsxs("form",{onSubmit:Q,children:[t.jsxs(C,{children:["Title",t.jsx(ze,{type:"text",name:"title",value:x.title,onChange:f,placeholder:"Enter text",required:!0,maxLength:"250"})]}),t.jsxs(We,{children:[t.jsxs(C,{children:["Start",t.jsx(I,{type:"time",name:"start",value:x.start,onChange:f,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]"})]}),t.jsxs(C,{children:["End",t.jsx(I,{type:"time",name:"end",value:x.end,onChange:f,required:!0,pattern:"[0-1][0-9]:[0-5][0-9]",min:x.start})]})]}),t.jsxs(De,{children:[t.jsxs(j,{children:[t.jsx(He,{type:"radio",name:"priority",value:"low",checked:x.priority==="low",onChange:f,required:!0}),"Low"]}),t.jsxs(j,{children:[t.jsx(Fe,{type:"radio",name:"priority",value:"medium",checked:x.priority==="medium",onChange:f,required:!0}),"Medium"]}),t.jsxs(j,{children:[t.jsx(_e,{type:"radio",name:"priority",value:"high",checked:x.priority==="high",onChange:f,required:!0}),"High"]})]}),c&&t.jsx("div",{children:c}),t.jsxs(Pe,{children:[l?t.jsxs(G,{onClick:L,type:"submit",children:[t.jsx(Re,{}),"Edit"]}):t.jsxs(Oe,{onClick:$,type:"submit",children:[t.jsx(qe,{}),"Add"]}),t.jsx(Ue,{type:"button",onClick:J,children:"Cancel"})]})]})})},Ve=({initialData:e,closeModal:n,category:s})=>t.jsx(te,{onClose:n,children:t.jsx(Ge,{initialData:e,closeModal:n,category:s})}),Ze=Ve;function Qe(){const[e,n]=o.useState(!1),[s,d]=o.useState(null),l=p=>{n(!0),d(p)},h=()=>{n(!1)},{currentDay:a}=R(),i={"To do":[],"In progress":[],Done:[]},{currentData:c}=q(a);return c&&c.data.map(g=>{const{category:b,date:w}=g;if(w===a)switch(b){case"to-do":i["To do"].push(g);break;case"in-progress":i["In progress"].push(g);break;default:i.Done.push(g);break}}),t.jsxs(re,{children:[t.jsx(U,{filteredTasks:i,showModal:l,tasksData:c==null?void 0:c.data}),e&&t.jsx(Ze,{category:s,closeModal:h})]})}export{Qe as default};
