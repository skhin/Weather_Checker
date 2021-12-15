import moment from "moment";
import React from "react";

const ForecastCard = ({ data }) => {
  return (
    <div className="forecast_card">
      <p>{data.weather[0].main}</p>
      <p>{moment(data.dt * 1000).format("ddd, D MMM")}</p>
      <img
        src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
        alt="icon"
      />
      <p>
        {Math.round(data.temp.min)} °C | {Math.round(data.temp.max)} °C
      </p>
    </div>
  );
};

export default ForecastCard;
