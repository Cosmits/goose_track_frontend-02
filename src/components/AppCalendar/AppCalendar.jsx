import React from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { AppCalendarGlobalStyles } from './AppCalendar.styled';
import 'react-big-calendar/lib/css/react-big-calendar.css';

moment.locale('ko', {
    week: {
        dow: 1,
        doy: 1,
    },
});

const localizer = momentLocalizer(moment);
const now = Date.now();
const events = [
  {
    id: 0,
    title: 'All Day Event very long title',
    allDay: true,
    start: new Date(2023, 9, 7),
    end: new Date(2023, 9, 7),
  },
  {
    id: 1,
    title: 'Long Event',
    start: new Date(2023, 9, 15),
    end: new Date(2023, 9, 15),
  },
  {
    id: 2,
    title: 'DTS STARTS',
    start: new Date(2023, 9, 20),
    end: new Date(2023, 9, 20),
  }
];

const AppCalendar = ({toolbar}) => {

  return (
    <div className="myCustomHeight">
      <Calendar
        views={['month']}
        localizer={localizer}
        events={events}
        style={{ height: 625, width: '100%' }}
        components={{toolbar: toolbar}}
      />
      <AppCalendarGlobalStyles />
    </div>
  )
}

export default AppCalendar;