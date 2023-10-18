import PropTypes from 'prop-types';

import { TaskColumn } from './TasksColumn.styled';
import ColumnHeadBar from '../ColumnHeadBar/ColumnHeadBar';
import AddTaskBtn from '../AddTaskBtn/AddTaskBtn';

export default function TasksColumn({ title = 'Title', tasks }) {
  return (
    <TaskColumn>
      <ColumnHeadBar />
      {/* <ColumnsTasksList /> */}
      <AddTaskBtn />
    </TaskColumn>
  );
}

// TasksColumn.propTypes = {
//   title: PropTypes.string.isRequired,
//   title: PropTypes.arrayOf({ tasks: PropTypes.object }).isRequired,
// };
