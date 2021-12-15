import * as weatherTypes from "./weather-type";

const weatherReducer = (state, action) => {
  switch (action.type) {
    case weatherTypes.DEFAULT_WEATHER:
      return {
        ...state,
        weather: action.payload,
      };

    case weatherTypes.FORECAST:
      const { id, data } = action.payload;
      return {
        ...state,

        forecast: { id, data },
      };

    case weatherTypes.SEARCH_CITY:
      return {
        ...state,
        weather: [action.payload, ...state.weather],
      };

    case weatherTypes.REMOVE_WEATHER:
      return {
        ...state,
        weather: state.weather.filter((item) => item.id !== action.payload),
        forecast: state.forecast.id === action.payload ? [] : state.forecast,
      };
    default:
      return state;
  }
};

export default weatherReducer;
