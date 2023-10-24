import PropTypes from 'prop-types';

import { TaskColumn } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';

export default function TasksColumn({ title, tasks, showModal, tasksData }) {
  return (
    <TaskColumn>
      <ColumnHeadBar title={title} category={title} showModal={showModal} />
      {tasks && (
        <ColumnsTasksList
          tasks={tasks}
          showModal={showModal}
          category={title}
          tasksData={tasksData}
        />
      )}
      <AddTaskBtn showModal={showModal} category={title} />
    </TaskColumn>
  );
}

TasksColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};
