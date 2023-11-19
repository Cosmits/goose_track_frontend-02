import PropTypes from 'prop-types';
import Popover from '@mui/material/Popover';

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
import { useModal } from '../modalContext';

export default function TaskToolbar({ id }) {
  const { toggleModal } = useModal();

  const [anchorEl, setAnchorEl] = useState(null);

  const [deleteToDo] = useDeleteTasksMutation();

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const idMui = open ? 'simple-popover' : undefined;

  const toolbarList = {
    swipe: {
      component: <SwipeIcon aria-describedby={idMui} />,
      onClickCallback: (event) => {
        setAnchorEl(event.currentTarget);
      },
    },
    edit: {
      component: <EditIcon />,
      onClickCallback: () => {
        toggleModal(id);
      },
    },
    remove: {
      component: <RemoveIcon />,
      onClickCallback: () => {
        deleteToDo(id);
      },
    },
  };

  const icons = Object.keys(toolbarList);
  return (
    <>
      <TaskToolbarList>
        {icons.map((icon) => {
          const { component, onClickCallback } = toolbarList[icon];

          return (
            <TaskToolbarItem key={icon}>
              <TaskToolbarButton type="button" onClick={onClickCallback}>
                {component}
              </TaskToolbarButton>
            </TaskToolbarItem>
          );
        })}
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
          PaperProps={{
            sx: {
              borderRadius: '8px',
            },
          }}
        >
          <TaskToolbarModal id={id} />
        </Popover>
      </TaskToolbarList>
    </>
  );
}

TaskToolbar.propTypes = {
  id: PropTypes.string.isRequired,
};
