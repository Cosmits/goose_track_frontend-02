import styled from 'styled-components';

export const ContainerForm = styled.div`
  display: block;
  width: 396px;
  height: 360;
  margin: 0 auto;
  padding: 40px 20px 28px 20px;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.secondaryBgColor};
`;

export const StyledLabel = styled.label`
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const StyledInput = styled.input`
  display: block;
  width: 340px;
  height: 46px;
  background-color: ${({ theme }) => theme.popUpBg};
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
  justify-content: center;

`;

export const StyledInputTime = styled.input`
  display: block;
  width: 163px;
  height: 46px;
  background-color: ${({ theme }) => theme.popUpBg};
  border: none;
  border-radius: 8px;
  margin-bottom: 14px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 16px;
`;

export const StyledRadio = styled.input`
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`;

export const StyledRadioLow = styled(StyledRadio)`
  background-color: #72c2f8;
`;

export const StyledRadioMedium = styled(StyledRadio)`
  background-color: #f3b249;
`;

export const StyledRadioHigh = styled(StyledRadio)`
  background-color: #ea3d65;
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledEdit = styled.button`
  font-weight: 600;
  display: block;
  width: 182px;
  height: 48px;
  margin-right: 10px;
  border-radius: 8px;
  margin-top: 20px;
  color: #ffff;
  background-color: #3E85F3;
  border: none;
  `;


export const StyledCancel = styled.button`
  font-weight: 600;
  display: block;
  width: 144px;
  height: 48px;
  margin-top: 20px;
  background-color: ${({ theme }) => theme.popUpBgBtn};
  border-radius: 8px;
  border: none;
`;

