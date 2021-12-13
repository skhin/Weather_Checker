import React from "react";
import FormatDate from "./FormatDate";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <>
      <div className="container default-city">
        <div className="row align-items-start">
          <div className="col-md-6">
            <h2>{props.data.city}</h2>
            <ul className="city-list">
              <li className="city-date">
                <FormatDate date={props.data.date} />
              </li>

              <li className="city-desc">{props.data.description}</li>
            </ul>
            <div className="row">
              <div className="col-6 icon-img">
                <img src={props.data.icon} alt={props.data.description} />
                <WeatherTemperature celsius={props.data.temperature} />
              </div>
              <br />

              <ul className="sun-times">
                <li>🌅 Sunrise: {props.data.sunrise}am</li>
                <li>🌇 Sunset: {props.data.sunset}pm</li>
              </ul>
            </div>
          </div>
        </div>
        <br />
        <button>FORECAST</button>
        <button>REMOVE CITY</button>
      </div>
    </>
  );
};

export default WeatherInfo;
