// Serhii
import styled from 'styled-components';

const StyledForm = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex-wrap: wrap;
  gap: 18px;
  width: 299px;
`;

const StyledInputThumbDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 8px;
`;

const StyledLabel = styled.label`
  color: #111;
  font-family: Inter;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 14px;
`;

const StyledInput = styled.input`
  width: 100%;
  height: 42px;
  color: #111;
  padding: 0 14px;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 128.571% */

  border-radius: 8px;
  border: 1px solid rgba(17, 17, 17, 0.1);
`;

const StyledButton = styled.button`
  display: flex;
  width: 195px;
  height: 46px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 16px;
  background-color: #3e85f3;
  border: none;
  color: #fff;
  font-family: Inter;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px;
`;

export {
  StyledForm,
  StyledInputThumbDiv,
  StyledLabel,
  StyledInput,
  StyledButton,
};
