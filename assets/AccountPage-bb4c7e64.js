import{s as d,p as j,q as X,t as C,v as z,w as h,x as H,y as g,z as q,A as B,a as c,e as Y,B as y,j as i,D as _,E as Q}from"./index-22b48f57.js";import{c as J}from"./index.esm-893ee03f.js";import{U as K,p as Z,t as ee}from"./index-247c5981.js";/* empty css                         */const te="/goose_track_frontend-02/assets/user-fef7ac92.svg",ie=d.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  /* padding: 0 20px 40px; */

  /* @media screen and (min-width: 768px) {
    padding: 0 32px 40px;
  }

  @media screen and (min-width: 1440px) {
    padding: 0 32px 32px;
  } */
`,ae=d.div`
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
     padding: 60px 0; 
    height: 100%;
  }
`,ne=d.h2`
  color: var(--calendar-date-color);
  font-size: 14px;
  font-weight: 700;
  line-height: 18px;
  margin-bottom: 5px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
  }
`,S=d.img`
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);

  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`,re=d.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 72px;
  height: 72px;
  margin-bottom: 18px;

  background-color: var(--main-background-color);
  border-radius: 50%;

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
`,oe=d(J)`
  position: absolute;
  bottom: -3px;
  right: 12px;
  background-color: var(--white);
  border-radius: 50%;
  width: 14px;
  height: 14px;
  justify-content: center;
  align-items: center;
  display: flex;
  color: var(--main-blue);

  cursor: pointer;
  @media screen and (min-width: 375px) and (max-width: 767px) {
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
    right: 18px;
    bottom: -4px;
  }
`,le=d.div`
  @media screen and (min-width: 1440px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: start;
    justify-items: center;
    flex: 1;

    grid-column-gap: 50px;
    grid-row-gap: 64px;
  }
`,se=d.p`
  color: var(--calendar-date-color);
  font-size: 12px;
  font-weight: 600;
  line-height: 14px;
  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;d.p`
  color: var(--accent-color);
  font-weight: 700;
  font-size: 33px;
  line-height: 1.28;

  @media screen and (min-width: 768px) {
    font-size: 50px;
  }
`;const ue=d.form`
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
    border: 1px solid ${({theme:e})=>e.borderInputColor};
    padding: 12px 14px;
    font-size: 14px;
    line-height: 18px;
    font-weight: 600;
    color: var(--calendar-date-color);
    outline: none;
    background-color: inherit;

    &::placeholder {
      color: ${({theme:e})=>e.borderInputColor};
      font-weight: 600;
      font-size: 14px;
      line-height: 18px;
      font-weight: 400;
    }

    &:hover,
    &:focus {
      border-color: var(--black);
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
    color: ${({theme:e})=>e.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
    @media screen and (min-width: 768px) {
      font-size: 14px;
    }
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
    border: 1px solid ${({theme:e})=>e.borderInputColor};
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
    &:hover,
    &:focus {
      border-color: var(--black);
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
    color: ${({theme:e})=>e.labelTextColor};
    font-size: 12px;
    line-height: 14px;
    margin-bottom: 8px;
  }
`,de=d.button`
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
    background-color: #3e85f380;
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
`,ce=d.input`
  width: 100%;
  height: 42px;
  border-radius: 8px;
  border: 1px solid ${({theme:e})=>e.borderInputColor};
  padding: 12px 14px;
  font-size: 14px;
  line-height: 18px;
  font-weight: 600;
  color: var(--calendar-date-color);
  outline: none;
  background-color: inherit;

  &::placeholder {
    color: ${({theme:e})=>e.borderInputColor};
    font-size: 14px;
    line-height: 18px;
    font-weight: 400;
  }

  &:hover,
  &:focus {
    border-color: var(--black);
  }

  @media screen and (min-width: 375px) and (max-width: 767px) {
    width: 299px;
  }

  @media screen and (min-width: 768px) {
    width: 354px;
    height: 46px;
  }
`,pe=d.div`
  position: absolute;
  top: 6px;
  width: 72px;
  height: 72px;
  border-radius: 50%;
  object-fit: cover;
  border: 2px solid var(--main-blue);
  background-color: ${({theme:e})=>e.secondaryBgColor};
  background-image: url(${te});

  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  margin-bottom: 0;
  @media screen and (min-width: 768px) {
    width: 124px;
    height: 124px;
  }
`;function v(e,t){if(e.one!==void 0&&t===1)return e.one;var a=t%10,n=t%100;return a===1&&n!==11?e.singularNominative.replace("{{count}}",String(t)):a>=2&&a<=4&&(n<10||n>20)?e.singularGenitive.replace("{{count}}",String(t)):e.pluralGenitive.replace("{{count}}",String(t))}function s(e){return function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?e.future?v(e.future,t):"за "+v(e.regular,t):e.past?v(e.past,t):v(e.regular,t)+" тому":v(e.regular,t)}}var me=function(t,a){return a&&a.addSuffix?a.comparison&&a.comparison>0?"за півхвилини":"півхвилини тому":"півхвилини"},he={lessThanXSeconds:s({regular:{one:"менше секунди",singularNominative:"менше {{count}} секунди",singularGenitive:"менше {{count}} секунд",pluralGenitive:"менше {{count}} секунд"},future:{one:"менше, ніж за секунду",singularNominative:"менше, ніж за {{count}} секунду",singularGenitive:"менше, ніж за {{count}} секунди",pluralGenitive:"менше, ніж за {{count}} секунд"}}),xSeconds:s({regular:{singularNominative:"{{count}} секунда",singularGenitive:"{{count}} секунди",pluralGenitive:"{{count}} секунд"},past:{singularNominative:"{{count}} секунду тому",singularGenitive:"{{count}} секунди тому",pluralGenitive:"{{count}} секунд тому"},future:{singularNominative:"за {{count}} секунду",singularGenitive:"за {{count}} секунди",pluralGenitive:"за {{count}} секунд"}}),halfAMinute:me,lessThanXMinutes:s({regular:{one:"менше хвилини",singularNominative:"менше {{count}} хвилини",singularGenitive:"менше {{count}} хвилин",pluralGenitive:"менше {{count}} хвилин"},future:{one:"менше, ніж за хвилину",singularNominative:"менше, ніж за {{count}} хвилину",singularGenitive:"менше, ніж за {{count}} хвилини",pluralGenitive:"менше, ніж за {{count}} хвилин"}}),xMinutes:s({regular:{singularNominative:"{{count}} хвилина",singularGenitive:"{{count}} хвилини",pluralGenitive:"{{count}} хвилин"},past:{singularNominative:"{{count}} хвилину тому",singularGenitive:"{{count}} хвилини тому",pluralGenitive:"{{count}} хвилин тому"},future:{singularNominative:"за {{count}} хвилину",singularGenitive:"за {{count}} хвилини",pluralGenitive:"за {{count}} хвилин"}}),aboutXHours:s({regular:{singularNominative:"близько {{count}} години",singularGenitive:"близько {{count}} годин",pluralGenitive:"близько {{count}} годин"},future:{singularNominative:"приблизно за {{count}} годину",singularGenitive:"приблизно за {{count}} години",pluralGenitive:"приблизно за {{count}} годин"}}),xHours:s({regular:{singularNominative:"{{count}} годину",singularGenitive:"{{count}} години",pluralGenitive:"{{count}} годин"}}),xDays:s({regular:{singularNominative:"{{count}} день",singularGenitive:"{{count}} днi",pluralGenitive:"{{count}} днів"}}),aboutXWeeks:s({regular:{singularNominative:"близько {{count}} тижня",singularGenitive:"близько {{count}} тижнів",pluralGenitive:"близько {{count}} тижнів"},future:{singularNominative:"приблизно за {{count}} тиждень",singularGenitive:"приблизно за {{count}} тижні",pluralGenitive:"приблизно за {{count}} тижнів"}}),xWeeks:s({regular:{singularNominative:"{{count}} тиждень",singularGenitive:"{{count}} тижні",pluralGenitive:"{{count}} тижнів"}}),aboutXMonths:s({regular:{singularNominative:"близько {{count}} місяця",singularGenitive:"близько {{count}} місяців",pluralGenitive:"близько {{count}} місяців"},future:{singularNominative:"приблизно за {{count}} місяць",singularGenitive:"приблизно за {{count}} місяці",pluralGenitive:"приблизно за {{count}} місяців"}}),xMonths:s({regular:{singularNominative:"{{count}} місяць",singularGenitive:"{{count}} місяці",pluralGenitive:"{{count}} місяців"}}),aboutXYears:s({regular:{singularNominative:"близько {{count}} року",singularGenitive:"близько {{count}} років",pluralGenitive:"близько {{count}} років"},future:{singularNominative:"приблизно за {{count}} рік",singularGenitive:"приблизно за {{count}} роки",pluralGenitive:"приблизно за {{count}} років"}}),xYears:s({regular:{singularNominative:"{{count}} рік",singularGenitive:"{{count}} роки",pluralGenitive:"{{count}} років"}}),overXYears:s({regular:{singularNominative:"більше {{count}} року",singularGenitive:"більше {{count}} років",pluralGenitive:"більше {{count}} років"},future:{singularNominative:"більше, ніж за {{count}} рік",singularGenitive:"більше, ніж за {{count}} роки",pluralGenitive:"більше, ніж за {{count}} років"}}),almostXYears:s({regular:{singularNominative:"майже {{count}} рік",singularGenitive:"майже {{count}} роки",pluralGenitive:"майже {{count}} років"},future:{singularNominative:"майже за {{count}} рік",singularGenitive:"майже за {{count}} роки",pluralGenitive:"майже за {{count}} років"}})},ge=function(t,a,n){return n=n||{},he[t](a,n)};const ve=ge;var xe={full:"EEEE, do MMMM y 'р.'",long:"do MMMM y 'р.'",medium:"d MMM y 'р.'",short:"dd.MM.y"},fe={full:"H:mm:ss zzzz",long:"H:mm:ss z",medium:"H:mm:ss",short:"H:mm"},be={full:"{{date}} 'о' {{time}}",long:"{{date}} 'о' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},we={date:j({formats:xe,defaultWidth:"full"}),time:j({formats:fe,defaultWidth:"full"}),dateTime:j({formats:be,defaultWidth:"full"})};const ye=we;function D(e,t,a){X(2,arguments);var n=C(e,a),o=C(t,a);return n.getTime()===o.getTime()}var P=["неділю","понеділок","вівторок","середу","четвер","п’ятницю","суботу"];function ke(e){var t=P[e];switch(e){case 0:case 3:case 5:case 6:return"'у минулу "+t+" о' p";case 1:case 2:case 4:return"'у минулий "+t+" о' p"}}function U(e){var t=P[e];return"'у "+t+" о' p"}function Ge(e){var t=P[e];switch(e){case 0:case 3:case 5:case 6:return"'у наступну "+t+" о' p";case 1:case 2:case 4:return"'у наступний "+t+" о' p"}}var Ne=function(t,a,n){var o=z(t),r=o.getUTCDay();return D(o,a,n)?U(r):ke(r)},je=function(t,a,n){var o=z(t),r=o.getUTCDay();return D(o,a,n)?U(r):Ge(r)},Pe={lastWeek:Ne,yesterday:"'вчора о' p",today:"'сьогодні о' p",tomorrow:"'завтра о' p",nextWeek:je,other:"P"},Me=function(t,a,n,o){var r=Pe[t];return typeof r=="function"?r(a,n,o):r};const We=Me;var Ce={narrow:["до н.е.","н.е."],abbreviated:["до н. е.","н. е."],wide:["до нашої ери","нашої ери"]},Se={narrow:["1","2","3","4"],abbreviated:["1-й кв.","2-й кв.","3-й кв.","4-й кв."],wide:["1-й квартал","2-й квартал","3-й квартал","4-й квартал"]},ze={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січень","лютий","березень","квітень","травень","червень","липень","серпень","вересень","жовтень","листопад","грудень"]},De={narrow:["С","Л","Б","К","Т","Ч","Л","С","В","Ж","Л","Г"],abbreviated:["січ.","лют.","берез.","квіт.","трав.","черв.","лип.","серп.","верес.","жовт.","листоп.","груд."],wide:["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"]},Ue={narrow:["Н","П","В","С","Ч","П","С"],short:["нд","пн","вт","ср","чт","пт","сб"],abbreviated:["нед","пон","вів","сер","чтв","птн","суб"],wide:["неділя","понеділок","вівторок","середа","четвер","п’ятниця","субота"]},Fe={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранок",afternoon:"день",evening:"веч.",night:"ніч"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранок",afternoon:"день",evening:"вечір",night:"ніч"}},Ee={narrow:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},abbreviated:{am:"ДП",pm:"ПП",midnight:"півн.",noon:"пол.",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"},wide:{am:"ДП",pm:"ПП",midnight:"північ",noon:"полудень",morning:"ранку",afternoon:"дня",evening:"веч.",night:"ночі"}},Ie=function(t,a){var n=String(a==null?void 0:a.unit),o=Number(t),r;return n==="date"?o===3||o===23?r="-є":r="-е":n==="minute"||n==="second"||n==="hour"?r="-а":r="-й",o+r},Le={ordinalNumber:Ie,era:h({values:Ce,defaultWidth:"wide"}),quarter:h({values:Se,defaultWidth:"wide",argumentCallback:function(t){return t-1}}),month:h({values:ze,defaultWidth:"wide",formattingValues:De,defaultFormattingWidth:"wide"}),day:h({values:Ue,defaultWidth:"wide"}),dayPeriod:h({values:Fe,defaultWidth:"any",formattingValues:Ee,defaultFormattingWidth:"wide"})};const Re=Le;var $e=/^(\d+)(-?(е|й|є|а|я))?/i,Te=/\d+/i,Ae={narrow:/^((до )?н\.?\s?е\.?)/i,abbreviated:/^((до )?н\.?\s?е\.?)/i,wide:/^(до нашої ери|нашої ери|наша ера)/i},Oe={any:[/^д/i,/^н/i]},Ve={narrow:/^[1234]/i,abbreviated:/^[1234](-?[иі]?й?)? кв.?/i,wide:/^[1234](-?[иі]?й?)? квартал/i},Xe={any:[/1/i,/2/i,/3/i,/4/i]},He={narrow:/^[слбктчвжг]/i,abbreviated:/^(січ|лют|бер(ез)?|квіт|трав|черв|лип|серп|вер(ес)?|жовт|лис(топ)?|груд)\.?/i,wide:/^(січень|січня|лютий|лютого|березень|березня|квітень|квітня|травень|травня|червня|червень|липень|липня|серпень|серпня|вересень|вересня|жовтень|жовтня|листопад[а]?|грудень|грудня)/i},qe={narrow:[/^с/i,/^л/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^л/i,/^с/i,/^в/i,/^ж/i,/^л/i,/^г/i],any:[/^сі/i,/^лю/i,/^б/i,/^к/i,/^т/i,/^ч/i,/^лип/i,/^се/i,/^в/i,/^ж/i,/^лис/i,/^г/i]},Be={narrow:/^[нпвсч]/i,short:/^(нд|пн|вт|ср|чт|пт|сб)\.?/i,abbreviated:/^(нед|пон|вів|сер|че?тв|птн?|суб)\.?/i,wide:/^(неділ[яі]|понеділ[ок][ка]|вівтор[ок][ка]|серед[аи]|четвер(га)?|п\W*?ятниц[яі]|субот[аи])/i},Ye={narrow:[/^н/i,/^п/i,/^в/i,/^с/i,/^ч/i,/^п/i,/^с/i],any:[/^н/i,/^п[он]/i,/^в/i,/^с[ер]/i,/^ч/i,/^п\W*?[ят]/i,/^с[уб]/i]},_e={narrow:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,abbreviated:/^([дп]п|півн\.?|пол\.?|ранок|ранку|день|дня|веч\.?|ніч|ночі)/i,wide:/^([дп]п|північ|полудень|ранок|ранку|день|дня|вечір|вечора|ніч|ночі)/i},Qe={any:{am:/^дп/i,pm:/^пп/i,midnight:/^півн/i,noon:/^пол/i,morning:/^р/i,afternoon:/^д[ен]/i,evening:/^в/i,night:/^н/i}},Je={ordinalNumber:H({matchPattern:$e,parsePattern:Te,valueCallback:function(t){return parseInt(t,10)}}),era:g({matchPatterns:Ae,defaultMatchWidth:"wide",parsePatterns:Oe,defaultParseWidth:"any"}),quarter:g({matchPatterns:Ve,defaultMatchWidth:"wide",parsePatterns:Xe,defaultParseWidth:"any",valueCallback:function(t){return t+1}}),month:g({matchPatterns:He,defaultMatchWidth:"wide",parsePatterns:qe,defaultParseWidth:"any"}),day:g({matchPatterns:Be,defaultMatchWidth:"wide",parsePatterns:Ye,defaultParseWidth:"any"}),dayPeriod:g({matchPatterns:_e,defaultMatchWidth:"wide",parsePatterns:Qe,defaultParseWidth:"any"})};const Ke=Je;var Ze={code:"uk",formatDistance:ve,formatLong:ye,formatRelative:We,localize:Re,match:Ke,options:{weekStartsOn:1,firstWeekContainsDate:1}};const et=Ze;K("uk",et);const tt=()=>{const{userName:e,email:t,phone:a,skype:n,birthday:o,avatarURL:r}=q(B),[m,F]=c.useState(o===""?new Date:Z(o,"dd/MM/yyyy",new Date)),[x,E]=c.useState(e??""),[f,I]=c.useState(t??""),[b,L]=c.useState(a??""),[w,R]=c.useState(n??""),[k,G]=c.useState(r??""),[p,M]=c.useState(""),$=Y(),N=c.useRef(null);let W=e!==x||t!==f||a!==b||n!==w||o!==y(m,"dd/MM/yyyy")||p!=="";c.useEffect(()=>()=>{p&&URL.revokeObjectURL(p)},[p]),c.useEffect(()=>{function l(){_(r).then(function(u){G(u?r:"")})}l()},[r]);const T=()=>{N.current&&N.current.click()},A=l=>{const u=l.target.files[0];if(G(u),u){const V=URL.createObjectURL(u);M(V)}else M(r)},O=async l=>{if(l.preventDefault(),!W)return;const u=new FormData;e!==x&&u.append("userName",x),t!==f&&u.append("email",f),a!==b&&u.append("phone",b),n!==w&&u.append("skype",w),o!==y(m,"dd/MM/yyyy")&&u.append("birthday",y(m,"dd/MM/yyyy")),p!==""&&u.append("avatarURL",k),$(Q(u))};return i.jsx(ie,{children:i.jsx(ae,{children:i.jsxs(ue,{onSubmit:O,children:[i.jsxs(re,{children:[p?i.jsx(S,{src:p,alt:e}):k?i.jsx(S,{src:k,alt:e}):i.jsx(pe,{}),i.jsx(oe,{onClick:T}),i.jsx("input",{type:"file",accept:"image/*",ref:N,onChange:A,style:{display:"none"},name:"avatar"})]}),i.jsx(ne,{children:e}),i.jsx(se,{children:"User"}),i.jsxs(le,{children:[i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"User Name"}),i.jsx("input",{type:"text",name:"userName",placeholder:"Enter your name",value:x,onChange:l=>E(l.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Birthday"}),i.jsx(ee,{dateFormat:"dd/MM/yyyy",calendarStartDay:1,selected:m,onChange:l=>F(l),customInput:i.jsx(ce,{type:"text",name:"birthday",placeholder:y(new Date,"dd/MM/yyyy"),value:m.toString()})})]}),i.jsx("div",{children:i.jsxs("label",{children:[i.jsx("p",{children:"Email"}),i.jsx("input",{type:"text",name:"email",placeholder:"Enter your email address",value:f,onChange:l=>I(l.target.value)})]})})]}),i.jsxs("div",{children:[i.jsxs("label",{children:[i.jsx("p",{children:"Phone"}),i.jsx("input",{type:"text",name:"phone",placeholder:"Enter phone number",value:b,onChange:l=>L(l.target.value)})]}),i.jsxs("label",{children:[i.jsx("p",{children:"Skype"}),i.jsx("input",{type:"text",name:"skype",placeholder:"Enter skype",value:w,onChange:l=>R(l.target.value)})]})]}),i.jsx(de,{type:"submit",disabled:!W,children:"Save"})]})]})})})},ot=()=>i.jsx(tt,{});export{ot as default};
