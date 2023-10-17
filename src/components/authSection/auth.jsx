import {
  AuthSection,
  AuthContainer,
  AuthHeader,
  AuthLogo,
  AuthNav,
  LoginLink,
  SignupLink,
} from './authSection.styled';
import gooseLogo from '../../assets/GOOSE_logo.png';
import { Route, Routes } from 'react-router';
import { FiLogIn } from 'react-icons/fi';

export const Auth = () => {
  return (
    <AuthSection>
      <AuthContainer>
        <AuthLogo src={gooseLogo} alt="Goose Track Logo" />
        <AuthHeader>Goose Track</AuthHeader>
        <AuthNav>
          <LoginLink to="/login">Log in</LoginLink>
          <SignupLink to="/register">
            Sign up
            <FiLogIn />
          </SignupLink>
        </AuthNav>
        <Routes>
          <Route
            path="/login"
            // element={}
          />
          <Route
            path="/register"
            // element={}
          />
        </Routes>
      </AuthContainer>
    </AuthSection>
  );
};
