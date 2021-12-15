import React, { useContext } from "react";
import ForecastCard from "./ForecastCard";
import weatherContext from "./context/weather-context";

const Forecast = () => {
  const { forecast } = useContext(weatherContext);

  return (
    <div className="forecast">
      {forecast.data.length > 0 ? (
        <div className="title">FORECAST FOR THE NEXT FIVE DAYS</div>
      ) : (
        ""
      )}

      <div className="forecast_card_wrap">
        {forecast.data.map((data) => (
          <ForecastCard data={data} />
        ))}
      </div>
    </div>
  );
};

export default Forecast;
