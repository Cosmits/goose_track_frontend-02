// Serhii
import styled from 'styled-components';
// import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiPlus } from 'react-icons/hi';
import userSvg from '../../../../src/icons/popUp/user.svg';
// @media screen and(min - width: 375px) { }
// @media screen and(min - width: 768px) { }
// @media screen and(min - width: 1440px) { }

const StyledForm = styled.form`
  position: relative;
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  gap: 40px;
  width: 100%;
  padding-top: 59px;
  padding-bottom: 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  @media (min-width: 768px) {
    gap: 24px;
  }

  @media (min-width: 1440px) {
  }
`;

const StyledInputWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
  @media (min-width: 1440px) {
    flex-direction: row;
    gap: 50px;
  }
`;

const StyledAvatarPlug = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: -31px;
  width: 124px;
  height: 124px;
  padding: 2px;
  background-color: #3e85f3;
  fill: red;
  stroke: black;
  background-image: url(${userSvg});
  background-repeat: no-repeat;
  background-size: 50% 50%;
  background-position: center;
  border: 2px solid var(--gradient-blue);
  border-radius: 50%;
  z-index: 1;
`;

const StyledAvatarImgThumb = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  border-radius: 50%;
  overflow: hidden;
`;

const StyledAvatarImg = styled.img`
  position: absolute;
  align-items: center;
  display: flex;
  top: -31px;
  width: 124px;
  height: 124px;
  object-fit: cover;
  border: 2px solid var(--gradient-blue);
  border-radius: 50%;
  background-color: ${({ theme }) => theme.secondaryBgColor};
`;

const StyledAddAvatarBtn = styled(HiPlus)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  color: var(--white);
`;

const StyledUserInfoThumb = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;

const StyledUserNameP = styled.p`
  margin-top: 59px;
  /* !--------------------- */
  font-family: InterTight;
  /* !--------------------- */
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const StyledUserStatusP = styled.p`
  font-family: InterTight;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const StyledInputSecondWrapperDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: 18px;
`;

const StyledInputThumbDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledLabel = styled.label`
  color: ${({ theme }) => theme.labelTextColor};
  font-family: 'Inter', sans-serif;
  font-size: 12px;
  font-weight: 400;
  line-height: 1.16;

  @media (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28;
  }
`;

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  padding: 0 14px;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderInputColor};
  color: ${({ theme }) => theme.mainTextColor};
  background-color: ${({ theme }) => theme.secondaryBgColor};

  &::placeholder {
    color: ${({ theme }) => theme.mainTextColor};
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
  }
`;

const StyledButton = styled.button`
  display: flex;
  width: 195px;
  height: 46px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  color: #fff;
  font-family: 'Inter', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;

  &:hover,
  &:focus {
    background-color: #2b78ef;
  }
  &:disabled {
    background-color: red;
  }
`;

export {
  StyledAvatarImgThumb,
  StyledAvatarImg,
  StyledAvatarPlug,
  StyledAddAvatarBtn,
  StyledUserInfoThumb,
  StyledUserNameP,
  StyledUserStatusP,
  StyledForm,
  StyledInputWrapperDiv,
  StyledInputSecondWrapperDiv,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
};
