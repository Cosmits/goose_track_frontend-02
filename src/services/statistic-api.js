import axios from 'axios';
import moment from 'moment';
const BASE_URL = 'https://goose-track-backend-02.onrender.com';



export const fetchByMonthTasks = async (date) => {
    const formattedDate = moment(date).format('YYYY-MM');
    try {
        const response = await axios.get(`${BASE_URL}/tasks?date=${formattedDate}`);
        const tasks = response.data;
       
        return tasks;
    } catch (error) {
        console.error('Помилка запиту:', error);
    }
}



export const fetchByDayTasks = async (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    try {
        const response = await axios.get(`${BASE_URL}/tasks?date=${formattedDate}`);
        const tasks = response.data;

        return tasks;
    } catch (error) {
        console.error('Помилка запиту:', error);
    }
}



export function getPercentage(tasks) {
   
    const todoTasks = tasks.filter(task => task.category === 'to-do');
    const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
    const doneTasks = tasks.filter(task => task.category === 'done');

    const totalTasks = tasks.length;

    const todoPercentage = parseInt((todoTasks.length / totalTasks) * 100);
    const inProgressPercentage = parseInt((inProgressTasks.length / totalTasks) * 100);
    const donePercentage = parseInt((doneTasks.length / totalTasks) * 100);

    return {
        todo: todoPercentage,
        inProgress: inProgressPercentage,
        done: donePercentage,
    };
}

