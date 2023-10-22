import {
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
  AuthSectionWrap,
} from './AuthSection.styled';

import logoRetina from '../../../images/Auth_mainpage/GOOSE_logo_2x.png';
import logo from '../../../images/Auth_mainpage/GOOSE_logo_1x.png';

import { Container } from '../../../Styles/Container.styled';

import { useMediaQuery } from 'react-responsive';

const AuthSection = () => {
  const isRetina = useMediaQuery({ query: '(min-resolution: 2dppx)' });
  return (
    <AuthSectionWrap>
      <Container>
        <AuthContainer>
          <AuthLogo src={isRetina ? logoRetina : logo} alt="Goose Track Logo" />
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
    </AuthSectionWrap>
  );
};

export default AuthSection;
