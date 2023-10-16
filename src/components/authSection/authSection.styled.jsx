import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { FiLogIn } from 'react-icons/fi';

export const AuthSection = styled.section`
  box-sizing: border-box;
  margin: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main-blue);
`;

export const AuthContainer = styled.div`
  /* box-sizing: border-box;
  margin: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main-blue); */
`;

export const AuthLogo = styled.img`
  display: block;
  width: 150px;
  margin: auto;
`;

export const AuthHeader = styled.h1`
  color: var(--white);
  font-family: Inter;
  font-size: 44px;
  font-style: italic;
  font-weight: 700;
  line-height: 1.09;
`;

export const AuthNav = styled.nav`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`;

export const NavItem = styled.div`
  display: block;
  margin: 0 auto;
`;

export const LoginLink = styled(NavLink)`
  display: block;
`;

export const LoginBtn = styled.button`
  display: block;
  padding: 14px 32px;

  width: 130px;
  height: 48px;

  border: 0.5px solid var(--white);
  border-radius: 16px;
  box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  background-color: var(--white);
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  width: 67px;
  height: 18px;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;

  gap: 6px;
`;

export const LoginSpan = styled.span`
  display: block;

  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.28;
  letter-spacing: -0.28px;

  color: var(--main-blue);
`;

export const StyledFiLogIn = styled(FiLogIn)`
  width: 18px;
  height: 18px;
  stroke: var(--main-blue);
`;

//------------------------------------------------------//
export const SignupLink = styled(NavLink)`
  display: block;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.16;

  color: var(--white);
  text-shadow:
    0px 9.4px 57.6875px rgba(0, 0, 0, 0.04),
    0px 47px 355px rgba(0, 0, 0, 0.07);
  text-decoration-line: underline;
`;
