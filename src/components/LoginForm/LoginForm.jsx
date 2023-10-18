// Yulia

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { logIn } from '../../redux/auth/operations';
import { Button, Error, Icon, Input, InputWrap, Label, List, LogInPicture, Title } from '../RegisterForm/AuthForm.styled';
import SuccessIcon from '../../images/RegisterPage/success.svg';
import ErrorIcon from '../../images/RegisterPage/error.svg';
import LogInIcon from '../../images/RegisterPage/login.svg';

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
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const LoginForm = () => {
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
                                className={ touched.email ? errors.email ? 'error' : 'success' : ''}
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
                                type="password"
                                id="password"
                                name="password"
                                autoComplete="off"
                                placeholder="Enter password"
                                className={ touched.password ? errors.password ? 'error' : 'success' : ''}
                            />
                            <ErrorMessages name="password" />
                            {errors.password && touched.password
                                ? (<Icon src={ErrorIcon} />)
                                : values.password && !errors.password
                                    ? (<Icon src={SuccessIcon} />)
                                    : null}
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