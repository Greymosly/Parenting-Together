import React from "react";
import Calendar from "@ericz1803/react-google-calendar";
import { css } from "@emotion/react";

const API_KEY = "AIzaSyCfKe5_FZWDA7IYAIok5_jQcw8tWjWIB_Q";
let calendars = [{ calendarId: "bottegajohngreenlaw@gmail.com" }];

let styles = {
  today: css`
    color: teal;
    border: 1px solid teal;
  `,
};

class CalendarItem extends React.Component {
  render() {
    return (
      <div>
        <Calendar apiKey={API_KEY} calendars={calendars} styles={styles} />
      </div>
    );
  }
}

export default CalendarItem;
