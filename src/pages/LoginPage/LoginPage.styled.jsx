import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const AuthPageWrap = styled.div`
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
`;

export const AuthFormWrap = styled.div`
  width:335px;
  box-sizing:border-box;
  padding: 40px 24px;
  border-radius: 8px;
  background: var(--white);

   @media screen and (min-width: 768px) {
    width:480px;
    padding: 40px;
  } 
`;

export const PictureWrap = styled.div`
  position:absolute;
  bottom: 19px;
  right: 60px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`

export const Picture = styled.picture`
  position:absolute;
  bottom:0;
  left:49px;

   @media screen and (max-width: 1439px) {
    display:none;
  } 
`

export const LinkWrap = styled.div`
  display: flex;
  flex-direction: row;
  gap: 30px
`;

export const AuthLink = styled(Link)`
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
`;
