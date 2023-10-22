import {  useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { AppCalendarGlobalStyles } from './AppCalendar.styled';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import taskList from '../../mock/tasks';
import { useNavigate } from 'react-router-dom';

moment.locale('uk', {
  week: {
    dow: 1,
  },
});

const localizer = momentLocalizer(moment);

const data = (date, start, end) => {
  const [year, month, day] = date.split('-');
  const [startHour, startMin] = start.split(':');
  const [endHour, endMin] = end.split(':');

  return {
    eventStart: new Date(year, month - 1, day, startHour, startMin),
    eventEnd: new Date(year, month - 1, day, endHour, endMin),
  };
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

const AppCalendar = ({ toolbar }) => {
  const [task, setTask] = useState([]);
  const navigate = useNavigate();

  const listModifier = (list) => {
    const newList = list.map((item) => {
      const { date, start, end, title, priority, _id } = item;
      const newDate = data(date, start, end);
      return {
        id: _id.$oid,
        title: title,
        allDay: true,
        start: newDate.eventStart,
        end: newDate.eventEnd,
        priority: priority,
      };
    });

    setTask(newList);
  };

  useEffect(() => {
    listModifier(taskList);
  }, []);

  const handleNavigate = (date) => {
    const formattedDate = moment(date).format('YYYY-MM-DD');
    navigate(`/calendar/day/${formattedDate}`);
  };

  return (
    <>
      <Calendar
        formats={formats}
        views={['month']}
        localizer={localizer}
        events={task}
        components={{ toolbar: toolbar }}
        eventPropGetter={eventStyleGetter}
        showAllEvents={true}
        onSelectSlot={(slotInfo) => handleNavigate(slotInfo.start)}
        onSelectEvent={handleNavigate}
        selectable
      />
      <AppCalendarGlobalStyles />
    </>
  );
}

export default AppCalendar;