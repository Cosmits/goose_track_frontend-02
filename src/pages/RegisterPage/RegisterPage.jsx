// Yulia

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { AuthFormWrap, AuthPageWrap, PictureWrap } from './RegisterPage.styled';
import gooseRegister from '../../images/goose_register@1x.png';
import gooseRegisterImg from '../../images/goose_register@2x.png';

const RegisterPage = () => {
  return (
    
    <AuthPageWrap>
        <AuthFormWrap>
          <RegisterForm />
        </AuthFormWrap>

      <AuthNavigate route="/login" textContent="Log In" />
      <PictureWrap >
        <picture>
            <source
              type="image/png"
              srcSet={`${gooseRegister} 1x, ${gooseRegisterImg} 2x`}
            />
            <img
              src={`${gooseRegister}`}
              alt="Goose registers in the app"
              width={400}
              height={416}
            />
          </picture>
        </PictureWrap>
    </AuthPageWrap>
    
  );
};

export default RegisterPage;