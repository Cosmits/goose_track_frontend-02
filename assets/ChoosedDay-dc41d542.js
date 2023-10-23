import{s as r,a as o,j as t,P as s,n as w,k as b,D as C,E as j,F as T}from"./index-f883eae1.js";const y=r.section`
  padding: 0 20px 20px 20px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 18px 32px;
  }

  @media screen and (min-width: 1440px) {
    padding-bottom: 50px;
  }
`,v=r.li`
  width: 335px;
  flex-shrink: 0;
  padding: 18px 6px 10px 18px;
  background-color: #ffffff;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);

  @media screen and (min-width: 768px) {
    width: 344px;
    padding: 18px 8px 28px 20px;
  }
`,L=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})),E=r.div`
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
`,B=r.h4`
  color: #111;
  text-align: center;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${()=>20/18};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: ${()=>24/20};
  }
`,R=r(L)`
  width: 22px;
  height: 22px;
  stroke: #111111;
  transition: stroke 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;function h({title:e,category:n}){return t.jsxs(E,{children:[t.jsx(B,{children:e}),t.jsx("button",{type:"button",onClick:()=>console.log(`Column Head Bar Add Task Btn click ${n}`),children:t.jsx(R,{})})]})}h.propTypes={title:s.string.isRequired,category:s.string.isRequired};const I=e=>o.createElement("svg",{viewBox:"0 0 24 24",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"plus"},o.createElement("path",{id:"Icon",d:"M12 5V19M5 12H19",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"}))),M=r.button`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background-color: #e3f3ff;
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #cae8ff;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`,A=r(I)`
  width: 24px;
  height: 24px;
  stroke: #111111;
  /* transition: stroke 300ms linear; */
  cursor: pointer;

  /* &:hover,
  &:focus {
    stroke: #3e85f3;
  } */
`,S=r.p`
  color: #111;

  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>18/14};
`;function x({category:e}){return t.jsxs(M,{type:"button",onClick:()=>console.log(`Add Task Button click ${e}`),children:[t.jsx(A,{}),t.jsx(S,{children:"Add task"})]})}x.propTypes={category:s.string.isRequired};const W=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{id:"pencil-01"},o.createElement("path",{id:"Icon",d:"M1.66675 14.3333L5.36626 12.9104C5.60289 12.8194 5.7212 12.7739 5.83189 12.7145C5.93022 12.6617 6.02395 12.6008 6.11211 12.5324C6.21136 12.4554 6.301 12.3657 6.48027 12.1865L14.0001 4.66665C14.7365 3.93027 14.7365 2.73636 14.0001 1.99998C13.2637 1.2636 12.0698 1.2636 11.3334 1.99998L3.8136 9.51979C3.63433 9.69906 3.5447 9.7887 3.46768 9.88795C3.39926 9.97611 3.33835 10.0698 3.28557 10.1682C3.22615 10.2789 3.18065 10.3972 3.08964 10.6338L1.66675 14.3333ZM1.66675 14.3333L3.03883 10.766C3.13701 10.5107 3.1861 10.383 3.27031 10.3246C3.34389 10.2735 3.43495 10.2542 3.52295 10.271C3.62364 10.2902 3.72034 10.3869 3.91374 10.5803L5.4198 12.0863C5.6132 12.2797 5.7099 12.3764 5.72913 12.4771C5.74593 12.5651 5.72661 12.6562 5.67551 12.7298C5.61705 12.814 5.48941 12.8631 5.23413 12.9613L1.66675 14.3333Z",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}))),q=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("path",{d:"M6 2H10",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M2 4H14",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M3.33325 4L3.73384 10.0089C3.80822 11.1245 3.84541 11.6823 4.02771 12.1304C4.3587 12.9441 5.02964 13.5718 5.86349 13.8479C6.32277 14 6.88182 14 7.99992 14V14C9.11802 14 9.67707 14 10.1364 13.8479C10.9702 13.5718 11.6411 12.9441 11.9721 12.1304C12.1544 11.6823 12.1916 11.1245 12.266 10.0089L12.6666 4",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),$=e=>o.createElement("svg",{viewBox:"0 0 16 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",...e},o.createElement("g",{clipPath:"url(#clip0_3288_961)"},o.createElement("path",{d:"M2.22534 4.66665C3.37804 2.67398 5.53252 1.33331 8.00013 1.33331C11.682 1.33331 14.6668 4.31808 14.6668 7.99998C14.6668 11.6819 11.682 14.6666 8.00013 14.6666C5.53252 14.6666 3.37804 13.326 2.22534 11.3333",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M8 10.6666L10.6667 7.99998L8 5.33331",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"}),o.createElement("path",{d:"M1.33325 8L10.6666 8",strokeWidth:1.3,strokeLinecap:"round",strokeLinejoin:"round"})),o.createElement("defs",null,o.createElement("clipPath",{id:"clip0_3288_961"},o.createElement("rect",{width:16,height:16,fill:"white"})))),H=r.ul`
  align-items: flex-end;
  display: flex;
  gap: 10px;
`,z=r.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`,D=r.button`
  width: 100%;
  height: 100%;
`,F=r($)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: #111111;
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`,P=r(W)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: #111111;
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`,_=r(q)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: #111111;
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }
`;function u({id:e}){const n={swipe:[t.jsx(F,{}),()=>{console.log(`swipe button click ${e}`)}],edit:[t.jsx(P,{}),()=>{console.log(`edit button click ${e}`)}],remove:[t.jsx(_,{}),()=>{console.log(`delete task ${e} success`)}]},i=Object.keys(n);return t.jsx(t.Fragment,{children:t.jsx(H,{children:i.map(a=>t.jsx(z,{children:t.jsx(D,{type:"button",onClick:n[a][1],children:n[a][0]})},a))})})}u.propTypes={id:s.string.isRequired};const O=r.li`
  flex-shrink: 0;
  width: 299px;
  height: 108px;
  padding: 14px 14px 18px 15px;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.8);
  background-color: #f7f6f9;

  @media screen and (min-width: 768px) {
    width: 300px;
    height: 112px;
  }
`,U=r.p`
  overflow: hidden;
  color: #111;
  text-overflow: ellipsis;
  white-space: nowrap;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: ${()=>18/14};
`,V=r.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`,Z=r.div`
  display: flex;
  justify-content: space-between;
`,G=r.div`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`,N=r.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  background-image: url(${({src:e})=>e});
  flex-shrink: 0;
  border: 1.8px solid #3e85f3;
`,Q=r.div`
  height: 20px;
  padding: 4px 12px;
  border-radius: 4px;
  background-color: ${({color:e})=>e};
`,J=r.p`
  color: #f7f6f9;
  /* font-family: Inter; */
  font-size: 10px;
  font-style: normal;
  font-weight: 600;
  line-height: ${()=>12/10};
`;function k({taskTitle:e,priority:n,avatar:i,id:a}){const d={low:"#72C2F8",medium:"#F3B249",high:"#EA3D65"};function c(l){const p=l.split("");return[p[0].toUpperCase(),...p.slice(1)].join("")}return t.jsx(O,{children:t.jsxs(V,{children:[t.jsx(U,{children:e}),t.jsxs(Z,{children:[t.jsxs(G,{children:[t.jsx(N,{src:i}),t.jsx(Q,{color:d[n],children:t.jsx(J,{children:c(n)})})]}),t.jsx(u,{id:a})]})]})})}k.propTypes={taskTitle:s.string.isRequired,priority:s.string.isRequired,avatar:s.string.isRequired,id:s.string.isRequired};const K=w.ul`
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
    background-color: #3e85f3;
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
`;function g({tasks:e}){const n=b(C);return t.jsx(K,{children:e.map(i=>{const{_id:a,title:d,priority:c}=i;return t.jsx(k,{id:a,taskTitle:d,priority:c,avatar:n},a)})})}g.propTypes={tasks:s.arrayOf(s.object).isRequired};function m({title:e,tasks:n}){return t.jsxs(v,{children:[t.jsx(h,{title:e,category:e}),n&&t.jsx(g,{tasks:n}),t.jsx(x,{category:e})]})}m.propTypes={title:s.string.isRequired,tasks:s.array.isRequired};const X=r.ul`
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
`;function f({filteredTasks:e}){const n=Object.keys(e);return t.jsx(X,{children:n.map(i=>t.jsx(m,{title:i,tasks:e[i]},i))})}f.propTypes={filteredTasks:s.objectOf(s.array).isRequired};function te(){const{currentDay:e}=j(),n={"To do":[],"In progress":[],Done:[]},{data:i}=T("2023-10");return i&&i.data.map(d=>{const{category:c,date:l}=d;if(l.split("-")[2]===e)switch(c){case"to-do":n["To do"].push(d);break;case"in-progress":n["In progress"].push(d);break;default:n.Done.push(d);break}}),t.jsx(y,{children:t.jsx(f,{filteredTasks:n})})}export{te as default};
