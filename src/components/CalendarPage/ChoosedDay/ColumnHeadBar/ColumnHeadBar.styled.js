import styled from 'styled-components';
import { ReactComponent as AddTaskIcon } from '../../../../icons/ChoosedDay/column-head-bar-add-task-btn.svg';

export const ColumnHeadBarWrapper = styled.div`
  margin-bottom: 24px;
  width: 100%;
  height: 34px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media screen and (min-width: 768px) {
    margin-bottom: 28px;
    height: 38px;
  }
`;

export const ColumnHeadBarTitle = styled.h4`
  color: #111;
  text-align: center;
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
  transition: stroke 300ms linear;
  cursor: pointer;

  &:hover,
  &:focus {
    stroke: #3e85f3;
  }

  @media screen and (min-width: 768px) {
    width: 24px;
    height: 24px;
  }
`;

export const ColumnHeadBarAddTaskBtn = styled.button`
  height: 100%;
`;
