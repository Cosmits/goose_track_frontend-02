// Serhii

import React from 'react';
import StyledText from './AccountPage.styled';
import UserForm from '../components/UserForm/UserForm';

console.log('React: ', React);

const AccountPage = () => {
  return (
    <>
      <UserForm>
        <StyledText>Hello</StyledText>
      </UserForm>
    </>
  );
};

export default AccountPage;
