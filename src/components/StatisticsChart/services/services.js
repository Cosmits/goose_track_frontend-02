import axios from 'axios';
import moment from 'moment';
const BASE_URL = 'https://goose-track-backend-02.onrender.com';
const ACCESS_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY1MzBkZjY5YzM5ZmFhMmNlYTBjMTlkMyIsImlhdCI6MTY5NzcwMTg5OSwiZXhwIjoxNjk3Nzg0Njk5fQ.6tpyg9SMzDMOrwryxfZOPfEgXl296FCQehQBIzqwAOs';
// const currentMonth = '2023-10';
const currentDay = '2023-10-01'


export const fetchByMonthTasks = async (date) => {
    const formattedDate = moment(date).format('YYYY-MM');
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${ACCESS_TOKEN}`
    //     }
    // };

    try {
        const response = await axios.get(`${BASE_URL}/tasks?date=${formattedDate}`
        );
        const tasks = response.data;
        console.log('Отримані таски:', tasks);
        
        return tasks;
    } catch (error) {
        console.error('Помилка запиту:', error);
    }
}



export const fetchByDayTasks = async (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    // const config = {
    //     headers: {
    //         Authorization: `Bearer ${ACCESS_TOKEN}`
    //     }
    // };

    try {
        const response = await axios.get(`${BASE_URL}/tasks?date=${formattedDate}`);
        const tasks = response.data;
      
        console.log('Отримані таски за День:', tasks);
        return tasks;
    } catch (error) {
        console.error('Помилка запиту:', error);
    }
}





export function getPercentage(tasks) {
    // console.log('Прийшли таски:', tasks)

    const todoTasks = tasks.filter(task => task.category === 'to-do');
    const inProgressTasks = tasks.filter(task => task.category === 'in-progress');
    const doneTasks = tasks.filter(task => task.category === 'done');


    const totalTasks = tasks.length;
    // console.log(totalTasks) ;

    const todoPercentage = parseInt((todoTasks.length / totalTasks) * 100);
    const inProgressPercentage = parseInt((inProgressTasks.length / totalTasks) * 100);
    const donePercentage = parseInt((doneTasks.length / totalTasks) * 100);

    //   const category = {

    //     todo: todoPercentage,
    //     inProgress: inProgressPercentage,
    //     done: donePercentage,
    //   };
    //   console.log(category) ;
    return {

        todo: todoPercentage,
        inProgress: inProgressPercentage,
        done: donePercentage,
    };


}







// console.log(filterTodo)
// const filterInProgres = tasks.filter(task => task.category ==='in-progress')
// const inProgres = (filterInProgres.length/totalTasks) * 100;
// console.log(filterInProgres)
// const filterDone = tasks.filter(task => task.category === 'done')
// const done = (filterDone.length/totalTasks) * 100;
// console.log(filterDone)
// return (filterTodo.length/totalTasks) * 100;