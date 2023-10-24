import { addDays, format } from 'date-fns';
import {
  DayCalendarHeadDay,
  DayCalendarHeadNumber,
  DayCalendarHeadText,
  DayCalendarHeadWrapper,
} from './DayCalendarHead.styled';
import { Link, useParams } from 'react-router-dom';

function getOtherWeekDays(date) {
  const daysOfWeek = [];

  // Додаємо поточну дату до масиву
  daysOfWeek.push(format(date, 'EEEEE-d-MM-yyyy'));

  // Додаємо наступні шість днів тижня
  for (let i = 1; i <= 6; i++) {
    const nextDay = addDays(date, i);
    daysOfWeek.push(format(nextDay, 'EEEEE-d-dd-MM-yyyy'));
  }

  return daysOfWeek;
}

export default function DayCalendarHead() {
  const days = [];
  const { currentDay } = useParams();

  const otherWeekDays = getOtherWeekDays(new Date(currentDay));
  return (
    <DayCalendarHeadWrapper>
      {otherWeekDays.map((day) => {
        const [weekDay, monthDay, currentDay, month, year] = day.split('-');
        return (
          <Link key={day} to={`/calendar/day/${year}-${month}-${currentDay}`}>
            <DayCalendarHeadDay>
              <DayCalendarHeadText>{weekDay}</DayCalendarHeadText>
              <DayCalendarHeadNumber>{monthDay}</DayCalendarHeadNumber>
            </DayCalendarHeadDay>
          </Link>
        );
      })}
    </DayCalendarHeadWrapper>
  );
}
