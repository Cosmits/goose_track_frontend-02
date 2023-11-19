import PropTypes from 'prop-types';

import {
  AddTaskBtnTitle,
  AddTaskButton,
  AddTaskButtonIcon,
} from './AddTaskBtn.styled';
import { useModal } from '../modalContext';

export default function AddTaskBtn({ idOfCompletion }) {
  const { toggleModal } = useModal();

  return (
    <AddTaskButton
      type="button"
      onClick={() => {
        toggleModal(idOfCompletion);
      }}
    >
      <AddTaskButtonIcon />
      <AddTaskBtnTitle>Add task</AddTaskBtnTitle>
    </AddTaskButton>
  );
}

AddTaskBtn.propTypes = {
  idOfCompletion: PropTypes.string.isRequired,
};
