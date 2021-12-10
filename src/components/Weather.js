import React from "react";
import Search from "./Search";

const Weather = () => {
  return (
    <>
      <Search />
      <br />
      <div class="container default-city">
        <div class="row align-items-start">
          <div class="col-md-6">
            <h2>Singapore</h2>
            <ul className="city-list">
              <li className="city-date">Sat, 11 Dec</li>
              <li className="city-time">12.09am</li>
              <li className="city-desc">Mostly Cloudy</li>
            </ul>
            <div className="row">
              <div className="col-6 icon-img">
                <img
                  src="https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png"
                  alt="Mostly Cloudy"
                />
                <span className="temp">
                  <strong>25 </strong>
                </span>
                <span className="unit">℃</span>
                <ul className="sun-times">
                  <li>Sunrise: 06.56am</li>
                  <li>Sunset: 06.59pm</li>
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
};

export default Weather;
