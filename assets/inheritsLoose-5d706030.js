import{_ as p}from"./setPrototypeOf-931eae7d.js";function a(){return a=Object.assign?Object.assign.bind():function(t){for(var r=1;r<arguments.length;r++){var e=arguments[r];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])}return t},a.apply(this,arguments)}function c(t,r){if(t==null)return{};var e={},n=Object.keys(t),o,i;for(i=0;i<n.length;i++)o=n[i],!(r.indexOf(o)>=0)&&(e[o]=t[o]);return e}function u(t,r){t.prototype=Object.create(r.prototype),t.prototype.constructor=t,p(t,r)}export{a as _,c as a,u as b};
