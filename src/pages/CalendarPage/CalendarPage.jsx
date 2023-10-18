import { Section } from '../CalendarPage/CalendarPage.styled';
import AppCalendar from '../../components/AppCalendar/AppCalendar';
import CalendarToolBar from '../../components/CalendarToolBar/CalendarToolBar';

const CalendarPage = () => {
  return (
    <Section>
      <AppCalendar toolbar={CalendarToolBar}/>
    </Section>
  );
};

export default CalendarPage;