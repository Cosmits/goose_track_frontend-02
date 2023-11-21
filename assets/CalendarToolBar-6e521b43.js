import{a as D,d as C,y as $,t as B,p as u,s as A}from"./index-5cf185e6.js";import{t as N,a6 as z,a8 as d,w as T,s as b,K as M,a as v,k as j,j as n,F as h,a9 as S}from"./index-1e7f97df.js";import{F as _,f as F,a as E}from"./index-6d4ffb3c.js";/* empty css                         */function w(e,t){if(N(2,arguments),!t||z(t)!=="object")return new Date(NaN);var o=t.years?d(t.years):0,r=t.months?d(t.months):0,s=t.weeks?d(t.weeks):0,l=t.days?d(t.days):0,y=t.hours?d(t.hours):0,c=t.minutes?d(t.minutes):0,p=t.seconds?d(t.seconds):0,k=T(e),f=r||o?D(k,r+o*12):k,m=l||s?C(f,l+s*7):f,g=c+y*60,a=p+g*60,i=a*1e3,x=new Date(m.getTime()+i);return x}function K(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,$(e,t)}b.div`
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

  @media (max-width: 767px) {
    .date-picker-container {
      justify-content: space-between;
      margin-bottom: 18px;
    }
  }
`,I=b.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`,R=b.button`
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
  @media (max-width: 767px)  {
    width: 155px;
  }
`,L=({onDateChange:e})=>{const[t,o]=v.useState(Date.now()),r=j(),[s,l,y,c,p]=location.pathname.split("/"),k=v.forwardRef(({onClick:a},i)=>n.jsx(R,{onClick:a,ref:i,children:h(t,"MMMM yyyy")})),f=()=>{if(c==="month")o(a=>D(a,1)),e("NEXT");else{const a=u(p,"yyyy-MM-dd",new Date),i=w(a,{days:1}),x=h(i,"yyyy-MM-dd");r(`/calendar/day/${x}`)}},m=()=>{if(c==="month")o(a=>A(a,1)),e("PREV");else{const a=u(p,"yyyy-MM-dd",new Date),i=w(a,{days:-1}),x=h(i,"yyyy-MM-dd");r(`/calendar/day/${x}`)}},g=a=>{if(c==="month")o(a),e("DATE",a);else{const i=h(a,"yyyy-MM-dd");r(`/calendar/day/${i}`)}};return n.jsxs("div",{className:"date-picker-container",children:[n.jsx(B,{selected:t,onChange:g,customInput:n.jsx(k,{}),dateFormat:"dd MM yyyy",calendarStartDay:1,formatWeekDay:a=>a.substr(0,1)}),n.jsxs(I,{children:[n.jsx("button",{className:"date-picker-btn-prev",onClick:m,children:n.jsx(_,{icon:F})}),n.jsx("button",{className:"date-picker-btn-next",onClick:f,children:n.jsx(_,{icon:E})})]}),n.jsx(W,{})]})},O=M`
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

  @media (max-width: 767px) {
    .datepicker-container {
      flex-direction: column;
      margin-bottom: 24px;
    }

    .navigation-btns button {
      width: 76px;
      font-size: 14px;
    }
  }
`,P=({onNavigate:e})=>{const t=S(),o=j(),r=new Date,s=r.getFullYear(),l=r.getMonth()+1,y=`${s}-${l.toString().padStart(2,"0")}`,c=()=>{o(`/calendar/month/${y}`)},p=()=>{o(`/calendar/day/${h(r,"yyyy-MM-dd")}`)};return n.jsxs("div",{className:"datepicker-container",children:[n.jsx(L,{onDateChange:e}),n.jsxs("div",{className:"navigation-btns",children:[n.jsx("button",{onClick:c,className:t.pathname.includes("/calendar/month/")?"active":"",children:"Month"}),n.jsx("button",{onClick:p,className:t.pathname.includes("/calendar/day/")?"active":"",children:"Day"})]}),n.jsx(O,{})]})},V=P;export{V as C,K as _};
