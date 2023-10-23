import LoginForm from '../../components/LoginPage/LoginForm/LoginForm';
import AuthNavigate from '../../components/LoginPage/AuthNavigate/AuthNavigate';
import { AuthFormWrap, AuthLink, AuthPageWrap, PictureWrap } from './LoginPage.styled';
import gooseLogin from '../../images/LoginPage/goose_login@1x.png';
import gooseLoginImg from '../../images/LoginPage/goose_login@2x.png';
import gooseLoginWebp from '../../images/LoginPage/goose_login@1x.webp';
import gooseLoginImgWebp from '../../images/LoginPage/goose_login@2x.webp';

const LoginPage = () => {
  return (

    <AuthPageWrap>
      <AuthFormWrap>
        <LoginForm />
      </AuthFormWrap>

      <AuthNavigate route="/register" textContent="Sign Up" />
      <AuthLink to="/send-verify-email">Verify Email</AuthLink>

      <PictureWrap >
        <picture>
          <source
            type="image/webp"
            srcSet={`${gooseLoginWebp} 1x, ${gooseLoginImgWebp} 2x`}
          />
          <source
            type="image/png"
            srcSet={`${gooseLogin} 1x, ${gooseLoginImg} 2x`}
          />
          <img
            src={`${gooseLogin}`}
            alt="Goose flies in a rocket"
            width={368}
            height={521}
          />
        </picture>
      </PictureWrap>
    </AuthPageWrap>
  );
};

export default LoginPage;