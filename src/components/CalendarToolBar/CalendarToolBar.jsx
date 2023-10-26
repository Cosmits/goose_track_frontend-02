import Datepicker from '../Datepicker/Datepicker';
import { useLocation, useNavigate  } from 'react-router-dom';
import { format } from 'date-fns';
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
          className={location.pathname.includes(`/calendar/month/`) ? 'active' : ''}
        >
          Month
        </button>
        <button
          onClick={handleDayClick}
          className={location.pathname.includes(`/calendar/day/`) ? 'active' : ''}
        >
          Day
        </button>
      </div>
      <ToolBarGlobalStyles/>
    </div>
  )
}

export default CalendarToolBar;
