import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useState, useEffect } from 'react';
import { getVerifyEmailUser } from '../../redux/auth/operations';

import { AuthFormWrap, AuthPageWrap, Picture } from '../LoginPage/LoginPage.styled';

import gooseVerifyEmailPng from 'images/VerifyEmailPage/goose-verify-email.png';
import gooseVerifyEmail2xPng from 'images/VerifyEmailPage/goose-verify-email@2x.png';
import gooseVerifyEmailWebp from 'images/VerifyEmailPage/goose-verify-email.webp';
import gooseVerifyEmail2xWebp from 'images/VerifyEmailPage/goose-verify-email@2x.webp';

import AuthNavigate from 'components/LoginPage/AuthNavigate/AuthNavigate';
import SendVerifyEmailForm from 'components/SendVerifyEmailPage/SendVerifyEmailForm';


const SendVerifyEmail = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { verificationToken } = useParams();

  const [redirect, setRedirect] = useState(false)

  useEffect(() => {
    if (verificationToken) {
      const tryVerify = async (verificationToken) => {
        try {
          await dispatch(getVerifyEmailUser(verificationToken)).unwrap()
          setRedirect(true)
        } catch (error) { /* empty */ }
        navigate(`/login`)
      };
      tryVerify(verificationToken);
    }
  }, [dispatch, navigate, verificationToken])

  useEffect(() => { 
    if (redirect) navigate(`/goose_track_frontend-02/login`)
  }, [navigate, redirect])

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