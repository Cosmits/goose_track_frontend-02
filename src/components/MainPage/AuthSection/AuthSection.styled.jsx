import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

export const AuthSectionWrap = styled.section`
  height: 100vh;

  display: flex;
  align-items: center;
  justify-content: center;
  background-color: var(--main-blue);
`;

export const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AuthLogo = styled.img`
  display: block;
  width: 142px;
  height: 142px;
  margin: auto;

  @media screen and (min-width: 768px) {
    width: 150px;
    height: 149px;
  }
`;

export const AuthHeader = styled.h1`
  color: var(--white);

  font-family: 'InterTightBold', sans-serif;
  font-size: 44px;
  font-weight: 700;
  line-height: 1.09;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const AuthHeaderSpan = styled.span`
  font-family: 'InterTightBoldItalic', sans-serif;
  font-size: 44px;
  font-weight: 700;
  font-style: italic;

  @media screen and (min-width: 768px) {
    font-size: 100px;
    line-height: 1.3;
  }

  @media screen and (min-width: 1440px) {
    font-size: 120px;
    line-height: 1.25;
  }
`;

export const AuthNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;

  @media screen and (min-width: 768px) {
    flex-direction: row-reverse;
    margin-top: 40px;

    justify-content: center;
    align-items: center;
    gap: 24px;
  }
`;

export const NavItem = styled.div`
  display: block;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    margin: 0;
  }
`;

export const LoginLink = styled(NavLink)`
  display: block;
`;

export const LoginBtn = styled.button`
  display: flex;
  padding: 14px 31px;

  width: 130px;
  height: 48px;

  align-items: center;
  flex-shrink: 0;
  border: 0.5px solid var(--white);
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  background-color: var(--white);

  &:hover,
  &:focus {
    transform: scale(1.1);
    transition: 250ms linear;
  }

  &:not(:hover):not(:focus) {
    transition: 250ms linear;
  }

  @media screen and (min-width: 768px) {
    padding: 14px 22px;
    width: 120px;
  }
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 67px;
  height: 18px;

  justify-content: center;
  align-items: center;

  gap: 6px;

  @media screen and (min-width: 768px) {
    width: 77px;
    height: 21px;
  }
`;

export const LoginSpan = styled.span`
  display: block;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;

  color: var(--main-blue);
`;

export const StyledFiLogIn = styled(FiLogIn)`
  width: 18px;
  height: 18px;
  flex-shrink: 0;
  stroke: var(--main-blue);
`;

export const SignupLink = styled(NavLink)`
  display: block;

  font-family: 'InterSemiBold', sans-serif;
  font-size: 12px;
  font-weight: 600;
  line-height: 1.16;

  color: var(--white);
  text-shadow:
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  text-decoration-line: underline;

  &:hover,
  &:focus {
    transform: scale(1.3);
    text-decoration-line: none;
    transition: 250ms linear;
  }
  &:not(:hover):not(:focus) {
    transition: 250ms linear;
  }

  @media screen and (min-width: 768px) {
    font-size: 14px;
  }
`;
