import PropTypes from 'prop-types';
import { forwardRef, useState } from "react";
import { addMonths, format, subMonths } from "date-fns";
import DatePicker from "react-datepicker";
import { BtnWrapper, CalendarGlobalStyles, DatePickerContainer, TitleWrapper } from "./StyledDatepicker.styled";
import "react-datepicker/dist/react-datepicker-cssmodules.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { date } from "yup";

const StyledDatepicker = ({ onDayChange }) => {
  const [selectedDate, setSelectedDate] = useState(Date.now());

  const CustomInput = forwardRef(({ value, onClick }, ref) => {
    return (
      <TitleWrapper onClick={onClick} ref={ref}>
        {format(selectedDate, " dd MMMM yyyy")}
      </TitleWrapper>
    );
  });
  const handleNextMonth = () => {
    setSelectedDate((prevDate) => addMonths(prevDate, 1));
    onDayChange(addMonths(selectedDate, 1));
  };

  const handlePrevMonth = () => {
    setSelectedDate((prevDate) => subMonths(prevDate, 1));
    onDayChange(subMonths(selectedDate, 1));
  };
 
  return (
    <DatePickerContainer className="datepicker-container">
      <DatePicker
        selected={selectedDate}
        onChange={(date) => {
          setSelectedDate(date);
          onDayChange(date);
        }}
        onMonthChange={(date) => {
          onDayChange(date); 
        }}
        customInput={<CustomInput />}
        dateFormat={"dd MM yyyy"}
        calendarStartDay={1}
        formatWeekDay={(day) => day.substr(0, 1)}
      />
        <BtnWrapper>
        <button className="date-picker-btn-prev" onClick={handlePrevMonth}><FontAwesomeIcon icon={faChevronLeft} /></button>
        <button className="date-picker-btn-next" onClick={handleNextMonth}><FontAwesomeIcon icon={faChevronRight} /></button>
      </BtnWrapper>
      <CalendarGlobalStyles />
    </DatePickerContainer>
  );
};



StyledDatepicker.propTypes = {
  onDayChange: PropTypes.func.isRequired,
};




export default StyledDatepicker;


