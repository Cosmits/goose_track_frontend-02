import PropTypes from 'prop-types';

import {
  ColumnHeadBarAddTaskIcon,
  ColumnHeadBarTitle,
  ColumnHeadBarWrapper,
} from './ColumnHeadBar.styled';

export default function ColumnHeadBar({ title, category }) {
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{title}</ColumnHeadBarTitle>
      <button
        type="button"
        onClick={() =>
          console.log(`Column Head Bar Add Task Btn click ${category}`)
        }
      >
        <ColumnHeadBarAddTaskIcon />
      </button>
    </ColumnHeadBarWrapper>
  );
}

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};
