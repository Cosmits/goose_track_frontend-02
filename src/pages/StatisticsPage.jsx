import { StatisticsChart } from "../components/StatisticsPage/StatisticsChart/StatisticsChart";

const StatisticsPage = (tasks, date) => {
    return <StatisticsChart tasks={tasks} date={date} />
};

export default StatisticsPage;