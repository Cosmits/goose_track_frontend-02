import { useEffect, useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { useNavigate } from 'react-router-dom';
import { format, startOfToday } from 'date-fns';

import { useGetMonthlyTasksQuery } from '../../../../redux/tasks/tasksApi';
import { AppCalendarGlobalStyles } from './AppCalendar.styled';

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
  const [currentData, setCurrentData] = useState(format(startOfToday(), 'yyyy-MM'));
  const navigate = useNavigate();

  const { data: tasksData } = useGetMonthlyTasksQuery(currentData, { skip: currentData === undefined });

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
    if (tasksData?.data !== undefined) {
      listModifier(tasksData.data);
    }
  }, [tasksData?.data]);

  const handleNavigate = (slotInfo) => {
    const formattedDate = moment(slotInfo.start).format('YYYY-MM-DD');
    navigate(`/calendar/day/${formattedDate}`);
  };

  const handleNavigateMonth = (date) => {
    if (date !== undefined) {
      setCurrentData(format(date, 'yyyy-MM'));
    }
  };

  return (
    <>
      <Calendar className='calendar-wrapper'
        formats={formats}
        views={['month']}
        localizer={localizer}
        events={task}
        components={{ toolbar: toolbar }}
        eventPropGetter={eventStyleGetter}
        showAllEvents={true}
        onSelectSlot={handleNavigate}
        onSelectEvent={handleNavigate}
        onNavigate={handleNavigateMonth}
        selectable
        longPressThreshold={1}
      />
      <AppCalendarGlobalStyles />
    </>
  );
}

export default AppCalendar;