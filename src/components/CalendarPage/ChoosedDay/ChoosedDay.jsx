import { useEffect, useState } from 'react';
import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';
import TaskModal from '../../ModalPages/TaskModal/TaskModal';
import filterTasksByCompletion from './filterTasksByCompletion ';
import { ModalContext } from './modalContext';
import DayCalendarHead from './DayCalendarHead/DayCalendarHead';
import CalendarToolBar from '../CalendarToolBar/CalendarToolBar';

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
  }, [currentDay, tasksByDay]);

  const toggleModal = (idOfCompletion) => {
    setTaskInfo(idOfCompletion);
    setModal(!modal);

    //disable scrolling
    if (modal) { document.body.style.overflow = 'auto' }
    else { document.body.style.overflow = 'hidden' }

  };

  return (
    <>
      <CalendarToolBar />
      <ChoosedDaySection>
        <ModalContext.Provider value={{ toggleModal }}>
          <DayCalendarHead />
          <TasksColumnsList filteredTasks={filteredTasks} />
          {modal && <TaskModal category={taskInfo} closeModal={toggleModal} />}
        </ModalContext.Provider>
      </ChoosedDaySection>
    </>
  );
}
