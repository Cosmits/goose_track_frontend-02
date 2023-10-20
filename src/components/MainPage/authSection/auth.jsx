import {
  AuthSection,
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
  AuthContainer,
} from './authSection.styled';
import gooseLogo from '../../../images/Auth_mainpage/GOOSE_logo.png';
import { Container } from '../../../Styles/Container.styled';

export const Auth = () => {
  return (
    <AuthSection>
      <Container>
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
        </AuthContainer>
      </Container>
    </AuthSection>
  );
};
