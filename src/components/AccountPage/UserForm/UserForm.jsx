// Serhii
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../../../redux/auth/operations';
import { selectIsLoggedIn, selectUser } from '../../../redux/auth/selectors';

import { parseISO, addDays, format, isWeekend } from 'date-fns';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

import {
  StyledForm,
  StyledAvatarPlug,
  StyledAvatarImgThumb,
  StyledAvatarImg,
  // StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
  StyledInputWrapperDiv,
  StyledInputSecondWrapperDiv,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './UserForm.styled';
import 'react-datepicker/dist/react-datepicker.css';

const emailRegexp = /^[a-zA-Z0-9._%+-]+@([a-zA-Z0-9_-]+).([a-zA-Z]{2,5})$/;
const phoneRegexp = /^\d{2}\s\(\d{3}\)\s\d{3}\s\d{2}\s\d{2}$/;
// const birthdayRegexp = /^\d{2}\/\d{2}\/\d{4}$/;

export const UserForm = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(selectIsLoggedIn);
  const user = useSelector(selectUser);

  const [avatar, setAvatar] = useState('');

  const initialValues = {
    userName: user.userName ? user.userName : '',
    birthday: user.birthday ? parseISO(user.birthday) : '',
    email: user.email ? user.email : '',
    phone: user.phone ? user.phone : '',
    telegram: user.telegram ? user.telegram : '',
    avatarFile: '',
  };

  const schema = Yup.object().shape({
    avatarFile: Yup.mixed().test(
      'fileType',
      'Invalid file type. Allowed .jpeg or .png',
      (value) => {
        if (!value) return true;
        return ['image/jpg', 'image/jpeg', 'image/png'].includes(value.type);
      },
    ),
    name: Yup.string()
      .min(3, 'The name must be at least 3 characters.')
      .max(16, 'The name must be 16 characters or less.')
      .required('The name is required.'),
    email: Yup.string()
      .matches(emailRegexp, 'Invalid email address.')
      .required('The email is required'),
    birthday: Yup.string()
      .nullable()
      .transform((v) => (v === '' ? null : v)),
    phone: Yup.string()
      .matches(phoneRegexp, 'Invalid number.')
      .nullable()
      .transform((v) => (v === '' ? null : v)),
    telegram: Yup.string()
      .min(3, 'The name must be at least 3 characters.')
      .max(16, 'The telegram must be 16 characters or less.')
      .nullable()
      .transform((v) => (v === '' ? null : v)),
  });

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setFieldValue('avatarFile', file);
      setAvatar(reader.result);
    };

    reader.readAsDataURL(file);
  };

  const onSubmit = async (_, actions) => {
    const { userName, birthday, email, phone, skype, avatarFile } = values;

    const formData = new FormData();
    formData.append('userName', userName);
    formData.append('birthday', birthday);
    formData.append('email', email);
    formData.append('phone', phone);
    formData.append('skype', skype);
    if (avatarFile) {
      formData.append('avatarFile', avatarFile);
    }
    dispatch(updateUser(formData))
      .unwrap()
      .then(() => {
        toast.success('Your profile has been changed successfully.');
        actions.setSubmitting(true);
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  const {
    values,
    errors,
    touched,
    dirty,
    isSubmitting,
    setFieldValue,
    handleBlur,
    handleChange,
    handleSubmit,
    setSubmitting,
  } = useFormik({
    initialValues,
    validationSchema: schema,
    onSubmit,
  });

  useEffect(() => {
    if (isLoggedIn) {
      const { userName, birthday, email, phone, skype, avatarURL } = user;
      setAvatar(avatarURL);
      setFieldValue('userName', userName);
      setFieldValue('email', email);
      setFieldValue('birthday', birthday ? parseISO(birthday) : '');
      setFieldValue('phone', phone);
      setFieldValue('skype', skype);
    }
  }, [isLoggedIn, setFieldValue, user]);

  return (
    <StyledForm
      encType="multipart/form-data"
      autoComplete="off"
      onSubmit={handleSubmit}
    >
      {avatar ? (
        <StyledAvatarImg src={avatar} alt="User's avatar"></StyledAvatarImg>
      ) : (
        <StyledAvatarPlug />
      )}

      <StyledAvatarImgThumb>
        {/* <StyledAddAvatarBtn /> */}
        <input
          type="file"
          name="avatarFile"
          onBlur={handleBlur}
          onChange={(event) => {
            handleImageUpload(event);
            setSubmitting(false);
          }}
        ></input>
      </StyledAvatarImgThumb>

      <StyledUserInfoThumb>
        <StyledUserNameP>{values.name ? values.name : 'Name'}</StyledUserNameP>
        <StyledUserStatusP>User</StyledUserStatusP>
      </StyledUserInfoThumb>

      <StyledInputWrapperDiv>
        <StyledInputSecondWrapperDiv>
          <StyledInputThumbDiv>
            <StyledLabel htmlFor="userName">User Name</StyledLabel>
            <StyledInput
              type="text"
              name="userName"
              placeholder="Enter your name"
              value={values.userName}
              onBlur={handleBlur}
              id="userName"
              onChange={(event) => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {errors.name && <div>{errors.name}</div>}
          </StyledInputThumbDiv>
          <StyledInputThumbDiv>
            <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
            <StyledInput
              name="birthday"
              type="date"
              placeholderText={format(new Date(), 'dd/MM/yyyy')}
              selected={values.birthday}
              value={values.birthday}
              onBlur={handleBlur}
              onChange={(date) => {
                setFieldValue('birthday', date);
                setSubmitting(false);
              }}
              id="birthday"
              dateFormat="dd/MM/yyyy"
              maxDate={addDays(new Date(), 0)}
              highlightDates={(date) => isWeekend(date)}
            />
            {touched.birthday && errors.birthday ? (
              <div>{errors.birthday}</div>
            ) : null}
          </StyledInputThumbDiv>
          <StyledInputThumbDiv>
            <StyledLabel htmlFor="email">Email</StyledLabel>
            <StyledInput
              type="email"
              name="email"
              id="email"
              value={values.email}
              onBlur={handleBlur}
              placeholder="Add a email"
              onChange={(event) => {
                handleChange(event);
                setSubmitting(false);
              }}
              required
            />
            {touched.email && errors.email ? <div>{errors.email}</div> : null}
          </StyledInputThumbDiv>
        </StyledInputSecondWrapperDiv>
        <StyledInputSecondWrapperDiv>
          <StyledInputThumbDiv>
            <StyledLabel htmlFor="phone">Phone</StyledLabel>
            <StyledInput
              type="text"
              name="phone"
              id="phone"
              placeholder="Add a phone number"
              value={values.phone}
              onBlur={handleBlur}
              onChange={(event) => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {touched.phone && errors.phone ? <div>{errors.phone}</div> : null}
          </StyledInputThumbDiv>
          <StyledInputThumbDiv>
            <StyledLabel htmlFor="skype">Skype</StyledLabel>
            <StyledInput
              type="text"
              name="skype"
              id="skype"
              placeholder="Add a skype number"
              value={values.skype}
              onBlur={handleBlur}
              onChange={(event) => {
                handleChange(event);
                setSubmitting(false);
              }}
            />
            {touched.skype && errors.skype ? <div>{errors.skype}</div> : null}
          </StyledInputThumbDiv>
        </StyledInputSecondWrapperDiv>
      </StyledInputWrapperDiv>

      <StyledButton type="submit" disabled={!dirty || isSubmitting}>
        Save changes
      </StyledButton>
    </StyledForm>
  );
};
