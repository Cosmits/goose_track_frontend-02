import{s as o,N as e,j as n}from"./index-0b01e0bf.js";import{e as a}from"./error-81cc8a43.js";import{a as r,b as s}from"./index.esm-f85efde9.js";const m="/goose_track_frontend-02/assets/login-38d3fb2e.svg",x=o.h1`
  margin-bottom: 32px;
  color: var(--main-blue);
  font-size: 18px;
  font-family:InterSemiBold;
  line-height: 1.33;
  
   @media screen and (min-width: 768px) {
    margin-bottom: 40px;
    font-size: 24px;
    line-height: 1;
  }
`,h=o.ul`
 margin-bottom: 32px;

 @media screen and (min-width: 768px) {
    margin-bottom: 48px;
  }
`,g=o.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 24px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 18px;
  }
`,u=o.label`
  margin-bottom: 8px;
  color: var(--black);
  font-size: 12px;
  font-family:InterSemiBold;
  line-height: 1.21;
  color: ${i=>i.className==="error"?"var(--error-color)":i.className==="success"?"var(--correct-color)":"var(--black)"};

 @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`,b=o(a)`
  border: 1px solid var(--input-gray);
  border-radius: 8px;
  padding: 14px;
  font-size: 14px;
  font-family:InterTightRegular;
  line-height: 1.29;
  background-color:var(--white) !important;
  border-color: ${i=>i.className==="error"?"var(--error-color)":i.className==="success"?"var(--correct-color)":""};
  
  &::placeholder {
    color: var(--input-gray);
    background-color:var(--white) !important;
  } 

   &:hover,
   &:focus,
   :active {
    border-color: var(--black);
  }

  @media screen and (min-width: 768px) {
    padding: 18px;
    font-size: 16px;
    line-height: 1.13;
  }
`,f=o.img`
  position:absolute;
  right:14px;
  top:34px;
  width: 24px;
  height: 24px;

  @media screen and (min-width: 768px) {
    right:18px;
    top:40px;
  }
`,v=o.button`
  display: flex;
  gap:11px;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  border-radius: 16px;
  background-color: ${i=>i.className==="googleAuth"?"var(--white)":"var(--main-blue)"};
  border: ${i=>i.className==="googleAuth"?"1px solid var(--input-gray)":"none"};
  cursor: pointer;
  color: ${i=>i.className==="googleAuth"?"var(--black)":"var(--white)"};
  font-size: 14px;
  font-family:InterSemiBold;
  line-height: 1.29;
  transition: all 250ms linear;

  @media screen and (min-width: 768px) {
    padding-top: 18px;
    padding-bottom: 18px;
    font-size: 18px;
    line-height: 1.33;
  }

  &:focus,
  &:hover  {
    background-color: ${i=>i.className==="googleAuth"?"var(--white)":"var(--hover-blue)"};
    box-shadow: 4px 2px 16px 0px #88A5BF7A;

  }
`,w=o.img`
  width: 18px;
  height:18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height:20px;
  }
`,y=o.span`
  
  font-size: 12px;
  font-family:InterTightRegular;
  line-height: 1.17;
`,I=o.p`
  margin-top:8px;
  margin-left:14px;
  font-size: 12px;
  font-family:InterTightRegular;
  line-height: 1.17;
  color: var(--error-color);

   @media screen and (min-width: 768px) {
    margin-left:18px;
  }
`,k=o.button`
  background-color: transparent;
  border: none;
  position: absolute;
  top: 38px;
  right: 14px;
  padding: 0;

   @media screen and (min-width: 768px) {
    right: 18px;
    top:42px;
  }
`,z=o(r)`
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,N=o(s)`
  fill: var(--main-blue);
  width: 18px;
  height: 18px;

  @media screen and (min-width: 768px) {
    width: 20px;
    height: 20px;
  }
`,A=o.li`
  display:flex;
  flex-direction:column;
  margin-bottom: 32px;
  margin-top:32px;
  position:relative;

  @media screen and (min-width: 768px) {
    margin-bottom: 48px;
    margin-top:40px;
  }
`,l=o(e)`
  display:block;
  font-family: InterSemiBold;
  font-size: 12px;
  line-height: 1.17;
  color: var(--main-blue);
  text-decoration:underline;
  text-align:center;
  transition: color 250ms linear;

   &:hover,
   &:focus {
    color: var(--hover-blue);
  }

  @media screen and (min-width: 768px) {
  font-size: 18px;
  line-height: 1.33;
  }
`,B=({route:i,textContent:t})=>n.jsx(l,{to:i,children:t});export{B as A,v as B,z as D,I as E,g as I,w as L,k as P,y as S,x as T,A as V,h as a,u as b,b as c,f as d,N as e,m as f};
