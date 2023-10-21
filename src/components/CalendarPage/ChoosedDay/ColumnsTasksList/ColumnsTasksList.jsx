import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnsTasksList.styled';
import { useSelector } from 'react-redux';
import { selectUserAvatar } from '../../../../redux/auth/selectors';

export default function ColumnsTasksList({ tasks }) {
  const avatar = useSelector(selectUserAvatar);
  return (
    <TasksList>
      {tasks.map((taskObj) => {
        const { _id: id, title, priority } = taskObj;
        return (
          <TaskColumnCard
            key={id}
            id={id}
            taskTitle={title}
            priority={priority}
            avatar={avatar}
          />
        );
      })}
    </TasksList>
  );
}

ColumnsTasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
