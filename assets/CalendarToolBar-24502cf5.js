import{a as D,b as $,x as B,t as A,p as u,s as N}from"./index-ce942dfc.js";import{q as z,a3 as T,a5 as p,v as O,s as b,H as M,a as v,h as C,j as o,B as h,a6 as S}from"./index-86979d3a.js";import{F as _,f as E,a as F}from"./index-3731777a.js";/* empty css                         */function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},w.apply(this,arguments)}function V(e,t){if(e==null)return{};var r={},a=Object.keys(e),i,c;for(c=0;c<a.length;c++)i=a[c],!(t.indexOf(i)>=0)&&(r[i]=e[i]);return r}function j(e,t){if(z(2,arguments),!t||T(t)!=="object")return new Date(NaN);var r=t.years?p(t.years):0,a=t.months?p(t.months):0,i=t.weeks?p(t.weeks):0,c=t.days?p(t.days):0,f=t.hours?p(t.hours):0,s=t.minutes?p(t.minutes):0,l=t.seconds?p(t.seconds):0,y=O(e),k=a||r?D(y,a+r*12):y,g=c||i?$(k,c+i*7):k,m=s+f*60,n=l+m*60,d=n*1e3,x=new Date(g.getTime()+d);return x}function X(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,B(e,t)}b.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;const W=M`
  .react-datepicker__wrapper {
    position: relative;

  }
  .date-picker-container {
    display: flex;
    margin-bottom: 32px;
  }
  .date-picker-container .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 373px;
    height: 354px;
    padding: 15px 0;
    background-color: #3e85f3;
    font-family: inherit;
    border-radius: 16px;
  }
  .date-picker-container .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .date-picker-container .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .date-picker-container .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .date-picker-container .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .date-picker-container .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }
  .date-picker-container .react-datepicker__current-month {
    font-family: inherit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .date-picker-container .react-datepicker__day-name {
    margin: 0;
    padding: 8px 1px;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .date-picker-container .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .date-picker-container .react-datepicker__navigation--previous {
    left: 17px;
    width: 18px;
    height: 18px;
  }
  .date-picker-container .react-datepicker__navigation--next {
    right: 17px;
    width: 18px;
    height: 18px;
  }
  .date-picker-container .date-picker-btn-prev,
  .date-picker-container .date-picker-btn-next {
    display: block;
    padding: 8px 14px;
    border: 1px solid ${({theme:e})=>e.calendarBdColor};
    background-color: ${({theme:e})=>e.secondaryBgColor};
    color: ${({theme:e})=>e.toolbarArrowColor};
    transition: all 0.3s ease;
  }
  .date-picker-container .date-picker-btn-prev:hover,
  .date-picker-container .date-picker-btn-next:hover,
  .date-picker-container .date-picker-btn-prev:focus,
  .date-picker-container .date-picker-btn-next:focus {
    color: ${({theme:e})=>e.toolbarArrowHoverColor};
  }
  .date-picker-container .date-picker-btn-prev {
    margin-left: 8px;
    border-radius: 8px 0 0 8px;
  }
  .date-picker-container .date-picker-btn-next {
    border-radius: 0 8px 8px 0;
  }
  .date-picker-container .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .date-picker-container .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .date-picker-container .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: white;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .date-picker-container .react-datepicker__month {
    display: flex;
    gap: 0;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 18px;
    margin: 0;
  }
  .date-picker-container .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .date-picker-container .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color:white;
  }
  .date-picker-container .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .date-picker-container .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .date-picker-container .react-datepicker__day--weekend {
    opacity: 50%;
  }
  .date-picker-container .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .date-picker-container .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .date-picker-container .react-datepicker__triangle {
    visibility: hidden;
  }
  .date-picker-container .react-datepicker-popper {
    z-index: 2;
  }
  .date-picker-container {
    display: flex;
    margin-bottom: 32px;
  }

  @media (max-width: 767px) and (min-width: 320px) {
    .date-picker-container {
      justify-content: space-between;
      margin-bottom: 18px;
    }
  }
`,P=b.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`,I=b.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-color: #3e85f3;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  @media (max-width: 767px) and (min-width: 320px) {
    width: 155px;
  }
`,L=({onDateChange:e})=>{const[t,r]=v.useState(Date.now()),a=C(),[i,c,f,s,l]=location.pathname.split("/"),y=v.forwardRef(({onClick:n},d)=>o.jsx(I,{onClick:n,ref:d,children:h(t,"MMMM yyyy")})),k=()=>{if(s==="month")r(n=>D(n,1)),e("NEXT");else{const n=u(l,"yyyy-MM-dd",new Date),d=j(n,{days:1}),x=h(d,"yyyy-MM-dd");a(`/calendar/day/${x}`)}},g=()=>{if(s==="month")r(n=>N(n,1)),e("PREV");else{const n=u(l,"yyyy-MM-dd",new Date),d=j(n,{days:-1}),x=h(d,"yyyy-MM-dd");a(`/calendar/day/${x}`)}},m=n=>{if(s==="month")r(n),e("DATE",n);else{const d=h(n,"yyyy-MM-dd");a(`/calendar/day/${d}`)}};return o.jsxs("div",{className:"date-picker-container",children:[o.jsx(A,{selected:t,onChange:m,customInput:o.jsx(y,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:n=>n.substr(0,1)}),o.jsxs(P,{children:[o.jsx("button",{className:"date-picker-btn-prev",onClick:g,children:o.jsx(_,{icon:E})}),o.jsx("button",{className:"date-picker-btn-next",onClick:k,children:o.jsx(_,{icon:F})})]}),o.jsx(W,{})]})},R=M`
  .datepicker-container {
    display: flex;
    justify-content: space-between;
  }

  .navigation-btns button {
    width: 82px;
    font-family: inherit;
    font-size: 16px;
    padding: 8px;
    color: #3E85F3;
    background-color: ${({theme:e})=>e.navBtnBgColor};
    transition: .3s all ease;
  }

  .navigation-btns button:nth-of-type(1) {
    border-right: 1px solid rgba(62, 133, 243, .2);
    border-radius: 8px 0 0 8px;
  }

  .navigation-btns button:nth-of-type(2) {
    border-radius: 0 8px 8px 0;
  }

  .navigation-btns button.active {
    color: ${({theme:e})=>e.navBtnColorActive};
    background-color: ${({theme:e})=>e.navBtnBgColorActive};
  }

  .navigation-btns button:focus,
  .navigation-btns button:hover {
    color: ${({theme:e})=>e.navBtnColorActive};
    background-color: ${({theme:e})=>e.navBtnBgColorActive};
  }

  @media (max-width: 767px) and (min-width: 320px) {
    .datepicker-container {
      flex-direction: column;
      margin-bottom: 24px;
    }

    .navigation-btns button {
      width: 76px;
      font-size: 14px;
    }
  }
`,q=({onNavigate:e})=>{const t=S(),r=C(),a=new Date,i=a.getFullYear(),c=a.getMonth()+1,f=`${i}-${c.toString().padStart(2,"0")}`,s=()=>{r(`/calendar/month/${f}`)},l=()=>{r(`/calendar/day/${h(a,"yyyy-MM-dd")}`)};return o.jsxs("div",{className:"datepicker-container",children:[o.jsx(L,{onDateChange:e}),o.jsxs("div",{className:"navigation-btns",children:[o.jsx("button",{onClick:s,className:t.pathname.includes("/calendar/month/")?"active":"",children:"Month"}),o.jsx("button",{onClick:l,className:t.pathname.includes("/calendar/day/")?"active":"",children:"Day"})]}),o.jsx(R,{})]})},J=q;export{J as C,w as _,V as a,X as b};
