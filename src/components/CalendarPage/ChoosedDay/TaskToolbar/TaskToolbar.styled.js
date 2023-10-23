import styled from 'styled-components';

import { ReactComponent as Edit } from '../../../../icons/ChoosedDay/task-card-edit.svg';
import { ReactComponent as Remove } from '../../../../icons/ChoosedDay/task-card-remove.svg';
import { ReactComponent as Swipe } from '../../../../icons/ChoosedDay/task-card-swipe.svg';

export const TaskToolbarList = styled.ul`
  align-items: flex-end;
  display: flex;
  gap: 10px;
`;

export const TaskToolbarItem = styled.li`
  width: 14px;
  height: 14px;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const TaskToolbarButton = styled.button`
  width: 100%;
  height: 100%;
`;

export const SwipeIcon = styled(Swipe)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.btnTextColor};
  }
`;

export const EditIcon = styled(Edit)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.btnTextColor};
  }
`;

export const RemoveIcon = styled(Remove)`
  cursor: pointer;
  width: 100%;
  height: 100%;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.btnTextColor};
  }
`;
