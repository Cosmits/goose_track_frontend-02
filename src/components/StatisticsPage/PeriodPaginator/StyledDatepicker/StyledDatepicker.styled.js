import { createGlobalStyle, styled } from "styled-components";
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-family: 'InterTightBold', sans-serif;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.2;
  text-align: center;
  text-transform: uppercase;
  @media screen and (min-width: 768px) {
    margin-top: 33px;
    margin-bottom: 33px;
    padding: 8px 12px;
    font-size: 16px;
  }
`;
export const CalendarGlobalStyles = createGlobalStyle`



  .react-datepicker__wrapper {
    position: relative;
  }
  .datepicker-container .react-datepicker {
    position: absolute;
    font-family: 'InterSemiBold', sans-serif;
    font-weight: 600;
    left: 50%;
    top: 50%;
    transform: translate(0%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 265px;
    height: 295px;
    padding:  16px;
    background-color: #3e85f3;
    border-radius: 8px;
    border-color:  #3e85f3;
  }

  .datepicker-container .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .datepicker-container .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .datepicker-container .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .datepicker-container .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .datepicker-container  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .datepicker-container  .react-datepicker__current-month {
    font-family: 'InterSemiBold', sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    text-align: center;
    color: white;
  }
  .datepicker-container .react-datepicker__day-names { padding: 8px ;}
  .datepicker-container .react-datepicker__day-name {
    margin: 0;
    padding: 6px 8px; 
  
    font-family: 'InterTightMedium', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5)
  }
  .datepicker-container  .react-datepicker__navigation {
    margin-top: 18px;
    color: white;
  }
  .datepicker-container .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .datepicker-container .react-datepicker__navigation--next {
    top: 0;
    right: 7px;
    width: 18px;
    height: 18px;
  }
  

  .datepicker-container .react-datepicker__navigation-icon::before {
    border-color: rgba(255, 255, 255, 0.4);

  } 
  .datepicker-container .react-datepicker__navigation:hover *::before {
    border-color: white;
  }
  
  .datepicker-container .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .datepicker-container .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 30px;
    border-radius: 50%;
    color: white;
    font-family: 'InterTightRegular', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .datepicker-container .react-datepicker__month {
    display: flex;
    gap: 5px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    margin: 0;
  }
  .date-picker-container .react-datepicker__day--selected {
    background-color:white;
     color:#3e85f3; 
    font-size: 14px;
  }
  .datepicker-container .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .datepicker-container .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .datepicker-container .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .datepicker-container .react-datepicker__day--weekend {
    opacity: 50%;
  }
  .datepicker-container .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .datepicker-container .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .datepicker-container .react-datepicker__triangle {
    visibility: hidden;
  }
  .date-picker-btn-prev,
  .date-picker-btn-next {
    width: 37px;
    height: 34px;
    display: block;
    padding: 8px 14px;
    border: 1px solid ${({ theme }) => theme.calendarBtnColor};
    background-color: ${({ theme }) => theme.statisticBG};
    color: ${({ theme }) => theme.calendarBtnColor};
    transition: all 0.3s ease;
  }
  .date-picker-btn-prev:hover,
  .date-picker-btn-next:hover,
  .date-picker-btn-prev:focus,
  .date-picker-btn-next:focus {
    color: ${({ theme }) => theme.secondaryTextColor};
  }
  .date-picker-btn-prev {
    margin-left: 8px;
    border-radius: 8px 0 0 8px;
  }
  .date-picker-btn-next {
    border-radius: 0 8px 8px 0;
  }
`;

export const TitleWrapper = styled.button`
  width: 185px; 
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-family: 'InterTightBold', sans-serif;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  margin-bottom: 6px;
  font-size: 16px;
  justify-content: space-around;
  align-items: center;
`;

export const BtnWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const DatePickerContainer = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
margin-bottom: 20px;

@media screen and (min-width: 768px){
  margin-bottom: 0px;
}
`