import React, { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { AppCalendarGlobalStyles, Container } from './AppCalendar.styled';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import taskList from '../../mock/tasks';

moment.locale('uk', {
    week: {
        dow: 1,
    },
});

const localizer = momentLocalizer(moment);

// const tasks = [
//   {
//     id: 0,
//     title: 'All Day Event very long title',
//     allDay: true,
//     start: new Date(2023, 9, 7),
//     end: new Date(2023, 9, 7),
//     priority: 'high'
//   },
//   {
//     id: 1,
//     title: 'Long Event',
//     start: new Date(2023, 9, 15),
//     end: new Date(2023, 9, 15),
//     priority: 'low'
//   },
//   {
//     id: 2,
//     title: 'DTS STARTS',
//     start: new Date(2023, 9, 20),
//     end: new Date(2023, 9, 20),
//     priority: 'medium'
//   }
// ];

const data = (date, start, end) => {
  const [year, month, day] = date.split('-')
  const [startHour, startMin] = start.split(':')
  const [endHour, endMin] = end.split(':')
  
  return {
    eventStart: new Date(year, month - 1, day, startHour, startMin),
    eventEnd: new Date(year, month - 1, day, endHour, endMin)
  }
}

function eventStyleGetter(task) {
  let style = {
    backgroundColor: '#3174ad',
  };

  if (task.priority === 'low') {
    style.backgroundColor = '#CEEEFD';
    style.color = '#3E85F3';
  } else if (task.priority === 'medium') {
    style.backgroundColor = '#FCF0D4';
    style.color = '#F3B249';
  } else if (task.priority === 'high') {
    style.backgroundColor = '#FFD2DD';
    style.color = '#EA3D65';
  }

  return {
    style,
  };
}

const formats = {
  dateFormat: (date, culture, localizer) => localizer.format(date, 'D', culture),
};

const AppCalendar = ({toolbar}) => {
  const [task, setTask] = useState([]);

  const listModifier = (list) => {
    const newList = list.map(item => {
      const {date, start, end, title, priority, _id} = item;
      const newDate = data(date, start, end);
      return {
            id: _id.$oid,
            title: title,
            allDay: true,
            start: newDate.eventStart,
            end: newDate.eventEnd,
            priority: priority
          }
    });

    setTask(newList);
  }

  useEffect(() => {
    listModifier(taskList)
  }, []);

  return (
    <>
      <Container>
        <Calendar
          formats={formats}
          views={['month', 'day']}
          localizer={localizer}
          events={task}      
          components={{toolbar: toolbar}}
          eventPropGetter={eventStyleGetter}
          showAllEvents={true}
        />
        <AppCalendarGlobalStyles />
      </Container>
    </>
  )
}

export default AppCalendar;