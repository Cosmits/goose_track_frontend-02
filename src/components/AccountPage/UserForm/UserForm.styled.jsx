// Serhii
import styled from 'styled-components';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { HiPlus } from 'react-icons/hi';
import userSvg from '../../../../src/icons/popUp/user.svg';

// const breakpoints = {
//   mobile: 375,
//   tablet: 768,
//   laptop: 1440,
// };

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

const StyledPhotoLabel = styled.label`
  position: absolute;
  left: calc(50% + 16px);
  top: 34px;
  transform: translate(-50%, -50%);
  width: 14px;
  height: 14px;

  cursor: pointer;
  border: none;
  border-radius: red;
  background: green;

  &:hover,
  &:focus {
    box-shadow: black;
  }
`;

const StyledAddPhotoIcon = styled(HiPlus)`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 8px;
  height: 8px;
  color: var(--white);
`;

const StyledPhotoInput = styled.input`
  opacity: 0;
  width: 0.1px;
  height: 0.1px;
  overflow: hidden;
  position: absolute;
  z-index: -1;
`;

const StyledUserNameP = styled.p`
  margin-top: 59px;
  font-family: 'InterTightRegular', sans-serif;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: 18px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

const StyledUserStatusP = styled.p`
  font-family: 'InterTightRegular', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 600;
  line-height: 14px;
  color: ${({ theme }) => theme.secondaryTextColor};
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
  font-family: 'InterTightRegular', sans-serif;
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
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border-radius: 8px;
  border: 1px solid ${({ theme }) => theme.borderInputColor};
  color: ${({ theme }) => theme.mainTextColor};
  background-color: inherit;

  &::placeholder {
    color: var(--input-gray);
  }

  @media (min-width: 375px) {
    width: 299px;
  }

  @media (min-width: 768px) {
    width: 354px;
  }
`;

const StyledCalendarDiv = styled.div`
  .react-datepicker {
    max-width: 327px;
    height: 100%;

    border-radius: 16px;
    border-color: var(--main-blue);
    font-family: inherit;
    font-size: 18px;
    line-height: 1.3;
    color: var(--white);
    background-color: var(--main-blue);
  }

  .react-datepicker__triangle {
    &::before,
    &::after {
      content: none;
      display: none;
    }
  }

  .react-datepicker__header {
    position: relative;
    padding-bottom: 4px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
    background-color: var(--main-blue);
  }

  .react-datepicker__navigation {
    top: 20px;
  }

  .react-datepicker__navigation-icon {
    &::before {
      border-color: var(--white);
    }
  }

  .react-datepicker__current-month {
    margin-bottom: 0;
    text-align: center;

    font-weight: 600;
    font-size: 24px;
    line-height: 1.2;
    color: var(--white);
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-top: 8px;
    margin-bottom: 0;
  }

  .react-datepicker__day-name {
    color: var(--white);
    font-size: 18px;
    text-align: center;
    text-transform: uppercase;
    width: 36px;
  }

  .react-datepicker__header__dropdown {
    margin-top: 10px;
  }

  .react-datepicker__month-dropdown,
  .react-datepicker__year-dropdown {
    margin-top: 12px;
    background-color: var(--main-blue);
    color: var(--white);
  }
  .react-datepicker__month-option,
  .react-datepicker__year-option {
    &:hover {
      background-color: var(--hover-blue);
      color: var(--white);
    }
  }

  .react-datepicker__month-read-view--down-arrow,
  .react-datepicker__year-read-view--down-arrow {
    border-color: var(--white);
  }

  .react-datepicker__month-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-top: 8px;
    margin-bottom: 12px;
  }

  .react-datepicker__day {
    width: 2.3rem;
    height: 2.3rem;
    line-height: 2.3rem;
    text-align: center;
    margin: 2px;
    border-radius: 50%;
    font-weight: 400;
    font-size: 18px;
    color: var(--white);

    &:hover {
      border-radius: 50%;
      background-color: var(--white);
      color: var(--main-blue);
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--keyboard-selected,
  .react-datepicker__day--weekend.react-datepicker__day--selected,
  .react-datepicker__day--weekend.react-datepicker__day--keyboard-selected {
    background-color: var(--white);
    color: var(--main-blue);
  }

  .react-datepicker__day--weekend {
    color: rgba(255, 255, 255, 0.2);
  }

  .react-datepicker__day--outside-month {
    visibility: hidden;
  }

  .react-datepicker__day--disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const StyledDatePicker = styled(DatePicker)`
  width: 100%;
  padding: 12px 14px;
  margin-bottom: 2px;

  font-weight: 700;
  font-size: 14px;
  line-height: 1.3;
  color: var(--black);
  background-color: inherit;
  border: 1px solid var(--input-gray);
  border-radius: 8px;

  &:focus-visible {
    outline: none;
  }

  &:hover,
  &:focus {
    border: 1px solid var(--black);
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
  font-family: 'InterSemiBold', sans-serif;
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
  StyledForm,
  StyledAvatarImg,
  StyledAvatarPlug,
  StyledPhotoLabel,
  StyledAddPhotoIcon,
  StyledPhotoInput,
  StyledUserNameP,
  StyledUserStatusP,
  StyledInputWrapperDiv,
  StyledInputSecondWrapperDiv,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledCalendarDiv,
  StyledDatePicker,
  StyledButton,
};
