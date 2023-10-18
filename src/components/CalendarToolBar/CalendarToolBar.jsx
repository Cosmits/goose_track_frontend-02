import React from 'react'
import Datepicker from '../Datepicker/Datepicker';

const CalendarToolBar = ({onNavigate}) => {

  return (
    <div>
      <Datepicker onDateChange={onNavigate}/>
    </div>
  )
}

export default CalendarToolBar;
