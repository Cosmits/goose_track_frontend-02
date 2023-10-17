// Yulia

import { Formik, Form, ErrorMessage} from 'formik';
import * as yup from 'yup';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { register } from '../../redux/auth/operations';
import { Button, Error, Icon, Input, InputWrap, Label, List, Title } from './AuthForm.styled';

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
        .email('Invalid email, enter in format "example@ukr.net"')
        .required('Email is required'),
    password: yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
});

const RegisterForm = () => {
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
                                className={ touched.name ? errors.name ? 'error' : 'success' : ''}
                            />
                            <ErrorMessages name="name"/>
                            {errors.name && touched.name
                                ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDE1SDEzVjE3SDExVjE1Wk0xMSA3SDEzVjEzSDExVjdaTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40NyAyMiAxMS45OSAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTEuOTkgMlpNMTIgMjBDNy41OCAyMCA0IDE2LjQyIDQgMTJDNCA3LjU4IDcuNTggNCAxMiA0QzE2LjQyIDQgMjAgNy41OCAyMCAxMkMyMCAxNi40MiAxNi40MiAyMCAxMiAyMFoiIGZpbGw9IiNFNzRBM0IiLz4KPC9zdmc+Cg==' />)
                                : values.name && !errors.name
                                    ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYgMTMuOEw4LjQyNSAxMS42MjVDOC4yNDE2NyAxMS40NDE3IDguMDEyNjcgMTEuMzU0MyA3LjczOCAxMS4zNjNDNy40NjI2NyAxMS4zNzEgNy4yMzMzMyAxMS40NjY3IDcuMDUgMTEuNjVDNi44NjY2NyAxMS44MzMzIDYuNzc1IDEyLjA2NjcgNi43NzUgMTIuMzVDNi43NzUgMTIuNjMzMyA2Ljg2NjY3IDEyLjg2NjcgNy4wNSAxMy4wNUw5LjkgMTUuOUMxMC4wODMzIDE2LjA4MzMgMTAuMzE2NyAxNi4xNzUgMTAuNiAxNi4xNzVDMTAuODgzMyAxNi4xNzUgMTEuMTE2NyAxNi4wODMzIDExLjMgMTUuOUwxNi45NzUgMTAuMjI1QzE3LjE1ODMgMTAuMDQxNyAxNy4yNDYgOS44MTIzMyAxNy4yMzggOS41MzdDMTcuMjI5MyA5LjI2MjMzIDE3LjEzMzMgOS4wMzMzMyAxNi45NSA4Ljg1QzE2Ljc2NjcgOC42NjY2NyAxNi41MzMzIDguNTc1IDE2LjI1IDguNTc1QzE1Ljk2NjcgOC41NzUgMTUuNzMzMyA4LjY2NjY3IDE1LjU1IDguODVMMTAuNiAxMy44Wk0xMiAyMkMxMC42MTY3IDIyIDkuMzE2NjcgMjEuNzM3MyA4LjEgMjEuMjEyQzYuODgzMzMgMjAuNjg3MyA1LjgyNSAxOS45NzUgNC45MjUgMTkuMDc1QzQuMDI1IDE4LjE3NSAzLjMxMjY3IDE3LjExNjcgMi43ODggMTUuOUMyLjI2MjY3IDE0LjY4MzMgMiAxMy4zODMzIDIgMTJDMiAxMC42MTY3IDIuMjYyNjcgOS4zMTY2NyAyLjc4OCA4LjFDMy4zMTI2NyA2Ljg4MzMzIDQuMDI1IDUuODI1IDQuOTI1IDQuOTI1QzUuODI1IDQuMDI1IDYuODgzMzMgMy4zMTIzMyA4LjEgMi43ODdDOS4zMTY2NyAyLjI2MjMzIDEwLjYxNjcgMiAxMiAyQzEzLjM4MzMgMiAxNC42ODMzIDIuMjYyMzMgMTUuOSAyLjc4N0MxNy4xMTY3IDMuMzEyMzMgMTguMTc1IDQuMDI1IDE5LjA3NSA0LjkyNUMxOS45NzUgNS44MjUgMjAuNjg3MyA2Ljg4MzMzIDIxLjIxMiA4LjFDMjEuNzM3MyA5LjMxNjY3IDIyIDEwLjYxNjcgMjIgMTJDMjIgMTMuMzgzMyAyMS43MzczIDE0LjY4MzMgMjEuMjEyIDE1LjlDMjAuNjg3MyAxNy4xMTY3IDE5Ljk3NSAxOC4xNzUgMTkuMDc1IDE5LjA3NUMxOC4xNzUgMTkuOTc1IDE3LjExNjcgMjAuNjg3MyAxNS45IDIxLjIxMkMxNC42ODMzIDIxLjczNzMgMTMuMzgzMyAyMiAxMiAyMlpNMTIgMjBDMTQuMjE2NyAyMCAxNi4xMDQzIDE5LjIyMSAxNy42NjMgMTcuNjYzQzE5LjIyMSAxNi4xMDQzIDIwIDE0LjIxNjcgMjAgMTJDMjAgOS43ODMzMyAxOS4yMjEgNy44OTU2NyAxNy42NjMgNi4zMzdDMTYuMTA0MyA0Ljc3OSAxNC4yMTY3IDQgMTIgNEM5Ljc4MzMzIDQgNy44OTYgNC43NzkgNi4zMzggNi4zMzdDNC43NzkzMyA3Ljg5NTY3IDQgOS43ODMzMyA0IDEyQzQgMTQuMjE2NyA0Ljc3OTMzIDE2LjEwNDMgNi4zMzggMTcuNjYzQzcuODk2IDE5LjIyMSA5Ljc4MzMzIDIwIDEyIDIwWiIgZmlsbD0iIzNDQkM4MSIvPgo8L3N2Zz4K' />)
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
                                placeholder="Enter email"
                                className={ touched.email ? errors.email ? 'error' : 'success' : ''}
                            />
                            <ErrorMessages name="email" />
                            {errors.email && touched.email
                                ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDE1SDEzVjE3SDExVjE1Wk0xMSA3SDEzVjEzSDExVjdaTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40NyAyMiAxMS45OSAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTEuOTkgMlpNMTIgMjBDNy41OCAyMCA0IDE2LjQyIDQgMTJDNCA3LjU4IDcuNTggNCAxMiA0QzE2LjQyIDQgMjAgNy41OCAyMCAxMkMyMCAxNi40MiAxNi40MiAyMCAxMiAyMFoiIGZpbGw9IiNFNzRBM0IiLz4KPC9zdmc+Cg==' />)
                                : values.email && !errors.email
                                    ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYgMTMuOEw4LjQyNSAxMS42MjVDOC4yNDE2NyAxMS40NDE3IDguMDEyNjcgMTEuMzU0MyA3LjczOCAxMS4zNjNDNy40NjI2NyAxMS4zNzEgNy4yMzMzMyAxMS40NjY3IDcuMDUgMTEuNjVDNi44NjY2NyAxMS44MzMzIDYuNzc1IDEyLjA2NjcgNi43NzUgMTIuMzVDNi43NzUgMTIuNjMzMyA2Ljg2NjY3IDEyLjg2NjcgNy4wNSAxMy4wNUw5LjkgMTUuOUMxMC4wODMzIDE2LjA4MzMgMTAuMzE2NyAxNi4xNzUgMTAuNiAxNi4xNzVDMTAuODgzMyAxNi4xNzUgMTEuMTE2NyAxNi4wODMzIDExLjMgMTUuOUwxNi45NzUgMTAuMjI1QzE3LjE1ODMgMTAuMDQxNyAxNy4yNDYgOS44MTIzMyAxNy4yMzggOS41MzdDMTcuMjI5MyA5LjI2MjMzIDE3LjEzMzMgOS4wMzMzMyAxNi45NSA4Ljg1QzE2Ljc2NjcgOC42NjY2NyAxNi41MzMzIDguNTc1IDE2LjI1IDguNTc1QzE1Ljk2NjcgOC41NzUgMTUuNzMzMyA4LjY2NjY3IDE1LjU1IDguODVMMTAuNiAxMy44Wk0xMiAyMkMxMC42MTY3IDIyIDkuMzE2NjcgMjEuNzM3MyA4LjEgMjEuMjEyQzYuODgzMzMgMjAuNjg3MyA1LjgyNSAxOS45NzUgNC45MjUgMTkuMDc1QzQuMDI1IDE4LjE3NSAzLjMxMjY3IDE3LjExNjcgMi43ODggMTUuOUMyLjI2MjY3IDE0LjY4MzMgMiAxMy4zODMzIDIgMTJDMiAxMC42MTY3IDIuMjYyNjcgOS4zMTY2NyAyLjc4OCA4LjFDMy4zMTI2NyA2Ljg4MzMzIDQuMDI1IDUuODI1IDQuOTI1IDQuOTI1QzUuODI1IDQuMDI1IDYuODgzMzMgMy4zMTIzMyA4LjEgMi43ODdDOS4zMTY2NyAyLjI2MjMzIDEwLjYxNjcgMiAxMiAyQzEzLjM4MzMgMiAxNC42ODMzIDIuMjYyMzMgMTUuOSAyLjc4N0MxNy4xMTY3IDMuMzEyMzMgMTguMTc1IDQuMDI1IDE5LjA3NSA0LjkyNUMxOS45NzUgNS44MjUgMjAuNjg3MyA2Ljg4MzMzIDIxLjIxMiA4LjFDMjEuNzM3MyA5LjMxNjY3IDIyIDEwLjYxNjcgMjIgMTJDMjIgMTMuMzgzMyAyMS43MzczIDE0LjY4MzMgMjEuMjEyIDE1LjlDMjAuNjg3MyAxNy4xMTY3IDE5Ljk3NSAxOC4xNzUgMTkuMDc1IDE5LjA3NUMxOC4xNzUgMTkuOTc1IDE3LjExNjcgMjAuNjg3MyAxNS45IDIxLjIxMkMxNC42ODMzIDIxLjczNzMgMTMuMzgzMyAyMiAxMiAyMlpNMTIgMjBDMTQuMjE2NyAyMCAxNi4xMDQzIDE5LjIyMSAxNy42NjMgMTcuNjYzQzE5LjIyMSAxNi4xMDQzIDIwIDE0LjIxNjcgMjAgMTJDMjAgOS43ODMzMyAxOS4yMjEgNy44OTU2NyAxNy42NjMgNi4zMzdDMTYuMTA0MyA0Ljc3OSAxNC4yMTY3IDQgMTIgNEM5Ljc4MzMzIDQgNy44OTYgNC43NzkgNi4zMzggNi4zMzdDNC43NzkzMyA3Ljg5NTY3IDQgOS43ODMzMyA0IDEyQzQgMTQuMjE2NyA0Ljc3OTMzIDE2LjEwNDMgNi4zMzggMTcuNjYzQzcuODk2IDE5LjIyMSA5Ljc4MzMzIDIwIDEyIDIwWiIgZmlsbD0iIzNDQkM4MSIvPgo8L3N2Zz4K' />)
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
                                placeholder="Enter password"
                                className={ touched.password ? errors.password ? 'error' : 'success' : ''}
                            />
                            <ErrorMessages name="password" />
                            {errors.password && touched.password
                                ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTExIDE1SDEzVjE3SDExVjE1Wk0xMSA3SDEzVjEzSDExVjdaTTExLjk5IDJDNi40NyAyIDIgNi40OCAyIDEyQzIgMTcuNTIgNi40NyAyMiAxMS45OSAyMkMxNy41MiAyMiAyMiAxNy41MiAyMiAxMkMyMiA2LjQ4IDE3LjUyIDIgMTEuOTkgMlpNMTIgMjBDNy41OCAyMCA0IDE2LjQyIDQgMTJDNCA3LjU4IDcuNTggNCAxMiA0QzE2LjQyIDQgMjAgNy41OCAyMCAxMkMyMCAxNi40MiAxNi40MiAyMCAxMiAyMFoiIGZpbGw9IiNFNzRBM0IiLz4KPC9zdmc+Cg==' />)
                                : values.password && !errors.password
                                    ? (<Icon src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEwLjYgMTMuOEw4LjQyNSAxMS42MjVDOC4yNDE2NyAxMS40NDE3IDguMDEyNjcgMTEuMzU0MyA3LjczOCAxMS4zNjNDNy40NjI2NyAxMS4zNzEgNy4yMzMzMyAxMS40NjY3IDcuMDUgMTEuNjVDNi44NjY2NyAxMS44MzMzIDYuNzc1IDEyLjA2NjcgNi43NzUgMTIuMzVDNi43NzUgMTIuNjMzMyA2Ljg2NjY3IDEyLjg2NjcgNy4wNSAxMy4wNUw5LjkgMTUuOUMxMC4wODMzIDE2LjA4MzMgMTAuMzE2NyAxNi4xNzUgMTAuNiAxNi4xNzVDMTAuODgzMyAxNi4xNzUgMTEuMTE2NyAxNi4wODMzIDExLjMgMTUuOUwxNi45NzUgMTAuMjI1QzE3LjE1ODMgMTAuMDQxNyAxNy4yNDYgOS44MTIzMyAxNy4yMzggOS41MzdDMTcuMjI5MyA5LjI2MjMzIDE3LjEzMzMgOS4wMzMzMyAxNi45NSA4Ljg1QzE2Ljc2NjcgOC42NjY2NyAxNi41MzMzIDguNTc1IDE2LjI1IDguNTc1QzE1Ljk2NjcgOC41NzUgMTUuNzMzMyA4LjY2NjY3IDE1LjU1IDguODVMMTAuNiAxMy44Wk0xMiAyMkMxMC42MTY3IDIyIDkuMzE2NjcgMjEuNzM3MyA4LjEgMjEuMjEyQzYuODgzMzMgMjAuNjg3MyA1LjgyNSAxOS45NzUgNC45MjUgMTkuMDc1QzQuMDI1IDE4LjE3NSAzLjMxMjY3IDE3LjExNjcgMi43ODggMTUuOUMyLjI2MjY3IDE0LjY4MzMgMiAxMy4zODMzIDIgMTJDMiAxMC42MTY3IDIuMjYyNjcgOS4zMTY2NyAyLjc4OCA4LjFDMy4zMTI2NyA2Ljg4MzMzIDQuMDI1IDUuODI1IDQuOTI1IDQuOTI1QzUuODI1IDQuMDI1IDYuODgzMzMgMy4zMTIzMyA4LjEgMi43ODdDOS4zMTY2NyAyLjI2MjMzIDEwLjYxNjcgMiAxMiAyQzEzLjM4MzMgMiAxNC42ODMzIDIuMjYyMzMgMTUuOSAyLjc4N0MxNy4xMTY3IDMuMzEyMzMgMTguMTc1IDQuMDI1IDE5LjA3NSA0LjkyNUMxOS45NzUgNS44MjUgMjAuNjg3MyA2Ljg4MzMzIDIxLjIxMiA4LjFDMjEuNzM3MyA5LjMxNjY3IDIyIDEwLjYxNjcgMjIgMTJDMjIgMTMuMzgzMyAyMS43MzczIDE0LjY4MzMgMjEuMjEyIDE1LjlDMjAuNjg3MyAxNy4xMTY3IDE5Ljk3NSAxOC4xNzUgMTkuMDc1IDE5LjA3NUMxOC4xNzUgMTkuOTc1IDE3LjExNjcgMjAuNjg3MyAxNS45IDIxLjIxMkMxNC42ODMzIDIxLjczNzMgMTMuMzgzMyAyMiAxMiAyMlpNMTIgMjBDMTQuMjE2NyAyMCAxNi4xMDQzIDE5LjIyMSAxNy42NjMgMTcuNjYzQzE5LjIyMSAxNi4xMDQzIDIwIDE0LjIxNjcgMjAgMTJDMjAgOS43ODMzMyAxOS4yMjEgNy44OTU2NyAxNy42NjMgNi4zMzdDMTYuMTA0MyA0Ljc3OSAxNC4yMTY3IDQgMTIgNEM5Ljc4MzMzIDQgNy44OTYgNC43NzkgNi4zMzggNi4zMzdDNC43NzkzMyA3Ljg5NTY3IDQgOS43ODMzMyA0IDEyQzQgMTQuMjE2NyA0Ljc3OTMzIDE2LjEwNDMgNi4zMzggMTcuNjYzQzcuODk2IDE5LjIyMSA5Ljc4MzMzIDIwIDEyIDIwWiIgZmlsbD0iIzNDQkM4MSIvPgo8L3N2Zz4K' />)
                                    : null}
                        </InputWrap>
                    </List>

                    <Button type="submit">
                        Sign Up
                        <img src='data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHZpZXdCb3g9IjAgMCAyMCAyMCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTEyLjUgMi41SDEzLjVDMTQuOTAwMSAyLjUgMTUuNjAwMiAyLjUgMTYuMTM1IDIuNzcyNDhDMTYuNjA1NCAzLjAxMjE3IDE2Ljk4NzggMy4zOTQ2MiAxNy4yMjc1IDMuODY1MDJDMTcuNSA0LjM5OTggMTcuNSA1LjA5OTg3IDE3LjUgNi41VjEzLjVDMTcuNSAxNC45MDAxIDE3LjUgMTUuNjAwMiAxNy4yMjc1IDE2LjEzNUMxNi45ODc4IDE2LjYwNTQgMTYuNjA1NCAxNi45ODc4IDE2LjEzNSAxNy4yMjc1QzE1LjYwMDIgMTcuNSAxNC45MDAxIDE3LjUgMTMuNSAxNy41SDEyLjVNOC4zMzMzMyA1LjgzMzMzTDEyLjUgMTBNMTIuNSAxMEw4LjMzMzMzIDE0LjE2NjdNMTIuNSAxMEwyLjUgMTAiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+Cjwvc3ZnPgo='/>
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default RegisterForm;