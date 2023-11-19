import { Field, Form } from 'formik';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
display: flex;
  flex-direction: column;
  flex: 1;
  padding-top: 28px;
  padding-bottom: 29px;
  padding-left: 20px;
  padding-right: 20px;
  width: 335px;

  @media screen and (min-width: 768px) {
    padding-top: 32px;
    padding-bottom: 32px;
    padding-left: 32px;
    padding-right: 32px;
    max-width: none;
    width: 468px;
  }
`;

export const StyledTitle = styled.h2`
  font-size: 24px;
  text-align: center;
  margin-bottom: 16px;
  color: ${({ theme }) => theme.mainTextColor}; 
`;

export const StyledWarningText = styled.p`
  max-width: 320px;
  text-align: center;
  font-size: 16px;
  line-height: 1.3;
  color: ${({ theme }) => theme.secondaryTextColor};
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 16px;
`;


export const StyledFormText = styled.p`
  font-size: 14px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const StyledField = styled(Field)`
  padding-top: 14px;
  padding-bottom: 14px;
  padding-left: 14px;
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 400;
  border-radius: 8px;
  margin: 14px 0;
  width: 100%;
   color: ${({ theme }) => theme.secondaryTextColor};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  background-color: ${({ theme }) => theme.mainBGColor};

  &::placeholder {
    font-size: 14px;
    color: ${({ theme }) => theme.formLabelColor};
  }

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  &.error {
    border-color: red;
  }

  @media screen and (min-width: 768px) {
    font-size: 16px;
  }

`;

export const StyledButtonWrapper = styled.div`
  max-width: 260px;
  display: flex;
  gap: 16px;
  margin: 0 auto;
`;

export const StyledButtonCancel = styled.button`
  width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #efefef;
  border-radius: 8px;
  padding: 10px;
  color: #111;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: box-shadow 0.2s;
  }
`;
export const StyledButtonDelete = styled.button`
  min-width: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(234, 61, 101);
  border-radius: 8px;
  padding: 10px;
  color: #ffffff;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  border: 0;
  cursor: pointer;

  &:hover,
  &:focus {
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
    transition: box-shadow 0.2s;
  }
`;

export const StyledErrorText = styled.p`
  font-size: 14px;
  color: red;
`;