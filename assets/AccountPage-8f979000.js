import{s as d,p as P,q,t as S,v as D,w as h,x as B,y as v,z as Y,A as Q,a as c,e as _,B as y,j as i,D as J,E as K}from"./index-d05e6ed2.js";import{c as Z}from"./index.esm-e3d21f24.js";import{U as ee,p as te,t as ie}from"./index-7a5acfa8.js";/* empty css                         */const ae=d.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 20px 40px;

  @media screen and (min-width: 768px) {
    padding: 0 32px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 32px 32px;
  }
`,ne=d.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 60px 10px 40px;
  background-color: ${({theme:e})=>e.secondaryBgColor};

  border-radius: 16px;
  text-align: center;
  position: relative;

  @media screen and (min-width: 768px) {
    padding: 40px 0;
  }

  @media screen and (min-width: 1440px) {
    /* padding: 60px 0; */
    height: 100%;
  }
`,re=d.h2`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,z=d.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,oe=d.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  margin-bottom: 18px;

  background-color: var(--main-background-color);
  border-radius: 50%;
  border: 1px solid rgb(47, 103, 228);

  @media screen and (max-width: 767px) {
    position: absolute;
    top: -31px;
    left: 50%;
    transform: translateX(-50%);
  }

  @media screen and (min-width: 768px) {
    position: relative;
    width: 124px;
    height: 124px;
    margin-bottom: 20px;
  }
`,le=d(Z)`
  position: absolute;
  bottom: -3px;
  right: 12px;
  background-color: var(--white);
  border-radius: 100%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: rgb(47, 103, 228);
  border: none;
  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 18px;
    bottom: -4px;
  }
`,se=d.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1;

    grid-column-gap: 50px;
  }
`,ue=d.p`
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,de=d.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`,ce=d.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;

  & > div > div {
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 768px) {
      gap: 18px;
    }

    @media screen and (min-width: 768px) {
      gap: 24px;
    }
  }

  & > div > div:nth-of-type(1) {
    margin-bottom: 18px;

    @media screen and (min-width: 768px) {
      margin-bottom: 24px;
    }
  }

  & > div > div > label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  & > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: var(--calendar-date-color);
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 299px;
    }

    @media screen and (min-width: 768px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > label > p {
    color: var(--title-text-main-color);
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }

  & > div > div > div > label {
    display: flex;
    flex-direction: column;
    align-items: baseline;
  }

  & > div > div > div > label > input {
    width: 100%;
    height: 42px;
    border-radius: 8px;
    border: 1px solid #e0e0e0;
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: var(--calendar-date-color);
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    @media screen and (min-width: 375px) and (max-width: 767px) {
      width: 299px;
    }

    @media screen and (min-width: 768px) {
      width: 354px;
      height: 46px;
    }
  }

  & > div > div > div > label > p {
    color: var(--label-text-color);
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`,pe=d.button`
  max-width: 195px;
  height: 46px;
  border-radius: 16px;
  background-color: var(--main-blue, #3e85f3);
  border: none;
  padding: 14px 50px;
  color: var(--white);
  font-size: 14px;
  font-weight: 600;
  line-height: 17px;
  cursor: pointer;
  outline: none;
  margin-top: 40px;
  transition: all 250ms cubic-bezier(0.4, 0, 0.2, 1);

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
  &:disabled {
    background-color: #3E85F380;
    cursor: not-allowed;
  }

  @media screen and (min-width: 768px) {
    width: 262px;
    height: 48px;
    padding: 10px 20px;
  }

  @media screen and (min-width: 1440px) {
    margin-top: auto;
    grid-column: span 2;
  }
`,me=d.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  padding: 12px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--calendar-date-color);
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: var(--modal-input-lable-color);
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
`;function g(e,t){if(e.one!==void 0&&t===1)return e.one;var a=t%10,n=t%100;return a===1&&n!==11?e.singularNominative.replace("{{count}}",String(t)):a>=2&&a<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function s(e){return function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?e.future?g(e.future,t):"за "+g(e.regular,t):e.past?g(e.past,t):g(e.regular,t)+" тому":g(e.regular,t)}}var he=function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},ve={lessThanXSeconds:s({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:s({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:he,lessThanXMinutes:s({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:s({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:s({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:s({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:s({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:s({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:s({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:s({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:s({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:s({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:s({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:s({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:s({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},ge=function(t,a,n){return n=n||{},ve[t](a,n)};const xe=ge;var fe={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},we={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},be={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},ye={date:P({formats:fe,defaultWidth:"full"}),time:P({formats:we,defaultWidth:"full"}),dateTime:P({formats:be,defaultWidth:"full"})};const Ge=ye;function U(e,t,a){q(2,arguments);var n=S(e,a),o=S(t,a);return n.getTime()===o.getTime()}var j=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function ke(e){var t=j[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function F(e){var t=j[e];return"'у "+t+" о' p"}function Ne(e){var t=j[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}var Pe=function(t,a,n){var o=D(t),r=o.getUTCDay();return U(o,a,n)?F(r):ke(r)},je=function(t,a,n){var o=D(t),r=o.getUTCDay();return U(o,a,n)?F(r):Ne(r)},Me={lastWeek:Pe,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:je,other:"P"},We=function(t,a,n,o){var r=Me[t];return typeof r=="function"?r(a,n,o):r};const Ce=We;var Se={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},ze={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},De={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},Ue={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},Fe={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},Ee={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Le={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Re=function(t,a){var n=String(a==null?void 0:a.unit),o=Number(t),r;return n==="date"?o===3||o===23?r="-є":r="-е":n==="minute"||n==="second"||n==="hour"?r="-а":r="-й",o+r},Te={ordinalNumber:Re,era:h({values:Se,defaultWidth:"wide"}),quarter:h({values:ze,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:h({values:De,defaultWidth:"wide",formattingValues:Ue,defaultFormattingWidth:"wide"}),day:h({values:Fe,defaultWidth:"wide"}),dayPeriod:h({values:Ee,defaultWidth:"any",formattingValues:Le,defaultFormattingWidth:"wide"})};const Ie=Te;var Ae=/^(\d+)(-?(е|й|є|а|я))?/i,Oe=/\d+/i,Ve={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Xe={any:[/^д/i,/^н/i]},He={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},$e={any:[/1/i,/2/i,/3/i,/4/i]},qe={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},Be={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Ye={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Qe={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},_e={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Je={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Ke={ordinalNumber:B({matchPattern:Ae,parsePattern:Oe,valueCallback:function(t){return parseInt(t,10)}}),era:v({matchPatterns:Ve,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any"}),quarter:v({matchPatterns:He,defaultMatchWidth:"wide",parsePatterns:$e,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:v({matchPatterns:qe,defaultMatchWidth:"wide",parsePatterns:Be,defaultParseWidth:"any"}),day:v({matchPatterns:Ye,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:Je,defaultParseWidth:"any"})};const Ze=Ke;var et={code:"uk",formatDistance:xe,formatLong:Ge,formatRelative:Ce,localize:Ie,match:Ze,options:{weekStartsOn:1,firstWeekContainsDate:1}};const tt=et;ee("uk",tt);const it=()=>{var C;const{userName:e,email:t,phone:a,skype:n,birthday:o,avatarURL:r}=Y(Q),[m,E]=c.useState(o===""?new Date:te(o,"dd/MM/yyyy",new Date)),[x,L]=c.useState(e??""),[f,R]=c.useState(t??""),[w,T]=c.useState(a??""),[b,I]=c.useState(n??""),[G,k]=c.useState(r??""),[p,M]=c.useState(""),A=_(),N=c.useRef(null);let W=e!==x||t!==f||a!==w||n!==b||o!==y(m,"dd/MM/yyyy")||p!=="";c.useEffect(()=>()=>{p&&URL.revokeObjectURL(p)},[p]),c.useEffect(()=>{function l(){J(r).then(function(u){k(u?r:"")})}l()},[r]);const O=(C=(e==null?void 0:e.split(" ")[0])[0])==null?void 0:C.toUpperCase(),V=()=>{N.current&&N.current.click()},X=l=>{const u=l.target.files[0];if(k(u),u){const $=URL.createObjectURL(u);M($)}else M(r)},H=async l=>{if(l.preventDefault(),!W)return;const u=new FormData;e!==x&&u.append("userName",x),t!==f&&u.append("email",f),a!==w&&u.append("phone",w),n!==b&&u.append("skype",b),o!==y(m,"dd/MM/yyyy")&&u.append("birthday",y(m,"dd/MM/yyyy")),p!==""&&u.append("avatarURL",G),A(K(u))};return i.jsx(ae,{children:i.jsx(ne,{children:i.jsxs(ce,{onSubmit:H,children:[i.jsxs(oe,{children:[p?i.jsx(z,{src:p,alt:e}):G?i.jsx(z,{src:G,alt:e}):i.jsx(de,{children:O}),i.jsx(le,{onClick:V}),i.jsx("input",{type:"file",accept:"image/*",ref:N,onChange:X,style:{display:"none"},name:"avatar"})]}),i.jsx(re,{children:e}),i.jsx(ue,{children:"User"}),i.jsxs(se,{children:[i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"User Name"}),i.jsx("input",{type:"text",name:"userName",placeholder:"Enter your name",value:x,onChange:l=>L(l.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Birthday"}),i.jsx(ie,{dateFormat:"dd/MM/yyyy",calendarStartDay:1,selected:m,onChange:l=>E(l),customInput:i.jsx(me,{type:"text",name:"birthday",placeholder:y(new Date,"dd/MM/yyyy"),value:m.toString()})})]}),i.jsx("div",{children:i.jsxs("label",{children:[i.jsx("p",{children:"Email"}),i.jsx("input",{type:"text",name:"email",placeholder:"Enter your email address",value:f,onChange:l=>R(l.target.value)})]})})]}),i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"Phone"}),i.jsx("input",{type:"text",name:"phone",placeholder:"Enter phone number",value:w,onChange:l=>T(l.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Skype"}),i.jsx("input",{type:"text",name:"skype",placeholder:"Enter skype",value:b,onChange:l=>I(l.target.value)})]})]}),i.jsx(pe,{type:"submit",disabled:!W,children:"Save"})]})]})})})},st=()=>i.jsx(it,{});export{st as default};
