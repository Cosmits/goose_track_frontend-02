import { createGlobalStyle, styled } from "styled-components";
export const DataBtn = styled.div`
  padding: 6px 12px;
  color: #ffffff;
  background: #3e85f3;
  border-radius: 8px;
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
  .date-picker-container {
    display: flex;
    margin-bottom: 32px;
  }
  .date-picker-container .react-datepicker {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(0%, 0%);
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 373px;
    height: 354px;
    padding: 15px 0;
    background-color: #3e85f3;
    font-family: inherit;
    border-radius: 16px;
  }
  .date-picker-container .react-datepicker__month-container {
    float: inherit;
    box-sizing: border-box;
  }
  .date-picker-container .react-datepicker__header {
    position: relative;
    background-color: #3e85f3;
  }
  .date-picker-container .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 8px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.4);
  }
  .date-picker-container .react-datepicker__header:not(.react-datepicker__header--has-time-select) {
    border-bottom: 0px;
    padding: 0;
  }
  .date-picker-container .react-datepicker__day react-datepicker__day--018.react-datepicker__day--selected react-datepicker__day--today{
    outline: none;
    border: none;
  }
  .date-picker-container .react-datepicker__current-month {
    font-family: inherit;
    font-size: 20px;
    font-style: normal;
    font-weight: 600;
    line-height: 24px;
    text-align: center;
    color: white;
  }
  .date-picker-container .react-datepicker__day-name {
    margin: 0;
    padding: 8px 1px;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    line-height: 18px;
    text-align: center;
    color: white;
  }
  .date-picker-container .react-datepicker__navigation {
    margin-top: 24px;
    color: white;
  }
  .date-picker-container .react-datepicker__navigation--previous {
    left: 17px;
    width: 18px;
    height: 18px;
  }
  .date-picker-container .react-datepicker__navigation--next {
    right: 17px;
    width: 18px;
    height: 18px;
  }
  .date-picker-container .date-picker-btn-prev,
  .date-picker-container .date-picker-btn-next {
    display: block;
    padding: 8px 14px;
    border: 1px solid ${({ theme }) => theme.calendarBdColor};
    background-color: ${({ theme }) => theme.secondaryBgColor};
    color: ${({ theme }) => theme.toolbarArrowColor};
    transition: all 0.3s ease;
  }
  .date-picker-container .date-picker-btn-prev:hover,
  .date-picker-container .date-picker-btn-next:hover,
  .date-picker-container .date-picker-btn-prev:focus,
  .date-picker-container .date-picker-btn-next:focus {
    color: ${({ theme }) => theme.toolbarArrowHoverColor};
  }
  .date-picker-container .date-picker-btn-prev {
    margin-left: 8px;
    border-radius: 8px 0 0 8px;
  }
  .date-picker-container .date-picker-btn-next {
    border-radius: 0 8px 8px 0;
  }
  .date-picker-container .react-datepicker__navigation-icon::before:hover:focus {
    border-color: white;
  }
  .date-picker-container .react-datepicker__week {
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: white;
  }
  .date-picker-container .react-datepicker__day {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 8px;
    flex-shrink: 0;
    margin: 0;
    width: 48px;
    height: 48px;
    border-radius: 50%;
    color: white;
    font-family: inherit;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 18px;
    text-align: center;
  }
  .date-picker-container .react-datepicker__month {
    display: flex;
    gap: 0;
    flex-direction: column;
    justify-content: space-between;
    padding-top: 18px;
    margin: 0;
  }
  .date-picker-container .react-datepicker__day--selected {
    background-color:white;
    color:#3e85f3;
    font-size: 14px;
  }
  .date-picker-container .react-datepicker__day--selected:hover {
    border-radius: 50%;
    background-color:white;
  }
  .date-picker-container .react-datepicker__day:hover {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .date-picker-container .react-datepicker__day--keyboard-selected {
    border-radius: 50%;
    background-color:white;
    color:#3e85f3;
  }
  .date-picker-container .react-datepicker__day--weekend {
    opacity: 50%;
  }
  .date-picker-container .react-datepicker__day--outside-month {
    background-color: transparent;
    pointer-events: none;
    opacity: 0;
  }
  .date-picker-container .react-datepicker__view-calendar-icon input {
    padding: 6px 10px 5px 13px;
  }
  .date-picker-container .react-datepicker__triangle {
    visibility: hidden;
  }
  .date-picker-container .react-datepicker-popper {
    z-index: 2;
  }
  .date-picker-container {
    display: flex;
    margin-bottom: 32px;
  }

  @media (max-width: 767px) {
    .date-picker-container {
      justify-content: space-between;
      margin-bottom: 18px;
    }
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: center;
`;

export const TitleWrapper = styled.button`
  width: 195px;
  color: #ffffff;
  background: #3e85f3;
  border-color: #3e85f3;
  border-radius: 8px;
  font-family: inherit;
  font-weight: 700;
  line-height: 18px;
  text-align: center;
  text-transform: uppercase;
  padding: 8px 12px;
  font-size: 16px;
  @media (max-width: 767px)  {
    width: 155px;
  }
`;