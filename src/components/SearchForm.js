import axios from "axios";
import moment from "moment";
import React, { useState, useContext } from "react";
import WeatherContext from "../context/weather-context";

const SearchForm = () => {
  const [search, setSearch] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { actionSearchCity } = useContext(WeatherContext);

  const ApiKey = process.env.REACT_APP_API_KEY;

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!search) {
      alert("Please enter city name to search !");
      return false;
    }

    setIsLoading(true);
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${search}&units=metric&appid=${ApiKey}`
      );
      const res = await axios.get(
        `https://api.openweathermap.org/data/2.5/onecall?lat=${response.data.city.coord.lat}&lon=${response.data.city.coord.lon}&exclude=minutely,hourly&units=metric&appid=${ApiKey}`
      );

      const { dt, weather, temp, sunrise, sunset } = res.data.current;
      console.log(response);

      const currentData = {
        id: new Date().getTime(),
        cityName: search,
        date: moment(dt * 1000).format("ddd, D MMM"),
        time: dt,
        cond: weather[0].main,
        icon: weather[0].icon,
        temp,
        sunrise: sunrise,
        sunset: sunset,
        forecast: res.data.daily.slice(1, 6),
      };

      actionSearchCity(currentData);
    } catch (error) {
      alert("City not found !");
    } finally {
      setSearch("");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSearch} className="search_form">
      <input
        onChange={(e) => setSearch(e.target.value)}
        value={search}
        type="text"
        placeholder="Search City..."
      />
      <input
        type="submit"
        disabled={isLoading}
        value={isLoading ? "Loading..." : "Search"}
      />
    </form>
  );
};

export default SearchForm;
