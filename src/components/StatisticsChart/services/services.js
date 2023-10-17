import axios from 'axios';

const BASE_URL = 'https://goose-track-backend-02.onrender.com';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MmQxZDY0OWEwMTY2MGRjN2FlYTAzYiIsImlhdCI6MTY5NzQ3MTYxNSwiZXhwIjoxNjk3NTU0NDE1fQ.hS_vpDgPgUQwlP1wOFUA9rSepxcZqiZVMJhGOKCNYds'; 
const targetMonth = '2023-10'; 


export const fetchAllTasks = async () => {
    const config = {
        headers: {
            Authorization: `Bearer ${ACCESS_TOKEN}`
        }
    };

    try {
        const response = await axios.get(`${BASE_URL}/tasks?date=${targetMonth}`, config);
        const tasks = response.data;
        console.log('Отримані таски:', tasks);
        return tasks;
    } catch (error) {
        console.error('Помилка запиту:', error);
        throw error;
    }
}




export function getMonthPercentage(tasks, category){

const totalTasks = tasks.length;
let percentage = 0;
console.log(totalTasks)

switch(category){
case 'to-do':
const filterTodo = tasks.filter(task=>task.category === 'to-do')
percentage = (filterTodo.length/totalTasks) * 100;
console.log(percentage)
break;

case 'in-progress':
    const filterInProgress = tasks.filter(task =>task.category === 'in-progress')
    percentage = (filterInProgress.length/totalTasks) * 100;
    console.log(percentage)
break

case 'done':
    const filterDone = tasks.filter(task => task.category === 'done')
    percentageprocentage = (filterDone.length/totalTasks) * 100;
    console.log(percentage)
    break;

    default:
      percentage = 0;
}

return percentage;
// console.log(filterTodo)
// const filterInProgres = tasks.filter(task => task.category ==='in-progress')
// const inProgres = (filterInProgres.length/totalTasks) * 100;
// console.log(filterInProgres)
// const filterDone = tasks.filter(task => task.category === 'done')
// const done = (filterDone.length/totalTasks) * 100;
// console.log(filterDone)
// return (filterTodo.length/totalTasks) * 100;

}


const toDoPercentage = getMonthPercentage(tasks, 'to-do');
console.log(`Відсоток завдань в категорії "to-do": ${toDoPercentage}%`);


const inProgressPercentage = getMonthPercentage(tasks, 'in-progress');
console.log(`Відсоток завдань в категорії "in-progress": ${inProgressPercentage}%`);

const donePercentage = getMonthPercentage(tasks, 'done');
console.log(`Відсоток завдань в категорії "done": ${donePercentage}%`);
// getMonthProcentage(tasks)