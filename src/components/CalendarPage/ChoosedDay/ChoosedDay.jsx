import { useEffect, useState } from 'react';
import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';
import { da } from 'date-fns/locale';
import TaskModal from '../../TaskModal/TaskModal';

export default function ChoosedDay() {
  const [modal, setModal] = useState(false);
  const [category, setCategory] = useState(null);

  const showModal = (category) => {
    setModal(true);
    setCategory(category);
  };

  const closeModal = () => {
    setModal(false);
  };

  const { currentDay } = useParams();

  const filteredTasks = { 'To do': [], 'In progress': [], Done: [] };

  const { currentData: data } = useGetMonthlyTasksQuery(currentDay);
  if (data) {
    const tasks = data.data;

    tasks.map((task) => {
      const { category, date } = task;
      if (date === currentDay) {
        switch (category) {
          case 'to-do':
            filteredTasks['To do'].push(task);
            break;
          case 'in-progress':
            filteredTasks['In progress'].push(task);
            break;

          default:
            filteredTasks['Done'].push(task);
            break;
        }
      }
      return;
    });
  }
  return (
    <ChoosedDaySection>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList
        filteredTasks={filteredTasks}
        showModal={showModal}
        tasksData={data?.data}
      />
      {modal && <TaskModal category={category} closeModal={closeModal} />}
    </ChoosedDaySection>
  );
}
