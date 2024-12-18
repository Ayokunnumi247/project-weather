import React, { useState } from "react";
import WeatherData from "./WeatherData";
import WeatherForecast from "./WeatherForecast";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [city, setCity] = useState(props.defaultCity);
  const [WeatherInfo, setWeatherInfo] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherInfo({
      loaded: true,
      coordinates: response.data.coordinates,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      icon: response.data.condition.icon,
      date: response.data.time * 1000,
      city: response.data.city,
    });
  }
  function handleSubmit(event) {
    event.preventDefault();
    search();
  }
  function searchCity(event) {
    setCity(event.target.value);
  }
  function search() {
    const apikey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (WeatherInfo.loaded) {
    return (
      <div className="Weather border rounded">
        <form onSubmit={handleSubmit}>
          <input
            type="search"
            placeholder="Enter a city"
            className=" rounded w-75 p-2"
            onChange={searchCity}
          />
          <input
            type="submit"
            value="search"
            className="btn btn-primary btn-md rounded  m-3 p-2 button"
          />
        </form>
        <WeatherData data={WeatherInfo} />
        <WeatherForecast coordinates={WeatherInfo.coordinates} />
      </div>
    );
  } else {
    search();

    return "loading..";
  }
}
