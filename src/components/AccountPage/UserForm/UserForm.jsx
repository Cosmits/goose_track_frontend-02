import { useState, useEffect, useRef } from 'react';

import {
  ContainerWrapper,
  Container,
  InputWrapper,
  UserName,
  Image,
  ImageContainer,
  IconContainer,
  Text,
  Forma,
  Button,
  CustomInput,
  Avatar,
  InputIcon,
  PasswordBtn,
  DeleteBtn,
} from './UserForm.styled';

import DatePicker, { registerLocale } from 'react-datepicker';
import uk from 'date-fns/locale/uk';
import 'react-datepicker/dist/react-datepicker.css';
import './CustomDatePicker.css';

import { useSelector, useDispatch } from 'react-redux';
import { format, parse } from 'date-fns';

import { selectUser } from '../../../redux/auth/selectors';
import { updateUser } from '../../../redux/auth/operations';
import { imageExists } from '../../../hooks/useImageExists';

import { globalRegex } from '../../../Styles/GlobalStyles';

import SuccessIcon from '../../../images/RegisterPage/success.svg';
import ErrorIcon from '../../../images/RegisterPage/error.svg';

registerLocale('uk', uk);

export const UserForm = () => {
  const { userName, email, phone, skype, birthday, avatarURL } =
    useSelector(selectUser)

  const [startDate, setStartDate] = useState(
    birthday === '' ? new Date() : parse(birthday, 'dd/MM/yyyy', new Date()),
  )

  const [newUserName, setNewUserName] = useState(userName ?? '')
  const [newEmail, setNewEmail] = useState(email ?? '')
  const [newPhone, setNewPhone] = useState(phone ?? '')
  const [newSkype, setNewSkype] = useState(skype ?? '')
  const [newAvatar, setNewAvatar] = useState(avatarURL ?? '')
  const [avatarPreviewUrl, setAvatarPreviewUrl] = useState('')

  const [isSaving, setIsSaving] = useState(false)
  const [isEmailValid, setIsEmailValid] = useState(true)
  const [isNameValid, setIsNameValid] = useState(true)
  const [isPhoneValid, setIsPhoneValid] = useState(true)
  const [isSkypeValid, setIsSkypeValid] = useState(true)
  const [isBirthdayValid, setIsBirthdayValid] = useState(true)

  const dispatch = useDispatch();
  const avatarInputRef = useRef(null);

  let someChanges =
    userName !== newUserName ||
    email !== newEmail ||
    phone !== newPhone ||
    skype !== newSkype ||
    birthday !== (startDate && format(startDate, 'dd/MM/yyyy')) ||
    avatarPreviewUrl !== '';

  useEffect(() => {
    return () => {
      if (avatarPreviewUrl) {
        URL.revokeObjectURL(avatarPreviewUrl);
      }
    };
  }, [avatarPreviewUrl]);

  useEffect(() => {
    function checkImg() {
      imageExists(avatarURL).then(function (exists) {
        if (!exists) setNewAvatar('')
        else setNewAvatar(avatarURL)
      });
    }
    checkImg()
  }, [avatarURL])


  useEffect(() => {
    if (isSaving) {
      const id = setTimeout(() => {
        setIsSaving(false);

      }, 3000);
      return () => {
        clearTimeout(id)
      }
    }
  }, [isSaving])

  const handleIconContainerClick = () => {
    if (avatarInputRef.current) {
      avatarInputRef.current.click();
    }
  };

  const handleIconOnClick = (e) => {
    const file = e.target.files[0];
    setNewAvatar(file);

    if (file) {
      const previewUrl = URL.createObjectURL(file);
      setAvatarPreviewUrl(previewUrl);
    } else {
      setAvatarPreviewUrl(avatarURL);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!someChanges) return;

    setIsSaving(true);

    const formData = new FormData();
    if (userName !== newUserName) {
      formData.append('userName', newUserName);
    }
    if (email !== newEmail) {
      formData.append('email', newEmail);
    }
    if (phone !== newPhone) {
      formData.append('phone', newPhone);
    }
    if (skype !== newSkype) {
      formData.append('skype', newSkype);
    }
    if (birthday !== format(startDate, 'dd/MM/yyyy')) {
      formData.append('birthday', format(startDate, 'dd/MM/yyyy'));
    }
    if (avatarPreviewUrl !== '') {
      formData.append('avatarURL', newAvatar);
    }
    dispatch(updateUser(formData));

  };

  return (

    <ContainerWrapper>
      <Container>
        <Forma onSubmit={handleSubmit}>
          <ImageContainer>
            {avatarPreviewUrl ? (
              <Image src={avatarPreviewUrl} alt={userName} />
            ) : newAvatar ? (
              <Image src={newAvatar} alt={userName} />
            ) : (
              <Avatar />
            )}
            <IconContainer onClick={handleIconContainerClick} />
            <input
              type="file"
              accept="image/*"
              ref={avatarInputRef}
              onChange={handleIconOnClick}
              style={{ display: 'none' }}
              name="avatar"
            />
          </ImageContainer>
          <UserName>{userName}</UserName>
          <Text>User</Text>
          <InputWrapper>
            <div>
              <label>
                <p>User Name</p>
                <input
                  type="text"
                  name="userName"
                  placeholder="Enter your name"
                  value={newUserName}
                  onChange={(e) => {
                    setNewUserName(e.target.value);
                    setIsNameValid(globalRegex.customFieldRegexp.test(e.target.value))
                  }}
                  style={{ borderColor: newUserName ? (isNameValid ? 'var(--correct-color)' : 'var(--error-color)') : '', }}
                />
                {newUserName ? (isNameValid ? (<InputIcon src={SuccessIcon} />) : (<InputIcon src={ErrorIcon} />)) : null}
              </label>
              <div>
                <label>
                  <p>Birthday</p>
                  <DatePicker
                    dateFormat="dd/MM/yyyy"
                    calendarStartDay={1}
                    selected={startDate}
                    onChange={(date) => {
                      setStartDate(date)
                      if (date) {
                        setIsBirthdayValid(globalRegex.birthdayRegexp.test(format(date, 'dd/MM/yyyy')));
                      } else {
                        setIsBirthdayValid(false);
                      }

                    }}
                    customInput={
                      <CustomInput
                        type="text"
                        name="birthday"
                        placeholder={format(new Date(), 'dd/MM/yyyy')}
                        value={startDate?.toString()}
                        style={{ borderColor: birthday ? (isBirthdayValid ? 'var(--correct-color)' : 'var(--error-color)') : '', }}
                      />
                    }
                  />
                  {birthday ? (isBirthdayValid ? (<InputIcon src={SuccessIcon} />) : (<InputIcon src={ErrorIcon} />)) : null}
                </label>
              </div>
              <div>
                <label>
                  <p>Email</p>
                  <input
                    type="text"
                    name="email"
                    placeholder="Enter your email address"
                    value={newEmail}
                    onChange={(e) => {
                      setNewEmail(e.target.value)
                      setIsEmailValid(globalRegex.emailRegexp.test(e.target.value));
                    }}
                    style={{
                      borderColor: newEmail ? (isEmailValid ? 'var(--correct-color)' : 'var(--error-color)') : '',
                    }}
                  />
                  {newEmail ? (isEmailValid ? (<InputIcon src={SuccessIcon} />) : (<InputIcon src={ErrorIcon} />)) : null}
                </label>
              </div>
            </div>

            <div>
              <label>
                <p>Phone</p>
                <input
                  type="text"
                  name="phone"
                  placeholder="Enter phone number"
                  value={newPhone}
                  onChange={(e) => {
                    setNewPhone(e.target.value);
                    setIsPhoneValid(globalRegex.phoneRegexp.test(e.target.value))
                  }}
                  style={{
                    borderColor: newPhone ? (isPhoneValid ? 'var(--correct-color)' : 'var(--error-color)') : '',
                  }}
                />
                {newPhone ? (isPhoneValid ? (<InputIcon src={SuccessIcon} />) : (<InputIcon src={ErrorIcon} />)) : null}
              </label>
              <label>
                <p>Skype</p>
                <input
                  type="text"
                  name="skype"
                  placeholder="Enter skype"
                  value={newSkype}
                  onChange={(e) => {
                    setNewSkype(e.target.value)
                    setIsSkypeValid(globalRegex.SkypeRegexp.test(e.target.value))
                  }}
                  style={{
                    borderColor: newSkype ? (isSkypeValid ? 'var(--correct-color)' : 'var(--error-color)') : '',
                  }}
                />
                {newSkype ? (isSkypeValid ? (<InputIcon src={SuccessIcon} />) : (<InputIcon src={ErrorIcon} />)) : null}
              </label>
            </div>
            <Button type="submit" disabled={isSaving || !someChanges} >
              Save
            </Button>
            <PasswordBtn>Change Password</PasswordBtn>
            <DeleteBtn>Delete account</DeleteBtn>
          </InputWrapper>
        </Forma>
      </Container>
    </ContainerWrapper>
  );
};
