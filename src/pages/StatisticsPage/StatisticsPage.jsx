import { StatisticsChart } from "../../components/StatisticsChart/StatisticsChart";


const StatisticsPage = (tasks) => {
    return (
        <>
            <StatisticsChart tasks={tasks}
            //  date={date}
              />
        </>
    );
};

export default StatisticsPage;