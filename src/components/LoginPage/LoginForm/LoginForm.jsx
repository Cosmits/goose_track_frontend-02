// Yulia

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { logIn } from '../../../redux/auth/operations';
import {
  Button, DontShowIcon, Error, Icon,
  Input, InputWrap, Label, List, LogInPicture,
  PasswordButton, ShowIcon, SpanText, Title
} from '../../RegisterPage/RegisterForm/RegisterForm.styled'
import SuccessIcon from 'images/RegisterPage/success.svg';
import ErrorIcon from 'images/RegisterPage/error.svg';
import LogInIcon from 'images/RegisterPage/login.svg';
import GoogleIcon from 'images/RegisterPage/GoogleIcon.svg'

import { globalRegex } from '../../../Styles/GlobalStyles';
import { Divider } from '@mui/material';
import { showSuccessToast } from '../../../services/showToast';

const ErrorMessages = ({ name }) => {
  return (
    <ErrorMessage
      name={name}
      render={message => (<Error>{message}</Error>)}
    />
  );
};

const initialValues = {
  email: '',
  password: '',
};

const schema = yup.object().shape({
  email: yup.string()
    .matches(globalRegex.emailRegexp,
      'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"',)
    .email('Invalid email, enter in format "example@ukr.net"')
    .required('Email is required'),
  password: yup.string()
    .min(6, 'Password must be at least 6 characters')
    .matches(globalRegex.passwordRegexp, 'Password must contain lowercase and uppercase letters and digits')
    .required('Password is required'),
});

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const dispatch = useDispatch();

  const handleLogInSubmit = (values, { resetForm }) => {
    const { email, password } = values;

    dispatch(logIn({ email, password }))
      .unwrap()
      .then(() => showSuccessToast('Login successfully'))

    resetForm();
  };

  const handleGoogleAuth = () => {
    window.location.href = 'https://goose-track-backend-02.onrender.com/users/google/';
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={handleLogInSubmit}
    >
      {({ values, errors, touched }) => (
        <Form>
          <Title>Log In</Title>

          <Button type="button" onClick={handleGoogleAuth} className={"googleAuth"} >
            <LogInPicture src={GoogleIcon} />
            Sign up using Google
          </Button>
          <Divider sx={{ margin: '24px auto' }}>
            <SpanText>or continue with google</SpanText>
          </Divider>

          <List>
            <InputWrap>
              <Label
                htmlFor="email"
                className={touched.email ? errors.email ? 'error' : 'success' : ''}>Email
              </Label>
              <Input
                type="email"
                id="email"
                name="email"
                autoComplete="off"
                placeholder="Enter email"
                className={touched.email ? errors.email ? 'error' : 'success' : ''}
              />
              <ErrorMessages name="email" />
              {errors.email && touched.email
                ? (<Icon src={ErrorIcon} />)
                : values.email && !errors.email
                  ? (<Icon src={SuccessIcon} />)
                  : null}
            </InputWrap>

            <InputWrap>
              <Label
                htmlFor="password"
                className={touched.password ? errors.password ? 'error' : 'success' : ''}>Password
              </Label>
              <Input
                type={showPassword ? 'text' : 'password'}
                value={values.password}
                id="password"
                name="password"
                autoComplete="off"
                placeholder="Enter password"
                className={touched.password ? errors.password ? 'error' : 'success' : ''}
              />
              <ErrorMessages name="password" />

              <PasswordButton
                type="button"
                onClick={handleTogglePassword}
              >
                {showPassword ? (
                  <DontShowIcon />
                ) : (
                  <ShowIcon />
                )}
              </PasswordButton>

            </InputWrap>
          </List>

          <Button type="submit">
            Log In
            <LogInPicture src={LogInIcon} />
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default LoginForm;
