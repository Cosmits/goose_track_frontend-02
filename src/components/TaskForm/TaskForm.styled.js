import styled from 'styled-components';

export const ContainerForm = styled.div`
  /* display: block; */
  width: 396px;
  height: 360;
  margin: 0 auto;
  padding: 40px 28px 40px 28px;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
  box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.2);
  background-color: ${({ theme }) => theme.secondaryBgColor};
`;

export const StyledLabel = styled.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.2;
  display: inline-flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  color: ${({ theme }) => theme.secondaryTextColor};
`;

export const StyledInput = styled.input`
  width: 340px;
  height: 46px;
  background-color: ${({ theme }) => theme.popUpBg};
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;

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
  margin-bottom: 28px;
`;

export const StyledInputTime = styled.input`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.3;
  width: 163px;
  height: 46px;
  padding-left: 18px;
  padding-top: 14px;
  padding-bottom: 14px;
  border: none;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.popUpBg};
`;

export const ContainerRadio = styled.div`
  display: flex;
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-weight: 600;
  font-size: 14px;
  line-height: 1.3;
  margin-right: 16px;
`;

const StyledRadio = styled.input`
  font-family: 'InterSemiBold', sans-serif;
  margin-right: 16px;
  width: 10px;
  height: 10px;
  margin-right: 6px;
  appearance: none;
  border-radius: 50%;
`;

export const StyledRadioLow = styled(StyledRadio)`
  background-color: #72c2f8;
  &::checked {
    border: rgba(114, 194, 248, 0.5)
  }
`;

export const StyledRadioMedium = styled(StyledRadio)`
  background-color: #f3b249;
  &::checked {
    border: rgba(243, 178, 73, 0.5)
  }
`;

export const StyledRadioHigh = styled(StyledRadio)`
  background-color: #ea3d65;
  &::checked {
    border: rgba(234, 61, 101, 0.5)  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 14px;
`;

export const StyledEdit = styled.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 182px;
  height: 48px;
  border-radius: 8px;
  color: #ffff;
  background-color: #3E85F3;
  border: none;
  `;


export const StyledCancel = styled.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({ theme }) => theme.popUpBgBtn};
  border-radius: 8px;
  border: none;
`;

