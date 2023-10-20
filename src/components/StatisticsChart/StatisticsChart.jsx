import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { useEffect, useState } from 'react';

import { 
  StatisticsContainer,
   StyledContainer,
    StyledParagraph,
     BarContainer,
      MonthIcon, 
      DayIcon, 
      CalendarContainer
     } from './StatisticsChart.styled';
import { fetchByDayTasks, fetchByMonthTasks } from './services/services.js';
import { getPercentage } from './services/services.js'
import { useScreenSize } from '../../hooks/useScreenSize';

// import CalendarToolBar from '../CalendarToolBar/CalendarToolBar';
import StyledDatepicker from './Calendar/StyledDatepicker';



const CustomBarShape = (props) => {
  const { x, y, width, height, fill, radius } = props;

  if (props.value === 0) {
    return null;
  }

  return (
    <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius}`} fill={fill} />
  );
};


export const StatisticsChart = ({ tasks, date }) => {

  const [monthPercentage, setMonthPercentage] = useState({});
  const [dayPercentage, setDayPercentage] = useState({});
  const [selectedDay, setSelectedDay] = useState(date);
  const [selectedMonth, setSelectedMonth] = useState(date);

  const { isTablet, isMobile } = useScreenSize();

  const handleDateChange = (newDate) => {
    setSelectedDay(newDate);
    setSelectedMonth(newDate);
  };

  useEffect(() => {
    const fetchData = async () => {
      const monthTasksData = await fetchByMonthTasks(selectedDay);
      const monthTasks = monthTasksData.data;

      setMonthPercentage(getPercentage(monthTasks));

      const dayTasksData = await fetchByDayTasks(selectedMonth);
      const dayTasks = dayTasksData.data;

      setDayPercentage(getPercentage(dayTasks))
    };

    fetchData();
  }, [tasks, selectedMonth, selectedDay]);


  const { todo: monthTodo, inProgress: monthInProgress, done: monthDone } = monthPercentage;
  const { todo: dayTodo, inProgress: dayInProgress, done: dayDone } = dayPercentage;

  const data = [
    {
      "name": "To Do",
      "uv": monthTodo || 0,
      "pv": dayTodo || 0,
    },
    {
      "name": "In Progress",
      "uv": monthInProgress || 0,
      "pv": dayInProgress || 0,
    },
    {
      "name": "Done",
      "uv": monthDone || 0,
      "pv": dayDone || 0,
    },
  ];


  return (
    <StatisticsContainer>
      <CalendarContainer>
        <StyledDatepicker onDayChange={handleDateChange} />
        {/* <CalendarToolBar date ={date} /> */}
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
              // formatter: (value) => `${value}%`,
              formatter: (value) => (value !== 0 ? `${value}%` : ''),
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
              // formatter: (value) => `${value}%`,
              formatter: (value) => (value !== 0 ? `${value}%` : ''),
            }}

            legendType="none" />
        </BarChart>
      </StyledContainer>
    </StatisticsContainer>
  );
};


