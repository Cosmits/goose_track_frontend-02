import PropTypes from 'prop-types';

import {
  AddTaskBtnTitle,
  AddTaskButton,
  AddTaskButtonIcon,
} from './AddTaskBtn.styled';

export default function AddTaskBtn({ category, showModal }) {
  return (
    <AddTaskButton
      type="button"
      onClick={() => {
        // console.log(`Add Task Button click ${category}`);
        showModal(category);
      }}
    >
      <AddTaskButtonIcon />
      <AddTaskBtnTitle>Add task</AddTaskBtnTitle>
    </AddTaskButton>
  );
}
AddTaskBtn.propTypes = {
  category: PropTypes.string.isRequired,
};
