import { createGlobalStyle } from "styled-components";

export const AppCalendarGlobalStyles = createGlobalStyle`
  .rbc-calendar .rbc-month-view {
    border: none;
    z-index: 1;
  }
  .rbc-calendar .rbc-month-header {
    padding: 14px;
    margin-bottom: 15px;
    font-family: inherit;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
    border: 1px solid ${({ theme }) => theme.calendarBdColor};
    background-color: ${({ theme }) => theme.secondaryBgColor};
  }
  .rbc-month-header .rbc-header:nth-of-type(6),
  .rbc-month-header .rbc-header:nth-of-type(7) {
    color: #3E85F3;
  }
  .rbc-calendar .rbc-header {
    border: none;
  }
  .rbc-calendar .rbc-header + .rbc-header {
    border: none;
  }
  .rbc-calendar .rbc-row-bg {
    background-color: ${({ theme }) => theme.secondaryBgColor};
    border-left: 1px solid ${({ theme }) => theme.calendarBdColor};
    border-right: 1px solid ${({ theme }) => theme.calendarBdColor};
  }
  .rbc-calendar .rbc-month-view .rbc-month-row:nth-of-type(2) {
    border-radius: 8px 8px 0 0;
    border-top: 1px solid ${({ theme }) => theme.calendarBdColor};
  }
  .rbc-calendar .rbc-month-view .rbc-month-row:nth-last-of-type(1) {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid ${({ theme }) => theme.calendarBdColor};
  }
  .rbc-calendar .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid ${({ theme }) => theme.calendarBdColor};
  }
  .rbc-calendar .rbc-month-row + .rbc-month-row {
    border-top: 1px solid ${({ theme }) => theme.calendarBdColor};
  }
  .rbc-calendar .rbc-event {
    width: 94%;
    margin: 0 auto;
    border-radius: 8px;
  }
  .rbc-calendar .rbc-row-segment .rbc-event-content {
    font-size: 14px;
    font-weight: 700;
  }
  .rbc-calendar .rbc-button-link {
    width: 27px;
    height: 26px;
    margin: 11px 7px 0;
    font-family: inherit;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
  }
  .rbc-calendar .rbc-button-link {
    position: relative;
    z-index: -5;
    cursor: default;
  }
  .rbc-calendar .rbc-now .rbc-button-link {
    background-color: #3E85F3;
    color: #FFFFFF;
  }
  .rbc-calendar .rbc-off-range-bg,
  .rbc-calendar .rbc-today {
    background: transparent;
  }
  .rbc-calendar .rbc-month-row {
    min-height: 125px;
  }
  .rbc-calendar .rbc-row-content {
    height: 100%;
    position: relative;
  }
  .rbc-calendar .rbc-month-row .rbc-row-content {
    display: flex;
    flex-direction: column;
    row-gap: 1.1em;
  }
  .rbc-calendar .rbc-button-link.rbc-show-more {
    width: auto;
    font-size: 12px;
  }
  .rbc-calendar .rbc-row-content-scroll-container {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  .rbc-calendar .rbc-day-bg {
    cursor: pointer;
    position: relative;
    z-index: 20;
  }

  @media (max-width: 767px) and (min-width: 320px) {
    .rbc-calendar .rbc-month-row {
      min-height: 71px;
    }

    .rbc-calendar .rbc-button-link {
      width: 20px;
      height: 22px;
      font-size: 12px;
      margin: 8px 0 0;
    }

    .rbc-calendar .rbc-row-segment .rbc-event-content {
      font-size: 10px;
    }
  }

  @media screen and (min-width: 768px) {
    .rbc-calendar .rbc-month-row {
      min-height: 119px;
    }

    .rbc-calendar .rbc-month-header {
      padding: 14px 7px;
    }
  }
`;