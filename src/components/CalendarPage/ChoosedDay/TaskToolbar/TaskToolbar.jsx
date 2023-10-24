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
import { useContext, useState } from 'react';
import { useModal } from '../modalContext';

export default function TaskToolbar({ id }) {
  const { toogleModal } = useModal();

  const [deleteToDo] = useDeleteTasksMutation();

  const toolbarList = {
    swipe: [
      <SwipeIcon />,
      () => {
        console.log(`swipe button click`);
        // setIsShowSwipeModal(!isShowSwipeModal);
      },
    ],
    edit: [
      <EditIcon />,
      () => {
        toogleModal(id);
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
          const [svgIcon, iconClick] = toolbarList[icon];

          return (
            <TaskToolbarItem key={icon}>
              <TaskToolbarButton type="button" onClick={iconClick}>
                {svgIcon}
              </TaskToolbarButton>
            </TaskToolbarItem>
          );
        })}
        {/* {isShowSwipeModal && (
          <TaskToolbarModal category={category} id={id} tasksData={tasksData} />
        )} */}
      </TaskToolbarList>
    </>
  );
}

TaskToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};
