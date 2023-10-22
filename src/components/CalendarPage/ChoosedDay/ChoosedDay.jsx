import { useEffect } from 'react';
import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';
import { useParams } from 'react-router-dom';

export default function ChoosedDay() {
  const { currentDay } = useParams();
  // const currentDay = '01';

  const filteredTasks = { 'To do': [], 'In progress': [], Done: [] };

  const { data } = useGetMonthlyTasksQuery('2023-10');

  if (data) {
    const tasks = data.data;

    tasks.map((task) => {
      const { category, date } = task;
      const day = date.split('-')[2];
      if (day === currentDay) {
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
