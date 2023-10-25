import PropTypes from 'prop-types';

import {
  ColumnHeadBarAddTaskIcon,
  ColumnHeadBarTitle,
  ColumnHeadBarWrapper,
} from './ColumnHeadBar.styled';
import { useModal } from '../modalContext';

export default function ColumnHeadBar({ title, idOfCompletion }) {
  const { toogleModal } = useModal();
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{title}</ColumnHeadBarTitle>
      <button
        type="button"
        onClick={() => {
          toogleModal(idOfCompletion);
        }}
      >
        <ColumnHeadBarAddTaskIcon />
      </button>
    </ColumnHeadBarWrapper>
  );
}

ColumnHeadBar.propTypes = {
  title: PropTypes.string.isRequired,
  idOfCompletion: PropTypes.string.isRequired,
};
