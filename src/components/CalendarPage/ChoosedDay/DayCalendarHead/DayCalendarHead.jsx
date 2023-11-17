import { addDays, format, startOfWeek } from 'date-fns';
import { useParams } from 'react-router-dom';

import {
  ActiveDay,
  DayCalendarHeadDay,
  DayCalendarHeadNumber,
  DayCalendarHeadText,
  DayCalendarHeadWrapper,
} from './DayCalendarHead.styled';

import { useMediaQuery } from 'react-responsive';

function getOtherWeekDays(date) {
  const daysOfWeek = [];
  const startOfWeekDate = startOfWeek(date, { weekStartsOn: 1 });
  
  daysOfWeek.push(format(startOfWeekDate, '	iii-EEEEE-d-dd-MM-yyyy'));
  
  for (let i = 1; i <= 6; i++) {
    const nextDay = addDays(startOfWeekDate, i);
    daysOfWeek.push(format(nextDay, '	iii-EEEEE-d-dd-MM-yyyy'));
  }

  return daysOfWeek;
}

export default function DayCalendarHead() {
  const { currentDay } = useParams();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  const otherWeekDays = getOtherWeekDays(new Date(currentDay));
  return (
    <DayCalendarHeadWrapper>
      {otherWeekDays.map((day) => {
        const [weekDay, weekDayMobile, monthDay, currentDay, month, year] =
          day.split('-');
        return (
          <DayCalendarHeadDay key={day}>
            <DayCalendarHeadText>
              {isMobile ? weekDayMobile : weekDay}
            </DayCalendarHeadText>
            <ActiveDay to={`/calendar/day/${year}-${month}-${currentDay}`}>
              <DayCalendarHeadNumber>{monthDay}</DayCalendarHeadNumber>
            </ActiveDay>
          </DayCalendarHeadDay>
        );
      })}
    </DayCalendarHeadWrapper>
  );
}
