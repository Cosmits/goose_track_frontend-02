import { React, forwardRef, useState } from "react";
import { format, addMonths, subMonths } from "date-fns";
import DatePicker from "react-datepicker";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { CalendarGlobalStyles, TitleWrapper, ButtonWrapper } from "./Datepicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import "react-datepicker/dist/react-datepicker.css";

const Datepicker = ({onDateChange}) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, "MMMM yyyy")}
      </TitleWrapper>
    );
  });

  const handleNextMonth = () => {
    setSelectedDate((prevDate) => addMonths(prevDate, 1));
    onDateChange('NEXT');
  };

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => subMonths(prevDate, 1));
    onDateChange('PREV');
  };

  return (
    <div className="date-picker-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onDateChange('DATE', date);
        }}
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