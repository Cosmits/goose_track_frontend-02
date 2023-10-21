// Yulia

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { useState } from 'react';

import { register } from '../../../redux/auth/operations';
import SuccessIcon from '../../../images/RegisterPage/success.svg';
import ErrorIcon from '../../../images/RegisterPage/error.svg';
import LogInIcon from '../../../images/RegisterPage/login.svg';
import {
    Button, DontShowIcon, Error, Icon,
    Input, InputWrap, Label, List, LogInPicture,
    PasswordButton, ShowIcon, Title
} from './RegisterForm.styled';

const ErrorMessages = ({ name }) => {
    return (
        <ErrorMessage
            name={name}
            render={message => (<Error>{message}</Error>)}
        />
    );
};

const initialValues = {
    name: '',
    email: '',
    password: '',
};

const schema = yup.object().shape({
    name: yup.string()
        .required('Name is required'),
    email: yup.string()
        .matches(
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"',
        )
        .email('Invalid email, enter in format "example@ukr.net"')
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .matches(/[a-zA-Z]/, 'Password must contain at least one letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .required('Password is required'),
});

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const dispatch = useDispatch();

    const handleSubmit = (values, { resetForm }) => {
        const { name, email, password } = values;

        dispatch(register({ userName: name, email, password }))
            .unwrap()
            .then(() => toast.success('Registration succesfully'))
            .catch(() => toast.error('Something went wrong. Try again'));
        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleSubmit}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <Title>Sign Up</Title>
                    <List>
                        <InputWrap>
                            <Label
                                htmlFor="name"
                                className={touched.name ? errors.name ? 'error' : 'success' : ''}>Name
                            </Label>
                            <Input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                autoComplete="off"
                                className={touched.name ? errors.name ? 'error' : 'success' : ''}
                            />
                            <ErrorMessages name="name" />
                            {errors.name && touched.name
                                ? (<Icon src={ErrorIcon} />)
                                : values.name && !errors.name
                                    ? (<Icon src={SuccessIcon} />)
                                    : null}
                        </InputWrap>

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
                        Sign Up
                        <LogInPicture src={LogInIcon} />
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;