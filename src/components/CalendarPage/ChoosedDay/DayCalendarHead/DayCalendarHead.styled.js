import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const DayCalendarHeadWrapper = styled.div`
  width: 335px;
  padding: 14px 18px;
  margin-bottom: 14px;
  display: flex;
  justify-content: space-between;
  border-radius: 8px;
  border: 1px solid rgba(220, 227, 229, 0.5);
  background-color: #fff;

  @media screen and (min-width: 768px) {
    width: 640px;
    padding: 10px 32px;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 1440px) {
    width: 1087px;
    padding: 10px 46px;
  }
`;

export const DayCalendarHeadDay = styled.div`
  width: 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 6px;

  @media screen and (min-width: 768px) {
    width: 29px;
    gap: 4px;
  }
`;

export const DayCalendarHeadText = styled.p`
  color: #343434;

  /* font-family: Inter; */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 1.12; /* 112.5% */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 14px;
    line-height: 1.28; /* 128.571% */
  }
`;

export const DayCalendarHeadNumber = styled.p`
  color: #343434;

  /* font-family: Inter; */
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: 1.16; /* 116.667% */
  text-transform: uppercase;

  @media screen and (min-width: 768px) {
    font-size: 16px;
    line-height: 1.12; /* 112.5% */
  }
`;
