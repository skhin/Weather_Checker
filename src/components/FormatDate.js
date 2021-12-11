import React from "react";

const FormatDate = (props) => {
  console.log(props.date);

  // Day, Date, Month
  //   let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  //   let day = days[props.date.getDay()];

  //   let month = [
  //     "Jan",
  //     "Feb",
  //     "Mar",
  //     "Apr",
  //     "May",
  //     "Jun",
  //     "Jul",
  //     "Aug",
  //     "Sep",
  //     "Oct",
  //     "Nov",
  //     "Dec",
  //   ];

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
    "Nove",
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

export default FormatDate;
