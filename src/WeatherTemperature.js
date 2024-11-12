import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(props.celsius)}</strong>
        <span className="unit">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            {" "}
            °F{" "}
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = props.celsius * 1.8 + 32;
    return (
      <div className="WeatherTemperature">
        <strong> {Math.round(fahrenheit)}</strong>
        <span className="unit">
          <a href="/" onClick={showCelsius}>
            °C{" "}
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
