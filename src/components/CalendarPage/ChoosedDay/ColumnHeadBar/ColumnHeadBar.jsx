import PropTypes from 'prop-types';

import {
  ColumnHeadBarAddTaskIcon,
  ColumnHeadBarTitle,
  ColumnHeadBarWrapper,
} from './ColumnHeadBar.styled';
import { useModal } from '../modalContext';

export default function ColumnHeadBar({ title, idOfCompletion }) {
  const { toggleModal } = useModal();
  return (
    <ColumnHeadBarWrapper>
      <ColumnHeadBarTitle>{title}</ColumnHeadBarTitle>
      <button
        type="button"
        onClick={() => {
          toggleModal(idOfCompletion);
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
