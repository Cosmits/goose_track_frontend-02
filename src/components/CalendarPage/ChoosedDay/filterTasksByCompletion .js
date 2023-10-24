export default function filterTasksByCompletion(tasks, currentDay) {
  const filteredTasks = { 'To do': [], 'In progress': [], Done: [] };

  tasks.map((task) => {
    const { category, date } = task;
    if (date === currentDay) {
      switch (category) {
        case 'to-do':
          filteredTasks['To do'].unshift(task);
          break;

        case 'in-progress':
          filteredTasks['In progress'].unshift(task);
          break;

        default:
          filteredTasks['Done'].unshift(task);
          break;
      }
    }

    return;
  });

  return filteredTasks;
}
