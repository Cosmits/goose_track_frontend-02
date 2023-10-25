import{P as w,R as tr}from"./index-7d95435e.js";//! moment.js
//! version : 2.29.4
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
var nr;function m(){return nr.apply(null,arguments)}function Si(e){nr=e}function ne(e){return e instanceof Array||Object.prototype.toString.call(e)==="[object Array]"}function Fe(e){return e!=null&&Object.prototype.toString.call(e)==="[object Object]"}function S(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function $n(e){if(Object.getOwnPropertyNames)return Object.getOwnPropertyNames(e).length===0;var t;for(t in e)if(S(e,t))return!1;return!0}function V(e){return e===void 0}function ve(e){return typeof e=="number"||Object.prototype.toString.call(e)==="[object Number]"}function yt(e){return e instanceof Date||Object.prototype.toString.call(e)==="[object Date]"}function ar(e,t){var n=[],a,r=e.length;for(a=0;a<r;++a)n.push(t(e[a],a));return n}function Se(e,t){for(var n in t)S(t,n)&&(e[n]=t[n]);return S(t,"toString")&&(e.toString=t.toString),S(t,"valueOf")&&(e.valueOf=t.valueOf),e}function le(e,t,n,a){return Dr(e,t,n,a,!0).utc()}function Oi(){return{empty:!1,unusedTokens:[],unusedInput:[],overflow:-2,charsLeftOver:0,nullInput:!1,invalidEra:null,invalidMonth:null,invalidFormat:!1,userInvalidated:!1,iso:!1,parsedDateParts:[],era:null,meridiem:null,rfc2822:!1,weekdayMismatch:!1}}function b(e){return e._pf==null&&(e._pf=Oi()),e._pf}var xn;Array.prototype.some?xn=Array.prototype.some:xn=function(e){var t=Object(this),n=t.length>>>0,a;for(a=0;a<n;a++)if(a in t&&e.call(this,t[a],a,t))return!0;return!1};function Gn(e){if(e._isValid==null){var t=b(e),n=xn.call(t.parsedDateParts,function(r){return r!=null}),a=!isNaN(e._d.getTime())&&t.overflow<0&&!t.empty&&!t.invalidEra&&!t.invalidMonth&&!t.invalidWeekday&&!t.weekdayMismatch&&!t.nullInput&&!t.invalidFormat&&!t.userInvalidated&&(!t.meridiem||t.meridiem&&n);if(e._strict&&(a=a&&t.charsLeftOver===0&&t.unusedTokens.length===0&&t.bigHour===void 0),Object.isFrozen==null||!Object.isFrozen(e))e._isValid=a;else return a}return e._isValid}function Xt(e){var t=le(NaN);return e!=null?Se(b(t),e):b(t).userInvalidated=!0,t}var xa=m.momentProperties=[],hn=!1;function Vn(e,t){var n,a,r,i=xa.length;if(V(t._isAMomentObject)||(e._isAMomentObject=t._isAMomentObject),V(t._i)||(e._i=t._i),V(t._f)||(e._f=t._f),V(t._l)||(e._l=t._l),V(t._strict)||(e._strict=t._strict),V(t._tzm)||(e._tzm=t._tzm),V(t._isUTC)||(e._isUTC=t._isUTC),V(t._offset)||(e._offset=t._offset),V(t._pf)||(e._pf=b(t)),V(t._locale)||(e._locale=t._locale),i>0)for(n=0;n<i;n++)a=xa[n],r=t[a],V(r)||(e[a]=r);return e}function gt(e){Vn(this,e),this._d=new Date(e._d!=null?e._d.getTime():NaN),this.isValid()||(this._d=new Date(NaN)),hn===!1&&(hn=!0,m.updateOffset(this),hn=!1)}function ae(e){return e instanceof gt||e!=null&&e._isAMomentObject!=null}function rr(e){m.suppressDeprecationWarnings===!1&&typeof console<"u"&&console.warn&&console.warn("Deprecation warning: "+e)}function K(e,t){var n=!0;return Se(function(){if(m.deprecationHandler!=null&&m.deprecationHandler(null,e),n){var a=[],r,i,s,o=arguments.length;for(i=0;i<o;i++){if(r="",typeof arguments[i]=="object"){r+=`
[`+i+"] ";for(s in arguments[0])S(arguments[0],s)&&(r+=s+": "+arguments[0][s]+", ");r=r.slice(0,-2)}else r=arguments[i];a.push(r)}rr(e+`
Arguments: `+Array.prototype.slice.call(a).join("")+`
`+new Error().stack),n=!1}return t.apply(this,arguments)},t)}var Sa={};function ir(e,t){m.deprecationHandler!=null&&m.deprecationHandler(e,t),Sa[e]||(rr(t),Sa[e]=!0)}m.suppressDeprecationWarnings=!1;m.deprecationHandler=null;function fe(e){return typeof Function<"u"&&e instanceof Function||Object.prototype.toString.call(e)==="[object Function]"}function Mi(e){var t,n;for(n in e)S(e,n)&&(t=e[n],fe(t)?this[n]=t:this["_"+n]=t);this._config=e,this._dayOfMonthOrdinalParseLenient=new RegExp((this._dayOfMonthOrdinalParse.source||this._ordinalParse.source)+"|"+/\d{1,2}/.source)}function Sn(e,t){var n=Se({},e),a;for(a in t)S(t,a)&&(Fe(e[a])&&Fe(t[a])?(n[a]={},Se(n[a],e[a]),Se(n[a],t[a])):t[a]!=null?n[a]=t[a]:delete n[a]);for(a in e)S(e,a)&&!S(t,a)&&Fe(e[a])&&(n[a]=Se({},n[a]));return n}function Zn(e){e!=null&&this.set(e)}var On;Object.keys?On=Object.keys:On=function(e){var t,n=[];for(t in e)S(e,t)&&n.push(t);return n};var Di={sameDay:"[Today at] LT",nextDay:"[Tomorrow at] LT",nextWeek:"dddd [at] LT",lastDay:"[Yesterday at] LT",lastWeek:"[Last] dddd [at] LT",sameElse:"L"};function Yi(e,t,n){var a=this._calendar[e]||this._calendar.sameElse;return fe(a)?a.call(t,n):a}function oe(e,t,n){var a=""+Math.abs(e),r=t-a.length,i=e>=0;return(i?n?"+":"":"-")+Math.pow(10,Math.max(0,r)).toString().substr(1)+a}var Bn=/(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|N{1,5}|YYYYYY|YYYYY|YYYY|YY|y{2,4}|yo?|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,xt=/(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,vn={},Ze={};function g(e,t,n,a){var r=a;typeof a=="string"&&(r=function(){return this[a]()}),e&&(Ze[e]=r),t&&(Ze[t[0]]=function(){return oe(r.apply(this,arguments),t[1],t[2])}),n&&(Ze[n]=function(){return this.localeData().ordinal(r.apply(this,arguments),e)})}function Ti(e){return e.match(/\[[\s\S]/)?e.replace(/^\[|\]$/g,""):e.replace(/\\/g,"")}function Pi(e){var t=e.match(Bn),n,a;for(n=0,a=t.length;n<a;n++)Ze[t[n]]?t[n]=Ze[t[n]]:t[n]=Ti(t[n]);return function(r){var i="",s;for(s=0;s<a;s++)i+=fe(t[s])?t[s].call(r,e):t[s];return i}}function Ct(e,t){return e.isValid()?(t=sr(t,e.localeData()),vn[t]=vn[t]||Pi(t),vn[t](e)):e.localeData().invalidDate()}function sr(e,t){var n=5;function a(r){return t.longDateFormat(r)||r}for(xt.lastIndex=0;n>=0&&xt.test(e);)e=e.replace(xt,a),xt.lastIndex=0,n-=1;return e}var Ai={LTS:"h:mm:ss A",LT:"h:mm A",L:"MM/DD/YYYY",LL:"MMMM D, YYYY",LLL:"MMMM D, YYYY h:mm A",LLLL:"dddd, MMMM D, YYYY h:mm A"};function Ni(e){var t=this._longDateFormat[e],n=this._longDateFormat[e.toUpperCase()];return t||!n?t:(this._longDateFormat[e]=n.match(Bn).map(function(a){return a==="MMMM"||a==="MM"||a==="DD"||a==="dddd"?a.slice(1):a}).join(""),this._longDateFormat[e])}var Ii="Invalid date";function Ci(){return this._invalidDate}var Ei="%d",Ri=/\d{1,2}/;function Fi(e){return this._ordinal.replace("%d",e)}var Li={future:"in %s",past:"%s ago",s:"a few seconds",ss:"%d seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",w:"a week",ww:"%d weeks",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function Wi(e,t,n,a){var r=this._relativeTime[n];return fe(r)?r(e,t,n,a):r.replace(/%d/i,e)}function Ui(e,t){var n=this._relativeTime[e>0?"future":"past"];return fe(n)?n(t):n.replace(/%s/i,t)}var rt={};function H(e,t){var n=e.toLowerCase();rt[n]=rt[n+"s"]=rt[t]=e}function Q(e){return typeof e=="string"?rt[e]||rt[e.toLowerCase()]:void 0}function Xn(e){var t={},n,a;for(a in e)S(e,a)&&(n=Q(a),n&&(t[n]=e[a]));return t}var or={};function $(e,t){or[e]=t}function ji(e){var t=[],n;for(n in e)S(e,n)&&t.push({unit:n,priority:or[n]});return t.sort(function(a,r){return a.priority-r.priority}),t}function qt(e){return e%4===0&&e%100!==0||e%400===0}function J(e){return e<0?Math.ceil(e)||0:Math.floor(e)}function _(e){var t=+e,n=0;return t!==0&&isFinite(t)&&(n=J(t)),n}function Ke(e,t){return function(n){return n!=null?(lr(this,e,n),m.updateOffset(this,t),this):Wt(this,e)}}function Wt(e,t){return e.isValid()?e._d["get"+(e._isUTC?"UTC":"")+t]():NaN}function lr(e,t,n){e.isValid()&&!isNaN(n)&&(t==="FullYear"&&qt(e.year())&&e.month()===1&&e.date()===29?(n=_(n),e._d["set"+(e._isUTC?"UTC":"")+t](n,e.month(),nn(n,e.month()))):e._d["set"+(e._isUTC?"UTC":"")+t](n))}function zi(e){return e=Q(e),fe(this[e])?this[e]():this}function Hi(e,t){if(typeof e=="object"){e=Xn(e);var n=ji(e),a,r=n.length;for(a=0;a<r;a++)this[n[a].unit](e[n[a].unit])}else if(e=Q(e),fe(this[e]))return this[e](t);return this}var fr=/\d/,X=/\d\d/,ur=/\d{3}/,qn=/\d{4}/,Jt=/[+-]?\d{6}/,P=/\d\d?/,cr=/\d\d\d\d?/,dr=/\d\d\d\d\d\d?/,Kt=/\d{1,3}/,Jn=/\d{1,4}/,Qt=/[+-]?\d{1,6}/,Qe=/\d+/,en=/[+-]?\d+/,$i=/Z|[+-]\d\d:?\d\d/gi,tn=/Z|[+-]\d\d(?::?\d\d)?/gi,Gi=/[+-]?\d+(\.\d{1,3})?/,pt=/[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,Ut;Ut={};function v(e,t,n){Ut[e]=fe(t)?t:function(a,r){return a&&n?n:t}}function Vi(e,t){return S(Ut,e)?Ut[e](t._strict,t._locale):new RegExp(Zi(e))}function Zi(e){return B(e.replace("\\","").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g,function(t,n,a,r,i){return n||a||r||i}))}function B(e){return e.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&")}var Mn={};function M(e,t){var n,a=t,r;for(typeof e=="string"&&(e=[e]),ve(t)&&(a=function(i,s){s[t]=_(i)}),r=e.length,n=0;n<r;n++)Mn[e[n]]=a}function bt(e,t){M(e,function(n,a,r,i){r._w=r._w||{},t(n,r._w,r,i)})}function Bi(e,t,n){t!=null&&S(Mn,e)&&Mn[e](t,n._a,n,e)}var z=0,de=1,ie=2,L=3,ee=4,me=5,Ce=6,Xi=7,qi=8;function Ji(e,t){return(e%t+t)%t}var E;Array.prototype.indexOf?E=Array.prototype.indexOf:E=function(e){var t;for(t=0;t<this.length;++t)if(this[t]===e)return t;return-1};function nn(e,t){if(isNaN(e)||isNaN(t))return NaN;var n=Ji(t,12);return e+=(t-n)/12,n===1?qt(e)?29:28:31-n%7%2}g("M",["MM",2],"Mo",function(){return this.month()+1});g("MMM",0,0,function(e){return this.localeData().monthsShort(this,e)});g("MMMM",0,0,function(e){return this.localeData().months(this,e)});H("month","M");$("month",8);v("M",P);v("MM",P,X);v("MMM",function(e,t){return t.monthsShortRegex(e)});v("MMMM",function(e,t){return t.monthsRegex(e)});M(["M","MM"],function(e,t){t[de]=_(e)-1});M(["MMM","MMMM"],function(e,t,n,a){var r=n._locale.monthsParse(e,a,n._strict);r!=null?t[de]=r:b(n).invalidMonth=e});var Ki="January_February_March_April_May_June_July_August_September_October_November_December".split("_"),mr="Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),hr=/D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,Qi=pt,es=pt;function ts(e,t){return e?ne(this._months)?this._months[e.month()]:this._months[(this._months.isFormat||hr).test(t)?"format":"standalone"][e.month()]:ne(this._months)?this._months:this._months.standalone}function ns(e,t){return e?ne(this._monthsShort)?this._monthsShort[e.month()]:this._monthsShort[hr.test(t)?"format":"standalone"][e.month()]:ne(this._monthsShort)?this._monthsShort:this._monthsShort.standalone}function as(e,t,n){var a,r,i,s=e.toLocaleLowerCase();if(!this._monthsParse)for(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[],a=0;a<12;++a)i=le([2e3,a]),this._shortMonthsParse[a]=this.monthsShort(i,"").toLocaleLowerCase(),this._longMonthsParse[a]=this.months(i,"").toLocaleLowerCase();return n?t==="MMM"?(r=E.call(this._shortMonthsParse,s),r!==-1?r:null):(r=E.call(this._longMonthsParse,s),r!==-1?r:null):t==="MMM"?(r=E.call(this._shortMonthsParse,s),r!==-1?r:(r=E.call(this._longMonthsParse,s),r!==-1?r:null)):(r=E.call(this._longMonthsParse,s),r!==-1?r:(r=E.call(this._shortMonthsParse,s),r!==-1?r:null))}function rs(e,t,n){var a,r,i;if(this._monthsParseExact)return as.call(this,e,t,n);for(this._monthsParse||(this._monthsParse=[],this._longMonthsParse=[],this._shortMonthsParse=[]),a=0;a<12;a++){if(r=le([2e3,a]),n&&!this._longMonthsParse[a]&&(this._longMonthsParse[a]=new RegExp("^"+this.months(r,"").replace(".","")+"$","i"),this._shortMonthsParse[a]=new RegExp("^"+this.monthsShort(r,"").replace(".","")+"$","i")),!n&&!this._monthsParse[a]&&(i="^"+this.months(r,"")+"|^"+this.monthsShort(r,""),this._monthsParse[a]=new RegExp(i.replace(".",""),"i")),n&&t==="MMMM"&&this._longMonthsParse[a].test(e))return a;if(n&&t==="MMM"&&this._shortMonthsParse[a].test(e))return a;if(!n&&this._monthsParse[a].test(e))return a}}function vr(e,t){var n;if(!e.isValid())return e;if(typeof t=="string"){if(/^\d+$/.test(t))t=_(t);else if(t=e.localeData().monthsParse(t),!ve(t))return e}return n=Math.min(e.date(),nn(e.year(),t)),e._d["set"+(e._isUTC?"UTC":"")+"Month"](t,n),e}function yr(e){return e!=null?(vr(this,e),m.updateOffset(this,!0),this):Wt(this,"Month")}function is(){return nn(this.year(),this.month())}function ss(e){return this._monthsParseExact?(S(this,"_monthsRegex")||gr.call(this),e?this._monthsShortStrictRegex:this._monthsShortRegex):(S(this,"_monthsShortRegex")||(this._monthsShortRegex=Qi),this._monthsShortStrictRegex&&e?this._monthsShortStrictRegex:this._monthsShortRegex)}function os(e){return this._monthsParseExact?(S(this,"_monthsRegex")||gr.call(this),e?this._monthsStrictRegex:this._monthsRegex):(S(this,"_monthsRegex")||(this._monthsRegex=es),this._monthsStrictRegex&&e?this._monthsStrictRegex:this._monthsRegex)}function gr(){function e(s,o){return o.length-s.length}var t=[],n=[],a=[],r,i;for(r=0;r<12;r++)i=le([2e3,r]),t.push(this.monthsShort(i,"")),n.push(this.months(i,"")),a.push(this.months(i,"")),a.push(this.monthsShort(i,""));for(t.sort(e),n.sort(e),a.sort(e),r=0;r<12;r++)t[r]=B(t[r]),n[r]=B(n[r]);for(r=0;r<24;r++)a[r]=B(a[r]);this._monthsRegex=new RegExp("^("+a.join("|")+")","i"),this._monthsShortRegex=this._monthsRegex,this._monthsStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._monthsShortStrictRegex=new RegExp("^("+t.join("|")+")","i")}g("Y",0,0,function(){var e=this.year();return e<=9999?oe(e,4):"+"+e});g(0,["YY",2],0,function(){return this.year()%100});g(0,["YYYY",4],0,"year");g(0,["YYYYY",5],0,"year");g(0,["YYYYYY",6,!0],0,"year");H("year","y");$("year",1);v("Y",en);v("YY",P,X);v("YYYY",Jn,qn);v("YYYYY",Qt,Jt);v("YYYYYY",Qt,Jt);M(["YYYYY","YYYYYY"],z);M("YYYY",function(e,t){t[z]=e.length===2?m.parseTwoDigitYear(e):_(e)});M("YY",function(e,t){t[z]=m.parseTwoDigitYear(e)});M("Y",function(e,t){t[z]=parseInt(e,10)});function it(e){return qt(e)?366:365}m.parseTwoDigitYear=function(e){return _(e)+(_(e)>68?1900:2e3)};var pr=Ke("FullYear",!0);function ls(){return qt(this.year())}function fs(e,t,n,a,r,i,s){var o;return e<100&&e>=0?(o=new Date(e+400,t,n,a,r,i,s),isFinite(o.getFullYear())&&o.setFullYear(e)):o=new Date(e,t,n,a,r,i,s),o}function lt(e){var t,n;return e<100&&e>=0?(n=Array.prototype.slice.call(arguments),n[0]=e+400,t=new Date(Date.UTC.apply(null,n)),isFinite(t.getUTCFullYear())&&t.setUTCFullYear(e)):t=new Date(Date.UTC.apply(null,arguments)),t}function jt(e,t,n){var a=7+t-n,r=(7+lt(e,0,a).getUTCDay()-t)%7;return-r+a-1}function br(e,t,n,a,r){var i=(7+n-a)%7,s=jt(e,a,r),o=1+7*(t-1)+i+s,l,f;return o<=0?(l=e-1,f=it(l)+o):o>it(e)?(l=e+1,f=o-it(e)):(l=e,f=o),{year:l,dayOfYear:f}}function ft(e,t,n){var a=jt(e.year(),t,n),r=Math.floor((e.dayOfYear()-a-1)/7)+1,i,s;return r<1?(s=e.year()-1,i=r+he(s,t,n)):r>he(e.year(),t,n)?(i=r-he(e.year(),t,n),s=e.year()+1):(s=e.year(),i=r),{week:i,year:s}}function he(e,t,n){var a=jt(e,t,n),r=jt(e+1,t,n);return(it(e)-a+r)/7}g("w",["ww",2],"wo","week");g("W",["WW",2],"Wo","isoWeek");H("week","w");H("isoWeek","W");$("week",5);$("isoWeek",5);v("w",P);v("ww",P,X);v("W",P);v("WW",P,X);bt(["w","ww","W","WW"],function(e,t,n,a){t[a.substr(0,1)]=_(e)});function us(e){return ft(e,this._week.dow,this._week.doy).week}var cs={dow:0,doy:6};function ds(){return this._week.dow}function ms(){return this._week.doy}function hs(e){var t=this.localeData().week(this);return e==null?t:this.add((e-t)*7,"d")}function vs(e){var t=ft(this,1,4).week;return e==null?t:this.add((e-t)*7,"d")}g("d",0,"do","day");g("dd",0,0,function(e){return this.localeData().weekdaysMin(this,e)});g("ddd",0,0,function(e){return this.localeData().weekdaysShort(this,e)});g("dddd",0,0,function(e){return this.localeData().weekdays(this,e)});g("e",0,0,"weekday");g("E",0,0,"isoWeekday");H("day","d");H("weekday","e");H("isoWeekday","E");$("day",11);$("weekday",11);$("isoWeekday",11);v("d",P);v("e",P);v("E",P);v("dd",function(e,t){return t.weekdaysMinRegex(e)});v("ddd",function(e,t){return t.weekdaysShortRegex(e)});v("dddd",function(e,t){return t.weekdaysRegex(e)});bt(["dd","ddd","dddd"],function(e,t,n,a){var r=n._locale.weekdaysParse(e,a,n._strict);r!=null?t.d=r:b(n).invalidWeekday=e});bt(["d","e","E"],function(e,t,n,a){t[a]=_(e)});function ys(e,t){return typeof e!="string"?e:isNaN(e)?(e=t.weekdaysParse(e),typeof e=="number"?e:null):parseInt(e,10)}function gs(e,t){return typeof e=="string"?t.weekdaysParse(e)%7||7:isNaN(e)?null:e}function Kn(e,t){return e.slice(t,7).concat(e.slice(0,t))}var ps="Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),_r="Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),bs="Su_Mo_Tu_We_Th_Fr_Sa".split("_"),_s=pt,ws=pt,ks=pt;function xs(e,t){var n=ne(this._weekdays)?this._weekdays:this._weekdays[e&&e!==!0&&this._weekdays.isFormat.test(t)?"format":"standalone"];return e===!0?Kn(n,this._week.dow):e?n[e.day()]:n}function Ss(e){return e===!0?Kn(this._weekdaysShort,this._week.dow):e?this._weekdaysShort[e.day()]:this._weekdaysShort}function Os(e){return e===!0?Kn(this._weekdaysMin,this._week.dow):e?this._weekdaysMin[e.day()]:this._weekdaysMin}function Ms(e,t,n){var a,r,i,s=e.toLocaleLowerCase();if(!this._weekdaysParse)for(this._weekdaysParse=[],this._shortWeekdaysParse=[],this._minWeekdaysParse=[],a=0;a<7;++a)i=le([2e3,1]).day(a),this._minWeekdaysParse[a]=this.weekdaysMin(i,"").toLocaleLowerCase(),this._shortWeekdaysParse[a]=this.weekdaysShort(i,"").toLocaleLowerCase(),this._weekdaysParse[a]=this.weekdays(i,"").toLocaleLowerCase();return n?t==="dddd"?(r=E.call(this._weekdaysParse,s),r!==-1?r:null):t==="ddd"?(r=E.call(this._shortWeekdaysParse,s),r!==-1?r:null):(r=E.call(this._minWeekdaysParse,s),r!==-1?r:null):t==="dddd"?(r=E.call(this._weekdaysParse,s),r!==-1||(r=E.call(this._shortWeekdaysParse,s),r!==-1)?r:(r=E.call(this._minWeekdaysParse,s),r!==-1?r:null)):t==="ddd"?(r=E.call(this._shortWeekdaysParse,s),r!==-1||(r=E.call(this._weekdaysParse,s),r!==-1)?r:(r=E.call(this._minWeekdaysParse,s),r!==-1?r:null)):(r=E.call(this._minWeekdaysParse,s),r!==-1||(r=E.call(this._weekdaysParse,s),r!==-1)?r:(r=E.call(this._shortWeekdaysParse,s),r!==-1?r:null))}function Ds(e,t,n){var a,r,i;if(this._weekdaysParseExact)return Ms.call(this,e,t,n);for(this._weekdaysParse||(this._weekdaysParse=[],this._minWeekdaysParse=[],this._shortWeekdaysParse=[],this._fullWeekdaysParse=[]),a=0;a<7;a++){if(r=le([2e3,1]).day(a),n&&!this._fullWeekdaysParse[a]&&(this._fullWeekdaysParse[a]=new RegExp("^"+this.weekdays(r,"").replace(".","\\.?")+"$","i"),this._shortWeekdaysParse[a]=new RegExp("^"+this.weekdaysShort(r,"").replace(".","\\.?")+"$","i"),this._minWeekdaysParse[a]=new RegExp("^"+this.weekdaysMin(r,"").replace(".","\\.?")+"$","i")),this._weekdaysParse[a]||(i="^"+this.weekdays(r,"")+"|^"+this.weekdaysShort(r,"")+"|^"+this.weekdaysMin(r,""),this._weekdaysParse[a]=new RegExp(i.replace(".",""),"i")),n&&t==="dddd"&&this._fullWeekdaysParse[a].test(e))return a;if(n&&t==="ddd"&&this._shortWeekdaysParse[a].test(e))return a;if(n&&t==="dd"&&this._minWeekdaysParse[a].test(e))return a;if(!n&&this._weekdaysParse[a].test(e))return a}}function Ys(e){if(!this.isValid())return e!=null?this:NaN;var t=this._isUTC?this._d.getUTCDay():this._d.getDay();return e!=null?(e=ys(e,this.localeData()),this.add(e-t,"d")):t}function Ts(e){if(!this.isValid())return e!=null?this:NaN;var t=(this.day()+7-this.localeData()._week.dow)%7;return e==null?t:this.add(e-t,"d")}function Ps(e){if(!this.isValid())return e!=null?this:NaN;if(e!=null){var t=gs(e,this.localeData());return this.day(this.day()%7?t:t-7)}else return this.day()||7}function As(e){return this._weekdaysParseExact?(S(this,"_weekdaysRegex")||Qn.call(this),e?this._weekdaysStrictRegex:this._weekdaysRegex):(S(this,"_weekdaysRegex")||(this._weekdaysRegex=_s),this._weekdaysStrictRegex&&e?this._weekdaysStrictRegex:this._weekdaysRegex)}function Ns(e){return this._weekdaysParseExact?(S(this,"_weekdaysRegex")||Qn.call(this),e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex):(S(this,"_weekdaysShortRegex")||(this._weekdaysShortRegex=ws),this._weekdaysShortStrictRegex&&e?this._weekdaysShortStrictRegex:this._weekdaysShortRegex)}function Is(e){return this._weekdaysParseExact?(S(this,"_weekdaysRegex")||Qn.call(this),e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex):(S(this,"_weekdaysMinRegex")||(this._weekdaysMinRegex=ks),this._weekdaysMinStrictRegex&&e?this._weekdaysMinStrictRegex:this._weekdaysMinRegex)}function Qn(){function e(u,d){return d.length-u.length}var t=[],n=[],a=[],r=[],i,s,o,l,f;for(i=0;i<7;i++)s=le([2e3,1]).day(i),o=B(this.weekdaysMin(s,"")),l=B(this.weekdaysShort(s,"")),f=B(this.weekdays(s,"")),t.push(o),n.push(l),a.push(f),r.push(o),r.push(l),r.push(f);t.sort(e),n.sort(e),a.sort(e),r.sort(e),this._weekdaysRegex=new RegExp("^("+r.join("|")+")","i"),this._weekdaysShortRegex=this._weekdaysRegex,this._weekdaysMinRegex=this._weekdaysRegex,this._weekdaysStrictRegex=new RegExp("^("+a.join("|")+")","i"),this._weekdaysShortStrictRegex=new RegExp("^("+n.join("|")+")","i"),this._weekdaysMinStrictRegex=new RegExp("^("+t.join("|")+")","i")}function ea(){return this.hours()%12||12}function Cs(){return this.hours()||24}g("H",["HH",2],0,"hour");g("h",["hh",2],0,ea);g("k",["kk",2],0,Cs);g("hmm",0,0,function(){return""+ea.apply(this)+oe(this.minutes(),2)});g("hmmss",0,0,function(){return""+ea.apply(this)+oe(this.minutes(),2)+oe(this.seconds(),2)});g("Hmm",0,0,function(){return""+this.hours()+oe(this.minutes(),2)});g("Hmmss",0,0,function(){return""+this.hours()+oe(this.minutes(),2)+oe(this.seconds(),2)});function wr(e,t){g(e,0,0,function(){return this.localeData().meridiem(this.hours(),this.minutes(),t)})}wr("a",!0);wr("A",!1);H("hour","h");$("hour",13);function kr(e,t){return t._meridiemParse}v("a",kr);v("A",kr);v("H",P);v("h",P);v("k",P);v("HH",P,X);v("hh",P,X);v("kk",P,X);v("hmm",cr);v("hmmss",dr);v("Hmm",cr);v("Hmmss",dr);M(["H","HH"],L);M(["k","kk"],function(e,t,n){var a=_(e);t[L]=a===24?0:a});M(["a","A"],function(e,t,n){n._isPm=n._locale.isPM(e),n._meridiem=e});M(["h","hh"],function(e,t,n){t[L]=_(e),b(n).bigHour=!0});M("hmm",function(e,t,n){var a=e.length-2;t[L]=_(e.substr(0,a)),t[ee]=_(e.substr(a)),b(n).bigHour=!0});M("hmmss",function(e,t,n){var a=e.length-4,r=e.length-2;t[L]=_(e.substr(0,a)),t[ee]=_(e.substr(a,2)),t[me]=_(e.substr(r)),b(n).bigHour=!0});M("Hmm",function(e,t,n){var a=e.length-2;t[L]=_(e.substr(0,a)),t[ee]=_(e.substr(a))});M("Hmmss",function(e,t,n){var a=e.length-4,r=e.length-2;t[L]=_(e.substr(0,a)),t[ee]=_(e.substr(a,2)),t[me]=_(e.substr(r))});function Es(e){return(e+"").toLowerCase().charAt(0)==="p"}var Rs=/[ap]\.?m?\.?/i,Fs=Ke("Hours",!0);function Ls(e,t,n){return e>11?n?"pm":"PM":n?"am":"AM"}var xr={calendar:Di,longDateFormat:Ai,invalidDate:Ii,ordinal:Ei,dayOfMonthOrdinalParse:Ri,relativeTime:Li,months:Ki,monthsShort:mr,week:cs,weekdays:ps,weekdaysMin:bs,weekdaysShort:_r,meridiemParse:Rs},A={},tt={},ut;function Ws(e,t){var n,a=Math.min(e.length,t.length);for(n=0;n<a;n+=1)if(e[n]!==t[n])return n;return a}function Oa(e){return e&&e.toLowerCase().replace("_","-")}function Us(e){for(var t=0,n,a,r,i;t<e.length;){for(i=Oa(e[t]).split("-"),n=i.length,a=Oa(e[t+1]),a=a?a.split("-"):null;n>0;){if(r=an(i.slice(0,n).join("-")),r)return r;if(a&&a.length>=n&&Ws(i,a)>=n-1)break;n--}t++}return ut}function js(e){return e.match("^[^/\\\\]*$")!=null}function an(e){var t=null,n;if(A[e]===void 0&&typeof module<"u"&&module&&module.exports&&js(e))try{t=ut._abbr,n=require,n("./locale/"+e),De(t)}catch{A[e]=null}return A[e]}function De(e,t){var n;return e&&(V(t)?n=be(e):n=ta(e,t),n?ut=n:typeof console<"u"&&console.warn&&console.warn("Locale "+e+" not found. Did you forget to load it?")),ut._abbr}function ta(e,t){if(t!==null){var n,a=xr;if(t.abbr=e,A[e]!=null)ir("defineLocaleOverride","use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."),a=A[e]._config;else if(t.parentLocale!=null)if(A[t.parentLocale]!=null)a=A[t.parentLocale]._config;else if(n=an(t.parentLocale),n!=null)a=n._config;else return tt[t.parentLocale]||(tt[t.parentLocale]=[]),tt[t.parentLocale].push({name:e,config:t}),null;return A[e]=new Zn(Sn(a,t)),tt[e]&&tt[e].forEach(function(r){ta(r.name,r.config)}),De(e),A[e]}else return delete A[e],null}function zs(e,t){if(t!=null){var n,a,r=xr;A[e]!=null&&A[e].parentLocale!=null?A[e].set(Sn(A[e]._config,t)):(a=an(e),a!=null&&(r=a._config),t=Sn(r,t),a==null&&(t.abbr=e),n=new Zn(t),n.parentLocale=A[e],A[e]=n),De(e)}else A[e]!=null&&(A[e].parentLocale!=null?(A[e]=A[e].parentLocale,e===De()&&De(e)):A[e]!=null&&delete A[e]);return A[e]}function be(e){var t;if(e&&e._locale&&e._locale._abbr&&(e=e._locale._abbr),!e)return ut;if(!ne(e)){if(t=an(e),t)return t;e=[e]}return Us(e)}function Hs(){return On(A)}function na(e){var t,n=e._a;return n&&b(e).overflow===-2&&(t=n[de]<0||n[de]>11?de:n[ie]<1||n[ie]>nn(n[z],n[de])?ie:n[L]<0||n[L]>24||n[L]===24&&(n[ee]!==0||n[me]!==0||n[Ce]!==0)?L:n[ee]<0||n[ee]>59?ee:n[me]<0||n[me]>59?me:n[Ce]<0||n[Ce]>999?Ce:-1,b(e)._overflowDayOfYear&&(t<z||t>ie)&&(t=ie),b(e)._overflowWeeks&&t===-1&&(t=Xi),b(e)._overflowWeekday&&t===-1&&(t=qi),b(e).overflow=t),e}var $s=/^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Gs=/^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d|))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([+-]\d\d(?::?\d\d)?|\s*Z)?)?$/,Vs=/Z|[+-]\d\d(?::?\d\d)?/,St=[["YYYYYY-MM-DD",/[+-]\d{6}-\d\d-\d\d/],["YYYY-MM-DD",/\d{4}-\d\d-\d\d/],["GGGG-[W]WW-E",/\d{4}-W\d\d-\d/],["GGGG-[W]WW",/\d{4}-W\d\d/,!1],["YYYY-DDD",/\d{4}-\d{3}/],["YYYY-MM",/\d{4}-\d\d/,!1],["YYYYYYMMDD",/[+-]\d{10}/],["YYYYMMDD",/\d{8}/],["GGGG[W]WWE",/\d{4}W\d{3}/],["GGGG[W]WW",/\d{4}W\d{2}/,!1],["YYYYDDD",/\d{7}/],["YYYYMM",/\d{6}/,!1],["YYYY",/\d{4}/,!1]],yn=[["HH:mm:ss.SSSS",/\d\d:\d\d:\d\d\.\d+/],["HH:mm:ss,SSSS",/\d\d:\d\d:\d\d,\d+/],["HH:mm:ss",/\d\d:\d\d:\d\d/],["HH:mm",/\d\d:\d\d/],["HHmmss.SSSS",/\d\d\d\d\d\d\.\d+/],["HHmmss,SSSS",/\d\d\d\d\d\d,\d+/],["HHmmss",/\d\d\d\d\d\d/],["HHmm",/\d\d\d\d/],["HH",/\d\d/]],Zs=/^\/?Date\((-?\d+)/i,Bs=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/,Xs={UT:0,GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function Sr(e){var t,n,a=e._i,r=$s.exec(a)||Gs.exec(a),i,s,o,l,f=St.length,u=yn.length;if(r){for(b(e).iso=!0,t=0,n=f;t<n;t++)if(St[t][1].exec(r[1])){s=St[t][0],i=St[t][2]!==!1;break}if(s==null){e._isValid=!1;return}if(r[3]){for(t=0,n=u;t<n;t++)if(yn[t][1].exec(r[3])){o=(r[2]||" ")+yn[t][0];break}if(o==null){e._isValid=!1;return}}if(!i&&o!=null){e._isValid=!1;return}if(r[4])if(Vs.exec(r[4]))l="Z";else{e._isValid=!1;return}e._f=s+(o||"")+(l||""),ra(e)}else e._isValid=!1}function qs(e,t,n,a,r,i){var s=[Js(e),mr.indexOf(t),parseInt(n,10),parseInt(a,10),parseInt(r,10)];return i&&s.push(parseInt(i,10)),s}function Js(e){var t=parseInt(e,10);return t<=49?2e3+t:t<=999?1900+t:t}function Ks(e){return e.replace(/\([^()]*\)|[\n\t]/g," ").replace(/(\s\s+)/g," ").replace(/^\s\s*/,"").replace(/\s\s*$/,"")}function Qs(e,t,n){if(e){var a=_r.indexOf(e),r=new Date(t[0],t[1],t[2]).getDay();if(a!==r)return b(n).weekdayMismatch=!0,n._isValid=!1,!1}return!0}function eo(e,t,n){if(e)return Xs[e];if(t)return 0;var a=parseInt(n,10),r=a%100,i=(a-r)/100;return i*60+r}function Or(e){var t=Bs.exec(Ks(e._i)),n;if(t){if(n=qs(t[4],t[3],t[2],t[5],t[6],t[7]),!Qs(t[1],n,e))return;e._a=n,e._tzm=eo(t[8],t[9],t[10]),e._d=lt.apply(null,e._a),e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),b(e).rfc2822=!0}else e._isValid=!1}function to(e){var t=Zs.exec(e._i);if(t!==null){e._d=new Date(+t[1]);return}if(Sr(e),e._isValid===!1)delete e._isValid;else return;if(Or(e),e._isValid===!1)delete e._isValid;else return;e._strict?e._isValid=!1:m.createFromInputFallback(e)}m.createFromInputFallback=K("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.",function(e){e._d=new Date(e._i+(e._useUTC?" UTC":""))});function ze(e,t,n){return e??t??n}function no(e){var t=new Date(m.now());return e._useUTC?[t.getUTCFullYear(),t.getUTCMonth(),t.getUTCDate()]:[t.getFullYear(),t.getMonth(),t.getDate()]}function aa(e){var t,n,a=[],r,i,s;if(!e._d){for(r=no(e),e._w&&e._a[ie]==null&&e._a[de]==null&&ao(e),e._dayOfYear!=null&&(s=ze(e._a[z],r[z]),(e._dayOfYear>it(s)||e._dayOfYear===0)&&(b(e)._overflowDayOfYear=!0),n=lt(s,0,e._dayOfYear),e._a[de]=n.getUTCMonth(),e._a[ie]=n.getUTCDate()),t=0;t<3&&e._a[t]==null;++t)e._a[t]=a[t]=r[t];for(;t<7;t++)e._a[t]=a[t]=e._a[t]==null?t===2?1:0:e._a[t];e._a[L]===24&&e._a[ee]===0&&e._a[me]===0&&e._a[Ce]===0&&(e._nextDay=!0,e._a[L]=0),e._d=(e._useUTC?lt:fs).apply(null,a),i=e._useUTC?e._d.getUTCDay():e._d.getDay(),e._tzm!=null&&e._d.setUTCMinutes(e._d.getUTCMinutes()-e._tzm),e._nextDay&&(e._a[L]=24),e._w&&typeof e._w.d<"u"&&e._w.d!==i&&(b(e).weekdayMismatch=!0)}}function ao(e){var t,n,a,r,i,s,o,l,f;t=e._w,t.GG!=null||t.W!=null||t.E!=null?(i=1,s=4,n=ze(t.GG,e._a[z],ft(T(),1,4).year),a=ze(t.W,1),r=ze(t.E,1),(r<1||r>7)&&(l=!0)):(i=e._locale._week.dow,s=e._locale._week.doy,f=ft(T(),i,s),n=ze(t.gg,e._a[z],f.year),a=ze(t.w,f.week),t.d!=null?(r=t.d,(r<0||r>6)&&(l=!0)):t.e!=null?(r=t.e+i,(t.e<0||t.e>6)&&(l=!0)):r=i),a<1||a>he(n,i,s)?b(e)._overflowWeeks=!0:l!=null?b(e)._overflowWeekday=!0:(o=br(n,a,r,i,s),e._a[z]=o.year,e._dayOfYear=o.dayOfYear)}m.ISO_8601=function(){};m.RFC_2822=function(){};function ra(e){if(e._f===m.ISO_8601){Sr(e);return}if(e._f===m.RFC_2822){Or(e);return}e._a=[],b(e).empty=!0;var t=""+e._i,n,a,r,i,s,o=t.length,l=0,f,u;for(r=sr(e._f,e._locale).match(Bn)||[],u=r.length,n=0;n<u;n++)i=r[n],a=(t.match(Vi(i,e))||[])[0],a&&(s=t.substr(0,t.indexOf(a)),s.length>0&&b(e).unusedInput.push(s),t=t.slice(t.indexOf(a)+a.length),l+=a.length),Ze[i]?(a?b(e).empty=!1:b(e).unusedTokens.push(i),Bi(i,a,e)):e._strict&&!a&&b(e).unusedTokens.push(i);b(e).charsLeftOver=o-l,t.length>0&&b(e).unusedInput.push(t),e._a[L]<=12&&b(e).bigHour===!0&&e._a[L]>0&&(b(e).bigHour=void 0),b(e).parsedDateParts=e._a.slice(0),b(e).meridiem=e._meridiem,e._a[L]=ro(e._locale,e._a[L],e._meridiem),f=b(e).era,f!==null&&(e._a[z]=e._locale.erasConvertYear(f,e._a[z])),aa(e),na(e)}function ro(e,t,n){var a;return n==null?t:e.meridiemHour!=null?e.meridiemHour(t,n):(e.isPM!=null&&(a=e.isPM(n),a&&t<12&&(t+=12),!a&&t===12&&(t=0)),t)}function io(e){var t,n,a,r,i,s,o=!1,l=e._f.length;if(l===0){b(e).invalidFormat=!0,e._d=new Date(NaN);return}for(r=0;r<l;r++)i=0,s=!1,t=Vn({},e),e._useUTC!=null&&(t._useUTC=e._useUTC),t._f=e._f[r],ra(t),Gn(t)&&(s=!0),i+=b(t).charsLeftOver,i+=b(t).unusedTokens.length*10,b(t).score=i,o?i<a&&(a=i,n=t):(a==null||i<a||s)&&(a=i,n=t,s&&(o=!0));Se(e,n||t)}function so(e){if(!e._d){var t=Xn(e._i),n=t.day===void 0?t.date:t.day;e._a=ar([t.year,t.month,n,t.hour,t.minute,t.second,t.millisecond],function(a){return a&&parseInt(a,10)}),aa(e)}}function oo(e){var t=new gt(na(Mr(e)));return t._nextDay&&(t.add(1,"d"),t._nextDay=void 0),t}function Mr(e){var t=e._i,n=e._f;return e._locale=e._locale||be(e._l),t===null||n===void 0&&t===""?Xt({nullInput:!0}):(typeof t=="string"&&(e._i=t=e._locale.preparse(t)),ae(t)?new gt(na(t)):(yt(t)?e._d=t:ne(n)?io(e):n?ra(e):lo(e),Gn(e)||(e._d=null),e))}function lo(e){var t=e._i;V(t)?e._d=new Date(m.now()):yt(t)?e._d=new Date(t.valueOf()):typeof t=="string"?to(e):ne(t)?(e._a=ar(t.slice(0),function(n){return parseInt(n,10)}),aa(e)):Fe(t)?so(e):ve(t)?e._d=new Date(t):m.createFromInputFallback(e)}function Dr(e,t,n,a,r){var i={};return(t===!0||t===!1)&&(a=t,t=void 0),(n===!0||n===!1)&&(a=n,n=void 0),(Fe(e)&&$n(e)||ne(e)&&e.length===0)&&(e=void 0),i._isAMomentObject=!0,i._useUTC=i._isUTC=r,i._l=n,i._i=e,i._f=t,i._strict=a,oo(i)}function T(e,t,n,a){return Dr(e,t,n,a,!1)}var fo=K("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=T.apply(null,arguments);return this.isValid()&&e.isValid()?e<this?this:e:Xt()}),uo=K("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/",function(){var e=T.apply(null,arguments);return this.isValid()&&e.isValid()?e>this?this:e:Xt()});function Yr(e,t){var n,a;if(t.length===1&&ne(t[0])&&(t=t[0]),!t.length)return T();for(n=t[0],a=1;a<t.length;++a)(!t[a].isValid()||t[a][e](n))&&(n=t[a]);return n}function co(){var e=[].slice.call(arguments,0);return Yr("isBefore",e)}function mo(){var e=[].slice.call(arguments,0);return Yr("isAfter",e)}var ho=function(){return Date.now?Date.now():+new Date},nt=["year","quarter","month","week","day","hour","minute","second","millisecond"];function vo(e){var t,n=!1,a,r=nt.length;for(t in e)if(S(e,t)&&!(E.call(nt,t)!==-1&&(e[t]==null||!isNaN(e[t]))))return!1;for(a=0;a<r;++a)if(e[nt[a]]){if(n)return!1;parseFloat(e[nt[a]])!==_(e[nt[a]])&&(n=!0)}return!0}function yo(){return this._isValid}function go(){return re(NaN)}function rn(e){var t=Xn(e),n=t.year||0,a=t.quarter||0,r=t.month||0,i=t.week||t.isoWeek||0,s=t.day||0,o=t.hour||0,l=t.minute||0,f=t.second||0,u=t.millisecond||0;this._isValid=vo(t),this._milliseconds=+u+f*1e3+l*6e4+o*1e3*60*60,this._days=+s+i*7,this._months=+r+a*3+n*12,this._data={},this._locale=be(),this._bubble()}function Et(e){return e instanceof rn}function Dn(e){return e<0?Math.round(-1*e)*-1:Math.round(e)}function po(e,t,n){var a=Math.min(e.length,t.length),r=Math.abs(e.length-t.length),i=0,s;for(s=0;s<a;s++)(n&&e[s]!==t[s]||!n&&_(e[s])!==_(t[s]))&&i++;return i+r}function Tr(e,t){g(e,0,0,function(){var n=this.utcOffset(),a="+";return n<0&&(n=-n,a="-"),a+oe(~~(n/60),2)+t+oe(~~n%60,2)})}Tr("Z",":");Tr("ZZ","");v("Z",tn);v("ZZ",tn);M(["Z","ZZ"],function(e,t,n){n._useUTC=!0,n._tzm=ia(tn,e)});var bo=/([\+\-]|\d\d)/gi;function ia(e,t){var n=(t||"").match(e),a,r,i;return n===null?null:(a=n[n.length-1]||[],r=(a+"").match(bo)||["-",0,0],i=+(r[1]*60)+_(r[2]),i===0?0:r[0]==="+"?i:-i)}function sa(e,t){var n,a;return t._isUTC?(n=t.clone(),a=(ae(e)||yt(e)?e.valueOf():T(e).valueOf())-n.valueOf(),n._d.setTime(n._d.valueOf()+a),m.updateOffset(n,!1),n):T(e).local()}function Yn(e){return-Math.round(e._d.getTimezoneOffset())}m.updateOffset=function(){};function _o(e,t,n){var a=this._offset||0,r;if(!this.isValid())return e!=null?this:NaN;if(e!=null){if(typeof e=="string"){if(e=ia(tn,e),e===null)return this}else Math.abs(e)<16&&!n&&(e=e*60);return!this._isUTC&&t&&(r=Yn(this)),this._offset=e,this._isUTC=!0,r!=null&&this.add(r,"m"),a!==e&&(!t||this._changeInProgress?Nr(this,re(e-a,"m"),1,!1):this._changeInProgress||(this._changeInProgress=!0,m.updateOffset(this,!0),this._changeInProgress=null)),this}else return this._isUTC?a:Yn(this)}function wo(e,t){return e!=null?(typeof e!="string"&&(e=-e),this.utcOffset(e,t),this):-this.utcOffset()}function ko(e){return this.utcOffset(0,e)}function xo(e){return this._isUTC&&(this.utcOffset(0,e),this._isUTC=!1,e&&this.subtract(Yn(this),"m")),this}function So(){if(this._tzm!=null)this.utcOffset(this._tzm,!1,!0);else if(typeof this._i=="string"){var e=ia($i,this._i);e!=null?this.utcOffset(e):this.utcOffset(0,!0)}return this}function Oo(e){return this.isValid()?(e=e?T(e).utcOffset():0,(this.utcOffset()-e)%60===0):!1}function Mo(){return this.utcOffset()>this.clone().month(0).utcOffset()||this.utcOffset()>this.clone().month(5).utcOffset()}function Do(){if(!V(this._isDSTShifted))return this._isDSTShifted;var e={},t;return Vn(e,this),e=Mr(e),e._a?(t=e._isUTC?le(e._a):T(e._a),this._isDSTShifted=this.isValid()&&po(e._a,t.toArray())>0):this._isDSTShifted=!1,this._isDSTShifted}function Yo(){return this.isValid()?!this._isUTC:!1}function To(){return this.isValid()?this._isUTC:!1}function Pr(){return this.isValid()?this._isUTC&&this._offset===0:!1}var Po=/^(-|\+)?(?:(\d*)[. ])?(\d+):(\d+)(?::(\d+)(\.\d*)?)?$/,Ao=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;function re(e,t){var n=e,a=null,r,i,s;return Et(e)?n={ms:e._milliseconds,d:e._days,M:e._months}:ve(e)||!isNaN(+e)?(n={},t?n[t]=+e:n.milliseconds=+e):(a=Po.exec(e))?(r=a[1]==="-"?-1:1,n={y:0,d:_(a[ie])*r,h:_(a[L])*r,m:_(a[ee])*r,s:_(a[me])*r,ms:_(Dn(a[Ce]*1e3))*r}):(a=Ao.exec(e))?(r=a[1]==="-"?-1:1,n={y:Ie(a[2],r),M:Ie(a[3],r),w:Ie(a[4],r),d:Ie(a[5],r),h:Ie(a[6],r),m:Ie(a[7],r),s:Ie(a[8],r)}):n==null?n={}:typeof n=="object"&&("from"in n||"to"in n)&&(s=No(T(n.from),T(n.to)),n={},n.ms=s.milliseconds,n.M=s.months),i=new rn(n),Et(e)&&S(e,"_locale")&&(i._locale=e._locale),Et(e)&&S(e,"_isValid")&&(i._isValid=e._isValid),i}re.fn=rn.prototype;re.invalid=go;function Ie(e,t){var n=e&&parseFloat(e.replace(",","."));return(isNaN(n)?0:n)*t}function Ma(e,t){var n={};return n.months=t.month()-e.month()+(t.year()-e.year())*12,e.clone().add(n.months,"M").isAfter(t)&&--n.months,n.milliseconds=+t-+e.clone().add(n.months,"M"),n}function No(e,t){var n;return e.isValid()&&t.isValid()?(t=sa(t,e),e.isBefore(t)?n=Ma(e,t):(n=Ma(t,e),n.milliseconds=-n.milliseconds,n.months=-n.months),n):{milliseconds:0,months:0}}function Ar(e,t){return function(n,a){var r,i;return a!==null&&!isNaN(+a)&&(ir(t,"moment()."+t+"(period, number) is deprecated. Please use moment()."+t+"(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."),i=n,n=a,a=i),r=re(n,a),Nr(this,r,e),this}}function Nr(e,t,n,a){var r=t._milliseconds,i=Dn(t._days),s=Dn(t._months);e.isValid()&&(a=a??!0,s&&vr(e,Wt(e,"Month")+s*n),i&&lr(e,"Date",Wt(e,"Date")+i*n),r&&e._d.setTime(e._d.valueOf()+r*n),a&&m.updateOffset(e,i||s))}var Io=Ar(1,"add"),Co=Ar(-1,"subtract");function Ir(e){return typeof e=="string"||e instanceof String}function Eo(e){return ae(e)||yt(e)||Ir(e)||ve(e)||Fo(e)||Ro(e)||e===null||e===void 0}function Ro(e){var t=Fe(e)&&!$n(e),n=!1,a=["years","year","y","months","month","M","days","day","d","dates","date","D","hours","hour","h","minutes","minute","m","seconds","second","s","milliseconds","millisecond","ms"],r,i,s=a.length;for(r=0;r<s;r+=1)i=a[r],n=n||S(e,i);return t&&n}function Fo(e){var t=ne(e),n=!1;return t&&(n=e.filter(function(a){return!ve(a)&&Ir(e)}).length===0),t&&n}function Lo(e){var t=Fe(e)&&!$n(e),n=!1,a=["sameDay","nextDay","lastDay","nextWeek","lastWeek","sameElse"],r,i;for(r=0;r<a.length;r+=1)i=a[r],n=n||S(e,i);return t&&n}function Wo(e,t){var n=e.diff(t,"days",!0);return n<-6?"sameElse":n<-1?"lastWeek":n<0?"lastDay":n<1?"sameDay":n<2?"nextDay":n<7?"nextWeek":"sameElse"}function Uo(e,t){arguments.length===1&&(arguments[0]?Eo(arguments[0])?(e=arguments[0],t=void 0):Lo(arguments[0])&&(t=arguments[0],e=void 0):(e=void 0,t=void 0));var n=e||T(),a=sa(n,this).startOf("day"),r=m.calendarFormat(this,a)||"sameElse",i=t&&(fe(t[r])?t[r].call(this,n):t[r]);return this.format(i||this.localeData().calendar(r,this,T(n)))}function jo(){return new gt(this)}function zo(e,t){var n=ae(e)?e:T(e);return this.isValid()&&n.isValid()?(t=Q(t)||"millisecond",t==="millisecond"?this.valueOf()>n.valueOf():n.valueOf()<this.clone().startOf(t).valueOf()):!1}function Ho(e,t){var n=ae(e)?e:T(e);return this.isValid()&&n.isValid()?(t=Q(t)||"millisecond",t==="millisecond"?this.valueOf()<n.valueOf():this.clone().endOf(t).valueOf()<n.valueOf()):!1}function $o(e,t,n,a){var r=ae(e)?e:T(e),i=ae(t)?t:T(t);return this.isValid()&&r.isValid()&&i.isValid()?(a=a||"()",(a[0]==="("?this.isAfter(r,n):!this.isBefore(r,n))&&(a[1]===")"?this.isBefore(i,n):!this.isAfter(i,n))):!1}function Go(e,t){var n=ae(e)?e:T(e),a;return this.isValid()&&n.isValid()?(t=Q(t)||"millisecond",t==="millisecond"?this.valueOf()===n.valueOf():(a=n.valueOf(),this.clone().startOf(t).valueOf()<=a&&a<=this.clone().endOf(t).valueOf())):!1}function Vo(e,t){return this.isSame(e,t)||this.isAfter(e,t)}function Zo(e,t){return this.isSame(e,t)||this.isBefore(e,t)}function Bo(e,t,n){var a,r,i;if(!this.isValid())return NaN;if(a=sa(e,this),!a.isValid())return NaN;switch(r=(a.utcOffset()-this.utcOffset())*6e4,t=Q(t),t){case"year":i=Rt(this,a)/12;break;case"month":i=Rt(this,a);break;case"quarter":i=Rt(this,a)/3;break;case"second":i=(this-a)/1e3;break;case"minute":i=(this-a)/6e4;break;case"hour":i=(this-a)/36e5;break;case"day":i=(this-a-r)/864e5;break;case"week":i=(this-a-r)/6048e5;break;default:i=this-a}return n?i:J(i)}function Rt(e,t){if(e.date()<t.date())return-Rt(t,e);var n=(t.year()-e.year())*12+(t.month()-e.month()),a=e.clone().add(n,"months"),r,i;return t-a<0?(r=e.clone().add(n-1,"months"),i=(t-a)/(a-r)):(r=e.clone().add(n+1,"months"),i=(t-a)/(r-a)),-(n+i)||0}m.defaultFormat="YYYY-MM-DDTHH:mm:ssZ";m.defaultFormatUtc="YYYY-MM-DDTHH:mm:ss[Z]";function Xo(){return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ")}function qo(e){if(!this.isValid())return null;var t=e!==!0,n=t?this.clone().utc():this;return n.year()<0||n.year()>9999?Ct(n,t?"YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYYYY-MM-DD[T]HH:mm:ss.SSSZ"):fe(Date.prototype.toISOString)?t?this.toDate().toISOString():new Date(this.valueOf()+this.utcOffset()*60*1e3).toISOString().replace("Z",Ct(n,"Z")):Ct(n,t?"YYYY-MM-DD[T]HH:mm:ss.SSS[Z]":"YYYY-MM-DD[T]HH:mm:ss.SSSZ")}function Jo(){if(!this.isValid())return"moment.invalid(/* "+this._i+" */)";var e="moment",t="",n,a,r,i;return this.isLocal()||(e=this.utcOffset()===0?"moment.utc":"moment.parseZone",t="Z"),n="["+e+'("]',a=0<=this.year()&&this.year()<=9999?"YYYY":"YYYYYY",r="-MM-DD[T]HH:mm:ss.SSS",i=t+'[")]',this.format(n+a+r+i)}function Ko(e){e||(e=this.isUtc()?m.defaultFormatUtc:m.defaultFormat);var t=Ct(this,e);return this.localeData().postformat(t)}function Qo(e,t){return this.isValid()&&(ae(e)&&e.isValid()||T(e).isValid())?re({to:this,from:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function el(e){return this.from(T(),e)}function tl(e,t){return this.isValid()&&(ae(e)&&e.isValid()||T(e).isValid())?re({from:this,to:e}).locale(this.locale()).humanize(!t):this.localeData().invalidDate()}function nl(e){return this.to(T(),e)}function Cr(e){var t;return e===void 0?this._locale._abbr:(t=be(e),t!=null&&(this._locale=t),this)}var Er=K("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.",function(e){return e===void 0?this.localeData():this.locale(e)});function Rr(){return this._locale}var zt=1e3,Be=60*zt,Ht=60*Be,Fr=(365*400+97)*24*Ht;function Xe(e,t){return(e%t+t)%t}function Lr(e,t,n){return e<100&&e>=0?new Date(e+400,t,n)-Fr:new Date(e,t,n).valueOf()}function Wr(e,t,n){return e<100&&e>=0?Date.UTC(e+400,t,n)-Fr:Date.UTC(e,t,n)}function al(e){var t,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Wr:Lr,e){case"year":t=n(this.year(),0,1);break;case"quarter":t=n(this.year(),this.month()-this.month()%3,1);break;case"month":t=n(this.year(),this.month(),1);break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday());break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1));break;case"day":case"date":t=n(this.year(),this.month(),this.date());break;case"hour":t=this._d.valueOf(),t-=Xe(t+(this._isUTC?0:this.utcOffset()*Be),Ht);break;case"minute":t=this._d.valueOf(),t-=Xe(t,Be);break;case"second":t=this._d.valueOf(),t-=Xe(t,zt);break}return this._d.setTime(t),m.updateOffset(this,!0),this}function rl(e){var t,n;if(e=Q(e),e===void 0||e==="millisecond"||!this.isValid())return this;switch(n=this._isUTC?Wr:Lr,e){case"year":t=n(this.year()+1,0,1)-1;break;case"quarter":t=n(this.year(),this.month()-this.month()%3+3,1)-1;break;case"month":t=n(this.year(),this.month()+1,1)-1;break;case"week":t=n(this.year(),this.month(),this.date()-this.weekday()+7)-1;break;case"isoWeek":t=n(this.year(),this.month(),this.date()-(this.isoWeekday()-1)+7)-1;break;case"day":case"date":t=n(this.year(),this.month(),this.date()+1)-1;break;case"hour":t=this._d.valueOf(),t+=Ht-Xe(t+(this._isUTC?0:this.utcOffset()*Be),Ht)-1;break;case"minute":t=this._d.valueOf(),t+=Be-Xe(t,Be)-1;break;case"second":t=this._d.valueOf(),t+=zt-Xe(t,zt)-1;break}return this._d.setTime(t),m.updateOffset(this,!0),this}function il(){return this._d.valueOf()-(this._offset||0)*6e4}function sl(){return Math.floor(this.valueOf()/1e3)}function ol(){return new Date(this.valueOf())}function ll(){var e=this;return[e.year(),e.month(),e.date(),e.hour(),e.minute(),e.second(),e.millisecond()]}function fl(){var e=this;return{years:e.year(),months:e.month(),date:e.date(),hours:e.hours(),minutes:e.minutes(),seconds:e.seconds(),milliseconds:e.milliseconds()}}function ul(){return this.isValid()?this.toISOString():null}function cl(){return Gn(this)}function dl(){return Se({},b(this))}function ml(){return b(this).overflow}function hl(){return{input:this._i,format:this._f,locale:this._locale,isUTC:this._isUTC,strict:this._strict}}g("N",0,0,"eraAbbr");g("NN",0,0,"eraAbbr");g("NNN",0,0,"eraAbbr");g("NNNN",0,0,"eraName");g("NNNNN",0,0,"eraNarrow");g("y",["y",1],"yo","eraYear");g("y",["yy",2],0,"eraYear");g("y",["yyy",3],0,"eraYear");g("y",["yyyy",4],0,"eraYear");v("N",oa);v("NN",oa);v("NNN",oa);v("NNNN",Ol);v("NNNNN",Ml);M(["N","NN","NNN","NNNN","NNNNN"],function(e,t,n,a){var r=n._locale.erasParse(e,a,n._strict);r?b(n).era=r:b(n).invalidEra=e});v("y",Qe);v("yy",Qe);v("yyy",Qe);v("yyyy",Qe);v("yo",Dl);M(["y","yy","yyy","yyyy"],z);M(["yo"],function(e,t,n,a){var r;n._locale._eraYearOrdinalRegex&&(r=e.match(n._locale._eraYearOrdinalRegex)),n._locale.eraYearOrdinalParse?t[z]=n._locale.eraYearOrdinalParse(e,r):t[z]=parseInt(e,10)});function vl(e,t){var n,a,r,i=this._eras||be("en")._eras;for(n=0,a=i.length;n<a;++n){switch(typeof i[n].since){case"string":r=m(i[n].since).startOf("day"),i[n].since=r.valueOf();break}switch(typeof i[n].until){case"undefined":i[n].until=1/0;break;case"string":r=m(i[n].until).startOf("day").valueOf(),i[n].until=r.valueOf();break}}return i}function yl(e,t,n){var a,r,i=this.eras(),s,o,l;for(e=e.toUpperCase(),a=0,r=i.length;a<r;++a)if(s=i[a].name.toUpperCase(),o=i[a].abbr.toUpperCase(),l=i[a].narrow.toUpperCase(),n)switch(t){case"N":case"NN":case"NNN":if(o===e)return i[a];break;case"NNNN":if(s===e)return i[a];break;case"NNNNN":if(l===e)return i[a];break}else if([s,o,l].indexOf(e)>=0)return i[a]}function gl(e,t){var n=e.since<=e.until?1:-1;return t===void 0?m(e.since).year():m(e.since).year()+(t-e.offset)*n}function pl(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].name;return""}function bl(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].narrow;return""}function _l(){var e,t,n,a=this.localeData().eras();for(e=0,t=a.length;e<t;++e)if(n=this.clone().startOf("day").valueOf(),a[e].since<=n&&n<=a[e].until||a[e].until<=n&&n<=a[e].since)return a[e].abbr;return""}function wl(){var e,t,n,a,r=this.localeData().eras();for(e=0,t=r.length;e<t;++e)if(n=r[e].since<=r[e].until?1:-1,a=this.clone().startOf("day").valueOf(),r[e].since<=a&&a<=r[e].until||r[e].until<=a&&a<=r[e].since)return(this.year()-m(r[e].since).year())*n+r[e].offset;return this.year()}function kl(e){return S(this,"_erasNameRegex")||la.call(this),e?this._erasNameRegex:this._erasRegex}function xl(e){return S(this,"_erasAbbrRegex")||la.call(this),e?this._erasAbbrRegex:this._erasRegex}function Sl(e){return S(this,"_erasNarrowRegex")||la.call(this),e?this._erasNarrowRegex:this._erasRegex}function oa(e,t){return t.erasAbbrRegex(e)}function Ol(e,t){return t.erasNameRegex(e)}function Ml(e,t){return t.erasNarrowRegex(e)}function Dl(e,t){return t._eraYearOrdinalRegex||Qe}function la(){var e=[],t=[],n=[],a=[],r,i,s=this.eras();for(r=0,i=s.length;r<i;++r)t.push(B(s[r].name)),e.push(B(s[r].abbr)),n.push(B(s[r].narrow)),a.push(B(s[r].name)),a.push(B(s[r].abbr)),a.push(B(s[r].narrow));this._erasRegex=new RegExp("^("+a.join("|")+")","i"),this._erasNameRegex=new RegExp("^("+t.join("|")+")","i"),this._erasAbbrRegex=new RegExp("^("+e.join("|")+")","i"),this._erasNarrowRegex=new RegExp("^("+n.join("|")+")","i")}g(0,["gg",2],0,function(){return this.weekYear()%100});g(0,["GG",2],0,function(){return this.isoWeekYear()%100});function sn(e,t){g(0,[e,e.length],0,t)}sn("gggg","weekYear");sn("ggggg","weekYear");sn("GGGG","isoWeekYear");sn("GGGGG","isoWeekYear");H("weekYear","gg");H("isoWeekYear","GG");$("weekYear",1);$("isoWeekYear",1);v("G",en);v("g",en);v("GG",P,X);v("gg",P,X);v("GGGG",Jn,qn);v("gggg",Jn,qn);v("GGGGG",Qt,Jt);v("ggggg",Qt,Jt);bt(["gggg","ggggg","GGGG","GGGGG"],function(e,t,n,a){t[a.substr(0,2)]=_(e)});bt(["gg","GG"],function(e,t,n,a){t[a]=m.parseTwoDigitYear(e)});function Yl(e){return Ur.call(this,e,this.week(),this.weekday(),this.localeData()._week.dow,this.localeData()._week.doy)}function Tl(e){return Ur.call(this,e,this.isoWeek(),this.isoWeekday(),1,4)}function Pl(){return he(this.year(),1,4)}function Al(){return he(this.isoWeekYear(),1,4)}function Nl(){var e=this.localeData()._week;return he(this.year(),e.dow,e.doy)}function Il(){var e=this.localeData()._week;return he(this.weekYear(),e.dow,e.doy)}function Ur(e,t,n,a,r){var i;return e==null?ft(this,a,r).year:(i=he(e,a,r),t>i&&(t=i),Cl.call(this,e,t,n,a,r))}function Cl(e,t,n,a,r){var i=br(e,t,n,a,r),s=lt(i.year,0,i.dayOfYear);return this.year(s.getUTCFullYear()),this.month(s.getUTCMonth()),this.date(s.getUTCDate()),this}g("Q",0,"Qo","quarter");H("quarter","Q");$("quarter",7);v("Q",fr);M("Q",function(e,t){t[de]=(_(e)-1)*3});function El(e){return e==null?Math.ceil((this.month()+1)/3):this.month((e-1)*3+this.month()%3)}g("D",["DD",2],"Do","date");H("date","D");$("date",9);v("D",P);v("DD",P,X);v("Do",function(e,t){return e?t._dayOfMonthOrdinalParse||t._ordinalParse:t._dayOfMonthOrdinalParseLenient});M(["D","DD"],ie);M("Do",function(e,t){t[ie]=_(e.match(P)[0])});var jr=Ke("Date",!0);g("DDD",["DDDD",3],"DDDo","dayOfYear");H("dayOfYear","DDD");$("dayOfYear",4);v("DDD",Kt);v("DDDD",ur);M(["DDD","DDDD"],function(e,t,n){n._dayOfYear=_(e)});function Rl(e){var t=Math.round((this.clone().startOf("day")-this.clone().startOf("year"))/864e5)+1;return e==null?t:this.add(e-t,"d")}g("m",["mm",2],0,"minute");H("minute","m");$("minute",14);v("m",P);v("mm",P,X);M(["m","mm"],ee);var Fl=Ke("Minutes",!1);g("s",["ss",2],0,"second");H("second","s");$("second",15);v("s",P);v("ss",P,X);M(["s","ss"],me);var Ll=Ke("Seconds",!1);g("S",0,0,function(){return~~(this.millisecond()/100)});g(0,["SS",2],0,function(){return~~(this.millisecond()/10)});g(0,["SSS",3],0,"millisecond");g(0,["SSSS",4],0,function(){return this.millisecond()*10});g(0,["SSSSS",5],0,function(){return this.millisecond()*100});g(0,["SSSSSS",6],0,function(){return this.millisecond()*1e3});g(0,["SSSSSSS",7],0,function(){return this.millisecond()*1e4});g(0,["SSSSSSSS",8],0,function(){return this.millisecond()*1e5});g(0,["SSSSSSSSS",9],0,function(){return this.millisecond()*1e6});H("millisecond","ms");$("millisecond",16);v("S",Kt,fr);v("SS",Kt,X);v("SSS",Kt,ur);var Oe,zr;for(Oe="SSSS";Oe.length<=9;Oe+="S")v(Oe,Qe);function Wl(e,t){t[Ce]=_(("0."+e)*1e3)}for(Oe="S";Oe.length<=9;Oe+="S")M(Oe,Wl);zr=Ke("Milliseconds",!1);g("z",0,0,"zoneAbbr");g("zz",0,0,"zoneName");function Ul(){return this._isUTC?"UTC":""}function jl(){return this._isUTC?"Coordinated Universal Time":""}var c=gt.prototype;c.add=Io;c.calendar=Uo;c.clone=jo;c.diff=Bo;c.endOf=rl;c.format=Ko;c.from=Qo;c.fromNow=el;c.to=tl;c.toNow=nl;c.get=zi;c.invalidAt=ml;c.isAfter=zo;c.isBefore=Ho;c.isBetween=$o;c.isSame=Go;c.isSameOrAfter=Vo;c.isSameOrBefore=Zo;c.isValid=cl;c.lang=Er;c.locale=Cr;c.localeData=Rr;c.max=uo;c.min=fo;c.parsingFlags=dl;c.set=Hi;c.startOf=al;c.subtract=Co;c.toArray=ll;c.toObject=fl;c.toDate=ol;c.toISOString=qo;c.inspect=Jo;typeof Symbol<"u"&&Symbol.for!=null&&(c[Symbol.for("nodejs.util.inspect.custom")]=function(){return"Moment<"+this.format()+">"});c.toJSON=ul;c.toString=Xo;c.unix=sl;c.valueOf=il;c.creationData=hl;c.eraName=pl;c.eraNarrow=bl;c.eraAbbr=_l;c.eraYear=wl;c.year=pr;c.isLeapYear=ls;c.weekYear=Yl;c.isoWeekYear=Tl;c.quarter=c.quarters=El;c.month=yr;c.daysInMonth=is;c.week=c.weeks=hs;c.isoWeek=c.isoWeeks=vs;c.weeksInYear=Nl;c.weeksInWeekYear=Il;c.isoWeeksInYear=Pl;c.isoWeeksInISOWeekYear=Al;c.date=jr;c.day=c.days=Ys;c.weekday=Ts;c.isoWeekday=Ps;c.dayOfYear=Rl;c.hour=c.hours=Fs;c.minute=c.minutes=Fl;c.second=c.seconds=Ll;c.millisecond=c.milliseconds=zr;c.utcOffset=_o;c.utc=ko;c.local=xo;c.parseZone=So;c.hasAlignedHourOffset=Oo;c.isDST=Mo;c.isLocal=Yo;c.isUtcOffset=To;c.isUtc=Pr;c.isUTC=Pr;c.zoneAbbr=Ul;c.zoneName=jl;c.dates=K("dates accessor is deprecated. Use date instead.",jr);c.months=K("months accessor is deprecated. Use month instead",yr);c.years=K("years accessor is deprecated. Use year instead",pr);c.zone=K("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/",wo);c.isDSTShifted=K("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information",Do);function zl(e){return T(e*1e3)}function Hl(){return T.apply(null,arguments).parseZone()}function Hr(e){return e}var O=Zn.prototype;O.calendar=Yi;O.longDateFormat=Ni;O.invalidDate=Ci;O.ordinal=Fi;O.preparse=Hr;O.postformat=Hr;O.relativeTime=Wi;O.pastFuture=Ui;O.set=Mi;O.eras=vl;O.erasParse=yl;O.erasConvertYear=gl;O.erasAbbrRegex=xl;O.erasNameRegex=kl;O.erasNarrowRegex=Sl;O.months=ts;O.monthsShort=ns;O.monthsParse=rs;O.monthsRegex=os;O.monthsShortRegex=ss;O.week=us;O.firstDayOfYear=ms;O.firstDayOfWeek=ds;O.weekdays=xs;O.weekdaysMin=Os;O.weekdaysShort=Ss;O.weekdaysParse=Ds;O.weekdaysRegex=As;O.weekdaysShortRegex=Ns;O.weekdaysMinRegex=Is;O.isPM=Es;O.meridiem=Ls;function $t(e,t,n,a){var r=be(),i=le().set(a,t);return r[n](i,e)}function $r(e,t,n){if(ve(e)&&(t=e,e=void 0),e=e||"",t!=null)return $t(e,t,n,"month");var a,r=[];for(a=0;a<12;a++)r[a]=$t(e,a,n,"month");return r}function fa(e,t,n,a){typeof e=="boolean"?(ve(t)&&(n=t,t=void 0),t=t||""):(t=e,n=t,e=!1,ve(t)&&(n=t,t=void 0),t=t||"");var r=be(),i=e?r._week.dow:0,s,o=[];if(n!=null)return $t(t,(n+i)%7,a,"day");for(s=0;s<7;s++)o[s]=$t(t,(s+i)%7,a,"day");return o}function $l(e,t){return $r(e,t,"months")}function Gl(e,t){return $r(e,t,"monthsShort")}function Vl(e,t,n){return fa(e,t,n,"weekdays")}function Zl(e,t,n){return fa(e,t,n,"weekdaysShort")}function Bl(e,t,n){return fa(e,t,n,"weekdaysMin")}De("en",{eras:[{since:"0001-01-01",until:1/0,offset:1,name:"Anno Domini",narrow:"AD",abbr:"AD"},{since:"0000-12-31",until:-1/0,offset:1,name:"Before Christ",narrow:"BC",abbr:"BC"}],dayOfMonthOrdinalParse:/\d{1,2}(th|st|nd|rd)/,ordinal:function(e){var t=e%10,n=_(e%100/10)===1?"th":t===1?"st":t===2?"nd":t===3?"rd":"th";return e+n}});m.lang=K("moment.lang is deprecated. Use moment.locale instead.",De);m.langData=K("moment.langData is deprecated. Use moment.localeData instead.",be);var ue=Math.abs;function Xl(){var e=this._data;return this._milliseconds=ue(this._milliseconds),this._days=ue(this._days),this._months=ue(this._months),e.milliseconds=ue(e.milliseconds),e.seconds=ue(e.seconds),e.minutes=ue(e.minutes),e.hours=ue(e.hours),e.months=ue(e.months),e.years=ue(e.years),this}function Gr(e,t,n,a){var r=re(t,n);return e._milliseconds+=a*r._milliseconds,e._days+=a*r._days,e._months+=a*r._months,e._bubble()}function ql(e,t){return Gr(this,e,t,1)}function Jl(e,t){return Gr(this,e,t,-1)}function Da(e){return e<0?Math.floor(e):Math.ceil(e)}function Kl(){var e=this._milliseconds,t=this._days,n=this._months,a=this._data,r,i,s,o,l;return e>=0&&t>=0&&n>=0||e<=0&&t<=0&&n<=0||(e+=Da(Tn(n)+t)*864e5,t=0,n=0),a.milliseconds=e%1e3,r=J(e/1e3),a.seconds=r%60,i=J(r/60),a.minutes=i%60,s=J(i/60),a.hours=s%24,t+=J(s/24),l=J(Vr(t)),n+=l,t-=Da(Tn(l)),o=J(n/12),n%=12,a.days=t,a.months=n,a.years=o,this}function Vr(e){return e*4800/146097}function Tn(e){return e*146097/4800}function Ql(e){if(!this.isValid())return NaN;var t,n,a=this._milliseconds;if(e=Q(e),e==="month"||e==="quarter"||e==="year")switch(t=this._days+a/864e5,n=this._months+Vr(t),e){case"month":return n;case"quarter":return n/3;case"year":return n/12}else switch(t=this._days+Math.round(Tn(this._months)),e){case"week":return t/7+a/6048e5;case"day":return t+a/864e5;case"hour":return t*24+a/36e5;case"minute":return t*1440+a/6e4;case"second":return t*86400+a/1e3;case"millisecond":return Math.floor(t*864e5)+a;default:throw new Error("Unknown unit "+e)}}function ef(){return this.isValid()?this._milliseconds+this._days*864e5+this._months%12*2592e6+_(this._months/12)*31536e6:NaN}function _e(e){return function(){return this.as(e)}}var tf=_e("ms"),nf=_e("s"),af=_e("m"),rf=_e("h"),sf=_e("d"),of=_e("w"),lf=_e("M"),ff=_e("Q"),uf=_e("y");function cf(){return re(this)}function df(e){return e=Q(e),this.isValid()?this[e+"s"]():NaN}function Ue(e){return function(){return this.isValid()?this._data[e]:NaN}}var mf=Ue("milliseconds"),hf=Ue("seconds"),vf=Ue("minutes"),yf=Ue("hours"),gf=Ue("days"),pf=Ue("months"),bf=Ue("years");function _f(){return J(this.days()/7)}var ce=Math.round,He={ss:44,s:45,m:45,h:22,d:26,w:null,M:11};function wf(e,t,n,a,r){return r.relativeTime(t||1,!!n,e,a)}function kf(e,t,n,a){var r=re(e).abs(),i=ce(r.as("s")),s=ce(r.as("m")),o=ce(r.as("h")),l=ce(r.as("d")),f=ce(r.as("M")),u=ce(r.as("w")),d=ce(r.as("y")),p=i<=n.ss&&["s",i]||i<n.s&&["ss",i]||s<=1&&["m"]||s<n.m&&["mm",s]||o<=1&&["h"]||o<n.h&&["hh",o]||l<=1&&["d"]||l<n.d&&["dd",l];return n.w!=null&&(p=p||u<=1&&["w"]||u<n.w&&["ww",u]),p=p||f<=1&&["M"]||f<n.M&&["MM",f]||d<=1&&["y"]||["yy",d],p[2]=t,p[3]=+e>0,p[4]=a,wf.apply(null,p)}function xf(e){return e===void 0?ce:typeof e=="function"?(ce=e,!0):!1}function Sf(e,t){return He[e]===void 0?!1:t===void 0?He[e]:(He[e]=t,e==="s"&&(He.ss=t-1),!0)}function Of(e,t){if(!this.isValid())return this.localeData().invalidDate();var n=!1,a=He,r,i;return typeof e=="object"&&(t=e,e=!1),typeof e=="boolean"&&(n=e),typeof t=="object"&&(a=Object.assign({},He,t),t.s!=null&&t.ss==null&&(a.ss=t.s-1)),r=this.localeData(),i=kf(this,!n,a,r),n&&(i=r.pastFuture(+this,i)),r.postformat(i)}var gn=Math.abs;function je(e){return(e>0)-(e<0)||+e}function on(){if(!this.isValid())return this.localeData().invalidDate();var e=gn(this._milliseconds)/1e3,t=gn(this._days),n=gn(this._months),a,r,i,s,o=this.asSeconds(),l,f,u,d;return o?(a=J(e/60),r=J(a/60),e%=60,a%=60,i=J(n/12),n%=12,s=e?e.toFixed(3).replace(/\.?0+$/,""):"",l=o<0?"-":"",f=je(this._months)!==je(o)?"-":"",u=je(this._days)!==je(o)?"-":"",d=je(this._milliseconds)!==je(o)?"-":"",l+"P"+(i?f+i+"Y":"")+(n?f+n+"M":"")+(t?u+t+"D":"")+(r||a||e?"T":"")+(r?d+r+"H":"")+(a?d+a+"M":"")+(e?d+s+"S":"")):"P0D"}var x=rn.prototype;x.isValid=yo;x.abs=Xl;x.add=ql;x.subtract=Jl;x.as=Ql;x.asMilliseconds=tf;x.asSeconds=nf;x.asMinutes=af;x.asHours=rf;x.asDays=sf;x.asWeeks=of;x.asMonths=lf;x.asQuarters=ff;x.asYears=uf;x.valueOf=ef;x._bubble=Kl;x.clone=cf;x.get=df;x.milliseconds=mf;x.seconds=hf;x.minutes=vf;x.hours=yf;x.days=gf;x.weeks=_f;x.months=pf;x.years=bf;x.humanize=Of;x.toISOString=on;x.toString=on;x.toJSON=on;x.locale=Cr;x.localeData=Rr;x.toIsoString=K("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)",on);x.lang=Er;g("X",0,0,"unix");g("x",0,0,"valueOf");v("x",en);v("X",Gi);M("X",function(e,t,n){n._d=new Date(parseFloat(e)*1e3)});M("x",function(e,t,n){n._d=new Date(_(e))});//! moment.js
m.version="2.29.4";Si(T);m.fn=c;m.min=co;m.max=mo;m.now=ho;m.utc=le;m.unix=zl;m.months=$l;m.isDate=yt;m.locale=De;m.invalid=Xt;m.duration=re;m.isMoment=ae;m.weekdays=Vl;m.parseZone=Hl;m.localeData=be;m.isDuration=Et;m.monthsShort=Gl;m.weekdaysMin=Bl;m.defineLocale=ta;m.updateLocale=zs;m.locales=Hs;m.weekdaysShort=Zl;m.normalizeUnits=Q;m.relativeTimeRounding=xf;m.relativeTimeThreshold=Sf;m.calendarFormat=Wo;m.prototype=c;m.HTML5_FMT={DATETIME_LOCAL:"YYYY-MM-DDTHH:mm",DATETIME_LOCAL_SECONDS:"YYYY-MM-DDTHH:mm:ss",DATETIME_LOCAL_MS:"YYYY-MM-DDTHH:mm:ss.SSS",DATE:"YYYY-MM-DD",TIME:"HH:mm",TIME_SECONDS:"HH:mm:ss",TIME_MS:"HH:mm:ss.SSS",WEEK:"GGGG-[W]WW",MONTH:"YYYY-MM"};function Ya(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function h(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Ya(Object(n),!0).forEach(function(a){W(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ya(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Gt(e){"@babel/helpers - typeof";return Gt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Gt(e)}function Mf(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function Ta(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}function Df(e,t,n){return t&&Ta(e.prototype,t),n&&Ta(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ua(e,t){return Tf(e)||Af(e,t)||Zr(e,t)||If()}function _t(e){return Yf(e)||Pf(e)||Zr(e)||Nf()}function Yf(e){if(Array.isArray(e))return Pn(e)}function Tf(e){if(Array.isArray(e))return e}function Pf(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Af(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var a=[],r=!0,i=!1,s,o;try{for(n=n.call(e);!(r=(s=n.next()).done)&&(a.push(s.value),!(t&&a.length===t));r=!0);}catch(l){i=!0,o=l}finally{try{!r&&n.return!=null&&n.return()}finally{if(i)throw o}}return a}}function Zr(e,t){if(e){if(typeof e=="string")return Pn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Pn(e,t)}}function Pn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function Nf(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function If(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var Pa=function(){},ca={},Br={},Xr=null,qr={mark:Pa,measure:Pa};try{typeof window<"u"&&(ca=window),typeof document<"u"&&(Br=document),typeof MutationObserver<"u"&&(Xr=MutationObserver),typeof performance<"u"&&(qr=performance)}catch{}var Cf=ca.navigator||{},Aa=Cf.userAgent,Na=Aa===void 0?"":Aa,Ye=ca,Y=Br,Ia=Xr,Ot=qr;Ye.document;var we=!!Y.documentElement&&!!Y.head&&typeof Y.addEventListener=="function"&&typeof Y.createElement=="function",Jr=~Na.indexOf("MSIE")||~Na.indexOf("Trident/"),Mt,Dt,Yt,Tt,Pt,ye="___FONT_AWESOME___",An=16,Kr="fa",Qr="svg-inline--fa",Le="data-fa-i2svg",Nn="data-fa-pseudo-element",Ef="data-fa-pseudo-element-pending",da="data-prefix",ma="data-icon",Ca="fontawesome-i2svg",Rf="async",Ff=["HTML","HEAD","STYLE","SCRIPT"],ei=function(){try{return!0}catch{return!1}}(),D="classic",N="sharp",ha=[D,N];function wt(e){return new Proxy(e,{get:function(n,a){return a in n?n[a]:n[D]}})}var ct=wt((Mt={},W(Mt,D,{fa:"solid",fas:"solid","fa-solid":"solid",far:"regular","fa-regular":"regular",fal:"light","fa-light":"light",fat:"thin","fa-thin":"thin",fad:"duotone","fa-duotone":"duotone",fab:"brands","fa-brands":"brands",fak:"kit","fa-kit":"kit"}),W(Mt,N,{fa:"solid",fass:"solid","fa-solid":"solid",fasr:"regular","fa-regular":"regular",fasl:"light","fa-light":"light"}),Mt)),dt=wt((Dt={},W(Dt,D,{solid:"fas",regular:"far",light:"fal",thin:"fat",duotone:"fad",brands:"fab",kit:"fak"}),W(Dt,N,{solid:"fass",regular:"fasr",light:"fasl"}),Dt)),mt=wt((Yt={},W(Yt,D,{fab:"fa-brands",fad:"fa-duotone",fak:"fa-kit",fal:"fa-light",far:"fa-regular",fas:"fa-solid",fat:"fa-thin"}),W(Yt,N,{fass:"fa-solid",fasr:"fa-regular",fasl:"fa-light"}),Yt)),Lf=wt((Tt={},W(Tt,D,{"fa-brands":"fab","fa-duotone":"fad","fa-kit":"fak","fa-light":"fal","fa-regular":"far","fa-solid":"fas","fa-thin":"fat"}),W(Tt,N,{"fa-solid":"fass","fa-regular":"fasr","fa-light":"fasl"}),Tt)),Wf=/fa(s|r|l|t|d|b|k|ss|sr|sl)?[\-\ ]/,ti="fa-layers-text",Uf=/Font ?Awesome ?([56 ]*)(Solid|Regular|Light|Thin|Duotone|Brands|Free|Pro|Sharp|Kit)?.*/i,jf=wt((Pt={},W(Pt,D,{900:"fas",400:"far",normal:"far",300:"fal",100:"fat"}),W(Pt,N,{900:"fass",400:"fasr",300:"fasl"}),Pt)),ni=[1,2,3,4,5,6,7,8,9,10],zf=ni.concat([11,12,13,14,15,16,17,18,19,20]),Hf=["class","data-prefix","data-icon","data-fa-transform","data-fa-mask"],Ee={GROUP:"duotone-group",SWAP_OPACITY:"swap-opacity",PRIMARY:"primary",SECONDARY:"secondary"},ht=new Set;Object.keys(dt[D]).map(ht.add.bind(ht));Object.keys(dt[N]).map(ht.add.bind(ht));var $f=[].concat(ha,_t(ht),["2xs","xs","sm","lg","xl","2xl","beat","border","fade","beat-fade","bounce","flip-both","flip-horizontal","flip-vertical","flip","fw","inverse","layers-counter","layers-text","layers","li","pull-left","pull-right","pulse","rotate-180","rotate-270","rotate-90","rotate-by","shake","spin-pulse","spin-reverse","spin","stack-1x","stack-2x","stack","ul",Ee.GROUP,Ee.SWAP_OPACITY,Ee.PRIMARY,Ee.SECONDARY]).concat(ni.map(function(e){return"".concat(e,"x")})).concat(zf.map(function(e){return"w-".concat(e)})),st=Ye.FontAwesomeConfig||{};function Gf(e){var t=Y.querySelector("script["+e+"]");if(t)return t.getAttribute(e)}function Vf(e){return e===""?!0:e==="false"?!1:e==="true"?!0:e}if(Y&&typeof Y.querySelector=="function"){var Zf=[["data-family-prefix","familyPrefix"],["data-css-prefix","cssPrefix"],["data-family-default","familyDefault"],["data-style-default","styleDefault"],["data-replacement-class","replacementClass"],["data-auto-replace-svg","autoReplaceSvg"],["data-auto-add-css","autoAddCss"],["data-auto-a11y","autoA11y"],["data-search-pseudo-elements","searchPseudoElements"],["data-observe-mutations","observeMutations"],["data-mutate-approach","mutateApproach"],["data-keep-original-source","keepOriginalSource"],["data-measure-performance","measurePerformance"],["data-show-missing-icons","showMissingIcons"]];Zf.forEach(function(e){var t=ua(e,2),n=t[0],a=t[1],r=Vf(Gf(n));r!=null&&(st[a]=r)})}var ai={styleDefault:"solid",familyDefault:"classic",cssPrefix:Kr,replacementClass:Qr,autoReplaceSvg:!0,autoAddCss:!0,autoA11y:!0,searchPseudoElements:!1,observeMutations:!0,mutateApproach:"async",keepOriginalSource:!0,measurePerformance:!1,showMissingIcons:!0};st.familyPrefix&&(st.cssPrefix=st.familyPrefix);var Je=h(h({},ai),st);Je.autoReplaceSvg||(Je.observeMutations=!1);var y={};Object.keys(ai).forEach(function(e){Object.defineProperty(y,e,{enumerable:!0,set:function(n){Je[e]=n,ot.forEach(function(a){return a(y)})},get:function(){return Je[e]}})});Object.defineProperty(y,"familyPrefix",{enumerable:!0,set:function(t){Je.cssPrefix=t,ot.forEach(function(n){return n(y)})},get:function(){return Je.cssPrefix}});Ye.FontAwesomeConfig=y;var ot=[];function Bf(e){return ot.push(e),function(){ot.splice(ot.indexOf(e),1)}}var xe=An,se={size:16,x:0,y:0,rotate:0,flipX:!1,flipY:!1};function Xf(e){if(!(!e||!we)){var t=Y.createElement("style");t.setAttribute("type","text/css"),t.innerHTML=e;for(var n=Y.head.childNodes,a=null,r=n.length-1;r>-1;r--){var i=n[r],s=(i.tagName||"").toUpperCase();["STYLE","LINK"].indexOf(s)>-1&&(a=i)}return Y.head.insertBefore(t,a),e}}var qf="0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";function vt(){for(var e=12,t="";e-- >0;)t+=qf[Math.random()*62|0];return t}function et(e){for(var t=[],n=(e||[]).length>>>0;n--;)t[n]=e[n];return t}function va(e){return e.classList?et(e.classList):(e.getAttribute("class")||"").split(" ").filter(function(t){return t})}function ri(e){return"".concat(e).replace(/&/g,"&amp;").replace(/"/g,"&quot;").replace(/'/g,"&#39;").replace(/</g,"&lt;").replace(/>/g,"&gt;")}function Jf(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,'="').concat(ri(e[n]),'" ')},"").trim()}function ln(e){return Object.keys(e||{}).reduce(function(t,n){return t+"".concat(n,": ").concat(e[n].trim(),";")},"")}function ya(e){return e.size!==se.size||e.x!==se.x||e.y!==se.y||e.rotate!==se.rotate||e.flipX||e.flipY}function Kf(e){var t=e.transform,n=e.containerWidth,a=e.iconWidth,r={transform:"translate(".concat(n/2," 256)")},i="translate(".concat(t.x*32,", ").concat(t.y*32,") "),s="scale(".concat(t.size/16*(t.flipX?-1:1),", ").concat(t.size/16*(t.flipY?-1:1),") "),o="rotate(".concat(t.rotate," 0 0)"),l={transform:"".concat(i," ").concat(s," ").concat(o)},f={transform:"translate(".concat(a/2*-1," -256)")};return{outer:r,inner:l,path:f}}function Qf(e){var t=e.transform,n=e.width,a=n===void 0?An:n,r=e.height,i=r===void 0?An:r,s=e.startCentered,o=s===void 0?!1:s,l="";return o&&Jr?l+="translate(".concat(t.x/xe-a/2,"em, ").concat(t.y/xe-i/2,"em) "):o?l+="translate(calc(-50% + ".concat(t.x/xe,"em), calc(-50% + ").concat(t.y/xe,"em)) "):l+="translate(".concat(t.x/xe,"em, ").concat(t.y/xe,"em) "),l+="scale(".concat(t.size/xe*(t.flipX?-1:1),", ").concat(t.size/xe*(t.flipY?-1:1),") "),l+="rotate(".concat(t.rotate,"deg) "),l}var eu=`:root, :host {
  --fa-font-solid: normal 900 1em/1 "Font Awesome 6 Solid";
  --fa-font-regular: normal 400 1em/1 "Font Awesome 6 Regular";
  --fa-font-light: normal 300 1em/1 "Font Awesome 6 Light";
  --fa-font-thin: normal 100 1em/1 "Font Awesome 6 Thin";
  --fa-font-duotone: normal 900 1em/1 "Font Awesome 6 Duotone";
  --fa-font-sharp-solid: normal 900 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-regular: normal 400 1em/1 "Font Awesome 6 Sharp";
  --fa-font-sharp-light: normal 300 1em/1 "Font Awesome 6 Sharp";
  --fa-font-brands: normal 400 1em/1 "Font Awesome 6 Brands";
}

svg:not(:root).svg-inline--fa, svg:not(:host).svg-inline--fa {
  overflow: visible;
  box-sizing: content-box;
}

.svg-inline--fa {
  display: var(--fa-display, inline-block);
  height: 1em;
  overflow: visible;
  vertical-align: -0.125em;
}
.svg-inline--fa.fa-2xs {
  vertical-align: 0.1em;
}
.svg-inline--fa.fa-xs {
  vertical-align: 0em;
}
.svg-inline--fa.fa-sm {
  vertical-align: -0.0714285705em;
}
.svg-inline--fa.fa-lg {
  vertical-align: -0.2em;
}
.svg-inline--fa.fa-xl {
  vertical-align: -0.25em;
}
.svg-inline--fa.fa-2xl {
  vertical-align: -0.3125em;
}
.svg-inline--fa.fa-pull-left {
  margin-right: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-pull-right {
  margin-left: var(--fa-pull-margin, 0.3em);
  width: auto;
}
.svg-inline--fa.fa-li {
  width: var(--fa-li-width, 2em);
  top: 0.25em;
}
.svg-inline--fa.fa-fw {
  width: var(--fa-fw-width, 1.25em);
}

.fa-layers svg.svg-inline--fa {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
}

.fa-layers-counter, .fa-layers-text {
  display: inline-block;
  position: absolute;
  text-align: center;
}

.fa-layers {
  display: inline-block;
  height: 1em;
  position: relative;
  text-align: center;
  vertical-align: -0.125em;
  width: 1em;
}
.fa-layers svg.svg-inline--fa {
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-text {
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
          transform: translate(-50%, -50%);
  -webkit-transform-origin: center center;
          transform-origin: center center;
}

.fa-layers-counter {
  background-color: var(--fa-counter-background-color, #ff253a);
  border-radius: var(--fa-counter-border-radius, 1em);
  box-sizing: border-box;
  color: var(--fa-inverse, #fff);
  line-height: var(--fa-counter-line-height, 1);
  max-width: var(--fa-counter-max-width, 5em);
  min-width: var(--fa-counter-min-width, 1.5em);
  overflow: hidden;
  padding: var(--fa-counter-padding, 0.25em 0.5em);
  right: var(--fa-right, 0);
  text-overflow: ellipsis;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-counter-scale, 0.25));
          transform: scale(var(--fa-counter-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-bottom-right {
  bottom: var(--fa-bottom, 0);
  right: var(--fa-right, 0);
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom right;
          transform-origin: bottom right;
}

.fa-layers-bottom-left {
  bottom: var(--fa-bottom, 0);
  left: var(--fa-left, 0);
  right: auto;
  top: auto;
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: bottom left;
          transform-origin: bottom left;
}

.fa-layers-top-right {
  top: var(--fa-top, 0);
  right: var(--fa-right, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top right;
          transform-origin: top right;
}

.fa-layers-top-left {
  left: var(--fa-left, 0);
  right: auto;
  top: var(--fa-top, 0);
  -webkit-transform: scale(var(--fa-layers-scale, 0.25));
          transform: scale(var(--fa-layers-scale, 0.25));
  -webkit-transform-origin: top left;
          transform-origin: top left;
}

.fa-1x {
  font-size: 1em;
}

.fa-2x {
  font-size: 2em;
}

.fa-3x {
  font-size: 3em;
}

.fa-4x {
  font-size: 4em;
}

.fa-5x {
  font-size: 5em;
}

.fa-6x {
  font-size: 6em;
}

.fa-7x {
  font-size: 7em;
}

.fa-8x {
  font-size: 8em;
}

.fa-9x {
  font-size: 9em;
}

.fa-10x {
  font-size: 10em;
}

.fa-2xs {
  font-size: 0.625em;
  line-height: 0.1em;
  vertical-align: 0.225em;
}

.fa-xs {
  font-size: 0.75em;
  line-height: 0.0833333337em;
  vertical-align: 0.125em;
}

.fa-sm {
  font-size: 0.875em;
  line-height: 0.0714285718em;
  vertical-align: 0.0535714295em;
}

.fa-lg {
  font-size: 1.25em;
  line-height: 0.05em;
  vertical-align: -0.075em;
}

.fa-xl {
  font-size: 1.5em;
  line-height: 0.0416666682em;
  vertical-align: -0.125em;
}

.fa-2xl {
  font-size: 2em;
  line-height: 0.03125em;
  vertical-align: -0.1875em;
}

.fa-fw {
  text-align: center;
  width: 1.25em;
}

.fa-ul {
  list-style-type: none;
  margin-left: var(--fa-li-margin, 2.5em);
  padding-left: 0;
}
.fa-ul > li {
  position: relative;
}

.fa-li {
  left: calc(var(--fa-li-width, 2em) * -1);
  position: absolute;
  text-align: center;
  width: var(--fa-li-width, 2em);
  line-height: inherit;
}

.fa-border {
  border-color: var(--fa-border-color, #eee);
  border-radius: var(--fa-border-radius, 0.1em);
  border-style: var(--fa-border-style, solid);
  border-width: var(--fa-border-width, 0.08em);
  padding: var(--fa-border-padding, 0.2em 0.25em 0.15em);
}

.fa-pull-left {
  float: left;
  margin-right: var(--fa-pull-margin, 0.3em);
}

.fa-pull-right {
  float: right;
  margin-left: var(--fa-pull-margin, 0.3em);
}

.fa-beat {
  -webkit-animation-name: fa-beat;
          animation-name: fa-beat;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-bounce {
  -webkit-animation-name: fa-bounce;
          animation-name: fa-bounce;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.28, 0.84, 0.42, 1));
}

.fa-fade {
  -webkit-animation-name: fa-fade;
          animation-name: fa-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-beat-fade {
  -webkit-animation-name: fa-beat-fade;
          animation-name: fa-beat-fade;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
          animation-timing-function: var(--fa-animation-timing, cubic-bezier(0.4, 0, 0.6, 1));
}

.fa-flip {
  -webkit-animation-name: fa-flip;
          animation-name: fa-flip;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, ease-in-out);
          animation-timing-function: var(--fa-animation-timing, ease-in-out);
}

.fa-shake {
  -webkit-animation-name: fa-shake;
          animation-name: fa-shake;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-delay: var(--fa-animation-delay, 0s);
          animation-delay: var(--fa-animation-delay, 0s);
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 2s);
          animation-duration: var(--fa-animation-duration, 2s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, linear);
          animation-timing-function: var(--fa-animation-timing, linear);
}

.fa-spin-reverse {
  --fa-animation-direction: reverse;
}

.fa-pulse,
.fa-spin-pulse {
  -webkit-animation-name: fa-spin;
          animation-name: fa-spin;
  -webkit-animation-direction: var(--fa-animation-direction, normal);
          animation-direction: var(--fa-animation-direction, normal);
  -webkit-animation-duration: var(--fa-animation-duration, 1s);
          animation-duration: var(--fa-animation-duration, 1s);
  -webkit-animation-iteration-count: var(--fa-animation-iteration-count, infinite);
          animation-iteration-count: var(--fa-animation-iteration-count, infinite);
  -webkit-animation-timing-function: var(--fa-animation-timing, steps(8));
          animation-timing-function: var(--fa-animation-timing, steps(8));
}

@media (prefers-reduced-motion: reduce) {
  .fa-beat,
.fa-bounce,
.fa-fade,
.fa-beat-fade,
.fa-flip,
.fa-pulse,
.fa-shake,
.fa-spin,
.fa-spin-pulse {
    -webkit-animation-delay: -1ms;
            animation-delay: -1ms;
    -webkit-animation-duration: 1ms;
            animation-duration: 1ms;
    -webkit-animation-iteration-count: 1;
            animation-iteration-count: 1;
    -webkit-transition-delay: 0s;
            transition-delay: 0s;
    -webkit-transition-duration: 0s;
            transition-duration: 0s;
  }
}
@-webkit-keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@keyframes fa-beat {
  0%, 90% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  45% {
    -webkit-transform: scale(var(--fa-beat-scale, 1.25));
            transform: scale(var(--fa-beat-scale, 1.25));
  }
}
@-webkit-keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@keyframes fa-bounce {
  0% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  10% {
    -webkit-transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
            transform: scale(var(--fa-bounce-start-scale-x, 1.1), var(--fa-bounce-start-scale-y, 0.9)) translateY(0);
  }
  30% {
    -webkit-transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
            transform: scale(var(--fa-bounce-jump-scale-x, 0.9), var(--fa-bounce-jump-scale-y, 1.1)) translateY(var(--fa-bounce-height, -0.5em));
  }
  50% {
    -webkit-transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
            transform: scale(var(--fa-bounce-land-scale-x, 1.05), var(--fa-bounce-land-scale-y, 0.95)) translateY(0);
  }
  57% {
    -webkit-transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
            transform: scale(1, 1) translateY(var(--fa-bounce-rebound, -0.125em));
  }
  64% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
  100% {
    -webkit-transform: scale(1, 1) translateY(0);
            transform: scale(1, 1) translateY(0);
  }
}
@-webkit-keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@keyframes fa-fade {
  50% {
    opacity: var(--fa-fade-opacity, 0.4);
  }
}
@-webkit-keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@keyframes fa-beat-fade {
  0%, 100% {
    opacity: var(--fa-beat-fade-opacity, 0.4);
    -webkit-transform: scale(1);
            transform: scale(1);
  }
  50% {
    opacity: 1;
    -webkit-transform: scale(var(--fa-beat-fade-scale, 1.125));
            transform: scale(var(--fa-beat-fade-scale, 1.125));
  }
}
@-webkit-keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@keyframes fa-flip {
  50% {
    -webkit-transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
            transform: rotate3d(var(--fa-flip-x, 0), var(--fa-flip-y, 1), var(--fa-flip-z, 0), var(--fa-flip-angle, -180deg));
  }
}
@-webkit-keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@keyframes fa-shake {
  0% {
    -webkit-transform: rotate(-15deg);
            transform: rotate(-15deg);
  }
  4% {
    -webkit-transform: rotate(15deg);
            transform: rotate(15deg);
  }
  8%, 24% {
    -webkit-transform: rotate(-18deg);
            transform: rotate(-18deg);
  }
  12%, 28% {
    -webkit-transform: rotate(18deg);
            transform: rotate(18deg);
  }
  16% {
    -webkit-transform: rotate(-22deg);
            transform: rotate(-22deg);
  }
  20% {
    -webkit-transform: rotate(22deg);
            transform: rotate(22deg);
  }
  32% {
    -webkit-transform: rotate(-12deg);
            transform: rotate(-12deg);
  }
  36% {
    -webkit-transform: rotate(12deg);
            transform: rotate(12deg);
  }
  40%, 100% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
}
@-webkit-keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
@keyframes fa-spin {
  0% {
    -webkit-transform: rotate(0deg);
            transform: rotate(0deg);
  }
  100% {
    -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
  }
}
.fa-rotate-90 {
  -webkit-transform: rotate(90deg);
          transform: rotate(90deg);
}

.fa-rotate-180 {
  -webkit-transform: rotate(180deg);
          transform: rotate(180deg);
}

.fa-rotate-270 {
  -webkit-transform: rotate(270deg);
          transform: rotate(270deg);
}

.fa-flip-horizontal {
  -webkit-transform: scale(-1, 1);
          transform: scale(-1, 1);
}

.fa-flip-vertical {
  -webkit-transform: scale(1, -1);
          transform: scale(1, -1);
}

.fa-flip-both,
.fa-flip-horizontal.fa-flip-vertical {
  -webkit-transform: scale(-1, -1);
          transform: scale(-1, -1);
}

.fa-rotate-by {
  -webkit-transform: rotate(var(--fa-rotate-angle, none));
          transform: rotate(var(--fa-rotate-angle, none));
}

.fa-stack {
  display: inline-block;
  vertical-align: middle;
  height: 2em;
  position: relative;
  width: 2.5em;
}

.fa-stack-1x,
.fa-stack-2x {
  bottom: 0;
  left: 0;
  margin: auto;
  position: absolute;
  right: 0;
  top: 0;
  z-index: var(--fa-stack-z-index, auto);
}

.svg-inline--fa.fa-stack-1x {
  height: 1em;
  width: 1.25em;
}
.svg-inline--fa.fa-stack-2x {
  height: 2em;
  width: 2.5em;
}

.fa-inverse {
  color: var(--fa-inverse, #fff);
}

.sr-only,
.fa-sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.sr-only-focusable:not(:focus),
.fa-sr-only-focusable:not(:focus) {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}

.svg-inline--fa .fa-primary {
  fill: var(--fa-primary-color, currentColor);
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa .fa-secondary {
  fill: var(--fa-secondary-color, currentColor);
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-primary {
  opacity: var(--fa-secondary-opacity, 0.4);
}

.svg-inline--fa.fa-swap-opacity .fa-secondary {
  opacity: var(--fa-primary-opacity, 1);
}

.svg-inline--fa mask .fa-primary,
.svg-inline--fa mask .fa-secondary {
  fill: black;
}

.fad.fa-inverse,
.fa-duotone.fa-inverse {
  color: var(--fa-inverse, #fff);
}`;function ii(){var e=Kr,t=Qr,n=y.cssPrefix,a=y.replacementClass,r=eu;if(n!==e||a!==t){var i=new RegExp("\\.".concat(e,"\\-"),"g"),s=new RegExp("\\--".concat(e,"\\-"),"g"),o=new RegExp("\\.".concat(t),"g");r=r.replace(i,".".concat(n,"-")).replace(s,"--".concat(n,"-")).replace(o,".".concat(a))}return r}var Ea=!1;function pn(){y.autoAddCss&&!Ea&&(Xf(ii()),Ea=!0)}var tu={mixout:function(){return{dom:{css:ii,insertCss:pn}}},hooks:function(){return{beforeDOMElementCreation:function(){pn()},beforeI2svg:function(){pn()}}}},ge=Ye||{};ge[ye]||(ge[ye]={});ge[ye].styles||(ge[ye].styles={});ge[ye].hooks||(ge[ye].hooks={});ge[ye].shims||(ge[ye].shims=[]);var te=ge[ye],si=[],nu=function e(){Y.removeEventListener("DOMContentLoaded",e),Vt=1,si.map(function(t){return t()})},Vt=!1;we&&(Vt=(Y.documentElement.doScroll?/^loaded|^c/:/^loaded|^i|^c/).test(Y.readyState),Vt||Y.addEventListener("DOMContentLoaded",nu));function au(e){we&&(Vt?setTimeout(e,0):si.push(e))}function kt(e){var t=e.tag,n=e.attributes,a=n===void 0?{}:n,r=e.children,i=r===void 0?[]:r;return typeof e=="string"?ri(e):"<".concat(t," ").concat(Jf(a),">").concat(i.map(kt).join(""),"</").concat(t,">")}function Ra(e,t,n){if(e&&e[t]&&e[t][n])return{prefix:t,iconName:n,icon:e[t][n]}}var ru=function(t,n){return function(a,r,i,s){return t.call(n,a,r,i,s)}},bn=function(t,n,a,r){var i=Object.keys(t),s=i.length,o=r!==void 0?ru(n,r):n,l,f,u;for(a===void 0?(l=1,u=t[i[0]]):(l=0,u=a);l<s;l++)f=i[l],u=o(u,t[f],f,t);return u};function iu(e){for(var t=[],n=0,a=e.length;n<a;){var r=e.charCodeAt(n++);if(r>=55296&&r<=56319&&n<a){var i=e.charCodeAt(n++);(i&64512)==56320?t.push(((r&1023)<<10)+(i&1023)+65536):(t.push(r),n--)}else t.push(r)}return t}function In(e){var t=iu(e);return t.length===1?t[0].toString(16):null}function su(e,t){var n=e.length,a=e.charCodeAt(t),r;return a>=55296&&a<=56319&&n>t+1&&(r=e.charCodeAt(t+1),r>=56320&&r<=57343)?(a-55296)*1024+r-56320+65536:a}function Fa(e){return Object.keys(e).reduce(function(t,n){var a=e[n],r=!!a.icon;return r?t[a.iconName]=a.icon:t[n]=a,t},{})}function Cn(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{},a=n.skipHooks,r=a===void 0?!1:a,i=Fa(t);typeof te.hooks.addPack=="function"&&!r?te.hooks.addPack(e,Fa(t)):te.styles[e]=h(h({},te.styles[e]||{}),i),e==="fas"&&Cn("fa",t)}var At,Nt,It,$e=te.styles,ou=te.shims,lu=(At={},W(At,D,Object.values(mt[D])),W(At,N,Object.values(mt[N])),At),ga=null,oi={},li={},fi={},ui={},ci={},fu=(Nt={},W(Nt,D,Object.keys(ct[D])),W(Nt,N,Object.keys(ct[N])),Nt);function uu(e){return~$f.indexOf(e)}function cu(e,t){var n=t.split("-"),a=n[0],r=n.slice(1).join("-");return a===e&&r!==""&&!uu(r)?r:null}var di=function(){var t=function(i){return bn($e,function(s,o,l){return s[l]=bn(o,i,{}),s},{})};oi=t(function(r,i,s){if(i[3]&&(r[i[3]]=s),i[2]){var o=i[2].filter(function(l){return typeof l=="number"});o.forEach(function(l){r[l.toString(16)]=s})}return r}),li=t(function(r,i,s){if(r[s]=s,i[2]){var o=i[2].filter(function(l){return typeof l=="string"});o.forEach(function(l){r[l]=s})}return r}),ci=t(function(r,i,s){var o=i[2];return r[s]=s,o.forEach(function(l){r[l]=s}),r});var n="far"in $e||y.autoFetchSvg,a=bn(ou,function(r,i){var s=i[0],o=i[1],l=i[2];return o==="far"&&!n&&(o="fas"),typeof s=="string"&&(r.names[s]={prefix:o,iconName:l}),typeof s=="number"&&(r.unicodes[s.toString(16)]={prefix:o,iconName:l}),r},{names:{},unicodes:{}});fi=a.names,ui=a.unicodes,ga=fn(y.styleDefault,{family:y.familyDefault})};Bf(function(e){ga=fn(e.styleDefault,{family:y.familyDefault})});di();function pa(e,t){return(oi[e]||{})[t]}function du(e,t){return(li[e]||{})[t]}function Re(e,t){return(ci[e]||{})[t]}function mi(e){return fi[e]||{prefix:null,iconName:null}}function mu(e){var t=ui[e],n=pa("fas",e);return t||(n?{prefix:"fas",iconName:n}:null)||{prefix:null,iconName:null}}function Te(){return ga}var ba=function(){return{prefix:null,iconName:null,rest:[]}};function fn(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.family,a=n===void 0?D:n,r=ct[a][e],i=dt[a][e]||dt[a][r],s=e in te.styles?e:null;return i||s||null}var La=(It={},W(It,D,Object.keys(mt[D])),W(It,N,Object.keys(mt[N])),It);function un(e){var t,n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.skipLookups,r=a===void 0?!1:a,i=(t={},W(t,D,"".concat(y.cssPrefix,"-").concat(D)),W(t,N,"".concat(y.cssPrefix,"-").concat(N)),t),s=null,o=D;(e.includes(i[D])||e.some(function(f){return La[D].includes(f)}))&&(o=D),(e.includes(i[N])||e.some(function(f){return La[N].includes(f)}))&&(o=N);var l=e.reduce(function(f,u){var d=cu(y.cssPrefix,u);if($e[u]?(u=lu[o].includes(u)?Lf[o][u]:u,s=u,f.prefix=u):fu[o].indexOf(u)>-1?(s=u,f.prefix=fn(u,{family:o})):d?f.iconName=d:u!==y.replacementClass&&u!==i[D]&&u!==i[N]&&f.rest.push(u),!r&&f.prefix&&f.iconName){var p=s==="fa"?mi(f.iconName):{},k=Re(f.prefix,f.iconName);p.prefix&&(s=null),f.iconName=p.iconName||k||f.iconName,f.prefix=p.prefix||f.prefix,f.prefix==="far"&&!$e.far&&$e.fas&&!y.autoFetchSvg&&(f.prefix="fas")}return f},ba());return(e.includes("fa-brands")||e.includes("fab"))&&(l.prefix="fab"),(e.includes("fa-duotone")||e.includes("fad"))&&(l.prefix="fad"),!l.prefix&&o===N&&($e.fass||y.autoFetchSvg)&&(l.prefix="fass",l.iconName=Re(l.prefix,l.iconName)||l.iconName),(l.prefix==="fa"||s==="fa")&&(l.prefix=Te()||"fas"),l}var hu=function(){function e(){Mf(this,e),this.definitions={}}return Df(e,[{key:"add",value:function(){for(var n=this,a=arguments.length,r=new Array(a),i=0;i<a;i++)r[i]=arguments[i];var s=r.reduce(this._pullDefinitions,{});Object.keys(s).forEach(function(o){n.definitions[o]=h(h({},n.definitions[o]||{}),s[o]),Cn(o,s[o]);var l=mt[D][o];l&&Cn(l,s[o]),di()})}},{key:"reset",value:function(){this.definitions={}}},{key:"_pullDefinitions",value:function(n,a){var r=a.prefix&&a.iconName&&a.icon?{0:a}:a;return Object.keys(r).map(function(i){var s=r[i],o=s.prefix,l=s.iconName,f=s.icon,u=f[2];n[o]||(n[o]={}),u.length>0&&u.forEach(function(d){typeof d=="string"&&(n[o][d]=f)}),n[o][l]=f}),n}}]),e}(),Wa=[],Ge={},qe={},vu=Object.keys(qe);function yu(e,t){var n=t.mixoutsTo;return Wa=e,Ge={},Object.keys(qe).forEach(function(a){vu.indexOf(a)===-1&&delete qe[a]}),Wa.forEach(function(a){var r=a.mixout?a.mixout():{};if(Object.keys(r).forEach(function(s){typeof r[s]=="function"&&(n[s]=r[s]),Gt(r[s])==="object"&&Object.keys(r[s]).forEach(function(o){n[s]||(n[s]={}),n[s][o]=r[s][o]})}),a.hooks){var i=a.hooks();Object.keys(i).forEach(function(s){Ge[s]||(Ge[s]=[]),Ge[s].push(i[s])})}a.provides&&a.provides(qe)}),n}function En(e,t){for(var n=arguments.length,a=new Array(n>2?n-2:0),r=2;r<n;r++)a[r-2]=arguments[r];var i=Ge[e]||[];return i.forEach(function(s){t=s.apply(null,[t].concat(a))}),t}function We(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),a=1;a<t;a++)n[a-1]=arguments[a];var r=Ge[e]||[];r.forEach(function(i){i.apply(null,n)})}function pe(){var e=arguments[0],t=Array.prototype.slice.call(arguments,1);return qe[e]?qe[e].apply(null,t):void 0}function Rn(e){e.prefix==="fa"&&(e.prefix="fas");var t=e.iconName,n=e.prefix||Te();if(t)return t=Re(n,t)||t,Ra(hi.definitions,n,t)||Ra(te.styles,n,t)}var hi=new hu,gu=function(){y.autoReplaceSvg=!1,y.observeMutations=!1,We("noAuto")},pu={i2svg:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return we?(We("beforeI2svg",t),pe("pseudoElements2svg",t),pe("i2svg",t)):Promise.reject("Operation requires a DOM of some kind.")},watch:function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot;y.autoReplaceSvg===!1&&(y.autoReplaceSvg=!0),y.observeMutations=!0,au(function(){_u({autoReplaceSvgRoot:n}),We("watch",t)})}},bu={icon:function(t){if(t===null)return null;if(Gt(t)==="object"&&t.prefix&&t.iconName)return{prefix:t.prefix,iconName:Re(t.prefix,t.iconName)||t.iconName};if(Array.isArray(t)&&t.length===2){var n=t[1].indexOf("fa-")===0?t[1].slice(3):t[1],a=fn(t[0]);return{prefix:a,iconName:Re(a,n)||n}}if(typeof t=="string"&&(t.indexOf("".concat(y.cssPrefix,"-"))>-1||t.match(Wf))){var r=un(t.split(" "),{skipLookups:!0});return{prefix:r.prefix||Te(),iconName:Re(r.prefix,r.iconName)||r.iconName}}if(typeof t=="string"){var i=Te();return{prefix:i,iconName:Re(i,t)||t}}}},q={noAuto:gu,config:y,dom:pu,parse:bu,library:hi,findIconDefinition:Rn,toHtml:kt},_u=function(){var t=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=t.autoReplaceSvgRoot,a=n===void 0?Y:n;(Object.keys(te.styles).length>0||y.autoFetchSvg)&&we&&y.autoReplaceSvg&&q.dom.i2svg({node:a})};function cn(e,t){return Object.defineProperty(e,"abstract",{get:t}),Object.defineProperty(e,"html",{get:function(){return e.abstract.map(function(a){return kt(a)})}}),Object.defineProperty(e,"node",{get:function(){if(we){var a=Y.createElement("div");return a.innerHTML=e.html,a.children}}}),e}function wu(e){var t=e.children,n=e.main,a=e.mask,r=e.attributes,i=e.styles,s=e.transform;if(ya(s)&&n.found&&!a.found){var o=n.width,l=n.height,f={x:o/l/2,y:.5};r.style=ln(h(h({},i),{},{"transform-origin":"".concat(f.x+s.x/16,"em ").concat(f.y+s.y/16,"em")}))}return[{tag:"svg",attributes:r,children:t}]}function ku(e){var t=e.prefix,n=e.iconName,a=e.children,r=e.attributes,i=e.symbol,s=i===!0?"".concat(t,"-").concat(y.cssPrefix,"-").concat(n):i;return[{tag:"svg",attributes:{style:"display: none;"},children:[{tag:"symbol",attributes:h(h({},r),{},{id:s}),children:a}]}]}function _a(e){var t=e.icons,n=t.main,a=t.mask,r=e.prefix,i=e.iconName,s=e.transform,o=e.symbol,l=e.title,f=e.maskId,u=e.titleId,d=e.extra,p=e.watchable,k=p===void 0?!1:p,R=a.found?a:n,j=R.width,I=R.height,G=r==="fak",C=[y.replacementClass,i?"".concat(y.cssPrefix,"-").concat(i):""].filter(function(ke){return d.classes.indexOf(ke)===-1}).filter(function(ke){return ke!==""||!!ke}).concat(d.classes).join(" "),F={children:[],attributes:h(h({},d.attributes),{},{"data-prefix":r,"data-icon":i,class:C,role:d.attributes.role||"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 ".concat(j," ").concat(I)})},Z=G&&!~d.classes.indexOf("fa-fw")?{width:"".concat(j/I*16*.0625,"em")}:{};k&&(F.attributes[Le]=""),l&&(F.children.push({tag:"title",attributes:{id:F.attributes["aria-labelledby"]||"title-".concat(u||vt())},children:[l]}),delete F.attributes.title);var U=h(h({},F),{},{prefix:r,iconName:i,main:n,mask:a,maskId:f,transform:s,symbol:o,styles:h(h({},Z),d.styles)}),Ae=a.found&&n.found?pe("generateAbstractMask",U)||{children:[],attributes:{}}:pe("generateAbstractIcon",U)||{children:[],attributes:{}},Ne=Ae.children,mn=Ae.attributes;return U.children=Ne,U.attributes=mn,o?ku(U):wu(U)}function Ua(e){var t=e.content,n=e.width,a=e.height,r=e.transform,i=e.title,s=e.extra,o=e.watchable,l=o===void 0?!1:o,f=h(h(h({},s.attributes),i?{title:i}:{}),{},{class:s.classes.join(" ")});l&&(f[Le]="");var u=h({},s.styles);ya(r)&&(u.transform=Qf({transform:r,startCentered:!0,width:n,height:a}),u["-webkit-transform"]=u.transform);var d=ln(u);d.length>0&&(f.style=d);var p=[];return p.push({tag:"span",attributes:f,children:[t]}),i&&p.push({tag:"span",attributes:{class:"sr-only"},children:[i]}),p}function xu(e){var t=e.content,n=e.title,a=e.extra,r=h(h(h({},a.attributes),n?{title:n}:{}),{},{class:a.classes.join(" ")}),i=ln(a.styles);i.length>0&&(r.style=i);var s=[];return s.push({tag:"span",attributes:r,children:[t]}),n&&s.push({tag:"span",attributes:{class:"sr-only"},children:[n]}),s}var _n=te.styles;function Fn(e){var t=e[0],n=e[1],a=e.slice(4),r=ua(a,1),i=r[0],s=null;return Array.isArray(i)?s={tag:"g",attributes:{class:"".concat(y.cssPrefix,"-").concat(Ee.GROUP)},children:[{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Ee.SECONDARY),fill:"currentColor",d:i[0]}},{tag:"path",attributes:{class:"".concat(y.cssPrefix,"-").concat(Ee.PRIMARY),fill:"currentColor",d:i[1]}}]}:s={tag:"path",attributes:{fill:"currentColor",d:i}},{found:!0,width:t,height:n,icon:s}}var Su={found:!1,width:512,height:512};function Ou(e,t){!ei&&!y.showMissingIcons&&e&&console.error('Icon with name "'.concat(e,'" and prefix "').concat(t,'" is missing.'))}function Ln(e,t){var n=t;return t==="fa"&&y.styleDefault!==null&&(t=Te()),new Promise(function(a,r){if(pe("missingIconAbstract"),n==="fa"){var i=mi(e)||{};e=i.iconName||e,t=i.prefix||t}if(e&&t&&_n[t]&&_n[t][e]){var s=_n[t][e];return a(Fn(s))}Ou(e,t),a(h(h({},Su),{},{icon:y.showMissingIcons&&e?pe("missingIconAbstract")||{}:{}}))})}var ja=function(){},Wn=y.measurePerformance&&Ot&&Ot.mark&&Ot.measure?Ot:{mark:ja,measure:ja},at='FA "6.4.2"',Mu=function(t){return Wn.mark("".concat(at," ").concat(t," begins")),function(){return vi(t)}},vi=function(t){Wn.mark("".concat(at," ").concat(t," ends")),Wn.measure("".concat(at," ").concat(t),"".concat(at," ").concat(t," begins"),"".concat(at," ").concat(t," ends"))},wa={begin:Mu,end:vi},Ft=function(){};function za(e){var t=e.getAttribute?e.getAttribute(Le):null;return typeof t=="string"}function Du(e){var t=e.getAttribute?e.getAttribute(da):null,n=e.getAttribute?e.getAttribute(ma):null;return t&&n}function Yu(e){return e&&e.classList&&e.classList.contains&&e.classList.contains(y.replacementClass)}function Tu(){if(y.autoReplaceSvg===!0)return Lt.replace;var e=Lt[y.autoReplaceSvg];return e||Lt.replace}function Pu(e){return Y.createElementNS("http://www.w3.org/2000/svg",e)}function Au(e){return Y.createElement(e)}function yi(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=t.ceFn,a=n===void 0?e.tag==="svg"?Pu:Au:n;if(typeof e=="string")return Y.createTextNode(e);var r=a(e.tag);Object.keys(e.attributes||[]).forEach(function(s){r.setAttribute(s,e.attributes[s])});var i=e.children||[];return i.forEach(function(s){r.appendChild(yi(s,{ceFn:a}))}),r}function Nu(e){var t=" ".concat(e.outerHTML," ");return t="".concat(t,"Font Awesome fontawesome.com "),t}var Lt={replace:function(t){var n=t[0];if(n.parentNode)if(t[1].forEach(function(r){n.parentNode.insertBefore(yi(r),n)}),n.getAttribute(Le)===null&&y.keepOriginalSource){var a=Y.createComment(Nu(n));n.parentNode.replaceChild(a,n)}else n.remove()},nest:function(t){var n=t[0],a=t[1];if(~va(n).indexOf(y.replacementClass))return Lt.replace(t);var r=new RegExp("".concat(y.cssPrefix,"-.*"));if(delete a[0].attributes.id,a[0].attributes.class){var i=a[0].attributes.class.split(" ").reduce(function(o,l){return l===y.replacementClass||l.match(r)?o.toSvg.push(l):o.toNode.push(l),o},{toNode:[],toSvg:[]});a[0].attributes.class=i.toSvg.join(" "),i.toNode.length===0?n.removeAttribute("class"):n.setAttribute("class",i.toNode.join(" "))}var s=a.map(function(o){return kt(o)}).join(`
`);n.setAttribute(Le,""),n.innerHTML=s}};function Ha(e){e()}function gi(e,t){var n=typeof t=="function"?t:Ft;if(e.length===0)n();else{var a=Ha;y.mutateApproach===Rf&&(a=Ye.requestAnimationFrame||Ha),a(function(){var r=Tu(),i=wa.begin("mutate");e.map(r),i(),n()})}}var ka=!1;function pi(){ka=!0}function Un(){ka=!1}var Zt=null;function $a(e){if(Ia&&y.observeMutations){var t=e.treeCallback,n=t===void 0?Ft:t,a=e.nodeCallback,r=a===void 0?Ft:a,i=e.pseudoElementsCallback,s=i===void 0?Ft:i,o=e.observeMutationsRoot,l=o===void 0?Y:o;Zt=new Ia(function(f){if(!ka){var u=Te();et(f).forEach(function(d){if(d.type==="childList"&&d.addedNodes.length>0&&!za(d.addedNodes[0])&&(y.searchPseudoElements&&s(d.target),n(d.target)),d.type==="attributes"&&d.target.parentNode&&y.searchPseudoElements&&s(d.target.parentNode),d.type==="attributes"&&za(d.target)&&~Hf.indexOf(d.attributeName))if(d.attributeName==="class"&&Du(d.target)){var p=un(va(d.target)),k=p.prefix,R=p.iconName;d.target.setAttribute(da,k||u),R&&d.target.setAttribute(ma,R)}else Yu(d.target)&&r(d.target)})}}),we&&Zt.observe(l,{childList:!0,attributes:!0,characterData:!0,subtree:!0})}}function Iu(){Zt&&Zt.disconnect()}function Cu(e){var t=e.getAttribute("style"),n=[];return t&&(n=t.split(";").reduce(function(a,r){var i=r.split(":"),s=i[0],o=i.slice(1);return s&&o.length>0&&(a[s]=o.join(":").trim()),a},{})),n}function Eu(e){var t=e.getAttribute("data-prefix"),n=e.getAttribute("data-icon"),a=e.innerText!==void 0?e.innerText.trim():"",r=un(va(e));return r.prefix||(r.prefix=Te()),t&&n&&(r.prefix=t,r.iconName=n),r.iconName&&r.prefix||(r.prefix&&a.length>0&&(r.iconName=du(r.prefix,e.innerText)||pa(r.prefix,In(e.innerText))),!r.iconName&&y.autoFetchSvg&&e.firstChild&&e.firstChild.nodeType===Node.TEXT_NODE&&(r.iconName=e.firstChild.data)),r}function Ru(e){var t=et(e.attributes).reduce(function(r,i){return r.name!=="class"&&r.name!=="style"&&(r[i.name]=i.value),r},{}),n=e.getAttribute("title"),a=e.getAttribute("data-fa-title-id");return y.autoA11y&&(n?t["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(a||vt()):(t["aria-hidden"]="true",t.focusable="false")),t}function Fu(){return{iconName:null,title:null,titleId:null,prefix:null,transform:se,symbol:!1,mask:{iconName:null,prefix:null,rest:[]},maskId:null,extra:{classes:[],styles:{},attributes:{}}}}function Ga(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{styleParser:!0},n=Eu(e),a=n.iconName,r=n.prefix,i=n.rest,s=Ru(e),o=En("parseNodeAttributes",{},e),l=t.styleParser?Cu(e):[];return h({iconName:a,title:e.getAttribute("title"),titleId:e.getAttribute("data-fa-title-id"),prefix:r,transform:se,mask:{iconName:null,prefix:null,rest:[]},maskId:null,symbol:!1,extra:{classes:i,styles:l,attributes:s}},o)}var Lu=te.styles;function bi(e){var t=y.autoReplaceSvg==="nest"?Ga(e,{styleParser:!1}):Ga(e);return~t.extra.classes.indexOf(ti)?pe("generateLayersText",e,t):pe("generateSvgReplacementMutation",e,t)}var Pe=new Set;ha.map(function(e){Pe.add("fa-".concat(e))});Object.keys(ct[D]).map(Pe.add.bind(Pe));Object.keys(ct[N]).map(Pe.add.bind(Pe));Pe=_t(Pe);function Va(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;if(!we)return Promise.resolve();var n=Y.documentElement.classList,a=function(d){return n.add("".concat(Ca,"-").concat(d))},r=function(d){return n.remove("".concat(Ca,"-").concat(d))},i=y.autoFetchSvg?Pe:ha.map(function(u){return"fa-".concat(u)}).concat(Object.keys(Lu));i.includes("fa")||i.push("fa");var s=[".".concat(ti,":not([").concat(Le,"])")].concat(i.map(function(u){return".".concat(u,":not([").concat(Le,"])")})).join(", ");if(s.length===0)return Promise.resolve();var o=[];try{o=et(e.querySelectorAll(s))}catch{}if(o.length>0)a("pending"),r("complete");else return Promise.resolve();var l=wa.begin("onTree"),f=o.reduce(function(u,d){try{var p=bi(d);p&&u.push(p)}catch(k){ei||k.name==="MissingIcon"&&console.error(k)}return u},[]);return new Promise(function(u,d){Promise.all(f).then(function(p){gi(p,function(){a("active"),a("complete"),r("pending"),typeof t=="function"&&t(),l(),u()})}).catch(function(p){l(),d(p)})})}function Wu(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:null;bi(e).then(function(n){n&&gi([n],t)})}function Uu(e){return function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=(t||{}).icon?t:Rn(t||{}),r=n.mask;return r&&(r=(r||{}).icon?r:Rn(r||{})),e(a,h(h({},n),{},{mask:r}))}}var ju=function(t){var n=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},a=n.transform,r=a===void 0?se:a,i=n.symbol,s=i===void 0?!1:i,o=n.mask,l=o===void 0?null:o,f=n.maskId,u=f===void 0?null:f,d=n.title,p=d===void 0?null:d,k=n.titleId,R=k===void 0?null:k,j=n.classes,I=j===void 0?[]:j,G=n.attributes,C=G===void 0?{}:G,F=n.styles,Z=F===void 0?{}:F;if(t){var U=t.prefix,Ae=t.iconName,Ne=t.icon;return cn(h({type:"icon"},t),function(){return We("beforeDOMElementCreation",{iconDefinition:t,params:n}),y.autoA11y&&(p?C["aria-labelledby"]="".concat(y.replacementClass,"-title-").concat(R||vt()):(C["aria-hidden"]="true",C.focusable="false")),_a({icons:{main:Fn(Ne),mask:l?Fn(l.icon):{found:!1,width:null,height:null,icon:{}}},prefix:U,iconName:Ae,transform:h(h({},se),r),symbol:s,title:p,maskId:u,titleId:R,extra:{attributes:C,styles:Z,classes:I}})})}},zu={mixout:function(){return{icon:Uu(ju)}},hooks:function(){return{mutationObserverCallbacks:function(n){return n.treeCallback=Va,n.nodeCallback=Wu,n}}},provides:function(t){t.i2svg=function(n){var a=n.node,r=a===void 0?Y:a,i=n.callback,s=i===void 0?function(){}:i;return Va(r,s)},t.generateSvgReplacementMutation=function(n,a){var r=a.iconName,i=a.title,s=a.titleId,o=a.prefix,l=a.transform,f=a.symbol,u=a.mask,d=a.maskId,p=a.extra;return new Promise(function(k,R){Promise.all([Ln(r,o),u.iconName?Ln(u.iconName,u.prefix):Promise.resolve({found:!1,width:512,height:512,icon:{}})]).then(function(j){var I=ua(j,2),G=I[0],C=I[1];k([n,_a({icons:{main:G,mask:C},prefix:o,iconName:r,transform:l,symbol:f,maskId:d,title:i,titleId:s,extra:p,watchable:!0})])}).catch(R)})},t.generateAbstractIcon=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.transform,o=n.styles,l=ln(o);l.length>0&&(r.style=l);var f;return ya(s)&&(f=pe("generateAbstractTransformGrouping",{main:i,transform:s,containerWidth:i.width,iconWidth:i.width})),a.push(f||i.icon),{children:a,attributes:r}}}},Hu={mixout:function(){return{layer:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.classes,i=r===void 0?[]:r;return cn({type:"layer"},function(){We("beforeDOMElementCreation",{assembler:n,params:a});var s=[];return n(function(o){Array.isArray(o)?o.map(function(l){s=s.concat(l.abstract)}):s=s.concat(o.abstract)}),[{tag:"span",attributes:{class:["".concat(y.cssPrefix,"-layers")].concat(_t(i)).join(" ")},children:s}]})}}}},$u={mixout:function(){return{counter:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.title,i=r===void 0?null:r,s=a.classes,o=s===void 0?[]:s,l=a.attributes,f=l===void 0?{}:l,u=a.styles,d=u===void 0?{}:u;return cn({type:"counter",content:n},function(){return We("beforeDOMElementCreation",{content:n,params:a}),xu({content:n.toString(),title:i,extra:{attributes:f,styles:d,classes:["".concat(y.cssPrefix,"-layers-counter")].concat(_t(o))}})})}}}},Gu={mixout:function(){return{text:function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},r=a.transform,i=r===void 0?se:r,s=a.title,o=s===void 0?null:s,l=a.classes,f=l===void 0?[]:l,u=a.attributes,d=u===void 0?{}:u,p=a.styles,k=p===void 0?{}:p;return cn({type:"text",content:n},function(){return We("beforeDOMElementCreation",{content:n,params:a}),Ua({content:n,transform:h(h({},se),i),title:o,extra:{attributes:d,styles:k,classes:["".concat(y.cssPrefix,"-layers-text")].concat(_t(f))}})})}}},provides:function(t){t.generateLayersText=function(n,a){var r=a.title,i=a.transform,s=a.extra,o=null,l=null;if(Jr){var f=parseInt(getComputedStyle(n).fontSize,10),u=n.getBoundingClientRect();o=u.width/f,l=u.height/f}return y.autoA11y&&!r&&(s.attributes["aria-hidden"]="true"),Promise.resolve([n,Ua({content:n.innerHTML,width:o,height:l,transform:i,title:r,extra:s,watchable:!0})])}}},Vu=new RegExp('"',"ug"),Za=[1105920,1112319];function Zu(e){var t=e.replace(Vu,""),n=su(t,0),a=n>=Za[0]&&n<=Za[1],r=t.length===2?t[0]===t[1]:!1;return{value:In(r?t[0]:t),isSecondary:a||r}}function Ba(e,t){var n="".concat(Ef).concat(t.replace(":","-"));return new Promise(function(a,r){if(e.getAttribute(n)!==null)return a();var i=et(e.children),s=i.filter(function(Ne){return Ne.getAttribute(Nn)===t})[0],o=Ye.getComputedStyle(e,t),l=o.getPropertyValue("font-family").match(Uf),f=o.getPropertyValue("font-weight"),u=o.getPropertyValue("content");if(s&&!l)return e.removeChild(s),a();if(l&&u!=="none"&&u!==""){var d=o.getPropertyValue("content"),p=~["Sharp"].indexOf(l[2])?N:D,k=~["Solid","Regular","Light","Thin","Duotone","Brands","Kit"].indexOf(l[2])?dt[p][l[2].toLowerCase()]:jf[p][f],R=Zu(d),j=R.value,I=R.isSecondary,G=l[0].startsWith("FontAwesome"),C=pa(k,j),F=C;if(G){var Z=mu(j);Z.iconName&&Z.prefix&&(C=Z.iconName,k=Z.prefix)}if(C&&!I&&(!s||s.getAttribute(da)!==k||s.getAttribute(ma)!==F)){e.setAttribute(n,F),s&&e.removeChild(s);var U=Fu(),Ae=U.extra;Ae.attributes[Nn]=t,Ln(C,k).then(function(Ne){var mn=_a(h(h({},U),{},{icons:{main:Ne,mask:ba()},prefix:k,iconName:F,extra:Ae,watchable:!0})),ke=Y.createElementNS("http://www.w3.org/2000/svg","svg");t==="::before"?e.insertBefore(ke,e.firstChild):e.appendChild(ke),ke.outerHTML=mn.map(function(xi){return kt(xi)}).join(`
`),e.removeAttribute(n),a()}).catch(r)}else a()}else a()})}function Bu(e){return Promise.all([Ba(e,"::before"),Ba(e,"::after")])}function Xu(e){return e.parentNode!==document.head&&!~Ff.indexOf(e.tagName.toUpperCase())&&!e.getAttribute(Nn)&&(!e.parentNode||e.parentNode.tagName!=="svg")}function Xa(e){if(we)return new Promise(function(t,n){var a=et(e.querySelectorAll("*")).filter(Xu).map(Bu),r=wa.begin("searchPseudoElements");pi(),Promise.all(a).then(function(){r(),Un(),t()}).catch(function(){r(),Un(),n()})})}var qu={hooks:function(){return{mutationObserverCallbacks:function(n){return n.pseudoElementsCallback=Xa,n}}},provides:function(t){t.pseudoElements2svg=function(n){var a=n.node,r=a===void 0?Y:a;y.searchPseudoElements&&Xa(r)}}},qa=!1,Ju={mixout:function(){return{dom:{unwatch:function(){pi(),qa=!0}}}},hooks:function(){return{bootstrap:function(){$a(En("mutationObserverCallbacks",{}))},noAuto:function(){Iu()},watch:function(n){var a=n.observeMutationsRoot;qa?Un():$a(En("mutationObserverCallbacks",{observeMutationsRoot:a}))}}}},Ja=function(t){var n={size:16,x:0,y:0,flipX:!1,flipY:!1,rotate:0};return t.toLowerCase().split(" ").reduce(function(a,r){var i=r.toLowerCase().split("-"),s=i[0],o=i.slice(1).join("-");if(s&&o==="h")return a.flipX=!0,a;if(s&&o==="v")return a.flipY=!0,a;if(o=parseFloat(o),isNaN(o))return a;switch(s){case"grow":a.size=a.size+o;break;case"shrink":a.size=a.size-o;break;case"left":a.x=a.x-o;break;case"right":a.x=a.x+o;break;case"up":a.y=a.y-o;break;case"down":a.y=a.y+o;break;case"rotate":a.rotate=a.rotate+o;break}return a},n)},Ku={mixout:function(){return{parse:{transform:function(n){return Ja(n)}}}},hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-transform");return r&&(n.transform=Ja(r)),n}}},provides:function(t){t.generateAbstractTransformGrouping=function(n){var a=n.main,r=n.transform,i=n.containerWidth,s=n.iconWidth,o={transform:"translate(".concat(i/2," 256)")},l="translate(".concat(r.x*32,", ").concat(r.y*32,") "),f="scale(".concat(r.size/16*(r.flipX?-1:1),", ").concat(r.size/16*(r.flipY?-1:1),") "),u="rotate(".concat(r.rotate," 0 0)"),d={transform:"".concat(l," ").concat(f," ").concat(u)},p={transform:"translate(".concat(s/2*-1," -256)")},k={outer:o,inner:d,path:p};return{tag:"g",attributes:h({},k.outer),children:[{tag:"g",attributes:h({},k.inner),children:[{tag:a.icon.tag,children:a.icon.children,attributes:h(h({},a.icon.attributes),k.path)}]}]}}}},wn={x:0,y:0,width:"100%",height:"100%"};function Ka(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:!0;return e.attributes&&(e.attributes.fill||t)&&(e.attributes.fill="black"),e}function Qu(e){return e.tag==="g"?e.children:[e]}var ec={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-mask"),i=r?un(r.split(" ").map(function(s){return s.trim()})):ba();return i.prefix||(i.prefix=Te()),n.mask=i,n.maskId=a.getAttribute("data-fa-mask-id"),n}}},provides:function(t){t.generateAbstractMask=function(n){var a=n.children,r=n.attributes,i=n.main,s=n.mask,o=n.maskId,l=n.transform,f=i.width,u=i.icon,d=s.width,p=s.icon,k=Kf({transform:l,containerWidth:d,iconWidth:f}),R={tag:"rect",attributes:h(h({},wn),{},{fill:"white"})},j=u.children?{children:u.children.map(Ka)}:{},I={tag:"g",attributes:h({},k.inner),children:[Ka(h({tag:u.tag,attributes:h(h({},u.attributes),k.path)},j))]},G={tag:"g",attributes:h({},k.outer),children:[I]},C="mask-".concat(o||vt()),F="clip-".concat(o||vt()),Z={tag:"mask",attributes:h(h({},wn),{},{id:C,maskUnits:"userSpaceOnUse",maskContentUnits:"userSpaceOnUse"}),children:[R,G]},U={tag:"defs",children:[{tag:"clipPath",attributes:{id:F},children:Qu(p)},Z]};return a.push(U,{tag:"rect",attributes:h({fill:"currentColor","clip-path":"url(#".concat(F,")"),mask:"url(#".concat(C,")")},wn)}),{children:a,attributes:r}}}},tc={provides:function(t){var n=!1;Ye.matchMedia&&(n=Ye.matchMedia("(prefers-reduced-motion: reduce)").matches),t.missingIconAbstract=function(){var a=[],r={fill:"currentColor"},i={attributeType:"XML",repeatCount:"indefinite",dur:"2s"};a.push({tag:"path",attributes:h(h({},r),{},{d:"M156.5,447.7l-12.6,29.5c-18.7-9.5-35.9-21.2-51.5-34.9l22.7-22.7C127.6,430.5,141.5,440,156.5,447.7z M40.6,272H8.5 c1.4,21.2,5.4,41.7,11.7,61.1L50,321.2C45.1,305.5,41.8,289,40.6,272z M40.6,240c1.4-18.8,5.2-37,11.1-54.1l-29.5-12.6 C14.7,194.3,10,216.7,8.5,240H40.6z M64.3,156.5c7.8-14.9,17.2-28.8,28.1-41.5L69.7,92.3c-13.7,15.6-25.5,32.8-34.9,51.5 L64.3,156.5z M397,419.6c-13.9,12-29.4,22.3-46.1,30.4l11.9,29.8c20.7-9.9,39.8-22.6,56.9-37.6L397,419.6z M115,92.4 c13.9-12,29.4-22.3,46.1-30.4l-11.9-29.8c-20.7,9.9-39.8,22.6-56.8,37.6L115,92.4z M447.7,355.5c-7.8,14.9-17.2,28.8-28.1,41.5 l22.7,22.7c13.7-15.6,25.5-32.9,34.9-51.5L447.7,355.5z M471.4,272c-1.4,18.8-5.2,37-11.1,54.1l29.5,12.6 c7.5-21.1,12.2-43.5,13.6-66.8H471.4z M321.2,462c-15.7,5-32.2,8.2-49.2,9.4v32.1c21.2-1.4,41.7-5.4,61.1-11.7L321.2,462z M240,471.4c-18.8-1.4-37-5.2-54.1-11.1l-12.6,29.5c21.1,7.5,43.5,12.2,66.8,13.6V471.4z M462,190.8c5,15.7,8.2,32.2,9.4,49.2h32.1 c-1.4-21.2-5.4-41.7-11.7-61.1L462,190.8z M92.4,397c-12-13.9-22.3-29.4-30.4-46.1l-29.8,11.9c9.9,20.7,22.6,39.8,37.6,56.9 L92.4,397z M272,40.6c18.8,1.4,36.9,5.2,54.1,11.1l12.6-29.5C317.7,14.7,295.3,10,272,8.5V40.6z M190.8,50 c15.7-5,32.2-8.2,49.2-9.4V8.5c-21.2,1.4-41.7,5.4-61.1,11.7L190.8,50z M442.3,92.3L419.6,115c12,13.9,22.3,29.4,30.5,46.1 l29.8-11.9C470,128.5,457.3,109.4,442.3,92.3z M397,92.4l22.7-22.7c-15.6-13.7-32.8-25.5-51.5-34.9l-12.6,29.5 C370.4,72.1,384.4,81.5,397,92.4z"})});var s=h(h({},i),{},{attributeName:"opacity"}),o={tag:"circle",attributes:h(h({},r),{},{cx:"256",cy:"364",r:"28"}),children:[]};return n||o.children.push({tag:"animate",attributes:h(h({},i),{},{attributeName:"r",values:"28;14;28;28;14;28;"})},{tag:"animate",attributes:h(h({},s),{},{values:"1;0;1;1;0;1;"})}),a.push(o),a.push({tag:"path",attributes:h(h({},r),{},{opacity:"1",d:"M263.7,312h-16c-6.6,0-12-5.4-12-12c0-71,77.4-63.9,77.4-107.8c0-20-17.8-40.2-57.4-40.2c-29.1,0-44.3,9.6-59.2,28.7 c-3.9,5-11.1,6-16.2,2.4l-13.1-9.2c-5.6-3.9-6.9-11.8-2.6-17.2c21.2-27.2,46.4-44.7,91.2-44.7c52.3,0,97.4,29.8,97.4,80.2 c0,67.6-77.4,63.5-77.4,107.8C275.7,306.6,270.3,312,263.7,312z"}),children:n?[]:[{tag:"animate",attributes:h(h({},s),{},{values:"1;0;0;0;0;1;"})}]}),n||a.push({tag:"path",attributes:h(h({},r),{},{opacity:"0",d:"M232.5,134.5l7,168c0.3,6.4,5.6,11.5,12,11.5h9c6.4,0,11.7-5.1,12-11.5l7-168c0.3-6.8-5.2-12.5-12-12.5h-23 C237.7,122,232.2,127.7,232.5,134.5z"}),children:[{tag:"animate",attributes:h(h({},s),{},{values:"0;0;1;1;0;0;"})}]}),{tag:"g",attributes:{class:"missing"},children:a}}}},nc={hooks:function(){return{parseNodeAttributes:function(n,a){var r=a.getAttribute("data-fa-symbol"),i=r===null?!1:r===""?!0:r;return n.symbol=i,n}}}},ac=[tu,zu,Hu,$u,Gu,qu,Ju,Ku,ec,tc,nc];yu(ac,{mixoutsTo:q});q.noAuto;q.config;q.library;q.dom;var jn=q.parse;q.findIconDefinition;q.toHtml;var rc=q.icon;q.layer;q.text;q.counter;function Qa(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter(function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable})),n.push.apply(n,a)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Qa(Object(n),!0).forEach(function(a){Ve(e,a,n[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Qa(Object(n)).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(n,a))})}return e}function Bt(e){"@babel/helpers - typeof";return Bt=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},Bt(e)}function Ve(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function ic(e,t){if(e==null)return{};var n={},a=Object.keys(e),r,i;for(i=0;i<a.length;i++)r=a[i],!(t.indexOf(r)>=0)&&(n[r]=e[r]);return n}function sc(e,t){if(e==null)return{};var n=ic(e,t),a,r;if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],!(t.indexOf(a)>=0)&&Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}function zn(e){return oc(e)||lc(e)||fc(e)||uc()}function oc(e){if(Array.isArray(e))return Hn(e)}function lc(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function fc(e,t){if(e){if(typeof e=="string")return Hn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);if(n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set")return Array.from(e);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Hn(e,t)}}function Hn(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}function uc(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function cc(e){var t,n=e.beat,a=e.fade,r=e.beatFade,i=e.bounce,s=e.shake,o=e.flash,l=e.spin,f=e.spinPulse,u=e.spinReverse,d=e.pulse,p=e.fixedWidth,k=e.inverse,R=e.border,j=e.listItem,I=e.flip,G=e.size,C=e.rotation,F=e.pull,Z=(t={"fa-beat":n,"fa-fade":a,"fa-beat-fade":r,"fa-bounce":i,"fa-shake":s,"fa-flash":o,"fa-spin":l,"fa-spin-reverse":u,"fa-spin-pulse":f,"fa-pulse":d,"fa-fw":p,"fa-inverse":k,"fa-border":R,"fa-li":j,"fa-flip":I===!0,"fa-flip-horizontal":I==="horizontal"||I==="both","fa-flip-vertical":I==="vertical"||I==="both"},Ve(t,"fa-".concat(G),typeof G<"u"&&G!==null),Ve(t,"fa-rotate-".concat(C),typeof C<"u"&&C!==null&&C!==0),Ve(t,"fa-pull-".concat(F),typeof F<"u"&&F!==null),Ve(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(Z).map(function(U){return Z[U]?U:null}).filter(function(U){return U})}function dc(e){return e=e-0,e===e}function _i(e){return dc(e)?e:(e=e.replace(/[\-_\s]+(.)?/g,function(t,n){return n?n.toUpperCase():""}),e.substr(0,1).toLowerCase()+e.substr(1))}var mc=["style"];function hc(e){return e.charAt(0).toUpperCase()+e.slice(1)}function vc(e){return e.split(";").map(function(t){return t.trim()}).filter(function(t){return t}).reduce(function(t,n){var a=n.indexOf(":"),r=_i(n.slice(0,a)),i=n.slice(a+1).trim();return r.startsWith("webkit")?t[hc(r)]=i:t[r]=i,t},{})}function wi(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};if(typeof t=="string")return t;var a=(t.children||[]).map(function(l){return wi(e,l)}),r=Object.keys(t.attributes||{}).reduce(function(l,f){var u=t.attributes[f];switch(f){case"class":l.attrs.className=u,delete t.attributes.class;break;case"style":l.attrs.style=vc(u);break;default:f.indexOf("aria-")===0||f.indexOf("data-")===0?l.attrs[f.toLowerCase()]=u:l.attrs[_i(f)]=u}return l},{attrs:{}}),i=n.style,s=i===void 0?{}:i,o=sc(n,mc);return r.attrs.style=Me(Me({},r.attrs.style),s),e.apply(void 0,[t.tag,Me(Me({},r.attrs),o)].concat(zn(a)))}var ki=!1;try{ki=!0}catch{}function yc(){if(!ki&&console&&typeof console.error=="function"){var e;(e=console).error.apply(e,arguments)}}function er(e){if(e&&Bt(e)==="object"&&e.prefix&&e.iconName&&e.icon)return e;if(jn.icon)return jn.icon(e);if(e===null)return null;if(e&&Bt(e)==="object"&&e.prefix&&e.iconName)return e;if(Array.isArray(e)&&e.length===2)return{prefix:e[0],iconName:e[1]};if(typeof e=="string")return{prefix:"fas",iconName:e}}function kn(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?Ve({},e,t):{}}var dn=tr.forwardRef(function(e,t){var n=e.icon,a=e.mask,r=e.symbol,i=e.className,s=e.title,o=e.titleId,l=e.maskId,f=er(n),u=kn("classes",[].concat(zn(cc(e)),zn(i.split(" ")))),d=kn("transform",typeof e.transform=="string"?jn.transform(e.transform):e.transform),p=kn("mask",er(a)),k=rc(f,Me(Me(Me(Me({},u),d),p),{},{symbol:r,title:s,titleId:o,maskId:l}));if(!k)return yc("Could not find icon",f),null;var R=k.abstract,j={ref:t};return Object.keys(e).forEach(function(I){dn.defaultProps.hasOwnProperty(I)||(j[I]=e[I])}),gc(R[0],j)});dn.displayName="FontAwesomeIcon";dn.propTypes={beat:w.bool,border:w.bool,beatFade:w.bool,bounce:w.bool,className:w.string,fade:w.bool,flash:w.bool,mask:w.oneOfType([w.object,w.array,w.string]),maskId:w.string,fixedWidth:w.bool,inverse:w.bool,flip:w.oneOf([!0,!1,"horizontal","vertical","both"]),icon:w.oneOfType([w.object,w.array,w.string]),listItem:w.bool,pull:w.oneOf(["right","left"]),pulse:w.bool,rotation:w.oneOf([0,90,180,270]),shake:w.bool,size:w.oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:w.bool,spinPulse:w.bool,spinReverse:w.bool,symbol:w.oneOfType([w.bool,w.string]),title:w.string,titleId:w.string,transform:w.oneOfType([w.string,w.object]),swapOpacity:w.bool};dn.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var gc=wi.bind(null,tr.createElement),bc={prefix:"fas",iconName:"chevron-left",icon:[320,512,[9001],"f053","M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"]},_c={prefix:"fas",iconName:"chevron-right",icon:[320,512,[9002],"f054","M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"]};export{dn as F,_c as a,bc as f,m as h};
