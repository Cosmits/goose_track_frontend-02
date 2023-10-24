import { useParams } from 'react-router';
import {
  SwipeIcon,
  TaskToolbarModalBtn,
  TaskToolbarModalText,
  TaskToolbarModalWrapper,
} from './TaskToolbarModal.styled';
import {
  useEditTasksMutation,
  useGetMonthlyTasksQuery,
} from '../../../../redux/tasks/tasksApi';

const categoryStandardization = (categotyName) =>
  categotyName
    .split(' ')
    .map((word) => word.toLowerCase())
    .join('-');

export default function TaskToolbarModal({ id }) {
  const categories = ['To do', 'In progress', 'Done'];

  const { currentDay } = useParams();
  const { currentData: tasksByDay } = useGetMonthlyTasksQuery(currentDay);

  const [taskObj] = tasksByDay.data.filter((task) => task._id === id);
  const { category: taskCategory } = taskObj;

  const [editTask] = useEditTasksMutation();

  const handleOnClick = (category) => {
    const body = { ...taskObj, category: categoryStandardization(category) };
    delete body._id;
    delete body.date;
    editTask({ id, ...body });
  };

  return (
    <TaskToolbarModalWrapper>
      {categories.map((category) => {
        if (taskCategory !== categoryStandardization(category)) {
          return (
            <TaskToolbarModalBtn
              key={category}
              onClick={() => {
                handleOnClick(category);
              }}
            >
              <TaskToolbarModalText>{category}</TaskToolbarModalText>
              <SwipeIcon />
            </TaskToolbarModalBtn>
          );
        }
      })}
    </TaskToolbarModalWrapper>
  );
}
