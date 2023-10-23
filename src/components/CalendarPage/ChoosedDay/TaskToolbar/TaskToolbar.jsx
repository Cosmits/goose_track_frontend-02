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
import TaskToolbarModal from './TaskToolbarModal';
import { useState } from 'react';

export default function TaskToolbar({ id, showModal, category, tasksData }) {
  const [isShowSwipeModal, setIsShowSwipeModal] = useState(false);

  const [deleteToDo] = useDeleteTasksMutation(id);
  const toolbarList = {
    swipe: [
      <SwipeIcon />,
      () => {
        // console.log(`swipe button click ${id} and ${category}`);
        setIsShowSwipeModal(!isShowSwipeModal);
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
        {isShowSwipeModal && (
          <TaskToolbarModal category={category} id={id} tasksData={tasksData} />
        )}
      </TaskToolbarList>
    </>
  );
}

TaskToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};
