import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: flex;
  width: 396px;
  /* height: 360; */
  margin: 0 auto;
  padding: 40px 20px 28px 20px;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 12px;
  line-height: 1.2;
  color: #343434CC;;
`;

export const StyledInput = styled.input`
  display: block;
  width: 340px;
  height: 46px;
  background-color: #F6F6F6;
  border: none;
  border-radius: 8px;
  margin-bottom: 14px;

    &::placeholder {
      font-weight: 600;
      font-size: 14px;
      line-height: 1.3;
      padding-left: 18px;
      color: rgba(52, 52, 52, 1);
  }
`;


export const StyledTime = styled.div`
  display: flex;
  gap: 14px;
`;

export const StyledInputTime = styled.input`
  display: block;
  width: 163px;
  height: 46px;
  background-color: #F6F6F6;
  border: none;
  border-radius: 8px;
  margin-bottom: 14px;
`;


export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

export const StyledEdit = styled.button`
  display: block;
  width: 178px;
  height: 48px;
  border-radius: 8px;
  /* margin-right: 10px; */
  margin-top: 20px;
  color: #ffff;
  background-color: #3E85F3;
  border: none;
  `;

export const StyledCancel = styled.button`
  display: block;
  width: 144px;
  height: 48px;
  margin-top: 20px;
  color: #111111;
  border-radius: 8px;
  border: none;
`;

