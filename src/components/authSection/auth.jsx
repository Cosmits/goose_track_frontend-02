import {
  AuthSection,
  AuthContainer,
  AuthHeader,
  AuthLogo,
  AuthNav,
  LoginLink,
  SignupLink,
  LoginBtn,
  LoginSpan,
  StyledFiLogIn,
  Wrap,
  NavItem,
  AuthHeaderSpan,
} from './authSection.styled';
import gooseLogo from '../../images/Auth_mainpage/GOOSE_logo.png';
// import { Route, Routes } from 'react-router';

export const Auth = () => {
  return (
    <AuthSection>
      <AuthContainer>
        <AuthLogo src={gooseLogo} alt="Goose Track Logo" />
        <AuthHeader>
          G<AuthHeaderSpan>oo</AuthHeaderSpan>se Track
        </AuthHeader>
        <AuthNav>
          <NavItem>
            <LoginLink to="/login">
              <LoginBtn>
                <Wrap>
                  <LoginSpan>Log in</LoginSpan>
                  <StyledFiLogIn />
                </Wrap>
              </LoginBtn>
            </LoginLink>
          </NavItem>
          <NavItem>
            <SignupLink to="/register">Sign up</SignupLink>
          </NavItem>
        </AuthNav>
        {/* <Routes>
          <Route
            path="/login"
            // element={}
          />
          <Route
            path="/register"
            // element={}
          />
        </Routes> */}
      </AuthContainer>
    </AuthSection>
  );
};
