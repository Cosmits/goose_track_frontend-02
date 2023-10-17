import {
  StyledForm,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './UserForm.styled';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { birthdayRegexp, emailRegexp, phoneRegexp } from './UserForm';

export const UserForm = () => {
  const formik = useFormik({
    initialValues: {
      userName: '',
      birthday: '',
      email: '',
      phone: '',
      skype: '',
    },
    validationSchema: Yup.object({
      userName: Yup.string()
        .max(16, 'Must be 16 characters or less')
        .required('Required'),
      birthday: Yup.date(birthdayRegexp),
      email: Yup.string()
        .email(emailRegexp, 'Invalid email address')
        .required('Please enter your email address'),
      phone: Yup.string().matches(phoneRegexp, 'Phone number is not valid'),
      skype: Yup.string().max(16, 'Must be 16 characters or less'),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <StyledForm name="user_form" onSubmit={formik.handleSubmit}>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="userName">User Name</StyledLabel>
        <StyledInput
          id="userName"
          name="userName"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.userName}
        />
        {formik.touched.userName && formik.errors.userName ? (
          <div>{formik.errors.userName}</div>
        ) : null}
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
        <StyledInput
          type="date"
          name="birthday"
          id="birthday"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.birthday}
        />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput
          type="email"
          name="email"
          id="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
        />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <StyledInput
          type="tel"
          name="phone"
          id="phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
        />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="skype">Birthday</StyledLabel>
        <StyledInput
          type="text"
          name="skype"
          id="skype"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.skype}
        />
      </StyledInputThumbDiv>
      <StyledButton type="submit">Save changes</StyledButton>
    </StyledForm>
  );
};
