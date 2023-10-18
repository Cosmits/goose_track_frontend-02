import {
  AddTaskBtnTitle,
  AddTaskButton,
  AddTaskButtonIcon,
} from './AddTaskBtn.styled';

export default function AddTaskBtn({ id }) {
  return (
    <AddTaskButton
      type="button"
      onClick={() => console.log('Add Task Button click')}
    >
      <AddTaskButtonIcon />
      <AddTaskBtnTitle>Add task</AddTaskBtnTitle>
    </AddTaskButton>
  );
}
