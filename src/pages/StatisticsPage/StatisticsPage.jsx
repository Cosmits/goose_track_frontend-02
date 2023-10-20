import { useState } from "react";
import { StatisticsChart } from "../../components/StatisticsChart/StatisticsChart";


const StatisticsPage = (tasks, date) => {

   
    return (
        <>
            <StatisticsChart tasks={tasks}
              date={date}
              />
        </>
    );
};

export default StatisticsPage;