import PropTypes from 'prop-types';

import {
  AddTaskBtnTitle,
  AddTaskButton,
  AddTaskButtonIcon,
} from './AddTaskBtn.styled';
import { useModal } from '../modalContext';

export default function AddTaskBtn({ idOfCompletion }) {
  const { toogleModal } = useModal();

  return (
    <AddTaskButton
      type="button"
      onClick={() => {
        toogleModal(idOfCompletion);
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
