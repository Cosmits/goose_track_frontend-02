// Serhii
import { PropTypes } from 'prop-types';
// import { UseState } from 'react';

import { StyledTxt } from './UserForm.styled';
import { users } from './user.json';

const UserForm = (id) => {
  console.log('id: ', id);
  console.log('users: ', users);

  //   handleChange;

  return (
    <>
      avatar userName status
      <form action="">
        userName phone birthday skype email
        <button type="submit"></button>
      </form>
      <StyledTxt>First text</StyledTxt>
    </>
  );
};

export default UserForm;

UserForm.propTypes = {
  id: PropTypes.strig,
};
