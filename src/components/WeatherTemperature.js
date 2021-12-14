import React, { useState } from "react";

const WeatherTemperature = (props) => {
  // default unit state will be celsius
  const [unit, setUnit] = useState("celsius");

  const showFahrenheit = (event) => {
    event.preventDefault();
    setUnit("fahrenheit");
  };

  const showCelsius = (event) => {
    event.preventDefault();
    setUnit("celsius");
  };

  const fahrenheit = () => {
    return (props.celsius * 9) / 5 + 32;
  };

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(props.celsius)}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemperature">
        <span className="temperature">{Math.round(fahrenheit())}</span>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
};

export default WeatherTemperature;
