import { Formik } from 'formik';
import { useDispatch, useSelector } from 'react-redux';
import { deleteUser } from '../../../../redux/auth/operations';
import * as Yup from 'yup';
import { useState } from 'react';
import {
  StyledButtonCancel,
  StyledButtonDelete,
  StyledButtonWrapper,
  StyledErrorText,
  StyledField,
  StyledForm,
  StyledFormText,
  StyledTitle,
  StyledWarningText,
} from './DeleteProfileForm.styled';
import { selectUser } from '../../../../redux/auth/selectors';
import { globalRegex } from '../../../../Styles/GlobalStyles';
import { CloseBtn } from '../../AddFeedbackModal/FeedbackForm/FeedbackForm.styled';

const DeleteProfileForm = ({ onClose }) => {
  const [error, setError] = useState(false);

  const dispatch = useDispatch();

  const user = useSelector(selectUser);
  let emailSchema = Yup.object().shape({
    email: Yup.string()
      .trim()
      .matches(globalRegex.emailRegexp,
        'Invalid email. Valid email contain xxx@xxx.xxx'
      )
      .required('Email is required field'),
  });

  const handleSubmit = async ({ email }) => {
    if (email !== user.email) return setError(true);
    setError(false);
    dispatch(deleteUser(user._id.toString()));
  };
  return (
    <Formik
      initialValues={{ email: '' }}
      validationSchema={emailSchema}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={handleSubmit}
    >
      <StyledForm>
        <CloseBtn onClick={onClose} />
        
        <StyledTitle >Warning!</StyledTitle>
        <StyledWarningText >
          Deleting your account can`t be undone, and all data associated with it
          will be lost.
        </StyledWarningText>
        <StyledFormText >
          Enter your email to confirm your action
        </StyledFormText>
        <div>
          <StyledField
            type="email"
            id="email"
            name="email"
            placeholder="Enter email"
            className={error ? 'error' : ''}
          />
          {error && <StyledErrorText>Invalid email</StyledErrorText>}
        </div>

        <StyledButtonWrapper>
          <StyledButtonDelete type="submit">
            Delete account
          </StyledButtonDelete>
          <StyledButtonCancel type="button" onClick={onClose}>
            Cancel
          </StyledButtonCancel>
        </StyledButtonWrapper>
      </StyledForm>
    </Formik>
  );
};

export default DeleteProfileForm;