import { useEffect, useState } from 'react';
import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';
import TaskModal from '../../TaskModal/TaskModal';
import filterTasksByCompletion from './filterTasksByCompletion ';
import { ModalContext } from './modalContext';

const initialFilteredTasks = {
  'To do': [],
  'In progress': [],
  Done: [],
};

export default function ChoosedDay() {
  const { currentDay } = useParams();
  const { currentData: tasksByDay } = useGetMonthlyTasksQuery(currentDay);

  const [modal, setModal] = useState(false);
  const [taskInfo, setTaskInfo] = useState(null);
  const [filteredTasks, setFilteredTasks] = useState(initialFilteredTasks);

  useEffect(() => {
    if (tasksByDay) {
      const tasks = tasksByDay.data;

      setFilteredTasks(filterTasksByCompletion(tasks, currentDay));
    }

    return () => {
      setFilteredTasks(initialFilteredTasks);
      setTaskInfo(null);
    };
  }, [tasksByDay]);

  const toogleModal = (idOfCompletion) => {
    setTaskInfo(idOfCompletion);
    setModal(!modal);
  };

  return (
    <ChoosedDaySection>
      <ModalContext.Provider value={{ toogleModal }}>
        {/* <DayCalendarHead /> */}
        <TasksColumnsList filteredTasks={filteredTasks} />
        {modal && <TaskModal category={taskInfo} closeModal={toogleModal} />}
      </ModalContext.Provider>
    </ChoosedDaySection>
  );
}
