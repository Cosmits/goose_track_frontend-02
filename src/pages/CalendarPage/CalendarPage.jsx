import { Container, Section } from '../CalendarPage/CalendarPage.styled';
import AppCalendar from '../../components/AppCalendar/AppCalendar';
import CalendarToolBar from '../../components/CalendarToolBar/CalendarToolBar';

const CalendarPage = () => {
  return (
    <Section>
      <Container>
        <AppCalendar toolbar={CalendarToolBar}/>
      </Container>
    </Section>
  );
};

export default CalendarPage;