// Serhii
import {
  StyledForm,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
} from './UserForm.styled';
// import { PropTypes } from 'prop-types';
// import { UseState } from 'react';

// import { StyledTxt } from './UserForm.styled';
// import { users } from './user.json';

export const UserForm = () => {
  // handleChange(e){ this.setState({ value: e.target.value }) };

  return (
    <StyledForm name="user_form">
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="user_name">User Name</StyledLabel>
        <StyledInput type="text" name="name" id="user_name" />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="birthday">Birthday</StyledLabel>
        <StyledInput type="date" name="birthday" id="birthday" />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="email">Email</StyledLabel>
        <StyledInput type="email" name="email" id="email" />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="phone">Phone</StyledLabel>
        <StyledInput type="tel" name="phone" id="phone" />
      </StyledInputThumbDiv>
      <StyledInputThumbDiv>
        <StyledLabel htmlFor="skype">Birthday</StyledLabel>
        <StyledInput type="text" name="skype" id="skype" />
      </StyledInputThumbDiv>
      <StyledButton type="submit">Save changes</StyledButton>
    </StyledForm>
  );
};

// UserForm.propTypes = {
//   id: PropTypes.strig,
// };
