import styled from 'styled-components';

export const AuthPageWrap = styled.div`
  background-color: #DCEBF7;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content:center;
  align-items:center;
  gap: 18px;
 
  @media screen and (min-width: 768px) {
  gap: 24px;
  }
`;

export const AuthFormWrap = styled.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: #ffffff;

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`;

export const PictureWrap = styled.div`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`