import React from "react";
import FormatDate from "./FormatDate";

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
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                <span className="temp">
                  <strong>{props.data.temperature} </strong>
                </span>
                <span className="unit">℃</span>
                <br />

                <ul className="sun-times">
                  <li>🌅 Sunrise: {props.data.sunrise}am</li>
                  <li>🌇 Sunset: {props.data.sunset}pm</li>
                </ul>
              </div>
            </div>
          </div>
          <button>FORECAST</button>
          <button>REMOVE CITY</button>
        </div>
      </div>
    </>
  );
};

export default WeatherInfo;
