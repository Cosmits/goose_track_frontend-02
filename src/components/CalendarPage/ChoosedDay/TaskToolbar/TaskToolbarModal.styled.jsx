import styled from 'styled-components';

import { ReactComponent as Swipe } from '../../../../icons/ChoosedDay/task-card-swipe.svg';

export const TaskToolbarModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 14px;

  width: 115px;
  padding: 14px;

  border-radius: 8px;
  background-color: ${({ theme }) => theme.secondaryBgColor};
  box-shadow: 0px 4px 16px 0px rgba(17, 17, 17, 0.1);

  border: ${({ theme }) => theme.toolbarBorder};

  @media screen and (min-width: 768px) {
    width: 147px;
    padding: 20px 24px;
  }
`;

export const TaskToolbarModalText = styled.p`
  flex-shrink: 0;
  color: ${({ theme }) => theme.secondaryTextColor};
  font-family: 'InterTightMedium', sans-serif;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 1.16; /* 116.667% */

  transition: color 300ms linear;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28; /* 128.571% */
  }
`;

export const SwipeIcon = styled(Swipe)`
  cursor: pointer;
  width: 14px;
  height: 14px;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;

  @media screen and (min-width: 768px) {
    width: 16px;
    height: 16px;
  }
`;

export const TaskToolbarModalBtn = styled.button`
  display: flex;
  justify-content: space-between;

  &:hover ${SwipeIcon}, &:focus ${SwipeIcon} {
    stroke: ${({ theme }) => theme.btnTextColor};
  }

  &:hover ${TaskToolbarModalText}, &:focus ${TaskToolbarModalText} {
    color: ${({ theme }) => theme.btnTextColor};
  }
`;
