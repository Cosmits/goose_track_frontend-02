// Yulia

import { Formik, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';

import { sendVerifyEmailUser } from '../../redux/auth/operations';
import {
    Button, Error, Icon, Title,
    Input, Label, LogInPicture, VerifyEmailInput
} from '../RegisterPage/RegisterForm/RegisterForm.styled';
import SuccessIcon from '../../images/RegisterPage/success.svg';
import ErrorIcon from '../../images/RegisterPage/error.svg';
import LogInIcon from '../../images/RegisterPage/login.svg';
import { globalRegex } from '../../Styles/GlobalStyles';

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
};

const schema = yup.object().shape({
    email: yup.string()
        .matches(globalRegex.emailRegexp,
            'Email must contain only digits, letters and . - _ symbols: "example@ukr.net"',)
        .email('Invalid email, enter in format "example@ukr.net"')
        .required('Email is required'),
});

const SendVerifyEmailForm = () => {
    const dispatch = useDispatch();

    const handleVerifySubmit = (values, { resetForm }) => {
        const { email } = values;
        dispatch(sendVerifyEmailUser({ email }))
            .unwrap()
            // .then(() => toast.success('Verify email successfully'))
            // .catch(() => toast.error('An error has occurred. Try again'));

        resetForm();
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={schema}
            onSubmit={handleVerifySubmit}
        >
            {({ values, errors, touched }) => (
                <Form>
                    <Title>Verify Email</Title>
                    <VerifyEmailInput>
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
                    </VerifyEmailInput>

                    <Button type="submit">
                        Verify Email
                        <LogInPicture src={LogInIcon} />
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default SendVerifyEmailForm;