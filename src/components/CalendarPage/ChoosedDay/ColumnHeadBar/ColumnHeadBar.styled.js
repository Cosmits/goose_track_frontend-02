import styled from 'styled-components';
import { ReactComponent as AddTaskIcon } from '../../../../icons/ChoosedDay/column-head-bar-add-task-btn.svg';

export const ColumnHeadBarWrapper = styled.div`
  margin-bottom: 24px;
  width: 299px;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    width: 301px;
    height: 38px;
  }
`;

export const ColumnHeadBarTitle = styled.h4`
  color: ${({ theme }) => theme.mainTextColor};
  text-align: center;
  font-family: 'InterTightBold', sans-serif;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: ${() => 20 / 18};

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: ${() => 24 / 20};
  }
`;

export const ColumnHeadBarAddTaskIcon = styled(AddTaskIcon)`
  width: 22px;
  height: 22px;
  stroke: #111111;
  stroke: ${({ theme }) => theme.mainTextColor};
  transition: stroke 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: ${({ theme }) => theme.btnTextColor};
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;
