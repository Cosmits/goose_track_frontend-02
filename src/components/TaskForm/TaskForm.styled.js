import styled from 'styled-components';

import { ReactComponent as AddTaskBtnIcon } from '../../icons/ChoosedDay/add-task-btn-plus.svg.svg';
import { ReactComponent as Edit } from '../../icons/ChoosedDay/task-card-edit.svg';
import { ReactComponent as XClose } from '../../icons/popUp/x-close.svg';

export const PencilIcon = styled(Edit)`
  width: 18px;
  height: 18px;
  stroke: #fff;
  cursor: pointer;
`;

export const AddTask = styled(AddTaskBtnIcon)`
  width: 30px;
  height: 20px;
  stroke: #fff;
  cursor: pointer;
`;

export const CloseIcon = styled(XClose)`
  width: 24px;
  height: 24px;
  stroke: #111;
  cursor: pointer;
  margin-right: auto;
  position: absolute;
  top: 0;
  right: 0;
`;

export const ContainerForm = styled.div`
  width: 100%;
  /* height:360px; */
  position: relative;
  margin: 0 auto;
  border-radius: 8px;
  border: rgba(220, 227, 229, 0.8);
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
  color: ${({ theme }) => theme.labelTextColor};
`;

export const StyledInput = styled.input`
  width: 340px;
  height: 46px;
  background-color: ${({ theme }) => theme.mainBGColor};
  border: none;
  border-radius: 8px;
  margin-bottom: 18px;
  padding-left: 18px;
  border-color: ${({ theme }) => theme.calendarBtnColor}; ;

  &::placeholder {
    font-weight: 600;
    font-size: 14px;
    line-height: 1.3;
    color: ${({ theme }) => theme.mainSideBarText};
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
  color-scheme: ${({ theme }) => theme.colorScheme};;
  
  &::-webkit-calendar-picker-indicator {
    margin-right: 20px;
  }

  @media screen and (max-width: 374px) {
    width: 126px;
  }
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
  user-select: none;
  cursor: pointer;
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
  background-color: #3e85f3;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const StyledAdd = styled(StyledEdit)`
  /* display: flex;
  justify-content: center;
  align-items: center; */
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
