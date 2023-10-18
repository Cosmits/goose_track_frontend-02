import styled from 'styled-components';

import { ReactComponent as AddTaskBtnIcon } from '../../../../icons/ChoosedDay/add-task-btn-plus.svg.svg';

export const AddTaskButton = styled.button`
  width: 100%;
  height: 48px;
  display: flex;
  gap: 8px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  border: 1px dashed #3e85f3;
  background-color: #e3f3ff;
  cursor: pointer;
  transition: background-color 300ms linear;

  &:hover,
  &:focus {
    background-color: #cae8ff;
  }

  @media screen and (min-width: 768px) {
    height: 52px;
  }
`;

export const AddTaskButtonIcon = styled(AddTaskBtnIcon)`
  width: 24px;
  height: 24px;
  stroke: #111111;
  /* transition: stroke 300ms linear; */
  cursor: pointer;

  /* &:hover,
  &:focus {
    stroke: #3e85f3;
  } */
`;

export const AddTaskBtnTitle = styled.p`
  color: #111;

  text-align: center;
  /* font-family: Inter; */
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: ${() => 18 / 14};
`;
