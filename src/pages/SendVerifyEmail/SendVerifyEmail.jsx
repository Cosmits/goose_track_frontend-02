// Yulia

import AuthNavigate from '../../components/LoginPage/AuthNavigate/AuthNavigate';
import { AuthFormWrap, AuthPageWrap, Picture } from '../LoginPage/LoginPage.styled';
import gooseVerifyEmailPng from '../../images/VerifyEmailPage/goose-verify-email.png';
import gooseVerifyEmail2xPng from '../../images/VerifyEmailPage/goose-verify-email@2x.png';
import gooseVerifyEmailWebp from '../../images/VerifyEmailPage/goose-verify-email.webp';
import gooseVerifyEmail2xWebp from '../../images/VerifyEmailPage/goose-verify-email@2x.webp';
import SendVerifyEmailForm from '../../components/SendVerifyEmailPage/SendVerifyEmailForm';

const SendVerifyEmail = () => {
  return (

    <AuthPageWrap>
      <AuthFormWrap>
        <SendVerifyEmailForm />
      </AuthFormWrap>

      <AuthNavigate route="/login" textContent="Log In" />

        <Picture>
          <source
            type="image/webp"
            srcSet={`${gooseVerifyEmailWebp} 1x, ${gooseVerifyEmail2xWebp} 2x`}
          />
          <source
            type="image/png"
            srcSet={`${gooseVerifyEmailPng} 1x, ${gooseVerifyEmail2xPng} 2x`}
          />
          <img
            src={`${gooseVerifyEmailPng}`}
            alt="Goose registers in the app"
            width={368}
            height={521}
          />
        </Picture>
    </AuthPageWrap>
  );
};

export default SendVerifyEmail;