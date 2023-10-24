export default function filterTasksByCompletion(tasks, currentDay) {
  const filteredTasks = { 'To do': [], 'In progress': [], Done: [] };
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
  return filteredTasks;
}
