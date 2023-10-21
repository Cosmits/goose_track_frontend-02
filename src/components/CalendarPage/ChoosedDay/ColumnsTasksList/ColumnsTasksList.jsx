import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnsTasksList.styled';

export default function ColumnsTasksList({ tasks }) {
  return (
    <TasksList>
      {tasks.map((taskObj) => {
        const { id, task, priority } = taskObj;
        return <TaskColumnCard key={id} task={task} priority={priority} />;
      })}
    </TasksList>
  );
}

ColumnsTasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
