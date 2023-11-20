import styled from 'styled-components';

import { ReactComponent as AddTaskBtnIcon } from '../../../../icons/ChoosedDay/add-task-btn-plus.svg.svg';
import { ReactComponent as Edit } from '../../../../icons/ChoosedDay/task-card-edit.svg';
import { ReactComponent as XClose } from '../../../../icons/popUp/x-close.svg';

export const ContainerForm = styled.div`
  padding-top: 48px;
  padding-bottom: 40px;
  padding-left: 18px;
  padding-right: 18px;
  max-width: 303px;

  @media screen and (min-width: 767px) {
    max-width: none;
    width: 396px;
    padding-top: 40px;
    padding-left: 28px;
    padding-right: 28px;
  }
`;

export const CloseIcon = styled(XClose)`
  position: absolute;
  width: 24px;
  height: 24px;
  stroke: ${({ theme }) => theme.mainTextColor};
  top: 14px;
  right: 14px;
  cursor: pointer;
  transition: 300ms;

  &:hover,
  &:focus {
    transform: scale(1.3);
  }
`;

export const StyledLabel = styled.label`
  font-family: 'InterTightMedium', sans-serif;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.16;
  color: ${({ theme }) => theme.formLabelColor};
`;

export const StyledInput = styled.input`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  font-size: 16px;
  line-height: 1.28;
  height: 42px;
  width: 100%;
  margin-top: 8px;
  border-radius: 8px;
  margin-bottom: 16px;
  padding-left: 14px;
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
`;

export const StyledTime = styled.div`
  display: flex;
  gap: 15px;
  width: 100%;
  margin-bottom: 16px;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
  }

  & > div {
    display: flex;
    flex-direction: column;
    gap: 8px;
    width: 100%;
  }
`;

export const StyledInputTime = styled.input`
  font-family: 'InterSemiBold', sans-serif;
  font-size: 14px;
  font-weight: 600;
  line-height: 1.28;
  height: 42px;
  padding-left: 14px;
  padding-right: 14px;
  border: none;
  border-radius: 8px;

  color-scheme: ${({ theme }) => theme.colorScheme};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  background-color: ${({ theme }) => theme.mainBGColor};

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }

  @media screen and (min-width: 768px) {
    padding-left: 18px;
    padding-right: 18px;
  }
`;

export const ContainerRadio = styled.div`
  margin-bottom: 32px;
`;

export const Label = styled.label`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 1.28;
  margin-right: 16px;
  user-select: none;
  cursor: pointer;
`;

export const StyledRadio = styled.input`
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
  &:checked {
    border: 2px solid rgba(114, 194, 248, 0.5);
    outline: 3px solid rgba(114, 194, 248, 0.5);
  }
`;

export const StyledRadioMedium = styled(StyledRadio)`
  background-color: #f3b249;
  &:checked {
    border: 1px solid rgba(243, 178, 73, 0.5);
    outline: 3px solid rgba(243, 178, 73, 0.5);
  }
`;

export const StyledRadioHigh = styled(StyledRadio)`
  background-color: #ea3d65;
  &:checked {
    border: 1px solid rgba(234, 61, 101, 0.5);
    outline: 3px solid rgba(234, 61, 101, 0.5);
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 14px;
`;

export const AddTask = styled(AddTaskBtnIcon)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`;

export const PencilIcon = styled(Edit)`
  width: 30px;
  height: 18px;
  stroke: #fff;
`;

export const StyledEdit = styled.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 182px;
  height: 48px;
  border-radius: 8px;
  color: #ffff;
  background-color: #3e85f3;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;

  &:hover,
  &:focus {
    background-color: var(--hover-blue);
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;

export const StyledAdd = styled(StyledEdit)``;

export const StyledCancel = styled.button`
  font-family: 'InterSemiBold', sans-serif;
  font-weight: 600;
  width: 144px;
  height: 48px;
  background-color: ${({ theme }) => theme.inputBorderColor};
  border: 1px solid ${({ theme }) => theme.inputBorderColor};
  border-radius: 8px;
  cursor: pointer;

  &:hover,
  &:focus {
    border-color: ${({ theme }) => theme.mainTextColor};
    box-shadow: 4px 2px 16px 0px rgba(136, 165, 191, 0.48);
  }
`;
