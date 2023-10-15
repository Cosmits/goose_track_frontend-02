import { StatisticsChart } from "../../components/StatisticsChart/StatisticsChart";

const StatisticsPage = () => {
    return (
      <div>
        <h2>Statistics Page</h2>
        <StatisticsChart tasks = {tasks} date = {date} />
      </div>
    );
  };
  
  export default StatisticsPage;