import { useEffect } from 'react';
import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';
import { da } from 'date-fns/locale';

export default function ChoosedDay() {
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
      <TasksColumnsList filteredTasks={filteredTasks} />
    </ChoosedDaySection>
  );
}
