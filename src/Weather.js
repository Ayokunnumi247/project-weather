import React, { useState } from "react";
import ForecastDate from "./ForecastDate";
import axios from "axios";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ loaded: false });

  function handleResponse(response) {
    setWeatherData({
      loaded: true,
      city: response.data.name,
      temperature: response.data.temperature.current,
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      description: response.data.condition.description,
      iconUrl:
        "http://shecodes-assets.s3.amazonaws.com/api/weather/icons/scattered-clouds-day.png",
      date: new Date(response.data.time * 1000),
    });
  }

  if (weatherData.loaded) {
    return (
      <div className="Weather border rounded">
        <form>
          <input
            type="search"
            placeholder="Enter a city"
            className=" rounded w-75 p-2"
          />
          <input
            type="submit"
            value="search"
            className="btn btn-primary rounded m-3 p-2 "
          />
        </form>
        <h1>{props.defaultCity}</h1>
        <ul>
          <li>
            <ForecastDate date={weatherData.date} />
          </li>
          <li className="text-capitalize">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <img src={weatherData.iconUrl} alt="icon" />
            <strong> {Math.round(weatherData.temperature)}</strong>
            <span className="degree">°c</span>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind: {weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
      </div>
    );
  } else {
    const apikey = "8e4efa33a280aof6c33fe6a0t3ab54ec";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${props.defaultCity}&key=${apikey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);

    return "loading..";
  }
}
