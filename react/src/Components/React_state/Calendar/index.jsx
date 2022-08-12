import React, { Component } from 'react'
import   {format, startOfWeek, addDays, startOfMonth, endOfMonth, endOfWeek, isSameMonth, isSameDay} from 'date-fns';

export default class Calendar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      day: new Date()
    }
  };
  
  const getDatesWeek = (date) => {
    let currentDate = date;
    const week = [];
    for (let day = 0; day < 7; day++) {
      const cloneDate = currentDate;
      week.push(
        <div
          className={`day ${
            isSameMonth(currentDate, activeDate) ? "" : "inactiveDay"
          } ${isSameDay(currentDate, selectedDate) ? "selectedDay" : ""}
          ${isSameDay(currentDate, new Date()) ? "today" : ""}`}
          onClick={() => {
            setSelectedDate(cloneDate);
          }}
        >
          {format(currentDate, "d")}
        </div>
      );
      currentDate = addDays(currentDate, 1);
    }

    
    return <>{week}</>;
  };


  render() {
    return (
      <div className='calendar_container'>
        {/* {getDates()}     */}
        <p>{this.state.day}</p>
      </div>
    )
  }
}
