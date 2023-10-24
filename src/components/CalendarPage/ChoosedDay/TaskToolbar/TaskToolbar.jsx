import PropTypes from 'prop-types';

import {
  TaskToolbarButton,
  TaskToolbarList,
  TaskToolbarItem,
  EditIcon,
  RemoveIcon,
  SwipeIcon,
} from './TaskToolbar.styled';
import { useDeleteTasksMutation } from '../../../../redux/tasks/tasksApi';

export default function TaskToolbar({ id, showModal }) {
  const [deleteToDo] = useDeleteTasksMutation(id);
  const toolbarList = {
    swipe: [
      <SwipeIcon />,
      () => {
        console.log(`swipe button click ${id}`);
      },
    ],
    edit: [
      <EditIcon />,
      () => {
        // console.log(`edit button click ${id}`);
        showModal(id);
      },
    ],
    remove: [
      <RemoveIcon />,
      () => {
        deleteToDo(id);
      },
    ],
  };

  const icons = Object.keys(toolbarList);
  return (
    <>
      <TaskToolbarList>
        {icons.map((icon) => {
          return (
            <TaskToolbarItem key={icon}>
              <TaskToolbarButton type="button" onClick={toolbarList[icon][1]}>
                {toolbarList[icon][0]}
              </TaskToolbarButton>
            </TaskToolbarItem>
          );
        })}
      </TaskToolbarList>
    </>
  );
}

TaskToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};
