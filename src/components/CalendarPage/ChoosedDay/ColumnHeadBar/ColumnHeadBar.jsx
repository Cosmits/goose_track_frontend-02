import PropTypes from 'prop-types';

import {
  ColumnHeadBarAddTaskBtn,
  ColumnHeadBarAddTaskIcon,
  ColumnHeadBarTitle,
  ColumnHeadBarWrapper,
} from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ title = 'In progress' }) {
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{title}</ColumnHeadBarTitle>
      <ColumnHeadBarAddTaskBtn
        type="button"
        onClick={() => console.log('Column Head Bar Add Task Btn click')}
      >
        <ColumnHeadBarAddTaskIcon />
      </ColumnHeadBarAddTaskBtn>
    </ColumnHeadBarWrapper>
  );
}

// ColumnHeadBar.propTypes = {
//   title: PropTypes.string,
// };
