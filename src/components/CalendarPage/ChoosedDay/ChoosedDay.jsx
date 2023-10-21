import { useGetMonthlyTasksQuery } from '../../../redux/tasks/tasksApi';
import { ChoosedDaySection } from './ChoosedDay.styled';
import TasksColumnsList from './TasksColumnsList/TasksColumnsList';

export default function ChoosedDay() {
  const data = useGetMonthlyTasksQuery('2023-11');
  console.log(data);

  const filteredTasks = {
    'To do': [
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '1',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '2',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '3',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '4',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '22',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Medium',
        id: '23',
      },
    ],
    'In progress': [
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Low',
        id: '5',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Low',
        id: '6',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Low',
        id: '7',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'Low  ',
        id: '8',
      },
    ],
    Done: [
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'High',
        id: '9',
      },
      {
        task: 'Brainstorm ideas for new content or new content',
        priority: 'High',
        id: '10',
      },
    ],
  };
  return (
    <ChoosedDaySection>
      {/* <DayCalendarHead /> */}
      <TasksColumnsList filteredTasks={filteredTasks} />
    </ChoosedDaySection>
  );
}
