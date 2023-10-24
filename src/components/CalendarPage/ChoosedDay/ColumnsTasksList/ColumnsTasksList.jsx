import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnsTasksList.styled';
import { useSelector } from 'react-redux';
import { selectUserAvatar } from '../../../../redux/auth/selectors';

export default function ColumnsTasksList({
  tasks,
  showModal,
  category,
  tasksData,
}) {
  const avatar = useSelector(selectUserAvatar);
  return (
    <TasksList>
      {tasks.map((taskObj) => {
        const { _id: id, title, priority } = taskObj;
        return (
          <TaskColumnCard
            category={category}
            showModal={showModal}
            key={id}
            id={id}
            taskTitle={title}
            priority={priority}
            avatar={avatar}
            tasksData={tasksData}
          />
        );
      })}
    </TasksList>
  );
}

ColumnsTasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
