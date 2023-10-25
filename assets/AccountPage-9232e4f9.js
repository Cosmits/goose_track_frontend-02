import{s as u,p as k,q,t as W,v as S,w as h,x as B,y as v,z as Y,A as Q,a as c,e as _,B as y,j as i,D as J}from"./index-69360921.js";import{c as K}from"./index.esm-dc7c35e5.js";import{U as Z,p as ee,t as te}from"./index-8034885d.js";/* empty css                         */const ie=u.div`
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
`,ae=u.div`
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
`,ne=u.h2`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,C=u.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,re=u.div`
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
`,oe=u(K)`
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
`,le=u.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1;

    grid-column-gap: 50px;
  }
`,se=u.p`
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,ue=u.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`,de=u.form`
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
`,ce=u.button`
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
`,pe=u.input`
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
`;function g(e,t){if(e.one!==void 0&&t===1)return e.one;var a=t%10,n=t%100;return a===1&&n!==11?e.singularNominative.replace("{{count}}",String(t)):a>=2&&a<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function l(e){return function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?e.future?g(e.future,t):"за "+g(e.regular,t):e.past?g(e.past,t):g(e.regular,t)+" тому":g(e.regular,t)}}var me=function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},he={lessThanXSeconds:l({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:l({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:me,lessThanXMinutes:l({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:l({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:l({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:l({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:l({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:l({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:l({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:l({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:l({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:l({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:l({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:l({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:l({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},ve=function(t,a,n){return n=n||{},he[t](a,n)};const ge=ve;var xe={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},fe={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},we={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},be={date:k({formats:xe,defaultWidth:"full"}),time:k({formats:fe,defaultWidth:"full"}),dateTime:k({formats:we,defaultWidth:"full"})};const ye=be;function z(e,t,a){q(2,arguments);var n=W(e,a),o=W(t,a);return n.getTime()===o.getTime()}var N=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function Ge(e){var t=N[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function D(e){var t=N[e];return"'у "+t+" о' p"}function ke(e){var t=N[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}var Ne=function(t,a,n){var o=S(t),r=o.getUTCDay();return z(o,a,n)?D(r):Ge(r)},Pe=function(t,a,n){var o=S(t),r=o.getUTCDay();return z(o,a,n)?D(r):ke(r)},je={lastWeek:Ne,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:Pe,other:"P"},Me=function(t,a,n,o){var r=je[t];return typeof r=="function"?r(a,n,o):r};const We=Me;var Ce={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},Se={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},ze={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},De={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},Ue={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},Fe={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Ee={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Le=function(t,a){var n=String(a==null?void 0:a.unit),o=Number(t),r;return n==="date"?o===3||o===23?r="-є":r="-е":n==="minute"||n==="second"||n==="hour"?r="-а":r="-й",o+r},Re={ordinalNumber:Le,era:h({values:Ce,defaultWidth:"wide"}),quarter:h({values:Se,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:h({values:ze,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"}),day:h({values:Ue,defaultWidth:"wide"}),dayPeriod:h({values:Fe,defaultWidth:"any",formattingValues:Ee,defaultFormattingWidth:"wide"})};const Te=Re;var Ae=/^(\d+)(-?(е|й|є|а|я))?/i,Ie=/\d+/i,Oe={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Ve={any:[/^д/i,/^н/i]},Xe={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},He={any:[/1/i,/2/i,/3/i,/4/i]},$e={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},qe={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Be={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Ye={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},Qe={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},_e={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Je={ordinalNumber:B({matchPattern:Ae,parsePattern:Ie,valueCallback:function(t){return parseInt(t,10)}}),era:v({matchPatterns:Oe,defaultMatchWidth:"wide",parsePatterns:Ve,defaultParseWidth:"any"}),quarter:v({matchPatterns:Xe,defaultMatchWidth:"wide",parsePatterns:He,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:v({matchPatterns:$e,defaultMatchWidth:"wide",parsePatterns:qe,defaultParseWidth:"any"}),day:v({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:Ye,defaultParseWidth:"any"}),dayPeriod:v({matchPatterns:Qe,defaultMatchWidth:"wide",parsePatterns:_e,defaultParseWidth:"any"})};const Ke=Je;var Ze={code:"uk",formatDistance:ge,formatLong:ye,formatRelative:We,localize:Te,match:Ke,options:{weekStartsOn:1,firstWeekContainsDate:1}};const et=Ze;Z("uk",et);const tt=()=>{var M;const{userName:e,email:t,phone:a,skype:n,birthday:o,avatarURL:r}=Y(Q),[m,U]=c.useState(o===""?new Date:ee(o,"dd/MM/yyyy",new Date)),[x,F]=c.useState(e??""),[f,E]=c.useState(t??""),[w,L]=c.useState(a??""),[b,R]=c.useState(n??""),[T,A]=c.useState(r??""),[p,P]=c.useState(""),I=_(),G=c.useRef(null);let j=e!==x||t!==f||a!==w||n!==b||o!==y(m,"dd/MM/yyyy")||p!=="";c.useEffect(()=>()=>{p&&URL.revokeObjectURL(p)},[p]);const O=(M=(e==null?void 0:e.split(" ")[0])[0])==null?void 0:M.toUpperCase(),V=()=>{G.current&&G.current.click()},X=s=>{const d=s.target.files[0];if(A(d),d){const $=URL.createObjectURL(d);P($)}else P(r)},H=async s=>{if(s.preventDefault(),!j)return;const d=new FormData;e!==x&&d.append("userName",x),t!==f&&d.append("email",f),a!==w&&d.append("phone",w),n!==b&&d.append("skype",b),o!==y(m,"dd/MM/yyyy")&&d.append("birthday",y(m,"dd/MM/yyyy")),p!==""&&d.append("avatarURL",T),I(J(d))};return i.jsx(ie,{children:i.jsx(ae,{children:i.jsxs(de,{onSubmit:H,children:[i.jsxs(re,{children:[p?i.jsx(C,{src:p,alt:e}):r?i.jsx(C,{src:r,alt:e}):i.jsx(ue,{children:O}),i.jsx(oe,{onClick:V}),i.jsx("input",{type:"file",accept:"image/*",ref:G,onChange:X,style:{display:"none"},name:"avatar"})]}),i.jsx(ne,{children:e}),i.jsx(se,{children:"User"}),i.jsxs(le,{children:[i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"User Name"}),i.jsx("input",{type:"text",name:"userName",placeholder:"Enter your name",value:x,onChange:s=>F(s.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Birthday"}),i.jsx(te,{dateFormat:"dd/MM/yyyy",calendarStartDay:1,selected:m,onChange:s=>U(s),customInput:i.jsx(pe,{type:"text",name:"birthday",placeholder:y(new Date,"dd/MM/yyyy"),value:m.toString()})})]}),i.jsx("div",{children:i.jsxs("label",{children:[i.jsx("p",{children:"Email"}),i.jsx("input",{type:"text",name:"email",placeholder:"Enter your email address",value:f,onChange:s=>E(s.target.value)})]})})]}),i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"Phone"}),i.jsx("input",{type:"text",name:"phone",placeholder:"Enter phone number",value:w,onChange:s=>L(s.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Skype"}),i.jsx("input",{type:"text",name:"skype",placeholder:"Enter skype",value:b,onChange:s=>R(s.target.value)})]})]}),i.jsx(ce,{type:"submit",disabled:!j,children:"Save"})]})]})})})},lt=()=>i.jsx(tt,{});export{lt as default};
