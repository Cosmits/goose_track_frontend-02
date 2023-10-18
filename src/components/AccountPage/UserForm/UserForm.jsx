// Serhii
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  StyledAcountWrapperDiv,
  StyledAvatarDiv,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
  StyledForm,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './UserForm.styled';

import examplePicture from './background.png';
import plusSVG from '../../../../src/images/AccountPage/plus.svg';

const emailRegexp = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const phoneRegexp = /^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

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
    <StyledAcountWrapperDiv>
      <StyledForm name="user_form" onSubmit={formik.handleSubmit}>
        <StyledAvatarDiv>
          <StyledAvatarImgThumb>
            <StyledAvatarImg src={examplePicture} alt="Avatar" />
          </StyledAvatarImgThumb>

          <StyledAddAvatarBtn>
            <img src={plusSVG} width="18px" height="18px"></img>
          </StyledAddAvatarBtn>
        </StyledAvatarDiv>
        <StyledUserInfoThumb>
          <StyledUserNameP>Nadiia Doe</StyledUserNameP>
          <StyledUserStatusP>User</StyledUserStatusP>
        </StyledUserInfoThumb>

        <StyledInputThumbDiv>
          <StyledLabel htmlFor="userName">User Name</StyledLabel>
          <StyledInput
            id="userName"
            name="userName"
            type="text"
            placeholder="Add your name"
            {...formik.getFieldProps('userName')}
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
            {...formik.getFieldProps('birthday')}
          />
          {formik.touched.birthday && formik.errors.birthday ? (
            <div>{formik.errors.birthday}</div>
          ) : null}
        </StyledInputThumbDiv>
        <StyledInputThumbDiv>
          <StyledLabel htmlFor="email">Email</StyledLabel>
          <StyledInput
            type="email"
            name="email"
            id="email"
            placeholder="Add a email"
            {...formik.getFieldProps('email')}
          />
          {formik.touched.email && formik.errors.email ? (
            <div>{formik.errors.email}</div>
          ) : null}
        </StyledInputThumbDiv>
        <StyledInputThumbDiv>
          <StyledLabel htmlFor="phone">Phone</StyledLabel>
          <StyledInput
            type="tel"
            name="phone"
            id="phone"
            placeholder="Add a phone number"
            {...formik.getFieldProps('phone')}
          />
          {formik.touched.phone && formik.errors.phone ? (
            <div>{formik.errors.phone}</div>
          ) : null}
        </StyledInputThumbDiv>
        <StyledInputThumbDiv>
          <StyledLabel htmlFor="skype">Skype</StyledLabel>
          <StyledInput
            type="text"
            name="skype"
            id="skype"
            placeholder="Add a skype number"
            {...formik.getFieldProps('skype')}
          />
          {formik.touched.skype && formik.errors.skype ? (
            <div>{formik.errors.skype}</div>
          ) : null}
        </StyledInputThumbDiv>
        <StyledButton type="submit">Save changes</StyledButton>
      </StyledForm>
    </StyledAcountWrapperDiv>
  );
};

// UserForm.propTypes = {
//   id: PropTypes.strig,
// };
