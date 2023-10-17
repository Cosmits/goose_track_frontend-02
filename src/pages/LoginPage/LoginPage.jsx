import LoginForm from '../../components/LoginForm/LoginForm';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
// import gooseLogin from '../../images/goose_login@1x.png';
// import gooseLoginImg from '../../images/goose_login@2x.png';
import { AuthFormWrap, AuthPageWrap, PictureWrap } from './LoginPage.styled';

const LoginPage = () => {
  return (
    
    <AuthPageWrap>
        <AuthFormWrap>
          <LoginForm />
        </AuthFormWrap>

      <AuthNavigate route="/register" textContent="Sign Up" />

      <PictureWrap >
        {/* <picture>
            <source
              type="image/png"
              srcSet={`${gooseLogin} 1x, ${gooseLoginImg} 2x`}
            />
            <img
              src={`${gooseLogin}`}
              alt="Goose registers in the app"
              width={368}
              height={521}
            />
          </picture> */}
        </PictureWrap>
    </AuthPageWrap>
  );
};

export default LoginPage;