import React from "react";

export default function WeatherTemperature(props) {
  return (
    <div className="WeatherTemperature">
      <strong> {Math.round(props.celsius)}</strong>
      <span className="unit">°C</span>
    </div>
  );
}
