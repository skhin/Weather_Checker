import React, { useState } from "react";
import axios from "axios";
import Search from "./Search";
import FormatDate from "./FormatDate";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });

  function handleResponse(response) {
    console.log(response.data);
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.main.temp),
      city: response.data.name,
      description: response.data.weather[0].description,
      sunrise: response.data.sys.sunrise,
      sunset: response.data.sys.sunset,
      date: new Date(response.data.dt * 1000),
    });
  }
};

if (weatherData.ready) {
  return (
    <>
      <Search defaultCity="Singapore" />
      <br />
      <div className="container default-city">
        <div className="row align-items-start">
          <div className="col-md-6">
            <h2>{weatherData.city}</h2>
            <ul className="city-list">
              <li className="city-date">
                <FormatDate date={weatherData.date} />
              </li>

              <li className="city-desc">{weatherData.description}</li>
            </ul>
            <div className="row">
              <div className="col-6 icon-img">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                <span className="temp">
                  <strong>{weatherData.temperature} </strong>
                </span>
                <span className="unit">℃</span>
                <br />

                <ul className="sun-times">
                  <li>🌅 Sunrise: {weatherData.sunrise}am</li>
                  <li>🌇 Sunset: {weatherData.sunset}pm</li>
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
} else {
  const apiKey = "7e0a2a9bd62699b486b833f59a096759";
  const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);

  return "Please hold. Page is Loading ....";
}

export default Weather;
