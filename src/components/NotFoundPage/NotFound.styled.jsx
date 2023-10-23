import styled from "styled-components";
import { Link } from 'react-router-dom';

export const ImgWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content:center;
  margin-bottom: 12px;
  width: 252px;
  height: 150px;

  @media screen and (min-width: 768px) {
    width: 503px;
    height: 250px;
    margin-bottom: 50px;
  }
`;

export const TextWithImg = styled.span`
  font-size: 100px;
  font-family: InterTightBold;
  line-height: 1.5;
  color: var(--main-blue);

  @media screen and (min-width: 768px) {
    font-size: 200px;
    line-height: 1.25;
  }
`;

export const Picture = styled.picture`
  margin: 0 -30px;

  @media screen and (min-width: 768px) {
    margin: 0 -60px;
  }
`;

export const ErrorText = styled.p`
  max-width: 255px;
  margin: 0 auto;
  color: ${({ theme }) => theme.textColor};
  font-size: 14px;
  line-height: 1.29;
  font-family:InterTightMedium;
  text-align: center;

  @media screen and (min-width: 768px) {
    max-width: 387px;
  }
`;

export const Button = styled(Link)`
  display:inline-block;
  margin-top: 24px;
  padding: 14px 32px;
  border-radius: 16px;
  border: none;
  box-shadow: 4px 2px 16px 0px #88A5BF7A;
  background-color: var(--main-blue);
  color: var(--white);
  font-family:InterSemiBold;
  font-size: 14px;
  line-height: 1.29;
  cursor: pointer;
  transition: background-color 250ms linear;

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
  }

  @media screen and (min-width: 768px) {
    margin-top: 32px;
    padding: 16px 48px;
    font-size: 18px;
    line-height: 1.33;
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.mainBGColor};
`;

