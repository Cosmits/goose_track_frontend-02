import React from 'react'
import Datepicker from '../Datepicker/Datepicker';
import { useLocation, useNavigate  } from 'react-router-dom';
import { format, getYear, getMonth } from 'date-fns';
import { ToolBarGlobalStyles } from './CalendarToolBar.styled';


const CalendarToolBar = ({onNavigate}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth() + 1;
  const currentMonthFormatted = `${currentYear}-${currentMonth.toString().padStart(2, '0')}`;
  
  const handleMonthClick = () => {
    navigate(`/calendar/month/${currentMonthFormatted}`);
  };

  const handleDayClick = () => {
    navigate(`/calendar/day/${format(currentDate, 'yyyy-MM-dd')}`);
  };

  return (
    <div className='datepicker-container'>
      <Datepicker onDateChange={onNavigate}/>
      <div className='navigation-btns'>
        <button
          onClick={handleMonthClick}
          className={location.pathname === `/calendar/month/${currentMonthFormatted}` ? 'active' : ''}
        >
          Month
        </button>
        <button
          onClick={handleDayClick}
          className={location.pathname === `/calendar/day/${format(currentDate, 'yyyy-MM-dd')}` ? 'active' : ''}
        >
          Day
        </button>
      </div>
      <ToolBarGlobalStyles/>
    </div>
  )
}

export default CalendarToolBar;
