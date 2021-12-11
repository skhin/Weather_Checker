import React, { useState } from "react";
import axios from "axios";

import WeatherInfo from "./WeatherInfo";

const Weather = (props) => {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  const handleResponse = (response) => {
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
  };

  // search for a new city
  const handleSubmit = (e) => {
    e.preventDefault();
    search();
  };

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  const search = () => {
    const apiKey = "7e0a2a9bd62699b486b833f59a096759";
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  };

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <div className="row">
            <div className="col-9">
              <input
                type="search"
                placeholder="Search for city..."
                className="form-control"
                onChange={handleCityChange}
              />
            </div>
            <div className="col-3">
              <input
                type="submit"
                value="Search"
                className="btn btn-primary w-100"
              />
            </div>
          </div>
        </form>
        <WeatherInfo data={weatherData} />
      </div>
    );
  } else {
    search();
    return "Please hold. Page is Loading...";
  }
};

export default Weather;
