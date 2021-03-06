import React from "react";

const FormattedDate = (props) => {
  let now = new Date();
  let days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
  let months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  let day = days[now.getDay()];
  let month = months[now.getMonth()];
  let date = now.getDate();

  ///////////////////////////////////////////

  // Time
  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }

  let hours = props.date.getHours();
  if (hours < 12) {
    hours = `0${hours}:${minutes}am`;
  } else if (hours > 12 && hours < 24) {
    hours = `${hours - 12}:${minutes}pm`;
  }

  return (
    <>
      <div className="city-date">
        {day}, {date} {month}
      </div>
      <div className="city-time">{hours}</div>
    </>
  );
};

export default FormattedDate;
