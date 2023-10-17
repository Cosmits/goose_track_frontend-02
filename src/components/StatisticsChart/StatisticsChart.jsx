import { BarChart, CartesianGrid, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { StyledContainer, StyledParagraph, ChartBarIcon, BarContainer } from './StatisticsChart.styled';
import { fetchAllTasks } from './services/services.js';
import { getMonthProcentage } from './services/services.js'

import { useEffect, useState } from 'react';


fetchAllTasks();

const CustomBarShape = (props) => {
  const { x, y, width, height, fill, radius } = props;


  return (
    <path d={`M${x},${y + radius} L${x},${y + height - radius} Q${x},${y + height} ${x + radius},${y + height} L${x + width - radius},${y + height} Q${x + width},${y + height} ${x + width},${y + height - radius} L${x + width},${y + radius} Q${x + width},${y} ${x + width - radius},${y} L${x + radius},${y} Q${x},${y} ${x},${y + radius}`} fill={fill} />
  );
};




export const StatisticsChart = () => {
  const [toDoTaskProcentage, setToDoTaskProcentage] = useState(0);
  const [a, setA] = useState(null)
  useEffect(() => {
    const fetchData = async () => {
      const tasksData = await fetchAllTasks();
      setA(getMonthProcentage(tasksData));
      console.log("Відсотки", a, typeof a)
      // setToDoTaskProcentage(percentage);
    };

    fetchData();
  }, [a]);



  const data = [
    {
      "name": "To Do",
      "uv": a,
      "pv": 50
    },
    {
      "name": "In Progress",
      "uv": 80,
      "pv": 75
    },
    {
      "name": "Done",
      "uv": 50,
      "pv": 90
    },
  ];


  return (
    <>
      <BarContainer>
        <ChartBarIcon ></ChartBarIcon>
        <StyledParagraph>By Day</StyledParagraph>
        <ChartBarIcon ></ChartBarIcon>
        <StyledParagraph>By Month</StyledParagraph>
      </BarContainer>
      <StyledContainer >
        <BarChart width={279} height={266} data={data} margin={{ left: 36, bottom: 8 }} barGap={8}
        //  barCategoryGap='160'
        >
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
            fontSize: 12,
            fontFamily: 'Inter',
            lineHeight: 1.3,
            fontWeight: 400,
            fill: '#343434',
          }}
            tickMargin={19}
          />
          <YAxis label={{ value: 'Tasks', position: "top", offset: 24, fill: '#343434', fontSize: 14, fontWeight: 600, dx: -20, }}
            width={1} domain={[0, 100]}
            tickCount={6}
            axisLine={false}
            tickLine={false}
            tickMargin={14}
            tick={{
              fontSize: 12,
              fontFamily: 'Inter',
              lineHeight: 1.3,
              fontWeight: 400,
              fill: '#343434',
            }} />
          <Tooltip />
          <Legend align='right' verticalAlign="top" height={34} />
          <Bar dataKey="pv" barSize={22}
            fill="url(#pinkGradient)"
            shape={<CustomBarShape radius={8} />}
            label={{
              position: 'top',
              fill: '#343434',
              fontSize: 12,
              fontFamily: 'Inter',
              lineHeight: 1.3,
              fontWeight: 500,
            }}
            legendType="none" />
          <Bar dataKey="uv" barSize={22}
            fill="url(#blueGradient)"
            shape={<CustomBarShape radius={8} />}
            label={{
              position: 'top',
              fill: '#343434',
              fontSize: 12,
              fontFamily: 'Inter',
              lineHeight: 1.3,
              fontWeight: 500,
            }}

            legendType="none" />
        </BarChart>
      </StyledContainer>
    </>
  );
};