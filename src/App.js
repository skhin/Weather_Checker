import React from "react";
import Weather from "./components/Weather";

function App() {
  return (
    <>
      <header>WEATHER CHECKER</header>
      <Weather defaultCity="Singapore" />
    </>
  );
}

export default App;
