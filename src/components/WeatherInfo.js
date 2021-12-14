import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfo = (props) => {
  return (
    <div className="WeatherInfo">
      <h1>{props.data.city}</h1>
      <ul className="searchResults">
        <li>
          <FormattedDate date={props.data.date} />
        </li>
        <li className="text-capitalize">{props.data.description}</li>{" "}
      </ul>
      <br />
      <div className="float-left">
        <div className="icon">
          <WeatherIcon code={props.data.icon} size={42} />
        </div>
      </div>
      <div className="d-flex">
        <WeatherTemperature celsius={props.data.temperature} />
      </div>
      <br />
      <ul>
        <li>Humidity: {props.data.humidity}%</li>
        <li>Wind: {props.data.wind} km/h</li>
      </ul>
      <div className="row mt-3">
        <div className="col-3">
          <div className="d-flex">
            <div className="float-left">
              <button>FORECAST</button>
              <button>REMOVE CITY</button>
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default WeatherInfo;
