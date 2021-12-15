import moment from "moment";
import React, { useContext } from "react";
import WeatherContext from "../context/weather-context";
import WeatherTemperature from "./WeatherTemperature";

const WeatherInfoCard = ({ weather }) => {
  const { forecast, actionForecast, actionRemoveWeather } =
    useContext(WeatherContext);

  const targetBody = document.querySelector("body");

  const handleForecast = (weather) => {
    actionForecast(weather.id, weather.forecast);
    if (
      weather.time * 1000 >= weather.sunrise * 1000 &&
      weather.time * 1000 <= weather.sunset * 1000
    ) {
      targetBody.style.color = "#164785";
      targetBody.style.background =
        "linear-gradient(178deg, rgba(201, 234, 252, 0.51) 14.9%, rgba(139, 192, 216, 0.73) 80%)";
    } else {
      targetBody.style.color = "whitesmoke";
      targetBody.style.background =
        "linear-gradient(112.1deg, rgb(32, 38, 57) 11.4%, rgb(63, 76, 119) 70.2%)";
    }
  };

  return (
    <div classname="weatherinfo-card">
      <div
        className={`${
          forecast.id === weather.id ? "weather_card active" : "weather_card"
        }`}
      >
        <h1>{weather.cityName}</h1>
        <p>{weather.date}</p>
        <p>{moment(weather.time * 1000).format("h:mm a")}</p>
        <p>{weather.cond}</p>

        <div className="icon_temp">
          <img
            src={`http://openweathermap.org/img/w/${weather.icon}.png`}
            alt="icon"
          />
          <span>
            <WeatherTemperature celsius={weather.temp} />
          </span>
        </div>
        <br />
        <p>🌅 Sunrise: {moment(weather.sunrise * 1000).format("h:mm a")}</p>
        <p>🌇 Sunset: {moment(weather.sunset * 1000).format("h:mm a")}</p>

        <button onClick={() => handleForecast(weather)}>Forecast</button>
        <button onClick={() => actionRemoveWeather(weather.id)}>Remove</button>
      </div>
    </div>
  );
};

export default WeatherInfoCard;
