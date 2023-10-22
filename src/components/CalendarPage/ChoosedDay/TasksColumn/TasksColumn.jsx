import PropTypes from 'prop-types';

import { TaskColumn } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';
import ColumnsTasksList from '../ColumnsTasksList/ColumnsTasksList';

export default function TasksColumn({ title, tasks }) {
  return (
    <TaskColumn>
      <ColumnHeadBar title={title} category={title} />
      {tasks && <ColumnsTasksList tasks={tasks} />}
      <AddTaskBtn category={title} />
    </TaskColumn>
  );
}

TasksColumn.propTypes = {
  title: PropTypes.string.isRequired,
  tasks: PropTypes.array.isRequired,
};
