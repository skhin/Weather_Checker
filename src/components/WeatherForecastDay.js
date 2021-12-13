import React from "react";
import WeatherIcon from "./WeatherIcon";

const WeatherForecastDay = (props) => {
  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div>
      <div className="WeatherForecast-day">{day()}</div>
      <WeatherIcon code={props.data.weather[0].icon} size={25} />
      <div classname="WeatherForecast-temperature">
        <span className="WeatheForecast-maxTemp">
          {Math.round(props.data.temp.max)}°{" "}
        </span>
        |
        <span className="WeatheForecast-minTemp">
          {" "}
          {Math.round(props.data.temp.min)}°
        </span>
      </div>
    </div>
  );
};

export default WeatherForecastDay;
