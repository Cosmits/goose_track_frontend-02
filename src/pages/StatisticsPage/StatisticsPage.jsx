import { StatisticsChart } from "../../components/StatisticsChart/StatisticsChart";
import { Container } from "./StatisticsPage.styled";

// const tasks = [
//     {
//          title: 'Зробити прибирання',
//         category: 'done',
//         date: '13.10.23'

//     },
//     {
//          title: 'Розробити сторінку статистики',
//         category: 'in-progres',
//         date: '13.10.23'

//     },

//     {
//         title: 'Зварити суп',
//         category: 'in-progres',
//         date: '13.10.23'
//     },

//     { title: 'Вкласти дитину спати',
//         category: 'to-do',
//         date: '13.10.23'
//     },

//     {
//         title: 'Повчити англійську',
//         category: 'to-do',
//         date: '13.10.23'
//     },


//     {
//         title: 'Розібратися з бібліотекою для виведення статистики',
//         category: 'to-do',
//         date: '13.10.23'
//     },
// ]

const StatisticsPage = (tasks) => {
    return (
        <Container>
            <h2>Statistics Page</h2>
            <StatisticsChart tasks={tasks}
            //  date={date}
              />
        </Container>
    );
};

export default StatisticsPage;