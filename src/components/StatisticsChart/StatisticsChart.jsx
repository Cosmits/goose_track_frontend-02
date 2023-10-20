import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { format } from "date-fns";
import { StatisticsContainer, StyledContainer, StyledParagraph, BarContainer, MonthIcon, DayIcon , CalendarContainer} from './StatisticsChart.styled';
import { fetchByDayTasks, fetchByMonthTasks } from './services/services.js';
import { getPercentage } from './services/services.js'
import { useScreenSize } from '../../hooks/useScreenSize';

import { useEffect, useState } from 'react';
import CalendarToolBar from '../CalendarToolBar/CalendarToolBar';
// import { useScreenSize } from '../../hooks/useScreenSize';



const CustomBarShape = (props) => {
  const { x, y, width, height, fill, radius } = props;


  return (
    <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius}`} fill={fill} />
  );
};


export const StatisticsChart = ({ tasks , date}) => {

  const [monthPercentage, setMonthPercentage] = useState({});
  const [dayPercentage, setDayPercentage] = useState({});
  const { isDesktop, isTablet, isMobile } = useScreenSize();
 


  useEffect(() => {
    const fetchData = async () => {
      // const formattedDate = format(date, "yyyy-MM");
      const monthTasksData = await fetchByMonthTasks(date);
      // console.log("DATA:", monthTasksData)
      const monthTasks = monthTasksData.data;
      setMonthPercentage(getPercentage(monthTasks));
    };

    fetchData();
  }, [tasks, date]);

  useEffect(() => {
    const fetchData = async (date) => {
      // const formattedDate = format(date, "MMMM yyyy"); 
      const dayTasksData = await fetchByDayTasks(date);
      // console.log('DAY DATA', dayTasksData);

      const dayTasks = dayTasksData.data;
      setDayPercentage(getPercentage(dayTasks))
    };
    fetchData();

  }, [tasks, date])


  const { todo: monthTodo, inProgress: monthInProgress, done: monthDone } = monthPercentage;
  const { todo: dayTodo, inProgress: dayInProgress, done: dayDone } = dayPercentage;
  const data = [
    {
      "name": "To Do",
      "uv": monthTodo ,
      "pv": dayTodo ,
    },
    {
      "name": "In Progress",
      "uv": monthInProgress ,
      "pv": dayInProgress,
    },
    {
      "name": "Done",
      "uv": monthDone ,
      "pv": dayDone,
    },
  ];


  return (
    <StatisticsContainer>
      <CalendarContainer>
      <CalendarToolBar date ={date}/>
      <BarContainer>
        <MonthIcon ></MonthIcon>
        <StyledParagraph>By Day</StyledParagraph>
        <DayIcon></DayIcon>
        <StyledParagraph>By Month</StyledParagraph>
      </BarContainer>
      </CalendarContainer>
      <StyledContainer >
        <BarChart width={isMobile ? 279 : isTablet ? 576 : 786}
          height={isMobile ? 266 : 286}
          data={data}
          margin={{ left: isMobile ? 39 : isTablet ? 54 : 90, bottom: 8 }}
          barGap={isMobile ? 8 : 14}>
          <defs>
            <linearGradient id="pinkGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#FFD2DD" stopOpacity={0} />
              <stop offset="95%" stopColor="#FFD2DD" stopOpacity={1} />
            </linearGradient>
            <linearGradient id="blueGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3E85F3" stopOpacity={0} />
              <stop offset="90%" stopColor="#3E85F3" stopOpacity={1} />
            </linearGradient>
          </defs>
          <CartesianGrid stroke=" var(--light-blue)" vertical={false} />
          <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{
            fontSize: isMobile ? 12 : 14,
            fontFamily: 'InterTightRegular',
            lineHeight: 1.3,
            fontWeight: 400,
            fill: '#343434',
          }}
            tickMargin={19}
          />
          <YAxis
            label={{
              value: 'Tasks',
              position: "top",
              offset: 24,
              fill: '#343434',
              fontSize: 14,
              fontWeight: 600,
              dx: isMobile ? -20 : isTablet ? -37 : -68,
              fontFamily: 'InterTight'
            }}
            width={1} domain={[0, 100]}
            tickCount={6}
            axisLine={false}
            tickLine={false}
            tickMargin={isMobile ? 14 : isTablet ? 32 : 64}
            tick={{
              fontSize: 12,
              fontFamily: 'InterTightRegular',
              lineHeight: 1.3,
              fontWeight: 400,
              fill: '#343434',
            }}
          />
          <Tooltip />
          <Legend align='left' verticalAlign="top" height={34} />
          <Bar dataKey="pv" barSize={isMobile ? 22 : 27}
            fill="url(#pinkGradient)"
            shape={<CustomBarShape radius={8} />}
            label={{
              position: 'top',
              fill: '#343434',
              fontSize: 12,
              fontFamily: 'PoppinsMedium',
              lineHeight: 1.3,
              fontWeight: 500,
              formatter: (value) => `${value}%`,
            }}
            legendType="none"
          />
          <Bar dataKey="uv" barSize={isMobile ? 22 : 27}
            fill="url(#blueGradient)"
            shape={<CustomBarShape radius={8} />}
            label={{
              position: 'top',
              fill: '#343434',
              fontSize: 12,
              fontFamily: 'PoppinsMedium',
              lineHeight: 1.3,
              fontWeight: 500,
              formatter: (value) => `${value}%`,
            }}

            legendType="none" />
        </BarChart>
      </StyledContainer>
    </StatisticsContainer>
  );
};


// const {isDesktop, isTablet, isMobile} = useScreenSize();
// const [a, setA] = useState(null)
// useEffect(() => {
//   const fetchData = async () => {
//     const tasksData = await fetchAllTasks();
//     setA(getMonthProcentage(tasksData));
//     console.log("Відсотки", a, typeof a)
//     // setToDoTaskProcentage(percentage);
//   };

//   fetchData();
// }, [a]);