import{s as i,p as e}from"./index-286635ca.js";const t=i.div`
  background-color: var(--backdrop-blue);
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 18px;
 
  @media screen and (min-width: 768px) {
    gap: 24px;
  }
`,a=i.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: var(--white);

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`,o=i.div`
  position:absolute;
  bottom: 19px;
  right: 60px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,r=i.picture`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`,p=i.div`
  display: flex;
  flex-direction: row;
  gap: 30px
`;i(e)`
  display:block;
  margin-top:-15px;
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
`;export{t as A,p as L,o as P,a,r as b};
