import React, { useReducer } from "react";
import WeatherContext from "./weather-context";
import weatherReducer from "./weather-reducer";

import * as weatherTypes from "./weather-type";

const WeatherState = (props) => {
  const intialState = {
    weather: [],
    forecast: [],
  };

  const [state, dispatch] = useReducer(weatherReducer, intialState);

  const actionDefaultWeather = (weather) => {
    dispatch({
      type: weatherTypes.DEFAULT_WEATHER,
      payload: weather,
    });
  };

  const actionForecast = (id, data) => {
    dispatch({
      type: weatherTypes.FORECAST,
      payload: { id, data },
    });
  };

  const actionSearchCity = (city) => {
    dispatch({
      type: weatherTypes.SEARCH_CITY,
      payload: city,
    });
  };

  const actionRemoveWeather = (id) => {
    dispatch({
      type: weatherTypes.REMOVE_WEATHER,
      payload: id,
    });
  };

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        forecast: state.forecast,
        actionDefaultWeather,
        actionForecast,
        actionSearchCity,
        actionRemoveWeather,
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};

export default WeatherState;
