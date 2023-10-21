// Serhii
import styled from 'styled-components';

// @media screen and(min - width: 375px) { }
// @media screen and(min - width: 768px) { }
// @media screen and(min - width: 1440px) { }

const StyledAcountWrapperDiv = styled.div`
  margin-top: 95px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  position: relative;
  gap: 40px;
  padding-top: 59px;
  padding-bottom: 40px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.secondaryBgColor};

  border: 1px solid black;
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

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
`;

export {
  StyledAcountWrapperDiv,
  StyledForm,
  StyledInputWrapperDiv,
  StyledInputSecondWrapperDiv,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
};
