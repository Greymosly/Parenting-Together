import React, { Component } from "react";

import CalendarItem from "../calendarItem";

export default class Calendar extends Component {
  render() {
    return (
      <div className="calendar-wrapper">
        <div className="calendar-wrapper__calendar-item">
          <CalendarItem />
        </div>
      </div>
    );
  }
}
