import { createGlobalStyle, styled } from "styled-components";
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-family: 'InterTightBoldItalic';
  font-weight: 700;
  font-size: 14px;
  line-height: 18px;
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
  .react-datepicker {
    position: absolute;
    font-family: 'InterSemiBold';
    font-weight: 700;
    left: 50%;
    top: 50%;
    transform: translate(-1%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    /* width: 327px; */
    width: 235px;
    /* height: 354px; */
    height: 280px;
    padding:  18px;
  background-color: #3e85f3;
    font-family: Inter;
    border-radius: 8px;
  }
  .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
}
  .react-datepicker__current-month {
    font-family: 'InterTightBold';
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 19px;
    text-align: center;
    color: white;
  }
  .react-datepicker__day-names { padding: 8px ;}
  .react-datepicker__day-name {
    margin: 0;
    padding: 6px 8px; 
  
   font-family: 'InterTightMedium';
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px;
    text-align: center;
    color: rgba(255, 255, 255, 0.5)
  }
  .react-datepicker__navigation {
    margin-top: 18px;
    color: white;
  }
  .react-datepicker__navigation--previous {
    left: 7px;
    width: 18px;
    height: 18px;
  }
  .react-datepicker__navigation--next {
    top: 0;
    right: 7px;
    width: 18px;
    height: 18px;
  }
  

  .react-datepicker__navigation-icon::before {
    border-color: rgba(255, 255, 255, 0.4);

  } 
  .react-datepicker__navigation:hover *::before {
    border-color: white;
}
  
  .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 32px;
    height: 32px;
    border-radius: 50%;
    color: white;
    font-family: 'InterTightRegular';
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .react-datepicker__month {
    display: flex;
    gap: 7px;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 10px;
    margin: 0;
  }
  .react-datepicker__day--selected {
    background-color:white;
     color:#3e85f3; 
    font-size: 14px;
  }
  .react-datepicker__day--selected:hover {
    border-radius: 50%;
  background-color:white;
  }
  .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .react-datepicker__day--weekend {
    opacity: 50%;
  }
.react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .react-datepicker__triangle {
    visibility: hidden;
  }
  .date-picker-btn-prev,
  .date-picker-btn-next {
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
   width: 165px; 
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
  font-family: 'InterTightBold';
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 6px 12px;
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

`