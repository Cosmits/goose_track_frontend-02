// Yulia

import RegisterForm from '../../components/RegisterForm/RegisterForm';
import AuthNavigate from '../../components/AuthNavigate/AuthNavigate';
import { AuthFormWrap, AuthPageWrap, PictureWrap } from './RegisterPage.styled';
import gooseRegister from '../../images/RegisterPage/goose_register@1x.png';
import gooseRegisterImg from '../../images/RegisterPage/goose_register@2x.png';
import gooseRegisterWebp from '../../images/RegisterPage/goose_register@1x.webp';
import gooseRegisterImgWebp from '../../images/RegisterPage/goose_register@2x.webp';

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
            type="image/webp"
            srcSet={`${gooseRegisterWebp} 1x, ${gooseRegisterImgWebp} 2x`}
          />
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