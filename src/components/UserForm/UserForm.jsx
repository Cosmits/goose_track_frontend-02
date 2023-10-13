// Serhii
import { PropTypes } from 'prop-types';

import { StyledTxt } from './UserForm.styled';

const UserForm = (id) => {
  console.log('id: ', id);

  return (
    <>
      <StyledTxt>First text</StyledTxt>
    </>
  );
};

export default UserForm;

UserForm.propTypes = {
  id: PropTypes.strig,
};
