import PropTypes from 'prop-types';

import {
  AddTaskBtnTitle,
  AddTaskButton,
  AddTaskButtonIcon,
} from './AddTaskBtn.styled';

export default function AddTaskBtn({ category }) {
  return (
    <AddTaskButton
      type="button"
      onClick={() => console.log(`Add Task Button click ${category}`)}
    >
      <AddTaskButtonIcon />
      <AddTaskBtnTitle>Add task</AddTaskBtnTitle>
    </AddTaskButton>
  );
}
AddTaskBtn.propTypes = {
  category: PropTypes.string.isRequired,
};
