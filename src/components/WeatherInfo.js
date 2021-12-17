import React, { useEffect, useState, useContext } from "react";
import WeatherInfoCard from "./WeatherInfoCard";
import axios from "axios";
import moment from "moment";

import WeatherContext from "../context/weather-context";

const defaultCity = ["Singapore", "Brisbane", "Prague"];

const WeatherInfo = () => {
  const [storeData, setStoreData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const { weather, actionDefaultWeather } = useContext(WeatherContext);

  const ApiKey = process.env.REACT_APP_API_KEY;

  const fetchApi = async (dcity) => {
    setIsLoading(true);
    try {
      // fetches current weather
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${dcity}&units=metric&appid=${ApiKey}`
      );

      // fetches forecast data
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.city.coord.lat}&lon=${response.data.city.coord.lon}&exclude=minutely,hourly&units=metric&appid=${ApiKey}`
      );

      console.log("res  ", res);

      const { dt, weather, temp, sunrise, sunset } = res.data.current;

      const currentData = {
        id: new Date().getTime(),
        cityName: dcity,
        date: moment(dt * 1000).format("ddd, D MMM"),
        time: dt,
        cond: weather[0].main,
        icon: weather[0].icon,
        temp: temp,
        sunrise: sunrise,
        sunset: sunset,
        forecast: res.data.daily.slice(1, 6),
      };
      setStoreData((preValue) => [...preValue, currentData]);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    defaultCity.map((dcity) => {
      fetchApi(dcity);
    });
  }, []);

  useEffect(() => {
    actionDefaultWeather(storeData);
  }, [storeData]);

  return (
    <div className="weather_info">
      {isLoading ? (
        <h3>Loading...</h3>
      ) : (
        weather.map((weather, ind) => (
          <WeatherInfoCard key={ind} weather={weather} />
        ))
      )}
    </div>
  );
};

export default WeatherInfo;
