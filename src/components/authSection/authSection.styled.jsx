import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const AuthSection = styled.section`
  margin: -8px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: var(--main-blue);
`;

export const AuthContainer = styled.div`
  display: block;

  height: 300px;
  margin: auto;

  text-align: center;
`;

export const AuthLogo = styled.img`
  display: block;
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

export const AuthNav = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 32px;
  gap: 16px;
`;

export const LoginLink = styled(NavLink)`
  display: block;
  color: var(--white);
`;

export const SignupLink = styled(NavLink)`
  display: block;
  background-color: var(--white);
  color: var(--main-blue);
`;
