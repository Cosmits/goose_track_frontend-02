import { forwardRef, useState } from "react";
import { format, addMonths, subMonths, parse, add } from "date-fns";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CalendarGlobalStyles, TitleWrapper, ButtonWrapper } from "./Datepicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";
import { useNavigate } from "react-router";

const Datepicker = ({onDateChange}) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());
  const navigate = useNavigate();

  /* eslint-disable */
  const [_, __, ___, monthOrDay, currentDate] = location.pathname.split('/');
  /* eslint-enable */

  // eslint-disable-next-line react/display-name
  const CustomInput = forwardRef(({ onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, "MMMM yyyy")}
      </TitleWrapper>
    );
  });

  const handleNextMonth = () => {
    
    if (monthOrDay === 'month') {
      setSelectedDate((prevDate) => addMonths(prevDate, 1));
      onDateChange('NEXT');
    } else {
      const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
      const prevDay = add(parsedDate, { days: 1 });
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`/calendar/day/${newDate}`);
    }
  };

  const handlePrevMonth = () => {
    
    if (monthOrDay === 'month') {
      setSelectedDate((prevDate) => subMonths(prevDate, 1));
      onDateChange('PREV');
    } else {
      const parsedDate = parse(currentDate, 'yyyy-MM-dd', new Date());
      const prevDay = add(parsedDate, { days: -1 });
      const newDate = format(prevDay, 'yyyy-MM-dd');
      navigate(`/calendar/day/${newDate}`);
    }
  };

  const handleSelectDate = (date) => {
    
    
    if (monthOrDay === 'month') {
      setSelectedDate(date);
      onDateChange('DATE', date);
    } else {
      // const parsedDate = parse(date, 'yyyy-MM-dd', new Date());
      const newDate = format(date, 'yyyy-MM-dd');
      navigate(`/calendar/day/${newDate}`);
    }

  }
  

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={handleSelectDate}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
      <ButtonWrapper>
        <button className="date-picker-btn-prev" onClick={handlePrevMonth}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="date-picker-btn-next" onClick={handleNextMonth}><FontAwesomeIcon icon={faChevronRight} /></button>
      </ButtonWrapper>
      <CalendarGlobalStyles />
    </div>
  );
};

export default Datepicker;