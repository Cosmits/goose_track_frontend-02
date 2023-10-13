// Serhii

import React from 'react';
import StyledText from './AccountPage.styled';
import UserForm from '../components/UserForm/UserForm';

console.log('React: ', React);
// import LoginForm from "components/LoginForm/LoginForm";

const AccountPage = () => {
  return (
    <>
      <StyledText> AccountPage </StyledText>
      <UserForm></UserForm>
    </>
  );
};

export default AccountPage;
