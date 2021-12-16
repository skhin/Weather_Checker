import React from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import WeatherInfo from "./components/WeatherInfo";
import Forecast from "./components/Forecast";

const App = () => {
  return (
    <div className="container clearfix">
      <Header />
      <SearchForm />
      <WeatherInfo />
      <Forecast />
    </div>
  );
};

export default App;
