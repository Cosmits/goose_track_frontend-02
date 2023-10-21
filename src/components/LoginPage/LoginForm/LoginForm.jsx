// Yulia

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { logIn } from '../../../redux/auth/operations';
import {
    Button, DontShowIcon, Error, Icon,
    Input, InputWrap, Label, List, LogInPicture,
    PasswordButton, ShowIcon, Title
} from '../../RegisterPage/RegisterForm/RegisterForm.styled'
import SuccessIcon from '../../../images/RegisterPage/success.svg';
import ErrorIcon from '../../../images/RegisterPage/error.svg';
import LogInIcon from '../../../images/RegisterPage/login.svg';

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
        .email('Invalid email, enter in format "example@ukr.net"')
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"',
        )
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
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
            .then(() => toast.success('Login succesfully'))
            .catch(() => toast.error('An error has occurred. Try again'));

        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleLogInSubmit}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <Title>Log In</Title>
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