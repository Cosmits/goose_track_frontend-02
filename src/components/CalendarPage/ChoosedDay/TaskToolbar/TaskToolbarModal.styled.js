import styled from 'styled-components';

import { ReactComponent as Swipe } from '../../../../icons/ChoosedDay/task-card-swipe.svg';

export const TaskToolbarModalWrapper = styled.div`
  position: absolute;
  top: 44px;
  left: -39px;

  display: flex;
  flex-direction: column;
  gap: 14px;

  padding: 14px;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);
`;

export const TaskToolbarModalText = styled.p`
  flex-shrink: 0;
  color: #343434;
  font-family: 'InterTightMedium', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 14px; /* 116.667% */
`;

export const SwipeIcon = styled(Swipe)`
  flex-shrink: 0;
  cursor: pointer;
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.btnTextColor};
  }
`;

export const TaskToolbarModalBtn = styled.button`
  display: flex;
  gap: 8px;
`;
