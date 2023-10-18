import { createGlobalStyle } from "styled-components";
import styled from '@emotion/styled';

export const Container = styled.div`
  margin-left: auto;
  max-width: 1151px;
  padding: 0 32px;
`;

export const AppCalendarGlobalStyles = createGlobalStyle`
  .rbc-month-view {
    border: none;
    z-index: 1;
  }
  .rbc-month-header {
    padding: 14px;
    margin-bottom: 15px;
    font-family: Inter;
    font-size: 16px;
    font-weight: 600;
    text-transform: uppercase;
    border-radius: 8px;
    border: 1px solid #DCE3E5;
    background-color: #FFFFFF;
  }
  .rbc-month-header .rbc-header:nth-of-type(6),
  .rbc-month-header .rbc-header:nth-of-type(7) {
    color: #3E85F3;
  }
  .rbc-header {
    border: none;
  }
  .rbc-header + .rbc-header {
    border: none;
  }
  .rbc-row-bg {
    background-color: #FFFFFF;
    border-left: 1px solid #DCE3E5;
    border-right: 1px solid #DCE3E5;
  }
  .rbc-month-view .rbc-month-row:nth-of-type(2) {
    border-radius: 8px 8px 0 0;
    border-top: 1px solid #DCE3E5;
  }
  .rbc-month-view .rbc-month-row:nth-last-of-type(1) {
    border-radius: 0 0 8px 8px;
    border-bottom: 1px solid #DCE3E5;
  }
  .rbc-day-bg + .rbc-day-bg {
    border-left: 1px solid #DCE3E5;
  }
  .rbc-event {
    width: 94%;
    margin: 0 auto;
    border-radius: 8px;
  }
  .rbc-row-segment .rbc-event-content {
    font-size: 14px;
    font-weight: 700;
  }
  .rbc-button-link {
    width: 27px;
    height: 26px;
    margin: 11px 7px 0;
    font-size: 16px;
    font-weight: 700;
    border-radius: 8px;
  }
  .rbc-current .rbc-button-link {
    background-color: #3E85F3;
    color: #FFFFFF;
  }
  .rbc-off-range-bg,
  .rbc-today {
    background: transparent;
  }
  .rbc-off-range .rbc-button-link {
    display: none;
  }
  .rbc-month-row {
    min-height: 125px;
  }
  .rbc-row-content {
    height: 100%;
    position: relative;
  }
  .rbc-month-row .rbc-row-content {
    display: flex;
    flex-direction: column;
    row-gap: 1.1em;
  }
  .rbc-button-link.rbc-show-more {
    width: auto;
    font-size: 12px;
  }
  .rbc-row-content-scroll-container {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
`;