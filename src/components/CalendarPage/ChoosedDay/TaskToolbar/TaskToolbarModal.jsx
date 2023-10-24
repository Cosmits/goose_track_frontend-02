import { useParams } from 'react-router';
import {
  SwipeIcon,
  TaskToolbarModalBtn,
  TaskToolbarModalText,
  TaskToolbarModalWrapper,
} from './TaskToolbarModal.styled';
import { useEditTasksMutation } from '../../../../redux/tasks/tasksApi';

export default function TaskToolbarModal({ category, id, tasksData }) {
  const categories = ['To do', 'In progress', 'Done'];

  const [editTask] = useEditTasksMutation();

  const handleOnClick = (categorie) => {
    const [currentTask] = tasksData.filter((task) => {
      return task._id === id;
    });
    const prettier = categorie
      .split(' ')
      .map((word) => word.toLowerCase())
      .join('-');
    const body = { ...currentTask, category: prettier };
    delete body._id;
    delete body.date;
    editTask({ id, ...body });
  };

  return (
    <TaskToolbarModalWrapper>
      {categories.map((categorie) => {
        if (categorie !== category) {
          return (
            <TaskToolbarModalBtn
              key={categorie}
              onClick={() => {
                handleOnClick(categorie);
              }}
            >
              <TaskToolbarModalText>{categorie}</TaskToolbarModalText>
              <SwipeIcon />
            </TaskToolbarModalBtn>
          );
        }
      })}
    </TaskToolbarModalWrapper>
  );
}
