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




export function getMonthProcentage(tasks){
const totalTasks = tasks.length;
console.log(totalTasks)
const filterTodo = tasks.filter(task=>task.category === 'to-do')
console.log(filterTodo)
// const toDoTaskProcentage = `${(filterTodo.length/totalTasks) * 100}%`
// console.log(toDoTaskProcentage)
return (filterTodo.length/totalTasks) * 100;

}
// getMonthProcentage(tasks)