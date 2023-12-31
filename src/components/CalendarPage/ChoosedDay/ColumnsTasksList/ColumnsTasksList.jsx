import PropTypes from 'prop-types';

import TaskColumnCard from '../TaskColumnCard/TaskColumnCard';
import { TasksList } from './ColumnsTasksList.styled';

export default function ColumnsTasksList({ tasks }) {
  return (
    <TasksList>
      {tasks.map((task) => {
        const { _id: id, title, priority } = task;
        return (
          <TaskColumnCard
            taskTitle={title}
            priority={priority}
            key={id}
            id={id}
          />
        );
      })}
    </TasksList>
  );
}

ColumnsTasksList.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
};
