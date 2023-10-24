import PropTypes from 'prop-types';

import TasksColumn from '../TasksColumn/TasksColumn';
import { TasksColumnsListStyled } from './TasksColumnsList.styled';

export default function TasksColumnsList({
  filteredTasks,
  showModal,
  tasksData,
}) {
  const titles = Object.keys(filteredTasks);

  return (
    <TasksColumnsListStyled>
      {titles.map((title) => {
        return (
          <TasksColumn
            showModal={showModal}
            key={title}
            title={title}
            tasks={filteredTasks[title]}
            tasksData={tasksData}
          />
        );
      })}
    </TasksColumnsListStyled>
  );
}

TasksColumnsList.propTypes = {
  filteredTasks: PropTypes.objectOf(PropTypes.array).isRequired,
};
